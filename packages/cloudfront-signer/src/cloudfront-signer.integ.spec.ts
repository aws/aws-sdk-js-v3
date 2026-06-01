import { createVerify, generateKeyPairSync } from "node:crypto";
import { describe, expect, test as it } from "vitest";

import { getSignedCookies, getSignedUrl } from "./index";

/**
 * Integration tests for CloudFront signer SHA-256 support.
 * These tests use dynamically generated RSA keys and verify
 * end-to-end signing behavior without calling AWS services.
 */
describe("cloudfront-signer SHA-256 integration", () => {
  const { privateKey, publicKey } = generateKeyPairSync("rsa", {
    modulusLength: 2048,
    privateKeyEncoding: { type: "pkcs1", format: "pem" },
    publicKeyEncoding: { type: "pkcs1", format: "pem" },
  });

  const keyPairId = "K2JCJMDEHXQW7F";
  const url = "https://d111111abcdef8.cloudfront.net/images/photo.jpg";
  const dateLessThan = "2030-01-01T00:00:00Z";

  function verifySignature(policy: string, signature: string, algorithm: "RSA-SHA1" | "RSA-SHA256"): boolean {
    // Denormalize CloudFront base64
    const standardBase64 = signature.replace(/-/g, "+").replace(/_/g, "=").replace(/~/g, "/");
    const verifier = createVerify(algorithm);
    verifier.update(policy);
    return verifier.verify(publicKey, standardBase64, "base64");
  }

  describe("getSignedUrl", () => {
    it("should produce a verifiable RSA-SHA256 signature with canned policy", () => {
      const signedUrl = getSignedUrl({
        url,
        keyPairId,
        dateLessThan,
        privateKey,
        algorithm: "SHA256",
      });

      const urlObj = new URL(signedUrl);
      expect(urlObj.searchParams.get("Hash-Algorithm")).toBe("SHA256");
      expect(urlObj.searchParams.get("Key-Pair-Id")).toBe(keyPairId);

      const signature = urlObj.searchParams.get("Signature")!;
      const epochTime = Math.round(new Date(dateLessThan).getTime() / 1000);
      const expectedPolicy = JSON.stringify({
        Statement: [{ Resource: url, Condition: { DateLessThan: { "AWS:EpochTime": epochTime } } }],
      });

      expect(verifySignature(expectedPolicy, signature, "RSA-SHA256")).toBe(true);
      // Verify it does NOT validate with SHA1
      expect(verifySignature(expectedPolicy, signature, "RSA-SHA1")).toBe(false);
    });

    it("should produce a verifiable RSA-SHA1 signature by default", () => {
      const signedUrl = getSignedUrl({
        url,
        keyPairId,
        dateLessThan,
        privateKey,
      });

      const urlObj = new URL(signedUrl);
      expect(urlObj.searchParams.get("Hash-Algorithm")).toBeNull();

      const signature = urlObj.searchParams.get("Signature")!;
      const epochTime = Math.round(new Date(dateLessThan).getTime() / 1000);
      const expectedPolicy = JSON.stringify({
        Statement: [{ Resource: url, Condition: { DateLessThan: { "AWS:EpochTime": epochTime } } }],
      });

      expect(verifySignature(expectedPolicy, signature, "RSA-SHA1")).toBe(true);
    });

    it("should produce a verifiable RSA-SHA256 signature with custom policy", () => {
      const customPolicy = JSON.stringify({
        Statement: [
          {
            Resource: "https://d111111abcdef8.cloudfront.net/*",
            Condition: {
              DateLessThan: { "AWS:EpochTime": 1893456000 },
              IpAddress: { "AWS:SourceIp": "192.168.1.0/24" },
            },
          },
        ],
      });

      const signedUrl = getSignedUrl({
        url,
        keyPairId,
        privateKey,
        policy: customPolicy,
        algorithm: "SHA256",
      });

      const urlObj = new URL(signedUrl);
      expect(urlObj.searchParams.get("Hash-Algorithm")).toBe("SHA256");
      expect(urlObj.searchParams.get("Policy")).toBeDefined();

      const signature = urlObj.searchParams.get("Signature")!;
      expect(verifySignature(customPolicy, signature, "RSA-SHA256")).toBe(true);
    });
  });

  describe("getSignedCookies", () => {
    it("should produce a verifiable RSA-SHA256 signature in cookies", () => {
      const cookies = getSignedCookies({
        url,
        keyPairId,
        dateLessThan,
        privateKey,
        algorithm: "SHA256",
      });

      expect(cookies["CloudFront-Key-Pair-Id"]).toBe(keyPairId);
      expect(cookies["CloudFront-Hash-Algorithm"]).toBe("SHA256");

      const epochTime = Math.round(new Date(dateLessThan).getTime() / 1000);
      const expectedPolicy = JSON.stringify({
        Statement: [{ Resource: url, Condition: { DateLessThan: { "AWS:EpochTime": epochTime } } }],
      });

      expect(verifySignature(expectedPolicy, cookies["CloudFront-Signature"], "RSA-SHA256")).toBe(true);
    });

    it("should not include CloudFront-Hash-Algorithm when using default", () => {
      const cookies = getSignedCookies({
        url,
        keyPairId,
        dateLessThan,
        privateKey,
      });
      expect(cookies["CloudFront-Hash-Algorithm"]).toBeUndefined();
    });
  });

  describe("algorithm backward compatibility", () => {
    it("should default to SHA1 when algorithm is not specified", () => {
      const signedUrl = getSignedUrl({ url, keyPairId, dateLessThan, privateKey });
      const urlObj = new URL(signedUrl);
      expect(urlObj.searchParams.get("Hash-Algorithm")).toBeNull();
      expect(urlObj.searchParams.get("Expires")).toBeDefined();
    });

    it("should explicitly accept SHA1 algorithm", () => {
      const signedUrl = getSignedUrl({ url, keyPairId, dateLessThan, privateKey, algorithm: "SHA1" });
      const urlObj = new URL(signedUrl);
      expect(urlObj.searchParams.get("Hash-Algorithm")).toBeNull();
    });
  });
});

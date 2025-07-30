import { createSign } from "crypto";

/**
 * Input type to getSignedUrl and getSignedCookies.
 * @public
 */
export type CloudfrontSignInput = CloudfrontSignInputWithParameters | CloudfrontSignInputWithPolicy;

/**
 * @public
 */
export type CloudfrontSignerCredentials = {
  /** The ID of the Cloudfront key pair. */
  keyPairId: string;

  /** The content of the Cloudfront private key. */
  privateKey: string | Buffer;

  /** The passphrase of RSA-SHA1 key*/
  passphrase?: string;
};

/**
 * @public
 */
export type CloudfrontSignInputWithParameters = CloudfrontSignerCredentials & {
  /** The URL string to sign. */
  url: string;

  /** The date string for when the signed URL or cookie can no longer be accessed */
  dateLessThan: string | number | Date;

  /** The date string for when the signed URL or cookie can start to be accessed. */
  dateGreaterThan?: string | number | Date;

  /** The IP address string to restrict signed URL access to. */
  ipAddress?: string;

  /**
   * [policy] should not be provided when using separate
   * dateLessThan, dateGreaterThan, or ipAddress inputs.
   */
  policy?: never;
};

/**
 * @public
 */
export type CloudfrontSignInputWithPolicy = CloudfrontSignerCredentials & {
  /**
   * The URL string to sign. Optional when policy is provided.
   *
   * This will be used as the initial url if calling getSignedUrl
   * with a policy.
   *
   * This will be ignored if calling getSignedCookies with a policy.
   */
  url?: string;

  /** The JSON-encoded policy string */
  policy: string;

  /** When using a policy, a separate dateLessThan should not be provided. */
  dateLessThan?: never;

  /** When using a policy, a separate dateGreaterThan should not be provided. */
  dateGreaterThan?: never;

  /** When using a policy, a separate ipAddress should not be provided.  */
  ipAddress?: never;
};

/**
 * @public
 */
export interface CloudfrontSignedCookiesOutput {
  /** ID of the Cloudfront key pair. */
  "CloudFront-Key-Pair-Id": string;

  /** Hashed, signed, and base64-encoded version of the JSON policy. */
  "CloudFront-Signature": string;

  /** The unix date time for when the signed URL or cookie can no longer be accessed. */
  "CloudFront-Expires"?: number;

  /** Base64-encoded version of the JSON policy. */
  "CloudFront-Policy"?: string;
}

/**
 * Creates a signed URL string using a canned or custom policy.
 * @public
 * @returns the input URL with signature attached as query parameters.
 */
export function getSignedUrl({
  dateLessThan,
  dateGreaterThan,
  url,
  keyPairId,
  privateKey,
  ipAddress,
  policy,
  passphrase,
}: CloudfrontSignInput): string {
  const cloudfrontSignBuilder = new CloudfrontSignBuilder({
    keyPairId,
    privateKey,
    passphrase,
  });

  if (!url && !policy) {
    throw new Error("@aws-sdk/cloudfront-signer: Please provide 'url' or 'policy'.");
  }

  if (policy) {
    cloudfrontSignBuilder.setCustomPolicy(policy);
  } else {
    cloudfrontSignBuilder.setPolicyParameters({
      url,
      dateLessThan,
      dateGreaterThan,
      ipAddress,
    });
  }

  let baseUrl: string | undefined;
  if (url) {
    baseUrl = url;
  } else if (policy) {
    const resources = getPolicyResources(policy!);
    if (!resources[0]) {
      throw new Error(
        "@aws-sdk/cloudfront-signer: No URL provided and unable to determine URL from first policy statement resource."
      );
    }
    baseUrl = resources[0].replace("*://", "https://");
  }

  const startFlag = baseUrl!.includes("?") ? "&" : "?";
  const params = Object.entries(cloudfrontSignBuilder.createCloudfrontAttribute())
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
  const urlString = baseUrl + startFlag + params;

  return getResource(urlString);
}

/**
 * Creates signed cookies using a canned or custom policy.
 * @public
 * @returns an object with keys/values that can be added to cookies.
 */
export function getSignedCookies({
  ipAddress,
  url,
  privateKey,
  keyPairId,
  dateLessThan,
  dateGreaterThan,
  policy,
  passphrase,
}: CloudfrontSignInput): CloudfrontSignedCookiesOutput {
  const cloudfrontSignBuilder = new CloudfrontSignBuilder({
    keyPairId,
    privateKey,
    passphrase,
  });
  if (policy) {
    cloudfrontSignBuilder.setCustomPolicy(policy);
  } else {
    cloudfrontSignBuilder.setPolicyParameters({
      url,
      dateLessThan,
      dateGreaterThan,
      ipAddress,
    });
  }
  const cloudfrontCookieAttributes = cloudfrontSignBuilder.createCloudfrontAttribute();
  const cookies: CloudfrontSignedCookiesOutput = {
    "CloudFront-Key-Pair-Id": cloudfrontCookieAttributes["Key-Pair-Id"],
    "CloudFront-Signature": cloudfrontCookieAttributes["Signature"],
  };
  if (cloudfrontCookieAttributes["Expires"]) {
    cookies["CloudFront-Expires"] = cloudfrontCookieAttributes["Expires"];
  }
  if (cloudfrontCookieAttributes["Policy"]) {
    cookies["CloudFront-Policy"] = cloudfrontCookieAttributes["Policy"];
  }
  return cookies;
}

/**
 * @internal
 */
interface Policy {
  Statement: Array<{
    Resource: string;
    Condition: {
      DateLessThan: {
        "AWS:EpochTime": number;
      };
      IpAddress?: {
        "AWS:SourceIp": string;
      };
      DateGreaterThan?: {
        "AWS:EpochTime": number;
      };
    };
  }>;
}

/**
 * @internal
 */
interface PolicyDates {
  dateLessThan: number;
  dateGreaterThan?: number;
}

/**
 * @internal
 */
interface BuildPolicyInput extends PolicyDates, Pick<CloudfrontSignInput, "ipAddress"> {
  resource: string;
}

/**
 * @internal
 */
interface CloudfrontAttributes {
  Expires?: number;
  Policy?: string;
  "Key-Pair-Id": string;
  Signature: string;
}

/**
 * Utility to get the allowed resources of a policy.
 * @internal
 *
 * @param policy - The JSON/JSON-encoded policy
 */
function getPolicyResources(policy: string | Policy) {
  const parsedPolicy: Policy = typeof policy === "string" ? JSON.parse(policy) : policy;
  return (parsedPolicy?.Statement ?? []).map((s) => s.Resource);
}

/**
 * @internal
 */
function getResource(urlString: string): string {
  const protocol = urlString.slice(0, urlString.indexOf("//"));
  switch (protocol) {
    case "http:":
    case "https:":
    case "ws:":
    case "wss:":
      return urlString;
    case "rtmp:":
      const url = new URL(urlString);
      return url.pathname.replace(/^\//, "") + url.search + url.hash;
    default:
      throw new Error("Invalid URI scheme. Scheme must be one of http, https, or rtmp");
  }
}

/**
 * @internal
 */
class CloudfrontSignBuilder {
  private keyPairId: string;
  private privateKey: string | Buffer;
  private passphrase?: string;
  private policy: string;
  private customPolicy = false;
  private dateLessThan?: number | undefined;

  constructor({ privateKey, keyPairId, passphrase }: CloudfrontSignerCredentials) {
    this.keyPairId = keyPairId;
    this.privateKey = privateKey;
    this.policy = "";
    this.passphrase = passphrase;
  }

  private buildPolicy(args: BuildPolicyInput): Policy {
    const policy: Policy = {
      Statement: [
        {
          Resource: args.resource,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": args.dateLessThan,
            },
          },
        },
      ],
    };
    if (args.dateGreaterThan) {
      policy.Statement[0].Condition["DateGreaterThan"] = {
        "AWS:EpochTime": args.dateGreaterThan,
      };
    }
    if (args.ipAddress) {
      const cidr = this.parseCIDR(args.ipAddress);
      policy.Statement[0].Condition["IpAddress"] = {
        "AWS:SourceIp": cidr,
      };
    }
    return policy;
  }

  private normalizeBase64(str: string): string {
    const replacements = {
      "+": "-",
      "=": "_",
      "/": "~",
    } as Record<string, string>;
    return str.replace(/[+=/]/g, function (match) {
      return replacements[match];
    });
  }

  private encodeToBase64(str: string): string {
    return this.normalizeBase64(Buffer.from(str).toString("base64"));
  }

  private validateIP(ipStr: string): void {
    const octets = ipStr.split(".");
    if (octets.length !== 4) {
      throw new Error(`IP does not contain four octets.`);
    }
    const isValid = octets.every((octet: string) => {
      const num = Number(octet);
      return Number.isInteger(num) && num >= 0 && num <= 255;
    });
    if (!isValid) {
      throw new Error("invalid IP octets");
    }
  }

  private validateMask(maskStr: string): void {
    const mask = Number(maskStr);
    const isValid = Number.isInteger(mask) && mask >= 0 && mask <= 32;
    if (!isValid) {
      throw new Error("invalid mask");
    }
  }

  private parseCIDR(cidrStr: string): string {
    try {
      const cidrParts = cidrStr.split("/");
      if (cidrParts.some((part: string) => part.length === 0)) {
        throw new Error("missing ip or mask part of CIDR");
      }
      this.validateIP(cidrParts[0]);
      let mask = "32";
      if (cidrParts.length === 2) {
        this.validateMask(cidrParts[1]);
        mask = cidrParts[1];
      }
      return `${cidrParts[0]}/${mask}`;
    } catch (error) {
      const errMessage = `IP address "${cidrStr}" is invalid`;
      if (error instanceof Error) {
        throw new Error(`${errMessage} due to ${error.message}.`);
      } else {
        throw new Error(`${errMessage}.`);
      }
    }
  }

  private epochTime(date: Date): number {
    return Math.round(date.getTime() / 1000);
  }

  private parseDate(date?: string | number | Date): number | undefined {
    if (!date) {
      return undefined;
    }
    const parsedDate = new Date(date);
    return isNaN(parsedDate.getTime()) ? undefined : this.epochTime(parsedDate);
  }

  private parseDateWindow(expiration: string | number | Date, start?: string | number | Date): PolicyDates {
    const dateLessThan = this.parseDate(expiration);
    if (!dateLessThan) {
      throw new Error("dateLessThan is invalid. Ensure the date value is compatible with the Date constructor.");
    }
    return {
      dateLessThan,
      dateGreaterThan: this.parseDate(start),
    };
  }

  private signData(data: string, privateKey: string | Buffer, passphrase?: string): string {
    const sign = createSign("RSA-SHA1");
    sign.update(data);
    return sign.sign({ key: privateKey, passphrase }, "base64");
  }

  private signPolicy(policy: string, privateKey: string | Buffer, passphrase?: string): string {
    return this.normalizeBase64(this.signData(policy, privateKey, passphrase));
  }

  setCustomPolicy(policy: string) {
    this.customPolicy = true;
    this.policy = policy;
  }

  setPolicyParameters({
    url,
    dateLessThan,
    dateGreaterThan,
    ipAddress,
  }: {
    url?: string;
    dateLessThan?: string | number | Date;
    dateGreaterThan?: string | number | Date;
    ipAddress?: string;
  }) {
    if (!url || !dateLessThan) {
      return false;
    }
    const resource = getResource(url);
    const parsedDates = this.parseDateWindow(dateLessThan, dateGreaterThan);
    this.dateLessThan = parsedDates.dateLessThan;
    this.customPolicy = Boolean(parsedDates.dateGreaterThan) || Boolean(ipAddress);
    this.policy = JSON.stringify(
      this.buildPolicy({
        resource,
        ipAddress,
        dateLessThan: parsedDates.dateLessThan,
        dateGreaterThan: parsedDates.dateGreaterThan,
      })
    );
  }

  createCloudfrontAttribute(): CloudfrontAttributes {
    if (!Boolean(this.policy)) {
      throw new Error("Invalid policy");
    }
    const signature = this.signPolicy(this.policy, this.privateKey, this.passphrase);
    return {
      Expires: this.customPolicy ? undefined : this.dateLessThan,
      Policy: this.customPolicy ? this.encodeToBase64(this.policy) : undefined,
      "Key-Pair-Id": this.keyPairId,
      Signature: signature,
    };
  }
}

/**
 * @deprecated use CloudfrontSignInput, CloudfrontSignInputWithParameters, or CloudfrontSignInputWithPolicy.
 */
export type CloudfrontSignInputBase = {
  url: string;
  keyPairId: string;
  privateKey: string | Buffer;
  passphrase?: string;
  dateLessThan?: string;
  ipAddress?: string;
  dateGreaterThan?: string;
};

import { afterEach, beforeEach, describe, expect, test as it } from "vitest";

import { getDefaultSocketTimeout } from "./getDefaultSocketTimeout";

const ENV = "AWS_ENABLE_DEFAULT_SOCKET_TIMEOUT_2026";

describe("default socket timeout", () => {
  const savedEnv = process.env[ENV];

  beforeEach(() => {
    delete process.env[ENV];
  });

  afterEach(() => {
    if (savedEnv === undefined) {
      delete process.env[ENV];
    } else {
      process.env[ENV] = savedEnv;
    }
  });

  describe("gate", () => {
    it("is off by default", () => {
      expect(getDefaultSocketTimeout(undefined, 900000)).toBeUndefined();
    });

    it('is on for "true"', () => {
      process.env[ENV] = "true";
      expect(getDefaultSocketTimeout(undefined, 900000)).toBe(900000);
    });

    it.each(["TRUE", " true ", "false", "1", "yes", ""])("stays off for %j", (value) => {
      process.env[ENV] = value;
      expect(getDefaultSocketTimeout(undefined, 900000)).toBeUndefined();
    });

    it("reads the env var on each call", () => {
      process.env[ENV] = "true";
      expect(getDefaultSocketTimeout(undefined, 900000)).toBe(900000);
      delete process.env[ENV];
      expect(getDefaultSocketTimeout(undefined, 900000)).toBeUndefined();
    });

    it("is off when there is no global process", () => {
      const saved = globalThis.process;
      try {
        // @ts-expect-error simulate a runtime without process
        delete globalThis.process;
        expect(getDefaultSocketTimeout(undefined, 900000)).toBeUndefined();
      } finally {
        globalThis.process = saved;
      }
    });
  });

  describe("getDefaultSocketTimeout", () => {
    beforeEach(() => {
      process.env[ENV] = "true";
    });

    it("returns the default for caller options", () => {
      expect(getDefaultSocketTimeout({ connectionTimeout: 5000 }, 900000)).toBe(900000);
    });

    it("returns the default for an options provider", () => {
      expect(getDefaultSocketTimeout(async () => ({ connectionTimeout: 1100 }), 300000)).toBe(300000);
    });

    it("returns undefined for a handler instance", () => {
      expect(getDefaultSocketTimeout({ handle: async () => ({}) }, 900000)).toBeUndefined();
    });

    it("returns undefined for a callable handler (a function with handle())", () => {
      const callable = Object.assign(async () => ({}), {
        handle: async () => ({}),
      });
      expect(getDefaultSocketTimeout(callable, 900000)).toBeUndefined();
    });
  });
});

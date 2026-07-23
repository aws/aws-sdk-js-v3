// @ts-check
/**
 * Coverage-guided fuzz target for the XML parser using Jazzer.js (libFuzzer).
 *
 * Run: npx jazzer packages-internal/xml-builder/tests/xml-parser.fuzz.js corpus --sync -i xml-parser
 */
const { FuzzedDataProvider } = require("@jazzer.js/core");

/** @type {import('../src/xml-parser')['parseXML']} */
let parseXML;
try {
  parseXML = require("../dist-cjs/index").parseXML;
} catch {
  parseXML = require("../src/xml-parser").parseXML;
}

/**
 * @param {Buffer} data
 */
module.exports.fuzz = function (data) {
  const provider = new FuzzedDataProvider(data);

  // Mode 0: raw buffer as XML string
  // Mode 1: structured — build semi-valid XML from fuzz data
  const mode = provider.consumeIntegralInRange(0, 1);

  if (mode === 0) {
    const input = provider.consumeRemainingAsString();
    try {
      parseXML(input);
    } catch (e) {
      if (!(e instanceof Error) || !e.message.includes("@aws-sdk XML parse error")) {
        throw e; // unexpected error type = real bug
      }
    }
  } else {
    // Build structured XML to get deeper into parser logic
    const tag = provider.consumeString(10, "utf-8").replace(/[^a-zA-Z]/g, "") || "a";
    const attrs = provider.consumeBoolean()
      ? ` ${provider.consumeString(5, "utf-8").replace(/[^a-zA-Z]/g, "") || "x"}="${provider
          .consumeString(10, "utf-8")
          .replace(/"/g, "&quot;")}"`
      : "";
    const content = provider.consumeRemainingAsString();
    const xml = `<${tag}${attrs}>${content}</${tag}>`;

    try {
      parseXML(xml);
    } catch (e) {
      if (!(e instanceof Error) || !e.message.includes("@aws-sdk XML parse error")) {
        throw e;
      }
    }
  }
};

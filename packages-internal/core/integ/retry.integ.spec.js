const { Retry } = require("@smithy/util-retry");
const { strictEqual } = require("node:assert");

if (process.env.AWS_NEW_RETRIES_2026 === "true") {
  strictEqual(false, Retry.v2026, "AWS_NEW_RETRIES_2026 should be inactive until @aws-sdk/core/client imported.");
  require("@aws-sdk/core/client");
  strictEqual(true, Retry.v2026, "AWS_NEW_RETRIES_2026 should have activated Retry.v2026.");
  console.log("AWS_NEW_RETRIES_2026 has activated Retry.v2026.");
} else if (process.env.SMITHY_NEW_RETRIES_2026 === "true") {
  strictEqual(true, Retry.v2026, "SMITHY_NEW_RETRIES_2026 should have activated Retry.v2026.");
  console.log("SMITHY_NEW_RETRIES_2026 has activated Retry.v2026.");
} else {
  strictEqual(false, Retry.v2026, "Retry.v2026 should be inactive.");
  console.log("Retry.v2026 is off by default.");
}

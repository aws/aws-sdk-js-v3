import {
  AutomationJobStatus,
  BedrockDataAutomationRuntime,
  BedrockDataAutomationRuntimeClient,
  BedrockDataAutomationRuntimeServiceException,
  BlueprintStage,
  CustomOutputStatus,
  DataAutomationStage,
  GetDataAutomationStatusCommand,
  InvokeDataAutomationAsyncCommand,
  InvokeDataAutomationCommand,
  ListTagsForResourceCommand,
  SemanticModality,
  TagResourceCommand,
  UntagResourceCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockDataAutomationRuntimeClient === "function");
assert(typeof BedrockDataAutomationRuntime === "function");
// commands
assert(typeof GetDataAutomationStatusCommand === "function");
assert(typeof InvokeDataAutomationCommand === "function");
assert(typeof InvokeDataAutomationAsyncCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof AutomationJobStatus === "object");
assert(typeof BlueprintStage === "object");
assert(typeof CustomOutputStatus === "object");
assert(typeof DataAutomationStage === "object");
assert(typeof SemanticModality === "object");
// errors
assert(BedrockDataAutomationRuntimeServiceException.prototype instanceof Error);
console.log(`BedrockDataAutomationRuntime index test passed.`);

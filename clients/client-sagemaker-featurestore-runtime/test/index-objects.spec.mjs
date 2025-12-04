import {
  BatchGetRecordCommand,
  DeleteRecordCommand,
  DeletionMode,
  ExpirationTimeResponse,
  GetRecordCommand,
  PutRecordCommand,
  SageMakerFeatureStoreRuntime,
  SageMakerFeatureStoreRuntimeClient,
  SageMakerFeatureStoreRuntimeServiceException,
  TargetStore,
  TtlDurationUnit,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerFeatureStoreRuntimeClient === "function")
assert(typeof SageMakerFeatureStoreRuntime === "function")
// commands
assert(typeof BatchGetRecordCommand === "function")
assert(typeof DeleteRecordCommand === "function")
assert(typeof GetRecordCommand === "function")
assert(typeof PutRecordCommand === "function")
// enums
assert(typeof DeletionMode === "object");
assert(typeof ExpirationTimeResponse === "object");
assert(typeof TargetStore === "object");
assert(typeof TtlDurationUnit === "object");
// errors
assert(SageMakerFeatureStoreRuntimeServiceException.prototype instanceof Error)
console.log(`SageMakerFeatureStoreRuntime index test passed.`);

import {
  AccessForbidden,
  AccessForbidden$,
  BatchGetRecord$,
  BatchGetRecordCommand,
  BatchGetRecordError$,
  BatchGetRecordIdentifier$,
  BatchGetRecordRequest$,
  BatchGetRecordResponse$,
  BatchGetRecordResultDetail$,
  DeleteRecord$,
  DeleteRecordCommand,
  DeleteRecordRequest$,
  DeletionMode,
  ExpirationTimeResponse,
  FeatureValue$,
  GetRecord$,
  GetRecordCommand,
  GetRecordRequest$,
  GetRecordResponse$,
  InternalFailure,
  InternalFailure$,
  PutRecord$,
  PutRecordCommand,
  PutRecordRequest$,
  ResourceNotFound,
  ResourceNotFound$,
  SageMakerFeatureStoreRuntime,
  SageMakerFeatureStoreRuntimeClient,
  SageMakerFeatureStoreRuntimeServiceException,
  ServiceUnavailable,
  ServiceUnavailable$,
  TargetStore,
  TtlDuration$,
  TtlDurationUnit,
  ValidationError,
  ValidationError$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerFeatureStoreRuntimeClient === "function");
assert(typeof SageMakerFeatureStoreRuntime === "function");
// commands
assert(typeof BatchGetRecordCommand === "function");
assert(typeof BatchGetRecord$ === "object");
assert(typeof DeleteRecordCommand === "function");
assert(typeof DeleteRecord$ === "object");
assert(typeof GetRecordCommand === "function");
assert(typeof GetRecord$ === "object");
assert(typeof PutRecordCommand === "function");
assert(typeof PutRecord$ === "object");
// structural schemas
assert(typeof BatchGetRecordError$ === "object");
assert(typeof BatchGetRecordIdentifier$ === "object");
assert(typeof BatchGetRecordRequest$ === "object");
assert(typeof BatchGetRecordResponse$ === "object");
assert(typeof BatchGetRecordResultDetail$ === "object");
assert(typeof DeleteRecordRequest$ === "object");
assert(typeof FeatureValue$ === "object");
assert(typeof GetRecordRequest$ === "object");
assert(typeof GetRecordResponse$ === "object");
assert(typeof PutRecordRequest$ === "object");
assert(typeof TtlDuration$ === "object");
// enums
assert(typeof DeletionMode === "object");
assert(typeof ExpirationTimeResponse === "object");
assert(typeof TargetStore === "object");
assert(typeof TtlDurationUnit === "object");
// errors
assert(AccessForbidden.prototype instanceof SageMakerFeatureStoreRuntimeServiceException);
assert(typeof AccessForbidden$ === "object");
assert(InternalFailure.prototype instanceof SageMakerFeatureStoreRuntimeServiceException);
assert(typeof InternalFailure$ === "object");
assert(ResourceNotFound.prototype instanceof SageMakerFeatureStoreRuntimeServiceException);
assert(typeof ResourceNotFound$ === "object");
assert(ServiceUnavailable.prototype instanceof SageMakerFeatureStoreRuntimeServiceException);
assert(typeof ServiceUnavailable$ === "object");
assert(ValidationError.prototype instanceof SageMakerFeatureStoreRuntimeServiceException);
assert(typeof ValidationError$ === "object");
assert(SageMakerFeatureStoreRuntimeServiceException.prototype instanceof Error);
console.log(`SageMakerFeatureStoreRuntime index test passed.`);

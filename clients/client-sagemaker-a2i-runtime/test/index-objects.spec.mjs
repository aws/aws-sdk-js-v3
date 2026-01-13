import {
  ConflictException,
  ConflictException$,
  ContentClassifier,
  DeleteHumanLoop$,
  DeleteHumanLoopCommand,
  DeleteHumanLoopRequest$,
  DeleteHumanLoopResponse$,
  DescribeHumanLoop$,
  DescribeHumanLoopCommand,
  DescribeHumanLoopRequest$,
  DescribeHumanLoopResponse$,
  HumanLoopDataAttributes$,
  HumanLoopInput$,
  HumanLoopOutput$,
  HumanLoopStatus,
  HumanLoopSummary$,
  InternalServerException,
  InternalServerException$,
  ListHumanLoops$,
  ListHumanLoopsCommand,
  ListHumanLoopsRequest$,
  ListHumanLoopsResponse$,
  paginateListHumanLoops,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SageMakerA2IRuntime,
  SageMakerA2IRuntimeClient,
  SageMakerA2IRuntimeServiceException,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SortOrder,
  StartHumanLoop$,
  StartHumanLoopCommand,
  StartHumanLoopRequest$,
  StartHumanLoopResponse$,
  StopHumanLoop$,
  StopHumanLoopCommand,
  StopHumanLoopRequest$,
  StopHumanLoopResponse$,
  ThrottlingException,
  ThrottlingException$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerA2IRuntimeClient === "function");
assert(typeof SageMakerA2IRuntime === "function");
// commands
assert(typeof DeleteHumanLoopCommand === "function");
assert(typeof DeleteHumanLoop$ === "object");
assert(typeof DescribeHumanLoopCommand === "function");
assert(typeof DescribeHumanLoop$ === "object");
assert(typeof ListHumanLoopsCommand === "function");
assert(typeof ListHumanLoops$ === "object");
assert(typeof StartHumanLoopCommand === "function");
assert(typeof StartHumanLoop$ === "object");
assert(typeof StopHumanLoopCommand === "function");
assert(typeof StopHumanLoop$ === "object");
// structural schemas
assert(typeof DeleteHumanLoopRequest$ === "object");
assert(typeof DeleteHumanLoopResponse$ === "object");
assert(typeof DescribeHumanLoopRequest$ === "object");
assert(typeof DescribeHumanLoopResponse$ === "object");
assert(typeof HumanLoopDataAttributes$ === "object");
assert(typeof HumanLoopInput$ === "object");
assert(typeof HumanLoopOutput$ === "object");
assert(typeof HumanLoopSummary$ === "object");
assert(typeof ListHumanLoopsRequest$ === "object");
assert(typeof ListHumanLoopsResponse$ === "object");
assert(typeof StartHumanLoopRequest$ === "object");
assert(typeof StartHumanLoopResponse$ === "object");
assert(typeof StopHumanLoopRequest$ === "object");
assert(typeof StopHumanLoopResponse$ === "object");
// enums
assert(typeof ContentClassifier === "object");
assert(typeof HumanLoopStatus === "object");
assert(typeof SortOrder === "object");
// errors
assert(ConflictException.prototype instanceof SageMakerA2IRuntimeServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SageMakerA2IRuntimeServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SageMakerA2IRuntimeServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SageMakerA2IRuntimeServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof SageMakerA2IRuntimeServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SageMakerA2IRuntimeServiceException);
assert(typeof ValidationException$ === "object");
assert(SageMakerA2IRuntimeServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListHumanLoops === "function");
console.log(`SageMakerA2IRuntime index test passed.`);

import {
  ContentClassifier,
  DeleteHumanLoopCommand,
  DescribeHumanLoopCommand,
  HumanLoopStatus,
  ListHumanLoopsCommand,
  SageMakerA2IRuntime,
  SageMakerA2IRuntimeClient,
  SageMakerA2IRuntimeServiceException,
  SortOrder,
  StartHumanLoopCommand,
  StopHumanLoopCommand,
  paginateListHumanLoops,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerA2IRuntimeClient === "function")
assert(typeof SageMakerA2IRuntime === "function")
// commands
assert(typeof DeleteHumanLoopCommand === "function")
assert(typeof DescribeHumanLoopCommand === "function")
assert(typeof ListHumanLoopsCommand === "function")
assert(typeof StartHumanLoopCommand === "function")
assert(typeof StopHumanLoopCommand === "function")
// enums
assert(typeof ContentClassifier === "object");
assert(typeof HumanLoopStatus === "object");
assert(typeof SortOrder === "object");
// errors
assert(SageMakerA2IRuntimeServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListHumanLoops === "function")
console.log(`SageMakerA2IRuntime index test passed.`);

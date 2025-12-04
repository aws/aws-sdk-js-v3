import {
  BatchGetMetricsCommand,
  BatchPutMetricsCommand,
  MetricQueryResultStatus,
  MetricStatistic,
  Period,
  PutMetricsErrorCode,
  SageMakerMetrics,
  SageMakerMetricsClient,
  SageMakerMetricsServiceException,
  XAxisType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerMetricsClient === "function")
assert(typeof SageMakerMetrics === "function")
// commands
assert(typeof BatchGetMetricsCommand === "function")
assert(typeof BatchPutMetricsCommand === "function")
// enums
assert(typeof MetricQueryResultStatus === "object");
assert(typeof MetricStatistic === "object");
assert(typeof Period === "object");
assert(typeof PutMetricsErrorCode === "object");
assert(typeof XAxisType === "object");
// errors
assert(SageMakerMetricsServiceException.prototype instanceof Error)
console.log(`SageMakerMetrics index test passed.`);

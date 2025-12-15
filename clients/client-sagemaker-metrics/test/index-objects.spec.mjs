import {
  BatchGetMetrics$,
  BatchGetMetricsCommand,
  BatchGetMetricsRequest$,
  BatchGetMetricsResponse$,
  BatchPutMetrics$,
  BatchPutMetricsCommand,
  BatchPutMetricsError$,
  BatchPutMetricsRequest$,
  BatchPutMetricsResponse$,
  MetricQuery$,
  MetricQueryResult$,
  MetricQueryResultStatus,
  MetricStatistic,
  Period,
  PutMetricsErrorCode,
  RawMetricData$,
  SageMakerMetrics,
  SageMakerMetricsClient,
  SageMakerMetricsServiceException,
  XAxisType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerMetricsClient === "function");
assert(typeof SageMakerMetrics === "function");
// commands
assert(typeof BatchGetMetricsCommand === "function");
assert(typeof BatchGetMetrics$ === "object");
assert(typeof BatchPutMetricsCommand === "function");
assert(typeof BatchPutMetrics$ === "object");
// structural schemas
assert(typeof BatchGetMetricsRequest$ === "object");
assert(typeof BatchGetMetricsResponse$ === "object");
assert(typeof BatchPutMetricsError$ === "object");
assert(typeof BatchPutMetricsRequest$ === "object");
assert(typeof BatchPutMetricsResponse$ === "object");
assert(typeof MetricQuery$ === "object");
assert(typeof MetricQueryResult$ === "object");
assert(typeof RawMetricData$ === "object");
// enums
assert(typeof MetricQueryResultStatus === "object");
assert(typeof MetricStatistic === "object");
assert(typeof Period === "object");
assert(typeof PutMetricsErrorCode === "object");
assert(typeof XAxisType === "object");
// errors
assert(SageMakerMetricsServiceException.prototype instanceof Error);
console.log(`SageMakerMetrics index test passed.`);

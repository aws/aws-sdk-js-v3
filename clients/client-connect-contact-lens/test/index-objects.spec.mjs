import {
  ConnectContactLens,
  ConnectContactLensClient,
  ConnectContactLensServiceException,
  ListRealtimeContactAnalysisSegmentsCommand,
  PostContactSummaryFailureCode,
  PostContactSummaryStatus,
  SentimentValue,
  paginateListRealtimeContactAnalysisSegments,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConnectContactLensClient === "function");
assert(typeof ConnectContactLens === "function");
// commands
assert(typeof ListRealtimeContactAnalysisSegmentsCommand === "function");
// enums
assert(typeof PostContactSummaryFailureCode === "object");
assert(typeof PostContactSummaryStatus === "object");
assert(typeof SentimentValue === "object");
// errors
assert(ConnectContactLensServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRealtimeContactAnalysisSegments === "function");
console.log(`ConnectContactLens index test passed.`);

import {
  AccessDeniedException,
  ConnectContactLens,
  ConnectContactLensClient,
  ConnectContactLensServiceException,
  InternalServiceException,
  InvalidRequestException,
  ListRealtimeContactAnalysisSegmentsCommand,
  PostContactSummaryFailureCode,
  PostContactSummaryStatus,
  ResourceNotFoundException,
  SentimentValue,
  ThrottlingException,
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
assert(AccessDeniedException.prototype instanceof ConnectContactLensServiceException);
assert(InternalServiceException.prototype instanceof ConnectContactLensServiceException);
assert(InvalidRequestException.prototype instanceof ConnectContactLensServiceException);
assert(ResourceNotFoundException.prototype instanceof ConnectContactLensServiceException);
assert(ThrottlingException.prototype instanceof ConnectContactLensServiceException);
assert(ConnectContactLensServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRealtimeContactAnalysisSegments === "function");
console.log(`ConnectContactLens index test passed.`);

import {
  AccessDeniedException,
  AccessDeniedException$,
  Categories$,
  CategoryDetails$,
  CharacterOffsets$,
  ConnectContactLens,
  ConnectContactLensClient,
  ConnectContactLensServiceException,
  InternalServiceException,
  InternalServiceException$,
  InvalidRequestException,
  InvalidRequestException$,
  IssueDetected$,
  ListRealtimeContactAnalysisSegments$,
  ListRealtimeContactAnalysisSegmentsCommand,
  ListRealtimeContactAnalysisSegmentsRequest$,
  ListRealtimeContactAnalysisSegmentsResponse$,
  paginateListRealtimeContactAnalysisSegments,
  PointOfInterest$,
  PostContactSummary$,
  PostContactSummaryFailureCode,
  PostContactSummaryStatus,
  RealtimeContactAnalysisSegment$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SentimentValue,
  ThrottlingException,
  ThrottlingException$,
  Transcript$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConnectContactLensClient === "function");
assert(typeof ConnectContactLens === "function");
// commands
assert(typeof ListRealtimeContactAnalysisSegmentsCommand === "function");
assert(typeof ListRealtimeContactAnalysisSegments$ === "object");
// structural schemas
assert(typeof Categories$ === "object");
assert(typeof CategoryDetails$ === "object");
assert(typeof CharacterOffsets$ === "object");
assert(typeof IssueDetected$ === "object");
assert(typeof ListRealtimeContactAnalysisSegmentsRequest$ === "object");
assert(typeof ListRealtimeContactAnalysisSegmentsResponse$ === "object");
assert(typeof PointOfInterest$ === "object");
assert(typeof PostContactSummary$ === "object");
assert(typeof RealtimeContactAnalysisSegment$ === "object");
assert(typeof Transcript$ === "object");
// enums
assert(typeof PostContactSummaryFailureCode === "object");
assert(typeof PostContactSummaryStatus === "object");
assert(typeof SentimentValue === "object");
// errors
assert(AccessDeniedException.prototype instanceof ConnectContactLensServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServiceException.prototype instanceof ConnectContactLensServiceException);
assert(typeof InternalServiceException$ === "object");
assert(InvalidRequestException.prototype instanceof ConnectContactLensServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ConnectContactLensServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof ConnectContactLensServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ConnectContactLensServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRealtimeContactAnalysisSegments === "function");
console.log(`ConnectContactLens index test passed.`);

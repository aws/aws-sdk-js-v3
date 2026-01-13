import {
  ActiveContext$,
  ActiveContextTimeToLive$,
  BadGatewayException,
  BadGatewayException$,
  BadRequestException,
  BadRequestException$,
  Button$,
  ConfirmationStatus,
  ConflictException,
  ConflictException$,
  ContentType,
  DeleteSession$,
  DeleteSessionCommand,
  DeleteSessionRequest$,
  DeleteSessionResponse$,
  DependencyFailedException,
  DependencyFailedException$,
  DialogAction$,
  DialogActionType,
  DialogState,
  FulfillmentState,
  GenericAttachment$,
  GetSession$,
  GetSessionCommand,
  GetSessionRequest$,
  GetSessionResponse$,
  IntentConfidence$,
  IntentSummary$,
  InternalFailureException,
  InternalFailureException$,
  LexRuntimeService,
  LexRuntimeServiceClient,
  LexRuntimeServiceServiceException,
  LimitExceededException,
  LimitExceededException$,
  LoopDetectedException,
  LoopDetectedException$,
  MessageFormatType,
  NotAcceptableException,
  NotAcceptableException$,
  NotFoundException,
  NotFoundException$,
  PostContent$,
  PostContentCommand,
  PostContentRequest$,
  PostContentResponse$,
  PostText$,
  PostTextCommand,
  PostTextRequest$,
  PostTextResponse$,
  PredictedIntent$,
  PutSession$,
  PutSessionCommand,
  PutSessionRequest$,
  PutSessionResponse$,
  RequestTimeoutException,
  RequestTimeoutException$,
  ResponseCard$,
  SentimentResponse$,
  UnsupportedMediaTypeException,
  UnsupportedMediaTypeException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LexRuntimeServiceClient === "function");
assert(typeof LexRuntimeService === "function");
// commands
assert(typeof DeleteSessionCommand === "function");
assert(typeof DeleteSession$ === "object");
assert(typeof GetSessionCommand === "function");
assert(typeof GetSession$ === "object");
assert(typeof PostContentCommand === "function");
assert(typeof PostContent$ === "object");
assert(typeof PostTextCommand === "function");
assert(typeof PostText$ === "object");
assert(typeof PutSessionCommand === "function");
assert(typeof PutSession$ === "object");
// structural schemas
assert(typeof ActiveContext$ === "object");
assert(typeof ActiveContextTimeToLive$ === "object");
assert(typeof Button$ === "object");
assert(typeof DeleteSessionRequest$ === "object");
assert(typeof DeleteSessionResponse$ === "object");
assert(typeof DialogAction$ === "object");
assert(typeof GenericAttachment$ === "object");
assert(typeof GetSessionRequest$ === "object");
assert(typeof GetSessionResponse$ === "object");
assert(typeof IntentConfidence$ === "object");
assert(typeof IntentSummary$ === "object");
assert(typeof PostContentRequest$ === "object");
assert(typeof PostContentResponse$ === "object");
assert(typeof PostTextRequest$ === "object");
assert(typeof PostTextResponse$ === "object");
assert(typeof PredictedIntent$ === "object");
assert(typeof PutSessionRequest$ === "object");
assert(typeof PutSessionResponse$ === "object");
assert(typeof ResponseCard$ === "object");
assert(typeof SentimentResponse$ === "object");
// enums
assert(typeof ConfirmationStatus === "object");
assert(typeof ContentType === "object");
assert(typeof DialogActionType === "object");
assert(typeof DialogState === "object");
assert(typeof FulfillmentState === "object");
assert(typeof MessageFormatType === "object");
// errors
assert(BadGatewayException.prototype instanceof LexRuntimeServiceServiceException);
assert(typeof BadGatewayException$ === "object");
assert(BadRequestException.prototype instanceof LexRuntimeServiceServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof LexRuntimeServiceServiceException);
assert(typeof ConflictException$ === "object");
assert(DependencyFailedException.prototype instanceof LexRuntimeServiceServiceException);
assert(typeof DependencyFailedException$ === "object");
assert(InternalFailureException.prototype instanceof LexRuntimeServiceServiceException);
assert(typeof InternalFailureException$ === "object");
assert(LimitExceededException.prototype instanceof LexRuntimeServiceServiceException);
assert(typeof LimitExceededException$ === "object");
assert(LoopDetectedException.prototype instanceof LexRuntimeServiceServiceException);
assert(typeof LoopDetectedException$ === "object");
assert(NotAcceptableException.prototype instanceof LexRuntimeServiceServiceException);
assert(typeof NotAcceptableException$ === "object");
assert(NotFoundException.prototype instanceof LexRuntimeServiceServiceException);
assert(typeof NotFoundException$ === "object");
assert(RequestTimeoutException.prototype instanceof LexRuntimeServiceServiceException);
assert(typeof RequestTimeoutException$ === "object");
assert(UnsupportedMediaTypeException.prototype instanceof LexRuntimeServiceServiceException);
assert(typeof UnsupportedMediaTypeException$ === "object");
assert(LexRuntimeServiceServiceException.prototype instanceof Error);
console.log(`LexRuntimeService index test passed.`);

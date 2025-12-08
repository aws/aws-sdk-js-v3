import {
  BadGatewayException,
  BadRequestException,
  ConfirmationStatus,
  ConflictException,
  ContentType,
  DeleteSessionCommand,
  DependencyFailedException,
  DialogActionType,
  DialogState,
  FulfillmentState,
  GetSessionCommand,
  InternalFailureException,
  LexRuntimeService,
  LexRuntimeServiceClient,
  LexRuntimeServiceServiceException,
  LimitExceededException,
  LoopDetectedException,
  MessageFormatType,
  NotAcceptableException,
  NotFoundException,
  PostContentCommand,
  PostTextCommand,
  PutSessionCommand,
  RequestTimeoutException,
  UnsupportedMediaTypeException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LexRuntimeServiceClient === "function");
assert(typeof LexRuntimeService === "function");
// commands
assert(typeof DeleteSessionCommand === "function");
assert(typeof GetSessionCommand === "function");
assert(typeof PostContentCommand === "function");
assert(typeof PostTextCommand === "function");
assert(typeof PutSessionCommand === "function");
// enums
assert(typeof ConfirmationStatus === "object");
assert(typeof ContentType === "object");
assert(typeof DialogActionType === "object");
assert(typeof DialogState === "object");
assert(typeof FulfillmentState === "object");
assert(typeof MessageFormatType === "object");
// errors
assert(BadGatewayException.prototype instanceof LexRuntimeServiceServiceException);
assert(BadRequestException.prototype instanceof LexRuntimeServiceServiceException);
assert(ConflictException.prototype instanceof LexRuntimeServiceServiceException);
assert(DependencyFailedException.prototype instanceof LexRuntimeServiceServiceException);
assert(InternalFailureException.prototype instanceof LexRuntimeServiceServiceException);
assert(LimitExceededException.prototype instanceof LexRuntimeServiceServiceException);
assert(LoopDetectedException.prototype instanceof LexRuntimeServiceServiceException);
assert(NotAcceptableException.prototype instanceof LexRuntimeServiceServiceException);
assert(NotFoundException.prototype instanceof LexRuntimeServiceServiceException);
assert(RequestTimeoutException.prototype instanceof LexRuntimeServiceServiceException);
assert(UnsupportedMediaTypeException.prototype instanceof LexRuntimeServiceServiceException);
assert(LexRuntimeServiceServiceException.prototype instanceof Error);
console.log(`LexRuntimeService index test passed.`);

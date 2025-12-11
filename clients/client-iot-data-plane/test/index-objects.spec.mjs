import {
  ConflictException,
  DeleteConnectionCommand,
  DeleteThingShadowCommand,
  ForbiddenException,
  GetRetainedMessageCommand,
  GetThingShadowCommand,
  InternalFailureException,
  InvalidRequestException,
  IoTDataPlane,
  IoTDataPlaneClient,
  IoTDataPlaneServiceException,
  ListNamedShadowsForThingCommand,
  ListRetainedMessagesCommand,
  MethodNotAllowedException,
  PayloadFormatIndicator,
  PublishCommand,
  RequestEntityTooLargeException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  ThrottlingException,
  UnauthorizedException,
  UnsupportedDocumentEncodingException,
  UpdateThingShadowCommand,
  paginateListRetainedMessages,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTDataPlaneClient === "function");
assert(typeof IoTDataPlane === "function");
// commands
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteThingShadowCommand === "function");
assert(typeof GetRetainedMessageCommand === "function");
assert(typeof GetThingShadowCommand === "function");
assert(typeof ListNamedShadowsForThingCommand === "function");
assert(typeof ListRetainedMessagesCommand === "function");
assert(typeof PublishCommand === "function");
assert(typeof UpdateThingShadowCommand === "function");
// enums
assert(typeof PayloadFormatIndicator === "object");
// errors
assert(ConflictException.prototype instanceof IoTDataPlaneServiceException);
assert(ForbiddenException.prototype instanceof IoTDataPlaneServiceException);
assert(InternalFailureException.prototype instanceof IoTDataPlaneServiceException);
assert(InvalidRequestException.prototype instanceof IoTDataPlaneServiceException);
assert(MethodNotAllowedException.prototype instanceof IoTDataPlaneServiceException);
assert(RequestEntityTooLargeException.prototype instanceof IoTDataPlaneServiceException);
assert(ResourceNotFoundException.prototype instanceof IoTDataPlaneServiceException);
assert(ServiceUnavailableException.prototype instanceof IoTDataPlaneServiceException);
assert(ThrottlingException.prototype instanceof IoTDataPlaneServiceException);
assert(UnauthorizedException.prototype instanceof IoTDataPlaneServiceException);
assert(UnsupportedDocumentEncodingException.prototype instanceof IoTDataPlaneServiceException);
assert(IoTDataPlaneServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRetainedMessages === "function");
console.log(`IoTDataPlane index test passed.`);

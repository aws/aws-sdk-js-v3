import {
  ConflictException,
  ConflictException$,
  DeleteConnection$,
  DeleteConnectionCommand,
  DeleteConnectionRequest$,
  DeleteThingShadow$,
  DeleteThingShadowCommand,
  DeleteThingShadowRequest$,
  DeleteThingShadowResponse$,
  ForbiddenException,
  ForbiddenException$,
  GatewayTimeoutException,
  GatewayTimeoutException$,
  GetConnection$,
  GetConnectionCommand,
  GetConnectionRequest$,
  GetConnectionResponse$,
  GetRetainedMessage$,
  GetRetainedMessageCommand,
  GetRetainedMessageRequest$,
  GetRetainedMessageResponse$,
  GetThingShadow$,
  GetThingShadowCommand,
  GetThingShadowRequest$,
  GetThingShadowResponse$,
  InternalFailureException,
  InternalFailureException$,
  InvalidRequestException,
  InvalidRequestException$,
  IoTDataPlane,
  IoTDataPlaneClient,
  IoTDataPlaneServiceException,
  ListNamedShadowsForThing$,
  ListNamedShadowsForThingCommand,
  ListNamedShadowsForThingRequest$,
  ListNamedShadowsForThingResponse$,
  ListRetainedMessages$,
  ListRetainedMessagesCommand,
  ListRetainedMessagesRequest$,
  ListRetainedMessagesResponse$,
  ListSubscriptions$,
  ListSubscriptionsCommand,
  ListSubscriptionsRequest$,
  ListSubscriptionsResponse$,
  MethodNotAllowedException,
  MethodNotAllowedException$,
  paginateListRetainedMessages,
  paginateListSubscriptions,
  PayloadFormatIndicator,
  Publish$,
  PublishCommand,
  PublishRequest$,
  RequestEntityTooLargeException,
  RequestEntityTooLargeException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RetainedMessageSummary$,
  SendDirectMessage$,
  SendDirectMessageCommand,
  SendDirectMessageRequest$,
  SendDirectMessageResponse$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SubscriptionSummary$,
  ThrottlingException,
  ThrottlingException$,
  UnauthorizedException,
  UnauthorizedException$,
  UnsupportedDocumentEncodingException,
  UnsupportedDocumentEncodingException$,
  UpdateThingShadow$,
  UpdateThingShadowCommand,
  UpdateThingShadowRequest$,
  UpdateThingShadowResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTDataPlaneClient === "function");
assert(typeof IoTDataPlane === "function");
// commands
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteConnection$ === "object");
assert(typeof DeleteThingShadowCommand === "function");
assert(typeof DeleteThingShadow$ === "object");
assert(typeof GetConnectionCommand === "function");
assert(typeof GetConnection$ === "object");
assert(typeof GetRetainedMessageCommand === "function");
assert(typeof GetRetainedMessage$ === "object");
assert(typeof GetThingShadowCommand === "function");
assert(typeof GetThingShadow$ === "object");
assert(typeof ListNamedShadowsForThingCommand === "function");
assert(typeof ListNamedShadowsForThing$ === "object");
assert(typeof ListRetainedMessagesCommand === "function");
assert(typeof ListRetainedMessages$ === "object");
assert(typeof ListSubscriptionsCommand === "function");
assert(typeof ListSubscriptions$ === "object");
assert(typeof PublishCommand === "function");
assert(typeof Publish$ === "object");
assert(typeof SendDirectMessageCommand === "function");
assert(typeof SendDirectMessage$ === "object");
assert(typeof UpdateThingShadowCommand === "function");
assert(typeof UpdateThingShadow$ === "object");
// structural schemas
assert(typeof DeleteConnectionRequest$ === "object");
assert(typeof DeleteThingShadowRequest$ === "object");
assert(typeof DeleteThingShadowResponse$ === "object");
assert(typeof GetConnectionRequest$ === "object");
assert(typeof GetConnectionResponse$ === "object");
assert(typeof GetRetainedMessageRequest$ === "object");
assert(typeof GetRetainedMessageResponse$ === "object");
assert(typeof GetThingShadowRequest$ === "object");
assert(typeof GetThingShadowResponse$ === "object");
assert(typeof ListNamedShadowsForThingRequest$ === "object");
assert(typeof ListNamedShadowsForThingResponse$ === "object");
assert(typeof ListRetainedMessagesRequest$ === "object");
assert(typeof ListRetainedMessagesResponse$ === "object");
assert(typeof ListSubscriptionsRequest$ === "object");
assert(typeof ListSubscriptionsResponse$ === "object");
assert(typeof PublishRequest$ === "object");
assert(typeof RetainedMessageSummary$ === "object");
assert(typeof SendDirectMessageRequest$ === "object");
assert(typeof SendDirectMessageResponse$ === "object");
assert(typeof SubscriptionSummary$ === "object");
assert(typeof UpdateThingShadowRequest$ === "object");
assert(typeof UpdateThingShadowResponse$ === "object");
// enums
assert(typeof PayloadFormatIndicator === "object");
// errors
assert(ConflictException.prototype instanceof IoTDataPlaneServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof IoTDataPlaneServiceException);
assert(typeof ForbiddenException$ === "object");
assert(GatewayTimeoutException.prototype instanceof IoTDataPlaneServiceException);
assert(typeof GatewayTimeoutException$ === "object");
assert(InternalFailureException.prototype instanceof IoTDataPlaneServiceException);
assert(typeof InternalFailureException$ === "object");
assert(InvalidRequestException.prototype instanceof IoTDataPlaneServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(MethodNotAllowedException.prototype instanceof IoTDataPlaneServiceException);
assert(typeof MethodNotAllowedException$ === "object");
assert(RequestEntityTooLargeException.prototype instanceof IoTDataPlaneServiceException);
assert(typeof RequestEntityTooLargeException$ === "object");
assert(ResourceNotFoundException.prototype instanceof IoTDataPlaneServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof IoTDataPlaneServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof IoTDataPlaneServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnauthorizedException.prototype instanceof IoTDataPlaneServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(UnsupportedDocumentEncodingException.prototype instanceof IoTDataPlaneServiceException);
assert(typeof UnsupportedDocumentEncodingException$ === "object");
assert(IoTDataPlaneServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRetainedMessages === "function");
assert(typeof paginateListSubscriptions === "function");
console.log(`IoTDataPlane index test passed.`);

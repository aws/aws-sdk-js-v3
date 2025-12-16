import {
  AlreadyExistsException,
  AlreadyExistsException$,
  BadRequestException,
  BadRequestException$,
  CallInstructionsMessageType$,
  CloudWatchLogsDestination$,
  CreateConfigurationSet$,
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestination$,
  CreateConfigurationSetEventDestinationCommand,
  CreateConfigurationSetEventDestinationRequest$,
  CreateConfigurationSetEventDestinationResponse$,
  CreateConfigurationSetRequest$,
  CreateConfigurationSetResponse$,
  DeleteConfigurationSet$,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestination$,
  DeleteConfigurationSetEventDestinationCommand,
  DeleteConfigurationSetEventDestinationRequest$,
  DeleteConfigurationSetEventDestinationResponse$,
  DeleteConfigurationSetRequest$,
  DeleteConfigurationSetResponse$,
  EventDestination$,
  EventDestinationDefinition$,
  EventType,
  GetConfigurationSetEventDestinations$,
  GetConfigurationSetEventDestinationsCommand,
  GetConfigurationSetEventDestinationsRequest$,
  GetConfigurationSetEventDestinationsResponse$,
  InternalServiceErrorException,
  InternalServiceErrorException$,
  KinesisFirehoseDestination$,
  LimitExceededException,
  LimitExceededException$,
  ListConfigurationSets$,
  ListConfigurationSetsCommand,
  ListConfigurationSetsRequest$,
  ListConfigurationSetsResponse$,
  NotFoundException,
  NotFoundException$,
  PinpointSMSVoice,
  PinpointSMSVoiceClient,
  PinpointSMSVoiceServiceException,
  PlainTextMessageType$,
  SSMLMessageType$,
  SendVoiceMessage$,
  SendVoiceMessageCommand,
  SendVoiceMessageRequest$,
  SendVoiceMessageResponse$,
  SnsDestination$,
  TooManyRequestsException,
  TooManyRequestsException$,
  UpdateConfigurationSetEventDestination$,
  UpdateConfigurationSetEventDestinationCommand,
  UpdateConfigurationSetEventDestinationRequest$,
  UpdateConfigurationSetEventDestinationResponse$,
  VoiceMessageContent$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PinpointSMSVoiceClient === "function");
assert(typeof PinpointSMSVoice === "function");
// commands
assert(typeof CreateConfigurationSetCommand === "function");
assert(typeof CreateConfigurationSet$ === "object");
assert(typeof CreateConfigurationSetEventDestinationCommand === "function");
assert(typeof CreateConfigurationSetEventDestination$ === "object");
assert(typeof DeleteConfigurationSetCommand === "function");
assert(typeof DeleteConfigurationSet$ === "object");
assert(typeof DeleteConfigurationSetEventDestinationCommand === "function");
assert(typeof DeleteConfigurationSetEventDestination$ === "object");
assert(typeof GetConfigurationSetEventDestinationsCommand === "function");
assert(typeof GetConfigurationSetEventDestinations$ === "object");
assert(typeof ListConfigurationSetsCommand === "function");
assert(typeof ListConfigurationSets$ === "object");
assert(typeof SendVoiceMessageCommand === "function");
assert(typeof SendVoiceMessage$ === "object");
assert(typeof UpdateConfigurationSetEventDestinationCommand === "function");
assert(typeof UpdateConfigurationSetEventDestination$ === "object");
// structural schemas
assert(typeof CallInstructionsMessageType$ === "object");
assert(typeof CloudWatchLogsDestination$ === "object");
assert(typeof CreateConfigurationSetEventDestinationRequest$ === "object");
assert(typeof CreateConfigurationSetEventDestinationResponse$ === "object");
assert(typeof CreateConfigurationSetRequest$ === "object");
assert(typeof CreateConfigurationSetResponse$ === "object");
assert(typeof DeleteConfigurationSetEventDestinationRequest$ === "object");
assert(typeof DeleteConfigurationSetEventDestinationResponse$ === "object");
assert(typeof DeleteConfigurationSetRequest$ === "object");
assert(typeof DeleteConfigurationSetResponse$ === "object");
assert(typeof EventDestination$ === "object");
assert(typeof EventDestinationDefinition$ === "object");
assert(typeof GetConfigurationSetEventDestinationsRequest$ === "object");
assert(typeof GetConfigurationSetEventDestinationsResponse$ === "object");
assert(typeof KinesisFirehoseDestination$ === "object");
assert(typeof ListConfigurationSetsRequest$ === "object");
assert(typeof ListConfigurationSetsResponse$ === "object");
assert(typeof PlainTextMessageType$ === "object");
assert(typeof SendVoiceMessageRequest$ === "object");
assert(typeof SendVoiceMessageResponse$ === "object");
assert(typeof SnsDestination$ === "object");
assert(typeof SSMLMessageType$ === "object");
assert(typeof UpdateConfigurationSetEventDestinationRequest$ === "object");
assert(typeof UpdateConfigurationSetEventDestinationResponse$ === "object");
assert(typeof VoiceMessageContent$ === "object");
// enums
assert(typeof EventType === "object");
// errors
assert(AlreadyExistsException.prototype instanceof PinpointSMSVoiceServiceException);
assert(typeof AlreadyExistsException$ === "object");
assert(BadRequestException.prototype instanceof PinpointSMSVoiceServiceException);
assert(typeof BadRequestException$ === "object");
assert(InternalServiceErrorException.prototype instanceof PinpointSMSVoiceServiceException);
assert(typeof InternalServiceErrorException$ === "object");
assert(LimitExceededException.prototype instanceof PinpointSMSVoiceServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NotFoundException.prototype instanceof PinpointSMSVoiceServiceException);
assert(typeof NotFoundException$ === "object");
assert(TooManyRequestsException.prototype instanceof PinpointSMSVoiceServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(PinpointSMSVoiceServiceException.prototype instanceof Error);
console.log(`PinpointSMSVoice index test passed.`);

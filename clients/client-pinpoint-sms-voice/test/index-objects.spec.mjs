import {
  AlreadyExistsException,
  BadRequestException,
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestinationCommand,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestinationCommand,
  EventType,
  GetConfigurationSetEventDestinationsCommand,
  InternalServiceErrorException,
  LimitExceededException,
  ListConfigurationSetsCommand,
  NotFoundException,
  PinpointSMSVoice,
  PinpointSMSVoiceClient,
  PinpointSMSVoiceServiceException,
  SendVoiceMessageCommand,
  TooManyRequestsException,
  UpdateConfigurationSetEventDestinationCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PinpointSMSVoiceClient === "function");
assert(typeof PinpointSMSVoice === "function");
// commands
assert(typeof CreateConfigurationSetCommand === "function");
assert(typeof CreateConfigurationSetEventDestinationCommand === "function");
assert(typeof DeleteConfigurationSetCommand === "function");
assert(typeof DeleteConfigurationSetEventDestinationCommand === "function");
assert(typeof GetConfigurationSetEventDestinationsCommand === "function");
assert(typeof ListConfigurationSetsCommand === "function");
assert(typeof SendVoiceMessageCommand === "function");
assert(typeof UpdateConfigurationSetEventDestinationCommand === "function");
// enums
assert(typeof EventType === "object");
// errors
assert(AlreadyExistsException.prototype instanceof PinpointSMSVoiceServiceException);
assert(BadRequestException.prototype instanceof PinpointSMSVoiceServiceException);
assert(InternalServiceErrorException.prototype instanceof PinpointSMSVoiceServiceException);
assert(LimitExceededException.prototype instanceof PinpointSMSVoiceServiceException);
assert(NotFoundException.prototype instanceof PinpointSMSVoiceServiceException);
assert(TooManyRequestsException.prototype instanceof PinpointSMSVoiceServiceException);
assert(PinpointSMSVoiceServiceException.prototype instanceof Error);
console.log(`PinpointSMSVoice index test passed.`);

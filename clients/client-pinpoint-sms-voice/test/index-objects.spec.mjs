import {
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestinationCommand,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestinationCommand,
  EventType,
  GetConfigurationSetEventDestinationsCommand,
  ListConfigurationSetsCommand,
  PinpointSMSVoice,
  PinpointSMSVoiceClient,
  PinpointSMSVoiceServiceException,
  SendVoiceMessageCommand,
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
assert(PinpointSMSVoiceServiceException.prototype instanceof Error);
console.log(`PinpointSMSVoice index test passed.`);

import {
  ChatTokenCapability,
  CreateChatTokenCommand,
  CreateLoggingConfigurationCommand,
  CreateLoggingConfigurationState,
  CreateRoomCommand,
  DeleteLoggingConfigurationCommand,
  DeleteMessageCommand,
  DeleteRoomCommand,
  DisconnectUserCommand,
  FallbackResult,
  GetLoggingConfigurationCommand,
  GetRoomCommand,
  Ivschat,
  IvschatClient,
  IvschatServiceException,
  ListLoggingConfigurationsCommand,
  ListRoomsCommand,
  ListTagsForResourceCommand,
  LoggingConfigurationState,
  SendEventCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLoggingConfigurationCommand,
  UpdateLoggingConfigurationState,
  UpdateRoomCommand,
  paginateListLoggingConfigurations,
  paginateListRooms,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IvschatClient === "function")
assert(typeof Ivschat === "function")
// commands
assert(typeof CreateChatTokenCommand === "function")
assert(typeof CreateLoggingConfigurationCommand === "function")
assert(typeof CreateRoomCommand === "function")
assert(typeof DeleteLoggingConfigurationCommand === "function")
assert(typeof DeleteMessageCommand === "function")
assert(typeof DeleteRoomCommand === "function")
assert(typeof DisconnectUserCommand === "function")
assert(typeof GetLoggingConfigurationCommand === "function")
assert(typeof GetRoomCommand === "function")
assert(typeof ListLoggingConfigurationsCommand === "function")
assert(typeof ListRoomsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof SendEventCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateLoggingConfigurationCommand === "function")
assert(typeof UpdateRoomCommand === "function")
// enums
assert(typeof ChatTokenCapability === "object");
assert(typeof CreateLoggingConfigurationState === "object");
assert(typeof FallbackResult === "object");
assert(typeof LoggingConfigurationState === "object");
assert(typeof UpdateLoggingConfigurationState === "object");
// errors
assert(IvschatServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListLoggingConfigurations === "function")
assert(typeof paginateListRooms === "function")
console.log(`Ivschat index test passed.`);

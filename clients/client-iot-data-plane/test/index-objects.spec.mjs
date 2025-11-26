import {
  DeleteConnectionCommand,
  DeleteThingShadowCommand,
  GetRetainedMessageCommand,
  GetThingShadowCommand,
  IoTDataPlane,
  IoTDataPlaneClient,
  IoTDataPlaneServiceException,
  ListNamedShadowsForThingCommand,
  ListRetainedMessagesCommand,
  PayloadFormatIndicator,
  PublishCommand,
  UpdateThingShadowCommand,
  paginateListRetainedMessages,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTDataPlaneClient === "function")
assert(typeof IoTDataPlane === "function")
// commands
assert(typeof DeleteConnectionCommand === "function")
assert(typeof DeleteThingShadowCommand === "function")
assert(typeof GetRetainedMessageCommand === "function")
assert(typeof GetThingShadowCommand === "function")
assert(typeof ListNamedShadowsForThingCommand === "function")
assert(typeof ListRetainedMessagesCommand === "function")
assert(typeof PublishCommand === "function")
assert(typeof UpdateThingShadowCommand === "function")
// enums
assert(typeof PayloadFormatIndicator === "object");
// errors
assert(IoTDataPlaneServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListRetainedMessages === "function")
console.log(`IoTDataPlane index test passed.`);

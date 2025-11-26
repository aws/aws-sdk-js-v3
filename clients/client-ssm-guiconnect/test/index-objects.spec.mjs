import {
  DeleteConnectionRecordingPreferencesCommand,
  GetConnectionRecordingPreferencesCommand,
  SSMGuiConnect,
  SSMGuiConnectClient,
  SSMGuiConnectServiceException,
  UpdateConnectionRecordingPreferencesCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SSMGuiConnectClient === "function")
assert(typeof SSMGuiConnect === "function")
// commands
assert(typeof DeleteConnectionRecordingPreferencesCommand === "function")
assert(typeof GetConnectionRecordingPreferencesCommand === "function")
assert(typeof UpdateConnectionRecordingPreferencesCommand === "function")
// errors
assert(SSMGuiConnectServiceException.prototype instanceof Error)
console.log(`SSMGuiConnect index test passed.`);

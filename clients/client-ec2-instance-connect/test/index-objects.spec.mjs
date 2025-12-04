import {
  EC2InstanceConnect,
  EC2InstanceConnectClient,
  EC2InstanceConnectServiceException,
  SendSSHPublicKeyCommand,
  SendSerialConsoleSSHPublicKeyCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EC2InstanceConnectClient === "function");
assert(typeof EC2InstanceConnect === "function");
// commands
assert(typeof SendSerialConsoleSSHPublicKeyCommand === "function");
assert(typeof SendSSHPublicKeyCommand === "function");
// errors
assert(EC2InstanceConnectServiceException.prototype instanceof Error);
console.log(`EC2InstanceConnect index test passed.`);

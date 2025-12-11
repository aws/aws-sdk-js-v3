import {
  AuthException,
  EC2InstanceConnect,
  EC2InstanceConnectClient,
  EC2InstanceConnectServiceException,
  EC2InstanceNotFoundException,
  EC2InstanceStateInvalidException,
  EC2InstanceTypeInvalidException,
  EC2InstanceUnavailableException,
  InvalidArgsException,
  SendSSHPublicKeyCommand,
  SendSerialConsoleSSHPublicKeyCommand,
  SerialConsoleAccessDisabledException,
  SerialConsoleSessionLimitExceededException,
  SerialConsoleSessionUnavailableException,
  SerialConsoleSessionUnsupportedException,
  ServiceException,
  ThrottlingException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EC2InstanceConnectClient === "function");
assert(typeof EC2InstanceConnect === "function");
// commands
assert(typeof SendSerialConsoleSSHPublicKeyCommand === "function");
assert(typeof SendSSHPublicKeyCommand === "function");
// errors
assert(AuthException.prototype instanceof EC2InstanceConnectServiceException);
assert(EC2InstanceNotFoundException.prototype instanceof EC2InstanceConnectServiceException);
assert(EC2InstanceStateInvalidException.prototype instanceof EC2InstanceConnectServiceException);
assert(EC2InstanceTypeInvalidException.prototype instanceof EC2InstanceConnectServiceException);
assert(EC2InstanceUnavailableException.prototype instanceof EC2InstanceConnectServiceException);
assert(InvalidArgsException.prototype instanceof EC2InstanceConnectServiceException);
assert(SerialConsoleAccessDisabledException.prototype instanceof EC2InstanceConnectServiceException);
assert(SerialConsoleSessionLimitExceededException.prototype instanceof EC2InstanceConnectServiceException);
assert(SerialConsoleSessionUnavailableException.prototype instanceof EC2InstanceConnectServiceException);
assert(SerialConsoleSessionUnsupportedException.prototype instanceof EC2InstanceConnectServiceException);
assert(ServiceException.prototype instanceof EC2InstanceConnectServiceException);
assert(ThrottlingException.prototype instanceof EC2InstanceConnectServiceException);
assert(EC2InstanceConnectServiceException.prototype instanceof Error);
console.log(`EC2InstanceConnect index test passed.`);

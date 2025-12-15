import {
  AuthException,
  AuthException$,
  EC2InstanceConnect,
  EC2InstanceConnectClient,
  EC2InstanceConnectServiceException,
  EC2InstanceNotFoundException,
  EC2InstanceNotFoundException$,
  EC2InstanceStateInvalidException,
  EC2InstanceStateInvalidException$,
  EC2InstanceTypeInvalidException,
  EC2InstanceTypeInvalidException$,
  EC2InstanceUnavailableException,
  EC2InstanceUnavailableException$,
  InvalidArgsException,
  InvalidArgsException$,
  SendSSHPublicKey$,
  SendSSHPublicKeyCommand,
  SendSSHPublicKeyRequest$,
  SendSSHPublicKeyResponse$,
  SendSerialConsoleSSHPublicKey$,
  SendSerialConsoleSSHPublicKeyCommand,
  SendSerialConsoleSSHPublicKeyRequest$,
  SendSerialConsoleSSHPublicKeyResponse$,
  SerialConsoleAccessDisabledException,
  SerialConsoleAccessDisabledException$,
  SerialConsoleSessionLimitExceededException,
  SerialConsoleSessionLimitExceededException$,
  SerialConsoleSessionUnavailableException,
  SerialConsoleSessionUnavailableException$,
  SerialConsoleSessionUnsupportedException,
  SerialConsoleSessionUnsupportedException$,
  ServiceException,
  ServiceException$,
  ThrottlingException,
  ThrottlingException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EC2InstanceConnectClient === "function");
assert(typeof EC2InstanceConnect === "function");
// commands
assert(typeof SendSerialConsoleSSHPublicKeyCommand === "function");
assert(typeof SendSerialConsoleSSHPublicKey$ === "object");
assert(typeof SendSSHPublicKeyCommand === "function");
assert(typeof SendSSHPublicKey$ === "object");
// structural schemas
assert(typeof SendSerialConsoleSSHPublicKeyRequest$ === "object");
assert(typeof SendSerialConsoleSSHPublicKeyResponse$ === "object");
assert(typeof SendSSHPublicKeyRequest$ === "object");
assert(typeof SendSSHPublicKeyResponse$ === "object");
// errors
assert(AuthException.prototype instanceof EC2InstanceConnectServiceException);
assert(typeof AuthException$ === "object");
assert(EC2InstanceNotFoundException.prototype instanceof EC2InstanceConnectServiceException);
assert(typeof EC2InstanceNotFoundException$ === "object");
assert(EC2InstanceStateInvalidException.prototype instanceof EC2InstanceConnectServiceException);
assert(typeof EC2InstanceStateInvalidException$ === "object");
assert(EC2InstanceTypeInvalidException.prototype instanceof EC2InstanceConnectServiceException);
assert(typeof EC2InstanceTypeInvalidException$ === "object");
assert(EC2InstanceUnavailableException.prototype instanceof EC2InstanceConnectServiceException);
assert(typeof EC2InstanceUnavailableException$ === "object");
assert(InvalidArgsException.prototype instanceof EC2InstanceConnectServiceException);
assert(typeof InvalidArgsException$ === "object");
assert(SerialConsoleAccessDisabledException.prototype instanceof EC2InstanceConnectServiceException);
assert(typeof SerialConsoleAccessDisabledException$ === "object");
assert(SerialConsoleSessionLimitExceededException.prototype instanceof EC2InstanceConnectServiceException);
assert(typeof SerialConsoleSessionLimitExceededException$ === "object");
assert(SerialConsoleSessionUnavailableException.prototype instanceof EC2InstanceConnectServiceException);
assert(typeof SerialConsoleSessionUnavailableException$ === "object");
assert(SerialConsoleSessionUnsupportedException.prototype instanceof EC2InstanceConnectServiceException);
assert(typeof SerialConsoleSessionUnsupportedException$ === "object");
assert(ServiceException.prototype instanceof EC2InstanceConnectServiceException);
assert(typeof ServiceException$ === "object");
assert(ThrottlingException.prototype instanceof EC2InstanceConnectServiceException);
assert(typeof ThrottlingException$ === "object");
assert(EC2InstanceConnectServiceException.prototype instanceof Error);
console.log(`EC2InstanceConnect index test passed.`);

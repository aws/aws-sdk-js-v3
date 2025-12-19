const _AE = "AuthException";
const _AZ = "AvailabilityZone";
const _ECINFE = "EC2InstanceNotFoundException";
const _ECISIE = "EC2InstanceStateInvalidException";
const _ECITIE = "EC2InstanceTypeInvalidException";
const _ECIUE = "EC2InstanceUnavailableException";
const _IAE = "InvalidArgsException";
const _II = "InstanceId";
const _IOSU = "InstanceOSUser";
const _M = "Message";
const _RI = "RequestId";
const _S = "Success";
const _SCADE = "SerialConsoleAccessDisabledException";
const _SCSLEE = "SerialConsoleSessionLimitExceededException";
const _SCSUE = "SerialConsoleSessionUnavailableException";
const _SCSUEe = "SerialConsoleSessionUnsupportedException";
const _SE = "ServiceException";
const _SP = "SerialPort";
const _SSCSSHPK = "SendSerialConsoleSSHPublicKey";
const _SSCSSHPKR = "SendSerialConsoleSSHPublicKeyRequest";
const _SSCSSHPKRe = "SendSerialConsoleSSHPublicKeyResponse";
const _SSHPK = "SSHPublicKey";
const _SSSHPK = "SendSSHPublicKey";
const _SSSHPKR = "SendSSHPublicKeyRequest";
const _SSSHPKRe = "SendSSHPublicKeyResponse";
const _TE = "ThrottlingException";
const _aQE = "awsQueryError";
const _c = "client";
const _e = "error";
const _hE = "httpError";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.ec2instanceconnect";
const n0 = "com.amazonaws.ec2instanceconnect";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { EC2InstanceConnectServiceException } from "../models/EC2InstanceConnectServiceException";
import {
  AuthException,
  EC2InstanceNotFoundException,
  EC2InstanceStateInvalidException,
  EC2InstanceTypeInvalidException,
  EC2InstanceUnavailableException,
  InvalidArgsException,
  SerialConsoleAccessDisabledException,
  SerialConsoleSessionLimitExceededException,
  SerialConsoleSessionUnavailableException,
  SerialConsoleSessionUnsupportedException,
  ServiceException,
  ThrottlingException,
} from "../models/errors";

/* eslint no-var: 0 */
export var AuthException$: StaticErrorSchema = [
  -3,
  n0,
  _AE,
  { [_aQE]: [`Forbidden`, 403], [_e]: _c, [_hE]: 403 },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(AuthException$, AuthException);
export var EC2InstanceNotFoundException$: StaticErrorSchema = [
  -3,
  n0,
  _ECINFE,
  { [_aQE]: [`EC2InstanceNotFound`, 404], [_e]: _c, [_hE]: 404 },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(EC2InstanceNotFoundException$, EC2InstanceNotFoundException);
export var EC2InstanceStateInvalidException$: StaticErrorSchema = [
  -3,
  n0,
  _ECISIE,
  { [_aQE]: [`EC2InstanceStateInvalid`, 400], [_e]: _c, [_hE]: 400 },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(EC2InstanceStateInvalidException$, EC2InstanceStateInvalidException);
export var EC2InstanceTypeInvalidException$: StaticErrorSchema = [
  -3,
  n0,
  _ECITIE,
  { [_aQE]: [`EC2InstanceTypeInvalid`, 400], [_e]: _c, [_hE]: 400 },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(EC2InstanceTypeInvalidException$, EC2InstanceTypeInvalidException);
export var EC2InstanceUnavailableException$: StaticErrorSchema = [
  -3,
  n0,
  _ECIUE,
  { [_aQE]: [`EC2InstanceUnavailable`, 503], [_e]: _s, [_hE]: 503 },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(EC2InstanceUnavailableException$, EC2InstanceUnavailableException);
export var InvalidArgsException$: StaticErrorSchema = [
  -3,
  n0,
  _IAE,
  { [_aQE]: [`InvalidArguments`, 400], [_e]: _c, [_hE]: 400 },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidArgsException$, InvalidArgsException);
export var SendSerialConsoleSSHPublicKeyRequest$: StaticStructureSchema = [
  3,
  n0,
  _SSCSSHPKR,
  0,
  [_II, _SP, _SSHPK],
  [0, 1, 0],
];
export var SendSerialConsoleSSHPublicKeyResponse$: StaticStructureSchema = [3, n0, _SSCSSHPKRe, 0, [_RI, _S], [0, 2]];
export var SendSSHPublicKeyRequest$: StaticStructureSchema = [
  3,
  n0,
  _SSSHPKR,
  0,
  [_II, _IOSU, _SSHPK, _AZ],
  [0, 0, 0, 0],
];
export var SendSSHPublicKeyResponse$: StaticStructureSchema = [3, n0, _SSSHPKRe, 0, [_RI, _S], [0, 2]];
export var SerialConsoleAccessDisabledException$: StaticErrorSchema = [
  -3,
  n0,
  _SCADE,
  { [_aQE]: [`SerialConsoleAccessDisabled`, 403], [_e]: _c, [_hE]: 403 },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(SerialConsoleAccessDisabledException$, SerialConsoleAccessDisabledException);
export var SerialConsoleSessionLimitExceededException$: StaticErrorSchema = [
  -3,
  n0,
  _SCSLEE,
  { [_aQE]: [`SerialConsoleSessionLimitExceeded`, 400], [_e]: _c, [_hE]: 400 },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(
  SerialConsoleSessionLimitExceededException$,
  SerialConsoleSessionLimitExceededException
);
export var SerialConsoleSessionUnavailableException$: StaticErrorSchema = [
  -3,
  n0,
  _SCSUE,
  { [_aQE]: [`SerialConsoleSessionUnavailable`, 500], [_e]: _s, [_hE]: 500 },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(SerialConsoleSessionUnavailableException$, SerialConsoleSessionUnavailableException);
export var SerialConsoleSessionUnsupportedException$: StaticErrorSchema = [
  -3,
  n0,
  _SCSUEe,
  { [_aQE]: [`SerialConsoleSessionUnsupported`, 400], [_e]: _c, [_hE]: 400 },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(SerialConsoleSessionUnsupportedException$, SerialConsoleSessionUnsupportedException);
export var ServiceException$: StaticErrorSchema = [
  -3,
  n0,
  _SE,
  { [_aQE]: [`InternalServerError`, 500], [_e]: _s, [_hE]: 500 },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceException$, ServiceException);
export var ThrottlingException$: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  { [_aQE]: [`TooManyRequests`, 429], [_e]: _c, [_hE]: 429 },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var EC2InstanceConnectServiceException$: StaticErrorSchema = [
  -3,
  _sm,
  "EC2InstanceConnectServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(EC2InstanceConnectServiceException$, EC2InstanceConnectServiceException);
export var SendSerialConsoleSSHPublicKey$: StaticOperationSchema = [
  9,
  n0,
  _SSCSSHPK,
  0,
  () => SendSerialConsoleSSHPublicKeyRequest$,
  () => SendSerialConsoleSSHPublicKeyResponse$,
];
export var SendSSHPublicKey$: StaticOperationSchema = [
  9,
  n0,
  _SSSHPK,
  0,
  () => SendSSHPublicKeyRequest$,
  () => SendSSHPublicKeyResponse$,
];

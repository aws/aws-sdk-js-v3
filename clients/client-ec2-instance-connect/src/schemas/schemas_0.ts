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

import { EC2InstanceConnectServiceException as __EC2InstanceConnectServiceException } from "../models/EC2InstanceConnectServiceException";
import {
  AuthException as __AuthException,
  EC2InstanceNotFoundException as __EC2InstanceNotFoundException,
  EC2InstanceStateInvalidException as __EC2InstanceStateInvalidException,
  EC2InstanceTypeInvalidException as __EC2InstanceTypeInvalidException,
  EC2InstanceUnavailableException as __EC2InstanceUnavailableException,
  InvalidArgsException as __InvalidArgsException,
  SerialConsoleAccessDisabledException as __SerialConsoleAccessDisabledException,
  SerialConsoleSessionLimitExceededException as __SerialConsoleSessionLimitExceededException,
  SerialConsoleSessionUnavailableException as __SerialConsoleSessionUnavailableException,
  SerialConsoleSessionUnsupportedException as __SerialConsoleSessionUnsupportedException,
  ServiceException as __ServiceException,
  ThrottlingException as __ThrottlingException,
} from "../models/errors";

/* eslint no-var: 0 */
export var AuthException: StaticErrorSchema = [
  -3,
  n0,
  _AE,
  { [_e]: _c, [_hE]: 403, [_aQE]: [`Forbidden`, 403] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(AuthException, __AuthException);
export var EC2InstanceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _ECINFE,
  { [_e]: _c, [_hE]: 404, [_aQE]: [`EC2InstanceNotFound`, 404] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(EC2InstanceNotFoundException, __EC2InstanceNotFoundException);
export var EC2InstanceStateInvalidException: StaticErrorSchema = [
  -3,
  n0,
  _ECISIE,
  { [_e]: _c, [_hE]: 400, [_aQE]: [`EC2InstanceStateInvalid`, 400] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(EC2InstanceStateInvalidException, __EC2InstanceStateInvalidException);
export var EC2InstanceTypeInvalidException: StaticErrorSchema = [
  -3,
  n0,
  _ECITIE,
  { [_e]: _c, [_hE]: 400, [_aQE]: [`EC2InstanceTypeInvalid`, 400] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(EC2InstanceTypeInvalidException, __EC2InstanceTypeInvalidException);
export var EC2InstanceUnavailableException: StaticErrorSchema = [
  -3,
  n0,
  _ECIUE,
  { [_e]: _s, [_hE]: 503, [_aQE]: [`EC2InstanceUnavailable`, 503] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(EC2InstanceUnavailableException, __EC2InstanceUnavailableException);
export var InvalidArgsException: StaticErrorSchema = [
  -3,
  n0,
  _IAE,
  { [_e]: _c, [_hE]: 400, [_aQE]: [`InvalidArguments`, 400] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidArgsException, __InvalidArgsException);
export var SendSerialConsoleSSHPublicKeyRequest: StaticStructureSchema = [
  3,
  n0,
  _SSCSSHPKR,
  0,
  [_II, _SP, _SSHPK],
  [0, 1, 0],
];
export var SendSerialConsoleSSHPublicKeyResponse: StaticStructureSchema = [3, n0, _SSCSSHPKRe, 0, [_RI, _S], [0, 2]];
export var SendSSHPublicKeyRequest: StaticStructureSchema = [
  3,
  n0,
  _SSSHPKR,
  0,
  [_II, _IOSU, _SSHPK, _AZ],
  [0, 0, 0, 0],
];
export var SendSSHPublicKeyResponse: StaticStructureSchema = [3, n0, _SSSHPKRe, 0, [_RI, _S], [0, 2]];
export var SerialConsoleAccessDisabledException: StaticErrorSchema = [
  -3,
  n0,
  _SCADE,
  { [_e]: _c, [_hE]: 403, [_aQE]: [`SerialConsoleAccessDisabled`, 403] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(SerialConsoleAccessDisabledException, __SerialConsoleAccessDisabledException);
export var SerialConsoleSessionLimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SCSLEE,
  { [_e]: _c, [_hE]: 400, [_aQE]: [`SerialConsoleSessionLimitExceeded`, 400] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(
  SerialConsoleSessionLimitExceededException,
  __SerialConsoleSessionLimitExceededException
);
export var SerialConsoleSessionUnavailableException: StaticErrorSchema = [
  -3,
  n0,
  _SCSUE,
  { [_e]: _s, [_hE]: 500, [_aQE]: [`SerialConsoleSessionUnavailable`, 500] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(
  SerialConsoleSessionUnavailableException,
  __SerialConsoleSessionUnavailableException
);
export var SerialConsoleSessionUnsupportedException: StaticErrorSchema = [
  -3,
  n0,
  _SCSUEe,
  { [_e]: _c, [_hE]: 400, [_aQE]: [`SerialConsoleSessionUnsupported`, 400] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(
  SerialConsoleSessionUnsupportedException,
  __SerialConsoleSessionUnsupportedException
);
export var ServiceException: StaticErrorSchema = [
  -3,
  n0,
  _SE,
  { [_e]: _s, [_hE]: 500, [_aQE]: [`InternalServerError`, 500] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceException, __ServiceException);
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  { [_e]: _c, [_hE]: 429, [_aQE]: [`TooManyRequests`, 429] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);
export var EC2InstanceConnectServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "EC2InstanceConnectServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(EC2InstanceConnectServiceException, __EC2InstanceConnectServiceException);
export var SendSerialConsoleSSHPublicKey: StaticOperationSchema = [
  9,
  n0,
  _SSCSSHPK,
  0,
  () => SendSerialConsoleSSHPublicKeyRequest,
  () => SendSerialConsoleSSHPublicKeyResponse,
];
export var SendSSHPublicKey: StaticOperationSchema = [
  9,
  n0,
  _SSSHPK,
  0,
  () => SendSSHPublicKeyRequest,
  () => SendSSHPublicKeyResponse,
];

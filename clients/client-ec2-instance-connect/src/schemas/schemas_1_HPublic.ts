// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

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
} from "../models/index";
import {
  _AE,
  _aQE,
  _AZ,
  _c,
  _e,
  _ECINFE,
  _ECISIE,
  _ECITIE,
  _ECIUE,
  _hE,
  _IAE,
  _II,
  _IOSU,
  _M,
  _RI,
  _S,
  _s,
  _SCADE,
  _SCSLEE,
  _SCSUE,
  _SCSUEe,
  _SE,
  _SP,
  _SSCSSHPK,
  _SSCSSHPKR,
  _SSCSSHPKRe,
  _SSHPK,
  _SSSHPK,
  _SSSHPKR,
  _SSSHPKRe,
  _TE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AuthException = error(
  n0,
  _AE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`Forbidden`, 403],
  },
  [_M],
  [0],

  __AuthException
);
export var EC2InstanceNotFoundException = error(
  n0,
  _ECINFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`EC2InstanceNotFound`, 404],
  },
  [_M],
  [0],

  __EC2InstanceNotFoundException
);
export var EC2InstanceStateInvalidException = error(
  n0,
  _ECISIE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`EC2InstanceStateInvalid`, 400],
  },
  [_M],
  [0],

  __EC2InstanceStateInvalidException
);
export var EC2InstanceTypeInvalidException = error(
  n0,
  _ECITIE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`EC2InstanceTypeInvalid`, 400],
  },
  [_M],
  [0],

  __EC2InstanceTypeInvalidException
);
export var EC2InstanceUnavailableException = error(
  n0,
  _ECIUE,
  {
    [_e]: _s,
    [_hE]: 503,
    [_aQE]: [`EC2InstanceUnavailable`, 503],
  },
  [_M],
  [0],

  __EC2InstanceUnavailableException
);
export var InvalidArgsException = error(
  n0,
  _IAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidArguments`, 400],
  },
  [_M],
  [0],

  __InvalidArgsException
);
export var SendSerialConsoleSSHPublicKeyRequest = struct(n0, _SSCSSHPKR, 0, [_II, _SP, _SSHPK], [0, 1, 0]);
export var SendSerialConsoleSSHPublicKeyResponse = struct(n0, _SSCSSHPKRe, 0, [_RI, _S], [0, 2]);
export var SendSSHPublicKeyRequest = struct(n0, _SSSHPKR, 0, [_II, _IOSU, _SSHPK, _AZ], [0, 0, 0, 0]);
export var SendSSHPublicKeyResponse = struct(n0, _SSSHPKRe, 0, [_RI, _S], [0, 2]);
export var SerialConsoleAccessDisabledException = error(
  n0,
  _SCADE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`SerialConsoleAccessDisabled`, 403],
  },
  [_M],
  [0],

  __SerialConsoleAccessDisabledException
);
export var SerialConsoleSessionLimitExceededException = error(
  n0,
  _SCSLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SerialConsoleSessionLimitExceeded`, 400],
  },
  [_M],
  [0],

  __SerialConsoleSessionLimitExceededException
);
export var SerialConsoleSessionUnavailableException = error(
  n0,
  _SCSUE,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`SerialConsoleSessionUnavailable`, 500],
  },
  [_M],
  [0],

  __SerialConsoleSessionUnavailableException
);
export var SerialConsoleSessionUnsupportedException = error(
  n0,
  _SCSUEe,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SerialConsoleSessionUnsupported`, 400],
  },
  [_M],
  [0],

  __SerialConsoleSessionUnsupportedException
);
export var ServiceException = error(
  n0,
  _SE,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`InternalServerError`, 500],
  },
  [_M],
  [0],

  __ServiceException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`TooManyRequests`, 429],
  },
  [_M],
  [0],

  __ThrottlingException
);
export var SendSerialConsoleSSHPublicKey = op(
  n0,
  _SSCSSHPK,
  0,
  () => SendSerialConsoleSSHPublicKeyRequest,
  () => SendSerialConsoleSSHPublicKeyResponse
);
export var SendSSHPublicKey = op(
  n0,
  _SSSHPK,
  0,
  () => SendSSHPublicKeyRequest,
  () => SendSSHPublicKeyResponse
);

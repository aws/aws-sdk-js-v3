// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _B,
  _DE,
  _DEe,
  _DER,
  _DERe,
  _DSPK,
  _DSPKR,
  _DUe,
  _DUR,
  _E,
  _EE,
  _EFL,
  _EIx,
  _ER,
  _Er,
  _ERx,
  _ESR,
  _ESRx,
  _Et,
  _Ex,
  _FL,
  _IFL,
  _ISPK,
  _ISPKR,
  _ISPKRm,
  _K,
  _LC,
  _LE,
  _LEi,
  _LEis,
  _LER,
  _LERi,
  _LGN,
  _LR,
  _M,
  _MRa,
  _NT,
  _O,
  _OES,
  _PP,
  _Re,
  _Resp,
  _S,
  _SC,
  _SFLi,
  _SI,
  _SIe,
  _SIo,
  _SM,
  _SPe,
  _SPKB,
  _SPKI,
  _ST,
  _St,
  _TIP,
  _TIPR,
  _TIPRe,
  _Ty,
  _U,
  _UD,
  _UN,
  _UP,
  _VIe,
  _WI,
  n0,
  Unit,
} from "./schemas_0";
import { EfsFileLocation } from "./schemas_5_Workflow";
import { PosixProfile } from "./schemas_19_Describe";

/* eslint no-var: 0 */

export var UserPassword = sim(n0, _UP, 0, 8);
export var DeleteSshPublicKeyRequest = struct(n0, _DSPKR, 0, [_SI, _SPKI, _UN], [0, 0, 0]);
export var DeleteUserRequest = struct(n0, _DUR, 0, [_SI, _UN], [0, 0]);
export var DescribedExecution = struct(
  n0,
  _DE,
  0,
  [_EIx, _IFL, _SM, _ER, _LC, _PP, _S, _Re],
  [
    0,
    () => FileLocation,
    () => ServiceMetadata,
    0,
    () => LoggingConfiguration,
    () => PosixProfile,
    0,
    () => ExecutionResults,
  ]
);
export var DescribeExecutionRequest = struct(n0, _DER, 0, [_EIx, _WI], [0, 0]);
export var DescribeExecutionResponse = struct(n0, _DERe, 0, [_WI, _E], [0, () => DescribedExecution]);
export var ExecutionError = struct(n0, _EE, 0, [_Ty, _M], [0, 0]);
export var ExecutionResults = struct(
  n0,
  _ERx,
  0,
  [_St, _OES],
  [() => ExecutionStepResults, () => ExecutionStepResults]
);
export var ExecutionStepResult = struct(n0, _ESR, 0, [_ST, _O, _Er], [0, 0, () => ExecutionError]);
export var FileLocation = struct(n0, _FL, 0, [_SFLi, _EFL], [() => S3FileLocation, () => EfsFileLocation]);
export var ImportSshPublicKeyRequest = struct(n0, _ISPKR, 0, [_SI, _SPKB, _UN], [0, 0, 0]);
export var ImportSshPublicKeyResponse = struct(n0, _ISPKRm, 0, [_SI, _SPKI, _UN], [0, 0, 0]);
export var ListedExecution = struct(
  n0,
  _LE,
  0,
  [_EIx, _IFL, _SM, _S],
  [0, () => FileLocation, () => ServiceMetadata, 0]
);
export var ListExecutionsRequest = struct(n0, _LER, 0, [_MRa, _NT, _WI], [1, 0, 0]);
export var ListExecutionsResponse = struct(n0, _LERi, 0, [_NT, _WI, _Ex], [0, 0, () => ListedExecutions]);
export var LoggingConfiguration = struct(n0, _LC, 0, [_LR, _LGN], [0, 0]);
export var S3FileLocation = struct(n0, _SFLi, 0, [_B, _K, _VIe, _Et], [0, 0, 0, 0]);
export var ServiceMetadata = struct(n0, _SM, 0, [_UD], [() => UserDetails]);
export var TestIdentityProviderRequest = struct(
  n0,
  _TIPR,
  0,
  [_SI, _SPe, _SIo, _UN, _UP],
  [0, 0, 0, 0, [() => UserPassword, 0]]
);
export var TestIdentityProviderResponse = struct(n0, _TIPRe, 0, [_Resp, _SC, _M, _U], [0, 1, 0, 0]);
export var UserDetails = struct(n0, _UD, 0, [_UN, _SI, _SIe], [0, 0, 0]);
export var ExecutionStepResults = list(n0, _ESRx, 0, () => ExecutionStepResult);
export var ListedExecutions = list(n0, _LEi, 0, () => ListedExecution);
export var DeleteSshPublicKey = op(
  n0,
  _DSPK,
  0,
  () => DeleteSshPublicKeyRequest,
  () => Unit
);
export var DeleteUser = op(
  n0,
  _DUe,
  2,
  () => DeleteUserRequest,
  () => Unit
);
export var DescribeExecution = op(
  n0,
  _DEe,
  0,
  () => DescribeExecutionRequest,
  () => DescribeExecutionResponse
);
export var ImportSshPublicKey = op(
  n0,
  _ISPK,
  0,
  () => ImportSshPublicKeyRequest,
  () => ImportSshPublicKeyResponse
);
export var ListExecutions = op(
  n0,
  _LEis,
  0,
  () => ListExecutionsRequest,
  () => ListExecutionsResponse
);
export var TestIdentityProvider = op(
  n0,
  _TIP,
  0,
  () => TestIdentityProviderRequest,
  () => TestIdentityProviderResponse
);

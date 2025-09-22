// smithy-typescript generated code
import { error, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  EC2AccessDeniedException as __EC2AccessDeniedException,
  EC2ThrottledException as __EC2ThrottledException,
  EC2UnexpectedException as __EC2UnexpectedException,
  EFSIOException as __EFSIOException,
  EFSMountConnectivityException as __EFSMountConnectivityException,
  EFSMountFailureException as __EFSMountFailureException,
  EFSMountTimeoutException as __EFSMountTimeoutException,
  ENILimitReachedException as __ENILimitReachedException,
  InvalidSecurityGroupIDException as __InvalidSecurityGroupIDException,
  InvalidSubnetIDException as __InvalidSubnetIDException,
  InvalidZipFileException as __InvalidZipFileException,
  KMSAccessDeniedException as __KMSAccessDeniedException,
  KMSDisabledException as __KMSDisabledException,
  KMSInvalidStateException as __KMSInvalidStateException,
  KMSNotFoundException as __KMSNotFoundException,
  RecursiveInvocationException as __RecursiveInvocationException,
  RequestTooLargeException as __RequestTooLargeException,
  ResourceNotReadyException as __ResourceNotReadyException,
  SnapStartException as __SnapStartException,
  SnapStartNotReadyException as __SnapStartNotReadyException,
  SnapStartTimeoutException as __SnapStartTimeoutException,
  SubnetIPAddressLimitReachedException as __SubnetIPAddressLimitReachedException,
  UnsupportedMediaTypeException as __UnsupportedMediaTypeException,
} from "../models/index";
import {
  _B,
  _c,
  _CC,
  _CT_,
  _e,
  _EC,
  _ECADE,
  _ECEC,
  _ECTE,
  _ECUE,
  _ED,
  _EFSIOE,
  _EFSMCE,
  _EFSMFE,
  _EFSMTE,
  _ENILRE,
  _eP,
  _ESv,
  _EV,
  _FE,
  _FN,
  _h,
  _hE,
  _hH,
  _hQ,
  _I,
  _ICn,
  _IR,
  _IRn,
  _IRSU,
  _ISGIDE,
  _ISIDE,
  _IT,
  _IWRS,
  _IWRSCE,
  _IWRSR,
  _IWRSRE,
  _IWRSRn,
  _IZFE,
  _KMSADE,
  _KMSDE,
  _KMSISE,
  _KMSNFE,
  _LR,
  _LT,
  _M,
  _m,
  _Pay,
  _PC,
  _Q,
  _RIE,
  _RNRE,
  _RSCT,
  _RTLE,
  _s,
  _SCt,
  _se,
  _SIPALRE,
  _SSE,
  _SSNRE,
  _SSTE,
  _T,
  _UMTE,
  _XACC,
  _XAEV,
  _XAFE,
  _XAIT,
  _XALR,
  _XALT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var _Blob = sim(n0, _B, 21, 8);
export var EC2AccessDeniedException = error(
  n0,
  _ECADE,
  {
    [_e]: _se,
    [_hE]: 502,
  },
  [_T, _M],
  [0, 0],

  __EC2AccessDeniedException
);
export var EC2ThrottledException = error(
  n0,
  _ECTE,
  {
    [_e]: _se,
    [_hE]: 502,
  },
  [_T, _M],
  [0, 0],

  __EC2ThrottledException
);
export var EC2UnexpectedException = error(
  n0,
  _ECUE,
  {
    [_e]: _se,
    [_hE]: 502,
  },
  [_T, _M, _ECEC],
  [0, 0, 0],

  __EC2UnexpectedException
);
export var EFSIOException = error(
  n0,
  _EFSIOE,
  {
    [_e]: _c,
    [_hE]: 410,
  },
  [_T, _M],
  [0, 0],

  __EFSIOException
);
export var EFSMountConnectivityException = error(
  n0,
  _EFSMCE,
  {
    [_e]: _c,
    [_hE]: 408,
  },
  [_T, _M],
  [0, 0],

  __EFSMountConnectivityException
);
export var EFSMountFailureException = error(
  n0,
  _EFSMFE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_T, _M],
  [0, 0],

  __EFSMountFailureException
);
export var EFSMountTimeoutException = error(
  n0,
  _EFSMTE,
  {
    [_e]: _c,
    [_hE]: 408,
  },
  [_T, _M],
  [0, 0],

  __EFSMountTimeoutException
);
export var ENILimitReachedException = error(
  n0,
  _ENILRE,
  {
    [_e]: _se,
    [_hE]: 502,
  },
  [_T, _M],
  [0, 0],

  __ENILimitReachedException
);
export var InvalidSecurityGroupIDException = error(
  n0,
  _ISGIDE,
  {
    [_e]: _se,
    [_hE]: 502,
  },
  [_T, _M],
  [0, 0],

  __InvalidSecurityGroupIDException
);
export var InvalidSubnetIDException = error(
  n0,
  _ISIDE,
  {
    [_e]: _se,
    [_hE]: 502,
  },
  [_T, _M],
  [0, 0],

  __InvalidSubnetIDException
);
export var InvalidZipFileException = error(
  n0,
  _IZFE,
  {
    [_e]: _se,
    [_hE]: 502,
  },
  [_T, _M],
  [0, 0],

  __InvalidZipFileException
);
export var InvocationRequest = struct(
  n0,
  _IR,
  0,
  [_FN, _IT, _LT, _CC, _Pay, _Q],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _XAIT,
      },
    ],
    [
      0,
      {
        [_hH]: _XALT,
      },
    ],
    [
      0,
      {
        [_hH]: _XACC,
      },
    ],
    [() => _Blob, 16],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
  ]
);
export var InvocationResponse = struct(
  n0,
  _IRn,
  0,
  [_SCt, _FE, _LR, _Pay, _EV],
  [
    [1, 32],
    [
      0,
      {
        [_hH]: _XAFE,
      },
    ],
    [
      0,
      {
        [_hH]: _XALR,
      },
    ],
    [() => _Blob, 16],
    [
      0,
      {
        [_hH]: _XAEV,
      },
    ],
  ]
);
export var InvokeResponseStreamUpdate = struct(
  n0,
  _IRSU,
  0,
  [_Pay],
  [
    [
      () => _Blob,
      {
        [_eP]: 1,
      },
    ],
  ]
);
export var InvokeWithResponseStreamCompleteEvent = struct(n0, _IWRSCE, 0, [_EC, _ED, _LR], [0, 0, 0]);
export var InvokeWithResponseStreamRequest = struct(
  n0,
  _IWRSR,
  0,
  [_FN, _IT, _LT, _CC, _Q, _Pay],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _XAIT,
      },
    ],
    [
      0,
      {
        [_hH]: _XALT,
      },
    ],
    [
      0,
      {
        [_hH]: _XACC,
      },
    ],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
    [() => _Blob, 16],
  ]
);
export var InvokeWithResponseStreamResponse = struct(
  n0,
  _IWRSRn,
  0,
  [_SCt, _EV, _ESv, _RSCT],
  [
    [1, 32],
    [
      0,
      {
        [_hH]: _XAEV,
      },
    ],
    [() => InvokeWithResponseStreamResponseEvent, 16],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
  ]
);
export var KMSAccessDeniedException = error(
  n0,
  _KMSADE,
  {
    [_e]: _se,
    [_hE]: 502,
  },
  [_T, _M],
  [0, 0],

  __KMSAccessDeniedException
);
export var KMSDisabledException = error(
  n0,
  _KMSDE,
  {
    [_e]: _se,
    [_hE]: 502,
  },
  [_T, _M],
  [0, 0],

  __KMSDisabledException
);
export var KMSInvalidStateException = error(
  n0,
  _KMSISE,
  {
    [_e]: _se,
    [_hE]: 502,
  },
  [_T, _M],
  [0, 0],

  __KMSInvalidStateException
);
export var KMSNotFoundException = error(
  n0,
  _KMSNFE,
  {
    [_e]: _se,
    [_hE]: 502,
  },
  [_T, _M],
  [0, 0],

  __KMSNotFoundException
);
export var RecursiveInvocationException = error(
  n0,
  _RIE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_T, _M],
  [0, 0],

  __RecursiveInvocationException
);
export var RequestTooLargeException = error(
  n0,
  _RTLE,
  {
    [_e]: _c,
    [_hE]: 413,
  },
  [_T, _m],
  [0, 0],

  __RequestTooLargeException
);
export var ResourceNotReadyException = error(
  n0,
  _RNRE,
  {
    [_e]: _se,
    [_hE]: 502,
  },
  [_T, _m],
  [0, 0],

  __ResourceNotReadyException
);
export var SnapStartException = error(
  n0,
  _SSE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_T, _M],
  [0, 0],

  __SnapStartException
);
export var SnapStartNotReadyException = error(
  n0,
  _SSNRE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_T, _M],
  [0, 0],

  __SnapStartNotReadyException
);
export var SnapStartTimeoutException = error(
  n0,
  _SSTE,
  {
    [_e]: _c,
    [_hE]: 408,
  },
  [_T, _M],
  [0, 0],

  __SnapStartTimeoutException
);
export var SubnetIPAddressLimitReachedException = error(
  n0,
  _SIPALRE,
  {
    [_e]: _se,
    [_hE]: 502,
  },
  [_T, _M],
  [0, 0],

  __SubnetIPAddressLimitReachedException
);
export var UnsupportedMediaTypeException = error(
  n0,
  _UMTE,
  {
    [_e]: _c,
    [_hE]: 415,
  },
  [_T, _m],
  [0, 0],

  __UnsupportedMediaTypeException
);
export var InvokeWithResponseStreamResponseEvent = uni(
  n0,
  _IWRSRE,
  {
    [_s]: 1,
  },
  [_PC, _ICn],
  [[() => InvokeResponseStreamUpdate, 0], () => InvokeWithResponseStreamCompleteEvent]
);
export var Invoke = op(
  n0,
  _I,
  {
    [_h]: ["POST", "/2015-03-31/functions/{FunctionName}/invocations", 200],
  },
  () => InvocationRequest,
  () => InvocationResponse
);
export var InvokeWithResponseStream = op(
  n0,
  _IWRS,
  {
    [_h]: ["POST", "/2021-11-15/functions/{FunctionName}/response-streaming-invocations", 200],
  },
  () => InvokeWithResponseStreamRequest,
  () => InvokeWithResponseStreamResponse
);

// smithy-typescript generated code
import { error, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  InternalDependencyException as __InternalDependencyException,
  InternalFailure as __InternalFailure,
  InternalStreamFailure as __InternalStreamFailure,
  ModelError as __ModelError,
  ModelNotReadyException as __ModelNotReadyException,
  ModelStreamError as __ModelStreamError,
  ServiceUnavailable as __ServiceUnavailable,
  ValidationError as __ValidationError,
} from "../models/index";
import {
  _A,
  _aQE,
  _B,
  _BB,
  _By,
  _c,
  _CA,
  _CAH,
  _CSI,
  _CT,
  _CT_,
  _e,
  _EC,
  _EE,
  _EN,
  _eP,
  _FL,
  _h,
  _hE,
  _hH,
  _ICN,
  _IDE,
  _IE,
  _IEA,
  _IEAI,
  _IEAO,
  _IEI,
  _IEO,
  _IEWRS,
  _IEWRSI,
  _IEWRSO,
  _IF,
  _II,
  _IL,
  _IPV,
  _ISF,
  _ITS,
  _LSA,
  _M,
  _ME,
  _MNRE,
  _MSE,
  _NSI,
  _OL,
  _OM,
  _OSC,
  _PB,
  _PP,
  _RS,
  _RTTLS,
  _s,
  _SI,
  _st,
  _SU,
  _TCH,
  _TM,
  _TV,
  _VE,
  _xAIPV,
  _XASA,
  _XASCA,
  _XASCSI,
  _XASCT,
  _XASEE,
  _XASF,
  _XASI,
  _XASI_,
  _XASIC,
  _XASII,
  _XASNSI,
  _XASO,
  _XASR,
  _XASSI,
  _XASTCH,
  _XASTM,
  _XASTV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BodyBlob = sim(n0, _BB, 21, 8);
export var CustomAttributesHeader = sim(n0, _CAH, 0, 8);
export var PartBlob = sim(n0, _PB, 21, 8);
export var InternalDependencyException = error(
  n0,
  _IDE,
  {
    [_e]: _s,
    [_hE]: 530,
  },
  [_M],
  [0],

  __InternalDependencyException
);
export var InternalFailure = error(
  n0,
  _IF,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalFailure
);
export var InternalStreamFailure = error(
  n0,
  _ISF,
  {
    [_e]: _s,
  },
  [_M],
  [0],

  __InternalStreamFailure
);
export var InvokeEndpointAsyncInput = struct(
  n0,
  _IEAI,
  0,
  [_EN, _CT, _A, _CA, _II, _IL, _RTTLS, _ITS],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _XASCT,
      },
    ],
    [
      0,
      {
        [_hH]: _XASA,
      },
    ],
    [
      () => CustomAttributesHeader,
      {
        [_hH]: _XASCA,
      },
    ],
    [
      0,
      {
        [_hH]: _XASII,
      },
    ],
    [
      0,
      {
        [_hH]: _XASI,
      },
    ],
    [
      1,
      {
        [_hH]: _XASR,
      },
    ],
    [
      1,
      {
        [_hH]: _XASI_,
      },
    ],
  ]
);
export var InvokeEndpointAsyncOutput = struct(
  n0,
  _IEAO,
  0,
  [_II, _OL, _FL],
  [
    0,
    [
      0,
      {
        [_hH]: _XASO,
      },
    ],
    [
      0,
      {
        [_hH]: _XASF,
      },
    ],
  ]
);
export var InvokeEndpointInput = struct(
  n0,
  _IEI,
  0,
  [_EN, _B, _CT, _A, _CA, _TM, _TV, _TCH, _II, _EE, _ICN, _SI],
  [
    [0, 1],
    [() => BodyBlob, 16],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _A,
      },
    ],
    [
      () => CustomAttributesHeader,
      {
        [_hH]: _XASCA,
      },
    ],
    [
      0,
      {
        [_hH]: _XASTM,
      },
    ],
    [
      0,
      {
        [_hH]: _XASTV,
      },
    ],
    [
      0,
      {
        [_hH]: _XASTCH,
      },
    ],
    [
      0,
      {
        [_hH]: _XASII,
      },
    ],
    [
      0,
      {
        [_hH]: _XASEE,
      },
    ],
    [
      0,
      {
        [_hH]: _XASIC,
      },
    ],
    [
      0,
      {
        [_hH]: _XASSI,
      },
    ],
  ]
);
export var InvokeEndpointOutput = struct(
  n0,
  _IEO,
  0,
  [_B, _CT, _IPV, _CA, _NSI, _CSI],
  [
    [() => BodyBlob, 16],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _xAIPV,
      },
    ],
    [
      () => CustomAttributesHeader,
      {
        [_hH]: _XASCA,
      },
    ],
    [
      0,
      {
        [_hH]: _XASNSI,
      },
    ],
    [
      0,
      {
        [_hH]: _XASCSI,
      },
    ],
  ]
);
export var InvokeEndpointWithResponseStreamInput = struct(
  n0,
  _IEWRSI,
  0,
  [_EN, _B, _CT, _A, _CA, _TV, _TCH, _II, _ICN, _SI],
  [
    [0, 1],
    [() => BodyBlob, 16],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _XASA,
      },
    ],
    [
      () => CustomAttributesHeader,
      {
        [_hH]: _XASCA,
      },
    ],
    [
      0,
      {
        [_hH]: _XASTV,
      },
    ],
    [
      0,
      {
        [_hH]: _XASTCH,
      },
    ],
    [
      0,
      {
        [_hH]: _XASII,
      },
    ],
    [
      0,
      {
        [_hH]: _XASIC,
      },
    ],
    [
      0,
      {
        [_hH]: _XASSI,
      },
    ],
  ]
);
export var InvokeEndpointWithResponseStreamOutput = struct(
  n0,
  _IEWRSO,
  0,
  [_B, _CT, _IPV, _CA],
  [
    [() => ResponseStream, 16],
    [
      0,
      {
        [_hH]: _XASCT,
      },
    ],
    [
      0,
      {
        [_hH]: _xAIPV,
      },
    ],
    [
      () => CustomAttributesHeader,
      {
        [_hH]: _XASCA,
      },
    ],
  ]
);
export var ModelError = error(
  n0,
  _ME,
  {
    [_e]: _c,
    [_hE]: 424,
  },
  [_M, _OSC, _OM, _LSA],
  [0, 1, 0, 0],

  __ModelError
);
export var ModelNotReadyException = error(
  n0,
  _MNRE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`ModelNotReadyException`, 429],
  },
  [_M],
  [0],

  __ModelNotReadyException
);
export var ModelStreamError = error(
  n0,
  _MSE,
  {
    [_e]: _c,
  },
  [_M, _EC],
  [0, 0],

  __ModelStreamError
);
export var PayloadPart = struct(
  n0,
  _PP,
  0,
  [_By],
  [
    [
      () => PartBlob,
      {
        [_eP]: 1,
      },
    ],
  ]
);
export var ServiceUnavailable = error(
  n0,
  _SU,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_M],
  [0],

  __ServiceUnavailable
);
export var ValidationError = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ValidationError
);
export var ResponseStream = uni(
  n0,
  _RS,
  {
    [_st]: 1,
  },
  [_PP, _MSE, _ISF],
  [
    [() => PayloadPart, 0],
    [() => ModelStreamError, 0],
    [() => InternalStreamFailure, 0],
  ]
);
export var InvokeEndpoint = op(
  n0,
  _IE,
  {
    [_h]: ["POST", "/endpoints/{EndpointName}/invocations", 200],
  },
  () => InvokeEndpointInput,
  () => InvokeEndpointOutput
);
export var InvokeEndpointAsync = op(
  n0,
  _IEA,
  {
    [_h]: ["POST", "/endpoints/{EndpointName}/async-invocations", 202],
  },
  () => InvokeEndpointAsyncInput,
  () => InvokeEndpointAsyncOutput
);
export var InvokeEndpointWithResponseStream = op(
  n0,
  _IEWRS,
  {
    [_h]: ["POST", "/endpoints/{EndpointName}/invocations-response-stream", 200],
  },
  () => InvokeEndpointWithResponseStreamInput,
  () => InvokeEndpointWithResponseStreamOutput
);

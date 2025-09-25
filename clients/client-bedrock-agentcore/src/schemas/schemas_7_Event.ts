// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { RuntimeClientError as __RuntimeClientError } from "../models/index";
import {
  _A,
  _a,
  _aRA,
  _ba,
  _c,
  _CT,
  _cTo,
  _e,
  _hE,
  _hH,
  _hQ,
  _ht,
  _IAR,
  _IARR,
  _IARRn,
  _iT,
  _m,
  _MPV,
  _mPV,
  _MSI,
  _mSI,
  _p,
  _q,
  _RCE,
  _re,
  _RS,
  _rSI,
  _rUI,
  _s,
  _sCt,
  _se,
  _tI,
  _tP,
  _tr,
  _tra,
  _tS,
  _XABARSI,
  _XABARUI,
  _XATI,
  n0,
} from "./schemas_0";
import { Body } from "./schemas_5_Invoke";

/* eslint no-var: 0 */

export var ResponseStream = sim(n0, _RS, 42, {
  [_s]: 1,
  [_se]: 1,
});
export var InvokeAgentRuntimeRequest = struct(
  n0,
  _IARR,
  0,
  [_cTo, _a, _mSI, _rSI, _mPV, _rUI, _tI, _tP, _tS, _ba, _aRA, _q, _p],
  [
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [
      0,
      {
        [_hH]: _A,
      },
    ],
    [
      0,
      {
        [_hH]: _MSI,
      },
    ],
    [
      0,
      {
        [_hH]: _XABARSI,
        [_iT]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _MPV,
      },
    ],
    [
      0,
      {
        [_hH]: _XABARUI,
      },
    ],
    [
      0,
      {
        [_hH]: _XATI,
      },
    ],
    [
      0,
      {
        [_hH]: _tr,
      },
    ],
    [
      0,
      {
        [_hH]: _tra,
      },
    ],
    [
      0,
      {
        [_hH]: _ba,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _q,
      },
    ],
    [() => Body, 16],
  ]
);
export var InvokeAgentRuntimeResponse = struct(
  n0,
  _IARRn,
  0,
  [_rSI, _mSI, _mPV, _tI, _tP, _tS, _ba, _cTo, _re, _sCt],
  [
    [
      0,
      {
        [_hH]: _XABARSI,
      },
    ],
    [
      0,
      {
        [_hH]: _MSI,
      },
    ],
    [
      0,
      {
        [_hH]: _MPV,
      },
    ],
    [
      0,
      {
        [_hH]: _XATI,
      },
    ],
    [
      0,
      {
        [_hH]: _tr,
      },
    ],
    [
      0,
      {
        [_hH]: _tra,
      },
    ],
    [
      0,
      {
        [_hH]: _ba,
      },
    ],
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [() => ResponseStream, 16],
    [1, 32],
  ]
);
export var RuntimeClientError = error(
  n0,
  _RCE,
  {
    [_e]: _c,
    [_hE]: 424,
  },
  [_m],
  [0],

  __RuntimeClientError
);
export var InvokeAgentRuntime = op(
  n0,
  _IAR,
  {
    [_ht]: ["POST", "/runtimes/{agentRuntimeArn}/invocations", 200],
  },
  () => InvokeAgentRuntimeRequest,
  () => InvokeAgentRuntimeResponse
);

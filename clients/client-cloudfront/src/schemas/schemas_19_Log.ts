// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  RealtimeLogConfigAlreadyExists as __RealtimeLogConfigAlreadyExists,
  TooManyRealtimeLogConfigs as __TooManyRealtimeLogConfigs,
} from "../models/index";
import {
  _ARN,
  _c,
  _CRLC,
  _CRLCR,
  _CRLCRr,
  _e,
  _EP,
  _EPL,
  _EPn,
  _Fi,
  _Fie,
  _FLi,
  _h,
  _hE,
  _KSC,
  _M,
  _N,
  _RARN,
  _RLC,
  _RLCAE,
  _SARNt,
  _SR,
  _ST,
  _TMRLC,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRealtimeLogConfigRequest = struct(
  n0,
  _CRLCR,
  0,
  [_EP, _Fi, _N, _SR],
  [() => EndPointList, [() => FieldList, 0], 0, 1]
);
export var CreateRealtimeLogConfigResult = struct(n0, _CRLCRr, 0, [_RLC], [[() => RealtimeLogConfig, 0]]);
export var EndPoint = struct(n0, _EPn, 0, [_ST, _KSC], [0, () => KinesisStreamConfig]);
export var KinesisStreamConfig = struct(n0, _KSC, 0, [_RARN, _SARNt], [0, 0]);
export var RealtimeLogConfig = struct(
  n0,
  _RLC,
  0,
  [_ARN, _N, _SR, _EP, _Fi],
  [0, 0, 1, () => EndPointList, [() => FieldList, 0]]
);
export var RealtimeLogConfigAlreadyExists = error(
  n0,
  _RLCAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __RealtimeLogConfigAlreadyExists
);
export var TooManyRealtimeLogConfigs = error(
  n0,
  _TMRLC,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyRealtimeLogConfigs
);
export var EndPointList = list(n0, _EPL, 0, () => EndPoint);
export var FieldList = list(n0, _FLi, 0, [
  0,
  {
    [_xN]: _Fie,
  },
]);
export var CreateRealtimeLogConfig = op(
  n0,
  _CRLC,
  {
    [_h]: ["POST", "/2020-05-31/realtime-log-config", 201],
  },
  () => CreateRealtimeLogConfigRequest,
  () => CreateRealtimeLogConfigResult
);

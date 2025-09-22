// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  NoSuchRealtimeLogConfig as __NoSuchRealtimeLogConfig,
  RealtimeLogConfigInUse as __RealtimeLogConfigInUse,
} from "../models/index";
import {
  _ARN,
  _c,
  _DRLC,
  _DRLCR,
  _e,
  _EP,
  _Fi,
  _GRLC,
  _GRLCR,
  _GRLCRe,
  _h,
  _hE,
  _hQ,
  _I,
  _IT,
  _LRLC,
  _LRLCR,
  _LRLCRi,
  _M,
  _Ma,
  _MI,
  _N,
  _NM,
  _NSRLC,
  _RLC,
  _RLCe,
  _RLCIU,
  _RLCL,
  _SR,
  _URLC,
  _URLCR,
  _URLCRp,
  n0,
  Unit,
} from "./schemas_0";
import { EndPointList, FieldList, RealtimeLogConfig } from "./schemas_19_Log";

/* eslint no-var: 0 */

export var DeleteRealtimeLogConfigRequest = struct(n0, _DRLCR, 0, [_N, _ARN], [0, 0]);
export var GetRealtimeLogConfigRequest = struct(n0, _GRLCR, 0, [_N, _ARN], [0, 0]);
export var GetRealtimeLogConfigResult = struct(n0, _GRLCRe, 0, [_RLC], [[() => RealtimeLogConfig, 0]]);
export var ListRealtimeLogConfigsRequest = struct(
  n0,
  _LRLCR,
  0,
  [_MI, _Ma],
  [
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
  ]
);
export var ListRealtimeLogConfigsResult = struct(n0, _LRLCRi, 0, [_RLCe], [[() => RealtimeLogConfigs, 16]]);
export var NoSuchRealtimeLogConfig = error(
  n0,
  _NSRLC,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchRealtimeLogConfig
);
export var RealtimeLogConfigInUse = error(
  n0,
  _RLCIU,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __RealtimeLogConfigInUse
);
export var RealtimeLogConfigs = struct(
  n0,
  _RLCe,
  0,
  [_MI, _I, _IT, _Ma, _NM],
  [1, [() => RealtimeLogConfigList, 0], 2, 0, 0]
);
export var UpdateRealtimeLogConfigRequest = struct(
  n0,
  _URLCR,
  0,
  [_EP, _Fi, _N, _ARN, _SR],
  [() => EndPointList, [() => FieldList, 0], 0, 0, 1]
);
export var UpdateRealtimeLogConfigResult = struct(n0, _URLCRp, 0, [_RLC], [[() => RealtimeLogConfig, 0]]);
export var RealtimeLogConfigList = list(n0, _RLCL, 0, [() => RealtimeLogConfig, 0]);
export var DeleteRealtimeLogConfig = op(
  n0,
  _DRLC,
  {
    [_h]: ["POST", "/2020-05-31/delete-realtime-log-config", 204],
  },
  () => DeleteRealtimeLogConfigRequest,
  () => Unit
);
export var GetRealtimeLogConfig = op(
  n0,
  _GRLC,
  {
    [_h]: ["POST", "/2020-05-31/get-realtime-log-config", 200],
  },
  () => GetRealtimeLogConfigRequest,
  () => GetRealtimeLogConfigResult
);
export var ListRealtimeLogConfigs = op(
  n0,
  _LRLC,
  {
    [_h]: ["GET", "/2020-05-31/realtime-log-config", 200],
  },
  () => ListRealtimeLogConfigsRequest,
  () => ListRealtimeLogConfigsResult
);
export var UpdateRealtimeLogConfig = op(
  n0,
  _URLC,
  {
    [_h]: ["PUT", "/2020-05-31/realtime-log-config", 200],
  },
  () => UpdateRealtimeLogConfigRequest,
  () => UpdateRealtimeLogConfigResult
);

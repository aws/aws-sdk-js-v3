// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  NoSuchTrafficPolicy as __NoSuchTrafficPolicy,
  TrafficPolicyInUse as __TrafficPolicyInUse,
} from "../models/index";
import {
  _C,
  _c,
  _DTP,
  _DTPR,
  _DTPRe,
  _e,
  _GTP,
  _GTPR,
  _GTPRe,
  _hE,
  _ht,
  _I,
  _m,
  _NSTP,
  _TP,
  _TPIU,
  _UTPC,
  _UTPCR,
  _UTPCRp,
  _Ve,
  n0,
} from "./schemas_0";
import { TrafficPolicy } from "./schemas_28_Traffic";

/* eslint no-var: 0 */

export var DeleteTrafficPolicyRequest = struct(
  n0,
  _DTPR,
  0,
  [_I, _Ve],
  [
    [0, 1],
    [1, 1],
  ]
);
export var DeleteTrafficPolicyResponse = struct(n0, _DTPRe, 0, [], []);
export var GetTrafficPolicyRequest = struct(
  n0,
  _GTPR,
  0,
  [_I, _Ve],
  [
    [0, 1],
    [1, 1],
  ]
);
export var GetTrafficPolicyResponse = struct(n0, _GTPRe, 0, [_TP], [() => TrafficPolicy]);
export var NoSuchTrafficPolicy = error(
  n0,
  _NSTP,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __NoSuchTrafficPolicy
);
export var TrafficPolicyInUse = error(
  n0,
  _TPIU,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __TrafficPolicyInUse
);
export var UpdateTrafficPolicyCommentRequest = struct(n0, _UTPCR, 0, [_I, _Ve, _C], [[0, 1], [1, 1], 0]);
export var UpdateTrafficPolicyCommentResponse = struct(n0, _UTPCRp, 0, [_TP], [() => TrafficPolicy]);
export var DeleteTrafficPolicy = op(
  n0,
  _DTP,
  {
    [_ht]: ["DELETE", "/2013-04-01/trafficpolicy/{Id}/{Version}", 200],
  },
  () => DeleteTrafficPolicyRequest,
  () => DeleteTrafficPolicyResponse
);
export var GetTrafficPolicy = op(
  n0,
  _GTP,
  {
    [_ht]: ["GET", "/2013-04-01/trafficpolicy/{Id}/{Version}", 200],
  },
  () => GetTrafficPolicyRequest,
  () => GetTrafficPolicyResponse
);
export var UpdateTrafficPolicyComment = op(
  n0,
  _UTPC,
  {
    [_ht]: ["POST", "/2013-04-01/trafficpolicy/{Id}/{Version}", 200],
  },
  () => UpdateTrafficPolicyCommentRequest,
  () => UpdateTrafficPolicyCommentResponse
);

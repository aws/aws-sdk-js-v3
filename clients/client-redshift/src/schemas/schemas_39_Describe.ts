// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Act,
  _CSGlu,
  _CSGNl,
  _D,
  _DSAes,
  _DSAMe,
  _ET,
  _Fi,
  _i,
  _M,
  _MR,
  _N,
  _SAc,
  _SAch,
  _SAF,
  _SAFL,
  _SAL,
  _SAM,
  _SAN,
  _SAZ,
  _SCIAT,
  _SGS,
  _SIubn,
  _SLu,
  _SSu,
  _STt,
  _Su,
  _Sub,
  _T,
  _TAT,
  _V,
  _VIp,
  _VSL,
  _xN,
  n0,
  TagList,
} from "./schemas_0";
import { ScheduledAction } from "./schemas_5_Scheduled";
import { AvailabilityZone } from "./schemas_15_Cluster";

/* eslint no-var: 0 */

export var ClusterSubnetGroup = struct(
  n0,
  _CSGlu,
  0,
  [_CSGNl, _D, _VIp, _SGS, _Su, _T, _SCIAT],
  [0, 0, 0, 0, [() => SubnetList, 0], [() => TagList, 0], [() => ValueStringList, 0]]
);
export var DescribeScheduledActionsMessage = struct(
  n0,
  _DSAMe,
  0,
  [_SAN, _TAT, _STt, _ET, _Act, _Fi, _M, _MR],
  [0, 0, 4, 4, 2, [() => ScheduledActionFilterList, 0], 0, 1]
);
export var ScheduledActionFilter = struct(n0, _SAF, 0, [_N, _V], [0, [() => ValueStringList, 0]]);
export var ScheduledActionsMessage = struct(n0, _SAM, 0, [_M, _SAch], [0, [() => ScheduledActionList, 0]]);
export var Subnet = struct(n0, _Sub, 0, [_SIubn, _SAZ, _SSu], [0, [() => AvailabilityZone, 0], 0]);
export var ScheduledActionFilterList = list(n0, _SAFL, 0, [
  () => ScheduledActionFilter,
  {
    [_xN]: _SAF,
  },
]);
export var ScheduledActionList = list(n0, _SAL, 0, [
  () => ScheduledAction,
  {
    [_xN]: _SAc,
  },
]);
export var SubnetList = list(n0, _SLu, 0, [
  () => Subnet,
  {
    [_xN]: _Sub,
  },
]);
export var ValueStringList = list(n0, _VSL, 0, [
  0,
  {
    [_xN]: _i,
  },
]);
export var DescribeScheduledActions = op(
  n0,
  _DSAes,
  0,
  () => DescribeScheduledActionsMessage,
  () => ScheduledActionsMessage
);

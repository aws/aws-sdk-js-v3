// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceLinkedRoleFailure as __ServiceLinkedRoleFailure } from "../models/index";
import {
  _AIQ,
  _AIt,
  _ALB,
  _ALBRT,
  _ALBT,
  _ALBTG,
  _ALBTGRT,
  _ALBTGT,
  _aQE,
  _ASGN,
  _ATS,
  _ATSRT,
  _ATST,
  _DP,
  _DPT,
  _e,
  _hE,
  _II,
  _LBN,
  _m,
  _NTot,
  _PN,
  _PNC,
  _PNCT,
  _s,
  _SLRF,
  _SZSV,
  _TARN,
  _TGARN,
  _TS,
  n0,
  Unit,
} from "./schemas_0";
import { TrafficSources } from "./schemas_9_Groups";

/* eslint no-var: 0 */

export var AttachInstancesQuery = struct(n0, _AIQ, 0, [_II, _ASGN], [64 | 0, 0]);
export var AttachLoadBalancersResultType = struct(n0, _ALBRT, 0, [], []);
export var AttachLoadBalancersType = struct(n0, _ALBT, 0, [_ASGN, _LBN], [0, 64 | 0]);
export var AttachLoadBalancerTargetGroupsResultType = struct(n0, _ALBTGRT, 0, [], []);
export var AttachLoadBalancerTargetGroupsType = struct(n0, _ALBTGT, 0, [_ASGN, _TGARN], [0, 64 | 0]);
export var AttachTrafficSourcesResultType = struct(n0, _ATSRT, 0, [], []);
export var AttachTrafficSourcesType = struct(n0, _ATST, 0, [_ASGN, _TS, _SZSV], [0, () => TrafficSources, 2]);
export var DeletePolicyType = struct(n0, _DPT, 0, [_ASGN, _PN], [0, 0]);
export var PutNotificationConfigurationType = struct(n0, _PNCT, 0, [_ASGN, _TARN, _NTot], [0, 0, 64 | 0]);
export var ServiceLinkedRoleFailure = error(
  n0,
  _SLRF,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`ServiceLinkedRoleFailure`, 500],
  },
  [_m],
  [0],

  __ServiceLinkedRoleFailure
);
export var AttachInstances = op(
  n0,
  _AIt,
  0,
  () => AttachInstancesQuery,
  () => Unit
);
export var AttachLoadBalancers = op(
  n0,
  _ALB,
  0,
  () => AttachLoadBalancersType,
  () => AttachLoadBalancersResultType
);
export var AttachLoadBalancerTargetGroups = op(
  n0,
  _ALBTG,
  0,
  () => AttachLoadBalancerTargetGroupsType,
  () => AttachLoadBalancerTargetGroupsResultType
);
export var AttachTrafficSources = op(
  n0,
  _ATS,
  0,
  () => AttachTrafficSourcesType,
  () => AttachTrafficSourcesResultType
);
export var DeletePolicy = op(
  n0,
  _DP,
  0,
  () => DeletePolicyType,
  () => Unit
);
export var PutNotificationConfiguration = op(
  n0,
  _PNC,
  0,
  () => PutNotificationConfigurationType,
  () => Unit
);

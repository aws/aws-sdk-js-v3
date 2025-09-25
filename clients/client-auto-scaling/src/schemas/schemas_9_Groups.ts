// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASGN,
  _DLBTG,
  _DLBTGe,
  _DLBTGR,
  _DLBTGRe,
  _DLBTGRT,
  _DLBTGT,
  _DTS,
  _DTSe,
  _DTSR,
  _DTSRe,
  _DTSRT,
  _DTST,
  _Ide,
  _LBTG,
  _LBTGARN,
  _LBTGS,
  _LBTGSo,
  _MR,
  _NT,
  _Sta,
  _TGARN,
  _TS,
  _TSI,
  _TSr,
  _TSS,
  _TSSr,
  _TST,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeLoadBalancerTargetGroupsRequest = struct(n0, _DLBTGR, 0, [_ASGN, _NT, _MR], [0, 0, 1]);
export var DescribeLoadBalancerTargetGroupsResponse = struct(
  n0,
  _DLBTGRe,
  0,
  [_LBTG, _NT],
  [() => LoadBalancerTargetGroupStates, 0]
);
export var DescribeTrafficSourcesRequest = struct(n0, _DTSR, 0, [_ASGN, _TST, _NT, _MR], [0, 0, 0, 1]);
export var DescribeTrafficSourcesResponse = struct(n0, _DTSRe, 0, [_TS, _NT], [() => TrafficSourceStates, 0]);
export var DetachLoadBalancerTargetGroupsResultType = struct(n0, _DLBTGRT, 0, [], []);
export var DetachLoadBalancerTargetGroupsType = struct(n0, _DLBTGT, 0, [_ASGN, _TGARN], [0, 64 | 0]);
export var DetachTrafficSourcesResultType = struct(n0, _DTSRT, 0, [], []);
export var DetachTrafficSourcesType = struct(n0, _DTST, 0, [_ASGN, _TS], [0, () => TrafficSources]);
export var LoadBalancerTargetGroupState = struct(n0, _LBTGS, 0, [_LBTGARN, _Sta], [0, 0]);
export var TrafficSourceIdentifier = struct(n0, _TSI, 0, [_Ide, _Ty], [0, 0]);
export var TrafficSourceState = struct(n0, _TSS, 0, [_TSr, _Sta, _Ide, _Ty], [0, 0, 0, 0]);
export var LoadBalancerTargetGroupStates = list(n0, _LBTGSo, 0, () => LoadBalancerTargetGroupState);
export var TargetGroupARNs = 64 | 0;

export var TrafficSources = list(n0, _TS, 0, () => TrafficSourceIdentifier);
export var TrafficSourceStates = list(n0, _TSSr, 0, () => TrafficSourceState);
export var DescribeLoadBalancerTargetGroups = op(
  n0,
  _DLBTG,
  0,
  () => DescribeLoadBalancerTargetGroupsRequest,
  () => DescribeLoadBalancerTargetGroupsResponse
);
export var DescribeTrafficSources = op(
  n0,
  _DTS,
  0,
  () => DescribeTrafficSourcesRequest,
  () => DescribeTrafficSourcesResponse
);
export var DetachLoadBalancerTargetGroups = op(
  n0,
  _DLBTGe,
  0,
  () => DetachLoadBalancerTargetGroupsType,
  () => DetachLoadBalancerTargetGroupsResultType
);
export var DetachTrafficSources = op(
  n0,
  _DTSe,
  0,
  () => DetachTrafficSourcesType,
  () => DetachTrafficSourcesResultType
);

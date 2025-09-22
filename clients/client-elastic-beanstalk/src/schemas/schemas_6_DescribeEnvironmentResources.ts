// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASG,
  _ASGL,
  _ASGu,
  _DER,
  _DERM,
  _EI,
  _EN,
  _ER,
  _ERD,
  _ERDM,
  _Id_,
  _IL,
  _In,
  _Ins,
  _LB,
  _LBL,
  _LBo,
  _LC,
  _LCa,
  _LCL,
  _LT,
  _LTa,
  _LTL,
  _N,
  _Q,
  _QL,
  _Qu,
  _TLr,
  _Tr,
  _Tri,
  _URL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutoScalingGroup = struct(n0, _ASG, 0, [_N], [0]);
export var DescribeEnvironmentResourcesMessage = struct(n0, _DERM, 0, [_EI, _EN], [0, 0]);
export var EnvironmentResourceDescription = struct(
  n0,
  _ERD,
  0,
  [_EN, _ASGu, _In, _LC, _LT, _LB, _Tr, _Q],
  [
    0,
    () => AutoScalingGroupList,
    () => InstanceList,
    () => LaunchConfigurationList,
    () => LaunchTemplateList,
    () => LoadBalancerList,
    () => TriggerList,
    () => QueueList,
  ]
);
export var EnvironmentResourceDescriptionsMessage = struct(n0, _ERDM, 0, [_ER], [() => EnvironmentResourceDescription]);
export var Instance = struct(n0, _Ins, 0, [_Id_], [0]);
export var LaunchConfiguration = struct(n0, _LCa, 0, [_N], [0]);
export var LaunchTemplate = struct(n0, _LTa, 0, [_Id_], [0]);
export var LoadBalancer = struct(n0, _LBo, 0, [_N], [0]);
export var Queue = struct(n0, _Qu, 0, [_N, _URL], [0, 0]);
export var Trigger = struct(n0, _Tri, 0, [_N], [0]);
export var AutoScalingGroupList = list(n0, _ASGL, 0, () => AutoScalingGroup);
export var InstanceList = list(n0, _IL, 0, () => Instance);
export var LaunchConfigurationList = list(n0, _LCL, 0, () => LaunchConfiguration);
export var LaunchTemplateList = list(n0, _LTL, 0, () => LaunchTemplate);
export var LoadBalancerList = list(n0, _LBL, 0, () => LoadBalancer);
export var QueueList = list(n0, _QL, 0, () => Queue);
export var TriggerList = list(n0, _TLr, 0, () => Trigger);
export var DescribeEnvironmentResources = op(
  n0,
  _DER,
  0,
  () => DescribeEnvironmentResourcesMessage,
  () => EnvironmentResourceDescriptionsMessage
);

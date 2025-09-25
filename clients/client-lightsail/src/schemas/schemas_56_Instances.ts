// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AITLB,
  _AITLBR,
  _AITLBRt,
  _DIFLB,
  _DIFLBR,
  _DIFLBRe,
  _ht,
  _iNn,
  _lBN,
  _o,
  n0,
  OperationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttachInstancesToLoadBalancerRequest = struct(n0, _AITLBR, 0, [_lBN, _iNn], [0, 64 | 0]);
export var AttachInstancesToLoadBalancerResult = struct(n0, _AITLBRt, 0, [_o], [() => OperationList]);
export var DetachInstancesFromLoadBalancerRequest = struct(n0, _DIFLBR, 0, [_lBN, _iNn], [0, 64 | 0]);
export var DetachInstancesFromLoadBalancerResult = struct(n0, _DIFLBRe, 0, [_o], [() => OperationList]);
export var ResourceNameList = 64 | 0;

export var AttachInstancesToLoadBalancer = op(
  n0,
  _AITLB,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/AttachInstancesToLoadBalancer", 200],
  },
  () => AttachInstancesToLoadBalancerRequest,
  () => AttachInstancesToLoadBalancerResult
);
export var DetachInstancesFromLoadBalancer = op(
  n0,
  _DIFLB,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DetachInstancesFromLoadBalancer", 200],
  },
  () => DetachInstancesFromLoadBalancerRequest,
  () => DetachInstancesFromLoadBalancerResult
);

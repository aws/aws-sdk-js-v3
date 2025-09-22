// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _ar,
  _cRom,
  _CSP,
  _CSPR,
  _CSPRr,
  _DSPe,
  _DSPRes,
  _DSPResc,
  _FP,
  _fP,
  _ht,
  _n,
  _SA,
  _SAL,
  _sD,
  _sDS,
  _sI,
  _sP,
  _SPD,
  _SPDL,
  _t,
  _USP,
  _USPR,
  _USPRp,
  _wF,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSchedulingPolicyRequest = struct(n0, _CSPR, 0, [_n, _fP, _t], [0, () => FairsharePolicy, 128 | 0]);
export var CreateSchedulingPolicyResponse = struct(n0, _CSPRr, 0, [_n, _a], [0, 0]);
export var DescribeSchedulingPoliciesRequest = struct(n0, _DSPRes, 0, [_ar], [64 | 0]);
export var DescribeSchedulingPoliciesResponse = struct(n0, _DSPResc, 0, [_sP], [() => SchedulingPolicyDetailList]);
export var FairsharePolicy = struct(n0, _FP, 0, [_sDS, _cRom, _sD], [1, 1, () => ShareAttributesList]);
export var SchedulingPolicyDetail = struct(n0, _SPD, 0, [_n, _a, _fP, _t], [0, 0, () => FairsharePolicy, 128 | 0]);
export var ShareAttributes = struct(n0, _SA, 0, [_sI, _wF], [0, 1]);
export var UpdateSchedulingPolicyRequest = struct(n0, _USPR, 0, [_a, _fP], [0, () => FairsharePolicy]);
export var UpdateSchedulingPolicyResponse = struct(n0, _USPRp, 0, [], []);
export var SchedulingPolicyDetailList = list(n0, _SPDL, 0, () => SchedulingPolicyDetail);
export var ShareAttributesList = list(n0, _SAL, 0, () => ShareAttributes);
export var CreateSchedulingPolicy = op(
  n0,
  _CSP,
  {
    [_ht]: ["POST", "/v1/createschedulingpolicy", 200],
  },
  () => CreateSchedulingPolicyRequest,
  () => CreateSchedulingPolicyResponse
);
export var DescribeSchedulingPolicies = op(
  n0,
  _DSPe,
  {
    [_ht]: ["POST", "/v1/describeschedulingpolicies", 200],
  },
  () => DescribeSchedulingPoliciesRequest,
  () => DescribeSchedulingPoliciesResponse
);
export var UpdateSchedulingPolicy = op(
  n0,
  _USP,
  {
    [_ht]: ["POST", "/v1/updateschedulingpolicy", 200],
  },
  () => UpdateSchedulingPolicyRequest,
  () => UpdateSchedulingPolicyResponse
);

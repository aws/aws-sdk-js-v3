// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidPolicyDocument as __InvalidPolicyDocument,
  UnknownResourceException as __UnknownResourceException,
} from "../models/index";
import {
  _Ar,
  _c,
  _e,
  _GRQLCP,
  _GRQLCPR,
  _GRQLCPRe,
  _GRRP,
  _GRRPR,
  _GRRPRe,
  _IPD,
  _M,
  _PRQLCP,
  _PRQLCPR,
  _PRQLCPRu,
  _PRRP,
  _PRRPR,
  _PRRPRu,
  _RQLCP,
  _RRP,
  _RV,
  _URE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetResolverQueryLogConfigPolicyRequest = struct(n0, _GRQLCPR, 0, [_Ar], [0]);
export var GetResolverQueryLogConfigPolicyResponse = struct(n0, _GRQLCPRe, 0, [_RQLCP], [0]);
export var GetResolverRulePolicyRequest = struct(n0, _GRRPR, 0, [_Ar], [0]);
export var GetResolverRulePolicyResponse = struct(n0, _GRRPRe, 0, [_RRP], [0]);
export var InvalidPolicyDocument = error(
  n0,
  _IPD,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidPolicyDocument
);
export var PutResolverQueryLogConfigPolicyRequest = struct(n0, _PRQLCPR, 0, [_Ar, _RQLCP], [0, 0]);
export var PutResolverQueryLogConfigPolicyResponse = struct(n0, _PRQLCPRu, 0, [_RV], [2]);
export var PutResolverRulePolicyRequest = struct(n0, _PRRPR, 0, [_Ar, _RRP], [0, 0]);
export var PutResolverRulePolicyResponse = struct(n0, _PRRPRu, 0, [_RV], [2]);
export var UnknownResourceException = error(
  n0,
  _URE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __UnknownResourceException
);
export var GetResolverQueryLogConfigPolicy = op(
  n0,
  _GRQLCP,
  0,
  () => GetResolverQueryLogConfigPolicyRequest,
  () => GetResolverQueryLogConfigPolicyResponse
);
export var GetResolverRulePolicy = op(
  n0,
  _GRRP,
  0,
  () => GetResolverRulePolicyRequest,
  () => GetResolverRulePolicyResponse
);
export var PutResolverQueryLogConfigPolicy = op(
  n0,
  _PRQLCP,
  0,
  () => PutResolverQueryLogConfigPolicyRequest,
  () => PutResolverQueryLogConfigPolicyResponse
);
export var PutResolverRulePolicy = op(
  n0,
  _PRRP,
  0,
  () => PutResolverRulePolicyRequest,
  () => PutResolverRulePolicyResponse
);

// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidPolicyException as __InvalidPolicyException } from "../models/index";
import {
  _aQE,
  _c,
  _DIP,
  _DIPR,
  _DIPRe,
  _e,
  _GIP,
  _GIPR,
  _GIPRe,
  _hE,
  _I,
  _IPE,
  _LIP,
  _LIPR,
  _LIPRi,
  _m,
  _P,
  _PIP,
  _PIPR,
  _PIPRu,
  _PN,
  _PNo,
  _Po,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIdentityPolicyRequest = struct(n0, _DIPR, 0, [_I, _PN], [0, 0]);
export var DeleteIdentityPolicyResponse = struct(n0, _DIPRe, 0, [], []);
export var GetIdentityPoliciesRequest = struct(n0, _GIPR, 0, [_I, _PNo], [0, 64 | 0]);
export var GetIdentityPoliciesResponse = struct(n0, _GIPRe, 0, [_P], [128 | 0]);
export var InvalidPolicyException = error(
  n0,
  _IPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidPolicy`, 400],
  },
  [_m],
  [0],

  __InvalidPolicyException
);
export var ListIdentityPoliciesRequest = struct(n0, _LIPR, 0, [_I], [0]);
export var ListIdentityPoliciesResponse = struct(n0, _LIPRi, 0, [_PNo], [64 | 0]);
export var PutIdentityPolicyRequest = struct(n0, _PIPR, 0, [_I, _PN, _Po], [0, 0, 0]);
export var PutIdentityPolicyResponse = struct(n0, _PIPRu, 0, [], []);
export var PolicyNameList = 64 | 0;

export var PolicyMap = 128 | 0;

export var DeleteIdentityPolicy = op(
  n0,
  _DIP,
  0,
  () => DeleteIdentityPolicyRequest,
  () => DeleteIdentityPolicyResponse
);
export var GetIdentityPolicies = op(
  n0,
  _GIP,
  0,
  () => GetIdentityPoliciesRequest,
  () => GetIdentityPoliciesResponse
);
export var ListIdentityPolicies = op(
  n0,
  _LIP,
  0,
  () => ListIdentityPoliciesRequest,
  () => ListIdentityPoliciesResponse
);
export var PutIdentityPolicy = op(
  n0,
  _PIP,
  0,
  () => PutIdentityPolicyRequest,
  () => PutIdentityPolicyResponse
);

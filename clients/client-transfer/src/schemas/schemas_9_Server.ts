// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DSP,
  _DSPe,
  _DSPR,
  _DSPRe,
  _F,
  _LSP,
  _LSPR,
  _LSPRi,
  _MRa,
  _NT,
  _Pr,
  _SCs,
  _SHKA,
  _SK,
  _SMs,
  _SP,
  _SPN,
  _SPNe,
  _TC,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribedSecurityPolicy = struct(
  n0,
  _DSP,
  0,
  [_F, _SPN, _SCs, _SK, _SMs, _TC, _SHKA, _Ty, _Pr],
  [2, 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 0, 64 | 0]
);
export var DescribeSecurityPolicyRequest = struct(n0, _DSPR, 0, [_SPN], [0]);
export var DescribeSecurityPolicyResponse = struct(n0, _DSPRe, 0, [_SP], [() => DescribedSecurityPolicy]);
export var ListSecurityPoliciesRequest = struct(n0, _LSPR, 0, [_MRa, _NT], [1, 0]);
export var ListSecurityPoliciesResponse = struct(n0, _LSPRi, 0, [_NT, _SPNe], [0, 64 | 0]);
export var SecurityPolicyNames = 64 | 0;

export var SecurityPolicyOptions = 64 | 0;

export var SecurityPolicyProtocols = 64 | 0;

export var DescribeSecurityPolicy = op(
  n0,
  _DSPe,
  0,
  () => DescribeSecurityPolicyRequest,
  () => DescribeSecurityPolicyResponse
);
export var ListSecurityPolicies = op(
  n0,
  _LSP,
  0,
  () => ListSecurityPoliciesRequest,
  () => ListSecurityPoliciesResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AP, _APS, _D, _DN, _DSAP, _DSAPR, _DSAPRe, _O, _S, n0, OptionStatus } from "./schemas_0";

/* eslint no-var: 0 */

export var AccessPoliciesStatus = struct(n0, _APS, 0, [_O, _S], [0, () => OptionStatus]);
export var DescribeServiceAccessPoliciesRequest = struct(n0, _DSAPR, 0, [_DN, _D], [0, 2]);
export var DescribeServiceAccessPoliciesResponse = struct(n0, _DSAPRe, 0, [_AP], [() => AccessPoliciesStatus]);
export var DescribeServiceAccessPolicies = op(
  n0,
  _DSAP,
  0,
  () => DescribeServiceAccessPoliciesRequest,
  () => DescribeServiceAccessPoliciesResponse
);

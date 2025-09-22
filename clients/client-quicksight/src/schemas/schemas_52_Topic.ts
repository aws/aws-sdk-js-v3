// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _DIRes,
  _DIRR,
  _DIRRe,
  _En,
  _h,
  _IRRM,
  _RI,
  _St,
  _UIR,
  _UIRR,
  _UIRRp,
  _VEIRRM,
  _VIRRM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeIpRestrictionRequest = struct(n0, _DIRR, 0, [_AAI], [[0, 1]]);
export var DescribeIpRestrictionResponse = struct(
  n0,
  _DIRRe,
  0,
  [_AAI, _IRRM, _VIRRM, _VEIRRM, _En, _RI, _St],
  [0, 128 | 0, 128 | 0, 128 | 0, 2, 0, [1, 32]]
);
export var UpdateIpRestrictionRequest = struct(
  n0,
  _UIRR,
  0,
  [_AAI, _IRRM, _VIRRM, _VEIRRM, _En],
  [[0, 1], 128 | 0, 128 | 0, 128 | 0, 2]
);
export var UpdateIpRestrictionResponse = struct(n0, _UIRRp, 0, [_AAI, _RI, _St], [0, 0, [1, 32]]);
export var IpRestrictionRuleMap = 128 | 0;

export var VpcEndpointIdRestrictionRuleMap = 128 | 0;

export var VpcIdRestrictionRuleMap = 128 | 0;

export var DescribeIpRestriction = op(
  n0,
  _DIRes,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/ip-restriction", 200],
  },
  () => DescribeIpRestrictionRequest,
  () => DescribeIpRestrictionResponse
);
export var UpdateIpRestriction = op(
  n0,
  _UIR,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/ip-restriction", 200],
  },
  () => UpdateIpRestrictionRequest,
  () => UpdateIpRestrictionResponse
);

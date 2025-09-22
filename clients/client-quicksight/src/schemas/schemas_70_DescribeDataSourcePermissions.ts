// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _DDSPe,
  _DDSPRes,
  _DDSPResc,
  _DSAa,
  _DSIat,
  _h,
  _Per,
  _RI,
  _St,
  n0,
  ResourcePermissionList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeDataSourcePermissionsRequest = struct(
  n0,
  _DDSPRes,
  0,
  [_AAI, _DSIat],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeDataSourcePermissionsResponse = struct(
  n0,
  _DDSPResc,
  0,
  [_DSAa, _DSIat, _Per, _RI, _St],
  [0, 0, () => ResourcePermissionList, 0, [1, 32]]
);
export var DescribeDataSourcePermissions = op(
  n0,
  _DDSPe,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions", 200],
  },
  () => DescribeDataSourcePermissionsRequest,
  () => DescribeDataSourcePermissionsResponse
);

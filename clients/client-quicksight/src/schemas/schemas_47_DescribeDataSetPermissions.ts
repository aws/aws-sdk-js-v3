// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _DDSP,
  _DDSPR,
  _DDSPRe,
  _DSAat,
  _DSI,
  _h,
  _Per,
  _RI,
  _St,
  n0,
  ResourcePermissionList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeDataSetPermissionsRequest = struct(
  n0,
  _DDSPR,
  0,
  [_AAI, _DSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeDataSetPermissionsResponse = struct(
  n0,
  _DDSPRe,
  0,
  [_DSAat, _DSI, _Per, _RI, _St],
  [0, 0, () => ResourcePermissionList, 0, [1, 32]]
);
export var DescribeDataSetPermissions = op(
  n0,
  _DDSP,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions", 200],
  },
  () => DescribeDataSetPermissionsRequest,
  () => DescribeDataSetPermissionsResponse
);

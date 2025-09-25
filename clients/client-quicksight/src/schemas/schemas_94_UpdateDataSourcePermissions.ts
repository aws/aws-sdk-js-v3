// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _DSAa,
  _DSIat,
  _GP,
  _h,
  _RI,
  _RPev,
  _St,
  _UDSPp,
  _UDSPRpd,
  _UDSPRpda,
  n0,
  ResourcePermissionList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateDataSourcePermissionsRequest = struct(
  n0,
  _UDSPRpd,
  0,
  [_AAI, _DSIat, _GP, _RPev],
  [[0, 1], [0, 1], () => ResourcePermissionList, () => ResourcePermissionList]
);
export var UpdateDataSourcePermissionsResponse = struct(
  n0,
  _UDSPRpda,
  0,
  [_DSAa, _DSIat, _RI, _St],
  [0, 0, 0, [1, 32]]
);
export var UpdateDataSourcePermissions = op(
  n0,
  _UDSPp,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions", 200],
  },
  () => UpdateDataSourcePermissionsRequest,
  () => UpdateDataSourcePermissionsResponse
);

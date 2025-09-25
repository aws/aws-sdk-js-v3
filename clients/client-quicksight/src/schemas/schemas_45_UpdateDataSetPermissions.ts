// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _DSAat,
  _DSI,
  _GP,
  _h,
  _RI,
  _RPev,
  _St,
  _UDSP,
  _UDSPR,
  _UDSPRp,
  n0,
  ResourcePermissionList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateDataSetPermissionsRequest = struct(
  n0,
  _UDSPR,
  0,
  [_AAI, _DSI, _GP, _RPev],
  [[0, 1], [0, 1], () => ResourcePermissionList, () => ResourcePermissionList]
);
export var UpdateDataSetPermissionsResponse = struct(n0, _UDSPRp, 0, [_DSAat, _DSI, _RI, _St], [0, 0, 0, [1, 32]]);
export var UpdateDataSetPermissions = op(
  n0,
  _UDSP,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions", 200],
  },
  () => UpdateDataSetPermissionsRequest,
  () => UpdateDataSetPermissionsResponse
);

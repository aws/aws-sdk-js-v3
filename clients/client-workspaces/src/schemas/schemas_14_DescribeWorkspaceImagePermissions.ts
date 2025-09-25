// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DWIP, _DWIPR, _DWIPRe, _II, _IP, _IPm, _MR, _NT, _SAIh, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeWorkspaceImagePermissionsRequest = struct(n0, _DWIPR, 0, [_II, _NT, _MR], [0, 0, 1]);
export var DescribeWorkspaceImagePermissionsResult = struct(
  n0,
  _DWIPRe,
  0,
  [_II, _IP, _NT],
  [0, () => ImagePermissions, 0]
);
export var ImagePermission = struct(n0, _IPm, 0, [_SAIh], [0]);
export var ImagePermissions = list(n0, _IP, 0, () => ImagePermission);
export var DescribeWorkspaceImagePermissions = op(
  n0,
  _DWIP,
  0,
  () => DescribeWorkspaceImagePermissionsRequest,
  () => DescribeWorkspaceImagePermissionsResult
);

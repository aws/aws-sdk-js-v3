// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CSCT, _CSon, _DWCS, _DWCSR, _DWCSRe, _LKUCT, _NT, _WCS, _WCSL, _WCSo, _WI, _WIo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeWorkspacesConnectionStatusRequest = struct(n0, _DWCSR, 0, [_WIo, _NT], [64 | 0, 0]);
export var DescribeWorkspacesConnectionStatusResult = struct(
  n0,
  _DWCSRe,
  0,
  [_WCS, _NT],
  [() => WorkspaceConnectionStatusList, 0]
);
export var WorkspaceConnectionStatus = struct(n0, _WCSo, 0, [_WI, _CSon, _CSCT, _LKUCT], [0, 0, 4, 4]);
export var WorkspaceConnectionStatusList = list(n0, _WCSL, 0, () => WorkspaceConnectionStatus);
export var WorkspaceIdList = 64 | 0;

export var DescribeWorkspacesConnectionStatus = op(
  n0,
  _DWCS,
  0,
  () => DescribeWorkspacesConnectionStatusRequest,
  () => DescribeWorkspacesConnectionStatusResult
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AT,
  _CSon,
  _DWPS,
  _DWPSR,
  _DWPSRe,
  _EI,
  _EPIA,
  _ET,
  _IIn,
  _Li,
  _NAC,
  _NT,
  _PI,
  _Se,
  _SIe,
  _ST,
  _UI,
  _WPS,
  _WPSo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeWorkspacesPoolSessionsRequest = struct(n0, _DWPSR, 0, [_PI, _UI, _Li, _NT], [0, 0, 1, 0]);
export var DescribeWorkspacesPoolSessionsResult = struct(n0, _DWPSRe, 0, [_Se, _NT], [() => WorkspacesPoolSessions, 0]);
export var NetworkAccessConfiguration = struct(n0, _NAC, 0, [_EPIA, _EI], [0, 0]);
export var WorkspacesPoolSession = struct(
  n0,
  _WPS,
  0,
  [_AT, _CSon, _SIe, _IIn, _PI, _ET, _NAC, _ST, _UI],
  [0, 0, 0, 0, 0, 4, () => NetworkAccessConfiguration, 4, 0]
);
export var WorkspacesPoolSessions = list(n0, _WPSo, 0, () => WorkspacesPoolSession);
export var DescribeWorkspacesPoolSessions = op(
  n0,
  _DWPS,
  0,
  () => DescribeWorkspacesPoolSessionsRequest,
  () => DescribeWorkspacesPoolSessionsResult
);

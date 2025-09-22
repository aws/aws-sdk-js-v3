// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DWC,
  _DWCR,
  _DWCRe,
  _h,
  _l,
  _LPLS,
  _lPLS,
  _LPLSE,
  _LPLSL,
  _lS,
  _mS,
  _rPID,
  _s,
  _sC,
  _sR,
  _wC,
  _WCD,
  _WCS,
  _wI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeWorkspaceConfigurationRequest = struct(n0, _DWCR, 0, [_wI], [[0, 1]]);
export var DescribeWorkspaceConfigurationResponse = struct(
  n0,
  _DWCRe,
  0,
  [_wC],
  [() => WorkspaceConfigurationDescription]
);
export var LimitsPerLabelSet = struct(n0, _LPLS, 0, [_l, _lS], [() => LimitsPerLabelSetEntry, 128 | 0]);
export var LimitsPerLabelSetEntry = struct(n0, _LPLSE, 0, [_mS], [1]);
export var WorkspaceConfigurationDescription = struct(
  n0,
  _WCD,
  0,
  [_s, _lPLS, _rPID],
  [() => WorkspaceConfigurationStatus, () => LimitsPerLabelSetList, 1]
);
export var WorkspaceConfigurationStatus = struct(n0, _WCS, 0, [_sC, _sR], [0, 0]);
export var LimitsPerLabelSetList = list(n0, _LPLSL, 0, () => LimitsPerLabelSet);
export var LabelSet = 128 | 0;

export var DescribeWorkspaceConfiguration = op(
  n0,
  _DWC,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}/configuration", 200],
  },
  () => DescribeWorkspaceConfigurationRequest,
  () => DescribeWorkspaceConfigurationResponse
);

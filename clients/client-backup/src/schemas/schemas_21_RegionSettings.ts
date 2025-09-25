// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRS, _DRSI, _DRSO, _h, _RTMP, _RTOIP, _URS, _URSI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeRegionSettingsInput = struct(n0, _DRSI, 0, [], []);
export var DescribeRegionSettingsOutput = struct(n0, _DRSO, 0, [_RTOIP, _RTMP], [128 | 2, 128 | 2]);
export var UpdateRegionSettingsInput = struct(n0, _URSI, 0, [_RTOIP, _RTMP], [128 | 2, 128 | 2]);
export var ResourceTypeManagementPreference = 128 | 2;

export var ResourceTypeOptInPreference = 128 | 2;

export var DescribeRegionSettings = op(
  n0,
  _DRS,
  {
    [_h]: ["GET", "/account-settings", 200],
  },
  () => DescribeRegionSettingsInput,
  () => DescribeRegionSettingsOutput
);
export var UpdateRegionSettings = op(
  n0,
  _URS,
  {
    [_h]: ["PUT", "/account-settings", 200],
  },
  () => UpdateRegionSettingsInput,
  () => Unit
);

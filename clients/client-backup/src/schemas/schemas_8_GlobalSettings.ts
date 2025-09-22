// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DGS, _DGSI, _DGSO, _GS, _h, _LUT, _UGS, _UGSI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeGlobalSettingsInput = struct(n0, _DGSI, 0, [], []);
export var DescribeGlobalSettingsOutput = struct(n0, _DGSO, 0, [_GS, _LUT], [128 | 0, 4]);
export var UpdateGlobalSettingsInput = struct(n0, _UGSI, 0, [_GS], [128 | 0]);
export var GlobalSettings = 128 | 0;

export var DescribeGlobalSettings = op(
  n0,
  _DGS,
  {
    [_h]: ["GET", "/global-settings", 200],
  },
  () => DescribeGlobalSettingsInput,
  () => DescribeGlobalSettingsOutput
);
export var UpdateGlobalSettings = op(
  n0,
  _UGS,
  {
    [_h]: ["PUT", "/global-settings", 200],
  },
  () => UpdateGlobalSettingsInput,
  () => Unit
);

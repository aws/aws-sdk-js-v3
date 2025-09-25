// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AVl,
  _AVp,
  _DI,
  _DSe,
  _DSRes,
  _DSResc,
  _DT,
  _LRDT,
  _LUDTa,
  _Na,
  _NT,
  _RDS,
  _RSe,
  _RSM,
  _RV,
  _S,
  _SE,
  _SEet,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeSettingsRequest = struct(n0, _DSRes, 0, [_DI, _S, _NT], [0, 0, 0]);
export var DescribeSettingsResult = struct(n0, _DSResc, 0, [_DI, _SE, _NT], [0, () => SettingEntries, 0]);
export var SettingEntry = struct(
  n0,
  _SEet,
  0,
  [_Ty, _Na, _AVl, _AVp, _RV, _RSe, _RDS, _RSM, _LUDTa, _LRDT, _DT],
  [0, 0, 0, 0, 0, 0, 128 | 0, 0, 4, 4, 0]
);
export var SettingEntries = list(n0, _SE, 0, () => SettingEntry);
export var DirectoryConfigurationSettingRequestDetailedStatus = 128 | 0;

export var DescribeSettings = op(
  n0,
  _DSe,
  0,
  () => DescribeSettingsRequest,
  () => DescribeSettingsResult
);

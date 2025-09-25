// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ADS,
  _DN,
  _DSMBS,
  _DSMBSI,
  _DSMBSO,
  _FSV,
  _GA,
  _GARN,
  _SMBGPS,
  _SMBLG,
  _SMBSS,
  _USMBLG,
  _USMBLGI,
  _USMBLGO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeSMBSettingsInput = struct(n0, _DSMBSI, 0, [_GARN], [0]);
export var DescribeSMBSettingsOutput = struct(
  n0,
  _DSMBSO,
  0,
  [_GARN, _DN, _ADS, _SMBGPS, _SMBSS, _FSV, _SMBLG],
  [0, 0, 0, 2, 0, 2, () => SMBLocalGroups]
);
export var SMBLocalGroups = struct(n0, _SMBLG, 0, [_GA], [64 | 0]);
export var UpdateSMBLocalGroupsInput = struct(n0, _USMBLGI, 0, [_GARN, _SMBLG], [0, () => SMBLocalGroups]);
export var UpdateSMBLocalGroupsOutput = struct(n0, _USMBLGO, 0, [_GARN], [0]);
export var UserList = 64 | 0;

export var DescribeSMBSettings = op(
  n0,
  _DSMBS,
  0,
  () => DescribeSMBSettingsInput,
  () => DescribeSMBSettingsOutput
);
export var UpdateSMBLocalGroups = op(
  n0,
  _USMBLG,
  0,
  () => UpdateSMBLocalGroupsInput,
  () => UpdateSMBLocalGroupsOutput
);

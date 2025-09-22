// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AN,
  _COS,
  _COSL,
  _CSVM,
  _EN,
  _M,
  _Me,
  _Na,
  _ON,
  _OS,
  _RN,
  _Se,
  _TN,
  _Va,
  _VCS,
  _VCSM,
  _VM,
  _VML,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConfigurationOptionSetting = struct(n0, _COS, 0, [_RN, _Na, _ON, _Va], [0, 0, 0, 0]);
export var ConfigurationSettingsValidationMessages = struct(n0, _CSVM, 0, [_M], [() => ValidationMessagesList]);
export var ValidateConfigurationSettingsMessage = struct(
  n0,
  _VCSM,
  0,
  [_AN, _TN, _EN, _OS],
  [0, 0, 0, () => ConfigurationOptionSettingsList]
);
export var ValidationMessage = struct(n0, _VM, 0, [_Me, _Se, _Na, _ON], [0, 0, 0, 0]);
export var ConfigurationOptionSettingsList = list(n0, _COSL, 0, () => ConfigurationOptionSetting);
export var ValidationMessagesList = list(n0, _VML, 0, () => ValidationMessage);
export var ValidateConfigurationSettings = op(
  n0,
  _VCS,
  0,
  () => ValidateConfigurationSettingsMessage,
  () => ConfigurationSettingsValidationMessages
);

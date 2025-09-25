// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AJCI, _DIS, _h, _IMS, _IMT, _IS, _JC, _JPK, _OSS, _UGS, _UGSI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AccountJiraConfigurationInput = struct(n0, _AJCI, 0, [_IMS, _IMT, _JPK, _IS], [0, 0, 0, 0]);
export var UpdateGlobalSettingsInput = struct(
  n0,
  _UGSI,
  0,
  [_OSS, _DIS, _JC],
  [0, 0, () => AccountJiraConfigurationInput]
);
export var UpdateGlobalSettings = op(
  n0,
  _UGS,
  {
    [_h]: ["PATCH", "/global-settings", 200],
  },
  () => UpdateGlobalSettingsInput,
  () => Unit
);

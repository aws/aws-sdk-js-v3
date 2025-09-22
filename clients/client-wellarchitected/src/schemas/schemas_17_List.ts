// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AJCO, _DIS, _GGS, _GGSO, _h, _IMS, _IMT, _IS, _JC, _JPK, _OSS, _S, _SM, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AccountJiraConfigurationOutput = struct(n0, _AJCO, 0, [_IS, _IMS, _IMT, _S, _JPK, _SM], [0, 0, 0, 0, 0, 0]);
export var GetGlobalSettingsOutput = struct(
  n0,
  _GGSO,
  0,
  [_OSS, _DIS, _JC],
  [0, 0, () => AccountJiraConfigurationOutput]
);
export var GetGlobalSettings = op(
  n0,
  _GGS,
  {
    [_h]: ["GET", "/global-settings", 200],
  },
  () => Unit,
  () => GetGlobalSettingsOutput
);

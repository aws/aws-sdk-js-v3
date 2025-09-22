// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CB, _GGS, _GGSR, _h, _UGS, _UGSR, _VC, _VCS, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var GetGlobalSettingsResponse = struct(n0, _GGSR, 0, [_VC], [() => VoiceConnectorSettings]);
export var UpdateGlobalSettingsRequest = struct(n0, _UGSR, 0, [_VC], [() => VoiceConnectorSettings]);
export var VoiceConnectorSettings = struct(n0, _VCS, 0, [_CB], [0]);
export var GetGlobalSettings = op(
  n0,
  _GGS,
  {
    [_h]: ["GET", "/settings", 200],
  },
  () => Unit,
  () => GetGlobalSettingsResponse
);
export var UpdateGlobalSettings = op(
  n0,
  _UGS,
  {
    [_h]: ["PUT", "/settings", 204],
  },
  () => UpdateGlobalSettingsRequest,
  () => Unit
);

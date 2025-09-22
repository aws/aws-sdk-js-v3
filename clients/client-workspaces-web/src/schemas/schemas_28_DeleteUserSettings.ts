// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DUS, _DUSR, _DUSRe, _h, _uSA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUserSettingsRequest = struct(n0, _DUSR, 0, [_uSA], [[0, 1]]);
export var DeleteUserSettingsResponse = struct(n0, _DUSRe, 0, [], []);
export var DeleteUserSettings = op(
  n0,
  _DUS,
  {
    [_h]: ["DELETE", "/userSettings/{userSettingsArn+}", 200],
  },
  () => DeleteUserSettingsRequest,
  () => DeleteUserSettingsResponse
);

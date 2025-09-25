// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DUSi, _DUSRi, _DUSRis, _h, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateUserSettingsRequest = struct(n0, _DUSRi, 0, [_pA], [[0, 1]]);
export var DisassociateUserSettingsResponse = struct(n0, _DUSRis, 0, [], []);
export var DisassociateUserSettings = op(
  n0,
  _DUSi,
  {
    [_h]: ["DELETE", "/portals/{portalArn+}/userSettings", 200],
  },
  () => DisassociateUserSettingsRequest,
  () => DisassociateUserSettingsResponse
);

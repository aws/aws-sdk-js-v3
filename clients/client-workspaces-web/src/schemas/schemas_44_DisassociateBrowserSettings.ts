// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DBSi, _DBSRi, _DBSRis, _h, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateBrowserSettingsRequest = struct(n0, _DBSRi, 0, [_pA], [[0, 1]]);
export var DisassociateBrowserSettingsResponse = struct(n0, _DBSRis, 0, [], []);
export var DisassociateBrowserSettings = op(
  n0,
  _DBSi,
  {
    [_h]: ["DELETE", "/portals/{portalArn+}/browserSettings", 200],
  },
  () => DisassociateBrowserSettingsRequest,
  () => DisassociateBrowserSettingsResponse
);

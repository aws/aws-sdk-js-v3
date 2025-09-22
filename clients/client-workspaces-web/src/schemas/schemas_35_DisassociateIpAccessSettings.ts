// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIASi, _DIASRi, _DIASRis, _h, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateIpAccessSettingsRequest = struct(n0, _DIASRi, 0, [_pA], [[0, 1]]);
export var DisassociateIpAccessSettingsResponse = struct(n0, _DIASRis, 0, [], []);
export var DisassociateIpAccessSettings = op(
  n0,
  _DIASi,
  {
    [_h]: ["DELETE", "/portals/{portalArn+}/ipAccessSettings", 200],
  },
  () => DisassociateIpAccessSettingsRequest,
  () => DisassociateIpAccessSettingsResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DUALSi, _DUALSRi, _DUALSRis, _h, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateUserAccessLoggingSettingsRequest = struct(n0, _DUALSRi, 0, [_pA], [[0, 1]]);
export var DisassociateUserAccessLoggingSettingsResponse = struct(n0, _DUALSRis, 0, [], []);
export var DisassociateUserAccessLoggingSettings = op(
  n0,
  _DUALSi,
  {
    [_h]: ["DELETE", "/portals/{portalArn+}/userAccessLoggingSettings", 200],
  },
  () => DisassociateUserAccessLoggingSettingsRequest,
  () => DisassociateUserAccessLoggingSettingsResponse
);

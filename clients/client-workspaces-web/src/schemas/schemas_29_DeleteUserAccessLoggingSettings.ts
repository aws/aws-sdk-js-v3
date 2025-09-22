// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DUALS, _DUALSR, _DUALSRe, _h, _uALSA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUserAccessLoggingSettingsRequest = struct(n0, _DUALSR, 0, [_uALSA], [[0, 1]]);
export var DeleteUserAccessLoggingSettingsResponse = struct(n0, _DUALSRe, 0, [], []);
export var DeleteUserAccessLoggingSettings = op(
  n0,
  _DUALS,
  {
    [_h]: ["DELETE", "/userAccessLoggingSettings/{userAccessLoggingSettingsArn+}", 200],
  },
  () => DeleteUserAccessLoggingSettingsRequest,
  () => DeleteUserAccessLoggingSettingsResponse
);

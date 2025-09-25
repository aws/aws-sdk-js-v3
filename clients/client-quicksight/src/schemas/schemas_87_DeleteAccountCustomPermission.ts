// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DACP, _DACPR, _DACPRe, _h, _RI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccountCustomPermissionRequest = struct(n0, _DACPR, 0, [_AAI], [[0, 1]]);
export var DeleteAccountCustomPermissionResponse = struct(n0, _DACPRe, 0, [_RI, _St], [0, 1]);
export var DeleteAccountCustomPermission = op(
  n0,
  _DACP,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/custom-permission", 200],
  },
  () => DeleteAccountCustomPermissionRequest,
  () => DeleteAccountCustomPermissionResponse
);

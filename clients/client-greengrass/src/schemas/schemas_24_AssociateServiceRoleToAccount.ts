// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _ASRTA, _ASRTAR, _ASRTARs, _h, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateServiceRoleToAccountRequest = struct(n0, _ASRTAR, 0, [_RA], [0]);
export var AssociateServiceRoleToAccountResponse = struct(n0, _ASRTARs, 0, [_AA], [0]);
export var AssociateServiceRoleToAccount = op(
  n0,
  _ASRTA,
  {
    [_h]: ["PUT", "/greengrass/servicerole", 200],
  },
  () => AssociateServiceRoleToAccountRequest,
  () => AssociateServiceRoleToAccountResponse
);

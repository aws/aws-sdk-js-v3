// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aAId, _DOAA, _DOAAR, _DOAARe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterOrganizationAdminAccountRequest = struct(n0, _DOAAR, 0, [_aAId], [0]);
export var DeregisterOrganizationAdminAccountResponse = struct(n0, _DOAARe, 0, [], []);
export var DeregisterOrganizationAdminAccount = op(
  n0,
  _DOAA,
  {
    [_h]: ["POST", "/account/deregisterOrganizationAdminAccount", 200],
  },
  () => DeregisterOrganizationAdminAccountRequest,
  () => DeregisterOrganizationAdminAccountResponse
);

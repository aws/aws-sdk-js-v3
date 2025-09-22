// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aAId, _GOAA, _GOAAR, _GOAARe, _h, _oI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetOrganizationAdminAccountRequest = struct(n0, _GOAAR, 0, [], []);
export var GetOrganizationAdminAccountResponse = struct(n0, _GOAARe, 0, [_aAId, _oI], [0, 0]);
export var GetOrganizationAdminAccount = op(
  n0,
  _GOAA,
  {
    [_h]: ["GET", "/account/organizationAdminAccount", 200],
  },
  () => GetOrganizationAdminAccountRequest,
  () => GetOrganizationAdminAccountResponse
);

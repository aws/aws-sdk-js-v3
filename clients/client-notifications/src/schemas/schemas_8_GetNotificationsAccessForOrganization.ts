// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aSc, _GNAFO, _GNAFOR, _GNAFORe, _ht, _NAFO, _nAFO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetNotificationsAccessForOrganizationRequest = struct(n0, _GNAFOR, 0, [], []);
export var GetNotificationsAccessForOrganizationResponse = struct(
  n0,
  _GNAFORe,
  0,
  [_nAFO],
  [() => NotificationsAccessForOrganization]
);
export var NotificationsAccessForOrganization = struct(n0, _NAFO, 0, [_aSc], [0]);
export var Unit = "unit" as const;

export var GetNotificationsAccessForOrganization = op(
  n0,
  _GNAFO,
  {
    [_ht]: ["GET", "/organization/access", 200],
  },
  () => GetNotificationsAccessForOrganizationRequest,
  () => GetNotificationsAccessForOrganizationResponse
);

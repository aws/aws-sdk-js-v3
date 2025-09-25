// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDLDA, _DDLDAR, _DDLDARe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterDataLakeDelegatedAdministratorRequest = struct(n0, _DDLDAR, 0, [], []);
export var DeregisterDataLakeDelegatedAdministratorResponse = struct(n0, _DDLDARe, 0, [], []);
export var DeregisterDataLakeDelegatedAdministrator = op(
  n0,
  _DDLDA,
  {
    [_h]: ["DELETE", "/v1/datalake/delegate", 200],
  },
  () => DeregisterDataLakeDelegatedAdministratorRequest,
  () => DeregisterDataLakeDelegatedAdministratorResponse
);

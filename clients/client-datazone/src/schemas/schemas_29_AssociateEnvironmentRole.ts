// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AER, _AERI, _AERO, _dI, _eInv, _eRA, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateEnvironmentRoleInput = struct(
  n0,
  _AERI,
  0,
  [_dI, _eInv, _eRA],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var AssociateEnvironmentRoleOutput = struct(n0, _AERO, 0, [], []);
export var AssociateEnvironmentRole = op(
  n0,
  _AER,
  {
    [_ht]: [
      "PUT",
      "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/roles/{environmentRoleArn}",
      200,
    ],
  },
  () => AssociateEnvironmentRoleInput,
  () => AssociateEnvironmentRoleOutput
);

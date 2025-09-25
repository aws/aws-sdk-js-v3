// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DER, _DERI, _DERO, _dI, _eInv, _eRA, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateEnvironmentRoleInput = struct(
  n0,
  _DERI,
  0,
  [_dI, _eInv, _eRA],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateEnvironmentRoleOutput = struct(n0, _DERO, 0, [], []);
export var DisassociateEnvironmentRole = op(
  n0,
  _DER,
  {
    [_ht]: [
      "DELETE",
      "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/roles/{environmentRoleArn}",
      200,
    ],
  },
  () => DisassociateEnvironmentRoleInput,
  () => DisassociateEnvironmentRoleOutput
);

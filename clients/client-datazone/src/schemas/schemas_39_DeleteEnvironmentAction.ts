// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEA, _DEAI, _dI, _eInv, _ht, _i, n0, Unit_n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEnvironmentActionInput = struct(
  n0,
  _DEAI,
  0,
  [_dI, _eInv, _i],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteEnvironmentAction = op(
  n0,
  _DEA,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions/{identifier}", 204],
  },
  () => DeleteEnvironmentActionInput,
  () => Unit_n1
);

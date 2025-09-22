// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DE, _DEI, _dI, _ht, _i, n0, Unit_n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEnvironmentInput = struct(
  n0,
  _DEI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteEnvironment = op(
  n0,
  _DE,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/environments/{identifier}", 204],
  },
  () => DeleteEnvironmentInput,
  () => Unit_n1
);

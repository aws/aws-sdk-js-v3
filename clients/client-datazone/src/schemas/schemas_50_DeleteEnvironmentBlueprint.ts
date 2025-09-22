// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEB, _DEBI, _dI, _ht, _i, n0, Unit_n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEnvironmentBlueprintInput = struct(
  n0,
  _DEBI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteEnvironmentBlueprint = op(
  n0,
  _DEB,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/environment-blueprints/{identifier}", 204],
  },
  () => DeleteEnvironmentBlueprintInput,
  () => Unit_n1
);

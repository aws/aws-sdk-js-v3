// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEBC, _DEBCI, _DEBCO, _dI, _eBI, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEnvironmentBlueprintConfigurationInput = struct(
  n0,
  _DEBCI,
  0,
  [_dI, _eBI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteEnvironmentBlueprintConfigurationOutput = struct(n0, _DEBCO, 0, [], []);
export var DeleteEnvironmentBlueprintConfiguration = op(
  n0,
  _DEBC,
  {
    [_ht]: [
      "DELETE",
      "/v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}",
      204,
    ],
  },
  () => DeleteEnvironmentBlueprintConfigurationInput,
  () => DeleteEnvironmentBlueprintConfigurationOutput
);

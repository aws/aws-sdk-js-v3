// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DE, _DER, _DERe, _eI, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEnvironmentRequest = struct(n0, _DER, 0, [_eI], [[0, 1]]);
export var DeleteEnvironmentResponse = struct(n0, _DERe, 0, [], []);
export var DeleteEnvironment = op(
  n0,
  _DE,
  {
    [_h]: ["DELETE", "/environments/{environmentId}", 200],
  },
  () => DeleteEnvironmentRequest,
  () => DeleteEnvironmentResponse
);

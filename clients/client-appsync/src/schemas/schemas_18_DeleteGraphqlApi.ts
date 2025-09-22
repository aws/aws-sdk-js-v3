// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DGA, _DGAR, _DGARe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGraphqlApiRequest = struct(n0, _DGAR, 0, [_aI], [[0, 1]]);
export var DeleteGraphqlApiResponse = struct(n0, _DGARe, 0, [], []);
export var DeleteGraphqlApi = op(
  n0,
  _DGA,
  {
    [_h]: ["DELETE", "/v1/apis/{apiId}", 200],
  },
  () => DeleteGraphqlApiRequest,
  () => DeleteGraphqlApiResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DA, _DAR, _DARe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApiRequest = struct(n0, _DAR, 0, [_aI], [[0, 1]]);
export var DeleteApiResponse = struct(n0, _DARe, 0, [], []);
export var DeleteApi = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/v2/apis/{apiId}", 200],
  },
  () => DeleteApiRequest,
  () => DeleteApiResponse
);

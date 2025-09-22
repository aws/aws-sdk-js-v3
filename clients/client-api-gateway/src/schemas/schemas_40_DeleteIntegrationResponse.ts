// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIRe, _DIRR, _hM, _ht, _rAI, _rI, _sC, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIntegrationResponseRequest = struct(
  n0,
  _DIRR,
  0,
  [_rAI, _rI, _hM, _sC],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteIntegrationResponse = op(
  n0,
  _DIRe,
  {
    [_ht]: [
      "DELETE",
      "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}",
      204,
    ],
  },
  () => DeleteIntegrationResponseRequest,
  () => Unit
);

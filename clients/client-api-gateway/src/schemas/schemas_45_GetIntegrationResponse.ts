// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GIRe, _GIRR, _hM, _ht, _rAI, _rI, _sC, IntegrationResponse, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetIntegrationResponseRequest = struct(
  n0,
  _GIRR,
  0,
  [_rAI, _rI, _hM, _sC],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetIntegrationResponse = op(
  n0,
  _GIRe,
  {
    [_ht]: [
      "GET",
      "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}",
      200,
    ],
  },
  () => GetIntegrationResponseRequest,
  () => IntegrationResponse
);

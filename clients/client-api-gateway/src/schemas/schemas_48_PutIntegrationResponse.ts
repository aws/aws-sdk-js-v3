// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cH, _hM, _ht, _PIRR, _PIRu, _rAI, _rI, _rP, _rTe, _sC, _sPe, IntegrationResponse, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutIntegrationResponseRequest = struct(
  n0,
  _PIRR,
  0,
  [_rAI, _rI, _hM, _sC, _sPe, _rP, _rTe, _cH],
  [[0, 1], [0, 1], [0, 1], [0, 1], 0, 128 | 0, 128 | 0, 0]
);
export var PutIntegrationResponse = op(
  n0,
  _PIRu,
  {
    [_ht]: [
      "PUT",
      "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}",
      201,
    ],
  },
  () => PutIntegrationResponseRequest,
  () => IntegrationResponse
);

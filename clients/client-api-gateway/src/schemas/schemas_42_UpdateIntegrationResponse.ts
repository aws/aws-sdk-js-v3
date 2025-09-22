// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _hM,
  _ht,
  _pO,
  _rAI,
  _rI,
  _sC,
  _UIRp,
  _UIRR,
  IntegrationResponse,
  ListOfPatchOperation,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateIntegrationResponseRequest = struct(
  n0,
  _UIRR,
  0,
  [_rAI, _rI, _hM, _sC, _pO],
  [[0, 1], [0, 1], [0, 1], [0, 1], () => ListOfPatchOperation]
);
export var UpdateIntegrationResponse = op(
  n0,
  _UIRp,
  {
    [_ht]: [
      "PATCH",
      "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}",
      200,
    ],
  },
  () => UpdateIntegrationResponseRequest,
  () => IntegrationResponse
);

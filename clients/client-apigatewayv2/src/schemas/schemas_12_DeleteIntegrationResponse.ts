// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DIRe, _DIRR, _ht, _IIn, _IRI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIntegrationResponseRequest = struct(
  n0,
  _DIRR,
  0,
  [_AI, _IIn, _IRI],
  [
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
      "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}",
      204,
    ],
  },
  () => DeleteIntegrationResponseRequest,
  () => Unit
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DIe, _DIR, _ht, _IIn, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIntegrationRequest = struct(
  n0,
  _DIR,
  0,
  [_AI, _IIn],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteIntegration = op(
  n0,
  _DIe,
  {
    [_ht]: ["DELETE", "/v2/apis/{ApiId}/integrations/{IntegrationId}", 204],
  },
  () => DeleteIntegrationRequest,
  () => Unit
);

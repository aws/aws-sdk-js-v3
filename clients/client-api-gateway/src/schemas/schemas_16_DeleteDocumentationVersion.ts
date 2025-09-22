// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDV, _DDVR, _dV, _ht, _rAI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDocumentationVersionRequest = struct(
  n0,
  _DDVR,
  0,
  [_rAI, _dV],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDocumentationVersion = op(
  n0,
  _DDV,
  {
    [_ht]: ["DELETE", "/restapis/{restApiId}/documentation/versions/{documentationVersion}", 202],
  },
  () => DeleteDocumentationVersionRequest,
  () => Unit
);

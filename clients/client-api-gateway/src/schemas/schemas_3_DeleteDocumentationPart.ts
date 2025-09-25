// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDP, _DDPR, _dPI, _ht, _rAI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDocumentationPartRequest = struct(
  n0,
  _DDPR,
  0,
  [_rAI, _dPI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDocumentationPart = op(
  n0,
  _DDP,
  {
    [_ht]: ["DELETE", "/restapis/{restApiId}/documentation/parts/{documentationPartId}", 202],
  },
  () => DeleteDocumentationPartRequest,
  () => Unit
);

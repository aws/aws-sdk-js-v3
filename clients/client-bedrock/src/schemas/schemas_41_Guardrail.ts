// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DG, _DGR, _DGRe, _gIu, _gV, _hQ, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGuardrailRequest = struct(
  n0,
  _DGR,
  0,
  [_gIu, _gV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _gV,
      },
    ],
  ]
);
export var DeleteGuardrailResponse = struct(n0, _DGRe, 0, [], []);
export var DeleteGuardrail = op(
  n0,
  _DG,
  {
    [_ht]: ["DELETE", "/guardrails/{guardrailIdentifier}", 202],
  },
  () => DeleteGuardrailRequest,
  () => DeleteGuardrailResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aA, _GFRen, _GFRR, _h, _hQ, _i, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var GenerateFindingRecommendationRequest = struct(
  n0,
  _GFRR,
  0,
  [_aA, _i],
  [
    [
      0,
      {
        [_hQ]: _aA,
      },
    ],
    [0, 1],
  ]
);
export var GenerateFindingRecommendation = op(
  n0,
  _GFRen,
  {
    [_h]: ["POST", "/recommendation/{id}", 200],
  },
  () => GenerateFindingRecommendationRequest,
  () => Unit
);

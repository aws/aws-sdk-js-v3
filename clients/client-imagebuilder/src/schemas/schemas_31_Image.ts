// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GIRet, _GIRR, _GIRRe, _hQ, _ht, _iR, _iRA, _rI, n0 } from "./schemas_0";
import { ImageRecipe } from "./schemas_13_Recipe";

/* eslint no-var: 0 */

export var GetImageRecipeRequest = struct(
  n0,
  _GIRR,
  0,
  [_iRA],
  [
    [
      0,
      {
        [_hQ]: _iRA,
      },
    ],
  ]
);
export var GetImageRecipeResponse = struct(n0, _GIRRe, 0, [_rI, _iR], [0, () => ImageRecipe]);
export var GetImageRecipe = op(
  n0,
  _GIRet,
  {
    [_ht]: ["GET", "/GetImageRecipe", 200],
  },
  () => GetImageRecipeRequest,
  () => GetImageRecipeResponse
);

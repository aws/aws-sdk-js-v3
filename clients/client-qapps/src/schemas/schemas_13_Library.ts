// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aC, _C, _cat, _CLa, _co, _h, _hH, _i, _iI, _ii, _LC, _LCI, _LCO, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Category = struct(n0, _C, 0, [_i, _t, _co, _aC], [0, 0, 0, 1]);
export var ListCategoriesInput = struct(
  n0,
  _LCI,
  0,
  [_iI],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
  ]
);
export var ListCategoriesOutput = struct(n0, _LCO, 0, [_cat], [() => CategoriesList]);
export var CategoriesList = list(n0, _CLa, 0, () => Category);
export var ListCategories = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/catalog.listCategories", 200],
  },
  () => ListCategoriesInput,
  () => ListCategoriesOutput
);

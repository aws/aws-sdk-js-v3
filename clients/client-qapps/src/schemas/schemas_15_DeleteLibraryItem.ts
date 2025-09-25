// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DLI, _DLII, _h, _hH, _iI, _ii, _lII, n0 } from "./schemas_0";
import { Unit } from "./schemas_7_App";

/* eslint no-var: 0 */

export var DeleteLibraryItemInput = struct(
  n0,
  _DLII,
  0,
  [_iI, _lII],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    0,
  ]
);
export var DeleteLibraryItem = op(
  n0,
  _DLI,
  {
    [_h]: ["POST", "/catalog.deleteItem", 200],
  },
  () => DeleteLibraryItemInput,
  () => Unit
);

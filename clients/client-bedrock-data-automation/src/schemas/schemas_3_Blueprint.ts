// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bA, _bV, _DB, _DBR, _DBRe, _h, _hQ, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBlueprintRequest = struct(
  n0,
  _DBR,
  0,
  [_bA, _bV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _bV,
      },
    ],
  ]
);
export var DeleteBlueprintResponse = struct(n0, _DBRe, 0, [], []);
export var DeleteBlueprint = op(
  n0,
  _DB,
  {
    [_h]: ["DELETE", "/blueprints/{blueprintArn}/", 200],
  },
  () => DeleteBlueprintRequest,
  () => DeleteBlueprintResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _I, _L, _l, _RSGL, _RSGLI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveStreamGroupLocationsInput = struct(
  n0,
  _RSGLI,
  0,
  [_I, _L],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _l,
      },
    ],
  ]
);
export var LocationsList = 64 | 0;

export var RemoveStreamGroupLocations = op(
  n0,
  _RSGL,
  {
    [_h]: ["DELETE", "/streamgroups/{Identifier}/locations", 204],
  },
  () => RemoveStreamGroupLocationsInput,
  () => Unit
);

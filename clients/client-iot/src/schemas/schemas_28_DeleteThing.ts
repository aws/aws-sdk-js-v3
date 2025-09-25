// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DT, _DTR, _DTRe, _eV, _h, _hQ, _tN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteThingRequest = struct(
  n0,
  _DTR,
  0,
  [_tN, _eV],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _eV,
      },
    ],
  ]
);
export var DeleteThingResponse = struct(n0, _DTRe, 0, [], []);
export var DeleteThing = op(
  n0,
  _DT,
  {
    [_h]: ["DELETE", "/things/{thingName}", 200],
  },
  () => DeleteThingRequest,
  () => DeleteThingResponse
);

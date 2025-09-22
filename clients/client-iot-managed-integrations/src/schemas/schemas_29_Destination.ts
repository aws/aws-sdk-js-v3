// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMT, _DMTR, _Fo, _h, _hQ, _Id, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteManagedThingRequest = struct(
  n0,
  _DMTR,
  0,
  [_Id, _Fo],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _Fo,
      },
    ],
  ]
);
export var DeleteManagedThing = op(
  n0,
  _DMT,
  {
    [_h]: ["DELETE", "/managed-things/{Identifier}", 204],
  },
  () => DeleteManagedThingRequest,
  () => Unit
);

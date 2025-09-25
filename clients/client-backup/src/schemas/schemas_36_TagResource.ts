// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _RA, _Ta, _TR, _TRI, n0, Unit } from "./schemas_0";
import { Tags } from "./schemas_41_Backup";

/* eslint no-var: 0 */

export var TagResourceInput = struct(
  n0,
  _TRI,
  0,
  [_RA, _Ta],
  [
    [0, 1],
    [() => Tags, 0],
  ]
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceInput,
  () => Unit
);

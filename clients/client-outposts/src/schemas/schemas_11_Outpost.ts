// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DO, _DOI, _DOO, _h, _OIu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteOutpostInput = struct(n0, _DOI, 0, [_OIu], [[0, 1]]);
export var DeleteOutpostOutput = struct(n0, _DOO, 0, [], []);
export var DeleteOutpost = op(
  n0,
  _DO,
  {
    [_h]: ["DELETE", "/outposts/{OutpostId}", 200],
  },
  () => DeleteOutpostInput,
  () => DeleteOutpostOutput
);

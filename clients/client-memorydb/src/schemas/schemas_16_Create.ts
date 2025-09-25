// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _K, _Tag, _TL, _Va, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Tag = struct(n0, _Tag, 0, [_K, _Va], [0, 0]);
export var TagList = list(n0, _TL, 0, [
  () => Tag,
  {
    [_xN]: _Tag,
  },
]);

// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _K, _Ta, _TL, _Val, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Tag = struct(n0, _Ta, 0, [_K, _Val], [0, 0]);
export var TagList = list(n0, _TL, 0, [
  () => Tag,
  {
    [_xN]: _Ta,
  },
]);

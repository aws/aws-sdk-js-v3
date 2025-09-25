// smithy-typescript generated code
import { list, sim, struct } from "@smithy/core/schema";

import { _K, _T, _TL, _TV, _V, n0, TagKey } from "./schemas_0";

/* eslint no-var: 0 */

export var TagValue = sim(n0, _TV, 0, 8);
export var Tag = struct(
  n0,
  _T,
  8,
  [_K, _V],
  [
    [() => TagKey, 0],
    [() => TagValue, 0],
  ]
);
export var TagList = list(n0, _TL, 0, [() => Tag, 0]);

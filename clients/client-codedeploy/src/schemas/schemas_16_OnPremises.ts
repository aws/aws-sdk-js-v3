// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _K, _RA, _Ta, _Tag, _TL, _TRa, _TRI, _TRO, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_RA, _Ta], [0, () => TagList]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var TagList = list(n0, _TL, 0, () => Tag);
export var TagResource = op(
  n0,
  _TRa,
  0,
  () => TagResourceInput,
  () => TagResourceOutput
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _K,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _RAe,
  _T,
  _Tag,
  _TK,
  _TL,
  _TRa,
  _TRI,
  _TRO,
  _UR,
  _URI,
  _URO,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_RAe], [0]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_T], [() => TagList]);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_RAe, _T], [0, () => TagList]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var UntagResourceInput = struct(n0, _URI, 0, [_RAe, _TK], [0, 64 | 0]);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TRa,
  0,
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceInput,
  () => UntagResourceOutput
);

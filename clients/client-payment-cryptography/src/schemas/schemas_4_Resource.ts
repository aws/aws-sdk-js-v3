// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _K,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _MR,
  _NT,
  _RA,
  _T,
  _Ta,
  _TK,
  _TR,
  _TRI,
  _TRO,
  _UR,
  _URI,
  _URO,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_RA, _NT, _MR], [0, 0, 1]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_T, _NT], [() => Tags, 0]);
export var Tag = struct(n0, _Ta, 0, [_K, _Va], [0, 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_RA, _T], [0, () => Tags]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var UntagResourceInput = struct(n0, _URI, 0, [_RA, _TK], [0, 64 | 0]);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var TagKeys = 64 | 0;

export var Tags = list(n0, _T, 0, () => Tag);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TR,
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

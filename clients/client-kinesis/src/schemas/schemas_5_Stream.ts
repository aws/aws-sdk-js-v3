// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ATTS,
  _ATTSI,
  _CSI,
  _CSr,
  _ESTK,
  _HMT,
  _K,
  _L,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _LTFS,
  _LTFSI,
  _LTFSO,
  _RARN,
  _RTFS,
  _RTFSI,
  _SARN,
  _SC,
  _SMD,
  _SN,
  _T,
  _Ta,
  _TK,
  _TL,
  _TR,
  _TRI,
  _UR,
  _URI,
  _V,
  n0,
  Unit,
} from "./schemas_0";
import { StreamModeDetails } from "./schemas_11_Stream";

/* eslint no-var: 0 */

export var AddTagsToStreamInput = struct(n0, _ATTSI, 0, [_SN, _T, _SARN], [0, 128 | 0, 0]);
export var CreateStreamInput = struct(n0, _CSI, 0, [_SN, _SC, _SMD, _T], [0, 1, () => StreamModeDetails, 128 | 0]);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_RARN], [0]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_T], [() => TagList]);
export var ListTagsForStreamInput = struct(n0, _LTFSI, 0, [_SN, _ESTK, _L, _SARN], [0, 0, 1, 0]);
export var ListTagsForStreamOutput = struct(n0, _LTFSO, 0, [_T, _HMT], [() => TagList, 2]);
export var RemoveTagsFromStreamInput = struct(n0, _RTFSI, 0, [_SN, _TK, _SARN], [0, 64 | 0, 0]);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_T, _RARN], [128 | 0, 0]);
export var UntagResourceInput = struct(n0, _URI, 0, [_TK, _RARN], [64 | 0, 0]);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var TagMap = 128 | 0;

export var AddTagsToStream = op(
  n0,
  _ATTS,
  0,
  () => AddTagsToStreamInput,
  () => Unit
);
export var CreateStream = op(
  n0,
  _CSr,
  0,
  () => CreateStreamInput,
  () => Unit
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var ListTagsForStream = op(
  n0,
  _LTFS,
  0,
  () => ListTagsForStreamInput,
  () => ListTagsForStreamOutput
);
export var RemoveTagsFromStream = op(
  n0,
  _RTFS,
  0,
  () => RemoveTagsFromStreamInput,
  () => Unit
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceInput,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceInput,
  () => Unit
);

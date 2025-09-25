// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ATTR,
  _ATTRI,
  _ATTRO,
  _L,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _M,
  _RARN,
  _RTFR,
  _RTFRI,
  _RTFRO,
  _T,
  _TK,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddTagsToResourceInput = struct(n0, _ATTRI, 0, [_RARN, _T], [0, () => Tags]);
export var AddTagsToResourceOutput = struct(n0, _ATTRO, 0, [_RARN], [0]);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_RARN, _M, _L], [0, 0, 1]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_RARN, _M, _T], [0, 0, () => Tags]);
export var RemoveTagsFromResourceInput = struct(n0, _RTFRI, 0, [_RARN, _TK], [0, 64 | 0]);
export var RemoveTagsFromResourceOutput = struct(n0, _RTFRO, 0, [_RARN], [0]);
export var TagKeys = 64 | 0;

export var AddTagsToResource = op(
  n0,
  _ATTR,
  0,
  () => AddTagsToResourceInput,
  () => AddTagsToResourceOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var RemoveTagsFromResource = op(
  n0,
  _RTFR,
  0,
  () => RemoveTagsFromResourceInput,
  () => RemoveTagsFromResourceOutput
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _GT, _GTI, _GTO, _h, _K, _T, _Ta, _TI, _TO, _U, _UI, _UO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetTagsInput = struct(n0, _GTI, 0, [_A], [[0, 1]]);
export var GetTagsOutput = struct(n0, _GTO, 0, [_A, _T], [0, 128 | 0]);
export var TagInput = struct(n0, _TI, 0, [_A, _T], [[0, 1], 128 | 0]);
export var TagOutput = struct(n0, _TO, 0, [_A, _T], [0, 128 | 0]);
export var UntagInput = struct(n0, _UI, 0, [_A, _K], [[0, 1], 64 | 0]);
export var UntagOutput = struct(n0, _UO, 0, [_A, _K], [0, 64 | 0]);
export var TagKeyList = 64 | 0;

export var Tags = 128 | 0;

export var GetTags = op(
  n0,
  _GT,
  {
    [_h]: ["GET", "/resources/{Arn}/tags", 200],
  },
  () => GetTagsInput,
  () => GetTagsOutput
);
export var Tag = op(
  n0,
  _Ta,
  {
    [_h]: ["PUT", "/resources/{Arn}/tags", 200],
  },
  () => TagInput,
  () => TagOutput
);
export var Untag = op(
  n0,
  _U,
  {
    [_h]: ["PATCH", "/resources/{Arn}/tags", 200],
  },
  () => UntagInput,
  () => UntagOutput
);

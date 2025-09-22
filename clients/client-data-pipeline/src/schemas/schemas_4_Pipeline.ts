// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AT, _ATI, _ATO, _k, _pI, _T, _t, _tL, _val, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AddTagsInput = struct(n0, _ATI, 0, [_pI, _t], [0, () => tagList]);
export var AddTagsOutput = struct(n0, _ATO, 0, [], []);
export var Tag = struct(n0, _T, 0, [_k, _val], [0, 0]);
export var tagList = list(n0, _tL, 0, () => Tag);
export var AddTags = op(
  n0,
  _AT,
  0,
  () => AddTagsInput,
  () => AddTagsOutput
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ATd,
  _ATI,
  _ATO,
  _DTe,
  _DTI,
  _DTO,
  _LTI,
  _LTis,
  _LTO,
  _MR,
  _NT,
  _RA,
  _T,
  _TK,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddTagsInput = struct(n0, _ATI, 0, [_RA, _T], [0, () => TagList]);
export var AddTagsOutput = struct(n0, _ATO, 0, [_T], [() => TagList]);
export var DeleteTagsInput = struct(n0, _DTI, 0, [_RA, _TK], [0, 64 | 0]);
export var DeleteTagsOutput = struct(n0, _DTO, 0, [], []);
export var ListTagsInput = struct(n0, _LTI, 0, [_RA, _NT, _MR], [0, 0, 1]);
export var ListTagsOutput = struct(n0, _LTO, 0, [_T, _NT], [() => TagList, 0]);
export var TagKeyList = 64 | 0;

export var AddTags = op(
  n0,
  _ATd,
  0,
  () => AddTagsInput,
  () => AddTagsOutput
);
export var DeleteTags = op(
  n0,
  _DTe,
  0,
  () => DeleteTagsInput,
  () => DeleteTagsOutput
);
export var ListTags = op(
  n0,
  _LTis,
  0,
  () => ListTagsInput,
  () => ListTagsOutput
);

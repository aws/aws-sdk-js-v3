// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidTagException as __InvalidTagException,
  TagLimitExceededException as __TagLimitExceededException,
} from "../models/index";
import {
  _AT,
  _ATI,
  _ATO,
  _c,
  _DT,
  _DTe,
  _DTI,
  _DTIe,
  _DTO,
  _DTOe,
  _e,
  _ITE,
  _K,
  _m,
  _RI,
  _RT,
  _T,
  _Ta,
  _TK,
  _TL,
  _TLEE,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddTagsInput = struct(n0, _ATI, 0, [_T, _RI, _RT], [() => TagList, 0, 0]);
export var AddTagsOutput = struct(n0, _ATO, 0, [_RI, _RT], [0, 0]);
export var DeleteTagsInput = struct(n0, _DTI, 0, [_TK, _RI, _RT], [64 | 0, 0, 0]);
export var DeleteTagsOutput = struct(n0, _DTO, 0, [_RI, _RT], [0, 0]);
export var DescribeTagsInput = struct(n0, _DTIe, 0, [_RI, _RT], [0, 0]);
export var DescribeTagsOutput = struct(n0, _DTOe, 0, [_RI, _RT, _T], [0, 0, () => TagList]);
export var InvalidTagException = error(
  n0,
  _ITE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidTagException
);
export var Tag = struct(n0, _Ta, 0, [_K, _Va], [0, 0]);
export var TagLimitExceededException = error(
  n0,
  _TLEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TagLimitExceededException
);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var AddTags = op(
  n0,
  _AT,
  0,
  () => AddTagsInput,
  () => AddTagsOutput
);
export var DeleteTags = op(
  n0,
  _DT,
  0,
  () => DeleteTagsInput,
  () => DeleteTagsOutput
);
export var DescribeTags = op(
  n0,
  _DTe,
  0,
  () => DescribeTagsInput,
  () => DescribeTagsOutput
);

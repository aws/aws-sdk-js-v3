// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DuplicateTagKeysException as __DuplicateTagKeysException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _aQE,
  _ATd,
  _ATI,
  _ATO,
  _c,
  _DT,
  _DTI,
  _DTKE,
  _DTO,
  _e,
  _hE,
  _K,
  _LBN,
  _LBNo,
  _M,
  _RT,
  _RTI,
  _RTO,
  _T,
  _Tag,
  _TD,
  _TDa,
  _TKL,
  _TKO,
  _TL,
  _TMTE,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddTagsInput = struct(n0, _ATI, 0, [_LBNo, _T], [64 | 0, () => TagList]);
export var AddTagsOutput = struct(n0, _ATO, 0, [], []);
export var DescribeTagsInput = struct(n0, _DTI, 0, [_LBNo], [64 | 0]);
export var DescribeTagsOutput = struct(n0, _DTO, 0, [_TD], [() => TagDescriptions]);
export var DuplicateTagKeysException = error(
  n0,
  _DTKE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DuplicateTagKeys`, 400],
  },
  [_M],
  [0],

  __DuplicateTagKeysException
);
export var RemoveTagsInput = struct(n0, _RTI, 0, [_LBNo, _T], [64 | 0, () => TagKeyList]);
export var RemoveTagsOutput = struct(n0, _RTO, 0, [], []);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagDescription = struct(n0, _TDa, 0, [_LBN, _T], [0, () => TagList]);
export var TagKeyOnly = struct(n0, _TKO, 0, [_K], [0]);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyTags`, 400],
  },
  [_M],
  [0],

  __TooManyTagsException
);
export var LoadBalancerNamesMax20 = 64 | 0;

export var TagDescriptions = list(n0, _TD, 0, () => TagDescription);
export var TagKeyList = list(n0, _TKL, 0, () => TagKeyOnly);
export var TagList = list(n0, _TL, 0, () => Tag);
export var AddTags = op(
  n0,
  _ATd,
  0,
  () => AddTagsInput,
  () => AddTagsOutput
);
export var DescribeTags = op(
  n0,
  _DT,
  0,
  () => DescribeTagsInput,
  () => DescribeTagsOutput
);
export var RemoveTags = op(
  n0,
  _RT,
  0,
  () => RemoveTagsInput,
  () => RemoveTagsOutput
);

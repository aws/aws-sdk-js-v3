// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DirectoryLimitExceededException as __DirectoryLimitExceededException,
  TagLimitExceededException as __TagLimitExceededException,
} from "../models/index";
import {
  _AI,
  _ATTR,
  _ATTRR,
  _ATTRRd,
  _c,
  _CHAD,
  _CHADR,
  _CHADRr,
  _DI,
  _DLEE,
  _e,
  _K,
  _M,
  _RI,
  _RIe,
  _RTFR,
  _RTFRR,
  _RTFRRe,
  _SA,
  _T,
  _Ta,
  _TK,
  _TLEE,
  _Val,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddTagsToResourceRequest = struct(n0, _ATTRR, 0, [_RIe, _T], [0, () => Tags]);
export var AddTagsToResourceResult = struct(n0, _ATTRRd, 0, [], []);
export var CreateHybridADRequest = struct(n0, _CHADR, 0, [_SA, _AI, _T], [0, 0, () => Tags]);
export var CreateHybridADResult = struct(n0, _CHADRr, 0, [_DI], [0]);
export var DirectoryLimitExceededException = error(
  n0,
  _DLEE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __DirectoryLimitExceededException
);
export var RemoveTagsFromResourceRequest = struct(n0, _RTFRR, 0, [_RIe, _TK], [0, 64 | 0]);
export var RemoveTagsFromResourceResult = struct(n0, _RTFRRe, 0, [], []);
export var Tag = struct(n0, _Ta, 0, [_K, _Val], [0, 0]);
export var TagLimitExceededException = error(
  n0,
  _TLEE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __TagLimitExceededException
);
export var TagKeys = 64 | 0;

export var Tags = list(n0, _T, 0, () => Tag);
export var AddTagsToResource = op(
  n0,
  _ATTR,
  0,
  () => AddTagsToResourceRequest,
  () => AddTagsToResourceResult
);
export var CreateHybridAD = op(
  n0,
  _CHAD,
  0,
  () => CreateHybridADRequest,
  () => CreateHybridADResult
);
export var RemoveTagsFromResource = op(
  n0,
  _RTFR,
  0,
  () => RemoveTagsFromResourceRequest,
  () => RemoveTagsFromResourceResult
);

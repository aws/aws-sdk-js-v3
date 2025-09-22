// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DK,
  _DKe,
  _DKR,
  _DKRe,
  _DKRes,
  _DKResc,
  _F,
  _K,
  _KA,
  _Ke,
  _KF,
  _KFL,
  _KI,
  _KIL,
  _KM,
  _MR,
  _N,
  _NT,
  _OI,
  _OIA,
  _PK,
  _PKR,
  _PKRu,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteKeywordRequest = struct(n0, _DKR, 0, [_OI, _K], [0, 0]);
export var DeleteKeywordResult = struct(n0, _DKRe, 0, [_OIA, _OI, _K, _KM, _KA], [0, 0, 0, 0, 0]);
export var DescribeKeywordsRequest = struct(
  n0,
  _DKRes,
  0,
  [_OI, _Ke, _F, _NT, _MR],
  [0, 64 | 0, () => KeywordFilterList, 0, 1]
);
export var DescribeKeywordsResult = struct(
  n0,
  _DKResc,
  0,
  [_OIA, _OI, _Ke, _NT],
  [0, 0, () => KeywordInformationList, 0]
);
export var KeywordFilter = struct(n0, _KF, 0, [_N, _Va], [0, 64 | 0]);
export var KeywordInformation = struct(n0, _KI, 0, [_K, _KM, _KA], [0, 0, 0]);
export var PutKeywordRequest = struct(n0, _PKR, 0, [_OI, _K, _KM, _KA], [0, 0, 0, 0]);
export var PutKeywordResult = struct(n0, _PKRu, 0, [_OIA, _OI, _K, _KM, _KA], [0, 0, 0, 0, 0]);
export var KeywordFilterList = list(n0, _KFL, 0, () => KeywordFilter);
export var KeywordInformationList = list(n0, _KIL, 0, () => KeywordInformation);
export var KeywordList = 64 | 0;

export var DeleteKeyword = op(
  n0,
  _DK,
  0,
  () => DeleteKeywordRequest,
  () => DeleteKeywordResult
);
export var DescribeKeywords = op(
  n0,
  _DKe,
  0,
  () => DescribeKeywordsRequest,
  () => DescribeKeywordsResult
);
export var PutKeyword = op(
  n0,
  _PK,
  0,
  () => PutKeywordRequest,
  () => PutKeywordResult
);

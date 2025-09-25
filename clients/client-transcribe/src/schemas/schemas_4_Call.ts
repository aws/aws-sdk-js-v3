// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ATR,
  _CCAC,
  _CCACR,
  _CCACRr,
  _CN,
  _CP,
  _CTr,
  _EP,
  _ET,
  _F,
  _GCAC,
  _GCACR,
  _GCACRe,
  _h,
  _IF,
  _IT,
  _L,
  _LUT,
  _N,
  _NTTF,
  _PR,
  _R,
  _RL,
  _RTR,
  _Ru,
  _Se,
  _SF,
  _SP,
  _ST,
  _Ta,
  _Tar,
  _TF,
  _TFT,
  _Th,
  _UCAC,
  _UCACR,
  _UCACRp,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AbsoluteTimeRange = struct(n0, _ATR, 0, [_ST, _ET, _F, _L], [1, 1, 1, 1]);
export var CategoryProperties = struct(
  n0,
  _CP,
  0,
  [_CN, _R, _CTr, _LUT, _Ta, _IT],
  [0, () => RuleList, 4, 4, () => TagList, 0]
);
export var CreateCallAnalyticsCategoryRequest = struct(
  n0,
  _CCACR,
  0,
  [_CN, _R, _Ta, _IT],
  [[0, 1], () => RuleList, () => TagList, 0]
);
export var CreateCallAnalyticsCategoryResponse = struct(n0, _CCACRr, 0, [_CP], [() => CategoryProperties]);
export var GetCallAnalyticsCategoryRequest = struct(n0, _GCACR, 0, [_CN], [[0, 1]]);
export var GetCallAnalyticsCategoryResponse = struct(n0, _GCACRe, 0, [_CP], [() => CategoryProperties]);
export var InterruptionFilter = struct(
  n0,
  _IF,
  0,
  [_Th, _PR, _ATR, _RTR, _N],
  [1, 0, () => AbsoluteTimeRange, () => RelativeTimeRange, 2]
);
export var NonTalkTimeFilter = struct(
  n0,
  _NTTF,
  0,
  [_Th, _ATR, _RTR, _N],
  [1, () => AbsoluteTimeRange, () => RelativeTimeRange, 2]
);
export var RelativeTimeRange = struct(n0, _RTR, 0, [_SP, _EP, _F, _L], [1, 1, 1, 1]);
export var SentimentFilter = struct(
  n0,
  _SF,
  0,
  [_Se, _ATR, _RTR, _PR, _N],
  [64 | 0, () => AbsoluteTimeRange, () => RelativeTimeRange, 0, 2]
);
export var TranscriptFilter = struct(
  n0,
  _TF,
  0,
  [_TFT, _ATR, _RTR, _PR, _N, _Tar],
  [0, () => AbsoluteTimeRange, () => RelativeTimeRange, 0, 2, 64 | 0]
);
export var UpdateCallAnalyticsCategoryRequest = struct(n0, _UCACR, 0, [_CN, _R, _IT], [[0, 1], () => RuleList, 0]);
export var UpdateCallAnalyticsCategoryResponse = struct(n0, _UCACRp, 0, [_CP], [() => CategoryProperties]);
export var RuleList = list(n0, _RL, 0, () => Rule);
export var SentimentValueList = 64 | 0;

export var StringTargetList = 64 | 0;

export var Rule = uni(
  n0,
  _Ru,
  0,
  [_NTTF, _IF, _TF, _SF],
  [() => NonTalkTimeFilter, () => InterruptionFilter, () => TranscriptFilter, () => SentimentFilter]
);
export var CreateCallAnalyticsCategory = op(
  n0,
  _CCAC,
  {
    [_h]: ["PUT", "/callanalyticscategories/{CategoryName}", 200],
  },
  () => CreateCallAnalyticsCategoryRequest,
  () => CreateCallAnalyticsCategoryResponse
);
export var GetCallAnalyticsCategory = op(
  n0,
  _GCAC,
  {
    [_h]: ["GET", "/callanalyticscategories/{CategoryName}", 200],
  },
  () => GetCallAnalyticsCategoryRequest,
  () => GetCallAnalyticsCategoryResponse
);
export var UpdateCallAnalyticsCategory = op(
  n0,
  _UCAC,
  {
    [_h]: ["PATCH", "/callanalyticscategories/{CategoryName}", 200],
  },
  () => UpdateCallAnalyticsCategoryRequest,
  () => UpdateCallAnalyticsCategoryResponse
);

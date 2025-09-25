// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _Fi,
  _h,
  _hQ,
  _LTist,
  _LTRisto,
  _LTRistop,
  _MR,
  _mr,
  _N,
  _NT,
  _nt,
  _Op,
  _RI,
  _St,
  _STea,
  _STR,
  _STRe,
  _TIo,
  _TS,
  _TSF,
  _TSFL,
  _TSLo,
  _TSo,
  _TSop,
  _UEV,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTopicsRequest = struct(
  n0,
  _LTRisto,
  0,
  [_AAI, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListTopicsResponse = struct(n0, _LTRistop, 0, [_TS, _NT, _RI, _St], [() => TopicSummaries, 0, 0, [1, 32]]);
export var SearchTopicsRequest = struct(
  n0,
  _STR,
  0,
  [_AAI, _Fi, _NT, _MR],
  [[0, 1], () => TopicSearchFilterList, 0, 1]
);
export var SearchTopicsResponse = struct(n0, _STRe, 0, [_TSLo, _NT, _St, _RI], [() => TopicSummaries, 0, [1, 32], 0]);
export var TopicSearchFilter = struct(n0, _TSF, 0, [_Op, _N, _V], [0, 0, 0]);
export var TopicSummary = struct(n0, _TSo, 0, [_Ar, _TIo, _N, _UEV], [0, 0, 0, 0]);
export var TopicSearchFilterList = list(n0, _TSFL, 0, () => TopicSearchFilter);
export var TopicSummaries = list(n0, _TSop, 0, () => TopicSummary);
export var ListTopics = op(
  n0,
  _LTist,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/topics", 200],
  },
  () => ListTopicsRequest,
  () => ListTopicsResponse
);
export var SearchTopics = op(
  n0,
  _STea,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/search/topics", 200],
  },
  () => SearchTopicsRequest,
  () => SearchTopicsResponse
);

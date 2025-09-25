// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _ADQDS,
  _ADQDSR,
  _ADQDSRd,
  _ARN,
  _ATd,
  _ATR,
  _D,
  _DQDS,
  _DQDSi,
  _DQDSL,
  _DSA,
  _DSN,
  _DST,
  _h,
  _hQ,
  _K,
  _LDQDS,
  _LDQDSR,
  _LDQDSRi,
  _LT,
  _LTR,
  _LTRi,
  _ne,
  _NT,
  _OSA,
  _Ta,
  _TL,
  _V,
  n0,
  Unit,
} from "./schemas_0";
import { DirectQueryDataSourceType } from "./schemas_16_Query";

/* eslint no-var: 0 */

export var AddDirectQueryDataSourceRequest = struct(
  n0,
  _ADQDSR,
  0,
  [_DSN, _DST, _D, _OSA, _TL],
  [0, () => DirectQueryDataSourceType, 0, 64 | 0, () => TagList]
);
export var AddDirectQueryDataSourceResponse = struct(n0, _ADQDSRd, 0, [_DSA], [0]);
export var AddTagsRequest = struct(n0, _ATR, 0, [_ARN, _TL], [0, () => TagList]);
export var DirectQueryDataSource = struct(
  n0,
  _DQDS,
  0,
  [_DSN, _DST, _D, _OSA, _DSA, _TL],
  [0, () => DirectQueryDataSourceType, 0, 64 | 0, 0, () => TagList]
);
export var ListDirectQueryDataSourcesRequest = struct(
  n0,
  _LDQDSR,
  0,
  [_NT],
  [
    [
      0,
      {
        [_hQ]: _ne,
      },
    ],
  ]
);
export var ListDirectQueryDataSourcesResponse = struct(
  n0,
  _LDQDSRi,
  0,
  [_NT, _DQDSi],
  [0, () => DirectQueryDataSourceList]
);
export var ListTagsRequest = struct(
  n0,
  _LTR,
  0,
  [_ARN],
  [
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
  ]
);
export var ListTagsResponse = struct(n0, _LTRi, 0, [_TL], [() => TagList]);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var DirectQueryDataSourceList = list(n0, _DQDSL, 0, () => DirectQueryDataSource);
export var TagList = list(n0, _TL, 0, () => Tag);
export var AddDirectQueryDataSource = op(
  n0,
  _ADQDS,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/directQueryDataSource", 200],
  },
  () => AddDirectQueryDataSourceRequest,
  () => AddDirectQueryDataSourceResponse
);
export var AddTags = op(
  n0,
  _ATd,
  {
    [_h]: ["POST", "/2021-01-01/tags", 200],
  },
  () => AddTagsRequest,
  () => Unit
);
export var ListDirectQueryDataSources = op(
  n0,
  _LDQDS,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/directQueryDataSource", 200],
  },
  () => ListDirectQueryDataSourcesRequest,
  () => ListDirectQueryDataSourcesResponse
);
export var ListTags = op(
  n0,
  _LT,
  {
    [_h]: ["GET", "/2021-01-01/tags", 200],
  },
  () => ListTagsRequest,
  () => ListTagsResponse
);

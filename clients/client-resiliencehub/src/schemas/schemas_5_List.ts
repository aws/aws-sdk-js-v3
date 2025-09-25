// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aA,
  _aAs,
  _eT,
  _fo,
  _h,
  _hQ,
  _LRT,
  _LRTR,
  _LRTRi,
  _m,
  _mR,
  _n,
  _nR,
  _nT,
  _rIec,
  _rO,
  _RT,
  _rTA,
  _rTe,
  _rTeco,
  _RTL,
  _sT,
  _st,
  _ta,
  _tL,
  n0,
  TagMap,
} from "./schemas_0";
import { S3Location } from "./schemas_14_Recommendation";

/* eslint no-var: 0 */

export var ListRecommendationTemplatesRequest = struct(
  n0,
  _LRTR,
  0,
  [_aAs, _rO, _st, _rTA, _n, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _aAs,
      },
    ],
    [
      2,
      {
        [_hQ]: _rO,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _rTA,
      },
    ],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListRecommendationTemplatesResponse = struct(
  n0,
  _LRTRi,
  0,
  [_nT, _rTeco],
  [0, [() => RecommendationTemplateList, 0]]
);
export var RecommendationTemplate = struct(
  n0,
  _RT,
  0,
  [_tL, _aAs, _aA, _rIec, _rTe, _fo, _rTA, _m, _st, _n, _sT, _eT, _ta, _nR],
  [() => S3Location, 0, 0, 64 | 0, 64 | 0, 0, 0, 0, 0, 0, 4, 4, [() => TagMap, 0], 2]
);
export var RecommendationIdList = 64 | 0;

export var RecommendationTemplateList = list(n0, _RTL, 0, [() => RecommendationTemplate, 0]);
export var RecommendationTemplateStatusList = 64 | 0;

export var RenderRecommendationTypeList = 64 | 0;

export var ListRecommendationTemplates = op(
  n0,
  _LRT,
  {
    [_h]: ["GET", "/list-recommendation-templates", 200],
  },
  () => ListRecommendationTemplatesRequest,
  () => ListRecommendationTemplatesResponse
);

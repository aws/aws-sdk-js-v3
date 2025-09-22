// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CFR,
  _CFr,
  _CFRr,
  _CFRS,
  _CFRSR,
  _CFRSRr,
  _CQSBL,
  _CQSBLR,
  _CQSBLRr,
  _CTli,
  _CTR,
  _CTre,
  _CTRr,
  _De,
  _FDe,
  _FF,
  _FRS,
  _FRSN,
  _I,
  _II,
  _K,
  _LC,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _N,
  _QTu,
  _RA,
  _RARN,
  _SP,
  _SSP,
  _St,
  _Ta,
  _Tag,
  _TK,
  _TL,
  _TRa,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _V,
  n0,
  S3Path,
} from "./schemas_0";
import { FeaturedDocumentList, FeaturedResultsSet } from "./schemas_13_Set";

/* eslint no-var: 0 */

export var CreateFaqRequest = struct(
  n0,
  _CFR,
  0,
  [_II, _N, _De, _SP, _RA, _Ta, _FF, _CTli, _LC],
  [0, 0, 0, () => S3Path, 0, () => TagList, 0, [0, 4], 0]
);
export var CreateFaqResponse = struct(n0, _CFRr, 0, [_I], [0]);
export var CreateFeaturedResultsSetRequest = struct(
  n0,
  _CFRSR,
  0,
  [_II, _FRSN, _De, _CTli, _St, _QTu, _FDe, _Ta],
  [0, 0, 0, 0, 0, 64 | 0, () => FeaturedDocumentList, () => TagList]
);
export var CreateFeaturedResultsSetResponse = struct(n0, _CFRSRr, 0, [_FRS], [() => FeaturedResultsSet]);
export var CreateQuerySuggestionsBlockListRequest = struct(
  n0,
  _CQSBLR,
  0,
  [_II, _N, _De, _SSP, _CTli, _RA, _Ta],
  [0, 0, 0, () => S3Path, [0, 4], 0, () => TagList]
);
export var CreateQuerySuggestionsBlockListResponse = struct(n0, _CQSBLRr, 0, [_I], [0]);
export var CreateThesaurusRequest = struct(
  n0,
  _CTR,
  0,
  [_II, _N, _De, _RA, _Ta, _SSP, _CTli],
  [0, 0, 0, 0, () => TagList, () => S3Path, [0, 4]]
);
export var CreateThesaurusResponse = struct(n0, _CTRr, 0, [_I], [0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARN], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [() => TagList]);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var CreateFaq = op(
  n0,
  _CFr,
  0,
  () => CreateFaqRequest,
  () => CreateFaqResponse
);
export var CreateFeaturedResultsSet = op(
  n0,
  _CFRS,
  0,
  () => CreateFeaturedResultsSetRequest,
  () => CreateFeaturedResultsSetResponse
);
export var CreateQuerySuggestionsBlockList = op(
  n0,
  _CQSBL,
  0,
  () => CreateQuerySuggestionsBlockListRequest,
  () => CreateQuerySuggestionsBlockListResponse
);
export var CreateThesaurus = op(
  n0,
  _CTre,
  0,
  () => CreateThesaurusRequest,
  () => CreateThesaurusResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TRa,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);

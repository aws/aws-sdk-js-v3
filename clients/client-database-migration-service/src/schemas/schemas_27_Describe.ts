// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CD,
  _D,
  _DI,
  _DO,
  _DRe,
  _DRR,
  _DRRe,
  _EEn,
  _EN,
  _EV,
  _F,
  _IM,
  _IT,
  _IV,
  _MR,
  _NTe,
  _Pr,
  _RCd,
  _RDe,
  _RE,
  _Re,
  _Rec,
  _RL,
  _RR,
  _RRd,
  _RTT,
  _S,
  _Se,
  _SIt,
  _SSt,
  _STtor,
  _TC,
  FilterList,
  n0,
} from "./schemas_0";
import { RecommendationSettings } from "./schemas_21_Recommendations";

/* eslint no-var: 0 */

export var DescribeRecommendationsRequest = struct(n0, _DRR, 0, [_F, _MR, _NTe], [[() => FilterList, 0], 1, 0]);
export var DescribeRecommendationsResponse = struct(n0, _DRRe, 0, [_NTe, _Re], [0, () => RecommendationList]);
export var RdsConfiguration = struct(
  n0,
  _RCd,
  0,
  [_EEn, _IT, _IV, _IM, _STtor, _SSt, _SIt, _DO, _EV],
  [0, 0, 1, 1, 0, 1, 1, 0, 0]
);
export var RdsRecommendation = struct(n0, _RR, 0, [_RTT, _TC], [() => RdsRequirements, () => RdsConfiguration]);
export var RdsRequirements = struct(n0, _RRd, 0, [_EEn, _IV, _IM, _SSt, _SIt, _DO, _EV], [0, 1, 1, 1, 1, 0, 0]);
export var Recommendation = struct(
  n0,
  _Rec,
  0,
  [_DI, _EN, _CD, _S, _Pr, _Se, _D],
  [0, 0, 0, 0, 2, () => RecommendationSettings, () => RecommendationData]
);
export var RecommendationData = struct(n0, _RDe, 0, [_RE], [() => RdsRecommendation]);
export var RecommendationList = list(n0, _RL, 0, () => Recommendation);
export var DescribeRecommendations = op(
  n0,
  _DRe,
  0,
  () => DescribeRecommendationsRequest,
  () => DescribeRecommendationsResponse
);

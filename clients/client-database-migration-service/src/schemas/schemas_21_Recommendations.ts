// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BSR,
  _BSREE,
  _BSREEL,
  _BSRR,
  _BSRRa,
  _C,
  _D,
  _DI,
  _EE,
  _IST,
  _Me,
  _RSec,
  _Se,
  _SRR,
  _SRRE,
  _SRREL,
  _SRta,
  _WT,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchStartRecommendationsErrorEntry = struct(n0, _BSREE, 0, [_DI, _Me, _C], [0, 0, 0]);
export var BatchStartRecommendationsRequest = struct(n0, _BSRR, 0, [_D], [() => StartRecommendationsRequestEntryList]);
export var BatchStartRecommendationsResponse = struct(
  n0,
  _BSRRa,
  0,
  [_EE],
  [() => BatchStartRecommendationsErrorEntryList]
);
export var RecommendationSettings = struct(n0, _RSec, 0, [_IST, _WT], [0, 0]);
export var StartRecommendationsRequest = struct(n0, _SRR, 0, [_DI, _Se], [0, () => RecommendationSettings]);
export var StartRecommendationsRequestEntry = struct(n0, _SRRE, 0, [_DI, _Se], [0, () => RecommendationSettings]);
export var BatchStartRecommendationsErrorEntryList = list(n0, _BSREEL, 0, () => BatchStartRecommendationsErrorEntry);
export var StartRecommendationsRequestEntryList = list(n0, _SRREL, 0, () => StartRecommendationsRequestEntry);
export var BatchStartRecommendations = op(
  n0,
  _BSR,
  0,
  () => BatchStartRecommendationsRequest,
  () => BatchStartRecommendationsResponse
);
export var StartRecommendations = op(
  n0,
  _SRta,
  0,
  () => StartRecommendationsRequest,
  () => Unit
);

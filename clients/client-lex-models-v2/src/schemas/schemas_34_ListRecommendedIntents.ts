// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _bI,
  _bRI,
  _bV,
  _h,
  _iI,
  _iN,
  _lI,
  _LRI,
  _LRIR,
  _LRIRi,
  _mRax,
  _nTe,
  _RIS,
  _RISL,
  _sLu,
  _sUC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListRecommendedIntentsRequest = struct(
  n0,
  _LRIR,
  0,
  [_bI, _bV, _lI, _bRI, _nTe, _mRax],
  [[0, 1], [0, 1], [0, 1], [0, 1], 0, 1]
);
export var ListRecommendedIntentsResponse = struct(
  n0,
  _LRIRi,
  0,
  [_bI, _bV, _lI, _bRI, _sLu, _nTe],
  [0, 0, 0, 0, () => RecommendedIntentSummaryList, 0]
);
export var RecommendedIntentSummary = struct(n0, _RIS, 0, [_iI, _iN, _sUC], [0, 0, 1]);
export var RecommendedIntentSummaryList = list(n0, _RISL, 0, () => RecommendedIntentSummary);
export var ListRecommendedIntents = op(
  n0,
  _LRI,
  {
    [_h]: [
      "POST",
      "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/intents",
      200,
    ],
  },
  () => ListRecommendedIntentsRequest,
  () => ListRecommendedIntentsResponse
);

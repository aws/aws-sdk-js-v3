// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aI, _er, _htt, _m, _NRR, _NRRE, _NRREL, _NRRR, _NRRRo, _rIe, _rIec, _sI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var NotifyRecommendationsReceivedError = struct(n0, _NRRE, 0, [_rIe, _m], [0, 0]);
export var NotifyRecommendationsReceivedRequest = struct(n0, _NRRR, 0, [_aI, _sI, _rIec], [[0, 1], [0, 1], 64 | 0]);
export var NotifyRecommendationsReceivedResponse = struct(
  n0,
  _NRRRo,
  0,
  [_rIec, _er],
  [64 | 0, () => NotifyRecommendationsReceivedErrorList]
);
export var NotifyRecommendationsReceivedErrorList = list(n0, _NRREL, 0, () => NotifyRecommendationsReceivedError);
export var RecommendationIdList = 64 | 0;

export var NotifyRecommendationsReceived = op(
  n0,
  _NRR,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/sessions/{sessionId}/recommendations/notify", 200],
  },
  () => NotifyRecommendationsReceivedRequest,
  () => NotifyRecommendationsReceivedResponse
);

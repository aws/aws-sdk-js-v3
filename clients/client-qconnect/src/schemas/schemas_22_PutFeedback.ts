// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import { _aA, _aI, _cF, _CFD, _GCFD, _gCFD, _htt, _PF, _PFR, _PFRu, _rel, _tI, _tTa, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GenerativeContentFeedbackData = struct(n0, _GCFD, 0, [_rel], [0]);
export var PutFeedbackRequest = struct(n0, _PFR, 0, [_aI, _tI, _tTa, _cF], [[0, 1], 0, 0, () => ContentFeedbackData]);
export var PutFeedbackResponse = struct(
  n0,
  _PFRu,
  0,
  [_aI, _aA, _tI, _tTa, _cF],
  [0, 0, 0, 0, () => ContentFeedbackData]
);
export var ContentFeedbackData = uni(n0, _CFD, 0, [_gCFD], [() => GenerativeContentFeedbackData]);
export var PutFeedback = op(
  n0,
  _PF,
  {
    [_htt]: ["PUT", "/assistants/{assistantId}/feedback", 200],
  },
  () => PutFeedbackRequest,
  () => PutFeedbackResponse
);

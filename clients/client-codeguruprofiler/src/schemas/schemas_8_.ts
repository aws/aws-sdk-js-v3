// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aII, _com, _h, _pGN, _SF, _SFR, _SFRu, _ty, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SubmitFeedbackRequest = struct(n0, _SFR, 0, [_pGN, _aII, _ty, _com], [[0, 1], [0, 1], 0, 0]);
export var SubmitFeedbackResponse = struct(n0, _SFRu, 0, [], []);
export var SubmitFeedback = op(
  n0,
  _SF,
  {
    [_h]: ["POST", "/internal/profilingGroups/{profilingGroupName}/anomalies/{anomalyInstanceId}/feedback", 204],
  },
  () => SubmitFeedbackRequest,
  () => SubmitFeedbackResponse
);

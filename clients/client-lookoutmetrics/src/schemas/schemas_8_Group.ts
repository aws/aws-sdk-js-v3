// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ADA, _AGI, _AGTSF, _h, _IA, _PF, _PFR, _PFRu, _TSI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AnomalyGroupTimeSeriesFeedback = struct(n0, _AGTSF, 0, [_AGI, _TSI, _IA], [0, 0, 2]);
export var PutFeedbackRequest = struct(n0, _PFR, 0, [_ADA, _AGTSF], [0, () => AnomalyGroupTimeSeriesFeedback]);
export var PutFeedbackResponse = struct(n0, _PFRu, 0, [], []);
export var PutFeedback = op(
  n0,
  _PF,
  {
    [_h]: ["POST", "/PutFeedback", 200],
  },
  () => PutFeedbackRequest,
  () => PutFeedbackResponse
);

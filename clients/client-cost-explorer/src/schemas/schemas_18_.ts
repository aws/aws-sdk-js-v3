// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIn, _F, _PAF, _PAFR, _PAFRr, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ProvideAnomalyFeedbackRequest = struct(n0, _PAFR, 0, [_AIn, _F], [0, 0]);
export var ProvideAnomalyFeedbackResponse = struct(n0, _PAFRr, 0, [_AIn], [0]);
export var ProvideAnomalyFeedback = op(
  n0,
  _PAF,
  0,
  () => ProvideAnomalyFeedbackRequest,
  () => ProvideAnomalyFeedbackResponse
);

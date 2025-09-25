// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _MFS, _MI, _PMF, _PMFR, _PMFRu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutMessageFeedbackRequest = struct(n0, _PMFR, 0, [_MI, _MFS], [0, 0]);
export var PutMessageFeedbackResult = struct(n0, _PMFRu, 0, [_MI, _MFS], [0, 0]);
export var PutMessageFeedback = op(
  n0,
  _PMF,
  0,
  () => PutMessageFeedbackRequest,
  () => PutMessageFeedbackResult
);

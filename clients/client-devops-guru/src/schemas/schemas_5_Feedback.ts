// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DF, _DFR, _DFRe, _F, _h, _Id, _IF, _II, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeFeedbackRequest = struct(n0, _DFR, 0, [_II], [0]);
export var DescribeFeedbackResponse = struct(n0, _DFRe, 0, [_IF], [() => InsightFeedback]);
export var InsightFeedback = struct(n0, _IF, 0, [_Id, _F], [0, 0]);
export var DescribeFeedback = op(
  n0,
  _DF,
  {
    [_h]: ["POST", "/feedback", 200],
  },
  () => DescribeFeedbackRequest,
  () => DescribeFeedbackResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CF, _CFI, _CFL, _CTl, _II, _QI, _RFe, _RFI, _RFL, _RI, _RV, _SFR, _SFu, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ClickFeedback = struct(n0, _CF, 0, [_RI, _CTl], [0, 4]);
export var RelevanceFeedback = struct(n0, _RFe, 0, [_RI, _RV], [0, 0]);
export var SubmitFeedbackRequest = struct(
  n0,
  _SFR,
  0,
  [_II, _QI, _CFI, _RFI],
  [0, 0, () => ClickFeedbackList, () => RelevanceFeedbackList]
);
export var ClickFeedbackList = list(n0, _CFL, 0, () => ClickFeedback);
export var RelevanceFeedbackList = list(n0, _RFL, 0, () => RelevanceFeedback);
export var SubmitFeedback = op(
  n0,
  _SFu,
  0,
  () => SubmitFeedbackRequest,
  () => Unit
);

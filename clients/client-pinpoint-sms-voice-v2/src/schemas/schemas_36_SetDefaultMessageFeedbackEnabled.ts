// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSA, _CSN, _MFE, _SDMFE, _SDMFER, _SDMFERe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SetDefaultMessageFeedbackEnabledRequest = struct(n0, _SDMFER, 0, [_CSN, _MFE], [0, 2]);
export var SetDefaultMessageFeedbackEnabledResult = struct(n0, _SDMFERe, 0, [_CSA, _CSN, _MFE], [0, 0, 2]);
export var SetDefaultMessageFeedbackEnabled = op(
  n0,
  _SDMFE,
  0,
  () => SetDefaultMessageFeedbackEnabledRequest,
  () => SetDefaultMessageFeedbackEnabledResult
);

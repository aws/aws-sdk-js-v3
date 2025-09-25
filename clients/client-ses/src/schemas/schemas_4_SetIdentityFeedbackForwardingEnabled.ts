// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FE, _I, _SIFFE, _SIFFER, _SIFFERe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SetIdentityFeedbackForwardingEnabledRequest = struct(n0, _SIFFER, 0, [_I, _FE], [0, 2]);
export var SetIdentityFeedbackForwardingEnabledResponse = struct(n0, _SIFFERe, 0, [], []);
export var SetIdentityFeedbackForwardingEnabled = op(
  n0,
  _SIFFE,
  0,
  () => SetIdentityFeedbackForwardingEnabledRequest,
  () => SetIdentityFeedbackForwardingEnabledResponse
);

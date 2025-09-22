// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _CI, _h, _MIes, _RCM, _RCMR, _RCMRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RedactConversationMessageRequest = struct(
  n0,
  _RCMR,
  0,
  [_AI, _CI, _MIes],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var RedactConversationMessageResponse = struct(n0, _RCMRe, 0, [], []);
export var RedactConversationMessage = op(
  n0,
  _RCM,
  {
    [_h]: ["POST", "/accounts/{AccountId}/conversations/{ConversationId}/messages/{MessageId}?operation=redact", 200],
  },
  () => RedactConversationMessageRequest,
  () => RedactConversationMessageResponse
);

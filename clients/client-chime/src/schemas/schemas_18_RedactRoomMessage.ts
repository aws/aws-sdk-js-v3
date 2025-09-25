// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _h, _MIes, _RI, _RRM, _RRMR, _RRMRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RedactRoomMessageRequest = struct(
  n0,
  _RRMR,
  0,
  [_AI, _RI, _MIes],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var RedactRoomMessageResponse = struct(n0, _RRMRe, 0, [], []);
export var RedactRoomMessage = op(
  n0,
  _RRM,
  {
    [_h]: ["POST", "/accounts/{AccountId}/rooms/{RoomId}/messages/{MessageId}?operation=redact", 200],
  },
  () => RedactRoomMessageRequest,
  () => RedactRoomMessageResponse
);

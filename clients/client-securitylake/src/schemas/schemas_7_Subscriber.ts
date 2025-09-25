// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DS, _DSN, _DSNR, _DSNRe, _DSR, _DSRe, _h, _sI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSubscriberNotificationRequest = struct(n0, _DSNR, 0, [_sI], [[0, 1]]);
export var DeleteSubscriberNotificationResponse = struct(n0, _DSNRe, 0, [], []);
export var DeleteSubscriberRequest = struct(n0, _DSR, 0, [_sI], [[0, 1]]);
export var DeleteSubscriberResponse = struct(n0, _DSRe, 0, [], []);
export var DeleteSubscriber = op(
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/v1/subscribers/{subscriberId}", 200],
  },
  () => DeleteSubscriberRequest,
  () => DeleteSubscriberResponse
);
export var DeleteSubscriberNotification = op(
  n0,
  _DSN,
  {
    [_h]: ["DELETE", "/v1/subscribers/{subscriberId}/notification", 200],
  },
  () => DeleteSubscriberNotificationRequest,
  () => DeleteSubscriberNotificationResponse
);

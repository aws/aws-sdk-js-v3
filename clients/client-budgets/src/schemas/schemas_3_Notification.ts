// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AIc,
  _BN,
  _CN,
  _CNR,
  _CNRr,
  _CO,
  _CSR,
  _CSr,
  _CSRr,
  _DN,
  _DNR,
  _DNRe,
  _DS,
  _DSR,
  _DSRe,
  _NN,
  _No,
  _NS,
  _NSe,
  _NT,
  _ON,
  _OS,
  _Su,
  _Sub,
  _Th,
  _TT,
  _UN,
  _UNR,
  _UNRp,
  _US,
  _USR,
  _USRp,
  n0,
  Subscriber,
} from "./schemas_0";
import { Subscribers } from "./schemas_1_Budget";

/* eslint no-var: 0 */

export var CreateNotificationRequest = struct(
  n0,
  _CNR,
  0,
  [_AIc, _BN, _No, _Su],
  [0, 0, () => Notification, [() => Subscribers, 0]]
);
export var CreateNotificationResponse = struct(n0, _CNRr, 0, [], []);
export var CreateSubscriberRequest = struct(
  n0,
  _CSR,
  0,
  [_AIc, _BN, _No, _Sub],
  [0, 0, () => Notification, [() => Subscriber, 0]]
);
export var CreateSubscriberResponse = struct(n0, _CSRr, 0, [], []);
export var DeleteNotificationRequest = struct(n0, _DNR, 0, [_AIc, _BN, _No], [0, 0, () => Notification]);
export var DeleteNotificationResponse = struct(n0, _DNRe, 0, [], []);
export var DeleteSubscriberRequest = struct(
  n0,
  _DSR,
  0,
  [_AIc, _BN, _No, _Sub],
  [0, 0, () => Notification, [() => Subscriber, 0]]
);
export var DeleteSubscriberResponse = struct(n0, _DSRe, 0, [], []);
export var Notification = struct(n0, _No, 0, [_NT, _CO, _Th, _TT, _NS], [0, 0, 1, 0, 0]);
export var UpdateNotificationRequest = struct(
  n0,
  _UNR,
  0,
  [_AIc, _BN, _ON, _NN],
  [0, 0, () => Notification, () => Notification]
);
export var UpdateNotificationResponse = struct(n0, _UNRp, 0, [], []);
export var UpdateSubscriberRequest = struct(
  n0,
  _USR,
  0,
  [_AIc, _BN, _No, _OS, _NSe],
  [0, 0, () => Notification, [() => Subscriber, 0], [() => Subscriber, 0]]
);
export var UpdateSubscriberResponse = struct(n0, _USRp, 0, [], []);
export var CreateNotification = op(
  n0,
  _CN,
  0,
  () => CreateNotificationRequest,
  () => CreateNotificationResponse
);
export var CreateSubscriber = op(
  n0,
  _CSr,
  0,
  () => CreateSubscriberRequest,
  () => CreateSubscriberResponse
);
export var DeleteNotification = op(
  n0,
  _DN,
  0,
  () => DeleteNotificationRequest,
  () => DeleteNotificationResponse
);
export var DeleteSubscriber = op(
  n0,
  _DS,
  0,
  () => DeleteSubscriberRequest,
  () => DeleteSubscriberResponse
);
export var UpdateNotification = op(
  n0,
  _UN,
  0,
  () => UpdateNotificationRequest,
  () => UpdateNotificationResponse
);
export var UpdateSubscriber = op(
  n0,
  _US,
  0,
  () => UpdateSubscriberRequest,
  () => UpdateSubscriberResponse
);

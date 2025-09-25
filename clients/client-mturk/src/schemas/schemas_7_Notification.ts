// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _Des,
  _ET,
  _HITTI,
  _No,
  _NS,
  _STEN,
  _STENR,
  _STENRe,
  _TET,
  _Tr,
  _UNS,
  _UNSR,
  _UNSRp,
  _Ve,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var NotificationSpecification = struct(n0, _NS, 0, [_Des, _Tr, _Ve, _ET], [0, 0, 0, 64 | 0]);
export var SendTestEventNotificationRequest = struct(n0, _STENR, 0, [_No, _TET], [() => NotificationSpecification, 0]);
export var SendTestEventNotificationResponse = struct(n0, _STENRe, 0, [], []);
export var UpdateNotificationSettingsRequest = struct(
  n0,
  _UNSR,
  0,
  [_HITTI, _No, _Ac],
  [0, () => NotificationSpecification, 2]
);
export var UpdateNotificationSettingsResponse = struct(n0, _UNSRp, 0, [], []);
export var EventTypeList = 64 | 0;

export var SendTestEventNotification = op(
  n0,
  _STEN,
  0,
  () => SendTestEventNotificationRequest,
  () => SendTestEventNotificationResponse
);
export var UpdateNotificationSettings = op(
  n0,
  _UNS,
  2,
  () => UpdateNotificationSettingsRequest,
  () => UpdateNotificationSettingsResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _C,
  _c,
  _Ch,
  _cI,
  _eP,
  _GNC,
  _GNCR,
  _GNCRe,
  _h,
  _id,
  _NC,
  _nC,
  _pGN,
  _RNC,
  _RNCR,
  _RNCRe,
  _u,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Channel = struct(n0, _C, 0, [_id, _u, _eP], [0, 0, 64 | 0]);
export var GetNotificationConfigurationRequest = struct(n0, _GNCR, 0, [_pGN], [[0, 1]]);
export var GetNotificationConfigurationResponse = struct(n0, _GNCRe, 0, [_nC], [() => NotificationConfiguration]);
export var NotificationConfiguration = struct(n0, _NC, 0, [_c], [() => Channels]);
export var RemoveNotificationChannelRequest = struct(
  n0,
  _RNCR,
  0,
  [_pGN, _cI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var RemoveNotificationChannelResponse = struct(n0, _RNCRe, 0, [_nC], [() => NotificationConfiguration]);
export var Channels = list(n0, _Ch, 0, () => Channel);
export var EventPublishers = 64 | 0;

export var GetNotificationConfiguration = op(
  n0,
  _GNC,
  {
    [_h]: ["GET", "/profilingGroups/{profilingGroupName}/notificationConfiguration", 200],
  },
  () => GetNotificationConfigurationRequest,
  () => GetNotificationConfigurationResponse
);
export var RemoveNotificationChannel = op(
  n0,
  _RNC,
  {
    [_h]: ["DELETE", "/profilingGroups/{profilingGroupName}/notificationConfiguration/{channelId}", 200],
  },
  () => RemoveNotificationChannelRequest,
  () => RemoveNotificationChannelResponse
);

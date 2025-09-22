// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _C,
  _Ch,
  _Fi,
  _h,
  _Id,
  _LNC,
  _LNCR,
  _LNCRi,
  _MT,
  _NC,
  _NCC,
  _NFC,
  _NT,
  _SCC,
  _Sev,
  _Sn,
  _TA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListNotificationChannelsRequest = struct(n0, _LNCR, 0, [_NT], [0]);
export var ListNotificationChannelsResponse = struct(n0, _LNCRi, 0, [_Ch, _NT], [() => Channels, 0]);
export var NotificationChannel = struct(n0, _NC, 0, [_Id, _C], [0, () => NotificationChannelConfig]);
export var NotificationChannelConfig = struct(
  n0,
  _NCC,
  0,
  [_Sn, _Fi],
  [() => SnsChannelConfig, () => NotificationFilterConfig]
);
export var NotificationFilterConfig = struct(n0, _NFC, 0, [_Sev, _MT], [64 | 0, 64 | 0]);
export var SnsChannelConfig = struct(n0, _SCC, 0, [_TA], [0]);
export var Channels = list(n0, _Ch, 0, () => NotificationChannel);
export var InsightSeverities = 64 | 0;

export var NotificationMessageTypes = 64 | 0;

export var ListNotificationChannels = op(
  n0,
  _LNC,
  {
    [_h]: ["POST", "/channels", 200],
  },
  () => ListNotificationChannelsRequest,
  () => ListNotificationChannelsResponse
);

// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { MonitoringSubscriptionAlreadyExists as __MonitoringSubscriptionAlreadyExists } from "../models/index";
import {
  _c,
  _CMS,
  _CMSR,
  _CMSRr,
  _DI,
  _e,
  _GMS,
  _GMSR,
  _GMSRe,
  _h,
  _hE,
  _hP,
  _M,
  _MS,
  _MSAE,
  _RMSC,
  _RMSS,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateMonitoringSubscriptionRequest = struct(
  n0,
  _CMSR,
  0,
  [_DI, _MS],
  [
    [0, 1],
    [
      () => MonitoringSubscription,
      {
        [_xN]: _MS,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreateMonitoringSubscriptionResult = struct(n0, _CMSRr, 0, [_MS], [[() => MonitoringSubscription, 16]]);
export var GetMonitoringSubscriptionRequest = struct(n0, _GMSR, 0, [_DI], [[0, 1]]);
export var GetMonitoringSubscriptionResult = struct(n0, _GMSRe, 0, [_MS], [[() => MonitoringSubscription, 16]]);
export var MonitoringSubscription = struct(n0, _MS, 0, [_RMSC], [() => RealtimeMetricsSubscriptionConfig]);
export var MonitoringSubscriptionAlreadyExists = error(
  n0,
  _MSAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __MonitoringSubscriptionAlreadyExists
);
export var RealtimeMetricsSubscriptionConfig = struct(n0, _RMSC, 0, [_RMSS], [0]);
export var CreateMonitoringSubscription = op(
  n0,
  _CMS,
  {
    [_h]: ["POST", "/2020-05-31/distributions/{DistributionId}/monitoring-subscription", 200],
  },
  () => CreateMonitoringSubscriptionRequest,
  () => CreateMonitoringSubscriptionResult
);
export var GetMonitoringSubscription = op(
  n0,
  _GMS,
  {
    [_h]: ["GET", "/2020-05-31/distributions/{DistributionId}/monitoring-subscription", 200],
  },
  () => GetMonitoringSubscriptionRequest,
  () => GetMonitoringSubscriptionResult
);

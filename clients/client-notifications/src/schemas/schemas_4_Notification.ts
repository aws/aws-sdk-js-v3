// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aET,
  _aNEA,
  _aS,
  _cap,
  _CER,
  _CERR,
  _CERRr,
  _co,
  _cT,
  _DNH,
  _DNHR,
  _DNHRe,
  _dU,
  _eOR,
  _eOT,
  _eP,
  _ERSS,
  _eS,
  _eT,
  _eTn,
  _eTV,
  _GER,
  _GERR,
  _GERRe,
  _GNE,
  _GNER,
  _GNERe,
  _hQ,
  _ht,
  _i,
  _l,
  _lAT,
  _M,
  _mC,
  _ME,
  _me,
  _mI,
  _mR,
  _nCA,
  _NES,
  _nHR,
  _NHSS,
  _nTo,
  _oUI,
  _R,
  _r,
  _rA,
  _Re,
  _re,
  _RNH,
  _RNHR,
  _RNHRe,
  _rR,
  _s,
  _sEDU,
  _sEDUDT,
  _sEI,
  _SEM,
  _sEM,
  _sS,
  _SSBR,
  _sSBR,
  _sT,
  _st,
  _sV,
  _t,
  _tP,
  _ty,
  _u,
  _UER,
  _UERR,
  _UERRp,
  n0,
} from "./schemas_0";
import { AggregationSummary, MessageComponents, TextParts } from "./schemas_1_Notification";

/* eslint no-var: 0 */

export var CreateEventRuleRequest = struct(n0, _CERR, 0, [_nCA, _s, _eT, _eP, _r], [0, 0, 0, 0, 64 | 0]);
export var CreateEventRuleResponse = struct(n0, _CERRr, 0, [_a, _nCA, _sSBR], [0, 0, () => StatusSummaryByRegion]);
export var DeregisterNotificationHubRequest = struct(n0, _DNHR, 0, [_nHR], [[0, 1]]);
export var DeregisterNotificationHubResponse = struct(
  n0,
  _DNHRe,
  0,
  [_nHR, _sS],
  [0, () => NotificationHubStatusSummary]
);
export var EventRuleStatusSummary = struct(n0, _ERSS, 0, [_st, _re], [0, 0]);
export var GetEventRuleRequest = struct(n0, _GERR, 0, [_a], [[0, 1]]);
export var GetEventRuleResponse = struct(
  n0,
  _GERRe,
  0,
  [_a, _nCA, _cT, _s, _eT, _eP, _r, _mR, _sSBR],
  [0, 0, 5, 0, 0, 0, 64 | 0, 64 | 0, () => StatusSummaryByRegion]
);
export var GetNotificationEventRequest = struct(
  n0,
  _GNER,
  0,
  [_a, _l],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _l,
      },
    ],
  ]
);
export var GetNotificationEventResponse = struct(
  n0,
  _GNERe,
  0,
  [_a, _nCA, _cT, _co],
  [0, 0, 5, () => NotificationEventSchema]
);
export var MediaElement = struct(n0, _ME, 0, [_mI, _ty, _u, _cap], [0, 0, 0, 0]);
export var NotificationEventSchema = struct(
  n0,
  _NES,
  0,
  [_sV, _i, _sEM, _mC, _sEDU, _sEDUDT, _nTo, _eS, _aET, _aNEA, _aS, _sT, _eTn, _tP, _me, _oUI],
  [
    0,
    0,
    () => SourceEventMetadata,
    () => MessageComponents,
    0,
    0,
    0,
    0,
    0,
    0,
    () => AggregationSummary,
    5,
    5,
    () => TextParts,
    () => Media,
    0,
  ]
);
export var NotificationHubStatusSummary = struct(n0, _NHSS, 0, [_st, _re], [0, 0]);
export var RegisterNotificationHubRequest = struct(n0, _RNHR, 0, [_nHR], [0]);
export var RegisterNotificationHubResponse = struct(
  n0,
  _RNHRe,
  0,
  [_nHR, _sS, _cT, _lAT],
  [0, () => NotificationHubStatusSummary, 5, 5]
);
export var Resource = struct(n0, _R, 0, [_i, _a, _dU, _t], [0, 0, 0, 64 | 0]);
export var SourceEventMetadata = struct(
  n0,
  _SEM,
  0,
  [_eTV, _sEI, _eOR, _rA, _s, _eOT, _eT, _rR],
  [0, 0, 0, 0, 0, 5, 0, () => Resources]
);
export var UpdateEventRuleRequest = struct(n0, _UERR, 0, [_a, _eP, _r], [[0, 1], 0, 64 | 0]);
export var UpdateEventRuleResponse = struct(n0, _UERRp, 0, [_a, _nCA, _sSBR], [0, 0, () => StatusSummaryByRegion]);
export var ManagedRuleArns = 64 | 0;

export var Media = list(n0, _M, 0, () => MediaElement);
export var Regions = 64 | 0;

export var Resources = list(n0, _Re, 0, () => Resource);
export var Tags = 64 | 0;

export var StatusSummaryByRegion = map(n0, _SSBR, 0, 0, () => EventRuleStatusSummary);
export var CreateEventRule = op(
  n0,
  _CER,
  {
    [_ht]: ["POST", "/event-rules", 201],
  },
  () => CreateEventRuleRequest,
  () => CreateEventRuleResponse
);
export var DeregisterNotificationHub = op(
  n0,
  _DNH,
  {
    [_ht]: ["DELETE", "/notification-hubs/{notificationHubRegion}", 200],
  },
  () => DeregisterNotificationHubRequest,
  () => DeregisterNotificationHubResponse
);
export var GetEventRule = op(
  n0,
  _GER,
  {
    [_ht]: ["GET", "/event-rules/{arn}", 200],
  },
  () => GetEventRuleRequest,
  () => GetEventRuleResponse
);
export var GetNotificationEvent = op(
  n0,
  _GNE,
  {
    [_ht]: ["GET", "/notification-events/{arn}", 200],
  },
  () => GetNotificationEventRequest,
  () => GetNotificationEventResponse
);
export var RegisterNotificationHub = op(
  n0,
  _RNH,
  {
    [_ht]: ["POST", "/notification-hubs", 201],
  },
  () => RegisterNotificationHubRequest,
  () => RegisterNotificationHubResponse
);
export var UpdateEventRule = op(
  n0,
  _UER,
  {
    [_ht]: ["PUT", "/event-rules/{arn}", 200],
  },
  () => UpdateEventRuleRequest,
  () => UpdateEventRuleResponse
);

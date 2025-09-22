// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  KMSThrottlingFault as __KMSThrottlingFault,
  SNSInvalidTopicFault as __SNSInvalidTopicFault,
  SNSNoAuthorizationFault as __SNSNoAuthorizationFault,
} from "../models/index";
import {
  _c,
  _CAI,
  _CES,
  _CESM,
  _CESR,
  _CSI,
  _Dat,
  _DEC,
  _DECM,
  _DECR,
  _DEesc,
  _DEMes,
  _DERes,
  _DES,
  _DESes,
  _DESM,
  _DESMes,
  _DESR,
  _DESRes,
  _Du,
  _e,
  _EC,
  _ECG,
  _ECGL,
  _ECLv,
  _ECv,
  _ELv,
  _Ena,
  _ESL,
  _ESv,
  _ETn,
  _Ev,
  _Eve,
  _F,
  _KMSTF,
  _m,
  _Ma,
  _Me,
  _MES,
  _MESM,
  _MESR,
  _MR,
  _S,
  _SCT,
  _SI,
  _SIL,
  _SIo,
  _SIou,
  _SNSITF,
  _SNSNAF,
  _SNu,
  _ST,
  _STA,
  _STt,
  _T,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateEventSubscriptionMessage = struct(
  n0,
  _CESM,
  0,
  [_SNu, _STA, _ST, _EC, _SI, _Ena, _T],
  [0, 0, 0, [() => EventCategoriesList, 0], [() => SourceIdsList, 0], 2, [() => TagList, 0]]
);
export var CreateEventSubscriptionResponse = struct(n0, _CESR, 0, [_ESv], [[() => EventSubscription, 0]]);
export var DeleteEventSubscriptionMessage = struct(n0, _DESM, 0, [_SNu], [0]);
export var DeleteEventSubscriptionResponse = struct(n0, _DESR, 0, [_ESv], [[() => EventSubscription, 0]]);
export var DescribeEventCategoriesMessage = struct(n0, _DECM, 0, [_ST, _F], [0, [() => FilterList, 0]]);
export var DescribeEventCategoriesResponse = struct(n0, _DECR, 0, [_ECGL], [[() => EventCategoryGroupList, 0]]);
export var DescribeEventsMessage = struct(
  n0,
  _DEMes,
  0,
  [_SIo, _ST, _STt, _ETn, _Du, _EC, _F, _MR, _Ma],
  [0, 0, 4, 4, 1, [() => EventCategoriesList, 0], [() => FilterList, 0], 1, 0]
);
export var DescribeEventsResponse = struct(n0, _DERes, 0, [_Ma, _Ev], [0, [() => EventList, 0]]);
export var DescribeEventSubscriptionsMessage = struct(
  n0,
  _DESMes,
  0,
  [_SNu, _F, _MR, _Ma],
  [0, [() => FilterList, 0], 1, 0]
);
export var DescribeEventSubscriptionsResponse = struct(
  n0,
  _DESRes,
  0,
  [_Ma, _ESL],
  [0, [() => EventSubscriptionsList, 0]]
);
export var Event = struct(n0, _Eve, 0, [_SIo, _ST, _Me, _EC, _Dat], [0, 0, 0, [() => EventCategoriesList, 0], 4]);
export var EventCategoryGroup = struct(n0, _ECG, 0, [_ST, _EC], [0, [() => EventCategoriesList, 0]]);
export var EventSubscription = struct(
  n0,
  _ESv,
  0,
  [_CAI, _CSI, _STA, _S, _SCT, _ST, _SIL, _ECLv, _Ena],
  [0, 0, 0, 0, 0, 0, [() => SourceIdsList, 0], [() => EventCategoriesList, 0], 2]
);
export var KMSThrottlingFault = error(
  n0,
  _KMSTF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __KMSThrottlingFault
);
export var ModifyEventSubscriptionMessage = struct(
  n0,
  _MESM,
  0,
  [_SNu, _STA, _ST, _EC, _Ena],
  [0, 0, 0, [() => EventCategoriesList, 0], 2]
);
export var ModifyEventSubscriptionResponse = struct(n0, _MESR, 0, [_ESv], [[() => EventSubscription, 0]]);
export var SNSInvalidTopicFault = error(
  n0,
  _SNSITF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __SNSInvalidTopicFault
);
export var SNSNoAuthorizationFault = error(
  n0,
  _SNSNAF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __SNSNoAuthorizationFault
);
export var EventCategoriesList = list(n0, _ECLv, 0, [
  0,
  {
    [_xN]: _ECv,
  },
]);
export var EventCategoryGroupList = list(n0, _ECGL, 0, [
  () => EventCategoryGroup,
  {
    [_xN]: _ECG,
  },
]);
export var EventList = list(n0, _ELv, 0, [
  () => Event,
  {
    [_xN]: _Eve,
  },
]);
export var EventSubscriptionsList = list(n0, _ESL, 0, [
  () => EventSubscription,
  {
    [_xN]: _ESv,
  },
]);
export var SourceIdsList = list(n0, _SIL, 0, [
  0,
  {
    [_xN]: _SIou,
  },
]);
export var CreateEventSubscription = op(
  n0,
  _CES,
  0,
  () => CreateEventSubscriptionMessage,
  () => CreateEventSubscriptionResponse
);
export var DeleteEventSubscription = op(
  n0,
  _DES,
  0,
  () => DeleteEventSubscriptionMessage,
  () => DeleteEventSubscriptionResponse
);
export var DescribeEventCategories = op(
  n0,
  _DEC,
  0,
  () => DescribeEventCategoriesMessage,
  () => DescribeEventCategoriesResponse
);
export var DescribeEvents = op(
  n0,
  _DEesc,
  0,
  () => DescribeEventsMessage,
  () => DescribeEventsResponse
);
export var DescribeEventSubscriptions = op(
  n0,
  _DESes,
  0,
  () => DescribeEventSubscriptionsMessage,
  () => DescribeEventSubscriptionsResponse
);
export var ModifyEventSubscription = op(
  n0,
  _MES,
  0,
  () => ModifyEventSubscriptionMessage,
  () => ModifyEventSubscriptionResponse
);

// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  EventSubscriptionQuotaExceededFault as __EventSubscriptionQuotaExceededFault,
  InvalidEventSubscriptionStateFault as __InvalidEventSubscriptionStateFault,
  SNSInvalidTopicFault as __SNSInvalidTopicFault,
  SNSNoAuthorizationFault as __SNSNoAuthorizationFault,
  SNSTopicArnNotFoundFault as __SNSTopicArnNotFoundFault,
  SourceNotFoundFault as __SourceNotFoundFault,
  SubscriptionAlreadyExistFault as __SubscriptionAlreadyExistFault,
  SubscriptionCategoryNotFoundFault as __SubscriptionCategoryNotFoundFault,
  SubscriptionNotFoundFault as __SubscriptionNotFoundFault,
} from "../models/index";
import {
  _aQE,
  _ASITS,
  _ASITSM,
  _ASITSR,
  _c,
  _CAIu,
  _CES,
  _CESM,
  _CESR,
  _CSI,
  _Da,
  _DE,
  _DEC,
  _DECM,
  _DEM,
  _DES,
  _DESe,
  _DESM,
  _DESMe,
  _DESR,
  _Du,
  _e,
  _EC,
  _ECL,
  _ECM,
  _ECML,
  _ECMv,
  _ECv,
  _EL,
  _EMv,
  _En,
  _ES,
  _ESA,
  _ESL,
  _ESM,
  _ESQEF,
  _ETn,
  _Ev,
  _Eve,
  _Fi,
  _hE,
  _IESSF,
  _m,
  _Ma,
  _Me,
  _MES,
  _MESM,
  _MESR,
  _MR,
  _RSIFS,
  _RSIFSM,
  _RSIFSR,
  _SA,
  _SAEF,
  _SCNFF,
  _SCTu,
  _SI,
  _SIL,
  _SIo,
  _SIou,
  _SN,
  _SNFF,
  _SNFFu,
  _SNSITF,
  _SNSNAF,
  _SNSTANFF,
  _St,
  _STA,
  _STo,
  _STtar,
  _T,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddSourceIdentifierToSubscriptionMessage = struct(n0, _ASITSM, 0, [_SN, _SI], [0, 0]);
export var AddSourceIdentifierToSubscriptionResult = struct(n0, _ASITSR, 0, [_ES], [[() => EventSubscription, 0]]);
export var CreateEventSubscriptionMessage = struct(
  n0,
  _CESM,
  0,
  [_SN, _STA, _STo, _EC, _SIo, _En, _T],
  [0, 0, 0, [() => EventCategoriesList, 0], [() => SourceIdsList, 0], 2, [() => TagList, 0]]
);
export var CreateEventSubscriptionResult = struct(n0, _CESR, 0, [_ES], [[() => EventSubscription, 0]]);
export var DeleteEventSubscriptionMessage = struct(n0, _DESM, 0, [_SN], [0]);
export var DeleteEventSubscriptionResult = struct(n0, _DESR, 0, [_ES], [[() => EventSubscription, 0]]);
export var DescribeEventCategoriesMessage = struct(n0, _DECM, 0, [_STo, _Fi], [0, [() => FilterList, 0]]);
export var DescribeEventsMessage = struct(
  n0,
  _DEM,
  0,
  [_SI, _STo, _STtar, _ETn, _Du, _EC, _Fi, _MR, _Ma],
  [0, 0, 4, 4, 1, [() => EventCategoriesList, 0], [() => FilterList, 0], 1, 0]
);
export var DescribeEventSubscriptionsMessage = struct(
  n0,
  _DESMe,
  0,
  [_SN, _Fi, _MR, _Ma],
  [0, [() => FilterList, 0], 1, 0]
);
export var Event = struct(n0, _Ev, 0, [_SI, _STo, _Me, _EC, _Da, _SA], [0, 0, 0, [() => EventCategoriesList, 0], 4, 0]);
export var EventCategoriesMap = struct(n0, _ECM, 0, [_STo, _EC], [0, [() => EventCategoriesList, 0]]);
export var EventCategoriesMessage = struct(n0, _ECMv, 0, [_ECML], [[() => EventCategoriesMapList, 0]]);
export var EventsMessage = struct(n0, _EMv, 0, [_Ma, _Eve], [0, [() => EventList, 0]]);
export var EventSubscription = struct(
  n0,
  _ES,
  0,
  [_CAIu, _CSI, _STA, _St, _SCTu, _STo, _SIL, _ECL, _En, _ESA],
  [0, 0, 0, 0, 0, 0, [() => SourceIdsList, 0], [() => EventCategoriesList, 0], 2, 0]
);
export var EventSubscriptionQuotaExceededFault = error(
  n0,
  _ESQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`EventSubscriptionQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __EventSubscriptionQuotaExceededFault
);
export var EventSubscriptionsMessage = struct(n0, _ESM, 0, [_Ma, _ESL], [0, [() => EventSubscriptionsList, 0]]);
export var InvalidEventSubscriptionStateFault = error(
  n0,
  _IESSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidEventSubscriptionState`, 400],
  },
  [_m],
  [0],

  __InvalidEventSubscriptionStateFault
);
export var ModifyEventSubscriptionMessage = struct(
  n0,
  _MESM,
  0,
  [_SN, _STA, _STo, _EC, _En],
  [0, 0, 0, [() => EventCategoriesList, 0], 2]
);
export var ModifyEventSubscriptionResult = struct(n0, _MESR, 0, [_ES], [[() => EventSubscription, 0]]);
export var RemoveSourceIdentifierFromSubscriptionMessage = struct(n0, _RSIFSM, 0, [_SN, _SI], [0, 0]);
export var RemoveSourceIdentifierFromSubscriptionResult = struct(n0, _RSIFSR, 0, [_ES], [[() => EventSubscription, 0]]);
export var SNSInvalidTopicFault = error(
  n0,
  _SNSITF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SNSInvalidTopic`, 400],
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
    [_hE]: 400,
    [_aQE]: [`SNSNoAuthorization`, 400],
  },
  [_m],
  [0],

  __SNSNoAuthorizationFault
);
export var SNSTopicArnNotFoundFault = error(
  n0,
  _SNSTANFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`SNSTopicArnNotFound`, 404],
  },
  [_m],
  [0],

  __SNSTopicArnNotFoundFault
);
export var SourceNotFoundFault = error(
  n0,
  _SNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`SourceNotFound`, 404],
  },
  [_m],
  [0],

  __SourceNotFoundFault
);
export var SubscriptionAlreadyExistFault = error(
  n0,
  _SAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SubscriptionAlreadyExist`, 400],
  },
  [_m],
  [0],

  __SubscriptionAlreadyExistFault
);
export var SubscriptionCategoryNotFoundFault = error(
  n0,
  _SCNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`SubscriptionCategoryNotFound`, 404],
  },
  [_m],
  [0],

  __SubscriptionCategoryNotFoundFault
);
export var SubscriptionNotFoundFault = error(
  n0,
  _SNFFu,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`SubscriptionNotFound`, 404],
  },
  [_m],
  [0],

  __SubscriptionNotFoundFault
);
export var EventCategoriesList = list(n0, _ECL, 0, [
  0,
  {
    [_xN]: _ECv,
  },
]);
export var EventCategoriesMapList = list(n0, _ECML, 0, [
  () => EventCategoriesMap,
  {
    [_xN]: _ECM,
  },
]);
export var EventList = list(n0, _EL, 0, [
  () => Event,
  {
    [_xN]: _Ev,
  },
]);
export var EventSubscriptionsList = list(n0, _ESL, 0, [
  () => EventSubscription,
  {
    [_xN]: _ES,
  },
]);
export var SourceIdsList = list(n0, _SIL, 0, [
  0,
  {
    [_xN]: _SIou,
  },
]);
export var AddSourceIdentifierToSubscription = op(
  n0,
  _ASITS,
  0,
  () => AddSourceIdentifierToSubscriptionMessage,
  () => AddSourceIdentifierToSubscriptionResult
);
export var CreateEventSubscription = op(
  n0,
  _CES,
  0,
  () => CreateEventSubscriptionMessage,
  () => CreateEventSubscriptionResult
);
export var DeleteEventSubscription = op(
  n0,
  _DES,
  0,
  () => DeleteEventSubscriptionMessage,
  () => DeleteEventSubscriptionResult
);
export var DescribeEventCategories = op(
  n0,
  _DEC,
  0,
  () => DescribeEventCategoriesMessage,
  () => EventCategoriesMessage
);
export var DescribeEvents = op(
  n0,
  _DE,
  0,
  () => DescribeEventsMessage,
  () => EventsMessage
);
export var DescribeEventSubscriptions = op(
  n0,
  _DESe,
  0,
  () => DescribeEventSubscriptionsMessage,
  () => EventSubscriptionsMessage
);
export var ModifyEventSubscription = op(
  n0,
  _MES,
  0,
  () => ModifyEventSubscriptionMessage,
  () => ModifyEventSubscriptionResult
);
export var RemoveSourceIdentifierFromSubscription = op(
  n0,
  _RSIFS,
  0,
  () => RemoveSourceIdentifierFromSubscriptionMessage,
  () => RemoveSourceIdentifierFromSubscriptionResult
);

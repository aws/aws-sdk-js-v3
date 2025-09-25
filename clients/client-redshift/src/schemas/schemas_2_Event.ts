// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  EventSubscriptionQuotaExceededFault as __EventSubscriptionQuotaExceededFault,
  SNSInvalidTopicFault as __SNSInvalidTopicFault,
  SNSNoAuthorizationFault as __SNSNoAuthorizationFault,
  SNSTopicArnNotFoundFault as __SNSTopicArnNotFoundFault,
  SourceNotFoundFault as __SourceNotFoundFault,
  SubscriptionAlreadyExistFault as __SubscriptionAlreadyExistFault,
  SubscriptionCategoryNotFoundFault as __SubscriptionCategoryNotFoundFault,
  SubscriptionEventIdNotFoundFault as __SubscriptionEventIdNotFoundFault,
  SubscriptionSeverityNotFoundFault as __SubscriptionSeverityNotFoundFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CAI,
  _CES,
  _CESM,
  _CESR,
  _CSI,
  _Da,
  _DE,
  _DEC,
  _DECM,
  _DEM,
  _DESe,
  _DESMe,
  _Du,
  _e,
  _EC,
  _ECL,
  _ECM,
  _ECML,
  _ECMv,
  _ECv,
  _ED,
  _EIM,
  _EIML,
  _EIv,
  _EL,
  _EM,
  _Ena,
  _ES,
  _ESL,
  _ESM,
  _ESQEF,
  _ET,
  _Ev,
  _Eve,
  _hE,
  _M,
  _m,
  _Me,
  _MES,
  _MESM,
  _MESR,
  _MR,
  _SAEF,
  _SCNFF,
  _SCT,
  _Se,
  _SEINFF,
  _SILo,
  _SIo,
  _SIou,
  _SIour,
  _SN,
  _SNFF,
  _SNSITF,
  _SNSNAF,
  _SNSTANFF,
  _SSNFFu,
  _ST,
  _St,
  _STA,
  _STt,
  _T,
  _TK,
  _TV,
  _xN,
  n0,
  TagKeyList,
  TagList,
} from "./schemas_0";
import { TagValueList } from "./schemas_65_Describe";

/* eslint no-var: 0 */

export var CreateEventSubscriptionMessage = struct(
  n0,
  _CESM,
  0,
  [_SN, _STA, _ST, _SIo, _EC, _Se, _Ena, _T],
  [0, 0, 0, [() => SourceIdsList, 0], [() => EventCategoriesList, 0], 0, 2, [() => TagList, 0]]
);
export var CreateEventSubscriptionResult = struct(n0, _CESR, 0, [_ES], [[() => EventSubscription, 0]]);
export var DescribeEventCategoriesMessage = struct(n0, _DECM, 0, [_ST], [0]);
export var DescribeEventsMessage = struct(n0, _DEM, 0, [_SIou, _ST, _STt, _ET, _Du, _MR, _M], [0, 0, 4, 4, 1, 1, 0]);
export var DescribeEventSubscriptionsMessage = struct(
  n0,
  _DESMe,
  0,
  [_SN, _MR, _M, _TK, _TV],
  [0, 1, 0, [() => TagKeyList, 0], [() => TagValueList, 0]]
);
export var Event = struct(
  n0,
  _Ev,
  0,
  [_SIou, _ST, _Me, _EC, _Se, _Da, _EIv],
  [0, 0, 0, [() => EventCategoriesList, 0], 0, 4, 0]
);
export var EventCategoriesMap = struct(n0, _ECM, 0, [_ST, _Eve], [0, [() => EventInfoMapList, 0]]);
export var EventCategoriesMessage = struct(n0, _ECMv, 0, [_ECML], [[() => EventCategoriesMapList, 0]]);
export var EventInfoMap = struct(n0, _EIM, 0, [_EIv, _EC, _ED, _Se], [0, [() => EventCategoriesList, 0], 0, 0]);
export var EventsMessage = struct(n0, _EM, 0, [_M, _Eve], [0, [() => EventList, 0]]);
export var EventSubscription = struct(
  n0,
  _ES,
  0,
  [_CAI, _CSI, _STA, _St, _SCT, _ST, _SILo, _ECL, _Se, _Ena, _T],
  [0, 0, 0, 0, 4, 0, [() => SourceIdsList, 0], [() => EventCategoriesList, 0], 0, 2, [() => TagList, 0]]
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
export var EventSubscriptionsMessage = struct(n0, _ESM, 0, [_M, _ESL], [0, [() => EventSubscriptionsList, 0]]);
export var ModifyEventSubscriptionMessage = struct(
  n0,
  _MESM,
  0,
  [_SN, _STA, _ST, _SIo, _EC, _Se, _Ena],
  [0, 0, 0, [() => SourceIdsList, 0], [() => EventCategoriesList, 0], 0, 2]
);
export var ModifyEventSubscriptionResult = struct(n0, _MESR, 0, [_ES], [[() => EventSubscription, 0]]);
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
export var SubscriptionEventIdNotFoundFault = error(
  n0,
  _SEINFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`SubscriptionEventIdNotFound`, 404],
  },
  [_m],
  [0],

  __SubscriptionEventIdNotFoundFault
);
export var SubscriptionSeverityNotFoundFault = error(
  n0,
  _SSNFFu,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`SubscriptionSeverityNotFound`, 404],
  },
  [_m],
  [0],

  __SubscriptionSeverityNotFoundFault
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
export var EventInfoMapList = list(n0, _EIML, 0, [
  () => EventInfoMap,
  {
    [_xN]: _EIM,
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
export var SourceIdsList = list(n0, _SILo, 0, [
  0,
  {
    [_xN]: _SIour,
  },
]);
export var CreateEventSubscription = op(
  n0,
  _CES,
  0,
  () => CreateEventSubscriptionMessage,
  () => CreateEventSubscriptionResult
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

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aD,
  _aET,
  _aI,
  _aNEA,
  _aS,
  _cA,
  _ch,
  _cT,
  _d,
  _eOR,
  _eP,
  _ER,
  _eR,
  _ERS,
  _eRS,
  _eS,
  _eT,
  _eTn,
  _h,
  _hQ,
  _ht,
  _iCE,
  _l,
  _lAT,
  _LC,
  _LCR,
  _LCRi,
  _LER,
  _LERR,
  _LERRi,
  _LMA,
  _LMAR,
  _LMARi,
  _LNC,
  _LNCR,
  _LNCRi,
  _LNE,
  _LNER,
  _LNERi,
  _LNH,
  _LNHR,
  _LNHRi,
  _LOU,
  _LOUR,
  _LOURi,
  _MA,
  _mA,
  _MAe,
  _mAe,
  _mC,
  _MCS,
  _mR,
  _mRa,
  _n,
  _NC,
  _nC,
  _nCA,
  _NCS,
  _NE,
  _nE,
  _NEO,
  _nEo,
  _NESo,
  _NH,
  _nH,
  _NHO,
  _nHR,
  _nT,
  _nTo,
  _oU,
  _oUI,
  _r,
  _rA,
  _s,
  _sEM,
  _SEMS,
  _sR,
  _sS,
  _sSBR,
  _sT,
  _st,
  _su,
  _sV,
  n0,
} from "./schemas_0";
import { AggregationSummary } from "./schemas_1_Notification";
import { NotificationHubStatusSummary, StatusSummaryByRegion } from "./schemas_4_Notification";

/* eslint no-var: 0 */

export var EventRuleStructure = struct(
  n0,
  _ERS,
  0,
  [_a, _nCA, _cT, _s, _eT, _eP, _r, _mR, _sSBR],
  [0, 0, 5, 0, 0, 0, 64 | 0, 64 | 0, () => StatusSummaryByRegion]
);
export var ListChannelsRequest = struct(
  n0,
  _LCR,
  0,
  [_nCA, _mRa, _nT],
  [
    [
      0,
      {
        [_hQ]: _nCA,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListChannelsResponse = struct(n0, _LCRi, 0, [_nT, _ch], [0, 64 | 0]);
export var ListEventRulesRequest = struct(
  n0,
  _LERR,
  0,
  [_nCA, _mRa, _nT],
  [
    [
      0,
      {
        [_hQ]: _nCA,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListEventRulesResponse = struct(n0, _LERRi, 0, [_nT, _eR], [0, () => EventRules]);
export var ListMemberAccountsRequest = struct(
  n0,
  _LMAR,
  0,
  [_nCA, _mRa, _nT, _mA, _st, _oUI],
  [
    [
      0,
      {
        [_hQ]: _nCA,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _mA,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _oUI,
      },
    ],
  ]
);
export var ListMemberAccountsResponse = struct(n0, _LMARi, 0, [_mAe, _nT], [() => MemberAccounts, 0]);
export var ListNotificationConfigurationsRequest = struct(
  n0,
  _LNCR,
  0,
  [_eRS, _cA, _st, _su, _mRa, _nT],
  [
    [
      0,
      {
        [_hQ]: _eRS,
      },
    ],
    [
      0,
      {
        [_hQ]: _cA,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _su,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListNotificationConfigurationsResponse = struct(
  n0,
  _LNCRi,
  0,
  [_nT, _nC],
  [0, () => NotificationConfigurations]
);
export var ListNotificationEventsRequest = struct(
  n0,
  _LNER,
  0,
  [_sT, _eTn, _l, _s, _iCE, _aNEA, _mRa, _nT, _oUI],
  [
    [
      5,
      {
        [_hQ]: _sT,
      },
    ],
    [
      5,
      {
        [_hQ]: _eTn,
      },
    ],
    [
      0,
      {
        [_hQ]: _l,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      2,
      {
        [_hQ]: _iCE,
      },
    ],
    [
      0,
      {
        [_hQ]: _aNEA,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _oUI,
      },
    ],
  ]
);
export var ListNotificationEventsResponse = struct(n0, _LNERi, 0, [_nT, _nE], [0, () => NotificationEvents]);
export var ListNotificationHubsRequest = struct(
  n0,
  _LNHR,
  0,
  [_mRa, _nT],
  [
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListNotificationHubsResponse = struct(n0, _LNHRi, 0, [_nH, _nT], [() => NotificationHubs, 0]);
export var ListOrganizationalUnitsRequest = struct(
  n0,
  _LOUR,
  0,
  [_nCA, _mRa, _nT],
  [
    [
      0,
      {
        [_hQ]: _nCA,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListOrganizationalUnitsResponse = struct(n0, _LOURi, 0, [_oU, _nT], [64 | 0, 0]);
export var MemberAccount = struct(n0, _MA, 0, [_nCA, _aI, _st, _sR, _oUI], [0, 0, 0, 0, 0]);
export var MessageComponentsSummary = struct(n0, _MCS, 0, [_h], [0]);
export var NotificationConfigurationStructure = struct(
  n0,
  _NCS,
  0,
  [_a, _n, _d, _st, _cT, _aD, _su],
  [0, 0, 0, 0, 5, 0, 0]
);
export var NotificationEventOverview = struct(
  n0,
  _NEO,
  0,
  [_a, _nCA, _rA, _cT, _nEo, _aET, _aNEA, _aS, _oUI],
  [0, 0, 0, 5, () => NotificationEventSummary, 0, 0, () => AggregationSummary, 0]
);
export var NotificationEventSummary = struct(
  n0,
  _NESo,
  0,
  [_sV, _sEM, _mC, _eS, _nTo],
  [0, () => SourceEventMetadataSummary, () => MessageComponentsSummary, 0, 0]
);
export var NotificationHubOverview = struct(
  n0,
  _NHO,
  0,
  [_nHR, _sS, _cT, _lAT],
  [0, () => NotificationHubStatusSummary, 5, 5]
);
export var SourceEventMetadataSummary = struct(n0, _SEMS, 0, [_eOR, _s, _eT], [0, 0, 0]);
export var Channels = 64 | 0;

export var EventRules = list(n0, _ER, 0, () => EventRuleStructure);
export var MemberAccounts = list(n0, _MAe, 0, () => MemberAccount);
export var NotificationConfigurations = list(n0, _NC, 0, () => NotificationConfigurationStructure);
export var NotificationEvents = list(n0, _NE, 0, () => NotificationEventOverview);
export var NotificationHubs = list(n0, _NH, 0, () => NotificationHubOverview);
export var OrganizationalUnits = 64 | 0;

export var ListChannels = op(
  n0,
  _LC,
  {
    [_ht]: ["GET", "/channels", 200],
  },
  () => ListChannelsRequest,
  () => ListChannelsResponse
);
export var ListEventRules = op(
  n0,
  _LER,
  {
    [_ht]: ["GET", "/event-rules", 200],
  },
  () => ListEventRulesRequest,
  () => ListEventRulesResponse
);
export var ListMemberAccounts = op(
  n0,
  _LMA,
  {
    [_ht]: ["GET", "/list-member-accounts", 200],
  },
  () => ListMemberAccountsRequest,
  () => ListMemberAccountsResponse
);
export var ListNotificationConfigurations = op(
  n0,
  _LNC,
  {
    [_ht]: ["GET", "/notification-configurations", 200],
  },
  () => ListNotificationConfigurationsRequest,
  () => ListNotificationConfigurationsResponse
);
export var ListNotificationEvents = op(
  n0,
  _LNE,
  {
    [_ht]: ["GET", "/notification-events", 200],
  },
  () => ListNotificationEventsRequest,
  () => ListNotificationEventsResponse
);
export var ListNotificationHubs = op(
  n0,
  _LNH,
  {
    [_ht]: ["GET", "/notification-hubs", 200],
  },
  () => ListNotificationHubsRequest,
  () => ListNotificationHubsResponse
);
export var ListOrganizationalUnits = op(
  n0,
  _LOU,
  {
    [_ht]: ["GET", "/organizational-units", 200],
  },
  () => ListOrganizationalUnitsRequest,
  () => ListOrganizationalUnitsResponse
);

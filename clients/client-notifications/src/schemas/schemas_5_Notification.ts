// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _AD,
  _aDg,
  _aET,
  _AMNAC,
  _AMNACR,
  _AMNACRs,
  _AMNACRss,
  _AMNACRsso,
  _AMNACs,
  _aMNEA,
  _aNR,
  _aS,
  _cA,
  _ca,
  _cAh,
  _cE,
  _cI,
  _cIh,
  _co,
  _cT,
  _cTh,
  _d,
  _DMNAC,
  _DMNACi,
  _DMNACR,
  _DMNACRi,
  _DMNACRis,
  _DMNACRisa,
  _eOR,
  _eS,
  _eT,
  _eTn,
  _GMNC,
  _GMNCE,
  _GMNCER,
  _GMNCERe,
  _GMNCR,
  _GMNCRe,
  _GMNE,
  _GMNER,
  _GMNERe,
  _hQ,
  _ht,
  _i,
  _l,
  _LMNC,
  _LMNCA,
  _LMNCAR,
  _LMNCARi,
  _LMNCE,
  _LMNCER,
  _LMNCERi,
  _LMNCR,
  _LMNCRi,
  _LMNE,
  _LMNER,
  _LMNERi,
  _mC,
  _MNC,
  _mNC,
  _MNCA,
  _mNCA,
  _MNCAS,
  _MNCE,
  _mNCE,
  _MNCEa,
  _MNCEO,
  _MNCES,
  _MNCS,
  _MNE,
  _mNE,
  _MNEa,
  _MNEO,
  _MNES,
  _mRa,
  _MSEMS,
  _n,
  _nEo,
  _nT,
  _nTo,
  _oO,
  _oUI,
  _rA,
  _s,
  _sC,
  _sD,
  _SDD,
  _SDDu,
  _sEDU,
  _sEDUDT,
  _sEM,
  _sT,
  _sV,
  _tP,
  _v,
  n0,
} from "./schemas_0";
import { AggregationSummary, MessageComponents, TextParts } from "./schemas_1_Notification";
import { MessageComponentsSummary } from "./schemas_7_List";

/* eslint no-var: 0 */

export var AggregationDetail = struct(n0, _AD, 0, [_sD], [() => SummarizationDimensionDetails]);
export var AssociateManagedNotificationAccountContactRequest = struct(n0, _AMNACR, 0, [_cI, _mNCA], [[0, 1], 0]);
export var AssociateManagedNotificationAccountContactResponse = struct(n0, _AMNACRs, 0, [], []);
export var AssociateManagedNotificationAdditionalChannelRequest = struct(n0, _AMNACRss, 0, [_cA, _mNCA], [[0, 1], 0]);
export var AssociateManagedNotificationAdditionalChannelResponse = struct(n0, _AMNACRsso, 0, [], []);
export var DisassociateManagedNotificationAccountContactRequest = struct(n0, _DMNACR, 0, [_cI, _mNCA], [[0, 1], 0]);
export var DisassociateManagedNotificationAccountContactResponse = struct(n0, _DMNACRi, 0, [], []);
export var DisassociateManagedNotificationAdditionalChannelRequest = struct(
  n0,
  _DMNACRis,
  0,
  [_cA, _mNCA],
  [[0, 1], 0]
);
export var DisassociateManagedNotificationAdditionalChannelResponse = struct(n0, _DMNACRisa, 0, [], []);
export var GetManagedNotificationChildEventRequest = struct(
  n0,
  _GMNCER,
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
export var GetManagedNotificationChildEventResponse = struct(
  n0,
  _GMNCERe,
  0,
  [_a, _mNCA, _cT, _co],
  [0, 0, 5, () => ManagedNotificationChildEvent]
);
export var GetManagedNotificationConfigurationRequest = struct(n0, _GMNCR, 0, [_a], [[0, 1]]);
export var GetManagedNotificationConfigurationResponse = struct(
  n0,
  _GMNCRe,
  0,
  [_a, _n, _d, _ca, _sC],
  [0, 0, 0, 0, 0]
);
export var GetManagedNotificationEventRequest = struct(
  n0,
  _GMNER,
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
export var GetManagedNotificationEventResponse = struct(
  n0,
  _GMNERe,
  0,
  [_a, _mNCA, _cT, _co],
  [0, 0, 5, () => ManagedNotificationEvent]
);
export var ListManagedNotificationChannelAssociationsRequest = struct(
  n0,
  _LMNCAR,
  0,
  [_mNCA, _mRa, _nT],
  [
    [
      0,
      {
        [_hQ]: _mNCA,
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
export var ListManagedNotificationChannelAssociationsResponse = struct(
  n0,
  _LMNCARi,
  0,
  [_nT, _cAh],
  [0, () => ManagedNotificationChannelAssociations]
);
export var ListManagedNotificationChildEventsRequest = struct(
  n0,
  _LMNCER,
  0,
  [_aMNEA, _sT, _eTn, _l, _mRa, _rA, _oUI, _nT],
  [
    [0, 1],
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
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
    [
      0,
      {
        [_hQ]: _oUI,
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
export var ListManagedNotificationChildEventsResponse = struct(
  n0,
  _LMNCERi,
  0,
  [_nT, _mNCE],
  [0, () => ManagedNotificationChildEvents]
);
export var ListManagedNotificationConfigurationsRequest = struct(
  n0,
  _LMNCR,
  0,
  [_cIh, _mRa, _nT],
  [
    [
      0,
      {
        [_hQ]: _cIh,
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
export var ListManagedNotificationConfigurationsResponse = struct(
  n0,
  _LMNCRi,
  0,
  [_nT, _mNC],
  [0, () => ManagedNotificationConfigurations]
);
export var ListManagedNotificationEventsRequest = struct(
  n0,
  _LMNER,
  0,
  [_sT, _eTn, _l, _s, _mRa, _nT, _oUI, _rA],
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
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
  ]
);
export var ListManagedNotificationEventsResponse = struct(
  n0,
  _LMNERi,
  0,
  [_nT, _mNE],
  [0, () => ManagedNotificationEvents]
);
export var ManagedNotificationChannelAssociationSummary = struct(n0, _MNCAS, 0, [_cIh, _cTh, _oO], [0, 0, 0]);
export var ManagedNotificationChildEvent = struct(
  n0,
  _MNCE,
  0,
  [_sV, _i, _mC, _sEDU, _sEDUDT, _nTo, _eS, _aMNEA, _sT, _eTn, _tP, _oUI, _aDg],
  [0, 0, () => MessageComponents, 0, 0, 0, 0, 0, 5, 5, () => TextParts, 0, () => AggregationDetail]
);
export var ManagedNotificationChildEventOverview = struct(
  n0,
  _MNCEO,
  0,
  [_a, _mNCA, _rA, _cT, _cE, _aMNEA, _oUI],
  [0, 0, 0, 5, () => ManagedNotificationChildEventSummary, 0, 0]
);
export var ManagedNotificationChildEventSummary = struct(
  n0,
  _MNCES,
  0,
  [_sV, _sEM, _mC, _aDg, _eS, _nTo],
  [0, () => ManagedSourceEventMetadataSummary, () => MessageComponentsSummary, () => AggregationDetail, 0, 0]
);
export var ManagedNotificationConfigurationStructure = struct(n0, _MNCS, 0, [_a, _n, _d], [0, 0, 0]);
export var ManagedNotificationEvent = struct(
  n0,
  _MNE,
  0,
  [_sV, _i, _mC, _sEDU, _sEDUDT, _nTo, _eS, _aET, _aS, _sT, _eTn, _tP, _oUI],
  [0, 0, () => MessageComponents, 0, 0, 0, 0, 0, () => AggregationSummary, 5, 5, () => TextParts, 0]
);
export var ManagedNotificationEventOverview = struct(
  n0,
  _MNEO,
  0,
  [_a, _mNCA, _rA, _cT, _nEo, _aET, _oUI, _aS, _aNR],
  [0, 0, 0, 5, () => ManagedNotificationEventSummary, 0, 0, () => AggregationSummary, 64 | 0]
);
export var ManagedNotificationEventSummary = struct(
  n0,
  _MNES,
  0,
  [_sV, _sEM, _mC, _eS, _nTo],
  [0, () => ManagedSourceEventMetadataSummary, () => MessageComponentsSummary, 0, 0]
);
export var ManagedSourceEventMetadataSummary = struct(n0, _MSEMS, 0, [_eOR, _s, _eT], [0, 0, 0]);
export var SummarizationDimensionDetail = struct(n0, _SDD, 0, [_n, _v], [0, 0]);
export var AggregatedNotificationRegions = 64 | 0;

export var ManagedNotificationChannelAssociations = list(
  n0,
  _MNCA,
  0,
  () => ManagedNotificationChannelAssociationSummary
);
export var ManagedNotificationChildEvents = list(n0, _MNCEa, 0, () => ManagedNotificationChildEventOverview);
export var ManagedNotificationConfigurations = list(n0, _MNC, 0, () => ManagedNotificationConfigurationStructure);
export var ManagedNotificationEvents = list(n0, _MNEa, 0, () => ManagedNotificationEventOverview);
export var SummarizationDimensionDetails = list(n0, _SDDu, 0, () => SummarizationDimensionDetail);
export var AssociateManagedNotificationAccountContact = op(
  n0,
  _AMNAC,
  {
    [_ht]: ["PUT", "/contacts/associate-managed-notification/{contactIdentifier}", 201],
  },
  () => AssociateManagedNotificationAccountContactRequest,
  () => AssociateManagedNotificationAccountContactResponse
);
export var AssociateManagedNotificationAdditionalChannel = op(
  n0,
  _AMNACs,
  {
    [_ht]: ["PUT", "/channels/associate-managed-notification/{channelArn}", 201],
  },
  () => AssociateManagedNotificationAdditionalChannelRequest,
  () => AssociateManagedNotificationAdditionalChannelResponse
);
export var DisassociateManagedNotificationAccountContact = op(
  n0,
  _DMNAC,
  {
    [_ht]: ["PUT", "/contacts/disassociate-managed-notification/{contactIdentifier}", 200],
  },
  () => DisassociateManagedNotificationAccountContactRequest,
  () => DisassociateManagedNotificationAccountContactResponse
);
export var DisassociateManagedNotificationAdditionalChannel = op(
  n0,
  _DMNACi,
  {
    [_ht]: ["PUT", "/channels/disassociate-managed-notification/{channelArn}", 200],
  },
  () => DisassociateManagedNotificationAdditionalChannelRequest,
  () => DisassociateManagedNotificationAdditionalChannelResponse
);
export var GetManagedNotificationChildEvent = op(
  n0,
  _GMNCE,
  {
    [_ht]: ["GET", "/managed-notification-child-events/{arn}", 200],
  },
  () => GetManagedNotificationChildEventRequest,
  () => GetManagedNotificationChildEventResponse
);
export var GetManagedNotificationConfiguration = op(
  n0,
  _GMNC,
  {
    [_ht]: ["GET", "/managed-notification-configurations/{arn}", 200],
  },
  () => GetManagedNotificationConfigurationRequest,
  () => GetManagedNotificationConfigurationResponse
);
export var GetManagedNotificationEvent = op(
  n0,
  _GMNE,
  {
    [_ht]: ["GET", "/managed-notification-events/{arn}", 200],
  },
  () => GetManagedNotificationEventRequest,
  () => GetManagedNotificationEventResponse
);
export var ListManagedNotificationChannelAssociations = op(
  n0,
  _LMNCA,
  {
    [_ht]: ["GET", "/channels/list-managed-notification-channel-associations", 200],
  },
  () => ListManagedNotificationChannelAssociationsRequest,
  () => ListManagedNotificationChannelAssociationsResponse
);
export var ListManagedNotificationChildEvents = op(
  n0,
  _LMNCE,
  {
    [_ht]: ["GET", "/list-managed-notification-child-events/{aggregateManagedNotificationEventArn}", 200],
  },
  () => ListManagedNotificationChildEventsRequest,
  () => ListManagedNotificationChildEventsResponse
);
export var ListManagedNotificationConfigurations = op(
  n0,
  _LMNC,
  {
    [_ht]: ["GET", "/managed-notification-configurations", 200],
  },
  () => ListManagedNotificationConfigurationsRequest,
  () => ListManagedNotificationConfigurationsResponse
);
export var ListManagedNotificationEvents = op(
  n0,
  _LMNE,
  {
    [_ht]: ["GET", "/managed-notification-events", 200],
  },
  () => ListManagedNotificationEventsRequest,
  () => ListManagedNotificationEventsResponse
);

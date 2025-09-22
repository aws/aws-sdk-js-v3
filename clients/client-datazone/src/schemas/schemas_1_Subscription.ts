// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _AAS,
  _AASc,
  _aI,
  _AIDPLI,
  _AIDPLIs,
  _ALs,
  _aLs,
  _aLss,
  _aPI,
  _aRs,
  _aS,
  _ASR,
  _ASRI,
  _ASRO,
  _aSs,
  _aT,
  _cA,
  _cB,
  _CSa,
  _CSI,
  _CSO,
  _CSR,
  _CSRI,
  _CSRO,
  _cT,
  _DC,
  _dC,
  _de,
  _dI,
  _dIo,
  _dPI,
  _DPL,
  _dPL,
  _dPR,
  _eIn,
  _eR,
  _eSI,
  _eT,
  _f,
  _fI,
  _fN,
  _gGT,
  _GL,
  _GLI,
  _GLO,
  _GS,
  _GSI,
  _GSO,
  _GSRD,
  _GSRDI,
  _GSRDO,
  _gT,
  _hQ,
  _ht,
  _i,
  _id,
  _it,
  _ite,
  _lI,
  _LIi,
  _lR,
  _LS,
  _LSi,
  _LSIi,
  _LSis,
  _LSO,
  _LSR,
  _LSRI,
  _LSRO,
  _lTSDPF,
  _MF,
  _mF,
  _MFI,
  _MFS,
  _mFS,
  _MFSe,
  _mRa,
  _n,
  _nT,
  _oPI,
  _oPIwn,
  _oPN,
  _pL,
  _proj,
  _r,
  _rI,
  _rP,
  _RR,
  _rR,
  _RSev,
  _RSI,
  _RSO,
  _RSR,
  _RSRI,
  _RSRO,
  _S,
  _s,
  _SAL,
  _sB,
  _SL,
  _sL,
  _sLI,
  _SLIu,
  _SLIub,
  _SLIubs,
  _SLu,
  _sLu,
  _sO,
  _SP,
  _sP,
  _SPIu,
  _SPIub,
  _SPIubs,
  _SPL,
  _SPu,
  _sPu,
  _SPub,
  _SR,
  _sRI,
  _sRIu,
  _SRS,
  _SSu,
  _tNy,
  _tR,
  _uA,
  _uB,
  _USR,
  _USRI,
  _USRO,
  AssetScope,
  Description,
  FormOutput,
  FormTypeName,
  n0,
  ProjectName,
} from "./schemas_0";
import { TimeSeriesDataPointSummaryFormOutputList } from "./schemas_4_TimeSeries";
import { FormInput } from "./schemas_47_Create";
import { DetailedGlossaryTerms } from "./schemas_55_Subscription";

/* eslint no-var: 0 */

export var DecisionComment = sim(n0, _DC, 0, 8);
export var RequestReason = sim(n0, _RR, 0, 8);
export var AcceptedAssetScope = struct(n0, _AAS, 0, [_aI, _fI], [0, 64 | 0]);
export var AcceptSubscriptionRequestInput = struct(
  n0,
  _ASRI,
  0,
  [_dI, _i, _dC, _aS],
  [[0, 1], [0, 1], [() => DecisionComment, 0], () => AcceptedAssetScopes]
);
export var AcceptSubscriptionRequestOutput = struct(
  n0,
  _ASRO,
  0,
  [_id, _cB, _uB, _dIo, _s, _cA, _uA, _rR, _sP, _sL, _rI, _dC, _eSI, _mF],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    [() => RequestReason, 0],
    [() => SubscribedPrincipals, 0],
    [() => SubscribedListings, 0],
    0,
    [() => DecisionComment, 0],
    0,
    [() => MetadataForms, 0],
  ]
);
export var AssetInDataProductListingItem = struct(n0, _AIDPLI, 0, [_eIn, _eR, _eT], [0, 0, 0]);
export var AssetListing = struct(
  n0,
  _ALs,
  0,
  [_aI, _aRs, _aT, _cA, _f, _lTSDPF, _gT, _gGT, _oPI],
  [
    0,
    0,
    0,
    4,
    0,
    () => TimeSeriesDataPointSummaryFormOutputList,
    [() => DetailedGlossaryTerms, 0],
    [() => DetailedGlossaryTerms, 0],
    0,
  ]
);
export var CancelSubscriptionInput = struct(
  n0,
  _CSI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var CancelSubscriptionOutput = struct(
  n0,
  _CSO,
  0,
  [_id, _cB, _uB, _dIo, _s, _cA, _uA, _sPu, _sLu, _sRI, _rP],
  [0, 0, 0, 0, 0, 4, 4, [() => SubscribedPrincipal, 0], [() => SubscribedListing, 0], 0, 2]
);
export var CreateSubscriptionRequestInput = struct(
  n0,
  _CSRI,
  0,
  [_dI, _sP, _sL, _rR, _cT, _mF],
  [
    [0, 1],
    () => SubscribedPrincipalInputs,
    () => SubscribedListingInputs,
    [() => RequestReason, 0],
    [0, 4],
    [() => MetadataFormInputs, 0],
  ]
);
export var CreateSubscriptionRequestOutput = struct(
  n0,
  _CSRO,
  0,
  [_id, _cB, _uB, _dIo, _s, _cA, _uA, _rR, _sP, _sL, _rI, _dC, _eSI, _mF],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    [() => RequestReason, 0],
    [() => SubscribedPrincipals, 0],
    [() => SubscribedListings, 0],
    0,
    [() => DecisionComment, 0],
    0,
    [() => MetadataForms, 0],
  ]
);
export var DataProductListing = struct(
  n0,
  _DPL,
  0,
  [_dPI, _dPR, _cA, _f, _gT, _oPI, _it],
  [0, 0, 4, 0, [() => DetailedGlossaryTerms, 0], 0, [() => ListingSummaries, 0]]
);
export var GetListingInput = struct(
  n0,
  _GLI,
  0,
  [_dI, _i, _lR],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _lR,
      },
    ],
  ]
);
export var GetListingOutput = struct(
  n0,
  _GLO,
  0,
  [_dIo, _id, _lR, _cA, _uA, _cB, _uB, _ite, _n, _de, _s],
  [0, 0, 0, 4, 4, 0, 0, [() => ListingItem, 0], 0, [() => Description, 0], 0]
);
export var GetSubscriptionInput = struct(
  n0,
  _GSI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetSubscriptionOutput = struct(
  n0,
  _GSO,
  0,
  [_id, _cB, _uB, _dIo, _s, _cA, _uA, _sPu, _sLu, _sRI, _rP],
  [0, 0, 0, 0, 0, 4, 4, [() => SubscribedPrincipal, 0], [() => SubscribedListing, 0], 0, 2]
);
export var GetSubscriptionRequestDetailsInput = struct(
  n0,
  _GSRDI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetSubscriptionRequestDetailsOutput = struct(
  n0,
  _GSRDO,
  0,
  [_id, _cB, _uB, _dIo, _s, _cA, _uA, _rR, _sP, _sL, _rI, _dC, _eSI, _mF],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    [() => RequestReason, 0],
    [() => SubscribedPrincipals, 0],
    [() => SubscribedListings, 0],
    0,
    [() => DecisionComment, 0],
    0,
    [() => MetadataForms, 0],
  ]
);
export var ListingSummary = struct(n0, _LS, 0, [_lI, _lR, _gT], [0, 0, [() => DetailedGlossaryTerms, 0]]);
export var ListSubscriptionRequestsInput = struct(
  n0,
  _LSRI,
  0,
  [_dI, _s, _sLI, _oPI, _aPI, _sB, _sO, _mRa, _nT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _sLI,
      },
    ],
    [
      0,
      {
        [_hQ]: _oPI,
      },
    ],
    [
      0,
      {
        [_hQ]: _aPI,
      },
    ],
    [
      0,
      {
        [_hQ]: _sB,
      },
    ],
    [
      0,
      {
        [_hQ]: _sO,
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
export var ListSubscriptionRequestsOutput = struct(n0, _LSRO, 0, [_it, _nT], [[() => SubscriptionRequests, 0], 0]);
export var ListSubscriptionsInput = struct(
  n0,
  _LSIi,
  0,
  [_dI, _sRIu, _s, _sLI, _oPI, _aPI, _sB, _sO, _mRa, _nT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sRIu,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _sLI,
      },
    ],
    [
      0,
      {
        [_hQ]: _oPI,
      },
    ],
    [
      0,
      {
        [_hQ]: _aPI,
      },
    ],
    [
      0,
      {
        [_hQ]: _sB,
      },
    ],
    [
      0,
      {
        [_hQ]: _sO,
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
export var ListSubscriptionsOutput = struct(n0, _LSO, 0, [_it, _nT], [[() => Subscriptions, 0], 0]);
export var MetadataFormSummary = struct(n0, _MFS, 0, [_fN, _tNy, _tR], [0, [() => FormTypeName, 0], 0]);
export var RejectSubscriptionRequestInput = struct(
  n0,
  _RSRI,
  0,
  [_dI, _i, _dC],
  [
    [0, 1],
    [0, 1],
    [() => DecisionComment, 0],
  ]
);
export var RejectSubscriptionRequestOutput = struct(
  n0,
  _RSRO,
  0,
  [_id, _cB, _uB, _dIo, _s, _cA, _uA, _rR, _sP, _sL, _rI, _dC, _eSI, _mF],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    [() => RequestReason, 0],
    [() => SubscribedPrincipals, 0],
    [() => SubscribedListings, 0],
    0,
    [() => DecisionComment, 0],
    0,
    [() => MetadataForms, 0],
  ]
);
export var RevokeSubscriptionInput = struct(n0, _RSI, 0, [_dI, _i, _rP], [[0, 1], [0, 1], 2]);
export var RevokeSubscriptionOutput = struct(
  n0,
  _RSO,
  0,
  [_id, _cB, _uB, _dIo, _s, _cA, _uA, _sPu, _sLu, _sRI, _rP],
  [0, 0, 0, 0, 0, 4, 4, [() => SubscribedPrincipal, 0], [() => SubscribedListing, 0], 0, 2]
);
export var SubscribedAssetListing = struct(
  n0,
  _SAL,
  0,
  [_eIn, _eR, _eT, _f, _gT, _aSs],
  [0, 0, 0, 0, [() => DetailedGlossaryTerms, 0], () => AssetScope]
);
export var SubscribedListing = struct(
  n0,
  _SL,
  0,
  [_id, _r, _n, _de, _ite, _oPIwn, _oPN],
  [0, 0, 0, [() => Description, 0], [() => SubscribedListingItem, 0], 0, 0]
);
export var SubscribedListingInput = struct(n0, _SLIu, 0, [_i], [0]);
export var SubscribedProductListing = struct(
  n0,
  _SPL,
  0,
  [_eIn, _eR, _gT, _n, _de, _aLs],
  [0, 0, [() => DetailedGlossaryTerms, 0], 0, 0, () => AssetInDataProductListingItems]
);
export var SubscribedProject = struct(n0, _SP, 0, [_id, _n], [0, [() => ProjectName, 0]]);
export var SubscribedProjectInput = struct(n0, _SPIu, 0, [_i], [0]);
export var SubscriptionRequestSummary = struct(
  n0,
  _SRS,
  0,
  [_id, _cB, _uB, _dIo, _s, _cA, _uA, _rR, _sP, _sL, _rI, _dC, _eSI, _mFS],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    [() => RequestReason, 0],
    [() => SubscribedPrincipals, 0],
    [() => SubscribedListings, 0],
    0,
    [() => DecisionComment, 0],
    0,
    [() => MetadataFormsSummary, 0],
  ]
);
export var SubscriptionSummary = struct(
  n0,
  _SSu,
  0,
  [_id, _cB, _uB, _dIo, _s, _cA, _uA, _sPu, _sLu, _sRI, _rP],
  [0, 0, 0, 0, 0, 4, 4, [() => SubscribedPrincipal, 0], [() => SubscribedListing, 0], 0, 2]
);
export var UpdateSubscriptionRequestInput = struct(
  n0,
  _USRI,
  0,
  [_dI, _i, _rR],
  [
    [0, 1],
    [0, 1],
    [() => RequestReason, 0],
  ]
);
export var UpdateSubscriptionRequestOutput = struct(
  n0,
  _USRO,
  0,
  [_id, _cB, _uB, _dIo, _s, _cA, _uA, _rR, _sP, _sL, _rI, _dC, _eSI, _mF],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    [() => RequestReason, 0],
    [() => SubscribedPrincipals, 0],
    [() => SubscribedListings, 0],
    0,
    [() => DecisionComment, 0],
    0,
    [() => MetadataForms, 0],
  ]
);
export var AcceptedAssetScopes = list(n0, _AASc, 0, () => AcceptedAssetScope);
export var AssetInDataProductListingItems = list(n0, _AIDPLIs, 0, () => AssetInDataProductListingItem);
export var ListingSummaries = list(n0, _LSi, 0, [() => ListingSummary, 0]);
export var MetadataFormInputs = list(n0, _MFI, 0, [() => FormInput, 0]);
export var MetadataForms = list(n0, _MF, 0, [() => FormOutput, 0]);
export var MetadataFormsSummary = list(n0, _MFSe, 0, [() => MetadataFormSummary, 0]);
export var SubscribedListingInputs = list(n0, _SLIub, 0, () => SubscribedListingInput);
export var SubscribedListings = list(n0, _SLu, 0, [() => SubscribedListing, 0]);
export var SubscribedPrincipalInputs = list(n0, _SPIub, 0, () => SubscribedPrincipalInput);
export var SubscribedPrincipals = list(n0, _SPu, 0, [() => SubscribedPrincipal, 0]);
export var SubscriptionRequests = list(n0, _SR, 0, [() => SubscriptionRequestSummary, 0]);
export var Subscriptions = list(n0, _S, 0, [() => SubscriptionSummary, 0]);
export var ListingItem = uni(
  n0,
  _LIi,
  0,
  [_aLss, _dPL],
  [
    [() => AssetListing, 0],
    [() => DataProductListing, 0],
  ]
);
export var SubscribedListingItem = uni(
  n0,
  _SLIubs,
  0,
  [_aLss, _pL],
  [
    [() => SubscribedAssetListing, 0],
    [() => SubscribedProductListing, 0],
  ]
);
export var SubscribedPrincipal = uni(n0, _SPub, 0, [_proj], [[() => SubscribedProject, 0]]);
export var SubscribedPrincipalInput = uni(n0, _SPIubs, 0, [_proj], [() => SubscribedProjectInput]);
export var AcceptSubscriptionRequest = op(
  n0,
  _ASR,
  {
    [_ht]: ["PUT", "/v2/domains/{domainIdentifier}/subscription-requests/{identifier}/accept", 200],
  },
  () => AcceptSubscriptionRequestInput,
  () => AcceptSubscriptionRequestOutput
);
export var CancelSubscription = op(
  n0,
  _CSa,
  {
    [_ht]: ["PUT", "/v2/domains/{domainIdentifier}/subscriptions/{identifier}/cancel", 200],
  },
  () => CancelSubscriptionInput,
  () => CancelSubscriptionOutput
);
export var CreateSubscriptionRequest = op(
  n0,
  _CSR,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/subscription-requests", 200],
  },
  () => CreateSubscriptionRequestInput,
  () => CreateSubscriptionRequestOutput
);
export var GetListing = op(
  n0,
  _GL,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/listings/{identifier}", 200],
  },
  () => GetListingInput,
  () => GetListingOutput
);
export var GetSubscription = op(
  n0,
  _GS,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/subscriptions/{identifier}", 200],
  },
  () => GetSubscriptionInput,
  () => GetSubscriptionOutput
);
export var GetSubscriptionRequestDetails = op(
  n0,
  _GSRD,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/subscription-requests/{identifier}", 200],
  },
  () => GetSubscriptionRequestDetailsInput,
  () => GetSubscriptionRequestDetailsOutput
);
export var ListSubscriptionRequests = op(
  n0,
  _LSR,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/subscription-requests", 200],
  },
  () => ListSubscriptionRequestsInput,
  () => ListSubscriptionRequestsOutput
);
export var ListSubscriptions = op(
  n0,
  _LSis,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/subscriptions", 200],
  },
  () => ListSubscriptionsInput,
  () => ListSubscriptionsOutput
);
export var RejectSubscriptionRequest = op(
  n0,
  _RSR,
  {
    [_ht]: ["PUT", "/v2/domains/{domainIdentifier}/subscription-requests/{identifier}/reject", 200],
  },
  () => RejectSubscriptionRequestInput,
  () => RejectSubscriptionRequestOutput
);
export var RevokeSubscription = op(
  n0,
  _RSev,
  {
    [_ht]: ["PUT", "/v2/domains/{domainIdentifier}/subscriptions/{identifier}/revoke", 200],
  },
  () => RevokeSubscriptionInput,
  () => RevokeSubscriptionOutput
);
export var UpdateSubscriptionRequest = op(
  n0,
  _USR,
  {
    [_ht]: ["PATCH", "/v2/domains/{domainIdentifier}/subscription-requests/{identifier}", 200],
  },
  () => UpdateSubscriptionRequestInput,
  () => UpdateSubscriptionRequestOutput
);

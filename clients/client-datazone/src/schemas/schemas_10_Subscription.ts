// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aAT,
  _aI,
  _aIs,
  _aP,
  _aRs,
  _as,
  _aSs,
  _ATN,
  _aTN,
  _ATNM,
  _cA,
  _cB,
  _cont,
  _CSG,
  _CSGI,
  _CSGO,
  _CST,
  _CSTI,
  _CSTO,
  _cT,
  _dI,
  _dIo,
  _DSG,
  _DSGI,
  _DSGO,
  _DST,
  _DSTI,
  _eInv,
  _eInvi,
  _FC,
  _fC,
  _fN,
  _fTa,
  _GE,
  _gE,
  _GEIr,
  _GSG,
  _GSGI,
  _GSGO,
  _GSTe,
  _GSTI,
  _GSTO,
  _gTra,
  _hQ,
  _ht,
  _i,
  _id,
  _it,
  _l,
  _LR,
  _LRI,
  _LSG,
  _LSGI,
  _LSGO,
  _LST,
  _LSTI,
  _LSTO,
  _m,
  _mAR,
  _mRa,
  _n,
  _nT,
  _oPI,
  _pI,
  _pro,
  _r,
  _s,
  _SA,
  _SAu,
  _sB,
  _SG,
  _SGS,
  _sI,
  _sLI,
  _sO,
  _ST,
  _sTC,
  _STF,
  _STFu,
  _sTI,
  _sTIu,
  _STN,
  _STS,
  _tN,
  _ty,
  _uA,
  _uB,
  _USGS,
  _USGSI,
  _USGSO,
  _USTI,
  _USTO,
  _USTp,
  AssetScope,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SubscriptionTargetName = sim(n0, _STN, 0, 8);
export var AssetTargetNameMap = struct(n0, _ATNM, 0, [_aI, _tN], [0, 0]);
export var CreateSubscriptionGrantInput = struct(
  n0,
  _CSGI,
  0,
  [_dI, _eInv, _sTI, _gE, _aTN, _cT],
  [[0, 1], 0, 0, () => GrantedEntityInput, () => AssetTargetNames, [0, 4]]
);
export var CreateSubscriptionGrantOutput = struct(
  n0,
  _CSGO,
  0,
  [_id, _cB, _uB, _dIo, _cA, _uA, _sTIu, _gE, _s, _as, _sI],
  [0, 0, 0, 0, 4, 4, 0, () => GrantedEntity, 0, () => SubscribedAssets, 0]
);
export var CreateSubscriptionTargetInput = struct(
  n0,
  _CSTI,
  0,
  [_dI, _eInv, _n, _ty, _sTC, _aP, _mAR, _aAT, _pro, _cT],
  [[0, 1], [0, 1], [() => SubscriptionTargetName, 0], 0, () => SubscriptionTargetForms, 64 | 0, 0, 64 | 0, 0, [0, 4]]
);
export var CreateSubscriptionTargetOutput = struct(
  n0,
  _CSTO,
  0,
  [_id, _aP, _dIo, _pI, _eInvi, _n, _ty, _cB, _uB, _cA, _uA, _mAR, _aAT, _sTC, _pro],
  [0, 64 | 0, 0, 0, 0, [() => SubscriptionTargetName, 0], 0, 0, 0, 4, 4, 0, 64 | 0, () => SubscriptionTargetForms, 0]
);
export var DeleteSubscriptionGrantInput = struct(
  n0,
  _DSGI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteSubscriptionGrantOutput = struct(
  n0,
  _DSGO,
  0,
  [_id, _cB, _uB, _dIo, _cA, _uA, _sTIu, _gE, _s, _as, _sI],
  [0, 0, 0, 0, 4, 4, 0, () => GrantedEntity, 0, () => SubscribedAssets, 0]
);
export var DeleteSubscriptionTargetInput = struct(
  n0,
  _DSTI,
  0,
  [_dI, _eInv, _i],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var FailureCause = struct(n0, _FC, 0, [_m], [0]);
export var GetSubscriptionGrantInput = struct(
  n0,
  _GSGI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetSubscriptionGrantOutput = struct(
  n0,
  _GSGO,
  0,
  [_id, _cB, _uB, _dIo, _cA, _uA, _sTIu, _gE, _s, _as, _sI],
  [0, 0, 0, 0, 4, 4, 0, () => GrantedEntity, 0, () => SubscribedAssets, 0]
);
export var GetSubscriptionTargetInput = struct(
  n0,
  _GSTI,
  0,
  [_dI, _eInv, _i],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetSubscriptionTargetOutput = struct(
  n0,
  _GSTO,
  0,
  [_id, _aP, _dIo, _pI, _eInvi, _n, _ty, _cB, _uB, _cA, _uA, _mAR, _aAT, _sTC, _pro],
  [0, 64 | 0, 0, 0, 0, [() => SubscriptionTargetName, 0], 0, 0, 0, 4, 4, 0, 64 | 0, () => SubscriptionTargetForms, 0]
);
export var ListingRevision = struct(n0, _LR, 0, [_id, _r], [0, 0]);
export var ListingRevisionInput = struct(n0, _LRI, 0, [_i, _r], [0, 0]);
export var ListSubscriptionGrantsInput = struct(
  n0,
  _LSGI,
  0,
  [_dI, _eInvi, _sTIu, _sLI, _sI, _oPI, _sB, _sO, _mRa, _nT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _eInvi,
      },
    ],
    [
      0,
      {
        [_hQ]: _sTIu,
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
        [_hQ]: _sI,
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
export var ListSubscriptionGrantsOutput = struct(n0, _LSGO, 0, [_it, _nT], [() => SubscriptionGrants, 0]);
export var ListSubscriptionTargetsInput = struct(
  n0,
  _LSTI,
  0,
  [_dI, _eInv, _sB, _sO, _mRa, _nT],
  [
    [0, 1],
    [0, 1],
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
export var ListSubscriptionTargetsOutput = struct(n0, _LSTO, 0, [_it, _nT], [[() => SubscriptionTargets, 0], 0]);
export var SubscribedAsset = struct(
  n0,
  _SA,
  0,
  [_aI, _aRs, _s, _tN, _fC, _gTra, _fTa, _aSs],
  [0, 0, 0, 0, () => FailureCause, 4, 4, () => AssetScope]
);
export var SubscriptionGrantSummary = struct(
  n0,
  _SGS,
  0,
  [_id, _cB, _uB, _dIo, _cA, _uA, _sTIu, _gE, _s, _as, _sI],
  [0, 0, 0, 0, 4, 4, 0, () => GrantedEntity, 0, () => SubscribedAssets, 0]
);
export var SubscriptionTargetForm = struct(n0, _STF, 0, [_fN, _cont], [0, 0]);
export var SubscriptionTargetSummary = struct(
  n0,
  _STS,
  0,
  [_id, _aP, _dIo, _pI, _eInvi, _n, _ty, _cB, _uB, _cA, _uA, _mAR, _aAT, _sTC, _pro],
  [0, 64 | 0, 0, 0, 0, [() => SubscriptionTargetName, 0], 0, 0, 0, 4, 4, 0, 64 | 0, () => SubscriptionTargetForms, 0]
);
export var UpdateSubscriptionGrantStatusInput = struct(
  n0,
  _USGSI,
  0,
  [_dI, _i, _aIs, _s, _fC, _tN],
  [[0, 1], [0, 1], [0, 1], 0, () => FailureCause, 0]
);
export var UpdateSubscriptionGrantStatusOutput = struct(
  n0,
  _USGSO,
  0,
  [_id, _cB, _uB, _dIo, _cA, _uA, _sTIu, _gE, _s, _as, _sI],
  [0, 0, 0, 0, 4, 4, 0, () => GrantedEntity, 0, () => SubscribedAssets, 0]
);
export var UpdateSubscriptionTargetInput = struct(
  n0,
  _USTI,
  0,
  [_dI, _eInv, _i, _n, _aP, _aAT, _sTC, _mAR, _pro],
  [[0, 1], [0, 1], [0, 1], [() => SubscriptionTargetName, 0], 64 | 0, 64 | 0, () => SubscriptionTargetForms, 0, 0]
);
export var UpdateSubscriptionTargetOutput = struct(
  n0,
  _USTO,
  0,
  [_id, _aP, _dIo, _pI, _eInvi, _n, _ty, _cB, _uB, _cA, _uA, _mAR, _aAT, _sTC, _pro],
  [0, 64 | 0, 0, 0, 0, [() => SubscriptionTargetName, 0], 0, 0, 0, 4, 4, 0, 64 | 0, () => SubscriptionTargetForms, 0]
);
export var ApplicableAssetTypes = 64 | 0;

export var AssetTargetNames = list(n0, _ATN, 0, () => AssetTargetNameMap);
export var AuthorizedPrincipalIdentifiers = 64 | 0;

export var SubscribedAssets = list(n0, _SAu, 0, () => SubscribedAsset);
export var SubscriptionGrants = list(n0, _SG, 0, () => SubscriptionGrantSummary);
export var SubscriptionTargetForms = list(n0, _STFu, 0, () => SubscriptionTargetForm);
export var SubscriptionTargets = list(n0, _ST, 0, [() => SubscriptionTargetSummary, 0]);
export var GrantedEntity = uni(n0, _GE, 0, [_l], [() => ListingRevision]);
export var GrantedEntityInput = uni(n0, _GEIr, 0, [_l], [() => ListingRevisionInput]);
export var CreateSubscriptionGrant = op(
  n0,
  _CSG,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/subscription-grants", 200],
  },
  () => CreateSubscriptionGrantInput,
  () => CreateSubscriptionGrantOutput
);
export var CreateSubscriptionTarget = op(
  n0,
  _CST,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets", 200],
  },
  () => CreateSubscriptionTargetInput,
  () => CreateSubscriptionTargetOutput
);
export var DeleteSubscriptionGrant = op(
  n0,
  _DSG,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/subscription-grants/{identifier}", 200],
  },
  () => DeleteSubscriptionGrantInput,
  () => DeleteSubscriptionGrantOutput
);
export var DeleteSubscriptionTarget = op(
  n0,
  _DST,
  {
    [_ht]: [
      "DELETE",
      "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}",
      204,
    ],
  },
  () => DeleteSubscriptionTargetInput,
  () => Unit
);
export var GetSubscriptionGrant = op(
  n0,
  _GSG,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/subscription-grants/{identifier}", 200],
  },
  () => GetSubscriptionGrantInput,
  () => GetSubscriptionGrantOutput
);
export var GetSubscriptionTarget = op(
  n0,
  _GSTe,
  {
    [_ht]: [
      "GET",
      "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}",
      200,
    ],
  },
  () => GetSubscriptionTargetInput,
  () => GetSubscriptionTargetOutput
);
export var ListSubscriptionGrants = op(
  n0,
  _LSG,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/subscription-grants", 200],
  },
  () => ListSubscriptionGrantsInput,
  () => ListSubscriptionGrantsOutput
);
export var ListSubscriptionTargets = op(
  n0,
  _LST,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets", 200],
  },
  () => ListSubscriptionTargetsInput,
  () => ListSubscriptionTargetsOutput
);
export var UpdateSubscriptionGrantStatus = op(
  n0,
  _USGS,
  {
    [_ht]: ["PATCH", "/v2/domains/{domainIdentifier}/subscription-grants/{identifier}/status/{assetIdentifier}", 200],
  },
  () => UpdateSubscriptionGrantStatusInput,
  () => UpdateSubscriptionGrantStatusOutput
);
export var UpdateSubscriptionTarget = op(
  n0,
  _USTp,
  {
    [_ht]: [
      "PATCH",
      "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}",
      200,
    ],
  },
  () => UpdateSubscriptionTargetInput,
  () => UpdateSubscriptionTargetOutput
);

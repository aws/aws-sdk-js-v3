// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AC,
  _aC,
  _ACc,
  _aI,
  _APc,
  _API,
  _APO,
  _AR,
  _aR,
  _ARs,
  _aRs,
  _ARss,
  _cA,
  _cB,
  _cT,
  _DA,
  _DAI,
  _DAO,
  _dI,
  _dIo,
  _EV,
  _eV,
  _hQ,
  _ht,
  _i,
  _id,
  _it,
  _LAR,
  _LARI,
  _LARO,
  _mRa,
  _nT,
  _pC,
  _pCre,
  _pT,
  _r,
  _rC,
  _RCe,
  _RCej,
  _RP,
  _RPIe,
  _RPOe,
  _RRe,
  _rRe,
  _ru,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EditedValue = sim(n0, _EV, 0, 8);
export var AcceptChoice = struct(n0, _AC, 0, [_pT, _pC, _eV], [0, 1, [() => EditedValue, 0]]);
export var AcceptPredictionsInput = struct(
  n0,
  _API,
  0,
  [_dI, _i, _r, _aR, _aC, _cT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    () => AcceptRule,
    [() => AcceptChoices, 0],
    [0, 4],
  ]
);
export var AcceptPredictionsOutput = struct(n0, _APO, 0, [_dIo, _aI, _r], [0, 0, 0]);
export var AcceptRule = struct(n0, _AR, 0, [_ru, _t], [0, 1]);
export var AssetRevision = struct(n0, _ARs, 0, [_dIo, _id, _r, _cB, _cA], [0, 0, 0, 0, 4]);
export var DeleteAssetInput = struct(
  n0,
  _DAI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAssetOutput = struct(n0, _DAO, 0, [], []);
export var ListAssetRevisionsInput = struct(
  n0,
  _LARI,
  0,
  [_dI, _i, _nT, _mRa],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListAssetRevisionsOutput = struct(n0, _LARO, 0, [_it, _nT], [() => AssetRevisions, 0]);
export var RejectChoice = struct(n0, _RCe, 0, [_pT, _pCre], [0, 64 | 1]);
export var RejectPredictionsInput = struct(
  n0,
  _RPIe,
  0,
  [_dI, _i, _r, _rRe, _rC, _cT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    () => RejectRule,
    () => RejectChoices,
    [0, 4],
  ]
);
export var RejectPredictionsOutput = struct(n0, _RPOe, 0, [_dIo, _aI, _aRs], [0, 0, 0]);
export var RejectRule = struct(n0, _RRe, 0, [_ru, _t], [0, 1]);
export var AcceptChoices = list(n0, _ACc, 0, [() => AcceptChoice, 0]);
export var AssetRevisions = list(n0, _ARss, 0, () => AssetRevision);
export var PredictionChoices = 64 | 1;

export var RejectChoices = list(n0, _RCej, 0, () => RejectChoice);
export var AcceptPredictions = op(
  n0,
  _APc,
  {
    [_ht]: ["PUT", "/v2/domains/{domainIdentifier}/assets/{identifier}/accept-predictions", 200],
  },
  () => AcceptPredictionsInput,
  () => AcceptPredictionsOutput
);
export var DeleteAsset = op(
  n0,
  _DA,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/assets/{identifier}", 204],
  },
  () => DeleteAssetInput,
  () => DeleteAssetOutput
);
export var ListAssetRevisions = op(
  n0,
  _LAR,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/assets/{identifier}/revisions", 200],
  },
  () => ListAssetRevisionsInput,
  () => ListAssetRevisionsOutput
);
export var RejectPredictions = op(
  n0,
  _RP,
  {
    [_ht]: ["PUT", "/v2/domains/{domainIdentifier}/assets/{identifier}/reject-predictions", 200],
  },
  () => RejectPredictionsInput,
  () => RejectPredictionsOutput
);

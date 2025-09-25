// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _aA,
  _aD,
  _aS,
  _CFMA,
  _CFMAR,
  _CFMARr,
  _d,
  _DFMA,
  _DFMAR,
  _DFMARe,
  _di,
  _DPR,
  _eAn,
  _eM,
  _GFMA,
  _GFMAR,
  _GFMARe,
  _hQ,
  _ht,
  _LFMAO,
  _LFMAOR,
  _LFMAORi,
  _LT,
  _lT,
  _mIo,
  _O,
  _Of,
  _of,
  _oI,
  _oT,
  _oTf,
  _pr,
  _PT,
  _rAe,
  _rCa,
  _RCat,
  _rPD,
  _s,
  _ST,
  _sTup,
  _TD,
  _tD,
  _u,
  _uBPT,
  _ur,
  _VT,
  _vT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AgreementAvailability = struct(n0, _AA, 0, [_s, _eM], [0, 0]);
export var CreateFoundationModelAgreementRequest = struct(n0, _CFMAR, 0, [_oT, _mIo], [0, 0]);
export var CreateFoundationModelAgreementResponse = struct(n0, _CFMARr, 0, [_mIo], [0]);
export var DeleteFoundationModelAgreementRequest = struct(n0, _DFMAR, 0, [_mIo], [0]);
export var DeleteFoundationModelAgreementResponse = struct(n0, _DFMARe, 0, [], []);
export var DimensionalPriceRate = struct(n0, _DPR, 0, [_di, _pr, _d, _u], [0, 0, 0, 0]);
export var GetFoundationModelAvailabilityRequest = struct(n0, _GFMAR, 0, [_mIo], [[0, 1]]);
export var GetFoundationModelAvailabilityResponse = struct(
  n0,
  _GFMARe,
  0,
  [_mIo, _aA, _aS, _eAn, _rAe],
  [0, () => AgreementAvailability, 0, 0, 0]
);
export var LegalTerm = struct(n0, _LT, 0, [_ur], [0]);
export var ListFoundationModelAgreementOffersRequest = struct(
  n0,
  _LFMAOR,
  0,
  [_mIo, _oTf],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _oTf,
      },
    ],
  ]
);
export var ListFoundationModelAgreementOffersResponse = struct(n0, _LFMAORi, 0, [_mIo, _of], [0, () => Offers]);
export var Offer = struct(n0, _O, 0, [_oI, _oT, _tD], [0, 0, () => TermDetails]);
export var PricingTerm = struct(n0, _PT, 0, [_rCa], [() => RateCard]);
export var SupportTerm = struct(n0, _ST, 0, [_rPD], [0]);
export var TermDetails = struct(
  n0,
  _TD,
  0,
  [_uBPT, _lT, _sTup, _vT],
  [() => PricingTerm, () => LegalTerm, () => SupportTerm, () => ValidityTerm]
);
export var ValidityTerm = struct(n0, _VT, 0, [_aD], [0]);
export var Offers = list(n0, _Of, 0, () => Offer);
export var RateCard = list(n0, _RCat, 0, () => DimensionalPriceRate);
export var CreateFoundationModelAgreement = op(
  n0,
  _CFMA,
  {
    [_ht]: ["POST", "/create-foundation-model-agreement", 202],
  },
  () => CreateFoundationModelAgreementRequest,
  () => CreateFoundationModelAgreementResponse
);
export var DeleteFoundationModelAgreement = op(
  n0,
  _DFMA,
  {
    [_ht]: ["POST", "/delete-foundation-model-agreement", 202],
  },
  () => DeleteFoundationModelAgreementRequest,
  () => DeleteFoundationModelAgreementResponse
);
export var GetFoundationModelAvailability = op(
  n0,
  _GFMA,
  {
    [_ht]: ["GET", "/foundation-model-availability/{modelId}", 200],
  },
  () => GetFoundationModelAvailabilityRequest,
  () => GetFoundationModelAvailabilityResponse
);
export var ListFoundationModelAgreementOffers = op(
  n0,
  _LFMAO,
  {
    [_ht]: ["GET", "/list-foundation-model-agreement-offers/{modelId}", 200],
  },
  () => ListFoundationModelAgreementOffersRequest,
  () => ListFoundationModelAgreementOffersResponse
);

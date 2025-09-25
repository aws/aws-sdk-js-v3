// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _A,
  _a,
  _aD,
  _ADE,
  _aED,
  _aI,
  _aIg,
  _aSD,
  _AT,
  _aT,
  _aTc,
  _aTg,
  _ATL,
  _aV,
  _AVS,
  _aVS,
  _AVSL,
  _bP,
  _BPT,
  _bPT,
  _C,
  _c,
  _cA,
  _ca,
  _cC,
  _cD,
  _co,
  _con,
  _CUPT,
  _cUPT,
  _CUPTC,
  _CURCI,
  _CURCL,
  _D,
  _d,
  _DA,
  _DAI,
  _DAO,
  _DI,
  _dK,
  _DL,
  _DLo,
  _do,
  _du,
  _dV,
  _e,
  _eAR,
  _EC,
  _eC,
  _eT,
  _F,
  _f,
  _fi,
  _FL,
  _FTPT,
  _fTPT,
  _FUPT,
  _fUPT,
  _g,
  _GAT,
  _GATI,
  _GATO,
  _GI,
  _GL,
  _hE,
  _i,
  _ISE,
  _LT,
  _lT,
  _m,
  _mDS,
  _mQ,
  _mR,
  _n,
  _nT,
  _oI,
  _P,
  _p,
  _pr,
  _PS,
  _pS,
  _PST,
  _pST,
  _qC,
  _R,
  _r,
  _rC,
  _rCa,
  _RCI,
  _RCL,
  _Re,
  _re,
  _rI,
  _rIe,
  _RNFE,
  _rP,
  _RPT,
  _rPT,
  _RT,
  _rT,
  _RTC,
  _rTe,
  _S,
  _s,
  _SA,
  _SAI,
  _SAO,
  _sB,
  _sc,
  _se,
  _ser,
  _SI,
  _SL,
  _So,
  _sO,
  _so,
  _ST,
  _sT,
  _sTu,
  _sV,
  _t,
  _TE,
  _u,
  _UBPT,
  _uBPT,
  _UBRCI,
  _UBRCL,
  _v,
  _va,
  _val,
  _VE,
  _VEF,
  _VEFL,
  _VT,
  _vT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Acceptor = struct(n0, _A, 0, [_aI], [0]);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_rI, _m],
  [0, 0],

  __AccessDeniedException
);
export var AgreementViewSummary = struct(
  n0,
  _AVS,
  0,
  [_aIg, _aT, _sT, _eT, _aTg, _a, _p, _pS, _s],
  [0, 4, 4, 4, 0, () => Acceptor, () => Proposer, () => ProposalSummary, 0]
);
export var ByolPricingTerm = struct(n0, _BPT, 0, [_t], [0]);
export var ConfigurableUpfrontPricingTerm = struct(
  n0,
  _CUPT,
  0,
  [_t, _cC, _rC, _co],
  [0, 0, () => ConfigurableUpfrontRateCardList, () => ConfigurableUpfrontPricingTermConfiguration]
);
export var ConfigurableUpfrontPricingTermConfiguration = struct(n0, _CUPTC, 0, [_sV, _d], [0, () => DimensionList]);
export var ConfigurableUpfrontRateCardItem = struct(
  n0,
  _CURCI,
  0,
  [_se, _con, _rCa],
  [() => Selector, () => Constraints, () => RateCardList]
);
export var Constraints = struct(n0, _C, 0, [_mDS, _qC], [0, 0]);
export var DescribeAgreementInput = struct(n0, _DAI, 0, [_aIg], [0]);
export var DescribeAgreementOutput = struct(
  n0,
  _DAO,
  0,
  [_aIg, _a, _p, _sT, _eT, _aT, _aTg, _eC, _pS, _s],
  [0, () => Acceptor, () => Proposer, 4, 4, 4, 0, () => EstimatedCharges, () => ProposalSummary, 0]
);
export var Dimension = struct(n0, _D, 0, [_dK, _dV], [0, 1]);
export var DocumentItem = struct(n0, _DI, 0, [_t, _u, _v], [0, 0, 0]);
export var EstimatedCharges = struct(n0, _EC, 0, [_cC, _aV], [0, 0]);
export var Filter = struct(n0, _F, 0, [_n, _va], [0, 64 | 0]);
export var FixedUpfrontPricingTerm = struct(n0, _FUPT, 0, [_t, _cC, _du, _pr, _g], [0, 0, 0, 0, () => GrantList]);
export var FreeTrialPricingTerm = struct(n0, _FTPT, 0, [_t, _du, _g], [0, 0, () => GrantList]);
export var GetAgreementTermsInput = struct(n0, _GATI, 0, [_aIg, _mR, _nT], [0, 1, 0]);
export var GetAgreementTermsOutput = struct(n0, _GATO, 0, [_aTc, _nT], [() => AcceptedTermList, 0]);
export var GrantItem = struct(n0, _GI, 0, [_dK, _mQ], [0, 1]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _ser,
    [_hE]: 500,
  },
  [_rI, _m],
  [0, 0],

  __InternalServerException
);
export var LegalTerm = struct(n0, _LT, 0, [_t, _do], [0, () => DocumentList]);
export var PaymentScheduleTerm = struct(n0, _PST, 0, [_t, _cC, _sc], [0, 0, () => ScheduleList]);
export var ProposalSummary = struct(n0, _PS, 0, [_r, _oI], [() => Resources, 0]);
export var Proposer = struct(n0, _P, 0, [_aI], [0]);
export var RateCardItem = struct(n0, _RCI, 0, [_dK, _pr], [0, 0]);
export var RecurringPaymentTerm = struct(n0, _RPT, 0, [_t, _cC, _bP, _pr], [0, 0, 0, 0]);
export var RenewalTerm = struct(n0, _RT, 0, [_t, _co], [0, () => RenewalTermConfiguration]);
export var RenewalTermConfiguration = struct(n0, _RTC, 0, [_eAR], [2]);
export var Resource = struct(n0, _R, 0, [_i, _t], [0, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_rI, _m, _rIe, _rT],
  [0, 0, 0, 0],

  __ResourceNotFoundException
);
export var ScheduleItem = struct(n0, _SI, 0, [_cD, _cA], [4, 0]);
export var SearchAgreementsInput = struct(
  n0,
  _SAI,
  0,
  [_ca, _f, _so, _mR, _nT],
  [0, () => FilterList, () => Sort, 1, 0]
);
export var SearchAgreementsOutput = struct(n0, _SAO, 0, [_aVS, _nT], [() => AgreementViewSummaryList, 0]);
export var Selector = struct(n0, _S, 0, [_t, _val], [0, 0]);
export var Sort = struct(n0, _So, 0, [_sB, _sO], [0, 0]);
export var SupportTerm = struct(n0, _ST, 0, [_t, _rP], [0, 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_rI, _m],
  [0, 0],

  __ThrottlingException
);
export var UsageBasedPricingTerm = struct(n0, _UBPT, 0, [_t, _cC, _rC], [0, 0, () => UsageBasedRateCardList]);
export var UsageBasedRateCardItem = struct(n0, _UBRCI, 0, [_rCa], [() => RateCardList]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_rI, _m, _re, _fi],
  [0, 0, 0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_n, _m], [0, 0]);
export var ValidityTerm = struct(n0, _VT, 0, [_t, _aD, _aSD, _aED], [0, 0, 4, 4]);
export var Unit = "unit" as const;

export var AcceptedTermList = list(n0, _ATL, 0, () => AcceptedTerm);
export var AgreementViewSummaryList = list(n0, _AVSL, 0, () => AgreementViewSummary);
export var ConfigurableUpfrontRateCardList = list(n0, _CURCL, 0, () => ConfigurableUpfrontRateCardItem);
export var DimensionList = list(n0, _DL, 0, () => Dimension);
export var DocumentList = list(n0, _DLo, 0, () => DocumentItem);
export var FilterList = list(n0, _FL, 0, () => Filter);
export var FilterValueList = 64 | 0;

export var GrantList = list(n0, _GL, 0, () => GrantItem);
export var RateCardList = list(n0, _RCL, 0, () => RateCardItem);
export var Resources = list(n0, _Re, 0, () => Resource);
export var ScheduleList = list(n0, _SL, 0, () => ScheduleItem);
export var UsageBasedRateCardList = list(n0, _UBRCL, 0, () => UsageBasedRateCardItem);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);
export var AcceptedTerm = uni(
  n0,
  _AT,
  0,
  [_lT, _sTu, _rTe, _uBPT, _cUPT, _bPT, _rPT, _vT, _pST, _fTPT, _fUPT],
  [
    () => LegalTerm,
    () => SupportTerm,
    () => RenewalTerm,
    () => UsageBasedPricingTerm,
    () => ConfigurableUpfrontPricingTerm,
    () => ByolPricingTerm,
    () => RecurringPaymentTerm,
    () => ValidityTerm,
    () => PaymentScheduleTerm,
    () => FreeTrialPricingTerm,
    () => FixedUpfrontPricingTerm,
  ]
);
export var DescribeAgreement = op(
  n0,
  _DA,
  0,
  () => DescribeAgreementInput,
  () => DescribeAgreementOutput
);
export var GetAgreementTerms = op(
  n0,
  _GAT,
  0,
  () => GetAgreementTermsInput,
  () => GetAgreementTermsOutput
);
export var SearchAgreements = op(
  n0,
  _SA,
  0,
  () => SearchAgreementsInput,
  () => SearchAgreementsOutput
);

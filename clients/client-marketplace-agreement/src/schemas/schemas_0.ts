export const _A = "Acceptor";
export const _ADE = "AccessDeniedException";
export const _AT = "AcceptedTerm";
export const _ATL = "AcceptedTermList";
export const _AVS = "AgreementViewSummary";
export const _AVSL = "AgreementViewSummaryList";
export const _BPT = "ByolPricingTerm";
export const _C = "Constraints";
export const _CUPT = "ConfigurableUpfrontPricingTerm";
export const _CUPTC = "ConfigurableUpfrontPricingTermConfiguration";
export const _CURCI = "ConfigurableUpfrontRateCardItem";
export const _CURCL = "ConfigurableUpfrontRateCardList";
export const _D = "Dimension";
export const _DA = "DescribeAgreement";
export const _DAI = "DescribeAgreementInput";
export const _DAO = "DescribeAgreementOutput";
export const _DI = "DocumentItem";
export const _DL = "DimensionList";
export const _DLo = "DocumentList";
export const _EC = "EstimatedCharges";
export const _F = "Filter";
export const _FL = "FilterList";
export const _FTPT = "FreeTrialPricingTerm";
export const _FUPT = "FixedUpfrontPricingTerm";
export const _GAT = "GetAgreementTerms";
export const _GATI = "GetAgreementTermsInput";
export const _GATO = "GetAgreementTermsOutput";
export const _GI = "GrantItem";
export const _GL = "GrantList";
export const _ISE = "InternalServerException";
export const _LT = "LegalTerm";
export const _P = "Proposer";
export const _PS = "ProposalSummary";
export const _PST = "PaymentScheduleTerm";
export const _R = "Resource";
export const _RCI = "RateCardItem";
export const _RCL = "RateCardList";
export const _RNFE = "ResourceNotFoundException";
export const _RPT = "RecurringPaymentTerm";
export const _RT = "RenewalTerm";
export const _RTC = "RenewalTermConfiguration";
export const _Re = "Resources";
export const _S = "Selector";
export const _SA = "SearchAgreements";
export const _SAI = "SearchAgreementsInput";
export const _SAO = "SearchAgreementsOutput";
export const _SI = "ScheduleItem";
export const _SL = "ScheduleList";
export const _ST = "SupportTerm";
export const _So = "Sort";
export const _TE = "ThrottlingException";
export const _UBPT = "UsageBasedPricingTerm";
export const _UBRCI = "UsageBasedRateCardItem";
export const _UBRCL = "UsageBasedRateCardList";
export const _VE = "ValidationException";
export const _VEF = "ValidationExceptionField";
export const _VEFL = "ValidationExceptionFieldList";
export const _VT = "ValidityTerm";
export const _a = "acceptor";
export const _aD = "agreementDuration";
export const _aED = "agreementEndDate";
export const _aI = "accountId";
export const _aIg = "agreementId";
export const _aSD = "agreementStartDate";
export const _aT = "acceptanceTime";
export const _aTc = "acceptedTerms";
export const _aTg = "agreementType";
export const _aV = "agreementValue";
export const _aVS = "agreementViewSummaries";
export const _bP = "billingPeriod";
export const _bPT = "byolPricingTerm";
export const _c = "client";
export const _cA = "chargeAmount";
export const _cC = "currencyCode";
export const _cD = "chargeDate";
export const _cUPT = "configurableUpfrontPricingTerm";
export const _ca = "catalog";
export const _co = "configuration";
export const _con = "constraints";
export const _d = "dimensions";
export const _dK = "dimensionKey";
export const _dV = "dimensionValue";
export const _do = "documents";
export const _du = "duration";
export const _e = "error";
export const _eAR = "enableAutoRenew";
export const _eC = "estimatedCharges";
export const _eT = "endTime";
export const _f = "filters";
export const _fTPT = "freeTrialPricingTerm";
export const _fUPT = "fixedUpfrontPricingTerm";
export const _fi = "fields";
export const _g = "grants";
export const _hE = "httpError";
export const _i = "id";
export const _lT = "legalTerm";
export const _m = "message";
export const _mDS = "multipleDimensionSelection";
export const _mQ = "maxQuantity";
export const _mR = "maxResults";
export const _n = "name";
export const _nT = "nextToken";
export const _oI = "offerId";
export const _p = "proposer";
export const _pS = "proposalSummary";
export const _pST = "paymentScheduleTerm";
export const _pr = "price";
export const _qC = "quantityConfiguration";
export const _r = "resources";
export const _rC = "rateCards";
export const _rCa = "rateCard";
export const _rI = "requestId";
export const _rIe = "resourceId";
export const _rP = "refundPolicy";
export const _rPT = "recurringPaymentTerm";
export const _rT = "resourceType";
export const _rTe = "renewalTerm";
export const _re = "reason";
export const _s = "status";
export const _sB = "sortBy";
export const _sO = "sortOrder";
export const _sT = "startTime";
export const _sTu = "supportTerm";
export const _sV = "selectorValue";
export const _sc = "schedule";
export const _se = "selector";
export const _ser = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.marketplaceagreement";
export const _so = "sort";
export const _t = "type";
export const _u = "url";
export const _uBPT = "usageBasedPricingTerm";
export const _v = "version";
export const _vT = "validityTerm";
export const _va = "values";
export const _val = "value";
export const n0 = "com.amazonaws.marketplaceagreement";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import { MarketplaceAgreementServiceException as __MarketplaceAgreementServiceException } from "../models/MarketplaceAgreementServiceException";

/* eslint no-var: 0 */

export var Acceptor: StaticStructureSchema = [3, n0, _A, 0, [_aI], [0]];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_rI, _m],
  [0, 0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var AgreementViewSummary: StaticStructureSchema = [
  3,
  n0,
  _AVS,
  0,
  [_aIg, _aT, _sT, _eT, _aTg, _a, _p, _pS, _s],
  [0, 4, 4, 4, 0, () => Acceptor, () => Proposer, () => ProposalSummary, 0],
];
export var ByolPricingTerm: StaticStructureSchema = [3, n0, _BPT, 0, [_t], [0]];
export var ConfigurableUpfrontPricingTerm: StaticStructureSchema = [
  3,
  n0,
  _CUPT,
  0,
  [_t, _cC, _rC, _co],
  [0, 0, () => ConfigurableUpfrontRateCardList, () => ConfigurableUpfrontPricingTermConfiguration],
];
export var ConfigurableUpfrontPricingTermConfiguration: StaticStructureSchema = [
  3,
  n0,
  _CUPTC,
  0,
  [_sV, _d],
  [0, () => DimensionList],
];
export var ConfigurableUpfrontRateCardItem: StaticStructureSchema = [
  3,
  n0,
  _CURCI,
  0,
  [_se, _con, _rCa],
  [() => Selector, () => Constraints, () => RateCardList],
];
export var Constraints: StaticStructureSchema = [3, n0, _C, 0, [_mDS, _qC], [0, 0]];
export var DescribeAgreementInput: StaticStructureSchema = [3, n0, _DAI, 0, [_aIg], [0]];
export var DescribeAgreementOutput: StaticStructureSchema = [
  3,
  n0,
  _DAO,
  0,
  [_aIg, _a, _p, _sT, _eT, _aT, _aTg, _eC, _pS, _s],
  [0, () => Acceptor, () => Proposer, 4, 4, 4, 0, () => EstimatedCharges, () => ProposalSummary, 0],
];
export var Dimension: StaticStructureSchema = [3, n0, _D, 0, [_dK, _dV], [0, 1]];
export var DocumentItem: StaticStructureSchema = [3, n0, _DI, 0, [_t, _u, _v], [0, 0, 0]];
export var EstimatedCharges: StaticStructureSchema = [3, n0, _EC, 0, [_cC, _aV], [0, 0]];
export var Filter: StaticStructureSchema = [3, n0, _F, 0, [_n, _va], [0, 64 | 0]];
export var FixedUpfrontPricingTerm: StaticStructureSchema = [
  3,
  n0,
  _FUPT,
  0,
  [_t, _cC, _du, _pr, _g],
  [0, 0, 0, 0, () => GrantList],
];
export var FreeTrialPricingTerm: StaticStructureSchema = [3, n0, _FTPT, 0, [_t, _du, _g], [0, 0, () => GrantList]];
export var GetAgreementTermsInput: StaticStructureSchema = [3, n0, _GATI, 0, [_aIg, _mR, _nT], [0, 1, 0]];
export var GetAgreementTermsOutput: StaticStructureSchema = [3, n0, _GATO, 0, [_aTc, _nT], [() => AcceptedTermList, 0]];
export var GrantItem: StaticStructureSchema = [3, n0, _GI, 0, [_dK, _mQ], [0, 1]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _ser,
    [_hE]: 500,
  },
  [_rI, _m],
  [0, 0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var LegalTerm: StaticStructureSchema = [3, n0, _LT, 0, [_t, _do], [0, () => DocumentList]];
export var PaymentScheduleTerm: StaticStructureSchema = [3, n0, _PST, 0, [_t, _cC, _sc], [0, 0, () => ScheduleList]];
export var ProposalSummary: StaticStructureSchema = [3, n0, _PS, 0, [_r, _oI], [() => Resources, 0]];
export var Proposer: StaticStructureSchema = [3, n0, _P, 0, [_aI], [0]];
export var RateCardItem: StaticStructureSchema = [3, n0, _RCI, 0, [_dK, _pr], [0, 0]];
export var RecurringPaymentTerm: StaticStructureSchema = [3, n0, _RPT, 0, [_t, _cC, _bP, _pr], [0, 0, 0, 0]];
export var RenewalTerm: StaticStructureSchema = [3, n0, _RT, 0, [_t, _co], [0, () => RenewalTermConfiguration]];
export var RenewalTermConfiguration: StaticStructureSchema = [3, n0, _RTC, 0, [_eAR], [2]];
export var Resource: StaticStructureSchema = [3, n0, _R, 0, [_i, _t], [0, 0]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_rI, _m, _rIe, _rT],
  [0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ScheduleItem: StaticStructureSchema = [3, n0, _SI, 0, [_cD, _cA], [4, 0]];
export var SearchAgreementsInput: StaticStructureSchema = [
  3,
  n0,
  _SAI,
  0,
  [_ca, _f, _so, _mR, _nT],
  [0, () => FilterList, () => Sort, 1, 0],
];
export var SearchAgreementsOutput: StaticStructureSchema = [
  3,
  n0,
  _SAO,
  0,
  [_aVS, _nT],
  [() => AgreementViewSummaryList, 0],
];
export var Selector: StaticStructureSchema = [3, n0, _S, 0, [_t, _val], [0, 0]];
export var Sort: StaticStructureSchema = [3, n0, _So, 0, [_sB, _sO], [0, 0]];
export var SupportTerm: StaticStructureSchema = [3, n0, _ST, 0, [_t, _rP], [0, 0]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_rI, _m],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UsageBasedPricingTerm: StaticStructureSchema = [
  3,
  n0,
  _UBPT,
  0,
  [_t, _cC, _rC],
  [0, 0, () => UsageBasedRateCardList],
];
export var UsageBasedRateCardItem: StaticStructureSchema = [3, n0, _UBRCI, 0, [_rCa], [() => RateCardList]];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_rI, _m, _re, _fi],
  [0, 0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_n, _m], [0, 0]];
export var ValidityTerm: StaticStructureSchema = [3, n0, _VT, 0, [_t, _aD, _aSD, _aED], [0, 0, 4, 4]];
export var __Unit = "unit" as const;

export var MarketplaceAgreementServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "MarketplaceAgreementServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(MarketplaceAgreementServiceException, __MarketplaceAgreementServiceException);

export var AcceptedTermList: StaticListSchema = [1, n0, _ATL, 0, () => AcceptedTerm];
export var AgreementViewSummaryList: StaticListSchema = [1, n0, _AVSL, 0, () => AgreementViewSummary];
export var ConfigurableUpfrontRateCardList: StaticListSchema = [
  1,
  n0,
  _CURCL,
  0,
  () => ConfigurableUpfrontRateCardItem,
];
export var DimensionList: StaticListSchema = [1, n0, _DL, 0, () => Dimension];
export var DocumentList: StaticListSchema = [1, n0, _DLo, 0, () => DocumentItem];
export var FilterList: StaticListSchema = [1, n0, _FL, 0, () => Filter];
export var FilterValueList = 64 | 0;

export var GrantList: StaticListSchema = [1, n0, _GL, 0, () => GrantItem];
export var RateCardList: StaticListSchema = [1, n0, _RCL, 0, () => RateCardItem];
export var Resources: StaticListSchema = [1, n0, _Re, 0, () => Resource];
export var ScheduleList: StaticListSchema = [1, n0, _SL, 0, () => ScheduleItem];
export var UsageBasedRateCardList: StaticListSchema = [1, n0, _UBRCL, 0, () => UsageBasedRateCardItem];
export var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField];
export var AcceptedTerm: StaticStructureSchema = [
  3,
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
  ],
];
export var DescribeAgreement: StaticOperationSchema = [
  9,
  n0,
  _DA,
  0,
  () => DescribeAgreementInput,
  () => DescribeAgreementOutput,
];
export var GetAgreementTerms: StaticOperationSchema = [
  9,
  n0,
  _GAT,
  0,
  () => GetAgreementTermsInput,
  () => GetAgreementTermsOutput,
];
export var SearchAgreements: StaticOperationSchema = [
  9,
  n0,
  _SA,
  0,
  () => SearchAgreementsInput,
  () => SearchAgreementsOutput,
];

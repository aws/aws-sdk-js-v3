const _A = "Acceptor";
const _ADE = "AccessDeniedException";
const _AT = "AcceptedTerm";
const _ATL = "AcceptedTermList";
const _AVS = "AgreementViewSummary";
const _AVSL = "AgreementViewSummaryList";
const _BPT = "ByolPricingTerm";
const _C = "Constraints";
const _CUPT = "ConfigurableUpfrontPricingTerm";
const _CUPTC = "ConfigurableUpfrontPricingTermConfiguration";
const _CURCI = "ConfigurableUpfrontRateCardItem";
const _CURCL = "ConfigurableUpfrontRateCardList";
const _D = "Dimension";
const _DA = "DescribeAgreement";
const _DAI = "DescribeAgreementInput";
const _DAO = "DescribeAgreementOutput";
const _DI = "DocumentItem";
const _DL = "DimensionList";
const _DLo = "DocumentList";
const _EC = "EstimatedCharges";
const _F = "Filter";
const _FL = "FilterList";
const _FTPT = "FreeTrialPricingTerm";
const _FUPT = "FixedUpfrontPricingTerm";
const _GAT = "GetAgreementTerms";
const _GATI = "GetAgreementTermsInput";
const _GATO = "GetAgreementTermsOutput";
const _GI = "GrantItem";
const _GL = "GrantList";
const _ISE = "InternalServerException";
const _LT = "LegalTerm";
const _P = "Proposer";
const _PS = "ProposalSummary";
const _PST = "PaymentScheduleTerm";
const _R = "Resource";
const _RCI = "RateCardItem";
const _RCL = "RateCardList";
const _RNFE = "ResourceNotFoundException";
const _RPT = "RecurringPaymentTerm";
const _RT = "RenewalTerm";
const _RTC = "RenewalTermConfiguration";
const _Re = "Resources";
const _S = "Selector";
const _SA = "SearchAgreements";
const _SAI = "SearchAgreementsInput";
const _SAO = "SearchAgreementsOutput";
const _SI = "ScheduleItem";
const _SL = "ScheduleList";
const _ST = "SupportTerm";
const _So = "Sort";
const _TE = "ThrottlingException";
const _UBPT = "UsageBasedPricingTerm";
const _UBRCI = "UsageBasedRateCardItem";
const _UBRCL = "UsageBasedRateCardList";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _VPT = "VariablePaymentTerm";
const _VPTC = "VariablePaymentTermConfiguration";
const _VT = "ValidityTerm";
const _a = "acceptor";
const _aD = "agreementDuration";
const _aED = "agreementEndDate";
const _aI = "accountId";
const _aIg = "agreementId";
const _aSD = "agreementStartDate";
const _aT = "acceptanceTime";
const _aTc = "acceptedTerms";
const _aTg = "agreementType";
const _aV = "agreementValue";
const _aVS = "agreementViewSummaries";
const _bP = "billingPeriod";
const _bPT = "byolPricingTerm";
const _c = "client";
const _cA = "chargeAmount";
const _cC = "currencyCode";
const _cD = "chargeDate";
const _cUPT = "configurableUpfrontPricingTerm";
const _ca = "catalog";
const _co = "configuration";
const _con = "constraints";
const _d = "dimensions";
const _dK = "dimensionKey";
const _dV = "dimensionValue";
const _do = "documents";
const _du = "duration";
const _e = "error";
const _eAR = "enableAutoRenew";
const _eC = "estimatedCharges";
const _eD = "expirationDuration";
const _eT = "endTime";
const _f = "filters";
const _fTPT = "freeTrialPricingTerm";
const _fUPT = "fixedUpfrontPricingTerm";
const _fi = "fields";
const _g = "grants";
const _hE = "httpError";
const _i = "id";
const _lT = "legalTerm";
const _m = "message";
const _mDS = "multipleDimensionSelection";
const _mQ = "maxQuantity";
const _mR = "maxResults";
const _mTCA = "maxTotalChargeAmount";
const _n = "name";
const _nT = "nextToken";
const _oI = "offerId";
const _oSI = "offerSetId";
const _p = "proposer";
const _pRAS = "paymentRequestApprovalStrategy";
const _pS = "proposalSummary";
const _pST = "paymentScheduleTerm";
const _pr = "price";
const _qC = "quantityConfiguration";
const _r = "resources";
const _rC = "rateCards";
const _rCa = "rateCard";
const _rI = "requestId";
const _rIe = "resourceId";
const _rP = "refundPolicy";
const _rPT = "recurringPaymentTerm";
const _rT = "resourceType";
const _rTe = "renewalTerm";
const _re = "reason";
const _s = "status";
const _sB = "sortBy";
const _sO = "sortOrder";
const _sT = "startTime";
const _sTu = "supportTerm";
const _sV = "selectorValue";
const _sc = "schedule";
const _se = "selector";
const _ser = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.marketplaceagreement";
const _so = "sort";
const _t = "type";
const _u = "url";
const _uBPT = "usageBasedPricingTerm";
const _v = "version";
const _vPT = "variablePaymentTerm";
const _vT = "validityTerm";
const _va = "values";
const _val = "value";
const n0 = "com.amazonaws.marketplaceagreement";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException,
  InternalServerException,
  ResourceNotFoundException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { MarketplaceAgreementServiceException } from "../models/MarketplaceAgreementServiceException";

/* eslint no-var: 0 */
export var Acceptor$: StaticStructureSchema = [3, n0, _A, 0, [_aI], [0]];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_rI, _m], [0, 0]];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var AgreementViewSummary$: StaticStructureSchema = [
  3,
  n0,
  _AVS,
  0,
  [_aIg, _aT, _sT, _eT, _aTg, _a, _p, _pS, _s],
  [0, 4, 4, 4, 0, () => Acceptor$, () => Proposer$, () => ProposalSummary$, 0],
];
export var ByolPricingTerm$: StaticStructureSchema = [3, n0, _BPT, 0, [_t], [0]];
export var ConfigurableUpfrontPricingTerm$: StaticStructureSchema = [
  3,
  n0,
  _CUPT,
  0,
  [_t, _cC, _rC, _co],
  [0, 0, () => ConfigurableUpfrontRateCardList, () => ConfigurableUpfrontPricingTermConfiguration$],
];
export var ConfigurableUpfrontPricingTermConfiguration$: StaticStructureSchema = [
  3,
  n0,
  _CUPTC,
  0,
  [_sV, _d],
  [0, () => DimensionList],
];
export var ConfigurableUpfrontRateCardItem$: StaticStructureSchema = [
  3,
  n0,
  _CURCI,
  0,
  [_se, _con, _rCa],
  [() => Selector$, () => Constraints$, () => RateCardList],
];
export var Constraints$: StaticStructureSchema = [3, n0, _C, 0, [_mDS, _qC], [0, 0]];
export var DescribeAgreementInput$: StaticStructureSchema = [3, n0, _DAI, 0, [_aIg], [0]];
export var DescribeAgreementOutput$: StaticStructureSchema = [
  3,
  n0,
  _DAO,
  0,
  [_aIg, _a, _p, _sT, _eT, _aT, _aTg, _eC, _pS, _s],
  [0, () => Acceptor$, () => Proposer$, 4, 4, 4, 0, () => EstimatedCharges$, () => ProposalSummary$, 0],
];
export var Dimension$: StaticStructureSchema = [3, n0, _D, 0, [_dK, _dV], [0, 1]];
export var DocumentItem$: StaticStructureSchema = [3, n0, _DI, 0, [_t, _u, _v], [0, 0, 0]];
export var EstimatedCharges$: StaticStructureSchema = [3, n0, _EC, 0, [_cC, _aV], [0, 0]];
export var Filter$: StaticStructureSchema = [3, n0, _F, 0, [_n, _va], [0, 64 | 0]];
export var FixedUpfrontPricingTerm$: StaticStructureSchema = [
  3,
  n0,
  _FUPT,
  0,
  [_t, _cC, _du, _pr, _g],
  [0, 0, 0, 0, () => GrantList],
];
export var FreeTrialPricingTerm$: StaticStructureSchema = [3, n0, _FTPT, 0, [_t, _du, _g], [0, 0, () => GrantList]];
export var GetAgreementTermsInput$: StaticStructureSchema = [3, n0, _GATI, 0, [_aIg, _mR, _nT], [0, 1, 0]];
export var GetAgreementTermsOutput$: StaticStructureSchema = [
  3,
  n0,
  _GATO,
  0,
  [_aTc, _nT],
  [() => AcceptedTermList, 0],
];
export var GrantItem$: StaticStructureSchema = [3, n0, _GI, 0, [_dK, _mQ], [0, 1]];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _ser, [_hE]: 500 }, [_rI, _m], [0, 0]];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var LegalTerm$: StaticStructureSchema = [3, n0, _LT, 0, [_t, _do], [0, () => DocumentList]];
export var PaymentScheduleTerm$: StaticStructureSchema = [3, n0, _PST, 0, [_t, _cC, _sc], [0, 0, () => ScheduleList]];
export var ProposalSummary$: StaticStructureSchema = [3, n0, _PS, 0, [_r, _oI, _oSI], [() => Resources, 0, 0]];
export var Proposer$: StaticStructureSchema = [3, n0, _P, 0, [_aI], [0]];
export var RateCardItem$: StaticStructureSchema = [3, n0, _RCI, 0, [_dK, _pr], [0, 0]];
export var RecurringPaymentTerm$: StaticStructureSchema = [3, n0, _RPT, 0, [_t, _cC, _bP, _pr], [0, 0, 0, 0]];
export var RenewalTerm$: StaticStructureSchema = [3, n0, _RT, 0, [_t, _co], [0, () => RenewalTermConfiguration$]];
export var RenewalTermConfiguration$: StaticStructureSchema = [3, n0, _RTC, 0, [_eAR], [2]];
export var Resource$: StaticStructureSchema = [3, n0, _R, 0, [_i, _t], [0, 0]];
export var ResourceNotFoundException$: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_rI, _m, _rIe, _rT],
  [0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ScheduleItem$: StaticStructureSchema = [3, n0, _SI, 0, [_cD, _cA], [4, 0]];
export var SearchAgreementsInput$: StaticStructureSchema = [
  3,
  n0,
  _SAI,
  0,
  [_ca, _f, _so, _mR, _nT],
  [0, () => FilterList, () => Sort$, 1, 0],
];
export var SearchAgreementsOutput$: StaticStructureSchema = [
  3,
  n0,
  _SAO,
  0,
  [_aVS, _nT],
  [() => AgreementViewSummaryList, 0],
];
export var Selector$: StaticStructureSchema = [3, n0, _S, 0, [_t, _val], [0, 0]];
export var Sort$: StaticStructureSchema = [3, n0, _So, 0, [_sB, _sO], [0, 0]];
export var SupportTerm$: StaticStructureSchema = [3, n0, _ST, 0, [_t, _rP], [0, 0]];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_rI, _m], [0, 0]];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var UsageBasedPricingTerm$: StaticStructureSchema = [
  3,
  n0,
  _UBPT,
  0,
  [_t, _cC, _rC],
  [0, 0, () => UsageBasedRateCardList],
];
export var UsageBasedRateCardItem$: StaticStructureSchema = [3, n0, _UBRCI, 0, [_rCa], [() => RateCardList]];
export var ValidationException$: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  { [_e]: _c, [_hE]: 400 },
  [_rI, _m, _re, _fi],
  [0, 0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var ValidationExceptionField$: StaticStructureSchema = [3, n0, _VEF, 0, [_n, _m], [0, 0]];
export var ValidityTerm$: StaticStructureSchema = [3, n0, _VT, 0, [_t, _aD, _aSD, _aED], [0, 0, 4, 4]];
export var VariablePaymentTerm$: StaticStructureSchema = [
  3,
  n0,
  _VPT,
  0,
  [_t, _cC, _mTCA, _co],
  [0, 0, 0, () => VariablePaymentTermConfiguration$],
];
export var VariablePaymentTermConfiguration$: StaticStructureSchema = [3, n0, _VPTC, 0, [_pRAS, _eD], [0, 0]];
export var MarketplaceAgreementServiceException$: StaticErrorSchema = [
  -3,
  _sm,
  "MarketplaceAgreementServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(MarketplaceAgreementServiceException$, MarketplaceAgreementServiceException);
var AcceptedTermList: StaticListSchema = [1, n0, _ATL, 0, () => AcceptedTerm$];
var AgreementViewSummaryList: StaticListSchema = [1, n0, _AVSL, 0, () => AgreementViewSummary$];
var ConfigurableUpfrontRateCardList: StaticListSchema = [1, n0, _CURCL, 0, () => ConfigurableUpfrontRateCardItem$];
var DimensionList: StaticListSchema = [1, n0, _DL, 0, () => Dimension$];
var DocumentList: StaticListSchema = [1, n0, _DLo, 0, () => DocumentItem$];
var FilterList: StaticListSchema = [1, n0, _FL, 0, () => Filter$];
var FilterValueList = 64 | 0;
var GrantList: StaticListSchema = [1, n0, _GL, 0, () => GrantItem$];
var RateCardList: StaticListSchema = [1, n0, _RCL, 0, () => RateCardItem$];
var Resources: StaticListSchema = [1, n0, _Re, 0, () => Resource$];
var ScheduleList: StaticListSchema = [1, n0, _SL, 0, () => ScheduleItem$];
var UsageBasedRateCardList: StaticListSchema = [1, n0, _UBRCL, 0, () => UsageBasedRateCardItem$];
var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField$];
export var AcceptedTerm$: StaticStructureSchema = [
  3,
  n0,
  _AT,
  0,
  [_lT, _sTu, _rTe, _uBPT, _cUPT, _bPT, _rPT, _vT, _pST, _fTPT, _fUPT, _vPT],
  [
    () => LegalTerm$,
    () => SupportTerm$,
    () => RenewalTerm$,
    () => UsageBasedPricingTerm$,
    () => ConfigurableUpfrontPricingTerm$,
    () => ByolPricingTerm$,
    () => RecurringPaymentTerm$,
    () => ValidityTerm$,
    () => PaymentScheduleTerm$,
    () => FreeTrialPricingTerm$,
    () => FixedUpfrontPricingTerm$,
    () => VariablePaymentTerm$,
  ],
];
export var DescribeAgreement$: StaticOperationSchema = [
  9,
  n0,
  _DA,
  0,
  () => DescribeAgreementInput$,
  () => DescribeAgreementOutput$,
];
export var GetAgreementTerms$: StaticOperationSchema = [
  9,
  n0,
  _GAT,
  0,
  () => GetAgreementTermsInput$,
  () => GetAgreementTermsOutput$,
];
export var SearchAgreements$: StaticOperationSchema = [
  9,
  n0,
  _SA,
  0,
  () => SearchAgreementsInput$,
  () => SearchAgreementsOutput$,
];

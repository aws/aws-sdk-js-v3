const _CSP = "CreateSavingsPlan";
const _CSPR = "CreateSavingsPlanRequest";
const _CSPRr = "CreateSavingsPlanResponse";
const _DQSP = "DeleteQueuedSavingsPlan";
const _DQSPR = "DeleteQueuedSavingsPlanRequest";
const _DQSPRe = "DeleteQueuedSavingsPlanResponse";
const _DSP = "DescribeSavingsPlans";
const _DSPO = "DescribeSavingsPlansOfferings";
const _DSPOR = "DescribeSavingsPlansOfferingsRequest";
const _DSPORR = "DescribeSavingsPlansOfferingRatesRequest";
const _DSPORRe = "DescribeSavingsPlansOfferingRatesResponse";
const _DSPORe = "DescribeSavingsPlansOfferingsResponse";
const _DSPORes = "DescribeSavingsPlansOfferingRates";
const _DSPR = "DescribeSavingsPlansRequest";
const _DSPRR = "DescribeSavingsPlanRatesRequest";
const _DSPRRe = "DescribeSavingsPlanRatesResponse";
const _DSPRe = "DescribeSavingsPlansResponse";
const _DSPRes = "DescribeSavingsPlanRates";
const _ISE = "InternalServerException";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _PSPO = "ParentSavingsPlanOffering";
const _RNFE = "ResourceNotFoundException";
const _RSP = "ReturnSavingsPlan";
const _RSPR = "ReturnSavingsPlanRequest";
const _RSPRe = "ReturnSavingsPlanResponse";
const _SP = "SavingsPlan";
const _SPF = "SavingsPlanFilter";
const _SPFL = "SavingsPlanFilterList";
const _SPL = "SavingsPlanList";
const _SPO = "SavingsPlanOffering";
const _SPOFE = "SavingsPlanOfferingFilterElement";
const _SPOFL = "SavingsPlanOfferingFiltersList";
const _SPOL = "SavingsPlanOfferingsList";
const _SPOP = "SavingsPlanOfferingProperty";
const _SPOPL = "SavingsPlanOfferingPropertyList";
const _SPOR = "SavingsPlanOfferingRate";
const _SPORFE = "SavingsPlanOfferingRateFilterElement";
const _SPORFL = "SavingsPlanOfferingRateFiltersList";
const _SPORL = "SavingsPlanOfferingRatesList";
const _SPORP = "SavingsPlanOfferingRateProperty";
const _SPORPL = "SavingsPlanOfferingRatePropertyList";
const _SPR = "SavingsPlanRate";
const _SPRF = "SavingsPlanRateFilter";
const _SPRFL = "SavingsPlanRateFilterList";
const _SPRL = "SavingsPlanRateList";
const _SPRP = "SavingsPlanRateProperty";
const _SPRPL = "SavingsPlanRatePropertyList";
const _SQEE = "ServiceQuotaExceededException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _VE = "ValidationException";
const _aQE = "awsQueryError";
const _c = "commitment";
const _cT = "clientToken";
const _cl = "client";
const _cu = "currencies";
const _cur = "currency";
const _d = "durations";
const _dS = "durationSeconds";
const _de = "descriptions";
const _des = "description";
const _e = "error";
const _eIF = "ec2InstanceFamily";
const _en = "end";
const _f = "filters";
const _h = "http";
const _hE = "httpError";
const _m = "message";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _o = "operations";
const _oI = "offeringIds";
const _oIf = "offeringId";
const _op = "operation";
const _p = "products";
const _pD = "planDescription";
const _pO = "paymentOptions";
const _pOa = "paymentOption";
const _pT = "purchaseTime";
const _pTl = "planTypes";
const _pTla = "planType";
const _pTr = "productType";
const _pTro = "productTypes";
const _pr = "properties";
const _r = "region";
const _rA = "resourceArn";
const _rPA = "recurringPaymentAmount";
const _rU = "returnableUntil";
const _ra = "rate";
const _s = "states";
const _sC = "serviceCodes";
const _sCe = "serviceCode";
const _sP = "savingsPlans";
const _sPA = "savingsPlanArns";
const _sPAa = "savingsPlanArn";
const _sPI = "savingsPlanId";
const _sPIa = "savingsPlanIds";
const _sPO = "savingsPlanOffering";
const _sPOI = "savingsPlanOfferingId";
const _sPOIa = "savingsPlanOfferingIds";
const _sPPO = "savingsPlanPaymentOptions";
const _sPT = "savingsPlanTypes";
const _sPTa = "savingsPlanType";
const _sR = "searchResults";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.savingsplans";
const _st = "start";
const _sta = "state";
const _t = "tags";
const _tDIS = "termDurationInSeconds";
const _tK = "tagKeys";
const _u = "unit";
const _uPA = "upfrontPaymentAmount";
const _uT = "usageTypes";
const _uTs = "usageType";
const _v = "values";
const _va = "value";
const n0 = "com.amazonaws.savingsplans";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { SavingsplansServiceException as __SavingsplansServiceException } from "../models/SavingsplansServiceException";

/* eslint no-var: 0 */
export var CreateSavingsPlanRequest: StaticStructureSchema = [
  3,
  n0,
  _CSPR,
  0,
  [_sPOI, _c, _uPA, _pT, _cT, _t],
  [0, 0, 0, 4, [0, 4], 128 | 0],
];
export var CreateSavingsPlanResponse: StaticStructureSchema = [3, n0, _CSPRr, 0, [_sPI], [0]];
export var DeleteQueuedSavingsPlanRequest: StaticStructureSchema = [3, n0, _DQSPR, 0, [_sPI], [0]];
export var DeleteQueuedSavingsPlanResponse: StaticStructureSchema = [3, n0, _DQSPRe, 0, [], []];
export var DescribeSavingsPlanRatesRequest: StaticStructureSchema = [
  3,
  n0,
  _DSPRR,
  0,
  [_sPI, _f, _nT, _mR],
  [0, () => SavingsPlanRateFilterList, 0, 1],
];
export var DescribeSavingsPlanRatesResponse: StaticStructureSchema = [
  3,
  n0,
  _DSPRRe,
  0,
  [_sPI, _sR, _nT],
  [0, () => SavingsPlanRateList, 0],
];
export var DescribeSavingsPlansOfferingRatesRequest: StaticStructureSchema = [
  3,
  n0,
  _DSPORR,
  0,
  [_sPOIa, _sPPO, _sPT, _p, _sC, _uT, _o, _f, _nT, _mR],
  [64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, () => SavingsPlanOfferingRateFiltersList, 0, 1],
];
export var DescribeSavingsPlansOfferingRatesResponse: StaticStructureSchema = [
  3,
  n0,
  _DSPORRe,
  0,
  [_sR, _nT],
  [() => SavingsPlanOfferingRatesList, 0],
];
export var DescribeSavingsPlansOfferingsRequest: StaticStructureSchema = [
  3,
  n0,
  _DSPOR,
  0,
  [_oI, _pO, _pTr, _pTl, _d, _cu, _de, _sC, _uT, _o, _f, _nT, _mR],
  [
    64 | 0,
    64 | 0,
    0,
    64 | 0,
    64 | 1,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    () => SavingsPlanOfferingFiltersList,
    0,
    1,
  ],
];
export var DescribeSavingsPlansOfferingsResponse: StaticStructureSchema = [
  3,
  n0,
  _DSPORe,
  0,
  [_sR, _nT],
  [() => SavingsPlanOfferingsList, 0],
];
export var DescribeSavingsPlansRequest: StaticStructureSchema = [
  3,
  n0,
  _DSPR,
  0,
  [_sPA, _sPIa, _nT, _mR, _s, _f],
  [64 | 0, 64 | 0, 0, 1, 64 | 0, () => SavingsPlanFilterList],
];
export var DescribeSavingsPlansResponse: StaticStructureSchema = [
  3,
  n0,
  _DSPRe,
  0,
  [_sP, _nT],
  [() => SavingsPlanList, 0],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  { [_e]: _se, [_hE]: 500, [_aQE]: [`InternalServerException`, 500] },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rA], [0]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_t], [128 | 0]];
export var ParentSavingsPlanOffering: StaticStructureSchema = [
  3,
  n0,
  _PSPO,
  0,
  [_oIf, _pOa, _pTla, _dS, _cur, _pD],
  [0, 0, 0, 1, 0, 0],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  { [_e]: _cl, [_hE]: 404, [_aQE]: [`ResourceNotFoundException`, 404] },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);
export var ReturnSavingsPlanRequest: StaticStructureSchema = [3, n0, _RSPR, 0, [_sPI, _cT], [0, [0, 4]]];
export var ReturnSavingsPlanResponse: StaticStructureSchema = [3, n0, _RSPRe, 0, [_sPI], [0]];
export var SavingsPlan: StaticStructureSchema = [
  3,
  n0,
  _SP,
  0,
  [_oIf, _sPI, _sPAa, _des, _st, _en, _sta, _r, _eIF, _sPTa, _pOa, _pTro, _cur, _c, _uPA, _rPA, _tDIS, _t, _rU],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0, 0, 0, 0, 0, 1, 128 | 0, 0],
];
export var SavingsPlanFilter: StaticStructureSchema = [3, n0, _SPF, 0, [_n, _v], [0, 64 | 0]];
export var SavingsPlanOffering: StaticStructureSchema = [
  3,
  n0,
  _SPO,
  0,
  [_oIf, _pTro, _pTla, _des, _pOa, _dS, _cur, _sCe, _uTs, _op, _pr],
  [0, 64 | 0, 0, 0, 0, 1, 0, 0, 0, 0, () => SavingsPlanOfferingPropertyList],
];
export var SavingsPlanOfferingFilterElement: StaticStructureSchema = [3, n0, _SPOFE, 0, [_n, _v], [0, 64 | 0]];
export var SavingsPlanOfferingProperty: StaticStructureSchema = [3, n0, _SPOP, 0, [_n, _va], [0, 0]];
export var SavingsPlanOfferingRate: StaticStructureSchema = [
  3,
  n0,
  _SPOR,
  0,
  [_sPO, _ra, _u, _pTr, _sCe, _uTs, _op, _pr],
  [() => ParentSavingsPlanOffering, 0, 0, 0, 0, 0, 0, () => SavingsPlanOfferingRatePropertyList],
];
export var SavingsPlanOfferingRateFilterElement: StaticStructureSchema = [3, n0, _SPORFE, 0, [_n, _v], [0, 64 | 0]];
export var SavingsPlanOfferingRateProperty: StaticStructureSchema = [3, n0, _SPORP, 0, [_n, _va], [0, 0]];
export var SavingsPlanRate: StaticStructureSchema = [
  3,
  n0,
  _SPR,
  0,
  [_ra, _cur, _u, _pTr, _sCe, _uTs, _op, _pr],
  [0, 0, 0, 0, 0, 0, 0, () => SavingsPlanRatePropertyList],
];
export var SavingsPlanRateFilter: StaticStructureSchema = [3, n0, _SPRF, 0, [_n, _v], [0, 64 | 0]];
export var SavingsPlanRateProperty: StaticStructureSchema = [3, n0, _SPRP, 0, [_n, _va], [0, 0]];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  { [_e]: _cl, [_hE]: 402, [_aQE]: [`ServiceQuotaExceededException`, 402] },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_rA, _t], [0, 128 | 0]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_rA, _tK], [0, 64 | 0]];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  { [_e]: _cl, [_hE]: 400, [_aQE]: [`ValidationException`, 400] },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);
export var SavingsplansServiceException: StaticErrorSchema = [-3, _sm, "SavingsplansServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(SavingsplansServiceException, __SavingsplansServiceException);
export var CurrencyList = 64 | 0;
export var DurationsList = 64 | 1;
export var FilterValuesList = 64 | 0;
export var ListOfStrings = 64 | 0;
export var SavingsPlanArnList = 64 | 0;
export var SavingsPlanDescriptionsList = 64 | 0;
export var SavingsPlanFilterList: StaticListSchema = [1, n0, _SPFL, 0, () => SavingsPlanFilter];
export var SavingsPlanIdList = 64 | 0;
export var SavingsPlanList: StaticListSchema = [1, n0, _SPL, 0, () => SavingsPlan];
export var SavingsPlanOfferingFiltersList: StaticListSchema = [
  1,
  n0,
  _SPOFL,
  0,
  () => SavingsPlanOfferingFilterElement,
];
export var SavingsPlanOfferingPropertyList: StaticListSchema = [1, n0, _SPOPL, 0, () => SavingsPlanOfferingProperty];
export var SavingsPlanOfferingRateFiltersList: StaticListSchema = [
  1,
  n0,
  _SPORFL,
  0,
  () => SavingsPlanOfferingRateFilterElement,
];
export var SavingsPlanOfferingRatePropertyList: StaticListSchema = [
  1,
  n0,
  _SPORPL,
  0,
  () => SavingsPlanOfferingRateProperty,
];
export var SavingsPlanOfferingRatesList: StaticListSchema = [1, n0, _SPORL, 0, () => SavingsPlanOfferingRate];
export var SavingsPlanOfferingsList: StaticListSchema = [1, n0, _SPOL, 0, () => SavingsPlanOffering];
export var SavingsPlanOperationList = 64 | 0;
export var SavingsPlanPaymentOptionList = 64 | 0;
export var SavingsPlanProductTypeList = 64 | 0;
export var SavingsPlanRateFilterList: StaticListSchema = [1, n0, _SPRFL, 0, () => SavingsPlanRateFilter];
export var SavingsPlanRateList: StaticListSchema = [1, n0, _SPRL, 0, () => SavingsPlanRate];
export var SavingsPlanRateOperationList = 64 | 0;
export var SavingsPlanRatePropertyList: StaticListSchema = [1, n0, _SPRPL, 0, () => SavingsPlanRateProperty];
export var SavingsPlanRateServiceCodeList = 64 | 0;
export var SavingsPlanRateUsageTypeList = 64 | 0;
export var SavingsPlanServiceCodeList = 64 | 0;
export var SavingsPlanStateList = 64 | 0;
export var SavingsPlanTypeList = 64 | 0;
export var SavingsPlanUsageTypeList = 64 | 0;
export var TagKeyList = 64 | 0;
export var UUIDs = 64 | 0;
export var TagMap = 128 | 0;
export var CreateSavingsPlan: StaticOperationSchema = [
  9,
  n0,
  _CSP,
  { [_h]: ["POST", "/CreateSavingsPlan", 200] },
  () => CreateSavingsPlanRequest,
  () => CreateSavingsPlanResponse,
];
export var DeleteQueuedSavingsPlan: StaticOperationSchema = [
  9,
  n0,
  _DQSP,
  { [_h]: ["POST", "/DeleteQueuedSavingsPlan", 200] },
  () => DeleteQueuedSavingsPlanRequest,
  () => DeleteQueuedSavingsPlanResponse,
];
export var DescribeSavingsPlanRates: StaticOperationSchema = [
  9,
  n0,
  _DSPRes,
  { [_h]: ["POST", "/DescribeSavingsPlanRates", 200] },
  () => DescribeSavingsPlanRatesRequest,
  () => DescribeSavingsPlanRatesResponse,
];
export var DescribeSavingsPlans: StaticOperationSchema = [
  9,
  n0,
  _DSP,
  { [_h]: ["POST", "/DescribeSavingsPlans", 200] },
  () => DescribeSavingsPlansRequest,
  () => DescribeSavingsPlansResponse,
];
export var DescribeSavingsPlansOfferingRates: StaticOperationSchema = [
  9,
  n0,
  _DSPORes,
  { [_h]: ["POST", "/DescribeSavingsPlansOfferingRates", 200] },
  () => DescribeSavingsPlansOfferingRatesRequest,
  () => DescribeSavingsPlansOfferingRatesResponse,
];
export var DescribeSavingsPlansOfferings: StaticOperationSchema = [
  9,
  n0,
  _DSPO,
  { [_h]: ["POST", "/DescribeSavingsPlansOfferings", 200] },
  () => DescribeSavingsPlansOfferingsRequest,
  () => DescribeSavingsPlansOfferingsResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["POST", "/ListTagsForResource", 200] },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var ReturnSavingsPlan: StaticOperationSchema = [
  9,
  n0,
  _RSP,
  { [_h]: ["POST", "/ReturnSavingsPlan", 200] },
  () => ReturnSavingsPlanRequest,
  () => ReturnSavingsPlanResponse,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/TagResource", 200] },
  () => TagResourceRequest,
  () => TagResourceResponse,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["POST", "/UntagResource", 200] },
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];

// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _aQE,
  _c,
  _cl,
  _CSP,
  _CSPR,
  _CSPRr,
  _cT,
  _cu,
  _cur,
  _d,
  _de,
  _des,
  _DQSP,
  _DQSPR,
  _DQSPRe,
  _dS,
  _DSP,
  _DSPO,
  _DSPOR,
  _DSPORe,
  _DSPORes,
  _DSPORR,
  _DSPORRe,
  _DSPR,
  _DSPRe,
  _DSPRes,
  _DSPRR,
  _DSPRRe,
  _e,
  _eIF,
  _en,
  _f,
  _h,
  _hE,
  _ISE,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _mR,
  _n,
  _nT,
  _o,
  _oI,
  _oIf,
  _op,
  _p,
  _pD,
  _pO,
  _pOa,
  _pr,
  _PSPO,
  _pT,
  _pTl,
  _pTla,
  _pTr,
  _pTro,
  _r,
  _rA,
  _ra,
  _RNFE,
  _rPA,
  _RSP,
  _RSPR,
  _RSPRe,
  _rU,
  _s,
  _sC,
  _sCe,
  _se,
  _SP,
  _sP,
  _sPA,
  _sPAa,
  _SPF,
  _SPFL,
  _sPI,
  _sPIa,
  _SPL,
  _SPO,
  _sPO,
  _SPOFE,
  _SPOFL,
  _sPOI,
  _sPOIa,
  _SPOL,
  _SPOP,
  _SPOPL,
  _SPOR,
  _SPORFE,
  _SPORFL,
  _SPORL,
  _SPORP,
  _SPORPL,
  _sPPO,
  _SPR,
  _SPRF,
  _SPRFL,
  _SPRL,
  _SPRP,
  _SPRPL,
  _sPT,
  _sPTa,
  _SQEE,
  _sR,
  _st,
  _sta,
  _t,
  _tDIS,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _u,
  _uPA,
  _UR,
  _URR,
  _URRn,
  _uT,
  _uTs,
  _v,
  _va,
  _VE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSavingsPlanRequest = struct(
  n0,
  _CSPR,
  0,
  [_sPOI, _c, _uPA, _pT, _cT, _t],
  [0, 0, 0, 4, [0, 4], 128 | 0]
);
export var CreateSavingsPlanResponse = struct(n0, _CSPRr, 0, [_sPI], [0]);
export var DeleteQueuedSavingsPlanRequest = struct(n0, _DQSPR, 0, [_sPI], [0]);
export var DeleteQueuedSavingsPlanResponse = struct(n0, _DQSPRe, 0, [], []);
export var DescribeSavingsPlanRatesRequest = struct(
  n0,
  _DSPRR,
  0,
  [_sPI, _f, _nT, _mR],
  [0, () => SavingsPlanRateFilterList, 0, 1]
);
export var DescribeSavingsPlanRatesResponse = struct(
  n0,
  _DSPRRe,
  0,
  [_sPI, _sR, _nT],
  [0, () => SavingsPlanRateList, 0]
);
export var DescribeSavingsPlansOfferingRatesRequest = struct(
  n0,
  _DSPORR,
  0,
  [_sPOIa, _sPPO, _sPT, _p, _sC, _uT, _o, _f, _nT, _mR],
  [64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, () => SavingsPlanOfferingRateFiltersList, 0, 1]
);
export var DescribeSavingsPlansOfferingRatesResponse = struct(
  n0,
  _DSPORRe,
  0,
  [_sR, _nT],
  [() => SavingsPlanOfferingRatesList, 0]
);
export var DescribeSavingsPlansOfferingsRequest = struct(
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
  ]
);
export var DescribeSavingsPlansOfferingsResponse = struct(
  n0,
  _DSPORe,
  0,
  [_sR, _nT],
  [() => SavingsPlanOfferingsList, 0]
);
export var DescribeSavingsPlansRequest = struct(
  n0,
  _DSPR,
  0,
  [_sPA, _sPIa, _nT, _mR, _s, _f],
  [64 | 0, 64 | 0, 0, 1, 64 | 0, () => SavingsPlanFilterList]
);
export var DescribeSavingsPlansResponse = struct(n0, _DSPRe, 0, [_sP, _nT], [() => SavingsPlanList, 0]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
    [_aQE]: [`InternalServerException`, 500],
  },
  [_m],
  [0],

  __InternalServerException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [128 | 0]);
export var ParentSavingsPlanOffering = struct(n0, _PSPO, 0, [_oIf, _pOa, _pTla, _dS, _cur, _pD], [0, 0, 0, 1, 0, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _cl,
    [_hE]: 404,
    [_aQE]: [`ResourceNotFoundException`, 404],
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var ReturnSavingsPlanRequest = struct(n0, _RSPR, 0, [_sPI, _cT], [0, [0, 4]]);
export var ReturnSavingsPlanResponse = struct(n0, _RSPRe, 0, [_sPI], [0]);
export var SavingsPlan = struct(
  n0,
  _SP,
  0,
  [_oIf, _sPI, _sPAa, _des, _st, _en, _sta, _r, _eIF, _sPTa, _pOa, _pTro, _cur, _c, _uPA, _rPA, _tDIS, _t, _rU],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0, 0, 0, 0, 0, 1, 128 | 0, 0]
);
export var SavingsPlanFilter = struct(n0, _SPF, 0, [_n, _v], [0, 64 | 0]);
export var SavingsPlanOffering = struct(
  n0,
  _SPO,
  0,
  [_oIf, _pTro, _pTla, _des, _pOa, _dS, _cur, _sCe, _uTs, _op, _pr],
  [0, 64 | 0, 0, 0, 0, 1, 0, 0, 0, 0, () => SavingsPlanOfferingPropertyList]
);
export var SavingsPlanOfferingFilterElement = struct(n0, _SPOFE, 0, [_n, _v], [0, 64 | 0]);
export var SavingsPlanOfferingProperty = struct(n0, _SPOP, 0, [_n, _va], [0, 0]);
export var SavingsPlanOfferingRate = struct(
  n0,
  _SPOR,
  0,
  [_sPO, _ra, _u, _pTr, _sCe, _uTs, _op, _pr],
  [() => ParentSavingsPlanOffering, 0, 0, 0, 0, 0, 0, () => SavingsPlanOfferingRatePropertyList]
);
export var SavingsPlanOfferingRateFilterElement = struct(n0, _SPORFE, 0, [_n, _v], [0, 64 | 0]);
export var SavingsPlanOfferingRateProperty = struct(n0, _SPORP, 0, [_n, _va], [0, 0]);
export var SavingsPlanRate = struct(
  n0,
  _SPR,
  0,
  [_ra, _cur, _u, _pTr, _sCe, _uTs, _op, _pr],
  [0, 0, 0, 0, 0, 0, 0, () => SavingsPlanRatePropertyList]
);
export var SavingsPlanRateFilter = struct(n0, _SPRF, 0, [_n, _v], [0, 64 | 0]);
export var SavingsPlanRateProperty = struct(n0, _SPRP, 0, [_n, _va], [0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _cl,
    [_hE]: 402,
    [_aQE]: [`ServiceQuotaExceededException`, 402],
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _t], [0, 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rA, _tK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _cl,
    [_hE]: 400,
    [_aQE]: [`ValidationException`, 400],
  },
  [_m],
  [0],

  __ValidationException
);
export var Unit = "unit" as const;

export var CurrencyList = 64 | 0;

export var DurationsList = 64 | 1;

export var FilterValuesList = 64 | 0;

export var ListOfStrings = 64 | 0;

export var SavingsPlanArnList = 64 | 0;

export var SavingsPlanDescriptionsList = 64 | 0;

export var SavingsPlanFilterList = list(n0, _SPFL, 0, () => SavingsPlanFilter);
export var SavingsPlanIdList = 64 | 0;

export var SavingsPlanList = list(n0, _SPL, 0, () => SavingsPlan);
export var SavingsPlanOfferingFiltersList = list(n0, _SPOFL, 0, () => SavingsPlanOfferingFilterElement);
export var SavingsPlanOfferingPropertyList = list(n0, _SPOPL, 0, () => SavingsPlanOfferingProperty);
export var SavingsPlanOfferingRateFiltersList = list(n0, _SPORFL, 0, () => SavingsPlanOfferingRateFilterElement);
export var SavingsPlanOfferingRatePropertyList = list(n0, _SPORPL, 0, () => SavingsPlanOfferingRateProperty);
export var SavingsPlanOfferingRatesList = list(n0, _SPORL, 0, () => SavingsPlanOfferingRate);
export var SavingsPlanOfferingsList = list(n0, _SPOL, 0, () => SavingsPlanOffering);
export var SavingsPlanOperationList = 64 | 0;

export var SavingsPlanPaymentOptionList = 64 | 0;

export var SavingsPlanProductTypeList = 64 | 0;

export var SavingsPlanRateFilterList = list(n0, _SPRFL, 0, () => SavingsPlanRateFilter);
export var SavingsPlanRateList = list(n0, _SPRL, 0, () => SavingsPlanRate);
export var SavingsPlanRateOperationList = 64 | 0;

export var SavingsPlanRatePropertyList = list(n0, _SPRPL, 0, () => SavingsPlanRateProperty);
export var SavingsPlanRateServiceCodeList = 64 | 0;

export var SavingsPlanRateUsageTypeList = 64 | 0;

export var SavingsPlanServiceCodeList = 64 | 0;

export var SavingsPlanStateList = 64 | 0;

export var SavingsPlanTypeList = 64 | 0;

export var SavingsPlanUsageTypeList = 64 | 0;

export var TagKeyList = 64 | 0;

export var UUIDs = 64 | 0;

export var TagMap = 128 | 0;

export var CreateSavingsPlan = op(
  n0,
  _CSP,
  {
    [_h]: ["POST", "/CreateSavingsPlan", 200],
  },
  () => CreateSavingsPlanRequest,
  () => CreateSavingsPlanResponse
);
export var DeleteQueuedSavingsPlan = op(
  n0,
  _DQSP,
  {
    [_h]: ["POST", "/DeleteQueuedSavingsPlan", 200],
  },
  () => DeleteQueuedSavingsPlanRequest,
  () => DeleteQueuedSavingsPlanResponse
);
export var DescribeSavingsPlanRates = op(
  n0,
  _DSPRes,
  {
    [_h]: ["POST", "/DescribeSavingsPlanRates", 200],
  },
  () => DescribeSavingsPlanRatesRequest,
  () => DescribeSavingsPlanRatesResponse
);
export var DescribeSavingsPlans = op(
  n0,
  _DSP,
  {
    [_h]: ["POST", "/DescribeSavingsPlans", 200],
  },
  () => DescribeSavingsPlansRequest,
  () => DescribeSavingsPlansResponse
);
export var DescribeSavingsPlansOfferingRates = op(
  n0,
  _DSPORes,
  {
    [_h]: ["POST", "/DescribeSavingsPlansOfferingRates", 200],
  },
  () => DescribeSavingsPlansOfferingRatesRequest,
  () => DescribeSavingsPlansOfferingRatesResponse
);
export var DescribeSavingsPlansOfferings = op(
  n0,
  _DSPO,
  {
    [_h]: ["POST", "/DescribeSavingsPlansOfferings", 200],
  },
  () => DescribeSavingsPlansOfferingsRequest,
  () => DescribeSavingsPlansOfferingsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["POST", "/ListTagsForResource", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var ReturnSavingsPlan = op(
  n0,
  _RSP,
  {
    [_h]: ["POST", "/ReturnSavingsPlan", 200],
  },
  () => ReturnSavingsPlanRequest,
  () => ReturnSavingsPlanResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/TagResource", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/UntagResource", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);

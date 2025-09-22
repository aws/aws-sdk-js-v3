// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _A,
  _AB,
  _Ac,
  _ADE,
  _AI,
  _AIc,
  _AL,
  _ALd,
  _ALdd,
  _AO,
  _aQE,
  _B,
  _BCA,
  _BGIP,
  _BGIPR,
  _BGIPRa,
  _BP,
  _C,
  _c,
  _CC,
  _CCo,
  _CED,
  _CIU,
  _CIUR,
  _CIURr,
  _CN,
  _D,
  _DB,
  _DBA,
  _DBAL,
  _DD,
  _De,
  _DI,
  _DIU,
  _DIUR,
  _DIURe,
  _DOC,
  _E,
  _e,
  _ED,
  _F,
  _FB,
  _FBA,
  _FBAL,
  _Fi,
  _Fil,
  _fL,
  _GIU,
  _GIUR,
  _GIURe,
  _hE,
  _hH,
  _I,
  _ICA,
  _ID,
  _IE,
  _II,
  _IP,
  _IR,
  _IRn,
  _IS,
  _ISE,
  _ISF,
  _ISn,
  _ISS,
  _IT,
  _IU,
  _IUA,
  _IUn,
  _IUR,
  _K,
  _LA,
  _LIS,
  _LISR,
  _LISRi,
  _LIU,
  _LIUR,
  _LIURi,
  _LM,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _m,
  _MR,
  _N,
  _n,
  _Na,
  _NT,
  _OII,
  _P,
  _PC,
  _PCA,
  _PL,
  _PON,
  _R,
  _r,
  _RA,
  _Ra,
  _RAe,
  _RAes,
  _rAS,
  _RE,
  _RN,
  _rN,
  _RNFE,
  _RT,
  _RTe,
  _RTes,
  _RTK,
  _RTL,
  _S,
  _s,
  _SBSWS,
  _SCC,
  _SD,
  _SOR,
  _SQEE,
  _STA,
  _T,
  _TA,
  _TABT,
  _TB,
  _TBA,
  _TBAL,
  _TCA,
  _TCC,
  _TE,
  _TI,
  _TID,
  _TR,
  _TRN,
  _TRR,
  _TRRa,
  _UIU,
  _UIUR,
  _UIURp,
  _UR,
  _URR,
  _URRn,
  _V,
  _VE,
  _VEF,
  _VEFL,
  _Y,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveBasicStringWithoutSpace = sim(n0, _SBSWS, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`InvoicingAccessDenied`, 403],
  },
  [_m, _rN],
  [0, 0],

  __AccessDeniedException
);
export var AmountBreakdown = struct(
  n0,
  _AB,
  0,
  [_STA, _D, _T, _F],
  [0, () => DiscountsBreakdown, () => TaxesBreakdown, () => FeesBreakdown]
);
export var BatchGetInvoiceProfileRequest = struct(n0, _BGIPR, 0, [_AI], [64 | 0]);
export var BatchGetInvoiceProfileResponse = struct(n0, _BGIPRa, 0, [_P], [[() => ProfileList, 0]]);
export var BillingPeriod = struct(n0, _BP, 0, [_M, _Y], [1, 1]);
export var CreateInvoiceUnitRequest = struct(
  n0,
  _CIUR,
  0,
  [_N, _IR, _De, _TID, _R, _RT],
  [0, 0, 0, 2, () => InvoiceUnitRule, () => ResourceTagList]
);
export var CreateInvoiceUnitResponse = struct(n0, _CIURr, 0, [_IUA], [0]);
export var CurrencyExchangeDetails = struct(n0, _CED, 0, [_SCC, _TCC, _Ra], [0, 0, 0]);
export var DateInterval = struct(n0, _DI, 0, [_SD, _ED], [4, 4]);
export var DeleteInvoiceUnitRequest = struct(n0, _DIUR, 0, [_IUA], [0]);
export var DeleteInvoiceUnitResponse = struct(n0, _DIURe, 0, [_IUA], [0]);
export var DiscountsBreakdown = struct(n0, _DB, 0, [_B, _TA], [() => DiscountsBreakdownAmountList, 0]);
export var DiscountsBreakdownAmount = struct(n0, _DBA, 0, [_De, _A, _Ra], [0, 0, 0]);
export var Entity = struct(n0, _E, 0, [_IE], [0]);
export var FeesBreakdown = struct(n0, _FB, 0, [_B, _TA], [() => FeesBreakdownAmountList, 0]);
export var FeesBreakdownAmount = struct(n0, _FBA, 0, [_De, _A, _Ra], [0, 0, 0]);
export var Filters = struct(n0, _Fi, 0, [_Na, _IRn, _Ac], [64 | 0, 64 | 0, 64 | 0]);
export var GetInvoiceUnitRequest = struct(n0, _GIUR, 0, [_IUA, _AO], [0, 4]);
export var GetInvoiceUnitResponse = struct(
  n0,
  _GIURe,
  0,
  [_IUA, _IR, _N, _De, _TID, _R, _LM],
  [0, 0, 0, 0, 2, () => InvoiceUnitRule, 4]
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`InvoicingInternalServer`, 500],
  },
  [_rAS, _m],
  [
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
    0,
  ],

  __InternalServerException
);
export var InvoiceCurrencyAmount = struct(
  n0,
  _ICA,
  0,
  [_TA, _TABT, _CC, _AB, _CED],
  [0, 0, 0, () => AmountBreakdown, () => CurrencyExchangeDetails]
);
export var InvoiceProfile = struct(
  n0,
  _IP,
  0,
  [_AIc, _RN, _RAe, _RE, _I, _TRN],
  [
    0,
    0,
    [() => ReceiverAddress, 0],
    [() => SensitiveBasicStringWithoutSpace, 0],
    0,
    [() => SensitiveBasicStringWithoutSpace, 0],
  ]
);
export var InvoiceSummariesFilter = struct(n0, _ISF, 0, [_TI, _BP, _IE], [() => DateInterval, () => BillingPeriod, 0]);
export var InvoiceSummariesSelector = struct(n0, _ISS, 0, [_RTe, _V], [0, 0]);
export var InvoiceSummary = struct(
  n0,
  _IS,
  0,
  [_AIc, _II, _ID, _DD, _E, _BP, _IT, _OII, _PON, _BCA, _TCA, _PCA],
  [
    0,
    0,
    4,
    4,
    () => Entity,
    () => BillingPeriod,
    0,
    0,
    0,
    () => InvoiceCurrencyAmount,
    () => InvoiceCurrencyAmount,
    () => InvoiceCurrencyAmount,
  ]
);
export var InvoiceUnit = struct(
  n0,
  _IU,
  0,
  [_IUA, _IR, _N, _De, _TID, _R, _LM],
  [0, 0, 0, 0, 2, () => InvoiceUnitRule, 4]
);
export var InvoiceUnitRule = struct(n0, _IUR, 0, [_LA], [64 | 0]);
export var ListInvoiceSummariesRequest = struct(
  n0,
  _LISR,
  0,
  [_S, _Fil, _NT, _MR],
  [() => InvoiceSummariesSelector, () => InvoiceSummariesFilter, 0, 1]
);
export var ListInvoiceSummariesResponse = struct(n0, _LISRi, 0, [_ISn, _NT], [() => InvoiceSummaries, 0]);
export var ListInvoiceUnitsRequest = struct(n0, _LIUR, 0, [_Fi, _NT, _MR, _AO], [() => Filters, 0, 1, 4]);
export var ListInvoiceUnitsResponse = struct(n0, _LIURi, 0, [_IUn, _NT], [() => InvoiceUnits, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAes], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_RT], [() => ResourceTagList]);
export var ReceiverAddress = struct(
  n0,
  _RAe,
  8,
  [_AL, _ALd, _ALdd, _DOC, _C, _SOR, _CCo, _CN, _PC],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`InvoicingResourceNotFound`, 404],
  },
  [_m, _rN],
  [0, 0],

  __ResourceNotFoundException
);
export var ResourceTag = struct(n0, _RTes, 0, [_K, _V], [0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
    [_aQE]: [`InvoicingServiceQuotaExceeded`, 402],
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RAes, _RT], [0, () => ResourceTagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TaxesBreakdown = struct(n0, _TB, 0, [_B, _TA], [() => TaxesBreakdownAmountList, 0]);
export var TaxesBreakdownAmount = struct(n0, _TBA, 0, [_De, _A, _Ra], [0, 0, 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`InvoicingThrottling`, 429],
  },
  [_m],
  [0],

  __ThrottlingException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RAes, _RTK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateInvoiceUnitRequest = struct(n0, _UIUR, 0, [_IUA, _De, _TID, _R], [0, 0, 2, () => InvoiceUnitRule]);
export var UpdateInvoiceUnitResponse = struct(n0, _UIURp, 0, [_IUA], [0]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvoicingValidation`, 400],
  },
  [_m, _rN, _r, _fL],
  [0, 0, 0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_n, _m], [0, 0]);
export var Unit = "unit" as const;

export var AccountIdList = 64 | 0;

export var DiscountsBreakdownAmountList = list(n0, _DBAL, 0, () => DiscountsBreakdownAmount);
export var FeesBreakdownAmountList = list(n0, _FBAL, 0, () => FeesBreakdownAmount);
export var InvoiceSummaries = list(n0, _ISn, 0, () => InvoiceSummary);
export var InvoiceUnitNames = 64 | 0;

export var InvoiceUnits = list(n0, _IUn, 0, () => InvoiceUnit);
export var ProfileList = list(n0, _PL, 0, [() => InvoiceProfile, 0]);
export var ResourceTagKeyList = 64 | 0;

export var ResourceTagList = list(n0, _RTL, 0, () => ResourceTag);
export var TaxesBreakdownAmountList = list(n0, _TBAL, 0, () => TaxesBreakdownAmount);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);
export var BatchGetInvoiceProfile = op(
  n0,
  _BGIP,
  0,
  () => BatchGetInvoiceProfileRequest,
  () => BatchGetInvoiceProfileResponse
);
export var CreateInvoiceUnit = op(
  n0,
  _CIU,
  0,
  () => CreateInvoiceUnitRequest,
  () => CreateInvoiceUnitResponse
);
export var DeleteInvoiceUnit = op(
  n0,
  _DIU,
  0,
  () => DeleteInvoiceUnitRequest,
  () => DeleteInvoiceUnitResponse
);
export var GetInvoiceUnit = op(
  n0,
  _GIU,
  0,
  () => GetInvoiceUnitRequest,
  () => GetInvoiceUnitResponse
);
export var ListInvoiceSummaries = op(
  n0,
  _LIS,
  0,
  () => ListInvoiceSummariesRequest,
  () => ListInvoiceSummariesResponse
);
export var ListInvoiceUnits = op(
  n0,
  _LIU,
  0,
  () => ListInvoiceUnitsRequest,
  () => ListInvoiceUnitsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateInvoiceUnit = op(
  n0,
  _UIU,
  0,
  () => UpdateInvoiceUnitRequest,
  () => UpdateInvoiceUnitResponse
);

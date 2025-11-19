const _A = "Amount";
const _AB = "AmountBreakdown";
const _ADE = "AccessDeniedException";
const _AI = "AccountIds";
const _AIc = "AccountId";
const _AL = "AddressLine1";
const _ALd = "AddressLine2";
const _ALdd = "AddressLine3";
const _AO = "AsOf";
const _Ac = "Accounts";
const _B = "Breakdown";
const _BCA = "BaseCurrencyAmount";
const _BGIP = "BatchGetInvoiceProfile";
const _BGIPR = "BatchGetInvoiceProfileRequest";
const _BGIPRa = "BatchGetInvoiceProfileResponse";
const _BP = "BillingPeriod";
const _BSA = "BillSourceAccounts";
const _C = "City";
const _CC = "CurrencyCode";
const _CCo = "CountryCode";
const _CED = "CurrencyExchangeDetails";
const _CIU = "CreateInvoiceUnit";
const _CIUR = "CreateInvoiceUnitRequest";
const _CIURr = "CreateInvoiceUnitResponse";
const _CN = "CompanyName";
const _D = "Discounts";
const _DB = "DiscountsBreakdown";
const _DBA = "DiscountsBreakdownAmount";
const _DBAL = "DiscountsBreakdownAmountList";
const _DD = "DueDate";
const _DI = "DateInterval";
const _DIU = "DeleteInvoiceUnit";
const _DIUR = "DeleteInvoiceUnitRequest";
const _DIURe = "DeleteInvoiceUnitResponse";
const _DOC = "DistrictOrCounty";
const _DU = "DocumentUrl";
const _DUED = "DocumentUrlExpirationDate";
const _De = "Description";
const _E = "Entity";
const _ED = "EndDate";
const _F = "Fees";
const _FB = "FeesBreakdown";
const _FBA = "FeesBreakdownAmount";
const _FBAL = "FeesBreakdownAmountList";
const _Fi = "Filters";
const _Fil = "Filter";
const _GIPDF = "GetInvoicePDF";
const _GIPDFR = "GetInvoicePDFRequest";
const _GIPDFRe = "GetInvoicePDFResponse";
const _GIU = "GetInvoiceUnit";
const _GIUR = "GetInvoiceUnitRequest";
const _GIURe = "GetInvoiceUnitResponse";
const _I = "Issuer";
const _ICA = "InvoiceCurrencyAmount";
const _ID = "IssuedDate";
const _IE = "InvoicingEntity";
const _II = "InvoiceId";
const _IP = "InvoiceProfile";
const _IPDF = "InvoicePDF";
const _IR = "InvoiceReceiver";
const _IRn = "InvoiceReceivers";
const _IS = "InvoiceSummary";
const _ISE = "InternalServerException";
const _ISF = "InvoiceSummariesFilter";
const _ISS = "InvoiceSummariesSelector";
const _ISn = "InvoiceSummaries";
const _IT = "InvoiceType";
const _IU = "InvoiceUnit";
const _IUA = "InvoiceUnitArn";
const _IUR = "InvoiceUnitRule";
const _IUn = "InvoiceUnits";
const _K = "Key";
const _LA = "LinkedAccounts";
const _LIS = "ListInvoiceSummaries";
const _LISR = "ListInvoiceSummariesRequest";
const _LISRi = "ListInvoiceSummariesResponse";
const _LIU = "ListInvoiceUnits";
const _LIUR = "ListInvoiceUnitsRequest";
const _LIURi = "ListInvoiceUnitsResponse";
const _LM = "LastModified";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _M = "Month";
const _MR = "MaxResults";
const _N = "Name";
const _NT = "NextToken";
const _Na = "Names";
const _OII = "OriginalInvoiceId";
const _P = "Profiles";
const _PC = "PostalCode";
const _PCA = "PaymentCurrencyAmount";
const _PL = "ProfileList";
const _PON = "PurchaseOrderNumber";
const _R = "Rule";
const _RA = "Retry-After";
const _RAe = "ReceiverAddress";
const _RAes = "ResourceArn";
const _RE = "ReceiverEmail";
const _RN = "ReceiverName";
const _RNFE = "ResourceNotFoundException";
const _RT = "ResourceTags";
const _RTK = "ResourceTagKeys";
const _RTL = "ResourceTagList";
const _RTe = "ResourceType";
const _RTes = "ResourceTag";
const _Ra = "Rate";
const _S = "Selector";
const _SBSWS = "SensitiveBasicStringWithoutSpace";
const _SCC = "SourceCurrencyCode";
const _SD = "StartDate";
const _SDu = "SupplementalDocuments";
const _SDup = "SupplementalDocument";
const _SOR = "StateOrRegion";
const _SQEE = "ServiceQuotaExceededException";
const _STA = "SubTotalAmount";
const _T = "Taxes";
const _TA = "TotalAmount";
const _TABT = "TotalAmountBeforeTax";
const _TB = "TaxesBreakdown";
const _TBA = "TaxesBreakdownAmount";
const _TBAL = "TaxesBreakdownAmountList";
const _TCA = "TaxCurrencyAmount";
const _TCC = "TargetCurrencyCode";
const _TE = "ThrottlingException";
const _TI = "TimeInterval";
const _TID = "TaxInheritanceDisabled";
const _TR = "TagResource";
const _TRN = "TaxRegistrationNumber";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _UIU = "UpdateInvoiceUnit";
const _UIUR = "UpdateInvoiceUnitRequest";
const _UIURp = "UpdateInvoiceUnitResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _V = "Value";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _Y = "Year";
const _aQE = "awsQueryError";
const _c = "client";
const _e = "error";
const _fL = "fieldList";
const _hE = "httpError";
const _hH = "httpHeader";
const _m = "message";
const _n = "name";
const _r = "reason";
const _rAS = "retryAfterSeconds";
const _rN = "resourceName";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.invoicing";
const n0 = "com.amazonaws.invoicing";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { InvoicingServiceException as __InvoicingServiceException } from "../models/InvoicingServiceException";

/* eslint no-var: 0 */

export var SensitiveBasicStringWithoutSpace: StaticSimpleSchema = [0, n0, _SBSWS, 8, 0];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`InvoicingAccessDenied`, 403],
  },
  [_m, _rN],
  [0, 0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var AmountBreakdown: StaticStructureSchema = [
  3,
  n0,
  _AB,
  0,
  [_STA, _D, _T, _F],
  [0, () => DiscountsBreakdown, () => TaxesBreakdown, () => FeesBreakdown],
];
export var BatchGetInvoiceProfileRequest: StaticStructureSchema = [3, n0, _BGIPR, 0, [_AI], [64 | 0]];
export var BatchGetInvoiceProfileResponse: StaticStructureSchema = [3, n0, _BGIPRa, 0, [_P], [[() => ProfileList, 0]]];
export var BillingPeriod: StaticStructureSchema = [3, n0, _BP, 0, [_M, _Y], [1, 1]];
export var CreateInvoiceUnitRequest: StaticStructureSchema = [
  3,
  n0,
  _CIUR,
  0,
  [_N, _IR, _De, _TID, _R, _RT],
  [0, 0, 0, 2, () => InvoiceUnitRule, () => ResourceTagList],
];
export var CreateInvoiceUnitResponse: StaticStructureSchema = [3, n0, _CIURr, 0, [_IUA], [0]];
export var CurrencyExchangeDetails: StaticStructureSchema = [3, n0, _CED, 0, [_SCC, _TCC, _Ra], [0, 0, 0]];
export var DateInterval: StaticStructureSchema = [3, n0, _DI, 0, [_SD, _ED], [4, 4]];
export var DeleteInvoiceUnitRequest: StaticStructureSchema = [3, n0, _DIUR, 0, [_IUA], [0]];
export var DeleteInvoiceUnitResponse: StaticStructureSchema = [3, n0, _DIURe, 0, [_IUA], [0]];
export var DiscountsBreakdown: StaticStructureSchema = [
  3,
  n0,
  _DB,
  0,
  [_B, _TA],
  [() => DiscountsBreakdownAmountList, 0],
];
export var DiscountsBreakdownAmount: StaticStructureSchema = [3, n0, _DBA, 0, [_De, _A, _Ra], [0, 0, 0]];
export var Entity: StaticStructureSchema = [3, n0, _E, 0, [_IE], [0]];
export var FeesBreakdown: StaticStructureSchema = [3, n0, _FB, 0, [_B, _TA], [() => FeesBreakdownAmountList, 0]];
export var FeesBreakdownAmount: StaticStructureSchema = [3, n0, _FBA, 0, [_De, _A, _Ra], [0, 0, 0]];
export var Filters: StaticStructureSchema = [3, n0, _Fi, 0, [_Na, _IRn, _Ac, _BSA], [64 | 0, 64 | 0, 64 | 0, 64 | 0]];
export var GetInvoicePDFRequest: StaticStructureSchema = [3, n0, _GIPDFR, 0, [_II], [0]];
export var GetInvoicePDFResponse: StaticStructureSchema = [3, n0, _GIPDFRe, 0, [_IPDF], [() => InvoicePDF]];
export var GetInvoiceUnitRequest: StaticStructureSchema = [3, n0, _GIUR, 0, [_IUA, _AO], [0, 4]];
export var GetInvoiceUnitResponse: StaticStructureSchema = [
  3,
  n0,
  _GIURe,
  0,
  [_IUA, _IR, _N, _De, _TID, _R, _LM],
  [0, 0, 0, 0, 2, () => InvoiceUnitRule, 4],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
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
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var InvoiceCurrencyAmount: StaticStructureSchema = [
  3,
  n0,
  _ICA,
  0,
  [_TA, _TABT, _CC, _AB, _CED],
  [0, 0, 0, () => AmountBreakdown, () => CurrencyExchangeDetails],
];
export var InvoicePDF: StaticStructureSchema = [
  3,
  n0,
  _IPDF,
  0,
  [_II, _DU, _DUED, _SDu],
  [0, 0, 4, () => SupplementalDocuments],
];
export var InvoiceProfile: StaticStructureSchema = [
  3,
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
  ],
];
export var InvoiceSummariesFilter: StaticStructureSchema = [
  3,
  n0,
  _ISF,
  0,
  [_TI, _BP, _IE],
  [() => DateInterval, () => BillingPeriod, 0],
];
export var InvoiceSummariesSelector: StaticStructureSchema = [3, n0, _ISS, 0, [_RTe, _V], [0, 0]];
export var InvoiceSummary: StaticStructureSchema = [
  3,
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
  ],
];
export var InvoiceUnit: StaticStructureSchema = [
  3,
  n0,
  _IU,
  0,
  [_IUA, _IR, _N, _De, _TID, _R, _LM],
  [0, 0, 0, 0, 2, () => InvoiceUnitRule, 4],
];
export var InvoiceUnitRule: StaticStructureSchema = [3, n0, _IUR, 0, [_LA, _BSA], [64 | 0, 64 | 0]];
export var ListInvoiceSummariesRequest: StaticStructureSchema = [
  3,
  n0,
  _LISR,
  0,
  [_S, _Fil, _NT, _MR],
  [() => InvoiceSummariesSelector, () => InvoiceSummariesFilter, 0, 1],
];
export var ListInvoiceSummariesResponse: StaticStructureSchema = [
  3,
  n0,
  _LISRi,
  0,
  [_ISn, _NT],
  [() => InvoiceSummaries, 0],
];
export var ListInvoiceUnitsRequest: StaticStructureSchema = [
  3,
  n0,
  _LIUR,
  0,
  [_Fi, _NT, _MR, _AO],
  [() => Filters, 0, 1, 4],
];
export var ListInvoiceUnitsResponse: StaticStructureSchema = [3, n0, _LIURi, 0, [_IUn, _NT], [() => InvoiceUnits, 0]];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RAes], [0]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_RT], [() => ResourceTagList]];
export var ReceiverAddress: StaticStructureSchema = [
  3,
  n0,
  _RAe,
  8,
  [_AL, _ALd, _ALdd, _DOC, _C, _SOR, _CCo, _CN, _PC],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`InvoicingResourceNotFound`, 404],
  },
  [_m, _rN],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ResourceTag: StaticStructureSchema = [3, n0, _RTes, 0, [_K, _V], [0, 0]];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
    [_aQE]: [`InvoicingServiceQuotaExceeded`, 402],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var SupplementalDocument: StaticStructureSchema = [3, n0, _SDup, 0, [_DU, _DUED], [0, 4]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_RAes, _RT], [0, () => ResourceTagList]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var TaxesBreakdown: StaticStructureSchema = [3, n0, _TB, 0, [_B, _TA], [() => TaxesBreakdownAmountList, 0]];
export var TaxesBreakdownAmount: StaticStructureSchema = [3, n0, _TBA, 0, [_De, _A, _Ra], [0, 0, 0]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`InvoicingThrottling`, 429],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_RAes, _RTK], [0, 64 | 0]];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateInvoiceUnitRequest: StaticStructureSchema = [
  3,
  n0,
  _UIUR,
  0,
  [_IUA, _De, _TID, _R],
  [0, 0, 2, () => InvoiceUnitRule],
];
export var UpdateInvoiceUnitResponse: StaticStructureSchema = [3, n0, _UIURp, 0, [_IUA], [0]];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvoicingValidation`, 400],
  },
  [_m, _rN, _r, _fL],
  [0, 0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_n, _m], [0, 0]];
export var __Unit = "unit" as const;

export var InvoicingServiceException: StaticErrorSchema = [-3, _sm, "InvoicingServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(InvoicingServiceException, __InvoicingServiceException);

export var AccountIdList = 64 | 0;

export var DiscountsBreakdownAmountList: StaticListSchema = [1, n0, _DBAL, 0, () => DiscountsBreakdownAmount];
export var FeesBreakdownAmountList: StaticListSchema = [1, n0, _FBAL, 0, () => FeesBreakdownAmount];
export var InvoiceSummaries: StaticListSchema = [1, n0, _ISn, 0, () => InvoiceSummary];
export var InvoiceUnitNames = 64 | 0;

export var InvoiceUnits: StaticListSchema = [1, n0, _IUn, 0, () => InvoiceUnit];
export var ProfileList: StaticListSchema = [1, n0, _PL, 0, [() => InvoiceProfile, 0]];
export var ResourceTagKeyList = 64 | 0;

export var ResourceTagList: StaticListSchema = [1, n0, _RTL, 0, () => ResourceTag];
export var RuleAccountIdList = 64 | 0;

export var SupplementalDocuments: StaticListSchema = [1, n0, _SDu, 0, () => SupplementalDocument];
export var TaxesBreakdownAmountList: StaticListSchema = [1, n0, _TBAL, 0, () => TaxesBreakdownAmount];
export var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField];
export var BatchGetInvoiceProfile: StaticOperationSchema = [
  9,
  n0,
  _BGIP,
  0,
  () => BatchGetInvoiceProfileRequest,
  () => BatchGetInvoiceProfileResponse,
];
export var CreateInvoiceUnit: StaticOperationSchema = [
  9,
  n0,
  _CIU,
  0,
  () => CreateInvoiceUnitRequest,
  () => CreateInvoiceUnitResponse,
];
export var DeleteInvoiceUnit: StaticOperationSchema = [
  9,
  n0,
  _DIU,
  0,
  () => DeleteInvoiceUnitRequest,
  () => DeleteInvoiceUnitResponse,
];
export var GetInvoicePDF: StaticOperationSchema = [
  9,
  n0,
  _GIPDF,
  0,
  () => GetInvoicePDFRequest,
  () => GetInvoicePDFResponse,
];
export var GetInvoiceUnit: StaticOperationSchema = [
  9,
  n0,
  _GIU,
  0,
  () => GetInvoiceUnitRequest,
  () => GetInvoiceUnitResponse,
];
export var ListInvoiceSummaries: StaticOperationSchema = [
  9,
  n0,
  _LIS,
  0,
  () => ListInvoiceSummariesRequest,
  () => ListInvoiceSummariesResponse,
];
export var ListInvoiceUnits: StaticOperationSchema = [
  9,
  n0,
  _LIU,
  0,
  () => ListInvoiceUnitsRequest,
  () => ListInvoiceUnitsResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var TagResource: StaticOperationSchema = [9, n0, _TR, 0, () => TagResourceRequest, () => TagResourceResponse];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateInvoiceUnit: StaticOperationSchema = [
  9,
  n0,
  _UIU,
  0,
  () => UpdateInvoiceUnitRequest,
  () => UpdateInvoiceUnitResponse,
];

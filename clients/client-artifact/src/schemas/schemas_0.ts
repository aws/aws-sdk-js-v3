const _ADE = "AccessDeniedException";
const _AS = "AccountSettings";
const _CAL = "CustomerAgreementList";
const _CAS = "CustomerAgreementSummary";
const _CE = "ConflictException";
const _GAS = "GetAccountSettings";
const _GASR = "GetAccountSettingsRequest";
const _GASRe = "GetAccountSettingsResponse";
const _GR = "GetReport";
const _GRM = "GetReportMetadata";
const _GRMR = "GetReportMetadataRequest";
const _GRMRe = "GetReportMetadataResponse";
const _GRR = "GetReportRequest";
const _GRRe = "GetReportResponse";
const _GTFR = "GetTermForReport";
const _GTFRR = "GetTermForReportRequest";
const _GTFRRe = "GetTermForReportResponse";
const _ISE = "InternalServerException";
const _LCA = "ListCustomerAgreements";
const _LCAR = "ListCustomerAgreementsRequest";
const _LCARi = "ListCustomerAgreementsResponse";
const _LR = "ListReports";
const _LRR = "ListReportsRequest";
const _LRRi = "ListReportsResponse";
const _PAS = "PutAccountSettings";
const _PASR = "PutAccountSettingsRequest";
const _PASRu = "PutAccountSettingsResponse";
const _RA = "Retry-After";
const _RD = "ReportDetail";
const _RL = "ReportsList";
const _RNFE = "ResourceNotFoundException";
const _RS = "ReportSummary";
const _SQEE = "ServiceQuotaExceededException";
const _TE = "ThrottlingException";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _a = "arn";
const _aA = "agreementArn";
const _aAI = "awsAccountId";
const _aS = "accountSettings";
const _aT = "acceptanceTerms";
const _aTc = "acceptanceType";
const _c = "client";
const _cA = "customerAgreements";
const _cAr = "createdAt";
const _cN = "companyName";
const _ca = "category";
const _d = "description";
const _dA = "deletedAt";
const _dPU = "documentPresignedUrl";
const _e = "error";
const _eE = "effectiveEnd";
const _eS = "effectiveStart";
const _fL = "fieldList";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _i = "id";
const _lMA = "lastModifiedAt";
const _m = "message";
const _mR = "maxResults";
const _n = "name";
const _nSS = "notificationSubscriptionStatus";
const _nT = "nextToken";
const _oA = "organizationArn";
const _pE = "periodEnd";
const _pN = "productName";
const _pS = "periodStart";
const _qC = "quotaCode";
const _r = "reports";
const _rAS = "retryAfterSeconds";
const _rD = "reportDetails";
const _rI = "resourceId";
const _rIe = "reportId";
const _rT = "resourceType";
const _rV = "reportVersion";
const _re = "reason";
const _s = "state";
const _sC = "serviceCode";
const _sM = "statusMessage";
const _sN = "sequenceNumber";
const _se = "server";
const _ser = "series";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.artifact";
const _t = "type";
const _tA = "termArn";
const _tT = "terminateTerms";
const _tTe = "termToken";
const _uS = "uploadState";
const _v = "version";
const n0 = "com.amazonaws.artifact";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { ArtifactServiceException as __ArtifactServiceException } from "../models/ArtifactServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var AccountSettings: StaticStructureSchema = [3, n0, _AS, 0, [_nSS], [0]];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CustomerAgreementSummary: StaticStructureSchema = [
  3,
  n0,
  _CAS,
  0,
  [_n, _a, _i, _aA, _aAI, _oA, _eS, _eE, _s, _d, _aT, _tT, _t],
  [0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 64 | 0, 64 | 0, 0],
];
export var GetAccountSettingsRequest: StaticStructureSchema = [3, n0, _GASR, 0, [], []];
export var GetAccountSettingsResponse: StaticStructureSchema = [3, n0, _GASRe, 0, [_aS], [() => AccountSettings]];
export var GetReportMetadataRequest: StaticStructureSchema = [
  3,
  n0,
  _GRMR,
  0,
  [_rIe, _rV],
  [
    [
      0,
      {
        [_hQ]: _rIe,
      },
    ],
    [
      1,
      {
        [_hQ]: _rV,
      },
    ],
  ],
];
export var GetReportMetadataResponse: StaticStructureSchema = [3, n0, _GRMRe, 0, [_rD], [() => ReportDetail]];
export var GetReportRequest: StaticStructureSchema = [
  3,
  n0,
  _GRR,
  0,
  [_rIe, _rV, _tTe],
  [
    [
      0,
      {
        [_hQ]: _rIe,
      },
    ],
    [
      1,
      {
        [_hQ]: _rV,
      },
    ],
    [
      0,
      {
        [_hQ]: _tTe,
      },
    ],
  ],
];
export var GetReportResponse: StaticStructureSchema = [3, n0, _GRRe, 0, [_dPU], [0]];
export var GetTermForReportRequest: StaticStructureSchema = [
  3,
  n0,
  _GTFRR,
  0,
  [_rIe, _rV],
  [
    [
      0,
      {
        [_hQ]: _rIe,
      },
    ],
    [
      1,
      {
        [_hQ]: _rV,
      },
    ],
  ],
];
export var GetTermForReportResponse: StaticStructureSchema = [3, n0, _GTFRRe, 0, [_dPU, _tTe], [0, 0]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m, _rAS],
  [
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ListCustomerAgreementsRequest: StaticStructureSchema = [
  3,
  n0,
  _LCAR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ],
];
export var ListCustomerAgreementsResponse: StaticStructureSchema = [
  3,
  n0,
  _LCARi,
  0,
  [_cA, _nT],
  [() => CustomerAgreementList, 0],
];
export var ListReportsRequest: StaticStructureSchema = [
  3,
  n0,
  _LRR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ],
];
export var ListReportsResponse: StaticStructureSchema = [3, n0, _LRRi, 0, [_r, _nT], [() => ReportsList, 0]];
export var PutAccountSettingsRequest: StaticStructureSchema = [3, n0, _PASR, 0, [_nSS], [0]];
export var PutAccountSettingsResponse: StaticStructureSchema = [3, n0, _PASRu, 0, [_aS], [() => AccountSettings]];
export var ReportDetail: StaticStructureSchema = [
  3,
  n0,
  _RD,
  0,
  [_i, _n, _d, _pS, _pE, _cAr, _lMA, _dA, _s, _a, _ser, _ca, _cN, _pN, _tA, _v, _aTc, _sN, _uS, _sM],
  [0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
];
export var ReportSummary: StaticStructureSchema = [
  3,
  n0,
  _RS,
  0,
  [_i, _n, _s, _a, _v, _uS, _d, _pS, _pE, _ser, _ca, _cN, _pN, _sM, _aTc],
  [0, 0, 0, 0, 1, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _sC, _qC, _rAS],
  [
    0,
    0,
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _re, _fL],
  [0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_n, _m], [0, 0]];
export var __Unit = "unit" as const;

export var ArtifactServiceException: StaticErrorSchema = [-3, _sm, "ArtifactServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(ArtifactServiceException, __ArtifactServiceException);

export var AgreementTerms = 64 | 0;

export var CustomerAgreementList: StaticListSchema = [1, n0, _CAL, 0, () => CustomerAgreementSummary];
export var ReportsList: StaticListSchema = [1, n0, _RL, 0, () => ReportSummary];
export var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField];
export var GetAccountSettings: StaticOperationSchema = [
  9,
  n0,
  _GAS,
  {
    [_h]: ["GET", "/v1/account-settings/get", 200],
  },
  () => GetAccountSettingsRequest,
  () => GetAccountSettingsResponse,
];
export var GetReport: StaticOperationSchema = [
  9,
  n0,
  _GR,
  {
    [_h]: ["GET", "/v1/report/get", 200],
  },
  () => GetReportRequest,
  () => GetReportResponse,
];
export var GetReportMetadata: StaticOperationSchema = [
  9,
  n0,
  _GRM,
  {
    [_h]: ["GET", "/v1/report/getMetadata", 200],
  },
  () => GetReportMetadataRequest,
  () => GetReportMetadataResponse,
];
export var GetTermForReport: StaticOperationSchema = [
  9,
  n0,
  _GTFR,
  {
    [_h]: ["GET", "/v1/report/getTermForReport", 200],
  },
  () => GetTermForReportRequest,
  () => GetTermForReportResponse,
];
export var ListCustomerAgreements: StaticOperationSchema = [
  9,
  n0,
  _LCA,
  {
    [_h]: ["GET", "/v1/customer-agreement/list", 200],
  },
  () => ListCustomerAgreementsRequest,
  () => ListCustomerAgreementsResponse,
];
export var ListReports: StaticOperationSchema = [
  9,
  n0,
  _LR,
  {
    [_h]: ["GET", "/v1/report/list", 200],
  },
  () => ListReportsRequest,
  () => ListReportsResponse,
];
export var PutAccountSettings: StaticOperationSchema = [
  9,
  n0,
  _PAS,
  {
    [_h]: ["PUT", "/v1/account-settings/put", 200],
  },
  () => PutAccountSettingsRequest,
  () => PutAccountSettingsResponse,
];

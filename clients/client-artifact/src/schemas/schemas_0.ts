export const _ADE = "AccessDeniedException";
export const _AS = "AccountSettings";
export const _CAL = "CustomerAgreementList";
export const _CAS = "CustomerAgreementSummary";
export const _CE = "ConflictException";
export const _GAS = "GetAccountSettings";
export const _GASR = "GetAccountSettingsRequest";
export const _GASRe = "GetAccountSettingsResponse";
export const _GR = "GetReport";
export const _GRM = "GetReportMetadata";
export const _GRMR = "GetReportMetadataRequest";
export const _GRMRe = "GetReportMetadataResponse";
export const _GRR = "GetReportRequest";
export const _GRRe = "GetReportResponse";
export const _GTFR = "GetTermForReport";
export const _GTFRR = "GetTermForReportRequest";
export const _GTFRRe = "GetTermForReportResponse";
export const _ISE = "InternalServerException";
export const _LCA = "ListCustomerAgreements";
export const _LCAR = "ListCustomerAgreementsRequest";
export const _LCARi = "ListCustomerAgreementsResponse";
export const _LR = "ListReports";
export const _LRR = "ListReportsRequest";
export const _LRRi = "ListReportsResponse";
export const _PAS = "PutAccountSettings";
export const _PASR = "PutAccountSettingsRequest";
export const _PASRu = "PutAccountSettingsResponse";
export const _RA = "Retry-After";
export const _RD = "ReportDetail";
export const _RL = "ReportsList";
export const _RNFE = "ResourceNotFoundException";
export const _RS = "ReportSummary";
export const _SQEE = "ServiceQuotaExceededException";
export const _TE = "ThrottlingException";
export const _VE = "ValidationException";
export const _VEF = "ValidationExceptionField";
export const _VEFL = "ValidationExceptionFieldList";
export const _a = "arn";
export const _aA = "agreementArn";
export const _aAI = "awsAccountId";
export const _aS = "accountSettings";
export const _aT = "acceptanceTerms";
export const _aTc = "acceptanceType";
export const _c = "client";
export const _cA = "customerAgreements";
export const _cAr = "createdAt";
export const _cN = "companyName";
export const _ca = "category";
export const _d = "description";
export const _dA = "deletedAt";
export const _dPU = "documentPresignedUrl";
export const _e = "error";
export const _eE = "effectiveEnd";
export const _eS = "effectiveStart";
export const _fL = "fieldList";
export const _h = "http";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _hQ = "httpQuery";
export const _i = "id";
export const _lMA = "lastModifiedAt";
export const _m = "message";
export const _mR = "maxResults";
export const _n = "name";
export const _nSS = "notificationSubscriptionStatus";
export const _nT = "nextToken";
export const _oA = "organizationArn";
export const _pE = "periodEnd";
export const _pN = "productName";
export const _pS = "periodStart";
export const _qC = "quotaCode";
export const _r = "reports";
export const _rAS = "retryAfterSeconds";
export const _rD = "reportDetails";
export const _rI = "resourceId";
export const _rIe = "reportId";
export const _rT = "resourceType";
export const _rV = "reportVersion";
export const _re = "reason";
export const _s = "state";
export const _sC = "serviceCode";
export const _sM = "statusMessage";
export const _sN = "sequenceNumber";
export const _se = "server";
export const _ser = "series";
export const _t = "type";
export const _tA = "termArn";
export const _tT = "terminateTerms";
export const _tTe = "termToken";
export const _uS = "uploadState";
export const _v = "version";
export const n0 = "com.amazonaws.artifact";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { ArtifactServiceException as __ArtifactServiceException } from "../models/ArtifactServiceException";

/* eslint no-var: 0 */

export var ArtifactServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.artifact",
  "ArtifactServiceException",
  0,
  [],
  [],
  __ArtifactServiceException
);

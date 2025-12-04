const _ADE = "AccessDeniedException";
const _AFM = "AccountFindingsMetric";
const _BGF = "BatchGetFindings";
const _BGFE = "BatchGetFindingsError";
const _BGFEa = "BatchGetFindingsErrors";
const _BGFR = "BatchGetFindingsRequest";
const _BGFRa = "BatchGetFindingsResponse";
const _CE = "ConflictException";
const _CL = "CodeLine";
const _CS = "CodeSnippet";
const _CSR = "CreateScanRequest";
const _CSRr = "CreateScanResponse";
const _CSr = "CreateScan";
const _CUU = "CreateUploadUrl";
const _CUUR = "CreateUploadUrlRequest";
const _CUURr = "CreateUploadUrlResponse";
const _CWFN = "CategoryWithFindingNum";
const _CWMF = "CategoriesWithMostFindings";
const _EC = "EncryptionConfig";
const _F = "Finding";
const _FI = "FindingIdentifier";
const _FIi = "FindingIdentifiers";
const _FML = "FindingsMetricList";
const _FMVPS = "FindingMetricsValuePerSeverity";
const _FP = "FilePath";
const _Fi = "Findings";
const _GAC = "GetAccountConfiguration";
const _GACR = "GetAccountConfigurationRequest";
const _GACRe = "GetAccountConfigurationResponse";
const _GF = "GetFindings";
const _GFR = "GetFindingsRequest";
const _GFRe = "GetFindingsResponse";
const _GMS = "GetMetricsSummary";
const _GMSR = "GetMetricsSummaryRequest";
const _GMSRe = "GetMetricsSummaryResponse";
const _GS = "GetScan";
const _GSR = "GetScanRequest";
const _GSRe = "GetScanResponse";
const _ISE = "InternalServerException";
const _LFM = "ListFindingsMetrics";
const _LFMR = "ListFindingsMetricsRequest";
const _LFMRi = "ListFindingsMetricsResponse";
const _LS = "ListScans";
const _LSR = "ListScansRequest";
const _LSRi = "ListScansResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _MS = "MetricsSummary";
const _R = "Recommendation";
const _RHM = "RequestHeaderMap";
const _RI = "ResourceId";
const _RNFE = "ResourceNotFoundException";
const _Re = "Remediation";
const _Res = "Resource";
const _SF = "SuggestedFix";
const _SFu = "SuggestedFixes";
const _SNWFN = "ScanNameWithFindingNum";
const _SS = "ScanSummary";
const _SSc = "ScanSummaries";
const _SU = "S3Url";
const _SWMOCF = "ScansWithMostOpenCriticalFindings";
const _SWMOF = "ScansWithMostOpenFindings";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _UAC = "UpdateAccountConfiguration";
const _UACR = "UpdateAccountConfigurationRequest";
const _UACRp = "UpdateAccountConfigurationResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _V = "Vulnerability";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _aT = "analysisType";
const _c = "client";
const _cA = "createdAt";
const _cAI = "codeArtifactId";
const _cF = "closedFindings";
const _cN = "categoryName";
const _cS = "codeSnippet";
const _cT = "clientToken";
const _cWMF = "categoriesWithMostFindings";
const _co = "content";
const _cod = "code";
const _cr = "critical";
const _d = "date";
const _dI = "detectorId";
const _dN = "detectorName";
const _dT = "detectorTags";
const _de = "description";
const _e = "error";
const _eC = "errorCode";
const _eCn = "encryptionConfig";
const _eD = "endDate";
const _eL = "endLine";
const _eM = "errorMessage";
const _f = "findings";
const _fF = "failedFindings";
const _fI = "findingId";
const _fIi = "findingIdentifiers";
const _fL = "fieldList";
const _fM = "findingsMetrics";
const _fN = "findingNumber";
const _fP = "filePath";
const _gI = "generatorId";
const _h = "high";
const _hE = "httpError";
const _hQ = "httpQuery";
const _ht = "http";
const _i = "id";
const _iC = "itemCount";
const _in = "info";
const _kKA = "kmsKeyArn";
const _l = "low";
const _m = "message";
const _mR = "maxResults";
const _mS = "metricsSummary";
const _mTTC = "meanTimeToClose";
const _me = "medium";
const _n = "number";
const _nF = "newFindings";
const _nOR = "numberOfRevisions";
const _nT = "nextToken";
const _na = "name";
const _oF = "openFindings";
const _p = "path";
const _qC = "quotaCode";
const _r = "resource";
const _rA = "resourceArn";
const _rH = "requestHeaders";
const _rI = "resourceId";
const _rIu = "runId";
const _rIul = "ruleId";
const _rT = "resourceType";
const _rU = "referenceUrls";
const _rV = "relatedVulnerabilities";
const _re = "remediation";
const _rea = "reason";
const _rec = "recommendation";
const _s = "status";
const _sC = "serviceCode";
const _sD = "startDate";
const _sF = "suggestedFixes";
const _sL = "startLine";
const _sN = "scanName";
const _sNA = "scanNameArn";
const _sRI = "subResourceId";
const _sS = "scanState";
const _sT = "scanType";
const _sU = "s3Url";
const _sWMOCF = "scansWithMostOpenCriticalFindings";
const _sWMOF = "scansWithMostOpenFindings";
const _se = "severity";
const _ser = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.codegurusecurity";
const _su = "summaries";
const _t = "tags";
const _tK = "tagKeys";
const _te = "text";
const _ti = "title";
const _ty = "type";
const _u = "url";
const _uA = "updatedAt";
const _v = "vulnerability";
const n0 = "com.amazonaws.codegurusecurity";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { CodeGuruSecurityServiceException as __CodeGuruSecurityServiceException } from "../models/CodeGuruSecurityServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
export var S3Url: StaticSimpleSchema = [0, n0, _SU, 8, 0];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_eC, _m, _rI, _rT],
  [0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);
export var AccountFindingsMetric: StaticStructureSchema = [
  3,
  n0,
  _AFM,
  0,
  [_d, _nF, _cF, _oF, _mTTC],
  [
    4,
    () => FindingMetricsValuePerSeverity,
    () => FindingMetricsValuePerSeverity,
    () => FindingMetricsValuePerSeverity,
    () => FindingMetricsValuePerSeverity,
  ],
];
export var BatchGetFindingsError: StaticStructureSchema = [3, n0, _BGFE, 0, [_sN, _fI, _eC, _m], [0, 0, 0, 0]];
export var BatchGetFindingsRequest: StaticStructureSchema = [3, n0, _BGFR, 0, [_fIi], [() => FindingIdentifiers]];
export var BatchGetFindingsResponse: StaticStructureSchema = [
  3,
  n0,
  _BGFRa,
  0,
  [_f, _fF],
  [() => Findings, () => BatchGetFindingsErrors],
];
export var CategoryWithFindingNum: StaticStructureSchema = [3, n0, _CWFN, 0, [_cN, _fN], [0, 1]];
export var CodeLine: StaticStructureSchema = [3, n0, _CL, 0, [_n, _co], [1, 0]];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  { [_e]: _c, [_hE]: 409 },
  [_eC, _m, _rI, _rT],
  [0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);
export var CreateScanRequest: StaticStructureSchema = [
  3,
  n0,
  _CSR,
  0,
  [_cT, _rI, _sN, _sT, _aT, _t],
  [[0, 4], () => ResourceId, 0, 0, 0, 128 | 0],
];
export var CreateScanResponse: StaticStructureSchema = [
  3,
  n0,
  _CSRr,
  0,
  [_sN, _rIu, _rI, _sS, _sNA],
  [0, 0, () => ResourceId, 0, 0],
];
export var CreateUploadUrlRequest: StaticStructureSchema = [3, n0, _CUUR, 0, [_sN], [0]];
export var CreateUploadUrlResponse: StaticStructureSchema = [
  3,
  n0,
  _CUURr,
  0,
  [_sU, _rH, _cAI],
  [[() => S3Url, 0], [() => RequestHeaderMap, 0], 0],
];
export var EncryptionConfig: StaticStructureSchema = [3, n0, _EC, 0, [_kKA], [0]];
export var FilePath: StaticStructureSchema = [3, n0, _FP, 0, [_na, _p, _sL, _eL, _cS], [0, 0, 1, 1, () => CodeSnippet]];
export var Finding: StaticStructureSchema = [
  3,
  n0,
  _F,
  0,
  [_cA, _de, _gI, _i, _uA, _ty, _s, _r, _v, _se, _re, _ti, _dT, _dI, _dN, _rIul],
  [4, 0, 0, 0, 4, 0, 0, () => Resource, () => Vulnerability, 0, () => Remediation, 0, 64 | 0, 0, 0, 0],
];
export var FindingIdentifier: StaticStructureSchema = [3, n0, _FI, 0, [_sN, _fI], [0, 0]];
export var FindingMetricsValuePerSeverity: StaticStructureSchema = [
  3,
  n0,
  _FMVPS,
  0,
  [_in, _l, _me, _h, _cr],
  [1, 1, 1, 1, 1],
];
export var GetAccountConfigurationRequest: StaticStructureSchema = [3, n0, _GACR, 0, [], []];
export var GetAccountConfigurationResponse: StaticStructureSchema = [
  3,
  n0,
  _GACRe,
  0,
  [_eCn],
  [() => EncryptionConfig],
];
export var GetFindingsRequest: StaticStructureSchema = [
  3,
  n0,
  _GFR,
  0,
  [_sN, _nT, _mR, _s],
  [
    [0, 1],
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
    [0, { [_hQ]: _s }],
  ],
];
export var GetFindingsResponse: StaticStructureSchema = [3, n0, _GFRe, 0, [_f, _nT], [() => Findings, 0]];
export var GetMetricsSummaryRequest: StaticStructureSchema = [3, n0, _GMSR, 0, [_d], [[4, { [_hQ]: _d }]]];
export var GetMetricsSummaryResponse: StaticStructureSchema = [3, n0, _GMSRe, 0, [_mS], [() => MetricsSummary]];
export var GetScanRequest: StaticStructureSchema = [
  3,
  n0,
  _GSR,
  0,
  [_sN, _rIu],
  [
    [0, 1],
    [0, { [_hQ]: _rIu }],
  ],
];
export var GetScanResponse: StaticStructureSchema = [
  3,
  n0,
  _GSRe,
  0,
  [_sN, _rIu, _sS, _cA, _aT, _uA, _nOR, _sNA, _eM],
  [0, 0, 0, 4, 0, 4, 1, 0, 0],
];
export var InternalServerException: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _ser, [_hE]: 500 }, [_e, _m], [0, 0]];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);
export var ListFindingsMetricsRequest: StaticStructureSchema = [
  3,
  n0,
  _LFMR,
  0,
  [_nT, _mR, _sD, _eD],
  [
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
    [4, { [_hQ]: _sD }],
    [4, { [_hQ]: _eD }],
  ],
];
export var ListFindingsMetricsResponse: StaticStructureSchema = [
  3,
  n0,
  _LFMRi,
  0,
  [_fM, _nT],
  [() => FindingsMetricList, 0],
];
export var ListScansRequest: StaticStructureSchema = [
  3,
  n0,
  _LSR,
  0,
  [_nT, _mR],
  [
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
  ],
];
export var ListScansResponse: StaticStructureSchema = [3, n0, _LSRi, 0, [_su, _nT], [() => ScanSummaries, 0]];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rA], [[0, 1]]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_t], [128 | 0]];
export var MetricsSummary: StaticStructureSchema = [
  3,
  n0,
  _MS,
  0,
  [_d, _oF, _cWMF, _sWMOF, _sWMOCF],
  [
    4,
    () => FindingMetricsValuePerSeverity,
    () => CategoriesWithMostFindings,
    () => ScansWithMostOpenFindings,
    () => ScansWithMostOpenCriticalFindings,
  ],
];
export var Recommendation: StaticStructureSchema = [3, n0, _R, 0, [_te, _u], [0, 0]];
export var Remediation: StaticStructureSchema = [
  3,
  n0,
  _Re,
  0,
  [_rec, _sF],
  [() => Recommendation, () => SuggestedFixes],
];
export var Resource: StaticStructureSchema = [3, n0, _Res, 0, [_i, _sRI], [0, 0]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_eC, _m, _rI, _rT],
  [0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);
export var ScanNameWithFindingNum: StaticStructureSchema = [3, n0, _SNWFN, 0, [_sN, _fN], [0, 1]];
export var ScanSummary: StaticStructureSchema = [3, n0, _SS, 0, [_sS, _cA, _uA, _sN, _rIu, _sNA], [0, 4, 4, 0, 0, 0]];
export var SuggestedFix: StaticStructureSchema = [3, n0, _SF, 0, [_de, _cod], [0, 0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_rA, _t], [[0, 1], 128 | 0]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  { [_e]: _c, [_hE]: 429 },
  [_eC, _m, _sC, _qC],
  [0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);
export var UntagResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _tK }],
  ],
];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateAccountConfigurationRequest: StaticStructureSchema = [
  3,
  n0,
  _UACR,
  0,
  [_eCn],
  [() => EncryptionConfig],
];
export var UpdateAccountConfigurationResponse: StaticStructureSchema = [
  3,
  n0,
  _UACRp,
  0,
  [_eCn],
  [() => EncryptionConfig],
];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  { [_e]: _c, [_hE]: 400 },
  [_eC, _m, _rea, _fL],
  [0, 0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);
export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_na, _m], [0, 0]];
export var Vulnerability: StaticStructureSchema = [
  3,
  n0,
  _V,
  0,
  [_rU, _rV, _i, _fP, _iC],
  [64 | 0, 64 | 0, 0, () => FilePath, 1],
];
export var __Unit = "unit" as const;
export var CodeGuruSecurityServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "CodeGuruSecurityServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(CodeGuruSecurityServiceException, __CodeGuruSecurityServiceException);
export var BatchGetFindingsErrors: StaticListSchema = [1, n0, _BGFEa, 0, () => BatchGetFindingsError];
export var CategoriesWithMostFindings: StaticListSchema = [1, n0, _CWMF, 0, () => CategoryWithFindingNum];
export var CodeSnippet: StaticListSchema = [1, n0, _CS, 0, () => CodeLine];
export var DetectorTags = 64 | 0;
export var FindingIdentifiers: StaticListSchema = [1, n0, _FIi, 0, () => FindingIdentifier];
export var Findings: StaticListSchema = [1, n0, _Fi, 0, () => Finding];
export var FindingsMetricList: StaticListSchema = [1, n0, _FML, 0, () => AccountFindingsMetric];
export var ReferenceUrls = 64 | 0;
export var RelatedVulnerabilities = 64 | 0;
export var ScanSummaries: StaticListSchema = [1, n0, _SSc, 0, () => ScanSummary];
export var ScansWithMostOpenCriticalFindings: StaticListSchema = [1, n0, _SWMOCF, 0, () => ScanNameWithFindingNum];
export var ScansWithMostOpenFindings: StaticListSchema = [1, n0, _SWMOF, 0, () => ScanNameWithFindingNum];
export var SuggestedFixes: StaticListSchema = [1, n0, _SFu, 0, () => SuggestedFix];
export var TagKeyList = 64 | 0;
export var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField];
export var RequestHeaderMap: StaticMapSchema = [2, n0, _RHM, 8, 0, 0];
export var TagMap = 128 | 0;
export var ResourceId: StaticStructureSchema = [3, n0, _RI, 0, [_cAI], [0]];
export var BatchGetFindings: StaticOperationSchema = [
  9,
  n0,
  _BGF,
  { [_ht]: ["POST", "/batchGetFindings", 200] },
  () => BatchGetFindingsRequest,
  () => BatchGetFindingsResponse,
];
export var CreateScan: StaticOperationSchema = [
  9,
  n0,
  _CSr,
  { [_ht]: ["POST", "/scans", 200] },
  () => CreateScanRequest,
  () => CreateScanResponse,
];
export var CreateUploadUrl: StaticOperationSchema = [
  9,
  n0,
  _CUU,
  { [_ht]: ["POST", "/uploadUrl", 200] },
  () => CreateUploadUrlRequest,
  () => CreateUploadUrlResponse,
];
export var GetAccountConfiguration: StaticOperationSchema = [
  9,
  n0,
  _GAC,
  { [_ht]: ["GET", "/accountConfiguration/get", 200] },
  () => GetAccountConfigurationRequest,
  () => GetAccountConfigurationResponse,
];
export var GetFindings: StaticOperationSchema = [
  9,
  n0,
  _GF,
  { [_ht]: ["GET", "/findings/{scanName}", 200] },
  () => GetFindingsRequest,
  () => GetFindingsResponse,
];
export var GetMetricsSummary: StaticOperationSchema = [
  9,
  n0,
  _GMS,
  { [_ht]: ["GET", "/metrics/summary", 200] },
  () => GetMetricsSummaryRequest,
  () => GetMetricsSummaryResponse,
];
export var GetScan: StaticOperationSchema = [
  9,
  n0,
  _GS,
  { [_ht]: ["GET", "/scans/{scanName}", 200] },
  () => GetScanRequest,
  () => GetScanResponse,
];
export var ListFindingsMetrics: StaticOperationSchema = [
  9,
  n0,
  _LFM,
  { [_ht]: ["GET", "/metrics/findings", 200] },
  () => ListFindingsMetricsRequest,
  () => ListFindingsMetricsResponse,
];
export var ListScans: StaticOperationSchema = [
  9,
  n0,
  _LS,
  { [_ht]: ["GET", "/scans", 200] },
  () => ListScansRequest,
  () => ListScansResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_ht]: ["GET", "/tags/{resourceArn}", 200] },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_ht]: ["POST", "/tags/{resourceArn}", 204] },
  () => TagResourceRequest,
  () => TagResourceResponse,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_ht]: ["DELETE", "/tags/{resourceArn}", 204] },
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateAccountConfiguration: StaticOperationSchema = [
  9,
  n0,
  _UAC,
  { [_ht]: ["PUT", "/updateAccountConfiguration", 200] },
  () => UpdateAccountConfigurationRequest,
  () => UpdateAccountConfigurationResponse,
];

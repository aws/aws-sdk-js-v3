const _AC = "AmpConfiguration";
const _ADC = "AnomalyDetectorConfiguration";
const _ADD = "AnomalyDetectorDescription";
const _ADE = "AccessDeniedException";
const _ADMDA = "AnomalyDetectorMissingDataAction";
const _ADS = "AnomalyDetectorStatus";
const _ADSL = "AnomalyDetectorSummaryList";
const _ADSn = "AnomalyDetectorSummary";
const _AMDD = "AlertManagerDefinitionDescription";
const _AMDS = "AlertManagerDefinitionStatus";
const _CAD = "CreateAnomalyDetector";
const _CADR = "CreateAnomalyDetectorRequest";
const _CADRr = "CreateAnomalyDetectorResponse";
const _CAMD = "CreateAlertManagerDefinition";
const _CAMDR = "CreateAlertManagerDefinitionRequest";
const _CAMDRr = "CreateAlertManagerDefinitionResponse";
const _CC = "ComponentConfig";
const _CE = "ConflictException";
const _CLC = "CreateLoggingConfiguration";
const _CLCR = "CreateLoggingConfigurationRequest";
const _CLCRr = "CreateLoggingConfigurationResponse";
const _CQLC = "CreateQueryLoggingConfiguration";
const _CQLCR = "CreateQueryLoggingConfigurationRequest";
const _CQLCRr = "CreateQueryLoggingConfigurationResponse";
const _CRGN = "CreateRuleGroupsNamespace";
const _CRGNR = "CreateRuleGroupsNamespaceRequest";
const _CRGNRr = "CreateRuleGroupsNamespaceResponse";
const _CS = "CreateScraper";
const _CSR = "CreateScraperRequest";
const _CSRr = "CreateScraperResponse";
const _CW = "CreateWorkspace";
const _CWLD = "CloudWatchLogDestination";
const _CWR = "CreateWorkspaceRequest";
const _CWRr = "CreateWorkspaceResponse";
const _D = "Destination";
const _DAD = "DeleteAnomalyDetector";
const _DADR = "DeleteAnomalyDetectorRequest";
const _DADRe = "DescribeAnomalyDetectorRequest";
const _DADRes = "DescribeAnomalyDetectorResponse";
const _DADe = "DescribeAnomalyDetector";
const _DAMD = "DeleteAlertManagerDefinition";
const _DAMDR = "DeleteAlertManagerDefinitionRequest";
const _DAMDRe = "DescribeAlertManagerDefinitionRequest";
const _DAMDRes = "DescribeAlertManagerDefinitionResponse";
const _DAMDe = "DescribeAlertManagerDefinition";
const _DLC = "DeleteLoggingConfiguration";
const _DLCR = "DeleteLoggingConfigurationRequest";
const _DLCRe = "DescribeLoggingConfigurationRequest";
const _DLCRes = "DescribeLoggingConfigurationResponse";
const _DLCe = "DescribeLoggingConfiguration";
const _DQLC = "DeleteQueryLoggingConfiguration";
const _DQLCR = "DeleteQueryLoggingConfigurationRequest";
const _DQLCRe = "DescribeQueryLoggingConfigurationRequest";
const _DQLCRes = "DescribeQueryLoggingConfigurationResponse";
const _DQLCe = "DescribeQueryLoggingConfiguration";
const _DRGN = "DeleteRuleGroupsNamespace";
const _DRGNR = "DeleteRuleGroupsNamespaceRequest";
const _DRGNRe = "DescribeRuleGroupsNamespaceRequest";
const _DRGNRes = "DescribeRuleGroupsNamespaceResponse";
const _DRGNe = "DescribeRuleGroupsNamespace";
const _DRP = "DeleteResourcePolicy";
const _DRPR = "DeleteResourcePolicyRequest";
const _DRPRe = "DescribeResourcePolicyRequest";
const _DRPRes = "DescribeResourcePolicyResponse";
const _DRPe = "DescribeResourcePolicy";
const _DS = "DeleteScraper";
const _DSLC = "DeleteScraperLoggingConfiguration";
const _DSLCR = "DeleteScraperLoggingConfigurationRequest";
const _DSLCRe = "DescribeScraperLoggingConfigurationRequest";
const _DSLCRes = "DescribeScraperLoggingConfigurationResponse";
const _DSLCe = "DescribeScraperLoggingConfiguration";
const _DSR = "DeleteScraperRequest";
const _DSRe = "DeleteScraperResponse";
const _DSRes = "DescribeScraperRequest";
const _DSResc = "DescribeScraperResponse";
const _DSe = "DescribeScraper";
const _DW = "DeleteWorkspace";
const _DWC = "DescribeWorkspaceConfiguration";
const _DWCR = "DescribeWorkspaceConfigurationRequest";
const _DWCRe = "DescribeWorkspaceConfigurationResponse";
const _DWR = "DeleteWorkspaceRequest";
const _DWRe = "DescribeWorkspaceRequest";
const _DWRes = "DescribeWorkspaceResponse";
const _DWe = "DescribeWorkspace";
const _EC = "EksConfiguration";
const _GDSC = "GetDefaultScraperConfiguration";
const _GDSCR = "GetDefaultScraperConfigurationRequest";
const _GDSCRe = "GetDefaultScraperConfigurationResponse";
const _INE = "IgnoreNearExpected";
const _ISE = "InternalServerException";
const _LAD = "ListAnomalyDetectors";
const _LADR = "ListAnomalyDetectorsRequest";
const _LADRi = "ListAnomalyDetectorsResponse";
const _LCM = "LoggingConfigurationMetadata";
const _LCS = "LoggingConfigurationStatus";
const _LD = "LoggingDestination";
const _LDo = "LoggingDestinations";
const _LF = "LoggingFilter";
const _LPLS = "LimitsPerLabelSet";
const _LPLSE = "LimitsPerLabelSetEntry";
const _LPLSL = "LimitsPerLabelSetList";
const _LRGN = "ListRuleGroupsNamespaces";
const _LRGNR = "ListRuleGroupsNamespacesRequest";
const _LRGNRi = "ListRuleGroupsNamespacesResponse";
const _LS = "ListScrapers";
const _LSR = "ListScrapersRequest";
const _LSRi = "ListScrapersResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _LW = "ListWorkspaces";
const _LWR = "ListWorkspacesRequest";
const _LWRi = "ListWorkspacesResponse";
const _PAD = "PutAnomalyDetector";
const _PADR = "PutAnomalyDetectorRequest";
const _PADRu = "PutAnomalyDetectorResponse";
const _PAMD = "PutAlertManagerDefinition";
const _PAMDR = "PutAlertManagerDefinitionRequest";
const _PAMDRu = "PutAlertManagerDefinitionResponse";
const _PRGN = "PutRuleGroupsNamespace";
const _PRGNR = "PutRuleGroupsNamespaceRequest";
const _PRGNRu = "PutRuleGroupsNamespaceResponse";
const _PRP = "PutResourcePolicy";
const _PRPR = "PutResourcePolicyRequest";
const _PRPRu = "PutResourcePolicyResponse";
const _QLCM = "QueryLoggingConfigurationMetadata";
const _QLCS = "QueryLoggingConfigurationStatus";
const _RA = "Retry-After";
const _RC = "RoleConfiguration";
const _RCFC = "RandomCutForestConfiguration";
const _RGND = "RuleGroupsNamespaceDescription";
const _RGNS = "RuleGroupsNamespaceStatus";
const _RGNSL = "RuleGroupsNamespaceSummaryList";
const _RGNSu = "RuleGroupsNamespaceSummary";
const _RNFE = "ResourceNotFoundException";
const _S = "Source";
const _SC = "ScraperComponent";
const _SCc = "ScraperComponents";
const _SCcr = "ScrapeConfiguration";
const _SD = "ScraperDescription";
const _SF = "ScraperFilters";
const _SLCS = "ScraperLoggingConfigurationStatus";
const _SLD = "ScraperLoggingDestination";
const _SQEE = "ServiceQuotaExceededException";
const _SS = "ScraperStatus";
const _SSL = "ScraperSummaryList";
const _SSc = "ScraperSummary";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _ULC = "UpdateLoggingConfiguration";
const _ULCR = "UpdateLoggingConfigurationRequest";
const _ULCRp = "UpdateLoggingConfigurationResponse";
const _UQLC = "UpdateQueryLoggingConfiguration";
const _UQLCR = "UpdateQueryLoggingConfigurationRequest";
const _UQLCRp = "UpdateQueryLoggingConfigurationResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _US = "UpdateScraper";
const _USLC = "UpdateScraperLoggingConfiguration";
const _USLCR = "UpdateScraperLoggingConfigurationRequest";
const _USLCRp = "UpdateScraperLoggingConfigurationResponse";
const _USR = "UpdateScraperRequest";
const _USRp = "UpdateScraperResponse";
const _UWA = "UpdateWorkspaceAlias";
const _UWAR = "UpdateWorkspaceAliasRequest";
const _UWC = "UpdateWorkspaceConfiguration";
const _UWCR = "UpdateWorkspaceConfigurationRequest";
const _UWCRp = "UpdateWorkspaceConfigurationResponse";
const _VC = "VpcConfiguration";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _WCD = "WorkspaceConfigurationDescription";
const _WCS = "WorkspaceConfigurationStatus";
const _WD = "WorkspaceDescription";
const _WS = "WorkspaceStatus";
const _WSL = "WorkspaceSummaryList";
const _WSo = "WorkspaceSummary";
const _a = "arn";
const _aC = "ampConfiguration";
const _aD = "anomalyDetector";
const _aDI = "anomalyDetectorId";
const _aDn = "anomalyDetectors";
const _aMD = "alertManagerDefinition";
const _al = "alias";
const _am = "amount";
const _c = "client";
const _cA = "createdAt";
const _cAl = "clusterArn";
const _cB = "configurationBlob";
const _cT = "clientToken";
const _cWL = "cloudWatchLogs";
const _co = "configuration";
const _con = "config";
const _d = "data";
const _de = "destinations";
const _des = "destination";
const _e = "error";
const _eC = "eksConfiguration";
const _eIIS = "evaluationIntervalInSeconds";
const _f = "filters";
const _fL = "fieldList";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _iNEFA = "ignoreNearExpectedFromAbove";
const _iNEFB = "ignoreNearExpectedFromBelow";
const _iT = "idempotencyToken";
const _kKA = "kmsKeyArn";
const _l = "labels";
const _lC = "loggingConfiguration";
const _lD = "loggingDestination";
const _lGA = "logGroupArn";
const _lMA = "lastModifiedAt";
const _lPLS = "limitsPerLabelSet";
const _lS = "labelSet";
const _li = "limits";
const _m = "message";
const _mA = "modifiedAt";
const _mAA = "markAsAnomaly";
const _mDA = "missingDataAction";
const _mR = "maxResults";
const _mS = "maxSeries";
const _n = "name";
const _nT = "nextToken";
const _o = "options";
const _pD = "policyDocument";
const _pE = "prometheusEndpoint";
const _pS = "policyStatus";
const _q = "query";
const _qC = "quotaCode";
const _qLC = "queryLoggingConfiguration";
const _qT = "qspThreshold";
const _r = "reason";
const _rA = "resourceArn";
const _rAS = "retryAfterSeconds";
const _rAo = "roleArn";
const _rC = "roleConfiguration";
const _rCF = "randomCutForest";
const _rGN = "ruleGroupsNamespace";
const _rGNu = "ruleGroupsNamespaces";
const _rI = "resourceId";
const _rIe = "revisionId";
const _rPID = "retentionPeriodInDays";
const _rT = "resourceType";
const _ra = "ratio";
const _s = "status";
const _sC = "statusCode";
const _sCc = "scrapeConfiguration";
const _sCcr = "scraperComponents";
const _sCe = "serviceCode";
const _sGI = "securityGroupIds";
const _sI = "scraperId";
const _sIu = "subnetIds";
const _sR = "statusReason";
const _sRA = "sourceRoleArn";
const _sS = "shingleSize";
const _sSa = "sampleSize";
const _sc = "scraper";
const _scr = "scrapers";
const _se = "server";
const _sk = "skip";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.amp";
const _so = "source";
const _t = "tags";
const _tK = "tagKeys";
const _tRA = "targetRoleArn";
const _ty = "type";
const _vC = "vpcConfiguration";
const _w = "workspace";
const _wA = "workspaceArn";
const _wC = "workspaceConfiguration";
const _wI = "workspaceId";
const _wo = "workspaces";
const n0 = "com.amazonaws.amp";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { AmpServiceException } from "../models/AmpServiceException";
import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var AlertManagerDefinitionDescription$: StaticStructureSchema = [
  3,
  n0,
  _AMDD,
  0,
  [_s, _d, _cA, _mA],
  [() => AlertManagerDefinitionStatus$, 21, 4, 4],
];
export var AlertManagerDefinitionStatus$: StaticStructureSchema = [3, n0, _AMDS, 0, [_sC, _sR], [0, 0]];
export var AmpConfiguration$: StaticStructureSchema = [3, n0, _AC, 0, [_wA], [0]];
export var AnomalyDetectorDescription$: StaticStructureSchema = [
  3,
  n0,
  _ADD,
  0,
  [_a, _aDI, _al, _eIIS, _mDA, _co, _l, _s, _cA, _mA, _t],
  [
    0,
    0,
    0,
    1,
    () => AnomalyDetectorMissingDataAction$,
    () => AnomalyDetectorConfiguration$,
    128 | 0,
    () => AnomalyDetectorStatus$,
    4,
    4,
    128 | 0,
  ],
];
export var AnomalyDetectorStatus$: StaticStructureSchema = [3, n0, _ADS, 0, [_sC, _sR], [0, 0]];
export var AnomalyDetectorSummary$: StaticStructureSchema = [
  3,
  n0,
  _ADSn,
  0,
  [_a, _aDI, _al, _s, _cA, _mA, _t],
  [0, 0, 0, () => AnomalyDetectorStatus$, 4, 4, 128 | 0],
];
export var CloudWatchLogDestination$: StaticStructureSchema = [3, n0, _CWLD, 0, [_lGA], [0]];
export var ComponentConfig$: StaticStructureSchema = [3, n0, _CC, 0, [_o], [128 | 0]];
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_m, _rI, _rT], [0, 0, 0]];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var CreateAlertManagerDefinitionRequest$: StaticStructureSchema = [
  3,
  n0,
  _CAMDR,
  0,
  [_wI, _d, _cT],
  [[0, 1], 21, [0, 4]],
];
export var CreateAlertManagerDefinitionResponse$: StaticStructureSchema = [
  3,
  n0,
  _CAMDRr,
  0,
  [_s],
  [() => AlertManagerDefinitionStatus$],
];
export var CreateAnomalyDetectorRequest$: StaticStructureSchema = [
  3,
  n0,
  _CADR,
  0,
  [_wI, _al, _eIIS, _mDA, _co, _l, _cT, _t],
  [
    [0, 1],
    0,
    1,
    () => AnomalyDetectorMissingDataAction$,
    () => AnomalyDetectorConfiguration$,
    128 | 0,
    [0, 4],
    128 | 0,
  ],
];
export var CreateAnomalyDetectorResponse$: StaticStructureSchema = [
  3,
  n0,
  _CADRr,
  0,
  [_aDI, _a, _s, _t],
  [0, 0, () => AnomalyDetectorStatus$, 128 | 0],
];
export var CreateLoggingConfigurationRequest$: StaticStructureSchema = [
  3,
  n0,
  _CLCR,
  0,
  [_wI, _lGA, _cT],
  [[0, 1], 0, [0, 4]],
];
export var CreateLoggingConfigurationResponse$: StaticStructureSchema = [
  3,
  n0,
  _CLCRr,
  0,
  [_s],
  [() => LoggingConfigurationStatus$],
];
export var CreateQueryLoggingConfigurationRequest$: StaticStructureSchema = [
  3,
  n0,
  _CQLCR,
  0,
  [_wI, _de, _cT],
  [[0, 1], () => LoggingDestinations, [0, 4]],
];
export var CreateQueryLoggingConfigurationResponse$: StaticStructureSchema = [
  3,
  n0,
  _CQLCRr,
  0,
  [_s],
  [() => QueryLoggingConfigurationStatus$],
];
export var CreateRuleGroupsNamespaceRequest$: StaticStructureSchema = [
  3,
  n0,
  _CRGNR,
  0,
  [_wI, _n, _d, _cT, _t],
  [[0, 1], 0, 21, [0, 4], 128 | 0],
];
export var CreateRuleGroupsNamespaceResponse$: StaticStructureSchema = [
  3,
  n0,
  _CRGNRr,
  0,
  [_n, _a, _s, _t],
  [0, 0, () => RuleGroupsNamespaceStatus$, 128 | 0],
];
export var CreateScraperRequest$: StaticStructureSchema = [
  3,
  n0,
  _CSR,
  0,
  [_al, _sCc, _so, _des, _rC, _cT, _t],
  [0, () => ScrapeConfiguration$, () => Source$, () => Destination$, () => RoleConfiguration$, [0, 4], 128 | 0],
];
export var CreateScraperResponse$: StaticStructureSchema = [
  3,
  n0,
  _CSRr,
  0,
  [_sI, _a, _s, _t],
  [0, 0, () => ScraperStatus$, 128 | 0],
];
export var CreateWorkspaceRequest$: StaticStructureSchema = [
  3,
  n0,
  _CWR,
  0,
  [_al, _cT, _t, _kKA],
  [0, [0, 4], 128 | 0, 0],
];
export var CreateWorkspaceResponse$: StaticStructureSchema = [
  3,
  n0,
  _CWRr,
  0,
  [_wI, _a, _s, _t, _kKA],
  [0, 0, () => WorkspaceStatus$, 128 | 0, 0],
];
export var DeleteAlertManagerDefinitionRequest$: StaticStructureSchema = [
  3,
  n0,
  _DAMDR,
  0,
  [_wI, _cT],
  [
    [0, 1],
    [0, { [_iT]: 1, [_hQ]: _cT }],
  ],
];
export var DeleteAnomalyDetectorRequest$: StaticStructureSchema = [
  3,
  n0,
  _DADR,
  0,
  [_wI, _aDI, _cT],
  [
    [0, 1],
    [0, 1],
    [0, { [_iT]: 1, [_hQ]: _cT }],
  ],
];
export var DeleteLoggingConfigurationRequest$: StaticStructureSchema = [
  3,
  n0,
  _DLCR,
  0,
  [_wI, _cT],
  [
    [0, 1],
    [0, { [_iT]: 1, [_hQ]: _cT }],
  ],
];
export var DeleteQueryLoggingConfigurationRequest$: StaticStructureSchema = [
  3,
  n0,
  _DQLCR,
  0,
  [_wI, _cT],
  [
    [0, 1],
    [0, { [_iT]: 1, [_hQ]: _cT }],
  ],
];
export var DeleteResourcePolicyRequest$: StaticStructureSchema = [
  3,
  n0,
  _DRPR,
  0,
  [_wI, _cT, _rIe],
  [
    [0, 1],
    [0, { [_iT]: 1, [_hQ]: _cT }],
    [0, { [_hQ]: _rIe }],
  ],
];
export var DeleteRuleGroupsNamespaceRequest$: StaticStructureSchema = [
  3,
  n0,
  _DRGNR,
  0,
  [_wI, _n, _cT],
  [
    [0, 1],
    [0, 1],
    [0, { [_iT]: 1, [_hQ]: _cT }],
  ],
];
export var DeleteScraperLoggingConfigurationRequest$: StaticStructureSchema = [
  3,
  n0,
  _DSLCR,
  0,
  [_sI, _cT],
  [
    [0, 1],
    [0, { [_iT]: 1, [_hQ]: _cT }],
  ],
];
export var DeleteScraperRequest$: StaticStructureSchema = [
  3,
  n0,
  _DSR,
  0,
  [_sI, _cT],
  [
    [0, 1],
    [0, { [_iT]: 1, [_hQ]: _cT }],
  ],
];
export var DeleteScraperResponse$: StaticStructureSchema = [3, n0, _DSRe, 0, [_sI, _s], [0, () => ScraperStatus$]];
export var DeleteWorkspaceRequest$: StaticStructureSchema = [
  3,
  n0,
  _DWR,
  0,
  [_wI, _cT],
  [
    [0, 1],
    [0, { [_iT]: 1, [_hQ]: _cT }],
  ],
];
export var DescribeAlertManagerDefinitionRequest$: StaticStructureSchema = [3, n0, _DAMDRe, 0, [_wI], [[0, 1]]];
export var DescribeAlertManagerDefinitionResponse$: StaticStructureSchema = [
  3,
  n0,
  _DAMDRes,
  0,
  [_aMD],
  [() => AlertManagerDefinitionDescription$],
];
export var DescribeAnomalyDetectorRequest$: StaticStructureSchema = [
  3,
  n0,
  _DADRe,
  0,
  [_wI, _aDI],
  [
    [0, 1],
    [0, 1],
  ],
];
export var DescribeAnomalyDetectorResponse$: StaticStructureSchema = [
  3,
  n0,
  _DADRes,
  0,
  [_aD],
  [() => AnomalyDetectorDescription$],
];
export var DescribeLoggingConfigurationRequest$: StaticStructureSchema = [3, n0, _DLCRe, 0, [_wI], [[0, 1]]];
export var DescribeLoggingConfigurationResponse$: StaticStructureSchema = [
  3,
  n0,
  _DLCRes,
  0,
  [_lC],
  [() => LoggingConfigurationMetadata$],
];
export var DescribeQueryLoggingConfigurationRequest$: StaticStructureSchema = [3, n0, _DQLCRe, 0, [_wI], [[0, 1]]];
export var DescribeQueryLoggingConfigurationResponse$: StaticStructureSchema = [
  3,
  n0,
  _DQLCRes,
  0,
  [_qLC],
  [() => QueryLoggingConfigurationMetadata$],
];
export var DescribeResourcePolicyRequest$: StaticStructureSchema = [3, n0, _DRPRe, 0, [_wI], [[0, 1]]];
export var DescribeResourcePolicyResponse$: StaticStructureSchema = [3, n0, _DRPRes, 0, [_pD, _pS, _rIe], [0, 0, 0]];
export var DescribeRuleGroupsNamespaceRequest$: StaticStructureSchema = [
  3,
  n0,
  _DRGNRe,
  0,
  [_wI, _n],
  [
    [0, 1],
    [0, 1],
  ],
];
export var DescribeRuleGroupsNamespaceResponse$: StaticStructureSchema = [
  3,
  n0,
  _DRGNRes,
  0,
  [_rGN],
  [() => RuleGroupsNamespaceDescription$],
];
export var DescribeScraperLoggingConfigurationRequest$: StaticStructureSchema = [3, n0, _DSLCRe, 0, [_sI], [[0, 1]]];
export var DescribeScraperLoggingConfigurationResponse$: StaticStructureSchema = [
  3,
  n0,
  _DSLCRes,
  0,
  [_s, _sI, _lD, _sCcr, _mA],
  [() => ScraperLoggingConfigurationStatus$, 0, () => ScraperLoggingDestination$, () => ScraperComponents, 4],
];
export var DescribeScraperRequest$: StaticStructureSchema = [3, n0, _DSRes, 0, [_sI], [[0, 1]]];
export var DescribeScraperResponse$: StaticStructureSchema = [3, n0, _DSResc, 0, [_sc], [() => ScraperDescription$]];
export var DescribeWorkspaceConfigurationRequest$: StaticStructureSchema = [3, n0, _DWCR, 0, [_wI], [[0, 1]]];
export var DescribeWorkspaceConfigurationResponse$: StaticStructureSchema = [
  3,
  n0,
  _DWCRe,
  0,
  [_wC],
  [() => WorkspaceConfigurationDescription$],
];
export var DescribeWorkspaceRequest$: StaticStructureSchema = [3, n0, _DWRe, 0, [_wI], [[0, 1]]];
export var DescribeWorkspaceResponse$: StaticStructureSchema = [3, n0, _DWRes, 0, [_w], [() => WorkspaceDescription$]];
export var EksConfiguration$: StaticStructureSchema = [3, n0, _EC, 0, [_cAl, _sGI, _sIu], [0, 64 | 0, 64 | 0]];
export var GetDefaultScraperConfigurationRequest$: StaticStructureSchema = [3, n0, _GDSCR, 0, [], []];
export var GetDefaultScraperConfigurationResponse$: StaticStructureSchema = [3, n0, _GDSCRe, 0, [_co], [21]];
export var InternalServerException$: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m, _rAS],
  [0, [1, { [_hH]: _RA }]],
];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var LimitsPerLabelSet$: StaticStructureSchema = [
  3,
  n0,
  _LPLS,
  0,
  [_li, _lS],
  [() => LimitsPerLabelSetEntry$, 128 | 0],
];
export var LimitsPerLabelSetEntry$: StaticStructureSchema = [3, n0, _LPLSE, 0, [_mS], [1]];
export var ListAnomalyDetectorsRequest$: StaticStructureSchema = [
  3,
  n0,
  _LADR,
  0,
  [_wI, _al, _mR, _nT],
  [
    [0, 1],
    [0, { [_hQ]: _al }],
    [1, { [_hQ]: _mR }],
    [0, { [_hQ]: _nT }],
  ],
];
export var ListAnomalyDetectorsResponse$: StaticStructureSchema = [
  3,
  n0,
  _LADRi,
  0,
  [_aDn, _nT],
  [() => AnomalyDetectorSummaryList, 0],
];
export var ListRuleGroupsNamespacesRequest$: StaticStructureSchema = [
  3,
  n0,
  _LRGNR,
  0,
  [_wI, _n, _nT, _mR],
  [
    [0, 1],
    [0, { [_hQ]: _n }],
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
  ],
];
export var ListRuleGroupsNamespacesResponse$: StaticStructureSchema = [
  3,
  n0,
  _LRGNRi,
  0,
  [_rGNu, _nT],
  [() => RuleGroupsNamespaceSummaryList, 0],
];
export var ListScrapersRequest$: StaticStructureSchema = [
  3,
  n0,
  _LSR,
  0,
  [_f, _nT, _mR],
  [
    [[2, n0, _SF, 0, 0, 64 | 0], 64],
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
  ],
];
export var ListScrapersResponse$: StaticStructureSchema = [3, n0, _LSRi, 0, [_scr, _nT], [() => ScraperSummaryList, 0]];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rA], [[0, 1]]];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_t], [128 | 0]];
export var ListWorkspacesRequest$: StaticStructureSchema = [
  3,
  n0,
  _LWR,
  0,
  [_nT, _al, _mR],
  [
    [0, { [_hQ]: _nT }],
    [0, { [_hQ]: _al }],
    [1, { [_hQ]: _mR }],
  ],
];
export var ListWorkspacesResponse$: StaticStructureSchema = [
  3,
  n0,
  _LWRi,
  0,
  [_wo, _nT],
  [() => WorkspaceSummaryList, 0],
];
export var LoggingConfigurationMetadata$: StaticStructureSchema = [
  3,
  n0,
  _LCM,
  0,
  [_s, _w, _lGA, _cA, _mA],
  [() => LoggingConfigurationStatus$, 0, 0, 4, 4],
];
export var LoggingConfigurationStatus$: StaticStructureSchema = [3, n0, _LCS, 0, [_sC, _sR], [0, 0]];
export var LoggingDestination$: StaticStructureSchema = [
  3,
  n0,
  _LD,
  0,
  [_cWL, _f],
  [() => CloudWatchLogDestination$, () => LoggingFilter$],
];
export var LoggingFilter$: StaticStructureSchema = [3, n0, _LF, 0, [_qT], [1]];
export var PutAlertManagerDefinitionRequest$: StaticStructureSchema = [
  3,
  n0,
  _PAMDR,
  0,
  [_wI, _d, _cT],
  [[0, 1], 21, [0, 4]],
];
export var PutAlertManagerDefinitionResponse$: StaticStructureSchema = [
  3,
  n0,
  _PAMDRu,
  0,
  [_s],
  [() => AlertManagerDefinitionStatus$],
];
export var PutAnomalyDetectorRequest$: StaticStructureSchema = [
  3,
  n0,
  _PADR,
  0,
  [_wI, _aDI, _eIIS, _mDA, _co, _l, _cT],
  [[0, 1], [0, 1], 1, () => AnomalyDetectorMissingDataAction$, () => AnomalyDetectorConfiguration$, 128 | 0, [0, 4]],
];
export var PutAnomalyDetectorResponse$: StaticStructureSchema = [
  3,
  n0,
  _PADRu,
  0,
  [_aDI, _a, _s, _t],
  [0, 0, () => AnomalyDetectorStatus$, 128 | 0],
];
export var PutResourcePolicyRequest$: StaticStructureSchema = [
  3,
  n0,
  _PRPR,
  0,
  [_wI, _pD, _cT, _rIe],
  [[0, 1], 0, [0, 4], 0],
];
export var PutResourcePolicyResponse$: StaticStructureSchema = [3, n0, _PRPRu, 0, [_pS, _rIe], [0, 0]];
export var PutRuleGroupsNamespaceRequest$: StaticStructureSchema = [
  3,
  n0,
  _PRGNR,
  0,
  [_wI, _n, _d, _cT],
  [[0, 1], [0, 1], 21, [0, 4]],
];
export var PutRuleGroupsNamespaceResponse$: StaticStructureSchema = [
  3,
  n0,
  _PRGNRu,
  0,
  [_n, _a, _s, _t],
  [0, 0, () => RuleGroupsNamespaceStatus$, 128 | 0],
];
export var QueryLoggingConfigurationMetadata$: StaticStructureSchema = [
  3,
  n0,
  _QLCM,
  0,
  [_s, _w, _de, _cA, _mA],
  [() => QueryLoggingConfigurationStatus$, 0, () => LoggingDestinations, 4, 4],
];
export var QueryLoggingConfigurationStatus$: StaticStructureSchema = [3, n0, _QLCS, 0, [_sC, _sR], [0, 0]];
export var RandomCutForestConfiguration$: StaticStructureSchema = [
  3,
  n0,
  _RCFC,
  0,
  [_q, _sS, _sSa, _iNEFA, _iNEFB],
  [0, 1, 1, () => IgnoreNearExpected$, () => IgnoreNearExpected$],
];
export var ResourceNotFoundException$: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var RoleConfiguration$: StaticStructureSchema = [3, n0, _RC, 0, [_sRA, _tRA], [0, 0]];
export var RuleGroupsNamespaceDescription$: StaticStructureSchema = [
  3,
  n0,
  _RGND,
  0,
  [_a, _n, _s, _d, _cA, _mA, _t],
  [0, 0, () => RuleGroupsNamespaceStatus$, 21, 4, 4, 128 | 0],
];
export var RuleGroupsNamespaceStatus$: StaticStructureSchema = [3, n0, _RGNS, 0, [_sC, _sR], [0, 0]];
export var RuleGroupsNamespaceSummary$: StaticStructureSchema = [
  3,
  n0,
  _RGNSu,
  0,
  [_a, _n, _s, _cA, _mA, _t],
  [0, 0, () => RuleGroupsNamespaceStatus$, 4, 4, 128 | 0],
];
export var ScraperComponent$: StaticStructureSchema = [3, n0, _SC, 0, [_ty, _con], [0, () => ComponentConfig$]];
export var ScraperDescription$: StaticStructureSchema = [
  3,
  n0,
  _SD,
  0,
  [_al, _sI, _a, _rAo, _s, _cA, _lMA, _t, _sR, _sCc, _so, _des, _rC],
  [
    0,
    0,
    0,
    0,
    () => ScraperStatus$,
    4,
    4,
    128 | 0,
    0,
    () => ScrapeConfiguration$,
    () => Source$,
    () => Destination$,
    () => RoleConfiguration$,
  ],
];
export var ScraperLoggingConfigurationStatus$: StaticStructureSchema = [3, n0, _SLCS, 0, [_sC, _sR], [0, 0]];
export var ScraperStatus$: StaticStructureSchema = [3, n0, _SS, 0, [_sC], [0]];
export var ScraperSummary$: StaticStructureSchema = [
  3,
  n0,
  _SSc,
  0,
  [_al, _sI, _a, _rAo, _s, _cA, _lMA, _t, _sR, _so, _des, _rC],
  [0, 0, 0, 0, () => ScraperStatus$, 4, 4, 128 | 0, 0, () => Source$, () => Destination$, () => RoleConfiguration$],
];
export var ServiceQuotaExceededException$: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m, _rI, _rT, _sCe, _qC],
  [0, 0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR, 0, [_rA, _t], [[0, 1], 128 | 0]];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException$: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _sCe, _qC, _rAS],
  [0, 0, 0, [1, { [_hH]: _RA }]],
];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var UntagResourceRequest$: StaticStructureSchema = [
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
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateLoggingConfigurationRequest$: StaticStructureSchema = [
  3,
  n0,
  _ULCR,
  0,
  [_wI, _lGA, _cT],
  [[0, 1], 0, [0, 4]],
];
export var UpdateLoggingConfigurationResponse$: StaticStructureSchema = [
  3,
  n0,
  _ULCRp,
  0,
  [_s],
  [() => LoggingConfigurationStatus$],
];
export var UpdateQueryLoggingConfigurationRequest$: StaticStructureSchema = [
  3,
  n0,
  _UQLCR,
  0,
  [_wI, _de, _cT],
  [[0, 1], () => LoggingDestinations, [0, 4]],
];
export var UpdateQueryLoggingConfigurationResponse$: StaticStructureSchema = [
  3,
  n0,
  _UQLCRp,
  0,
  [_s],
  [() => QueryLoggingConfigurationStatus$],
];
export var UpdateScraperLoggingConfigurationRequest$: StaticStructureSchema = [
  3,
  n0,
  _USLCR,
  0,
  [_sI, _lD, _sCcr],
  [[0, 1], () => ScraperLoggingDestination$, () => ScraperComponents],
];
export var UpdateScraperLoggingConfigurationResponse$: StaticStructureSchema = [
  3,
  n0,
  _USLCRp,
  0,
  [_s],
  [() => ScraperLoggingConfigurationStatus$],
];
export var UpdateScraperRequest$: StaticStructureSchema = [
  3,
  n0,
  _USR,
  0,
  [_sI, _al, _sCc, _des, _rC, _cT],
  [[0, 1], 0, () => ScrapeConfiguration$, () => Destination$, () => RoleConfiguration$, [0, 4]],
];
export var UpdateScraperResponse$: StaticStructureSchema = [
  3,
  n0,
  _USRp,
  0,
  [_sI, _a, _s, _t],
  [0, 0, () => ScraperStatus$, 128 | 0],
];
export var UpdateWorkspaceAliasRequest$: StaticStructureSchema = [
  3,
  n0,
  _UWAR,
  0,
  [_wI, _al, _cT],
  [[0, 1], 0, [0, 4]],
];
export var UpdateWorkspaceConfigurationRequest$: StaticStructureSchema = [
  3,
  n0,
  _UWCR,
  0,
  [_wI, _cT, _lPLS, _rPID],
  [[0, 1], [0, 4], () => LimitsPerLabelSetList, 1],
];
export var UpdateWorkspaceConfigurationResponse$: StaticStructureSchema = [
  3,
  n0,
  _UWCRp,
  0,
  [_s],
  [() => WorkspaceConfigurationStatus$],
];
export var ValidationException$: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var ValidationExceptionField$: StaticStructureSchema = [3, n0, _VEF, 0, [_n, _m], [0, 0]];
export var VpcConfiguration$: StaticStructureSchema = [3, n0, _VC, 0, [_sGI, _sIu], [64 | 0, 64 | 0]];
export var WorkspaceConfigurationDescription$: StaticStructureSchema = [
  3,
  n0,
  _WCD,
  0,
  [_s, _lPLS, _rPID],
  [() => WorkspaceConfigurationStatus$, () => LimitsPerLabelSetList, 1],
];
export var WorkspaceConfigurationStatus$: StaticStructureSchema = [3, n0, _WCS, 0, [_sC, _sR], [0, 0]];
export var WorkspaceDescription$: StaticStructureSchema = [
  3,
  n0,
  _WD,
  0,
  [_wI, _al, _a, _s, _pE, _cA, _t, _kKA],
  [0, 0, 0, () => WorkspaceStatus$, 0, 4, 128 | 0, 0],
];
export var WorkspaceStatus$: StaticStructureSchema = [3, n0, _WS, 0, [_sC], [0]];
export var WorkspaceSummary$: StaticStructureSchema = [
  3,
  n0,
  _WSo,
  0,
  [_wI, _al, _a, _s, _cA, _t, _kKA],
  [0, 0, 0, () => WorkspaceStatus$, 4, 128 | 0, 0],
];
var __Unit = "unit" as const;
export var AmpServiceException$: StaticErrorSchema = [-3, _sm, "AmpServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(AmpServiceException$, AmpServiceException);
var AnomalyDetectorSummaryList: StaticListSchema = [1, n0, _ADSL, 0, () => AnomalyDetectorSummary$];
var FilterValues = 64 | 0;
var LimitsPerLabelSetList: StaticListSchema = [1, n0, _LPLSL, 0, () => LimitsPerLabelSet$];
var LoggingDestinations: StaticListSchema = [1, n0, _LDo, 0, () => LoggingDestination$];
var RuleGroupsNamespaceSummaryList: StaticListSchema = [1, n0, _RGNSL, 0, () => RuleGroupsNamespaceSummary$];
var ScraperComponents: StaticListSchema = [1, n0, _SCc, 0, () => ScraperComponent$];
var ScraperSummaryList: StaticListSchema = [1, n0, _SSL, 0, () => ScraperSummary$];
var SecurityGroupIds = 64 | 0;
var SubnetIds = 64 | 0;
var TagKeys = 64 | 0;
var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField$];
var WorkspaceSummaryList: StaticListSchema = [1, n0, _WSL, 0, () => WorkspaceSummary$];
var LabelSet = 128 | 0;
var PrometheusMetricLabelMap = 128 | 0;
var ScraperFilters: StaticMapSchema = [2, n0, _SF, 0, 0, 64 | 0];
var StringMap = 128 | 0;
var TagMap = 128 | 0;
export var AnomalyDetectorConfiguration$: StaticStructureSchema = [
  3,
  n0,
  _ADC,
  0,
  [_rCF],
  [() => RandomCutForestConfiguration$],
];
export var AnomalyDetectorMissingDataAction$: StaticStructureSchema = [3, n0, _ADMDA, 0, [_mAA, _sk], [2, 2]];
export var Destination$: StaticStructureSchema = [3, n0, _D, 0, [_aC], [() => AmpConfiguration$]];
export var IgnoreNearExpected$: StaticStructureSchema = [3, n0, _INE, 0, [_am, _ra], [1, 1]];
export var ScrapeConfiguration$: StaticStructureSchema = [3, n0, _SCcr, 0, [_cB], [21]];
export var ScraperLoggingDestination$: StaticStructureSchema = [
  3,
  n0,
  _SLD,
  0,
  [_cWL],
  [() => CloudWatchLogDestination$],
];
export var Source$: StaticStructureSchema = [
  3,
  n0,
  _S,
  0,
  [_eC, _vC],
  [() => EksConfiguration$, () => VpcConfiguration$],
];
export var CreateAlertManagerDefinition$: StaticOperationSchema = [
  9,
  n0,
  _CAMD,
  { [_h]: ["POST", "/workspaces/{workspaceId}/alertmanager/definition", 202] },
  () => CreateAlertManagerDefinitionRequest$,
  () => CreateAlertManagerDefinitionResponse$,
];
export var CreateAnomalyDetector$: StaticOperationSchema = [
  9,
  n0,
  _CAD,
  { [_h]: ["POST", "/workspaces/{workspaceId}/anomalydetectors", 202] },
  () => CreateAnomalyDetectorRequest$,
  () => CreateAnomalyDetectorResponse$,
];
export var CreateLoggingConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _CLC,
  { [_h]: ["POST", "/workspaces/{workspaceId}/logging", 202] },
  () => CreateLoggingConfigurationRequest$,
  () => CreateLoggingConfigurationResponse$,
];
export var CreateQueryLoggingConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _CQLC,
  { [_h]: ["POST", "/workspaces/{workspaceId}/logging/query", 202] },
  () => CreateQueryLoggingConfigurationRequest$,
  () => CreateQueryLoggingConfigurationResponse$,
];
export var CreateRuleGroupsNamespace$: StaticOperationSchema = [
  9,
  n0,
  _CRGN,
  { [_h]: ["POST", "/workspaces/{workspaceId}/rulegroupsnamespaces", 202] },
  () => CreateRuleGroupsNamespaceRequest$,
  () => CreateRuleGroupsNamespaceResponse$,
];
export var CreateScraper$: StaticOperationSchema = [
  9,
  n0,
  _CS,
  { [_h]: ["POST", "/scrapers", 202] },
  () => CreateScraperRequest$,
  () => CreateScraperResponse$,
];
export var CreateWorkspace$: StaticOperationSchema = [
  9,
  n0,
  _CW,
  { [_h]: ["POST", "/workspaces", 202] },
  () => CreateWorkspaceRequest$,
  () => CreateWorkspaceResponse$,
];
export var DeleteAlertManagerDefinition$: StaticOperationSchema = [
  9,
  n0,
  _DAMD,
  { [_h]: ["DELETE", "/workspaces/{workspaceId}/alertmanager/definition", 202] },
  () => DeleteAlertManagerDefinitionRequest$,
  () => __Unit,
];
export var DeleteAnomalyDetector$: StaticOperationSchema = [
  9,
  n0,
  _DAD,
  { [_h]: ["DELETE", "/workspaces/{workspaceId}/anomalydetectors/{anomalyDetectorId}", 202] },
  () => DeleteAnomalyDetectorRequest$,
  () => __Unit,
];
export var DeleteLoggingConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _DLC,
  { [_h]: ["DELETE", "/workspaces/{workspaceId}/logging", 202] },
  () => DeleteLoggingConfigurationRequest$,
  () => __Unit,
];
export var DeleteQueryLoggingConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _DQLC,
  { [_h]: ["DELETE", "/workspaces/{workspaceId}/logging/query", 202] },
  () => DeleteQueryLoggingConfigurationRequest$,
  () => __Unit,
];
export var DeleteResourcePolicy$: StaticOperationSchema = [
  9,
  n0,
  _DRP,
  { [_h]: ["DELETE", "/workspaces/{workspaceId}/policy", 202] },
  () => DeleteResourcePolicyRequest$,
  () => __Unit,
];
export var DeleteRuleGroupsNamespace$: StaticOperationSchema = [
  9,
  n0,
  _DRGN,
  { [_h]: ["DELETE", "/workspaces/{workspaceId}/rulegroupsnamespaces/{name}", 202] },
  () => DeleteRuleGroupsNamespaceRequest$,
  () => __Unit,
];
export var DeleteScraper$: StaticOperationSchema = [
  9,
  n0,
  _DS,
  { [_h]: ["DELETE", "/scrapers/{scraperId}", 202] },
  () => DeleteScraperRequest$,
  () => DeleteScraperResponse$,
];
export var DeleteScraperLoggingConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _DSLC,
  { [_h]: ["DELETE", "/scrapers/{scraperId}/logging-configuration", 202] },
  () => DeleteScraperLoggingConfigurationRequest$,
  () => __Unit,
];
export var DeleteWorkspace$: StaticOperationSchema = [
  9,
  n0,
  _DW,
  { [_h]: ["DELETE", "/workspaces/{workspaceId}", 202] },
  () => DeleteWorkspaceRequest$,
  () => __Unit,
];
export var DescribeAlertManagerDefinition$: StaticOperationSchema = [
  9,
  n0,
  _DAMDe,
  { [_h]: ["GET", "/workspaces/{workspaceId}/alertmanager/definition", 200] },
  () => DescribeAlertManagerDefinitionRequest$,
  () => DescribeAlertManagerDefinitionResponse$,
];
export var DescribeAnomalyDetector$: StaticOperationSchema = [
  9,
  n0,
  _DADe,
  { [_h]: ["GET", "/workspaces/{workspaceId}/anomalydetectors/{anomalyDetectorId}", 200] },
  () => DescribeAnomalyDetectorRequest$,
  () => DescribeAnomalyDetectorResponse$,
];
export var DescribeLoggingConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _DLCe,
  { [_h]: ["GET", "/workspaces/{workspaceId}/logging", 200] },
  () => DescribeLoggingConfigurationRequest$,
  () => DescribeLoggingConfigurationResponse$,
];
export var DescribeQueryLoggingConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _DQLCe,
  { [_h]: ["GET", "/workspaces/{workspaceId}/logging/query", 200] },
  () => DescribeQueryLoggingConfigurationRequest$,
  () => DescribeQueryLoggingConfigurationResponse$,
];
export var DescribeResourcePolicy$: StaticOperationSchema = [
  9,
  n0,
  _DRPe,
  { [_h]: ["GET", "/workspaces/{workspaceId}/policy", 200] },
  () => DescribeResourcePolicyRequest$,
  () => DescribeResourcePolicyResponse$,
];
export var DescribeRuleGroupsNamespace$: StaticOperationSchema = [
  9,
  n0,
  _DRGNe,
  { [_h]: ["GET", "/workspaces/{workspaceId}/rulegroupsnamespaces/{name}", 200] },
  () => DescribeRuleGroupsNamespaceRequest$,
  () => DescribeRuleGroupsNamespaceResponse$,
];
export var DescribeScraper$: StaticOperationSchema = [
  9,
  n0,
  _DSe,
  { [_h]: ["GET", "/scrapers/{scraperId}", 200] },
  () => DescribeScraperRequest$,
  () => DescribeScraperResponse$,
];
export var DescribeScraperLoggingConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _DSLCe,
  { [_h]: ["GET", "/scrapers/{scraperId}/logging-configuration", 200] },
  () => DescribeScraperLoggingConfigurationRequest$,
  () => DescribeScraperLoggingConfigurationResponse$,
];
export var DescribeWorkspace$: StaticOperationSchema = [
  9,
  n0,
  _DWe,
  { [_h]: ["GET", "/workspaces/{workspaceId}", 200] },
  () => DescribeWorkspaceRequest$,
  () => DescribeWorkspaceResponse$,
];
export var DescribeWorkspaceConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _DWC,
  { [_h]: ["GET", "/workspaces/{workspaceId}/configuration", 200] },
  () => DescribeWorkspaceConfigurationRequest$,
  () => DescribeWorkspaceConfigurationResponse$,
];
export var GetDefaultScraperConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _GDSC,
  { [_h]: ["GET", "/scraperconfiguration", 200] },
  () => GetDefaultScraperConfigurationRequest$,
  () => GetDefaultScraperConfigurationResponse$,
];
export var ListAnomalyDetectors$: StaticOperationSchema = [
  9,
  n0,
  _LAD,
  { [_h]: ["GET", "/workspaces/{workspaceId}/anomalydetectors", 200] },
  () => ListAnomalyDetectorsRequest$,
  () => ListAnomalyDetectorsResponse$,
];
export var ListRuleGroupsNamespaces$: StaticOperationSchema = [
  9,
  n0,
  _LRGN,
  { [_h]: ["GET", "/workspaces/{workspaceId}/rulegroupsnamespaces", 200] },
  () => ListRuleGroupsNamespacesRequest$,
  () => ListRuleGroupsNamespacesResponse$,
];
export var ListScrapers$: StaticOperationSchema = [
  9,
  n0,
  _LS,
  { [_h]: ["GET", "/scrapers", 200] },
  () => ListScrapersRequest$,
  () => ListScrapersResponse$,
];
export var ListTagsForResource$: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["GET", "/tags/{resourceArn}", 200] },
  () => ListTagsForResourceRequest$,
  () => ListTagsForResourceResponse$,
];
export var ListWorkspaces$: StaticOperationSchema = [
  9,
  n0,
  _LW,
  { [_h]: ["GET", "/workspaces", 200] },
  () => ListWorkspacesRequest$,
  () => ListWorkspacesResponse$,
];
export var PutAlertManagerDefinition$: StaticOperationSchema = [
  9,
  n0,
  _PAMD,
  { [_h]: ["PUT", "/workspaces/{workspaceId}/alertmanager/definition", 202] },
  () => PutAlertManagerDefinitionRequest$,
  () => PutAlertManagerDefinitionResponse$,
];
export var PutAnomalyDetector$: StaticOperationSchema = [
  9,
  n0,
  _PAD,
  { [_h]: ["PUT", "/workspaces/{workspaceId}/anomalydetectors/{anomalyDetectorId}", 202] },
  () => PutAnomalyDetectorRequest$,
  () => PutAnomalyDetectorResponse$,
];
export var PutResourcePolicy$: StaticOperationSchema = [
  9,
  n0,
  _PRP,
  { [_h]: ["PUT", "/workspaces/{workspaceId}/policy", 202] },
  () => PutResourcePolicyRequest$,
  () => PutResourcePolicyResponse$,
];
export var PutRuleGroupsNamespace$: StaticOperationSchema = [
  9,
  n0,
  _PRGN,
  { [_h]: ["PUT", "/workspaces/{workspaceId}/rulegroupsnamespaces/{name}", 202] },
  () => PutRuleGroupsNamespaceRequest$,
  () => PutRuleGroupsNamespaceResponse$,
];
export var TagResource$: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/tags/{resourceArn}", 200] },
  () => TagResourceRequest$,
  () => TagResourceResponse$,
];
export var UntagResource$: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["DELETE", "/tags/{resourceArn}", 200] },
  () => UntagResourceRequest$,
  () => UntagResourceResponse$,
];
export var UpdateLoggingConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _ULC,
  { [_h]: ["PUT", "/workspaces/{workspaceId}/logging", 202] },
  () => UpdateLoggingConfigurationRequest$,
  () => UpdateLoggingConfigurationResponse$,
];
export var UpdateQueryLoggingConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _UQLC,
  { [_h]: ["PUT", "/workspaces/{workspaceId}/logging/query", 202] },
  () => UpdateQueryLoggingConfigurationRequest$,
  () => UpdateQueryLoggingConfigurationResponse$,
];
export var UpdateScraper$: StaticOperationSchema = [
  9,
  n0,
  _US,
  { [_h]: ["PUT", "/scrapers/{scraperId}", 202] },
  () => UpdateScraperRequest$,
  () => UpdateScraperResponse$,
];
export var UpdateScraperLoggingConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _USLC,
  { [_h]: ["PUT", "/scrapers/{scraperId}/logging-configuration", 202] },
  () => UpdateScraperLoggingConfigurationRequest$,
  () => UpdateScraperLoggingConfigurationResponse$,
];
export var UpdateWorkspaceAlias$: StaticOperationSchema = [
  9,
  n0,
  _UWA,
  { [_h]: ["POST", "/workspaces/{workspaceId}/alias", 204] },
  () => UpdateWorkspaceAliasRequest$,
  () => __Unit,
];
export var UpdateWorkspaceConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _UWC,
  { [_h]: ["PATCH", "/workspaces/{workspaceId}/configuration", 202] },
  () => UpdateWorkspaceConfigurationRequest$,
  () => UpdateWorkspaceConfigurationResponse$,
];

const _A = "Action";
const _AP = "ActionParameter";
const _APM = "ActionParameterMap";
const _AS = "ActionSummary";
const _ASL = "ActionSummaryList";
const _AT = "ActionTarget";
const _ATM = "ActionTargetMap";
const _CE = "ConflictException";
const _CET = "CreateExperimentTemplate";
const _CETAI = "CreateExperimentTemplateActionInput";
const _CETAIM = "CreateExperimentTemplateActionInputMap";
const _CETEOI = "CreateExperimentTemplateExperimentOptionsInput";
const _CETLCI = "CreateExperimentTemplateLogConfigurationInput";
const _CETR = "CreateExperimentTemplateRequest";
const _CETRCI = "CreateExperimentTemplateReportConfigurationInput";
const _CETRr = "CreateExperimentTemplateResponse";
const _CETSCI = "CreateExperimentTemplateStopConditionInput";
const _CETSCIL = "CreateExperimentTemplateStopConditionInputList";
const _CETTI = "CreateExperimentTemplateTargetInput";
const _CETTIM = "CreateExperimentTemplateTargetInputMap";
const _CTAC = "CreateTargetAccountConfiguration";
const _CTACR = "CreateTargetAccountConfigurationRequest";
const _CTACRr = "CreateTargetAccountConfigurationResponse";
const _DET = "DeleteExperimentTemplate";
const _DETR = "DeleteExperimentTemplateRequest";
const _DETRe = "DeleteExperimentTemplateResponse";
const _DTAC = "DeleteTargetAccountConfiguration";
const _DTACR = "DeleteTargetAccountConfigurationRequest";
const _DTACRe = "DeleteTargetAccountConfigurationResponse";
const _E = "Experiment";
const _EA = "ExperimentAction";
const _EAM = "ExperimentActionMap";
const _EAS = "ExperimentActionState";
const _ECWLLC = "ExperimentCloudWatchLogsLogConfiguration";
const _EE = "ExperimentError";
const _ELC = "ExperimentLogConfiguration";
const _EO = "ExperimentOptions";
const _ER = "ExperimentReport";
const _ERC = "ExperimentReportConfiguration";
const _ERCCWD = "ExperimentReportConfigurationCloudWatchDashboard";
const _ERCCWDL = "ExperimentReportConfigurationCloudWatchDashboardList";
const _ERCDS = "ExperimentReportConfigurationDataSources";
const _ERCO = "ExperimentReportConfigurationOutputs";
const _ERCOSC = "ExperimentReportConfigurationOutputsS3Configuration";
const _ERE = "ExperimentReportError";
const _ERS = "ExperimentReportState";
const _ERSR = "ExperimentReportS3Report";
const _ERSRL = "ExperimentReportS3ReportList";
const _ES = "ExperimentState";
const _ESC = "ExperimentStopCondition";
const _ESCL = "ExperimentStopConditionList";
const _ESL = "ExperimentSummaryList";
const _ESLC = "ExperimentS3LogConfiguration";
const _ESx = "ExperimentSummary";
const _ET = "ExperimentTarget";
const _ETA = "ExperimentTemplateAction";
const _ETAC = "ExperimentTargetAccountConfiguration";
const _ETACL = "ExperimentTargetAccountConfigurationList";
const _ETACS = "ExperimentTargetAccountConfigurationSummary";
const _ETAM = "ExperimentTemplateActionMap";
const _ETCWLLC = "ExperimentTemplateCloudWatchLogsLogConfiguration";
const _ETCWLLCI = "ExperimentTemplateCloudWatchLogsLogConfigurationInput";
const _ETEO = "ExperimentTemplateExperimentOptions";
const _ETF = "ExperimentTargetFilter";
const _ETFL = "ExperimentTargetFilterList";
const _ETLC = "ExperimentTemplateLogConfiguration";
const _ETM = "ExperimentTargetMap";
const _ETRC = "ExperimentTemplateReportConfiguration";
const _ETRCCWD = "ExperimentTemplateReportConfigurationCloudWatchDashboard";
const _ETRCCWDL = "ExperimentTemplateReportConfigurationCloudWatchDashboardList";
const _ETRCDS = "ExperimentTemplateReportConfigurationDataSources";
const _ETRCDSI = "ExperimentTemplateReportConfigurationDataSourcesInput";
const _ETRCO = "ExperimentTemplateReportConfigurationOutputs";
const _ETRCOI = "ExperimentTemplateReportConfigurationOutputsInput";
const _ETS = "ExperimentTemplateSummary";
const _ETSC = "ExperimentTemplateStopCondition";
const _ETSCL = "ExperimentTemplateStopConditionList";
const _ETSL = "ExperimentTemplateSummaryList";
const _ETSLC = "ExperimentTemplateS3LogConfiguration";
const _ETSLCI = "ExperimentTemplateS3LogConfigurationInput";
const _ETT = "ExperimentTemplateTarget";
const _ETTF = "ExperimentTemplateTargetFilter";
const _ETTFIL = "ExperimentTemplateTargetFilterInputList";
const _ETTFL = "ExperimentTemplateTargetFilterList";
const _ETTIF = "ExperimentTemplateTargetInputFilter";
const _ETTM = "ExperimentTemplateTargetMap";
const _ETx = "ExperimentTemplate";
const _GA = "GetAction";
const _GAR = "GetActionRequest";
const _GARe = "GetActionResponse";
const _GE = "GetExperiment";
const _GER = "GetExperimentRequest";
const _GERe = "GetExperimentResponse";
const _GET = "GetExperimentTemplate";
const _GETAC = "GetExperimentTargetAccountConfiguration";
const _GETACR = "GetExperimentTargetAccountConfigurationRequest";
const _GETACRe = "GetExperimentTargetAccountConfigurationResponse";
const _GETR = "GetExperimentTemplateRequest";
const _GETRe = "GetExperimentTemplateResponse";
const _GSL = "GetSafetyLever";
const _GSLR = "GetSafetyLeverRequest";
const _GSLRe = "GetSafetyLeverResponse";
const _GTAC = "GetTargetAccountConfiguration";
const _GTACR = "GetTargetAccountConfigurationRequest";
const _GTACRe = "GetTargetAccountConfigurationResponse";
const _GTRT = "GetTargetResourceType";
const _GTRTR = "GetTargetResourceTypeRequest";
const _GTRTRe = "GetTargetResourceTypeResponse";
const _LA = "ListActions";
const _LAR = "ListActionsRequest";
const _LARi = "ListActionsResponse";
const _LE = "ListExperiments";
const _LER = "ListExperimentsRequest";
const _LERT = "ListExperimentResolvedTargets";
const _LERTR = "ListExperimentResolvedTargetsRequest";
const _LERTRi = "ListExperimentResolvedTargetsResponse";
const _LERi = "ListExperimentsResponse";
const _LET = "ListExperimentTemplates";
const _LETAC = "ListExperimentTargetAccountConfigurations";
const _LETACR = "ListExperimentTargetAccountConfigurationsRequest";
const _LETACRi = "ListExperimentTargetAccountConfigurationsResponse";
const _LETR = "ListExperimentTemplatesRequest";
const _LETRi = "ListExperimentTemplatesResponse";
const _LTAC = "ListTargetAccountConfigurations";
const _LTACR = "ListTargetAccountConfigurationsRequest";
const _LTACRi = "ListTargetAccountConfigurationsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _LTRT = "ListTargetResourceTypes";
const _LTRTR = "ListTargetResourceTypesRequest";
const _LTRTRi = "ListTargetResourceTypesResponse";
const _RCCWDI = "ReportConfigurationCloudWatchDashboardInput";
const _RCCWDIL = "ReportConfigurationCloudWatchDashboardInputList";
const _RCSO = "ReportConfigurationS3Output";
const _RCSOI = "ReportConfigurationS3OutputInput";
const _RNFE = "ResourceNotFoundException";
const _RT = "ResolvedTarget";
const _RTL = "ResolvedTargetList";
const _SE = "StartExperiment";
const _SEEOI = "StartExperimentExperimentOptionsInput";
const _SER = "StartExperimentRequest";
const _SERt = "StartExperimentResponse";
const _SERto = "StopExperimentRequest";
const _SERtop = "StopExperimentResponse";
const _SEt = "StopExperiment";
const _SL = "SafetyLever";
const _SLS = "SafetyLeverState";
const _SQEE = "ServiceQuotaExceededException";
const _TAC = "TargetAccountConfiguration";
const _TACL = "TargetAccountConfigurationList";
const _TACS = "TargetAccountConfigurationSummary";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _TRT = "TargetResourceType";
const _TRTP = "TargetResourceTypeParameter";
const _TRTPM = "TargetResourceTypeParameterMap";
const _TRTS = "TargetResourceTypeSummary";
const _TRTSL = "TargetResourceTypeSummaryList";
const _UET = "UpdateExperimentTemplate";
const _UETAII = "UpdateExperimentTemplateActionInputItem";
const _UETAIM = "UpdateExperimentTemplateActionInputMap";
const _UETEOI = "UpdateExperimentTemplateExperimentOptionsInput";
const _UETLCI = "UpdateExperimentTemplateLogConfigurationInput";
const _UETR = "UpdateExperimentTemplateRequest";
const _UETRCI = "UpdateExperimentTemplateReportConfigurationInput";
const _UETRp = "UpdateExperimentTemplateResponse";
const _UETSCI = "UpdateExperimentTemplateStopConditionInput";
const _UETSCIL = "UpdateExperimentTemplateStopConditionInputList";
const _UETTI = "UpdateExperimentTemplateTargetInput";
const _UETTIM = "UpdateExperimentTemplateTargetInputMap";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _USLS = "UpdateSafetyLeverState";
const _USLSI = "UpdateSafetyLeverStateInput";
const _USLSR = "UpdateSafetyLeverStateRequest";
const _USLSRp = "UpdateSafetyLeverStateResponse";
const _UTAC = "UpdateTargetAccountConfiguration";
const _UTACR = "UpdateTargetAccountConfigurationRequest";
const _UTACRp = "UpdateTargetAccountConfigurationResponse";
const _VE = "ValidationException";
const _a = "arn";
const _aI = "actionId";
const _aIc = "accountId";
const _aM = "actionsMode";
const _aQE = "awsQueryError";
const _aT = "accountTargeting";
const _ac = "actions";
const _act = "action";
const _bN = "bucketName";
const _c = "client";
const _cT = "clientToken";
const _cTr = "creationTime";
const _cWD = "cloudWatchDashboards";
const _cWLC = "cloudWatchLogsConfiguration";
const _co = "code";
const _d = "description";
const _dI = "dashboardIdentifier";
const _dS = "dataSources";
const _e = "error";
const _eI = "experimentId";
const _eO = "experimentOptions";
const _eR = "experimentReport";
const _eRC = "experimentReportConfiguration";
const _eT = "experimentTemplate";
const _eTI = "experimentTemplateId";
const _eTRM = "emptyTargetResolutionMode";
const _eTn = "endTime";
const _eTx = "experimentTemplates";
const _ex = "experiment";
const _exp = "experiments";
const _f = "filters";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _i = "id";
const _l = "location";
const _lC = "logConfiguration";
const _lGA = "logGroupArn";
const _lSV = "logSchemaVersion";
const _lUT = "lastUpdateTime";
const _m = "message";
const _mR = "maxResults";
const _nT = "nextToken";
const _o = "outputs";
const _p = "parameters";
const _pED = "preExperimentDuration";
const _pEDo = "postExperimentDuration";
const _pa = "path";
const _pr = "prefix";
const _r = "required";
const _rA = "roleArn";
const _rAe = "resourceArns";
const _rAes = "resourceArn";
const _rT = "resourceType";
const _rTe = "resourceTags";
const _rTep = "reportType";
const _rTes = "resolvedTargets";
const _re = "reason";
const _s = "source";
const _sA = "startAfter";
const _sC = "s3Configuration";
const _sCt = "stopConditions";
const _sL = "safetyLever";
const _sM = "selectionMode";
const _sR = "s3Reports";
const _sT = "startTime";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.fis";
const _st = "state";
const _sta = "status";
const _t = "targets";
const _tAC = "targetAccountConfiguration";
const _tACC = "targetAccountConfigurationsCount";
const _tACa = "targetAccountConfigurations";
const _tI = "targetInformation";
const _tK = "tagKeys";
const _tN = "targetName";
const _tRT = "targetResourceType";
const _tRTa = "targetResourceTypes";
const _ta = "tags";
const _v = "value";
const _va = "values";
const n0 = "com.amazonaws.fis";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { FisServiceException as __FisServiceException } from "../models/FisServiceException";
import {
  ConflictException as __ConflictException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ValidationException as __ValidationException,
} from "../models/index";

/* eslint no-var: 0 */

export var Action: StaticStructureSchema = [
  3,
  n0,
  _A,
  0,
  [_i, _a, _d, _p, _t, _ta],
  [0, 0, 0, () => ActionParameterMap, () => ActionTargetMap, 128 | 0],
];
export var ActionParameter: StaticStructureSchema = [3, n0, _AP, 0, [_d, _r], [0, 2]];
export var ActionSummary: StaticStructureSchema = [
  3,
  n0,
  _AS,
  0,
  [_i, _a, _d, _t, _ta],
  [0, 0, 0, () => ActionTargetMap, 128 | 0],
];
export var ActionTarget: StaticStructureSchema = [3, n0, _AT, 0, [_rT], [0]];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`ConflictException`, 409],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CreateExperimentTemplateActionInput: StaticStructureSchema = [
  3,
  n0,
  _CETAI,
  0,
  [_aI, _d, _p, _t, _sA],
  [0, 0, 128 | 0, 128 | 0, 64 | 0],
];
export var CreateExperimentTemplateExperimentOptionsInput: StaticStructureSchema = [
  3,
  n0,
  _CETEOI,
  0,
  [_aT, _eTRM],
  [0, 0],
];
export var CreateExperimentTemplateLogConfigurationInput: StaticStructureSchema = [
  3,
  n0,
  _CETLCI,
  0,
  [_cWLC, _sC, _lSV],
  [() => ExperimentTemplateCloudWatchLogsLogConfigurationInput, () => ExperimentTemplateS3LogConfigurationInput, 1],
];
export var CreateExperimentTemplateReportConfigurationInput: StaticStructureSchema = [
  3,
  n0,
  _CETRCI,
  0,
  [_o, _dS, _pED, _pEDo],
  [
    () => ExperimentTemplateReportConfigurationOutputsInput,
    () => ExperimentTemplateReportConfigurationDataSourcesInput,
    0,
    0,
  ],
];
export var CreateExperimentTemplateRequest: StaticStructureSchema = [
  3,
  n0,
  _CETR,
  0,
  [_cT, _d, _sCt, _t, _ac, _rA, _ta, _lC, _eO, _eRC],
  [
    [0, 4],
    0,
    () => CreateExperimentTemplateStopConditionInputList,
    () => CreateExperimentTemplateTargetInputMap,
    () => CreateExperimentTemplateActionInputMap,
    0,
    128 | 0,
    () => CreateExperimentTemplateLogConfigurationInput,
    () => CreateExperimentTemplateExperimentOptionsInput,
    () => CreateExperimentTemplateReportConfigurationInput,
  ],
];
export var CreateExperimentTemplateResponse: StaticStructureSchema = [
  3,
  n0,
  _CETRr,
  0,
  [_eT],
  [() => ExperimentTemplate],
];
export var CreateExperimentTemplateStopConditionInput: StaticStructureSchema = [3, n0, _CETSCI, 0, [_s, _v], [0, 0]];
export var CreateExperimentTemplateTargetInput: StaticStructureSchema = [
  3,
  n0,
  _CETTI,
  0,
  [_rT, _rAe, _rTe, _f, _sM, _p],
  [0, 64 | 0, 128 | 0, () => ExperimentTemplateTargetFilterInputList, 0, 128 | 0],
];
export var CreateTargetAccountConfigurationRequest: StaticStructureSchema = [
  3,
  n0,
  _CTACR,
  0,
  [_cT, _eTI, _aIc, _rA, _d],
  [[0, 4], [0, 1], [0, 1], 0, 0],
];
export var CreateTargetAccountConfigurationResponse: StaticStructureSchema = [
  3,
  n0,
  _CTACRr,
  0,
  [_tAC],
  [() => TargetAccountConfiguration],
];
export var DeleteExperimentTemplateRequest: StaticStructureSchema = [3, n0, _DETR, 0, [_i], [[0, 1]]];
export var DeleteExperimentTemplateResponse: StaticStructureSchema = [
  3,
  n0,
  _DETRe,
  0,
  [_eT],
  [() => ExperimentTemplate],
];
export var DeleteTargetAccountConfigurationRequest: StaticStructureSchema = [
  3,
  n0,
  _DTACR,
  0,
  [_eTI, _aIc],
  [
    [0, 1],
    [0, 1],
  ],
];
export var DeleteTargetAccountConfigurationResponse: StaticStructureSchema = [
  3,
  n0,
  _DTACRe,
  0,
  [_tAC],
  [() => TargetAccountConfiguration],
];
export var Experiment: StaticStructureSchema = [
  3,
  n0,
  _E,
  0,
  [_i, _a, _eTI, _rA, _st, _t, _ac, _sCt, _cTr, _sT, _eTn, _ta, _lC, _eO, _tACC, _eRC, _eR],
  [
    0,
    0,
    0,
    0,
    () => ExperimentState,
    () => ExperimentTargetMap,
    () => ExperimentActionMap,
    () => ExperimentStopConditionList,
    4,
    4,
    4,
    128 | 0,
    () => ExperimentLogConfiguration,
    () => ExperimentOptions,
    1,
    () => ExperimentReportConfiguration,
    () => ExperimentReport,
  ],
];
export var ExperimentAction: StaticStructureSchema = [
  3,
  n0,
  _EA,
  0,
  [_aI, _d, _p, _t, _sA, _st, _sT, _eTn],
  [0, 0, 128 | 0, 128 | 0, 64 | 0, () => ExperimentActionState, 4, 4],
];
export var ExperimentActionState: StaticStructureSchema = [3, n0, _EAS, 0, [_sta, _re], [0, 0]];
export var ExperimentCloudWatchLogsLogConfiguration: StaticStructureSchema = [3, n0, _ECWLLC, 0, [_lGA], [0]];
export var ExperimentError: StaticStructureSchema = [3, n0, _EE, 0, [_aIc, _co, _l], [0, 0, 0]];
export var ExperimentLogConfiguration: StaticStructureSchema = [
  3,
  n0,
  _ELC,
  0,
  [_cWLC, _sC, _lSV],
  [() => ExperimentCloudWatchLogsLogConfiguration, () => ExperimentS3LogConfiguration, 1],
];
export var ExperimentOptions: StaticStructureSchema = [3, n0, _EO, 0, [_aT, _eTRM, _aM], [0, 0, 0]];
export var ExperimentReport: StaticStructureSchema = [
  3,
  n0,
  _ER,
  0,
  [_st, _sR],
  [() => ExperimentReportState, () => ExperimentReportS3ReportList],
];
export var ExperimentReportConfiguration: StaticStructureSchema = [
  3,
  n0,
  _ERC,
  0,
  [_o, _dS, _pED, _pEDo],
  [() => ExperimentReportConfigurationOutputs, () => ExperimentReportConfigurationDataSources, 0, 0],
];
export var ExperimentReportConfigurationCloudWatchDashboard: StaticStructureSchema = [3, n0, _ERCCWD, 0, [_dI], [0]];
export var ExperimentReportConfigurationDataSources: StaticStructureSchema = [
  3,
  n0,
  _ERCDS,
  0,
  [_cWD],
  [() => ExperimentReportConfigurationCloudWatchDashboardList],
];
export var ExperimentReportConfigurationOutputs: StaticStructureSchema = [
  3,
  n0,
  _ERCO,
  0,
  [_sC],
  [() => ExperimentReportConfigurationOutputsS3Configuration],
];
export var ExperimentReportConfigurationOutputsS3Configuration: StaticStructureSchema = [
  3,
  n0,
  _ERCOSC,
  0,
  [_bN, _pr],
  [0, 0],
];
export var ExperimentReportError: StaticStructureSchema = [3, n0, _ERE, 0, [_co], [0]];
export var ExperimentReportS3Report: StaticStructureSchema = [3, n0, _ERSR, 0, [_a, _rTep], [0, 0]];
export var ExperimentReportState: StaticStructureSchema = [
  3,
  n0,
  _ERS,
  0,
  [_sta, _re, _e],
  [0, 0, () => ExperimentReportError],
];
export var ExperimentS3LogConfiguration: StaticStructureSchema = [3, n0, _ESLC, 0, [_bN, _pr], [0, 0]];
export var ExperimentState: StaticStructureSchema = [3, n0, _ES, 0, [_sta, _re, _e], [0, 0, () => ExperimentError]];
export var ExperimentStopCondition: StaticStructureSchema = [3, n0, _ESC, 0, [_s, _v], [0, 0]];
export var ExperimentSummary: StaticStructureSchema = [
  3,
  n0,
  _ESx,
  0,
  [_i, _a, _eTI, _st, _cTr, _ta, _eO],
  [0, 0, 0, () => ExperimentState, 4, 128 | 0, () => ExperimentOptions],
];
export var ExperimentTarget: StaticStructureSchema = [
  3,
  n0,
  _ET,
  0,
  [_rT, _rAe, _rTe, _f, _sM, _p],
  [0, 64 | 0, 128 | 0, () => ExperimentTargetFilterList, 0, 128 | 0],
];
export var ExperimentTargetAccountConfiguration: StaticStructureSchema = [3, n0, _ETAC, 0, [_rA, _aIc, _d], [0, 0, 0]];
export var ExperimentTargetAccountConfigurationSummary: StaticStructureSchema = [
  3,
  n0,
  _ETACS,
  0,
  [_rA, _aIc, _d],
  [0, 0, 0],
];
export var ExperimentTargetFilter: StaticStructureSchema = [3, n0, _ETF, 0, [_pa, _va], [0, 64 | 0]];
export var ExperimentTemplate: StaticStructureSchema = [
  3,
  n0,
  _ETx,
  0,
  [_i, _a, _d, _t, _ac, _sCt, _cTr, _lUT, _rA, _ta, _lC, _eO, _tACC, _eRC],
  [
    0,
    0,
    0,
    () => ExperimentTemplateTargetMap,
    () => ExperimentTemplateActionMap,
    () => ExperimentTemplateStopConditionList,
    4,
    4,
    0,
    128 | 0,
    () => ExperimentTemplateLogConfiguration,
    () => ExperimentTemplateExperimentOptions,
    1,
    () => ExperimentTemplateReportConfiguration,
  ],
];
export var ExperimentTemplateAction: StaticStructureSchema = [
  3,
  n0,
  _ETA,
  0,
  [_aI, _d, _p, _t, _sA],
  [0, 0, 128 | 0, 128 | 0, 64 | 0],
];
export var ExperimentTemplateCloudWatchLogsLogConfiguration: StaticStructureSchema = [3, n0, _ETCWLLC, 0, [_lGA], [0]];
export var ExperimentTemplateCloudWatchLogsLogConfigurationInput: StaticStructureSchema = [
  3,
  n0,
  _ETCWLLCI,
  0,
  [_lGA],
  [0],
];
export var ExperimentTemplateExperimentOptions: StaticStructureSchema = [3, n0, _ETEO, 0, [_aT, _eTRM], [0, 0]];
export var ExperimentTemplateLogConfiguration: StaticStructureSchema = [
  3,
  n0,
  _ETLC,
  0,
  [_cWLC, _sC, _lSV],
  [() => ExperimentTemplateCloudWatchLogsLogConfiguration, () => ExperimentTemplateS3LogConfiguration, 1],
];
export var ExperimentTemplateReportConfiguration: StaticStructureSchema = [
  3,
  n0,
  _ETRC,
  0,
  [_o, _dS, _pED, _pEDo],
  [() => ExperimentTemplateReportConfigurationOutputs, () => ExperimentTemplateReportConfigurationDataSources, 0, 0],
];
export var ExperimentTemplateReportConfigurationCloudWatchDashboard: StaticStructureSchema = [
  3,
  n0,
  _ETRCCWD,
  0,
  [_dI],
  [0],
];
export var ExperimentTemplateReportConfigurationDataSources: StaticStructureSchema = [
  3,
  n0,
  _ETRCDS,
  0,
  [_cWD],
  [() => ExperimentTemplateReportConfigurationCloudWatchDashboardList],
];
export var ExperimentTemplateReportConfigurationDataSourcesInput: StaticStructureSchema = [
  3,
  n0,
  _ETRCDSI,
  0,
  [_cWD],
  [() => ReportConfigurationCloudWatchDashboardInputList],
];
export var ExperimentTemplateReportConfigurationOutputs: StaticStructureSchema = [
  3,
  n0,
  _ETRCO,
  0,
  [_sC],
  [() => ReportConfigurationS3Output],
];
export var ExperimentTemplateReportConfigurationOutputsInput: StaticStructureSchema = [
  3,
  n0,
  _ETRCOI,
  0,
  [_sC],
  [() => ReportConfigurationS3OutputInput],
];
export var ExperimentTemplateS3LogConfiguration: StaticStructureSchema = [3, n0, _ETSLC, 0, [_bN, _pr], [0, 0]];
export var ExperimentTemplateS3LogConfigurationInput: StaticStructureSchema = [3, n0, _ETSLCI, 0, [_bN, _pr], [0, 0]];
export var ExperimentTemplateStopCondition: StaticStructureSchema = [3, n0, _ETSC, 0, [_s, _v], [0, 0]];
export var ExperimentTemplateSummary: StaticStructureSchema = [
  3,
  n0,
  _ETS,
  0,
  [_i, _a, _d, _cTr, _lUT, _ta],
  [0, 0, 0, 4, 4, 128 | 0],
];
export var ExperimentTemplateTarget: StaticStructureSchema = [
  3,
  n0,
  _ETT,
  0,
  [_rT, _rAe, _rTe, _f, _sM, _p],
  [0, 64 | 0, 128 | 0, () => ExperimentTemplateTargetFilterList, 0, 128 | 0],
];
export var ExperimentTemplateTargetFilter: StaticStructureSchema = [3, n0, _ETTF, 0, [_pa, _va], [0, 64 | 0]];
export var ExperimentTemplateTargetInputFilter: StaticStructureSchema = [3, n0, _ETTIF, 0, [_pa, _va], [0, 64 | 0]];
export var GetActionRequest: StaticStructureSchema = [3, n0, _GAR, 0, [_i], [[0, 1]]];
export var GetActionResponse: StaticStructureSchema = [3, n0, _GARe, 0, [_act], [() => Action]];
export var GetExperimentRequest: StaticStructureSchema = [3, n0, _GER, 0, [_i], [[0, 1]]];
export var GetExperimentResponse: StaticStructureSchema = [3, n0, _GERe, 0, [_ex], [() => Experiment]];
export var GetExperimentTargetAccountConfigurationRequest: StaticStructureSchema = [
  3,
  n0,
  _GETACR,
  0,
  [_eI, _aIc],
  [
    [0, 1],
    [0, 1],
  ],
];
export var GetExperimentTargetAccountConfigurationResponse: StaticStructureSchema = [
  3,
  n0,
  _GETACRe,
  0,
  [_tAC],
  [() => ExperimentTargetAccountConfiguration],
];
export var GetExperimentTemplateRequest: StaticStructureSchema = [3, n0, _GETR, 0, [_i], [[0, 1]]];
export var GetExperimentTemplateResponse: StaticStructureSchema = [3, n0, _GETRe, 0, [_eT], [() => ExperimentTemplate]];
export var GetSafetyLeverRequest: StaticStructureSchema = [3, n0, _GSLR, 0, [_i], [[0, 1]]];
export var GetSafetyLeverResponse: StaticStructureSchema = [3, n0, _GSLRe, 0, [_sL], [() => SafetyLever]];
export var GetTargetAccountConfigurationRequest: StaticStructureSchema = [
  3,
  n0,
  _GTACR,
  0,
  [_eTI, _aIc],
  [
    [0, 1],
    [0, 1],
  ],
];
export var GetTargetAccountConfigurationResponse: StaticStructureSchema = [
  3,
  n0,
  _GTACRe,
  0,
  [_tAC],
  [() => TargetAccountConfiguration],
];
export var GetTargetResourceTypeRequest: StaticStructureSchema = [3, n0, _GTRTR, 0, [_rT], [[0, 1]]];
export var GetTargetResourceTypeResponse: StaticStructureSchema = [
  3,
  n0,
  _GTRTRe,
  0,
  [_tRT],
  [() => TargetResourceType],
];
export var ListActionsRequest: StaticStructureSchema = [
  3,
  n0,
  _LAR,
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
export var ListActionsResponse: StaticStructureSchema = [3, n0, _LARi, 0, [_ac, _nT], [() => ActionSummaryList, 0]];
export var ListExperimentResolvedTargetsRequest: StaticStructureSchema = [
  3,
  n0,
  _LERTR,
  0,
  [_eI, _mR, _nT, _tN],
  [
    [0, 1],
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
    [
      0,
      {
        [_hQ]: _tN,
      },
    ],
  ],
];
export var ListExperimentResolvedTargetsResponse: StaticStructureSchema = [
  3,
  n0,
  _LERTRi,
  0,
  [_rTes, _nT],
  [() => ResolvedTargetList, 0],
];
export var ListExperimentsRequest: StaticStructureSchema = [
  3,
  n0,
  _LER,
  0,
  [_mR, _nT, _eTI],
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
    [
      0,
      {
        [_hQ]: _eTI,
      },
    ],
  ],
];
export var ListExperimentsResponse: StaticStructureSchema = [
  3,
  n0,
  _LERi,
  0,
  [_exp, _nT],
  [() => ExperimentSummaryList, 0],
];
export var ListExperimentTargetAccountConfigurationsRequest: StaticStructureSchema = [
  3,
  n0,
  _LETACR,
  0,
  [_eI, _nT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ],
];
export var ListExperimentTargetAccountConfigurationsResponse: StaticStructureSchema = [
  3,
  n0,
  _LETACRi,
  0,
  [_tACa, _nT],
  [() => ExperimentTargetAccountConfigurationList, 0],
];
export var ListExperimentTemplatesRequest: StaticStructureSchema = [
  3,
  n0,
  _LETR,
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
export var ListExperimentTemplatesResponse: StaticStructureSchema = [
  3,
  n0,
  _LETRi,
  0,
  [_eTx, _nT],
  [() => ExperimentTemplateSummaryList, 0],
];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rAes], [[0, 1]]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_ta], [128 | 0]];
export var ListTargetAccountConfigurationsRequest: StaticStructureSchema = [
  3,
  n0,
  _LTACR,
  0,
  [_eTI, _mR, _nT],
  [
    [0, 1],
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
export var ListTargetAccountConfigurationsResponse: StaticStructureSchema = [
  3,
  n0,
  _LTACRi,
  0,
  [_tACa, _nT],
  [() => TargetAccountConfigurationList, 0],
];
export var ListTargetResourceTypesRequest: StaticStructureSchema = [
  3,
  n0,
  _LTRTR,
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
export var ListTargetResourceTypesResponse: StaticStructureSchema = [
  3,
  n0,
  _LTRTRi,
  0,
  [_tRTa, _nT],
  [() => TargetResourceTypeSummaryList, 0],
];
export var ReportConfigurationCloudWatchDashboardInput: StaticStructureSchema = [3, n0, _RCCWDI, 0, [_dI], [0]];
export var ReportConfigurationS3Output: StaticStructureSchema = [3, n0, _RCSO, 0, [_bN, _pr], [0, 0]];
export var ReportConfigurationS3OutputInput: StaticStructureSchema = [3, n0, _RCSOI, 0, [_bN, _pr], [0, 0]];
export var ResolvedTarget: StaticStructureSchema = [3, n0, _RT, 0, [_rT, _tN, _tI], [0, 0, 128 | 0]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ResourceNotFoundException`, 404],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var SafetyLever: StaticStructureSchema = [3, n0, _SL, 0, [_i, _a, _st], [0, 0, () => SafetyLeverState]];
export var SafetyLeverState: StaticStructureSchema = [3, n0, _SLS, 0, [_sta, _re], [0, 0]];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
    [_aQE]: [`ServiceQuotaExceededException`, 402],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var StartExperimentExperimentOptionsInput: StaticStructureSchema = [3, n0, _SEEOI, 0, [_aM], [0]];
export var StartExperimentRequest: StaticStructureSchema = [
  3,
  n0,
  _SER,
  0,
  [_cT, _eTI, _eO, _ta],
  [[0, 4], 0, () => StartExperimentExperimentOptionsInput, 128 | 0],
];
export var StartExperimentResponse: StaticStructureSchema = [3, n0, _SERt, 0, [_ex], [() => Experiment]];
export var StopExperimentRequest: StaticStructureSchema = [3, n0, _SERto, 0, [_i], [[0, 1]]];
export var StopExperimentResponse: StaticStructureSchema = [3, n0, _SERtop, 0, [_ex], [() => Experiment]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_rAes, _ta], [[0, 1], 128 | 0]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var TargetAccountConfiguration: StaticStructureSchema = [3, n0, _TAC, 0, [_rA, _aIc, _d], [0, 0, 0]];
export var TargetAccountConfigurationSummary: StaticStructureSchema = [3, n0, _TACS, 0, [_rA, _aIc, _d], [0, 0, 0]];
export var TargetResourceType: StaticStructureSchema = [
  3,
  n0,
  _TRT,
  0,
  [_rT, _d, _p],
  [0, 0, () => TargetResourceTypeParameterMap],
];
export var TargetResourceTypeParameter: StaticStructureSchema = [3, n0, _TRTP, 0, [_d, _r], [0, 2]];
export var TargetResourceTypeSummary: StaticStructureSchema = [3, n0, _TRTS, 0, [_rT, _d], [0, 0]];
export var UntagResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_rAes, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ],
];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateExperimentTemplateActionInputItem: StaticStructureSchema = [
  3,
  n0,
  _UETAII,
  0,
  [_aI, _d, _p, _t, _sA],
  [0, 0, 128 | 0, 128 | 0, 64 | 0],
];
export var UpdateExperimentTemplateExperimentOptionsInput: StaticStructureSchema = [3, n0, _UETEOI, 0, [_eTRM], [0]];
export var UpdateExperimentTemplateLogConfigurationInput: StaticStructureSchema = [
  3,
  n0,
  _UETLCI,
  0,
  [_cWLC, _sC, _lSV],
  [() => ExperimentTemplateCloudWatchLogsLogConfigurationInput, () => ExperimentTemplateS3LogConfigurationInput, 1],
];
export var UpdateExperimentTemplateReportConfigurationInput: StaticStructureSchema = [
  3,
  n0,
  _UETRCI,
  0,
  [_o, _dS, _pED, _pEDo],
  [
    () => ExperimentTemplateReportConfigurationOutputsInput,
    () => ExperimentTemplateReportConfigurationDataSourcesInput,
    0,
    0,
  ],
];
export var UpdateExperimentTemplateRequest: StaticStructureSchema = [
  3,
  n0,
  _UETR,
  0,
  [_i, _d, _sCt, _t, _ac, _rA, _lC, _eO, _eRC],
  [
    [0, 1],
    0,
    () => UpdateExperimentTemplateStopConditionInputList,
    () => UpdateExperimentTemplateTargetInputMap,
    () => UpdateExperimentTemplateActionInputMap,
    0,
    () => UpdateExperimentTemplateLogConfigurationInput,
    () => UpdateExperimentTemplateExperimentOptionsInput,
    () => UpdateExperimentTemplateReportConfigurationInput,
  ],
];
export var UpdateExperimentTemplateResponse: StaticStructureSchema = [
  3,
  n0,
  _UETRp,
  0,
  [_eT],
  [() => ExperimentTemplate],
];
export var UpdateExperimentTemplateStopConditionInput: StaticStructureSchema = [3, n0, _UETSCI, 0, [_s, _v], [0, 0]];
export var UpdateExperimentTemplateTargetInput: StaticStructureSchema = [
  3,
  n0,
  _UETTI,
  0,
  [_rT, _rAe, _rTe, _f, _sM, _p],
  [0, 64 | 0, 128 | 0, () => ExperimentTemplateTargetFilterInputList, 0, 128 | 0],
];
export var UpdateSafetyLeverStateInput: StaticStructureSchema = [3, n0, _USLSI, 0, [_sta, _re], [0, 0]];
export var UpdateSafetyLeverStateRequest: StaticStructureSchema = [
  3,
  n0,
  _USLSR,
  0,
  [_i, _st],
  [[0, 1], () => UpdateSafetyLeverStateInput],
];
export var UpdateSafetyLeverStateResponse: StaticStructureSchema = [3, n0, _USLSRp, 0, [_sL], [() => SafetyLever]];
export var UpdateTargetAccountConfigurationRequest: StaticStructureSchema = [
  3,
  n0,
  _UTACR,
  0,
  [_eTI, _aIc, _rA, _d],
  [[0, 1], [0, 1], 0, 0],
];
export var UpdateTargetAccountConfigurationResponse: StaticStructureSchema = [
  3,
  n0,
  _UTACRp,
  0,
  [_tAC],
  [() => TargetAccountConfiguration],
];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ValidationException`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var __Unit = "unit" as const;

export var FisServiceException: StaticErrorSchema = [-3, _sm, "FisServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(FisServiceException, __FisServiceException);

export var ActionSummaryList: StaticListSchema = [1, n0, _ASL, 0, () => ActionSummary];
export var CreateExperimentTemplateStopConditionInputList: StaticListSchema = [
  1,
  n0,
  _CETSCIL,
  0,
  () => CreateExperimentTemplateStopConditionInput,
];
export var ExperimentActionStartAfterList = 64 | 0;

export var ExperimentReportConfigurationCloudWatchDashboardList: StaticListSchema = [
  1,
  n0,
  _ERCCWDL,
  0,
  () => ExperimentReportConfigurationCloudWatchDashboard,
];
export var ExperimentReportS3ReportList: StaticListSchema = [1, n0, _ERSRL, 0, () => ExperimentReportS3Report];
export var ExperimentStopConditionList: StaticListSchema = [1, n0, _ESCL, 0, () => ExperimentStopCondition];
export var ExperimentSummaryList: StaticListSchema = [1, n0, _ESL, 0, () => ExperimentSummary];
export var ExperimentTargetAccountConfigurationList: StaticListSchema = [
  1,
  n0,
  _ETACL,
  0,
  () => ExperimentTargetAccountConfigurationSummary,
];
export var ExperimentTargetFilterList: StaticListSchema = [1, n0, _ETFL, 0, () => ExperimentTargetFilter];
export var ExperimentTargetFilterValues = 64 | 0;

export var ExperimentTemplateActionStartAfterList = 64 | 0;

export var ExperimentTemplateReportConfigurationCloudWatchDashboardList: StaticListSchema = [
  1,
  n0,
  _ETRCCWDL,
  0,
  () => ExperimentTemplateReportConfigurationCloudWatchDashboard,
];
export var ExperimentTemplateStopConditionList: StaticListSchema = [
  1,
  n0,
  _ETSCL,
  0,
  () => ExperimentTemplateStopCondition,
];
export var ExperimentTemplateSummaryList: StaticListSchema = [1, n0, _ETSL, 0, () => ExperimentTemplateSummary];
export var ExperimentTemplateTargetFilterInputList: StaticListSchema = [
  1,
  n0,
  _ETTFIL,
  0,
  () => ExperimentTemplateTargetInputFilter,
];
export var ExperimentTemplateTargetFilterList: StaticListSchema = [
  1,
  n0,
  _ETTFL,
  0,
  () => ExperimentTemplateTargetFilter,
];
export var ExperimentTemplateTargetFilterValues = 64 | 0;

export var ReportConfigurationCloudWatchDashboardInputList: StaticListSchema = [
  1,
  n0,
  _RCCWDIL,
  0,
  () => ReportConfigurationCloudWatchDashboardInput,
];
export var ResolvedTargetList: StaticListSchema = [1, n0, _RTL, 0, () => ResolvedTarget];
export var ResourceArnList = 64 | 0;

export var TagKeyList = 64 | 0;

export var TargetAccountConfigurationList: StaticListSchema = [
  1,
  n0,
  _TACL,
  0,
  () => TargetAccountConfigurationSummary,
];
export var TargetResourceTypeSummaryList: StaticListSchema = [1, n0, _TRTSL, 0, () => TargetResourceTypeSummary];
export var UpdateExperimentTemplateStopConditionInputList: StaticListSchema = [
  1,
  n0,
  _UETSCIL,
  0,
  () => UpdateExperimentTemplateStopConditionInput,
];
export var ActionParameterMap: StaticMapSchema = [2, n0, _APM, 0, 0, () => ActionParameter];
export var ActionTargetMap: StaticMapSchema = [2, n0, _ATM, 0, 0, () => ActionTarget];
export var CreateExperimentTemplateActionInputMap: StaticMapSchema = [
  2,
  n0,
  _CETAIM,
  0,
  0,
  () => CreateExperimentTemplateActionInput,
];
export var CreateExperimentTemplateTargetInputMap: StaticMapSchema = [
  2,
  n0,
  _CETTIM,
  0,
  0,
  () => CreateExperimentTemplateTargetInput,
];
export var ExperimentActionMap: StaticMapSchema = [2, n0, _EAM, 0, 0, () => ExperimentAction];
export var ExperimentActionParameterMap = 128 | 0;

export var ExperimentActionTargetMap = 128 | 0;

export var ExperimentTargetMap: StaticMapSchema = [2, n0, _ETM, 0, 0, () => ExperimentTarget];
export var ExperimentTargetParameterMap = 128 | 0;

export var ExperimentTemplateActionMap: StaticMapSchema = [2, n0, _ETAM, 0, 0, () => ExperimentTemplateAction];
export var ExperimentTemplateActionParameterMap = 128 | 0;

export var ExperimentTemplateActionTargetMap = 128 | 0;

export var ExperimentTemplateTargetMap: StaticMapSchema = [2, n0, _ETTM, 0, 0, () => ExperimentTemplateTarget];
export var ExperimentTemplateTargetParameterMap = 128 | 0;

export var TagMap = 128 | 0;

export var TargetInformationMap = 128 | 0;

export var TargetResourceTypeParameterMap: StaticMapSchema = [2, n0, _TRTPM, 0, 0, () => TargetResourceTypeParameter];
export var UpdateExperimentTemplateActionInputMap: StaticMapSchema = [
  2,
  n0,
  _UETAIM,
  0,
  0,
  () => UpdateExperimentTemplateActionInputItem,
];
export var UpdateExperimentTemplateTargetInputMap: StaticMapSchema = [
  2,
  n0,
  _UETTIM,
  0,
  0,
  () => UpdateExperimentTemplateTargetInput,
];
export var CreateExperimentTemplate: StaticOperationSchema = [
  9,
  n0,
  _CET,
  {
    [_h]: ["POST", "/experimentTemplates", 200],
  },
  () => CreateExperimentTemplateRequest,
  () => CreateExperimentTemplateResponse,
];
export var CreateTargetAccountConfiguration: StaticOperationSchema = [
  9,
  n0,
  _CTAC,
  {
    [_h]: ["POST", "/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}", 200],
  },
  () => CreateTargetAccountConfigurationRequest,
  () => CreateTargetAccountConfigurationResponse,
];
export var DeleteExperimentTemplate: StaticOperationSchema = [
  9,
  n0,
  _DET,
  {
    [_h]: ["DELETE", "/experimentTemplates/{id}", 200],
  },
  () => DeleteExperimentTemplateRequest,
  () => DeleteExperimentTemplateResponse,
];
export var DeleteTargetAccountConfiguration: StaticOperationSchema = [
  9,
  n0,
  _DTAC,
  {
    [_h]: ["DELETE", "/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}", 200],
  },
  () => DeleteTargetAccountConfigurationRequest,
  () => DeleteTargetAccountConfigurationResponse,
];
export var GetAction: StaticOperationSchema = [
  9,
  n0,
  _GA,
  {
    [_h]: ["GET", "/actions/{id}", 200],
  },
  () => GetActionRequest,
  () => GetActionResponse,
];
export var GetExperiment: StaticOperationSchema = [
  9,
  n0,
  _GE,
  {
    [_h]: ["GET", "/experiments/{id}", 200],
  },
  () => GetExperimentRequest,
  () => GetExperimentResponse,
];
export var GetExperimentTargetAccountConfiguration: StaticOperationSchema = [
  9,
  n0,
  _GETAC,
  {
    [_h]: ["GET", "/experiments/{experimentId}/targetAccountConfigurations/{accountId}", 200],
  },
  () => GetExperimentTargetAccountConfigurationRequest,
  () => GetExperimentTargetAccountConfigurationResponse,
];
export var GetExperimentTemplate: StaticOperationSchema = [
  9,
  n0,
  _GET,
  {
    [_h]: ["GET", "/experimentTemplates/{id}", 200],
  },
  () => GetExperimentTemplateRequest,
  () => GetExperimentTemplateResponse,
];
export var GetSafetyLever: StaticOperationSchema = [
  9,
  n0,
  _GSL,
  {
    [_h]: ["GET", "/safetyLevers/{id}", 200],
  },
  () => GetSafetyLeverRequest,
  () => GetSafetyLeverResponse,
];
export var GetTargetAccountConfiguration: StaticOperationSchema = [
  9,
  n0,
  _GTAC,
  {
    [_h]: ["GET", "/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}", 200],
  },
  () => GetTargetAccountConfigurationRequest,
  () => GetTargetAccountConfigurationResponse,
];
export var GetTargetResourceType: StaticOperationSchema = [
  9,
  n0,
  _GTRT,
  {
    [_h]: ["GET", "/targetResourceTypes/{resourceType}", 200],
  },
  () => GetTargetResourceTypeRequest,
  () => GetTargetResourceTypeResponse,
];
export var ListActions: StaticOperationSchema = [
  9,
  n0,
  _LA,
  {
    [_h]: ["GET", "/actions", 200],
  },
  () => ListActionsRequest,
  () => ListActionsResponse,
];
export var ListExperimentResolvedTargets: StaticOperationSchema = [
  9,
  n0,
  _LERT,
  {
    [_h]: ["GET", "/experiments/{experimentId}/resolvedTargets", 200],
  },
  () => ListExperimentResolvedTargetsRequest,
  () => ListExperimentResolvedTargetsResponse,
];
export var ListExperiments: StaticOperationSchema = [
  9,
  n0,
  _LE,
  {
    [_h]: ["GET", "/experiments", 200],
  },
  () => ListExperimentsRequest,
  () => ListExperimentsResponse,
];
export var ListExperimentTargetAccountConfigurations: StaticOperationSchema = [
  9,
  n0,
  _LETAC,
  {
    [_h]: ["GET", "/experiments/{experimentId}/targetAccountConfigurations", 200],
  },
  () => ListExperimentTargetAccountConfigurationsRequest,
  () => ListExperimentTargetAccountConfigurationsResponse,
];
export var ListExperimentTemplates: StaticOperationSchema = [
  9,
  n0,
  _LET,
  {
    [_h]: ["GET", "/experimentTemplates", 200],
  },
  () => ListExperimentTemplatesRequest,
  () => ListExperimentTemplatesResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var ListTargetAccountConfigurations: StaticOperationSchema = [
  9,
  n0,
  _LTAC,
  {
    [_h]: ["GET", "/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations", 200],
  },
  () => ListTargetAccountConfigurationsRequest,
  () => ListTargetAccountConfigurationsResponse,
];
export var ListTargetResourceTypes: StaticOperationSchema = [
  9,
  n0,
  _LTRT,
  {
    [_h]: ["GET", "/targetResourceTypes", 200],
  },
  () => ListTargetResourceTypesRequest,
  () => ListTargetResourceTypesResponse,
];
export var StartExperiment: StaticOperationSchema = [
  9,
  n0,
  _SE,
  {
    [_h]: ["POST", "/experiments", 200],
  },
  () => StartExperimentRequest,
  () => StartExperimentResponse,
];
export var StopExperiment: StaticOperationSchema = [
  9,
  n0,
  _SEt,
  {
    [_h]: ["DELETE", "/experiments/{id}", 200],
  },
  () => StopExperimentRequest,
  () => StopExperimentResponse,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateExperimentTemplate: StaticOperationSchema = [
  9,
  n0,
  _UET,
  {
    [_h]: ["PATCH", "/experimentTemplates/{id}", 200],
  },
  () => UpdateExperimentTemplateRequest,
  () => UpdateExperimentTemplateResponse,
];
export var UpdateSafetyLeverState: StaticOperationSchema = [
  9,
  n0,
  _USLS,
  {
    [_h]: ["PATCH", "/safetyLevers/{id}/state", 200],
  },
  () => UpdateSafetyLeverStateRequest,
  () => UpdateSafetyLeverStateResponse,
];
export var UpdateTargetAccountConfiguration: StaticOperationSchema = [
  9,
  n0,
  _UTAC,
  {
    [_h]: ["PATCH", "/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}", 200],
  },
  () => UpdateTargetAccountConfigurationRequest,
  () => UpdateTargetAccountConfigurationResponse,
];

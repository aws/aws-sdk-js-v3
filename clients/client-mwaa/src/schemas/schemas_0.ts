const _A = "Arn";
const _ACO = "AirflowConfigurationOptions";
const _ADE = "AccessDeniedException";
const _AI = "AirflowIdentity";
const _AV = "AirflowVersion";
const _B = "Body";
const _CA = "CreatedAt";
const _CCT = "CreateCliToken";
const _CCTR = "CreateCliTokenRequest";
const _CCTRr = "CreateCliTokenResponse";
const _CE = "CreateEnvironment";
const _CEI = "CreateEnvironmentInput";
const _CEO = "CreateEnvironmentOutput";
const _CEQ = "CeleryExecutorQueue";
const _CT = "CliToken";
const _CV = "ConfigValue";
const _CWLGA = "CloudWatchLogGroupArn";
const _CWLT = "CreateWebLoginToken";
const _CWLTR = "CreateWebLoginTokenRequest";
const _CWLTRr = "CreateWebLoginTokenResponse";
const _D = "Dimension";
const _DE = "DeleteEnvironment";
const _DEI = "DeleteEnvironmentInput";
const _DEO = "DeleteEnvironmentOutput";
const _DPL = "DagProcessingLogs";
const _DSP = "DagS3Path";
const _DVES = "DatabaseVpcEndpointService";
const _Di = "Dimensions";
const _E = "Environment";
const _EC = "EnvironmentClass";
const _ECr = "ErrorCode";
const _EM = "EndpointManagement";
const _EMr = "ErrorMessage";
const _EN = "EnvironmentName";
const _ERA = "ExecutionRoleArn";
const _En = "Environments";
const _Ena = "Enabled";
const _Er = "Error";
const _GE = "GetEnvironment";
const _GEI = "GetEnvironmentInput";
const _GEO = "GetEnvironmentOutput";
const _II = "IamIdentity";
const _IRA = "InvokeRestApi";
const _IRAR = "InvokeRestApiRequest";
const _IRARn = "InvokeRestApiResponse";
const _ISE = "InternalServerException";
const _KK = "KmsKey";
const _LC = "LoggingConfiguration";
const _LCI = "LoggingConfigurationInput";
const _LE = "ListEnvironments";
const _LEI = "ListEnvironmentsInput";
const _LEO = "ListEnvironmentsOutput";
const _LL = "LogLevel";
const _LTFR = "ListTagsForResource";
const _LTFRI = "ListTagsForResourceInput";
const _LTFRO = "ListTagsForResourceOutput";
const _LU = "LastUpdate";
const _M = "Message";
const _MD = "MetricDatum";
const _MDe = "MetricData";
const _MLC = "ModuleLoggingConfiguration";
const _MLCI = "ModuleLoggingConfigurationInput";
const _MN = "MetricName";
const _MR = "MaxResults";
const _MW = "MaxWorkers";
const _MWa = "MaxWebservers";
const _MWi = "MinWorkers";
const _MWin = "MinWebservers";
const _Ma = "Maximum";
const _Me = "Method";
const _Mi = "Minimum";
const _N = "Name";
const _NC = "NetworkConfiguration";
const _NT = "NextToken";
const _P = "Path";
const _PM = "PublishMetrics";
const _PMI = "PublishMetricsInput";
const _PMO = "PublishMetricsOutput";
const _PSOV = "PluginsS3ObjectVersion";
const _PSP = "PluginsS3Path";
const _QP = "QueryParameters";
const _RA = "ResourceArn";
const _RACE = "RestApiClientException";
const _RAR = "RestApiResponse";
const _RARB = "RestApiRequestBody";
const _RASC = "RestApiStatusCode";
const _RASE = "RestApiServerException";
const _RNFE = "ResourceNotFoundException";
const _RSOV = "RequirementsS3ObjectVersion";
const _RSP = "RequirementsS3Path";
const _S = "Schedulers";
const _SBA = "SourceBucketArn";
const _SC = "SampleCount";
const _SGI = "SecurityGroupIds";
const _SI = "SubnetIds";
const _SL = "SchedulerLogs";
const _SRA = "ServiceRoleArn";
const _SS = "StatisticSet";
const _SSSOV = "StartupScriptS3ObjectVersion";
const _SSSP = "StartupScriptS3Path";
const _SV = "StatisticValues";
const _So = "Source";
const _St = "Status";
const _Su = "Sum";
const _T = "Token";
const _TL = "TaskLogs";
const _TR = "TagResource";
const _TRI = "TagResourceInput";
const _TRO = "TagResourceOutput";
const _Ta = "Tags";
const _Ti = "Timestamp";
const _U = "Unit";
const _UE = "UpdateError";
const _UEI = "UpdateEnvironmentInput";
const _UEO = "UpdateEnvironmentOutput";
const _UEp = "UpdateEnvironment";
const _UNCI = "UpdateNetworkConfigurationInput";
const _UR = "UntagResource";
const _URI = "UntagResourceInput";
const _URO = "UntagResourceOutput";
const _V = "Value";
const _VE = "ValidationException";
const _WAM = "WebserverAccessMode";
const _WL = "WebserverLogs";
const _WLo = "WorkerLogs";
const _WMWS = "WeeklyMaintenanceWindowStart";
const _WRS = "WorkerReplacementStrategy";
const _WSH = "WebServerHostname";
const _WT = "WebToken";
const _WU = "WebserverUrl";
const _WVES = "WebserverVpcEndpointService";
const _c = "client";
const _e = "error";
const _en = "endpoint";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _m = "message";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.mwaa";
const _tK = "tagKeys";
const n0 = "com.amazonaws.mwaa";

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

import {
  AccessDeniedException,
  InternalServerException,
  ResourceNotFoundException,
  RestApiClientException,
  RestApiServerException,
  ValidationException,
} from "../models/errors";
import { MWAAServiceException } from "../models/MWAAServiceException";

/* eslint no-var: 0 */
var ConfigValue: StaticSimpleSchema = [0, n0, _CV, 8, 0];
var RestApiRequestBody: StaticSimpleSchema = [0, n0, _RARB, 8, 15];
var RestApiResponse: StaticSimpleSchema = [0, n0, _RAR, 8, 15];
var Token: StaticSimpleSchema = [0, n0, _T, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var CreateCliTokenRequest$: StaticStructureSchema = [3, n0, _CCTR,
  0,
  [_N],
  [[0, 1]]
];
export var CreateCliTokenResponse$: StaticStructureSchema = [3, n0, _CCTRr,
  0,
  [_CT, _WSH],
  [[() => Token, 0], 0]
];
export var CreateEnvironmentInput$: StaticStructureSchema = [3, n0, _CEI,
  0,
  [_N, _ERA, _SBA, _DSP, _NC, _PSP, _PSOV, _RSP, _RSOV, _SSSP, _SSSOV, _ACO, _EC, _MW, _KK, _AV, _LC, _WMWS, _Ta, _WAM, _MWi, _S, _EM, _MWin, _MWa],
  [[0, 1], 0, 0, 0, () => NetworkConfiguration$, 0, 0, 0, 0, 0, 0, [() => AirflowConfigurationOptions, 0], 0, 1, 0, 0, () => LoggingConfigurationInput$, 0, 128 | 0, 0, 1, 1, 0, 1, 1]
];
export var CreateEnvironmentOutput$: StaticStructureSchema = [3, n0, _CEO,
  0,
  [_A],
  [0]
];
export var CreateWebLoginTokenRequest$: StaticStructureSchema = [3, n0, _CWLTR,
  0,
  [_N],
  [[0, 1]]
];
export var CreateWebLoginTokenResponse$: StaticStructureSchema = [3, n0, _CWLTRr,
  0,
  [_WT, _WSH, _II, _AI],
  [[() => Token, 0], 0, 0, 0]
];
export var DeleteEnvironmentInput$: StaticStructureSchema = [3, n0, _DEI,
  0,
  [_N],
  [[0, 1]]
];
export var DeleteEnvironmentOutput$: StaticStructureSchema = [3, n0, _DEO,
  0,
  [],
  []
];
export var Dimension$: StaticStructureSchema = [3, n0, _D,
  0,
  [_N, _V],
  [0, 0]
];
export var Environment$: StaticStructureSchema = [3, n0, _E,
  0,
  [_N, _St, _A, _CA, _WU, _ERA, _SRA, _KK, _AV, _SBA, _DSP, _PSP, _PSOV, _RSP, _RSOV, _SSSP, _SSSOV, _ACO, _EC, _MW, _NC, _LC, _LU, _WMWS, _Ta, _WAM, _MWi, _S, _WVES, _DVES, _CEQ, _EM, _MWin, _MWa],
  [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [() => AirflowConfigurationOptions, 0], 0, 1, () => NetworkConfiguration$, () => LoggingConfiguration$, () => LastUpdate$, 0, 128 | 0, 0, 1, 1, 0, 0, 0, 0, 1, 1]
];
export var GetEnvironmentInput$: StaticStructureSchema = [3, n0, _GEI,
  0,
  [_N],
  [[0, 1]]
];
export var GetEnvironmentOutput$: StaticStructureSchema = [3, n0, _GEO,
  0,
  [_E],
  [[() => Environment$, 0]]
];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _s, [_hE]: 500 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var InvokeRestApiRequest$: StaticStructureSchema = [3, n0, _IRAR,
  0,
  [_N, _P, _Me, _QP, _B],
  [[0, 1], 0, 0, 15, [() => RestApiRequestBody, 0]]
];
export var InvokeRestApiResponse$: StaticStructureSchema = [3, n0, _IRARn,
  0,
  [_RASC, _RAR],
  [1, [() => RestApiResponse, 0]]
];
export var LastUpdate$: StaticStructureSchema = [3, n0, _LU,
  0,
  [_St, _CA, _Er, _So, _WRS],
  [0, 4, () => UpdateError$, 0, 0]
];
export var ListEnvironmentsInput$: StaticStructureSchema = [3, n0, _LEI,
  0,
  [_NT, _MR],
  [[0, { [_hQ]: _NT }], [1, { [_hQ]: _MR }]]
];
export var ListEnvironmentsOutput$: StaticStructureSchema = [3, n0, _LEO,
  0,
  [_En, _NT],
  [64 | 0, 0]
];
export var ListTagsForResourceInput$: StaticStructureSchema = [3, n0, _LTFRI,
  0,
  [_RA],
  [[0, 1]]
];
export var ListTagsForResourceOutput$: StaticStructureSchema = [3, n0, _LTFRO,
  0,
  [_Ta],
  [128 | 0]
];
export var LoggingConfiguration$: StaticStructureSchema = [3, n0, _LC,
  0,
  [_DPL, _SL, _WL, _WLo, _TL],
  [() => ModuleLoggingConfiguration$, () => ModuleLoggingConfiguration$, () => ModuleLoggingConfiguration$, () => ModuleLoggingConfiguration$, () => ModuleLoggingConfiguration$]
];
export var LoggingConfigurationInput$: StaticStructureSchema = [3, n0, _LCI,
  0,
  [_DPL, _SL, _WL, _WLo, _TL],
  [() => ModuleLoggingConfigurationInput$, () => ModuleLoggingConfigurationInput$, () => ModuleLoggingConfigurationInput$, () => ModuleLoggingConfigurationInput$, () => ModuleLoggingConfigurationInput$]
];
export var MetricDatum$: StaticStructureSchema = [3, n0, _MD,
  0,
  [_MN, _Ti, _Di, _V, _U, _SV],
  [0, 4, () => Dimensions, 1, 0, () => StatisticSet$]
];
export var ModuleLoggingConfiguration$: StaticStructureSchema = [3, n0, _MLC,
  0,
  [_Ena, _LL, _CWLGA],
  [2, 0, 0]
];
export var ModuleLoggingConfigurationInput$: StaticStructureSchema = [3, n0, _MLCI,
  0,
  [_Ena, _LL],
  [2, 0]
];
export var NetworkConfiguration$: StaticStructureSchema = [3, n0, _NC,
  0,
  [_SI, _SGI],
  [64 | 0, 64 | 0]
];
export var PublishMetricsInput$: StaticStructureSchema = [3, n0, _PMI,
  0,
  [_EN, _MDe],
  [[0, 1], () => MetricData]
];
export var PublishMetricsOutput$: StaticStructureSchema = [3, n0, _PMO,
  0,
  [],
  []
];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var RestApiClientException$: StaticErrorSchema = [-3, n0, _RACE,
  { [_e]: _c, [_hE]: 400 },
  [_RASC, _RAR],
  [1, [() => RestApiResponse, 0]]
];
TypeRegistry.for(n0).registerError(RestApiClientException$, RestApiClientException);
export var RestApiServerException$: StaticErrorSchema = [-3, n0, _RASE,
  { [_e]: _c, [_hE]: 400 },
  [_RASC, _RAR],
  [1, [() => RestApiResponse, 0]]
];
TypeRegistry.for(n0).registerError(RestApiServerException$, RestApiServerException);
export var StatisticSet$: StaticStructureSchema = [3, n0, _SS,
  0,
  [_SC, _Su, _Mi, _Ma],
  [1, 1, 1, 1]
];
export var TagResourceInput$: StaticStructureSchema = [3, n0, _TRI,
  0,
  [_RA, _Ta],
  [[0, 1], 128 | 0]
];
export var TagResourceOutput$: StaticStructureSchema = [3, n0, _TRO,
  0,
  [],
  []
];
export var UntagResourceInput$: StaticStructureSchema = [3, n0, _URI,
  0,
  [_RA, _tK],
  [[0, 1], [64 | 0, { [_hQ]: _tK }]]
];
export var UntagResourceOutput$: StaticStructureSchema = [3, n0, _URO,
  0,
  [],
  []
];
export var UpdateEnvironmentInput$: StaticStructureSchema = [3, n0, _UEI,
  0,
  [_N, _ERA, _ACO, _AV, _DSP, _EC, _LC, _MW, _MWi, _MWa, _MWin, _WRS, _NC, _PSP, _PSOV, _RSP, _RSOV, _S, _SBA, _SSSP, _SSSOV, _WAM, _WMWS],
  [[0, 1], 0, [() => AirflowConfigurationOptions, 0], 0, 0, 0, () => LoggingConfigurationInput$, 1, 1, 1, 1, 0, () => UpdateNetworkConfigurationInput$, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
];
export var UpdateEnvironmentOutput$: StaticStructureSchema = [3, n0, _UEO,
  0,
  [_A],
  [0]
];
export var UpdateError$: StaticStructureSchema = [3, n0, _UE,
  0,
  [_ECr, _EMr],
  [0, 0]
];
export var UpdateNetworkConfigurationInput$: StaticStructureSchema = [3, n0, _UNCI,
  0,
  [_SGI],
  [64 | 0]
];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var MWAAServiceException$: StaticErrorSchema = [-3, _sm, "MWAAServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(MWAAServiceException$, MWAAServiceException);
var Dimensions: StaticListSchema = [1, n0, _Di,
  0, () => Dimension$
];
var EnvironmentList = 64 | 0;
var MetricData: StaticListSchema = [1, n0, _MDe,
  0, () => MetricDatum$
];
var SecurityGroupList = 64 | 0;
var SubnetList = 64 | 0;
var TagKeyList = 64 | 0;
var AirflowConfigurationOptions: StaticMapSchema = [2, n0, _ACO,
  8, [0,
    0]
  , [() => ConfigValue,
    0]
];
var TagMap = 128 | 0;
export var CreateCliToken$: StaticOperationSchema = [9, n0, _CCT,
  { [_en]: ["env."], [_h]: ["POST", "/clitoken/{Name}", 200] }, () => CreateCliTokenRequest$, () => CreateCliTokenResponse$
];
export var CreateEnvironment$: StaticOperationSchema = [9, n0, _CE,
  { [_en]: ["api."], [_h]: ["PUT", "/environments/{Name}", 200] }, () => CreateEnvironmentInput$, () => CreateEnvironmentOutput$
];
export var CreateWebLoginToken$: StaticOperationSchema = [9, n0, _CWLT,
  { [_en]: ["env."], [_h]: ["POST", "/webtoken/{Name}", 200] }, () => CreateWebLoginTokenRequest$, () => CreateWebLoginTokenResponse$
];
export var DeleteEnvironment$: StaticOperationSchema = [9, n0, _DE,
  { [_en]: ["api."], [_h]: ["DELETE", "/environments/{Name}", 200] }, () => DeleteEnvironmentInput$, () => DeleteEnvironmentOutput$
];
export var GetEnvironment$: StaticOperationSchema = [9, n0, _GE,
  { [_en]: ["api."], [_h]: ["GET", "/environments/{Name}", 200] }, () => GetEnvironmentInput$, () => GetEnvironmentOutput$
];
export var InvokeRestApi$: StaticOperationSchema = [9, n0, _IRA,
  { [_en]: ["env."], [_h]: ["POST", "/restapi/{Name}", 200] }, () => InvokeRestApiRequest$, () => InvokeRestApiResponse$
];
export var ListEnvironments$: StaticOperationSchema = [9, n0, _LE,
  { [_en]: ["api."], [_h]: ["GET", "/environments", 200] }, () => ListEnvironmentsInput$, () => ListEnvironmentsOutput$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  { [_en]: ["api."], [_h]: ["GET", "/tags/{ResourceArn}", 200] }, () => ListTagsForResourceInput$, () => ListTagsForResourceOutput$
];
export var PublishMetrics$: StaticOperationSchema = [9, n0, _PM,
  { [_en]: ["ops."], [_h]: ["POST", "/metrics/environments/{EnvironmentName}", 200] }, () => PublishMetricsInput$, () => PublishMetricsOutput$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  { [_en]: ["api."], [_h]: ["POST", "/tags/{ResourceArn}", 200] }, () => TagResourceInput$, () => TagResourceOutput$
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  { [_en]: ["api."], [_h]: ["DELETE", "/tags/{ResourceArn}", 200] }, () => UntagResourceInput$, () => UntagResourceOutput$
];
export var UpdateEnvironment$: StaticOperationSchema = [9, n0, _UEp,
  { [_en]: ["api."], [_h]: ["PATCH", "/environments/{Name}", 200] }, () => UpdateEnvironmentInput$, () => UpdateEnvironmentOutput$
];

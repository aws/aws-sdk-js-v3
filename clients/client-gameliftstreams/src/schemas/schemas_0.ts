const _A = "Arn";
const _AA = "ApplicationArns";
const _AAI = "AssociateApplicationsInput";
const _AAO = "AssociateApplicationsOutput";
const _AAp = "ApplicationArn";
const _AAs = "AssociatedApplications";
const _AAss = "AssociateApplications";
const _AC = "AllocatedCapacity";
const _ADE = "AccessDeniedException";
const _AEV = "AdditionalEnvironmentVariables";
const _AI = "ApplicationIdentifiers";
const _AIp = "ApplicationIdentifier";
const _ALA = "AdditionalLaunchArgs";
const _ALOU = "ApplicationLogOutputUri";
const _ALP = "ApplicationLogPaths";
const _AOC = "AlwaysOnCapacity";
const _AS = "ApplicationSummary";
const _ASG = "AssociatedStreamGroups";
const _ASGL = "AddStreamGroupLocations";
const _ASGLI = "AddStreamGroupLocationsInput";
const _ASGLO = "AddStreamGroupLocationsOutput";
const _ASL = "ApplicationSummaryList";
const _ASU = "ApplicationSourceUri";
const _CA = "CreatedAt";
const _CAI = "CreateApplicationInput";
const _CAO = "CreateApplicationOutput";
const _CAr = "CreateApplication";
const _CE = "ConflictException";
const _CSG = "CreateStreamGroup";
const _CSGI = "CreateStreamGroupInput";
const _CSGO = "CreateStreamGroupOutput";
const _CSSC = "CreateStreamSessionConnection";
const _CSSCI = "CreateStreamSessionConnectionInput";
const _CSSCO = "CreateStreamSessionConnectionOutput";
const _CT = "ClientToken";
const _CTS = "ConnectionTimeoutSeconds";
const _D = "Description";
const _DA = "DefaultApplication";
const _DAI = "DefaultApplicationIdentifier";
const _DAIe = "DeleteApplicationInput";
const _DAIi = "DisassociateApplicationsInput";
const _DAO = "DisassociateApplicationsOutput";
const _DAe = "DeleteApplication";
const _DAi = "DisassociateApplications";
const _DSG = "DeleteStreamGroup";
const _DSGI = "DeleteStreamGroupInput";
const _EA = "ExpiresAt";
const _EFM = "ExportFilesMetadata";
const _EFS = "ExportFilesStatus";
const _EP = "ExecutablePath";
const _ESSF = "ExportStreamSessionFiles";
const _ESSFI = "ExportStreamSessionFilesInput";
const _ESSFO = "ExportStreamSessionFilesOutput";
const _GA = "GetApplication";
const _GAI = "GetApplicationInput";
const _GAO = "GetApplicationOutput";
const _GSG = "GetStreamGroup";
const _GSGI = "GetStreamGroupInput";
const _GSGO = "GetStreamGroupOutput";
const _GSS = "GetStreamSession";
const _GSSI = "GetStreamSessionInput";
const _GSSO = "GetStreamSessionOutput";
const _I = "Identifier";
const _IC = "IdleCapacity";
const _ISE = "InternalServerException";
const _Id = "Id";
const _It = "Items";
const _L = "Locations";
const _LA = "ListApplications";
const _LAI = "ListApplicationsInput";
const _LAO = "ListApplicationsOutput";
const _LC = "LocationConfigurations";
const _LCo = "LocationConfiguration";
const _LFLU = "LogFileLocationUri";
const _LN = "LocationName";
const _LS = "LocationStates";
const _LSG = "ListStreamGroups";
const _LSGI = "ListStreamGroupsInput";
const _LSGO = "ListStreamGroupsOutput";
const _LSS = "ListStreamSessions";
const _LSSBA = "ListStreamSessionsByAccount";
const _LSSBAI = "ListStreamSessionsByAccountInput";
const _LSSBAO = "ListStreamSessionsByAccountOutput";
const _LSSI = "ListStreamSessionsInput";
const _LSSO = "ListStreamSessionsOutput";
const _LSo = "LocationState";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _LUA = "LastUpdatedAt";
const _Lo = "Location";
const _M = "Message";
const _MC = "MaximumCapacity";
const _MR = "MaxResults";
const _NT = "NextToken";
const _ODC = "OnDemandCapacity";
const _OU = "OutputUri";
const _P = "Protocol";
const _PSC = "PerformanceStatsConfiguration";
const _RA = "ResourceArn";
const _RC = "RequestedCapacity";
const _RE = "RuntimeEnvironment";
const _RNFE = "ResourceNotFoundException";
const _RS = "ReplicationStatuses";
const _RSGL = "RemoveStreamGroupLocations";
const _RSGLI = "RemoveStreamGroupLocationsInput";
const _RSe = "ReplicationStatus";
const _S = "Status";
const _SC = "StreamClass";
const _SGI = "StreamGroupId";
const _SGS = "StreamGroupSummary";
const _SGSL = "StreamGroupSummaryList";
const _SLS = "SessionLengthSeconds";
const _SQEE = "ServiceQuotaExceededException";
const _SR = "SignalRequest";
const _SRi = "SignalResponse";
const _SRt = "StatusReason";
const _SSI = "StreamSessionIdentifier";
const _SSS = "StreamSessionSummary";
const _SSSI = "StartStreamSessionInput";
const _SSSL = "StreamSessionSummaryList";
const _SSSO = "StartStreamSessionOutput";
const _SSSt = "StartStreamSession";
const _SWC = "SharedWithClient";
const _T = "Tags";
const _TE = "ThrottlingException";
const _TIC = "TargetIdleCapacity";
const _TK = "TagKeys";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _TSS = "TerminateStreamSession";
const _TSSI = "TerminateStreamSessionInput";
const _Ty = "Type";
const _UA = "UpdateApplication";
const _UAI = "UpdateApplicationInput";
const _UAO = "UpdateApplicationOutput";
const _UI = "UserId";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _USG = "UpdateStreamGroup";
const _USGI = "UpdateStreamGroupInput";
const _USGO = "UpdateStreamGroupOutput";
const _V = "Version";
const _VE = "ValidationException";
const _WSPU = "WebSdkProtocolUrl";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _l = "locations";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.gameliftstreams";
const _tK = "tagKeys";
const n0 = "com.amazonaws.gameliftstreams";

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
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { GameLiftStreamsServiceException } from "../models/GameLiftStreamsServiceException";

/* eslint no-var: 0 */
var SignalRequest: StaticSimpleSchema = [0, n0, _SR, 8, 0];
var SignalResponse: StaticSimpleSchema = [0, n0, _SRi, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_M], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var AddStreamGroupLocationsInput$: StaticStructureSchema = [
  3,
  n0,
  _ASGLI,
  0,
  [_I, _LC],
  [[0, 1], () => LocationConfigurations],
];
export var AddStreamGroupLocationsOutput$: StaticStructureSchema = [
  3,
  n0,
  _ASGLO,
  0,
  [_I, _L],
  [0, () => LocationStates],
];
export var ApplicationSummary$: StaticStructureSchema = [
  3,
  n0,
  _AS,
  0,
  [_A, _Id, _D, _S, _CA, _LUA, _RE],
  [0, 0, 0, 0, 4, 4, () => RuntimeEnvironment$],
];
export var AssociateApplicationsInput$: StaticStructureSchema = [3, n0, _AAI, 0, [_I, _AI], [[0, 1], 64 | 0]];
export var AssociateApplicationsOutput$: StaticStructureSchema = [3, n0, _AAO, 0, [_A, _AA], [0, 64 | 0]];
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var CreateApplicationInput$: StaticStructureSchema = [
  3,
  n0,
  _CAI,
  0,
  [_D, _RE, _EP, _ASU, _ALP, _ALOU, _T, _CT],
  [0, () => RuntimeEnvironment$, 0, 0, 64 | 0, 0, 128 | 0, [0, 4]],
];
export var CreateApplicationOutput$: StaticStructureSchema = [
  3,
  n0,
  _CAO,
  0,
  [_A, _D, _RE, _EP, _ALP, _ALOU, _ASU, _Id, _S, _SRt, _RS, _CA, _LUA, _ASG],
  [0, 0, () => RuntimeEnvironment$, 0, 64 | 0, 0, 0, 0, 0, 0, () => ReplicationStatuses, 4, 4, 64 | 0],
];
export var CreateStreamGroupInput$: StaticStructureSchema = [
  3,
  n0,
  _CSGI,
  0,
  [_D, _SC, _DAI, _LC, _T, _CT],
  [0, 0, 0, () => LocationConfigurations, 128 | 0, [0, 4]],
];
export var CreateStreamGroupOutput$: StaticStructureSchema = [
  3,
  n0,
  _CSGO,
  0,
  [_A, _D, _DA, _LS, _SC, _Id, _S, _SRt, _LUA, _CA, _EA, _AAs],
  [0, 0, () => DefaultApplication$, () => LocationStates, 0, 0, 0, 0, 4, 4, 4, 64 | 0],
];
export var CreateStreamSessionConnectionInput$: StaticStructureSchema = [
  3,
  n0,
  _CSSCI,
  0,
  [_CT, _I, _SSI, _SR],
  [
    [0, 4],
    [0, 1],
    [0, 1],
    [() => SignalRequest, 0],
  ],
];
export var CreateStreamSessionConnectionOutput$: StaticStructureSchema = [
  3,
  n0,
  _CSSCO,
  0,
  [_SRi],
  [[() => SignalResponse, 0]],
];
export var DefaultApplication$: StaticStructureSchema = [3, n0, _DA, 0, [_Id, _A], [0, 0]];
export var DeleteApplicationInput$: StaticStructureSchema = [3, n0, _DAIe, 0, [_I], [[0, 1]]];
export var DeleteStreamGroupInput$: StaticStructureSchema = [3, n0, _DSGI, 0, [_I], [[0, 1]]];
export var DisassociateApplicationsInput$: StaticStructureSchema = [3, n0, _DAIi, 0, [_I, _AI], [[0, 1], 64 | 0]];
export var DisassociateApplicationsOutput$: StaticStructureSchema = [3, n0, _DAO, 0, [_A, _AA], [0, 64 | 0]];
export var ExportFilesMetadata$: StaticStructureSchema = [3, n0, _EFM, 0, [_S, _SRt, _OU], [0, 0, 0]];
export var ExportStreamSessionFilesInput$: StaticStructureSchema = [
  3,
  n0,
  _ESSFI,
  0,
  [_I, _SSI, _OU],
  [[0, 1], [0, 1], 0],
];
export var ExportStreamSessionFilesOutput$: StaticStructureSchema = [3, n0, _ESSFO, 0, [], []];
export var GetApplicationInput$: StaticStructureSchema = [3, n0, _GAI, 0, [_I], [[0, 1]]];
export var GetApplicationOutput$: StaticStructureSchema = [
  3,
  n0,
  _GAO,
  0,
  [_A, _D, _RE, _EP, _ALP, _ALOU, _ASU, _Id, _S, _SRt, _RS, _CA, _LUA, _ASG],
  [0, 0, () => RuntimeEnvironment$, 0, 64 | 0, 0, 0, 0, 0, 0, () => ReplicationStatuses, 4, 4, 64 | 0],
];
export var GetStreamGroupInput$: StaticStructureSchema = [3, n0, _GSGI, 0, [_I], [[0, 1]]];
export var GetStreamGroupOutput$: StaticStructureSchema = [
  3,
  n0,
  _GSGO,
  0,
  [_A, _D, _DA, _LS, _SC, _Id, _S, _SRt, _LUA, _CA, _EA, _AAs],
  [0, 0, () => DefaultApplication$, () => LocationStates, 0, 0, 0, 0, 4, 4, 4, 64 | 0],
];
export var GetStreamSessionInput$: StaticStructureSchema = [
  3,
  n0,
  _GSSI,
  0,
  [_I, _SSI],
  [
    [0, 1],
    [0, 1],
  ],
];
export var GetStreamSessionOutput$: StaticStructureSchema = [
  3,
  n0,
  _GSSO,
  0,
  [_A, _D, _SGI, _UI, _S, _SRt, _P, _Lo, _SR, _SRi, _CTS, _SLS, _ALA, _AEV, _PSC, _LFLU, _WSPU, _LUA, _CA, _AAp, _EFM],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [() => SignalRequest, 0],
    [() => SignalResponse, 0],
    1,
    1,
    64 | 0,
    128 | 0,
    () => PerformanceStatsConfiguration$,
    0,
    0,
    4,
    4,
    0,
    () => ExportFilesMetadata$,
  ],
];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s, [_hE]: 500 }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var ListApplicationsInput$: StaticStructureSchema = [
  3,
  n0,
  _LAI,
  0,
  [_NT, _MR],
  [
    [0, { [_hQ]: _NT }],
    [1, { [_hQ]: _MR }],
  ],
];
export var ListApplicationsOutput$: StaticStructureSchema = [
  3,
  n0,
  _LAO,
  0,
  [_It, _NT],
  [() => ApplicationSummaryList, 0],
];
export var ListStreamGroupsInput$: StaticStructureSchema = [
  3,
  n0,
  _LSGI,
  0,
  [_NT, _MR],
  [
    [0, { [_hQ]: _NT }],
    [1, { [_hQ]: _MR }],
  ],
];
export var ListStreamGroupsOutput$: StaticStructureSchema = [
  3,
  n0,
  _LSGO,
  0,
  [_It, _NT],
  [() => StreamGroupSummaryList, 0],
];
export var ListStreamSessionsByAccountInput$: StaticStructureSchema = [
  3,
  n0,
  _LSSBAI,
  0,
  [_S, _EFS, _NT, _MR],
  [
    [0, { [_hQ]: _S }],
    [0, { [_hQ]: _EFS }],
    [0, { [_hQ]: _NT }],
    [1, { [_hQ]: _MR }],
  ],
];
export var ListStreamSessionsByAccountOutput$: StaticStructureSchema = [
  3,
  n0,
  _LSSBAO,
  0,
  [_It, _NT],
  [() => StreamSessionSummaryList, 0],
];
export var ListStreamSessionsInput$: StaticStructureSchema = [
  3,
  n0,
  _LSSI,
  0,
  [_S, _EFS, _NT, _MR, _I],
  [
    [0, { [_hQ]: _S }],
    [0, { [_hQ]: _EFS }],
    [0, { [_hQ]: _NT }],
    [1, { [_hQ]: _MR }],
    [0, 1],
  ],
];
export var ListStreamSessionsOutput$: StaticStructureSchema = [
  3,
  n0,
  _LSSO,
  0,
  [_It, _NT],
  [() => StreamSessionSummaryList, 0],
];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RA], [[0, 1]]];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_T], [128 | 0]];
export var LocationConfiguration$: StaticStructureSchema = [
  3,
  n0,
  _LCo,
  0,
  [_LN, _AOC, _ODC, _TIC, _MC],
  [0, 1, 1, 1, 1],
];
export var LocationState$: StaticStructureSchema = [
  3,
  n0,
  _LSo,
  0,
  [_LN, _S, _AOC, _ODC, _TIC, _MC, _RC, _AC, _IC],
  [0, 0, 1, 1, 1, 1, 1, 1, 1],
];
export var PerformanceStatsConfiguration$: StaticStructureSchema = [3, n0, _PSC, 0, [_SWC], [2]];
export var RemoveStreamGroupLocationsInput$: StaticStructureSchema = [
  3,
  n0,
  _RSGLI,
  0,
  [_I, _L],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _l }],
  ],
];
export var ReplicationStatus$: StaticStructureSchema = [3, n0, _RSe, 0, [_Lo, _S], [0, 0]];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var RuntimeEnvironment$: StaticStructureSchema = [3, n0, _RE, 0, [_Ty, _V], [0, 0]];
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE, { [_e]: _c, [_hE]: 402 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var StartStreamSessionInput$: StaticStructureSchema = [
  3,
  n0,
  _SSSI,
  0,
  [_CT, _D, _I, _P, _SR, _AIp, _UI, _L, _CTS, _SLS, _ALA, _AEV, _PSC],
  [
    [0, 4],
    0,
    [0, 1],
    0,
    [() => SignalRequest, 0],
    0,
    0,
    64 | 0,
    1,
    1,
    64 | 0,
    128 | 0,
    () => PerformanceStatsConfiguration$,
  ],
];
export var StartStreamSessionOutput$: StaticStructureSchema = [
  3,
  n0,
  _SSSO,
  0,
  [_A, _D, _SGI, _UI, _S, _SRt, _P, _Lo, _SR, _SRi, _CTS, _SLS, _ALA, _AEV, _PSC, _LFLU, _WSPU, _LUA, _CA, _AAp, _EFM],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [() => SignalRequest, 0],
    [() => SignalResponse, 0],
    1,
    1,
    64 | 0,
    128 | 0,
    () => PerformanceStatsConfiguration$,
    0,
    0,
    4,
    4,
    0,
    () => ExportFilesMetadata$,
  ],
];
export var StreamGroupSummary$: StaticStructureSchema = [
  3,
  n0,
  _SGS,
  0,
  [_A, _Id, _D, _DA, _SC, _S, _CA, _LUA, _EA],
  [0, 0, 0, () => DefaultApplication$, 0, 0, 4, 4, 4],
];
export var StreamSessionSummary$: StaticStructureSchema = [
  3,
  n0,
  _SSS,
  0,
  [_A, _UI, _S, _SRt, _P, _LUA, _CA, _AAp, _EFM, _Lo],
  [0, 0, 0, 0, 0, 4, 4, 0, () => ExportFilesMetadata$, 0],
];
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR, 0, [_RA, _T], [[0, 1], 128 | 0]];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var TerminateStreamSessionInput$: StaticStructureSchema = [
  3,
  n0,
  _TSSI,
  0,
  [_I, _SSI],
  [
    [0, 1],
    [0, 1],
  ],
];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var UntagResourceRequest$: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_RA, _TK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _tK }],
  ],
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateApplicationInput$: StaticStructureSchema = [
  3,
  n0,
  _UAI,
  0,
  [_I, _D, _ALP, _ALOU],
  [[0, 1], 0, 64 | 0, 0],
];
export var UpdateApplicationOutput$: StaticStructureSchema = [
  3,
  n0,
  _UAO,
  0,
  [_A, _D, _RE, _EP, _ALP, _ALOU, _ASU, _Id, _S, _SRt, _RS, _CA, _LUA, _ASG],
  [0, 0, () => RuntimeEnvironment$, 0, 64 | 0, 0, 0, 0, 0, 0, () => ReplicationStatuses, 4, 4, 64 | 0],
];
export var UpdateStreamGroupInput$: StaticStructureSchema = [
  3,
  n0,
  _USGI,
  0,
  [_I, _LC, _D, _DAI],
  [[0, 1], () => LocationConfigurations, 0, 0],
];
export var UpdateStreamGroupOutput$: StaticStructureSchema = [
  3,
  n0,
  _USGO,
  0,
  [_A, _D, _DA, _LS, _SC, _Id, _S, _SRt, _LUA, _CA, _EA, _AAs],
  [0, 0, () => DefaultApplication$, () => LocationStates, 0, 0, 0, 0, 4, 4, 4, 64 | 0],
];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
var __Unit = "unit" as const;
export var GameLiftStreamsServiceException$: StaticErrorSchema = [
  -3,
  _sm,
  "GameLiftStreamsServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(GameLiftStreamsServiceException$, GameLiftStreamsServiceException);
var ApplicationSummaryList: StaticListSchema = [1, n0, _ASL, 0, () => ApplicationSummary$];
var ArnList = 64 | 0;
var FilePaths = 64 | 0;
var GameLaunchArgList = 64 | 0;
var Identifiers = 64 | 0;
var LocationConfigurations: StaticListSchema = [1, n0, _LC, 0, () => LocationConfiguration$];
var LocationList = 64 | 0;
var LocationsList = 64 | 0;
var LocationStates: StaticListSchema = [1, n0, _LS, 0, () => LocationState$];
var ReplicationStatuses: StaticListSchema = [1, n0, _RS, 0, () => ReplicationStatus$];
var StreamGroupSummaryList: StaticListSchema = [1, n0, _SGSL, 0, () => StreamGroupSummary$];
var StreamSessionSummaryList: StaticListSchema = [1, n0, _SSSL, 0, () => StreamSessionSummary$];
var TagKeyList = 64 | 0;
var EnvironmentVariables = 128 | 0;
var Tags = 128 | 0;
export var AddStreamGroupLocations$: StaticOperationSchema = [
  9,
  n0,
  _ASGL,
  { [_h]: ["POST", "/streamgroups/{Identifier}/locations", 200] },
  () => AddStreamGroupLocationsInput$,
  () => AddStreamGroupLocationsOutput$,
];
export var AssociateApplications$: StaticOperationSchema = [
  9,
  n0,
  _AAss,
  { [_h]: ["POST", "/streamgroups/{Identifier}/associations", 200] },
  () => AssociateApplicationsInput$,
  () => AssociateApplicationsOutput$,
];
export var CreateApplication$: StaticOperationSchema = [
  9,
  n0,
  _CAr,
  { [_h]: ["POST", "/applications", 201] },
  () => CreateApplicationInput$,
  () => CreateApplicationOutput$,
];
export var CreateStreamGroup$: StaticOperationSchema = [
  9,
  n0,
  _CSG,
  { [_h]: ["POST", "/streamgroups", 201] },
  () => CreateStreamGroupInput$,
  () => CreateStreamGroupOutput$,
];
export var CreateStreamSessionConnection$: StaticOperationSchema = [
  9,
  n0,
  _CSSC,
  { [_h]: ["POST", "/streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}/connections", 200] },
  () => CreateStreamSessionConnectionInput$,
  () => CreateStreamSessionConnectionOutput$,
];
export var DeleteApplication$: StaticOperationSchema = [
  9,
  n0,
  _DAe,
  { [_h]: ["DELETE", "/applications/{Identifier}", 204] },
  () => DeleteApplicationInput$,
  () => __Unit,
];
export var DeleteStreamGroup$: StaticOperationSchema = [
  9,
  n0,
  _DSG,
  { [_h]: ["DELETE", "/streamgroups/{Identifier}", 204] },
  () => DeleteStreamGroupInput$,
  () => __Unit,
];
export var DisassociateApplications$: StaticOperationSchema = [
  9,
  n0,
  _DAi,
  { [_h]: ["POST", "/streamgroups/{Identifier}/disassociations", 200] },
  () => DisassociateApplicationsInput$,
  () => DisassociateApplicationsOutput$,
];
export var ExportStreamSessionFiles$: StaticOperationSchema = [
  9,
  n0,
  _ESSF,
  { [_h]: ["PUT", "/streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}/exportfiles", 200] },
  () => ExportStreamSessionFilesInput$,
  () => ExportStreamSessionFilesOutput$,
];
export var GetApplication$: StaticOperationSchema = [
  9,
  n0,
  _GA,
  { [_h]: ["GET", "/applications/{Identifier}", 200] },
  () => GetApplicationInput$,
  () => GetApplicationOutput$,
];
export var GetStreamGroup$: StaticOperationSchema = [
  9,
  n0,
  _GSG,
  { [_h]: ["GET", "/streamgroups/{Identifier}", 200] },
  () => GetStreamGroupInput$,
  () => GetStreamGroupOutput$,
];
export var GetStreamSession$: StaticOperationSchema = [
  9,
  n0,
  _GSS,
  { [_h]: ["GET", "/streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}", 200] },
  () => GetStreamSessionInput$,
  () => GetStreamSessionOutput$,
];
export var ListApplications$: StaticOperationSchema = [
  9,
  n0,
  _LA,
  { [_h]: ["GET", "/applications", 200] },
  () => ListApplicationsInput$,
  () => ListApplicationsOutput$,
];
export var ListStreamGroups$: StaticOperationSchema = [
  9,
  n0,
  _LSG,
  { [_h]: ["GET", "/streamgroups", 200] },
  () => ListStreamGroupsInput$,
  () => ListStreamGroupsOutput$,
];
export var ListStreamSessions$: StaticOperationSchema = [
  9,
  n0,
  _LSS,
  { [_h]: ["GET", "/streamgroups/{Identifier}/streamsessions", 200] },
  () => ListStreamSessionsInput$,
  () => ListStreamSessionsOutput$,
];
export var ListStreamSessionsByAccount$: StaticOperationSchema = [
  9,
  n0,
  _LSSBA,
  { [_h]: ["GET", "/streamsessions", 200] },
  () => ListStreamSessionsByAccountInput$,
  () => ListStreamSessionsByAccountOutput$,
];
export var ListTagsForResource$: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["GET", "/tags/{ResourceArn}", 200] },
  () => ListTagsForResourceRequest$,
  () => ListTagsForResourceResponse$,
];
export var RemoveStreamGroupLocations$: StaticOperationSchema = [
  9,
  n0,
  _RSGL,
  { [_h]: ["DELETE", "/streamgroups/{Identifier}/locations", 204] },
  () => RemoveStreamGroupLocationsInput$,
  () => __Unit,
];
export var StartStreamSession$: StaticOperationSchema = [
  9,
  n0,
  _SSSt,
  { [_h]: ["POST", "/streamgroups/{Identifier}/streamsessions", 201] },
  () => StartStreamSessionInput$,
  () => StartStreamSessionOutput$,
];
export var TagResource$: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/tags/{ResourceArn}", 200] },
  () => TagResourceRequest$,
  () => TagResourceResponse$,
];
export var TerminateStreamSession$: StaticOperationSchema = [
  9,
  n0,
  _TSS,
  { [_h]: ["DELETE", "/streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}", 204] },
  () => TerminateStreamSessionInput$,
  () => __Unit,
];
export var UntagResource$: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["DELETE", "/tags/{ResourceArn}", 200] },
  () => UntagResourceRequest$,
  () => UntagResourceResponse$,
];
export var UpdateApplication$: StaticOperationSchema = [
  9,
  n0,
  _UA,
  { [_h]: ["PATCH", "/applications/{Identifier}", 200] },
  () => UpdateApplicationInput$,
  () => UpdateApplicationOutput$,
];
export var UpdateStreamGroup$: StaticOperationSchema = [
  9,
  n0,
  _USG,
  { [_h]: ["PATCH", "/streamgroups/{Identifier}", 200] },
  () => UpdateStreamGroupInput$,
  () => UpdateStreamGroupOutput$,
];

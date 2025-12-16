const _A = "App";
const _ADE = "AccessDeniedException";
const _APM = "AppPortMappings";
const _Ac = "Actual";
const _Ad = "Address";
const _Ap = "Apps";
const _Ar = "Arn";
const _BN = "BucketName";
const _C = "Clocks";
const _CE = "ConflictException";
const _CS = "CreateSnapshot";
const _CSI = "CreateSnapshotInput";
const _CSO = "CreateSnapshotOutput";
const _CT = "ClientToken";
const _CTr = "CreationTime";
const _CWLLG = "CloudWatchLogsLogGroup";
const _D = "Destination";
const _DA = "DeleteApp";
const _DAI = "DeleteAppInput";
const _DAIe = "DescribeAppInput";
const _DAO = "DeleteAppOutput";
const _DAOe = "DescribeAppOutput";
const _DAe = "DescribeApp";
const _DL = "DomainList";
const _DS = "DeleteSimulation";
const _DSI = "DeleteSimulationInput";
const _DSIe = "DescribeSimulationInput";
const _DSO = "DeleteSimulationOutput";
const _DSOe = "DescribeSimulationOutput";
const _DSe = "DescribeSimulation";
const _De = "Description";
const _Dec = "Declared";
const _Des = "Destinations";
const _Do = "Domain";
const _Dom = "Domains";
const _EI = "EndpointInfo";
const _EIx = "ExecutionId";
const _IPM = "IngressPortMappings";
const _ISE = "InternalServerException";
const _L = "Lifecycle";
const _LA = "ListApps";
const _LAI = "ListAppsInput";
const _LAO = "ListAppsOutput";
const _LC = "LoggingConfiguration";
const _LCa = "LaunchCommands";
const _LD = "LogDestination";
const _LDo = "LogDestinations";
const _LGA = "LogGroupArn";
const _LO = "LaunchOverrides";
const _LS = "ListSimulations";
const _LSI = "ListSimulationsInput";
const _LSO = "ListSimulationsOutput";
const _LSS = "LiveSimulationState";
const _LTFR = "ListTagsForResource";
const _LTFRI = "ListTagsForResourceInput";
const _LTFRO = "ListTagsForResourceOutput";
const _M = "Message";
const _MD = "MaximumDuration";
const _MR = "MaxResults";
const _N = "Name";
const _NT = "NextToken";
const _OK = "ObjectKey";
const _OKP = "ObjectKeyPrefix";
const _RA = "RoleArn";
const _RAe = "ResourceArn";
const _RNFE = "ResourceNotFoundException";
const _S = "Simulation";
const _SA = "StartApp";
const _SAEI = "SimulationAppEndpointInfo";
const _SAI = "StartAppInput";
const _SAIt = "StopAppInput";
const _SAL = "SimulationAppList";
const _SAM = "SimulationAppMetadata";
const _SAO = "StartAppOutput";
const _SAOt = "StopAppOutput";
const _SAPM = "SimulationAppPortMapping";
const _SAt = "StopApp";
const _SC = "SimulationClock";
const _SCI = "StartClockInput";
const _SCIt = "StopClockInput";
const _SCL = "SimulationClockList";
const _SCO = "StartClockOutput";
const _SCOt = "StopClockOutput";
const _SCt = "StartClock";
const _SCto = "StopClock";
const _SD = "S3Destination";
const _SE = "SchemaError";
const _SEt = "StartError";
const _SL = "S3Location";
const _SLi = "SimulationList";
const _SM = "SimulationMetadata";
const _SQEE = "ServiceQuotaExceededException";
const _SS = "StartSimulation";
const _SSI = "StartSimulationInput";
const _SSIt = "StopSimulationInput";
const _SSL = "SchemaS3Location";
const _SSLn = "SnapshotS3Location";
const _SSO = "StartSimulationOutput";
const _SSOt = "StopSimulationOutput";
const _SSt = "StopSimulation";
const _Si = "Simulations";
const _St = "Status";
const _T = "Tags";
const _TK = "TagKeys";
const _TMTE = "TooManyTagsException";
const _TR = "TagResource";
const _TRI = "TagResourceInput";
const _TRO = "TagResourceOutput";
const _TS = "TargetStatus";
const _UR = "UntagResource";
const _URI = "UntagResourceInput";
const _URO = "UntagResourceOutput";
const _VE = "ValidationException";
const _a = "app";
const _c = "client";
const _d = "domain";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _mR = "maxResults";
const _nT = "nextToken";
const _s = "simulation";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.simspaceweaver";
const _tK = "tagKeys";
const n0 = "com.amazonaws.simspaceweaver";

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
  TooManyTagsException,
  ValidationException,
} from "../models/errors";
import { SimSpaceWeaverServiceException } from "../models/SimSpaceWeaverServiceException";

/* eslint no-var: 0 */
var ClientToken: StaticSimpleSchema = [0, n0, _CT, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_M], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var CloudWatchLogsLogGroup$: StaticStructureSchema = [3, n0, _CWLLG, 0, [_LGA], [0]];
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var CreateSnapshotInput$: StaticStructureSchema = [3, n0, _CSI, 0, [_S, _D], [0, () => S3Destination$]];
export var CreateSnapshotOutput$: StaticStructureSchema = [3, n0, _CSO, 0, [], []];
export var DeleteAppInput$: StaticStructureSchema = [
  3,
  n0,
  _DAI,
  0,
  [_S, _Do, _A],
  [
    [0, { [_hQ]: _s }],
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _a }],
  ],
];
export var DeleteAppOutput$: StaticStructureSchema = [3, n0, _DAO, 0, [], []];
export var DeleteSimulationInput$: StaticStructureSchema = [3, n0, _DSI, 0, [_S], [[0, { [_hQ]: _s }]]];
export var DeleteSimulationOutput$: StaticStructureSchema = [3, n0, _DSO, 0, [], []];
export var DescribeAppInput$: StaticStructureSchema = [
  3,
  n0,
  _DAIe,
  0,
  [_S, _Do, _A],
  [
    [0, { [_hQ]: _s }],
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _a }],
  ],
];
export var DescribeAppOutput$: StaticStructureSchema = [
  3,
  n0,
  _DAOe,
  0,
  [_N, _S, _Do, _St, _TS, _LO, _De, _EI],
  [0, 0, 0, 0, 0, () => LaunchOverrides$, 0, () => SimulationAppEndpointInfo$],
];
export var DescribeSimulationInput$: StaticStructureSchema = [3, n0, _DSIe, 0, [_S], [[0, { [_hQ]: _s }]]];
export var DescribeSimulationOutput$: StaticStructureSchema = [
  3,
  n0,
  _DSOe,
  0,
  [_N, _EIx, _Ar, _De, _RA, _CTr, _St, _TS, _SSL, _SE, _LC, _LSS, _MD, _SSLn, _SEt],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    0,
    0,
    () => S3Location$,
    0,
    () => LoggingConfiguration$,
    () => LiveSimulationState$,
    0,
    () => S3Location$,
    0,
  ],
];
export var Domain$: StaticStructureSchema = [3, n0, _Do, 0, [_N, _L], [0, 0]];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _se, [_hE]: 500 }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var LaunchOverrides$: StaticStructureSchema = [3, n0, _LO, 0, [_LCa], [64 | 0]];
export var ListAppsInput$: StaticStructureSchema = [
  3,
  n0,
  _LAI,
  0,
  [_S, _Do, _MR, _NT],
  [
    [0, { [_hQ]: _s }],
    [0, { [_hQ]: _d }],
    [1, { [_hQ]: _mR }],
    [0, { [_hQ]: _nT }],
  ],
];
export var ListAppsOutput$: StaticStructureSchema = [3, n0, _LAO, 0, [_Ap, _NT], [() => SimulationAppList, 0]];
export var ListSimulationsInput$: StaticStructureSchema = [
  3,
  n0,
  _LSI,
  0,
  [_MR, _NT],
  [
    [1, { [_hQ]: _mR }],
    [0, { [_hQ]: _nT }],
  ],
];
export var ListSimulationsOutput$: StaticStructureSchema = [3, n0, _LSO, 0, [_Si, _NT], [() => SimulationList, 0]];
export var ListTagsForResourceInput$: StaticStructureSchema = [3, n0, _LTFRI, 0, [_RAe], [[0, 1]]];
export var ListTagsForResourceOutput$: StaticStructureSchema = [3, n0, _LTFRO, 0, [_T], [128 | 0]];
export var LiveSimulationState$: StaticStructureSchema = [
  3,
  n0,
  _LSS,
  0,
  [_Dom, _C],
  [() => DomainList, () => SimulationClockList],
];
export var LogDestination$: StaticStructureSchema = [3, n0, _LD, 0, [_CWLLG], [() => CloudWatchLogsLogGroup$]];
export var LoggingConfiguration$: StaticStructureSchema = [3, n0, _LC, 0, [_Des], [() => LogDestinations]];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var S3Destination$: StaticStructureSchema = [3, n0, _SD, 0, [_BN, _OKP], [0, 0]];
export var S3Location$: StaticStructureSchema = [3, n0, _SL, 0, [_BN, _OK], [0, 0]];
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE, { [_e]: _c, [_hE]: 402 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var SimulationAppEndpointInfo$: StaticStructureSchema = [
  3,
  n0,
  _SAEI,
  0,
  [_Ad, _IPM],
  [0, () => AppPortMappings],
];
export var SimulationAppMetadata$: StaticStructureSchema = [3, n0, _SAM, 0, [_N, _S, _Do, _St, _TS], [0, 0, 0, 0, 0]];
export var SimulationAppPortMapping$: StaticStructureSchema = [3, n0, _SAPM, 0, [_Dec, _Ac], [1, 1]];
export var SimulationClock$: StaticStructureSchema = [3, n0, _SC, 0, [_St, _TS], [0, 0]];
export var SimulationMetadata$: StaticStructureSchema = [3, n0, _SM, 0, [_N, _Ar, _CTr, _St, _TS], [0, 0, 4, 0, 0]];
export var StartAppInput$: StaticStructureSchema = [
  3,
  n0,
  _SAI,
  0,
  [_CT, _S, _Do, _N, _De, _LO],
  [[() => ClientToken, 4], 0, 0, 0, 0, () => LaunchOverrides$],
];
export var StartAppOutput$: StaticStructureSchema = [3, n0, _SAO, 0, [_N, _Do, _S], [0, 0, 0]];
export var StartClockInput$: StaticStructureSchema = [3, n0, _SCI, 0, [_S], [0]];
export var StartClockOutput$: StaticStructureSchema = [3, n0, _SCO, 0, [], []];
export var StartSimulationInput$: StaticStructureSchema = [
  3,
  n0,
  _SSI,
  0,
  [_CT, _N, _De, _RA, _SSL, _MD, _T, _SSLn],
  [[() => ClientToken, 4], 0, 0, 0, () => S3Location$, 0, 128 | 0, () => S3Location$],
];
export var StartSimulationOutput$: StaticStructureSchema = [3, n0, _SSO, 0, [_Ar, _EIx, _CTr], [0, 0, 4]];
export var StopAppInput$: StaticStructureSchema = [3, n0, _SAIt, 0, [_S, _Do, _A], [0, 0, 0]];
export var StopAppOutput$: StaticStructureSchema = [3, n0, _SAOt, 0, [], []];
export var StopClockInput$: StaticStructureSchema = [3, n0, _SCIt, 0, [_S], [0]];
export var StopClockOutput$: StaticStructureSchema = [3, n0, _SCOt, 0, [], []];
export var StopSimulationInput$: StaticStructureSchema = [3, n0, _SSIt, 0, [_S], [0]];
export var StopSimulationOutput$: StaticStructureSchema = [3, n0, _SSOt, 0, [], []];
export var TagResourceInput$: StaticStructureSchema = [3, n0, _TRI, 0, [_RAe, _T], [[0, 1], 128 | 0]];
export var TagResourceOutput$: StaticStructureSchema = [3, n0, _TRO, 0, [], []];
export var TooManyTagsException$: StaticErrorSchema = [-3, n0, _TMTE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(TooManyTagsException$, TooManyTagsException);
export var UntagResourceInput$: StaticStructureSchema = [
  3,
  n0,
  _URI,
  0,
  [_RAe, _TK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _tK }],
  ],
];
export var UntagResourceOutput$: StaticStructureSchema = [3, n0, _URO, 0, [], []];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var SimSpaceWeaverServiceException$: StaticErrorSchema = [-3, _sm, "SimSpaceWeaverServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(SimSpaceWeaverServiceException$, SimSpaceWeaverServiceException);
var AppPortMappings: StaticListSchema = [1, n0, _APM, 0, () => SimulationAppPortMapping$];
var DomainList: StaticListSchema = [1, n0, _DL, 0, () => Domain$];
var LaunchCommandList = 64 | 0;
var LogDestinations: StaticListSchema = [1, n0, _LDo, 0, () => LogDestination$];
var SimulationAppList: StaticListSchema = [1, n0, _SAL, 0, () => SimulationAppMetadata$];
var SimulationClockList: StaticListSchema = [1, n0, _SCL, 0, () => SimulationClock$];
var SimulationList: StaticListSchema = [1, n0, _SLi, 0, () => SimulationMetadata$];
var TagKeyList = 64 | 0;
var TagMap = 128 | 0;
export var CreateSnapshot$: StaticOperationSchema = [
  9,
  n0,
  _CS,
  { [_h]: ["POST", "/createsnapshot", 200] },
  () => CreateSnapshotInput$,
  () => CreateSnapshotOutput$,
];
export var DeleteApp$: StaticOperationSchema = [
  9,
  n0,
  _DA,
  { [_h]: ["DELETE", "/deleteapp", 200] },
  () => DeleteAppInput$,
  () => DeleteAppOutput$,
];
export var DeleteSimulation$: StaticOperationSchema = [
  9,
  n0,
  _DS,
  { [_h]: ["DELETE", "/deletesimulation", 200] },
  () => DeleteSimulationInput$,
  () => DeleteSimulationOutput$,
];
export var DescribeApp$: StaticOperationSchema = [
  9,
  n0,
  _DAe,
  { [_h]: ["GET", "/describeapp", 200] },
  () => DescribeAppInput$,
  () => DescribeAppOutput$,
];
export var DescribeSimulation$: StaticOperationSchema = [
  9,
  n0,
  _DSe,
  { [_h]: ["GET", "/describesimulation", 200] },
  () => DescribeSimulationInput$,
  () => DescribeSimulationOutput$,
];
export var ListApps$: StaticOperationSchema = [
  9,
  n0,
  _LA,
  { [_h]: ["GET", "/listapps", 200] },
  () => ListAppsInput$,
  () => ListAppsOutput$,
];
export var ListSimulations$: StaticOperationSchema = [
  9,
  n0,
  _LS,
  { [_h]: ["GET", "/listsimulations", 200] },
  () => ListSimulationsInput$,
  () => ListSimulationsOutput$,
];
export var ListTagsForResource$: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["GET", "/tags/{ResourceArn}", 200] },
  () => ListTagsForResourceInput$,
  () => ListTagsForResourceOutput$,
];
export var StartApp$: StaticOperationSchema = [
  9,
  n0,
  _SA,
  { [_h]: ["POST", "/startapp", 200] },
  () => StartAppInput$,
  () => StartAppOutput$,
];
export var StartClock$: StaticOperationSchema = [
  9,
  n0,
  _SCt,
  { [_h]: ["POST", "/startclock", 200] },
  () => StartClockInput$,
  () => StartClockOutput$,
];
export var StartSimulation$: StaticOperationSchema = [
  9,
  n0,
  _SS,
  { [_h]: ["POST", "/startsimulation", 200] },
  () => StartSimulationInput$,
  () => StartSimulationOutput$,
];
export var StopApp$: StaticOperationSchema = [
  9,
  n0,
  _SAt,
  { [_h]: ["POST", "/stopapp", 200] },
  () => StopAppInput$,
  () => StopAppOutput$,
];
export var StopClock$: StaticOperationSchema = [
  9,
  n0,
  _SCto,
  { [_h]: ["POST", "/stopclock", 200] },
  () => StopClockInput$,
  () => StopClockOutput$,
];
export var StopSimulation$: StaticOperationSchema = [
  9,
  n0,
  _SSt,
  { [_h]: ["POST", "/stopsimulation", 200] },
  () => StopSimulationInput$,
  () => StopSimulationOutput$,
];
export var TagResource$: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/tags/{ResourceArn}", 200] },
  () => TagResourceInput$,
  () => TagResourceOutput$,
];
export var UntagResource$: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["DELETE", "/tags/{ResourceArn}", 200] },
  () => UntagResourceInput$,
  () => UntagResourceOutput$,
];

export const _A = "App";
export const _ADE = "AccessDeniedException";
export const _APM = "AppPortMappings";
export const _Ac = "Actual";
export const _Ad = "Address";
export const _Ap = "Apps";
export const _Ar = "Arn";
export const _BN = "BucketName";
export const _C = "Clocks";
export const _CE = "ConflictException";
export const _CS = "CreateSnapshot";
export const _CSI = "CreateSnapshotInput";
export const _CSO = "CreateSnapshotOutput";
export const _CT = "ClientToken";
export const _CTr = "CreationTime";
export const _CWLLG = "CloudWatchLogsLogGroup";
export const _D = "Destination";
export const _DA = "DeleteApp";
export const _DAI = "DeleteAppInput";
export const _DAIe = "DescribeAppInput";
export const _DAO = "DeleteAppOutput";
export const _DAOe = "DescribeAppOutput";
export const _DAe = "DescribeApp";
export const _DL = "DomainList";
export const _DS = "DeleteSimulation";
export const _DSI = "DeleteSimulationInput";
export const _DSIe = "DescribeSimulationInput";
export const _DSO = "DeleteSimulationOutput";
export const _DSOe = "DescribeSimulationOutput";
export const _DSe = "DescribeSimulation";
export const _De = "Description";
export const _Dec = "Declared";
export const _Des = "Destinations";
export const _Do = "Domain";
export const _Dom = "Domains";
export const _EI = "EndpointInfo";
export const _EIx = "ExecutionId";
export const _IPM = "IngressPortMappings";
export const _ISE = "InternalServerException";
export const _L = "Lifecycle";
export const _LA = "ListApps";
export const _LAI = "ListAppsInput";
export const _LAO = "ListAppsOutput";
export const _LC = "LoggingConfiguration";
export const _LCa = "LaunchCommands";
export const _LD = "LogDestination";
export const _LDo = "LogDestinations";
export const _LGA = "LogGroupArn";
export const _LO = "LaunchOverrides";
export const _LS = "ListSimulations";
export const _LSI = "ListSimulationsInput";
export const _LSO = "ListSimulationsOutput";
export const _LSS = "LiveSimulationState";
export const _LTFR = "ListTagsForResource";
export const _LTFRI = "ListTagsForResourceInput";
export const _LTFRO = "ListTagsForResourceOutput";
export const _M = "Message";
export const _MD = "MaximumDuration";
export const _MR = "MaxResults";
export const _N = "Name";
export const _NT = "NextToken";
export const _OK = "ObjectKey";
export const _OKP = "ObjectKeyPrefix";
export const _RA = "RoleArn";
export const _RAe = "ResourceArn";
export const _RNFE = "ResourceNotFoundException";
export const _S = "Simulation";
export const _SA = "StartApp";
export const _SAEI = "SimulationAppEndpointInfo";
export const _SAI = "StartAppInput";
export const _SAIt = "StopAppInput";
export const _SAL = "SimulationAppList";
export const _SAM = "SimulationAppMetadata";
export const _SAO = "StartAppOutput";
export const _SAOt = "StopAppOutput";
export const _SAPM = "SimulationAppPortMapping";
export const _SAt = "StopApp";
export const _SC = "SimulationClock";
export const _SCI = "StartClockInput";
export const _SCIt = "StopClockInput";
export const _SCL = "SimulationClockList";
export const _SCO = "StartClockOutput";
export const _SCOt = "StopClockOutput";
export const _SCt = "StartClock";
export const _SCto = "StopClock";
export const _SD = "S3Destination";
export const _SE = "SchemaError";
export const _SEt = "StartError";
export const _SL = "S3Location";
export const _SLi = "SimulationList";
export const _SM = "SimulationMetadata";
export const _SQEE = "ServiceQuotaExceededException";
export const _SS = "StartSimulation";
export const _SSI = "StartSimulationInput";
export const _SSIt = "StopSimulationInput";
export const _SSL = "SchemaS3Location";
export const _SSLn = "SnapshotS3Location";
export const _SSO = "StartSimulationOutput";
export const _SSOt = "StopSimulationOutput";
export const _SSt = "StopSimulation";
export const _Si = "Simulations";
export const _St = "Status";
export const _T = "Tags";
export const _TK = "TagKeys";
export const _TMTE = "TooManyTagsException";
export const _TR = "TagResource";
export const _TRI = "TagResourceInput";
export const _TRO = "TagResourceOutput";
export const _TS = "TargetStatus";
export const _UR = "UntagResource";
export const _URI = "UntagResourceInput";
export const _URO = "UntagResourceOutput";
export const _VE = "ValidationException";
export const _a = "app";
export const _c = "client";
export const _d = "domain";
export const _e = "error";
export const _h = "http";
export const _hE = "httpError";
export const _hQ = "httpQuery";
export const _mR = "maxResults";
export const _nT = "nextToken";
export const _s = "simulation";
export const _se = "server";
export const _tK = "tagKeys";
export const n0 = "com.amazonaws.simspaceweaver";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ValidationException as __ValidationException,
} from "../models/index";
import { SimSpaceWeaverServiceException as __SimSpaceWeaverServiceException } from "../models/SimSpaceWeaverServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServerException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ValidationException
);
export var SimSpaceWeaverServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.simspaceweaver",
  "SimSpaceWeaverServiceException",
  0,
  [],
  [],
  __SimSpaceWeaverServiceException
);

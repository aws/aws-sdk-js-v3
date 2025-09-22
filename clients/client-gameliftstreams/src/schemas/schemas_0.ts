export const _A = "Arn";
export const _AA = "ApplicationArns";
export const _AAI = "AssociateApplicationsInput";
export const _AAO = "AssociateApplicationsOutput";
export const _AAp = "ApplicationArn";
export const _AAs = "AssociatedApplications";
export const _AAss = "AssociateApplications";
export const _AC = "AllocatedCapacity";
export const _ADE = "AccessDeniedException";
export const _AEV = "AdditionalEnvironmentVariables";
export const _AI = "ApplicationIdentifiers";
export const _AIp = "ApplicationIdentifier";
export const _ALA = "AdditionalLaunchArgs";
export const _ALOU = "ApplicationLogOutputUri";
export const _ALP = "ApplicationLogPaths";
export const _AOC = "AlwaysOnCapacity";
export const _AS = "ApplicationSummary";
export const _ASG = "AssociatedStreamGroups";
export const _ASGL = "AddStreamGroupLocations";
export const _ASGLI = "AddStreamGroupLocationsInput";
export const _ASGLO = "AddStreamGroupLocationsOutput";
export const _ASL = "ApplicationSummaryList";
export const _ASU = "ApplicationSourceUri";
export const _CA = "CreatedAt";
export const _CAI = "CreateApplicationInput";
export const _CAO = "CreateApplicationOutput";
export const _CAr = "CreateApplication";
export const _CE = "ConflictException";
export const _CSG = "CreateStreamGroup";
export const _CSGI = "CreateStreamGroupInput";
export const _CSGO = "CreateStreamGroupOutput";
export const _CSSC = "CreateStreamSessionConnection";
export const _CSSCI = "CreateStreamSessionConnectionInput";
export const _CSSCO = "CreateStreamSessionConnectionOutput";
export const _CT = "ClientToken";
export const _CTS = "ConnectionTimeoutSeconds";
export const _D = "Description";
export const _DA = "DefaultApplication";
export const _DAI = "DefaultApplicationIdentifier";
export const _DAIe = "DeleteApplicationInput";
export const _DAIi = "DisassociateApplicationsInput";
export const _DAO = "DisassociateApplicationsOutput";
export const _DAe = "DeleteApplication";
export const _DAi = "DisassociateApplications";
export const _DSG = "DeleteStreamGroup";
export const _DSGI = "DeleteStreamGroupInput";
export const _EFM = "ExportFilesMetadata";
export const _EFS = "ExportFilesStatus";
export const _EP = "ExecutablePath";
export const _ESSF = "ExportStreamSessionFiles";
export const _ESSFI = "ExportStreamSessionFilesInput";
export const _ESSFO = "ExportStreamSessionFilesOutput";
export const _GA = "GetApplication";
export const _GAI = "GetApplicationInput";
export const _GAO = "GetApplicationOutput";
export const _GSG = "GetStreamGroup";
export const _GSGI = "GetStreamGroupInput";
export const _GSGO = "GetStreamGroupOutput";
export const _GSS = "GetStreamSession";
export const _GSSI = "GetStreamSessionInput";
export const _GSSO = "GetStreamSessionOutput";
export const _I = "Identifier";
export const _IC = "IdleCapacity";
export const _ISE = "InternalServerException";
export const _Id = "Id";
export const _It = "Items";
export const _L = "Locations";
export const _LA = "ListApplications";
export const _LAI = "ListApplicationsInput";
export const _LAO = "ListApplicationsOutput";
export const _LC = "LocationConfigurations";
export const _LCo = "LocationConfiguration";
export const _LFLU = "LogFileLocationUri";
export const _LN = "LocationName";
export const _LS = "LocationStates";
export const _LSG = "ListStreamGroups";
export const _LSGI = "ListStreamGroupsInput";
export const _LSGO = "ListStreamGroupsOutput";
export const _LSS = "ListStreamSessions";
export const _LSSBA = "ListStreamSessionsByAccount";
export const _LSSBAI = "ListStreamSessionsByAccountInput";
export const _LSSBAO = "ListStreamSessionsByAccountOutput";
export const _LSSI = "ListStreamSessionsInput";
export const _LSSO = "ListStreamSessionsOutput";
export const _LSo = "LocationState";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _LUA = "LastUpdatedAt";
export const _Lo = "Location";
export const _M = "Message";
export const _MR = "MaxResults";
export const _NT = "NextToken";
export const _ODC = "OnDemandCapacity";
export const _OU = "OutputUri";
export const _P = "Protocol";
export const _RA = "ResourceArn";
export const _RC = "RequestedCapacity";
export const _RE = "RuntimeEnvironment";
export const _RNFE = "ResourceNotFoundException";
export const _RS = "ReplicationStatuses";
export const _RSGL = "RemoveStreamGroupLocations";
export const _RSGLI = "RemoveStreamGroupLocationsInput";
export const _RSe = "ReplicationStatus";
export const _S = "Status";
export const _SC = "StreamClass";
export const _SGI = "StreamGroupId";
export const _SGS = "StreamGroupSummary";
export const _SGSL = "StreamGroupSummaryList";
export const _SLS = "SessionLengthSeconds";
export const _SQEE = "ServiceQuotaExceededException";
export const _SR = "SignalRequest";
export const _SRi = "SignalResponse";
export const _SRt = "StatusReason";
export const _SSI = "StreamSessionIdentifier";
export const _SSS = "StreamSessionSummary";
export const _SSSI = "StartStreamSessionInput";
export const _SSSL = "StreamSessionSummaryList";
export const _SSSO = "StartStreamSessionOutput";
export const _SSSt = "StartStreamSession";
export const _T = "Tags";
export const _TE = "ThrottlingException";
export const _TK = "TagKeys";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _TSS = "TerminateStreamSession";
export const _TSSI = "TerminateStreamSessionInput";
export const _Ty = "Type";
export const _UA = "UpdateApplication";
export const _UAI = "UpdateApplicationInput";
export const _UAO = "UpdateApplicationOutput";
export const _UI = "UserId";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _USG = "UpdateStreamGroup";
export const _USGI = "UpdateStreamGroupInput";
export const _USGO = "UpdateStreamGroupOutput";
export const _V = "Version";
export const _VE = "ValidationException";
export const _WSPU = "WebSdkProtocolUrl";
export const _c = "client";
export const _e = "error";
export const _h = "http";
export const _hE = "httpError";
export const _hQ = "httpQuery";
export const _l = "locations";
export const _s = "server";
export const _tK = "tagKeys";
export const n0 = "com.amazonaws.gameliftstreams";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { GameLiftStreamsServiceException as __GameLiftStreamsServiceException } from "../models/GameLiftStreamsServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";

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
    [_e]: _s,
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
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __ThrottlingException
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
export var Unit = "unit" as const;

export var GameLiftStreamsServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.gameliftstreams",
  "GameLiftStreamsServiceException",
  0,
  [],
  [],
  __GameLiftStreamsServiceException
);

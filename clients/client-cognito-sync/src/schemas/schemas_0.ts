export const _AA = "ApplicationArns";
export const _ASE = "AlreadyStreamedException";
export const _BP = "BulkPublish";
export const _BPCT = "BulkPublishCompleteTime";
export const _BPR = "BulkPublishRequest";
export const _BPRu = "BulkPublishResponse";
export const _BPS = "BulkPublishStatus";
export const _BPST = "BulkPublishStartTime";
export const _C = "Count";
export const _CC = "ClientContext";
export const _CD = "CreationDate";
export const _CME = "ConcurrentModificationException";
export const _CS = "CognitoStreams";
export const _D = "Dataset";
export const _DC = "DatasetCount";
export const _DD = "DeleteDataset";
export const _DDARSC = "DatasetDeletedAfterRequestedSyncCount";
export const _DDR = "DeleteDatasetRequest";
export const _DDRe = "DeleteDatasetResponse";
export const _DDRes = "DescribeDatasetRequest";
export const _DDResc = "DescribeDatasetResponse";
export const _DDe = "DescribeDataset";
export const _DE = "DatasetExists";
export const _DI = "DeviceId";
export const _DIPU = "DescribeIdentityPoolUsage";
export const _DIPUR = "DescribeIdentityPoolUsageRequest";
export const _DIPURe = "DescribeIdentityPoolUsageResponse";
export const _DIU = "DescribeIdentityUsage";
export const _DIUR = "DescribeIdentityUsageRequest";
export const _DIURe = "DescribeIdentityUsageResponse";
export const _DL = "DatasetList";
export const _DLMD = "DeviceLastModifiedDate";
export const _DN = "DatasetName";
export const _DRE = "DuplicateRequestException";
export const _DS = "DataStorage";
export const _DSC = "DatasetSyncCount";
export const _Da = "Datasets";
export const _E = "Events";
export const _FM = "FailureMessage";
export const _GBPD = "GetBulkPublishDetails";
export const _GBPDR = "GetBulkPublishDetailsRequest";
export const _GBPDRe = "GetBulkPublishDetailsResponse";
export const _GCE = "GetCognitoEvents";
export const _GCER = "GetCognitoEventsRequest";
export const _GCERe = "GetCognitoEventsResponse";
export const _GIPC = "GetIdentityPoolConfiguration";
export const _GIPCR = "GetIdentityPoolConfigurationRequest";
export const _GIPCRe = "GetIdentityPoolConfigurationResponse";
export const _ICE = "InvalidConfigurationException";
export const _IEE = "InternalErrorException";
export const _II = "IdentityId";
export const _ILFOE = "InvalidLambdaFunctionOutputException";
export const _IPE = "InvalidParameterException";
export const _IPI = "IdentityPoolId";
export const _IPU = "IdentityPoolUsage";
export const _IPUL = "IdentityPoolUsageList";
export const _IPUd = "IdentityPoolUsages";
export const _IU = "IdentityUsage";
export const _K = "Key";
export const _LD = "ListDatasets";
export const _LDR = "ListDatasetsRequest";
export const _LDRi = "ListDatasetsResponse";
export const _LEE = "LimitExceededException";
export const _LIPU = "ListIdentityPoolUsage";
export const _LIPUR = "ListIdentityPoolUsageRequest";
export const _LIPURi = "ListIdentityPoolUsageResponse";
export const _LMB = "LastModifiedBy";
export const _LMD = "LastModifiedDate";
export const _LR = "ListRecords";
export const _LRR = "ListRecordsRequest";
export const _LRRi = "ListRecordsResponse";
export const _LSC = "LastSyncCount";
export const _LTE = "LambdaThrottledException";
export const _MDN = "MergedDatasetNames";
export const _MR = "MaxResults";
export const _NAE = "NotAuthorizedException";
export const _NR = "NumRecords";
export const _NT = "NextToken";
export const _O = "Op";
export const _P = "Platform";
export const _PS = "PushSync";
export const _R = "Records";
export const _RA = "RoleArn";
export const _RCE = "ResourceConflictException";
export const _RD = "RegisterDevice";
export const _RDR = "RegisterDeviceRequest";
export const _RDRe = "RegisterDeviceResponse";
export const _RL = "RecordList";
export const _RNFE = "ResourceNotFoundException";
export const _RP = "RecordPatch";
export const _RPL = "RecordPatchList";
export const _RPe = "RecordPatches";
export const _Re = "Record";
export const _SC = "SyncCount";
export const _SCE = "SetCognitoEvents";
export const _SCER = "SetCognitoEventsRequest";
export const _SIPC = "SetIdentityPoolConfiguration";
export const _SIPCR = "SetIdentityPoolConfigurationRequest";
export const _SIPCRe = "SetIdentityPoolConfigurationResponse";
export const _SN = "StreamName";
export const _SS = "StreamingStatus";
export const _SSC = "SyncSessionsCount";
export const _SST = "SyncSessionToken";
export const _STD = "SubscribeToDataset";
export const _STDR = "SubscribeToDatasetRequest";
export const _STDRu = "SubscribeToDatasetResponse";
export const _T = "Token";
export const _TMRE = "TooManyRequestsException";
export const _UFD = "UnsubscribeFromDataset";
export const _UFDR = "UnsubscribeFromDatasetRequest";
export const _UFDRn = "UnsubscribeFromDatasetResponse";
export const _UR = "UpdateRecords";
export const _URR = "UpdateRecordsRequest";
export const _URRp = "UpdateRecordsResponse";
export const _V = "Value";
export const _aQE = "awsQueryError";
export const _c = "client";
export const _e = "error";
export const _h = "http";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _hQ = "httpQuery";
export const _lSC = "lastSyncCount";
export const _m = "message";
export const _mR = "maxResults";
export const _nT = "nextToken";
export const _s = "server";
export const _sST = "syncSessionToken";
export const _xaCC = "x-amz-Client-Context";
export const n0 = "com.amazonaws.cognitosync";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { CognitoSyncServiceException as __CognitoSyncServiceException } from "../models/CognitoSyncServiceException";
import {
  InternalErrorException as __InternalErrorException,
  InvalidParameterException as __InvalidParameterException,
  NotAuthorizedException as __NotAuthorizedException,
  ResourceNotFoundException as __ResourceNotFoundException,
  TooManyRequestsException as __TooManyRequestsException,
} from "../models/index";

/* eslint no-var: 0 */

export var InternalErrorException = error(
  n0,
  _IEE,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`InternalError`, 500],
  },
  [_m],
  [0],

  __InternalErrorException
);
export var InvalidParameterException = error(
  n0,
  _IPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidParameter`, 400],
  },
  [_m],
  [0],

  __InvalidParameterException
);
export var NotAuthorizedException = error(
  n0,
  _NAE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`NotAuthorizedError`, 403],
  },
  [_m],
  [0],

  __NotAuthorizedException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ResourceNotFound`, 404],
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var TooManyRequestsException = error(
  n0,
  _TMRE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`TooManyRequests`, 429],
  },
  [_m],
  [0],

  __TooManyRequestsException
);
export var CognitoSyncServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.cognitosync",
  "CognitoSyncServiceException",
  0,
  [],
  [],
  __CognitoSyncServiceException
);

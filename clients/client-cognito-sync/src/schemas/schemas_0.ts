const _AA = "ApplicationArns";
const _ASE = "AlreadyStreamedException";
const _BP = "BulkPublish";
const _BPCT = "BulkPublishCompleteTime";
const _BPR = "BulkPublishRequest";
const _BPRu = "BulkPublishResponse";
const _BPS = "BulkPublishStatus";
const _BPST = "BulkPublishStartTime";
const _C = "Count";
const _CC = "ClientContext";
const _CD = "CreationDate";
const _CME = "ConcurrentModificationException";
const _CS = "CognitoStreams";
const _D = "Dataset";
const _DC = "DatasetCount";
const _DD = "DeleteDataset";
const _DDARSC = "DatasetDeletedAfterRequestedSyncCount";
const _DDR = "DeleteDatasetRequest";
const _DDRe = "DeleteDatasetResponse";
const _DDRes = "DescribeDatasetRequest";
const _DDResc = "DescribeDatasetResponse";
const _DDe = "DescribeDataset";
const _DE = "DatasetExists";
const _DI = "DeviceId";
const _DIPU = "DescribeIdentityPoolUsage";
const _DIPUR = "DescribeIdentityPoolUsageRequest";
const _DIPURe = "DescribeIdentityPoolUsageResponse";
const _DIU = "DescribeIdentityUsage";
const _DIUR = "DescribeIdentityUsageRequest";
const _DIURe = "DescribeIdentityUsageResponse";
const _DL = "DatasetList";
const _DLMD = "DeviceLastModifiedDate";
const _DN = "DatasetName";
const _DRE = "DuplicateRequestException";
const _DS = "DataStorage";
const _DSC = "DatasetSyncCount";
const _Da = "Datasets";
const _E = "Events";
const _FM = "FailureMessage";
const _GBPD = "GetBulkPublishDetails";
const _GBPDR = "GetBulkPublishDetailsRequest";
const _GBPDRe = "GetBulkPublishDetailsResponse";
const _GCE = "GetCognitoEvents";
const _GCER = "GetCognitoEventsRequest";
const _GCERe = "GetCognitoEventsResponse";
const _GIPC = "GetIdentityPoolConfiguration";
const _GIPCR = "GetIdentityPoolConfigurationRequest";
const _GIPCRe = "GetIdentityPoolConfigurationResponse";
const _ICE = "InvalidConfigurationException";
const _IEE = "InternalErrorException";
const _II = "IdentityId";
const _ILFOE = "InvalidLambdaFunctionOutputException";
const _IPE = "InvalidParameterException";
const _IPI = "IdentityPoolId";
const _IPU = "IdentityPoolUsage";
const _IPUL = "IdentityPoolUsageList";
const _IPUd = "IdentityPoolUsages";
const _IU = "IdentityUsage";
const _K = "Key";
const _LD = "ListDatasets";
const _LDR = "ListDatasetsRequest";
const _LDRi = "ListDatasetsResponse";
const _LEE = "LimitExceededException";
const _LIPU = "ListIdentityPoolUsage";
const _LIPUR = "ListIdentityPoolUsageRequest";
const _LIPURi = "ListIdentityPoolUsageResponse";
const _LMB = "LastModifiedBy";
const _LMD = "LastModifiedDate";
const _LR = "ListRecords";
const _LRR = "ListRecordsRequest";
const _LRRi = "ListRecordsResponse";
const _LSC = "LastSyncCount";
const _LTE = "LambdaThrottledException";
const _MDN = "MergedDatasetNames";
const _MR = "MaxResults";
const _NAE = "NotAuthorizedException";
const _NR = "NumRecords";
const _NT = "NextToken";
const _O = "Op";
const _P = "Platform";
const _PS = "PushSync";
const _R = "Records";
const _RA = "RoleArn";
const _RCE = "ResourceConflictException";
const _RD = "RegisterDevice";
const _RDR = "RegisterDeviceRequest";
const _RDRe = "RegisterDeviceResponse";
const _RL = "RecordList";
const _RNFE = "ResourceNotFoundException";
const _RP = "RecordPatch";
const _RPL = "RecordPatchList";
const _RPe = "RecordPatches";
const _Re = "Record";
const _SC = "SyncCount";
const _SCE = "SetCognitoEvents";
const _SCER = "SetCognitoEventsRequest";
const _SIPC = "SetIdentityPoolConfiguration";
const _SIPCR = "SetIdentityPoolConfigurationRequest";
const _SIPCRe = "SetIdentityPoolConfigurationResponse";
const _SN = "StreamName";
const _SS = "StreamingStatus";
const _SSC = "SyncSessionsCount";
const _SST = "SyncSessionToken";
const _STD = "SubscribeToDataset";
const _STDR = "SubscribeToDatasetRequest";
const _STDRu = "SubscribeToDatasetResponse";
const _T = "Token";
const _TMRE = "TooManyRequestsException";
const _UFD = "UnsubscribeFromDataset";
const _UFDR = "UnsubscribeFromDatasetRequest";
const _UFDRn = "UnsubscribeFromDatasetResponse";
const _UR = "UpdateRecords";
const _URR = "UpdateRecordsRequest";
const _URRp = "UpdateRecordsResponse";
const _V = "Value";
const _aQE = "awsQueryError";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _lSC = "lastSyncCount";
const _m = "message";
const _mR = "maxResults";
const _nT = "nextToken";
const _s = "server";
const _sST = "syncSessionToken";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.cognitosync";
const _xaCC = "x-amz-Client-Context";
const n0 = "com.amazonaws.cognitosync";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { CognitoSyncServiceException } from "../models/CognitoSyncServiceException";
import {
  AlreadyStreamedException,
  ConcurrentModificationException,
  DuplicateRequestException,
  InternalErrorException,
  InvalidConfigurationException,
  InvalidLambdaFunctionOutputException,
  InvalidParameterException,
  LambdaThrottledException,
  LimitExceededException,
  NotAuthorizedException,
  ResourceConflictException,
  ResourceNotFoundException,
  TooManyRequestsException,
} from "../models/errors";

/* eslint no-var: 0 */
export var AlreadyStreamedException$: StaticErrorSchema = [-3, n0, _ASE,
  { [_aQE]: [`AlreadyStreamed`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(AlreadyStreamedException$, AlreadyStreamedException);
export var BulkPublishRequest$: StaticStructureSchema = [3, n0, _BPR,
  0,
  [_IPI],
  [[0, 1]]
];
export var BulkPublishResponse$: StaticStructureSchema = [3, n0, _BPRu,
  0,
  [_IPI],
  [0]
];
export var CognitoStreams$: StaticStructureSchema = [3, n0, _CS,
  0,
  [_SN, _RA, _SS],
  [0, 0, 0]
];
export var ConcurrentModificationException$: StaticErrorSchema = [-3, n0, _CME,
  { [_aQE]: [`ConcurrentModification`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ConcurrentModificationException$, ConcurrentModificationException);
export var Dataset$: StaticStructureSchema = [3, n0, _D,
  0,
  [_II, _DN, _CD, _LMD, _LMB, _DS, _NR],
  [0, 0, 4, 4, 0, 1, 1]
];
export var DeleteDatasetRequest$: StaticStructureSchema = [3, n0, _DDR,
  0,
  [_IPI, _II, _DN],
  [[0, 1], [0, 1], [0, 1]]
];
export var DeleteDatasetResponse$: StaticStructureSchema = [3, n0, _DDRe,
  0,
  [_D],
  [() => Dataset$]
];
export var DescribeDatasetRequest$: StaticStructureSchema = [3, n0, _DDRes,
  0,
  [_IPI, _II, _DN],
  [[0, 1], [0, 1], [0, 1]]
];
export var DescribeDatasetResponse$: StaticStructureSchema = [3, n0, _DDResc,
  0,
  [_D],
  [() => Dataset$]
];
export var DescribeIdentityPoolUsageRequest$: StaticStructureSchema = [3, n0, _DIPUR,
  0,
  [_IPI],
  [[0, 1]]
];
export var DescribeIdentityPoolUsageResponse$: StaticStructureSchema = [3, n0, _DIPURe,
  0,
  [_IPU],
  [() => IdentityPoolUsage$]
];
export var DescribeIdentityUsageRequest$: StaticStructureSchema = [3, n0, _DIUR,
  0,
  [_IPI, _II],
  [[0, 1], [0, 1]]
];
export var DescribeIdentityUsageResponse$: StaticStructureSchema = [3, n0, _DIURe,
  0,
  [_IU],
  [() => IdentityUsage$]
];
export var DuplicateRequestException$: StaticErrorSchema = [-3, n0, _DRE,
  { [_aQE]: [`DuplicateRequest`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(DuplicateRequestException$, DuplicateRequestException);
export var GetBulkPublishDetailsRequest$: StaticStructureSchema = [3, n0, _GBPDR,
  0,
  [_IPI],
  [[0, 1]]
];
export var GetBulkPublishDetailsResponse$: StaticStructureSchema = [3, n0, _GBPDRe,
  0,
  [_IPI, _BPST, _BPCT, _BPS, _FM],
  [0, 4, 4, 0, 0]
];
export var GetCognitoEventsRequest$: StaticStructureSchema = [3, n0, _GCER,
  0,
  [_IPI],
  [[0, 1]]
];
export var GetCognitoEventsResponse$: StaticStructureSchema = [3, n0, _GCERe,
  0,
  [_E],
  [128 | 0]
];
export var GetIdentityPoolConfigurationRequest$: StaticStructureSchema = [3, n0, _GIPCR,
  0,
  [_IPI],
  [[0, 1]]
];
export var GetIdentityPoolConfigurationResponse$: StaticStructureSchema = [3, n0, _GIPCRe,
  0,
  [_IPI, _PS, _CS],
  [0, () => PushSync$, () => CognitoStreams$]
];
export var IdentityPoolUsage$: StaticStructureSchema = [3, n0, _IPU,
  0,
  [_IPI, _SSC, _DS, _LMD],
  [0, 1, 1, 4]
];
export var IdentityUsage$: StaticStructureSchema = [3, n0, _IU,
  0,
  [_II, _IPI, _LMD, _DC, _DS],
  [0, 0, 4, 1, 1]
];
export var InternalErrorException$: StaticErrorSchema = [-3, n0, _IEE,
  { [_aQE]: [`InternalError`, 500], [_e]: _s, [_hE]: 500 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(InternalErrorException$, InternalErrorException);
export var InvalidConfigurationException$: StaticErrorSchema = [-3, n0, _ICE,
  { [_aQE]: [`InvalidConfiguration`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(InvalidConfigurationException$, InvalidConfigurationException);
export var InvalidLambdaFunctionOutputException$: StaticErrorSchema = [-3, n0, _ILFOE,
  { [_aQE]: [`InvalidLambdaFunctionOutput`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(InvalidLambdaFunctionOutputException$, InvalidLambdaFunctionOutputException);
export var InvalidParameterException$: StaticErrorSchema = [-3, n0, _IPE,
  { [_aQE]: [`InvalidParameter`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(InvalidParameterException$, InvalidParameterException);
export var LambdaThrottledException$: StaticErrorSchema = [-3, n0, _LTE,
  { [_aQE]: [`LambdaThrottled`, 429], [_e]: _c, [_hE]: 429 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(LambdaThrottledException$, LambdaThrottledException);
export var LimitExceededException$: StaticErrorSchema = [-3, n0, _LEE,
  { [_aQE]: [`LimitExceeded`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(LimitExceededException$, LimitExceededException);
export var ListDatasetsRequest$: StaticStructureSchema = [3, n0, _LDR,
  0,
  [_IPI, _II, _NT, _MR],
  [[0, 1], [0, 1], [0, { [_hQ]: _nT }], [1, { [_hQ]: _mR }]]
];
export var ListDatasetsResponse$: StaticStructureSchema = [3, n0, _LDRi,
  0,
  [_Da, _C, _NT],
  [() => DatasetList, 1, 0]
];
export var ListIdentityPoolUsageRequest$: StaticStructureSchema = [3, n0, _LIPUR,
  0,
  [_NT, _MR],
  [[0, { [_hQ]: _nT }], [1, { [_hQ]: _mR }]]
];
export var ListIdentityPoolUsageResponse$: StaticStructureSchema = [3, n0, _LIPURi,
  0,
  [_IPUd, _MR, _C, _NT],
  [() => IdentityPoolUsageList, 1, 1, 0]
];
export var ListRecordsRequest$: StaticStructureSchema = [3, n0, _LRR,
  0,
  [_IPI, _II, _DN, _LSC, _NT, _MR, _SST],
  [[0, 1], [0, 1], [0, 1], [1, { [_hQ]: _lSC }], [0, { [_hQ]: _nT }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _sST }]]
];
export var ListRecordsResponse$: StaticStructureSchema = [3, n0, _LRRi,
  0,
  [_R, _NT, _C, _DSC, _LMB, _MDN, _DE, _DDARSC, _SST],
  [() => RecordList, 0, 1, 1, 0, 64 | 0, 2, 2, 0]
];
export var NotAuthorizedException$: StaticErrorSchema = [-3, n0, _NAE,
  { [_aQE]: [`NotAuthorizedError`, 403], [_e]: _c, [_hE]: 403 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(NotAuthorizedException$, NotAuthorizedException);
export var PushSync$: StaticStructureSchema = [3, n0, _PS,
  0,
  [_AA, _RA],
  [64 | 0, 0]
];
export var _Record$: StaticStructureSchema = [3, n0, _Re,
  0,
  [_K, _V, _SC, _LMD, _LMB, _DLMD],
  [0, 0, 1, 4, 0, 4]
];
export var RecordPatch$: StaticStructureSchema = [3, n0, _RP,
  0,
  [_O, _K, _V, _SC, _DLMD],
  [0, 0, 0, 1, 4]
];
export var RegisterDeviceRequest$: StaticStructureSchema = [3, n0, _RDR,
  0,
  [_IPI, _II, _P, _T],
  [[0, 1], [0, 1], 0, 0]
];
export var RegisterDeviceResponse$: StaticStructureSchema = [3, n0, _RDRe,
  0,
  [_DI],
  [0]
];
export var ResourceConflictException$: StaticErrorSchema = [-3, n0, _RCE,
  { [_aQE]: [`ResourceConflict`, 409], [_e]: _c, [_hE]: 409 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ResourceConflictException$, ResourceConflictException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_aQE]: [`ResourceNotFound`, 404], [_e]: _c, [_hE]: 404 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var SetCognitoEventsRequest$: StaticStructureSchema = [3, n0, _SCER,
  0,
  [_IPI, _E],
  [[0, 1], 128 | 0]
];
export var SetIdentityPoolConfigurationRequest$: StaticStructureSchema = [3, n0, _SIPCR,
  0,
  [_IPI, _PS, _CS],
  [[0, 1], () => PushSync$, () => CognitoStreams$]
];
export var SetIdentityPoolConfigurationResponse$: StaticStructureSchema = [3, n0, _SIPCRe,
  0,
  [_IPI, _PS, _CS],
  [0, () => PushSync$, () => CognitoStreams$]
];
export var SubscribeToDatasetRequest$: StaticStructureSchema = [3, n0, _STDR,
  0,
  [_IPI, _II, _DN, _DI],
  [[0, 1], [0, 1], [0, 1], [0, 1]]
];
export var SubscribeToDatasetResponse$: StaticStructureSchema = [3, n0, _STDRu,
  0,
  [],
  []
];
export var TooManyRequestsException$: StaticErrorSchema = [-3, n0, _TMRE,
  { [_aQE]: [`TooManyRequests`, 429], [_e]: _c, [_hE]: 429 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(TooManyRequestsException$, TooManyRequestsException);
export var UnsubscribeFromDatasetRequest$: StaticStructureSchema = [3, n0, _UFDR,
  0,
  [_IPI, _II, _DN, _DI],
  [[0, 1], [0, 1], [0, 1], [0, 1]]
];
export var UnsubscribeFromDatasetResponse$: StaticStructureSchema = [3, n0, _UFDRn,
  0,
  [],
  []
];
export var UpdateRecordsRequest$: StaticStructureSchema = [3, n0, _URR,
  0,
  [_IPI, _II, _DN, _DI, _RPe, _SST, _CC],
  [[0, 1], [0, 1], [0, 1], 0, () => RecordPatchList, 0, [0, { [_hH]: _xaCC }]]
];
export var UpdateRecordsResponse$: StaticStructureSchema = [3, n0, _URRp,
  0,
  [_R],
  [() => RecordList]
];
var __Unit = "unit" as const;
export var CognitoSyncServiceException$: StaticErrorSchema = [-3, _sm, "CognitoSyncServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(CognitoSyncServiceException$, CognitoSyncServiceException);
var ApplicationArnList = 64 | 0;
var DatasetList: StaticListSchema = [1, n0, _DL,
  0, () => Dataset$
];
var IdentityPoolUsageList: StaticListSchema = [1, n0, _IPUL,
  0, () => IdentityPoolUsage$
];
var MergedDatasetNameList = 64 | 0;
var RecordList: StaticListSchema = [1, n0, _RL,
  0, () => _Record$
];
var RecordPatchList: StaticListSchema = [1, n0, _RPL,
  0, () => RecordPatch$
];
var Events = 128 | 0;
export var BulkPublish$: StaticOperationSchema = [9, n0, _BP,
  { [_h]: ["POST", "/identitypools/{IdentityPoolId}/bulkpublish", 200] }, () => BulkPublishRequest$, () => BulkPublishResponse$
];
export var DeleteDataset$: StaticOperationSchema = [9, n0, _DD,
  { [_h]: ["DELETE", "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}", 200] }, () => DeleteDatasetRequest$, () => DeleteDatasetResponse$
];
export var DescribeDataset$: StaticOperationSchema = [9, n0, _DDe,
  { [_h]: ["GET", "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}", 200] }, () => DescribeDatasetRequest$, () => DescribeDatasetResponse$
];
export var DescribeIdentityPoolUsage$: StaticOperationSchema = [9, n0, _DIPU,
  { [_h]: ["GET", "/identitypools/{IdentityPoolId}", 200] }, () => DescribeIdentityPoolUsageRequest$, () => DescribeIdentityPoolUsageResponse$
];
export var DescribeIdentityUsage$: StaticOperationSchema = [9, n0, _DIU,
  { [_h]: ["GET", "/identitypools/{IdentityPoolId}/identities/{IdentityId}", 200] }, () => DescribeIdentityUsageRequest$, () => DescribeIdentityUsageResponse$
];
export var GetBulkPublishDetails$: StaticOperationSchema = [9, n0, _GBPD,
  { [_h]: ["POST", "/identitypools/{IdentityPoolId}/getBulkPublishDetails", 200] }, () => GetBulkPublishDetailsRequest$, () => GetBulkPublishDetailsResponse$
];
export var GetCognitoEvents$: StaticOperationSchema = [9, n0, _GCE,
  { [_h]: ["GET", "/identitypools/{IdentityPoolId}/events", 200] }, () => GetCognitoEventsRequest$, () => GetCognitoEventsResponse$
];
export var GetIdentityPoolConfiguration$: StaticOperationSchema = [9, n0, _GIPC,
  { [_h]: ["GET", "/identitypools/{IdentityPoolId}/configuration", 200] }, () => GetIdentityPoolConfigurationRequest$, () => GetIdentityPoolConfigurationResponse$
];
export var ListDatasets$: StaticOperationSchema = [9, n0, _LD,
  { [_h]: ["GET", "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets", 200] }, () => ListDatasetsRequest$, () => ListDatasetsResponse$
];
export var ListIdentityPoolUsage$: StaticOperationSchema = [9, n0, _LIPU,
  { [_h]: ["GET", "/identitypools", 200] }, () => ListIdentityPoolUsageRequest$, () => ListIdentityPoolUsageResponse$
];
export var ListRecords$: StaticOperationSchema = [9, n0, _LR,
  { [_h]: ["GET", "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records", 200] }, () => ListRecordsRequest$, () => ListRecordsResponse$
];
export var RegisterDevice$: StaticOperationSchema = [9, n0, _RD,
  { [_h]: ["POST", "/identitypools/{IdentityPoolId}/identity/{IdentityId}/device", 200] }, () => RegisterDeviceRequest$, () => RegisterDeviceResponse$
];
export var SetCognitoEvents$: StaticOperationSchema = [9, n0, _SCE,
  { [_h]: ["POST", "/identitypools/{IdentityPoolId}/events", 200] }, () => SetCognitoEventsRequest$, () => __Unit
];
export var SetIdentityPoolConfiguration$: StaticOperationSchema = [9, n0, _SIPC,
  { [_h]: ["POST", "/identitypools/{IdentityPoolId}/configuration", 200] }, () => SetIdentityPoolConfigurationRequest$, () => SetIdentityPoolConfigurationResponse$
];
export var SubscribeToDataset$: StaticOperationSchema = [9, n0, _STD,
  { [_h]: ["POST", "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}", 200] }, () => SubscribeToDatasetRequest$, () => SubscribeToDatasetResponse$
];
export var UnsubscribeFromDataset$: StaticOperationSchema = [9, n0, _UFD,
  { [_h]: ["DELETE", "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}", 200] }, () => UnsubscribeFromDatasetRequest$, () => UnsubscribeFromDatasetResponse$
];
export var UpdateRecords$: StaticOperationSchema = [9, n0, _UR,
  { [_h]: ["POST", "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}", 200] }, () => UpdateRecordsRequest$, () => UpdateRecordsResponse$
];

const _ADE = "AccessDeniedException";
const _CCT = "CreateChatToken";
const _CCTR = "CreateChatTokenRequest";
const _CCTRr = "CreateChatTokenResponse";
const _CE = "ConflictException";
const _CLC = "CreateLoggingConfiguration";
const _CLCR = "CreateLoggingConfigurationRequest";
const _CLCRr = "CreateLoggingConfigurationResponse";
const _CR = "CreateRoom";
const _CRR = "CreateRoomRequest";
const _CRRr = "CreateRoomResponse";
const _CT = "ChatToken";
const _CTA = "ChatTokenAttributes";
const _CWLDC = "CloudWatchLogsDestinationConfiguration";
const _DC = "DestinationConfiguration";
const _DLC = "DeleteLoggingConfiguration";
const _DLCR = "DeleteLoggingConfigurationRequest";
const _DM = "DeleteMessage";
const _DMR = "DeleteMessageRequest";
const _DMRe = "DeleteMessageResponse";
const _DR = "DeleteRoom";
const _DRR = "DeleteRoomRequest";
const _DU = "DisconnectUser";
const _DUR = "DisconnectUserRequest";
const _DURi = "DisconnectUserResponse";
const _FDC = "FirehoseDestinationConfiguration";
const _GLC = "GetLoggingConfiguration";
const _GLCR = "GetLoggingConfigurationRequest";
const _GLCRe = "GetLoggingConfigurationResponse";
const _GR = "GetRoom";
const _GRR = "GetRoomRequest";
const _GRRe = "GetRoomResponse";
const _ISE = "InternalServerException";
const _LCL = "LoggingConfigurationList";
const _LCS = "LoggingConfigurationSummary";
const _LLC = "ListLoggingConfigurations";
const _LLCR = "ListLoggingConfigurationsRequest";
const _LLCRi = "ListLoggingConfigurationsResponse";
const _LR = "ListRooms";
const _LRR = "ListRoomsRequest";
const _LRRi = "ListRoomsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _MRH = "MessageReviewHandler";
const _PV = "PendingVerification";
const _RL = "RoomList";
const _RNFE = "ResourceNotFoundException";
const _RS = "RoomSummary";
const _SDC = "S3DestinationConfiguration";
const _SE = "SendEvent";
const _SER = "SendEventRequest";
const _SERe = "SendEventResponse";
const _SQEE = "ServiceQuotaExceededException";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _UID = "UserID";
const _ULC = "UpdateLoggingConfiguration";
const _ULCR = "UpdateLoggingConfigurationRequest";
const _ULCRp = "UpdateLoggingConfigurationResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _URRp = "UpdateRoomRequest";
const _URRpd = "UpdateRoomResponse";
const _URp = "UpdateRoom";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _a = "attributes";
const _ar = "arn";
const _bN = "bucketName";
const _c = "client";
const _cT = "createTime";
const _cWL = "cloudWatchLogs";
const _ca = "capabilities";
const _dC = "destinationConfiguration";
const _dSN = "deliveryStreamName";
const _e = "error";
const _eN = "eventName";
const _f = "firehose";
const _fL = "fieldList";
const _fR = "fallbackResult";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _i = "id";
const _id = "identifier";
const _l = "limit";
const _lC = "loggingConfigurations";
const _lCI = "loggingConfigurationIdentifiers";
const _lCIo = "loggingConfigurationIdentifier";
const _lGN = "logGroupName";
const _m = "message";
const _mML = "maximumMessageLength";
const _mMRPS = "maximumMessageRatePerSecond";
const _mR = "maxResults";
const _mRH = "messageReviewHandler";
const _mRHU = "messageReviewHandlerUri";
const _n = "name";
const _nT = "nextToken";
const _r = "reason";
const _rA = "resourceArn";
const _rI = "resourceId";
const _rIo = "roomIdentifier";
const _rT = "resourceType";
const _ro = "rooms";
const _s = "state";
const _sDIM = "sessionDurationInMinutes";
const _sET = "sessionExpirationTime";
const _s_ = "s3";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.ivschat";
const _t = "token";
const _tET = "tokenExpirationTime";
const _tK = "tagKeys";
const _ta = "tags";
const _u = "uri";
const _uI = "userId";
const _uT = "updateTime";
const n0 = "com.amazonaws.ivschat";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  PendingVerification,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { IvschatServiceException } from "../models/IvschatServiceException";

/* eslint no-var: 0 */
var ChatToken: StaticSimpleSchema = [0, n0, _CT, 8, 0];
var UserID: StaticSimpleSchema = [0, n0, _UID, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var CloudWatchLogsDestinationConfiguration$: StaticStructureSchema = [3, n0, _CWLDC,
  0,
  [_lGN],
  [0]
];
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_m, _rI, _rT],
  [0, 0, 0]
];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var CreateChatTokenRequest$: StaticStructureSchema = [3, n0, _CCTR,
  0,
  [_rIo, _uI, _ca, _sDIM, _a],
  [0, [() => UserID, 0], 64 | 0, 1, [() => ChatTokenAttributes, 0]]
];
export var CreateChatTokenResponse$: StaticStructureSchema = [3, n0, _CCTRr,
  0,
  [_t, _tET, _sET],
  [[() => ChatToken, 0], 5, 5]
];
export var CreateLoggingConfigurationRequest$: StaticStructureSchema = [3, n0, _CLCR,
  0,
  [_n, _dC, _ta],
  [0, () => DestinationConfiguration$, 128 | 0]
];
export var CreateLoggingConfigurationResponse$: StaticStructureSchema = [3, n0, _CLCRr,
  0,
  [_ar, _i, _cT, _uT, _n, _dC, _s, _ta],
  [0, 0, 5, 5, 0, () => DestinationConfiguration$, 0, 128 | 0]
];
export var CreateRoomRequest$: StaticStructureSchema = [3, n0, _CRR,
  0,
  [_n, _mMRPS, _mML, _mRH, _ta, _lCI],
  [0, 1, 1, () => MessageReviewHandler$, 128 | 0, 64 | 0]
];
export var CreateRoomResponse$: StaticStructureSchema = [3, n0, _CRRr,
  0,
  [_ar, _i, _n, _cT, _uT, _mMRPS, _mML, _mRH, _ta, _lCI],
  [0, 0, 0, 5, 5, 1, 1, () => MessageReviewHandler$, 128 | 0, 64 | 0]
];
export var DeleteLoggingConfigurationRequest$: StaticStructureSchema = [3, n0, _DLCR,
  0,
  [_id],
  [0]
];
export var DeleteMessageRequest$: StaticStructureSchema = [3, n0, _DMR,
  0,
  [_rIo, _i, _r],
  [0, 0, 0]
];
export var DeleteMessageResponse$: StaticStructureSchema = [3, n0, _DMRe,
  0,
  [_i],
  [0]
];
export var DeleteRoomRequest$: StaticStructureSchema = [3, n0, _DRR,
  0,
  [_id],
  [0]
];
export var DisconnectUserRequest$: StaticStructureSchema = [3, n0, _DUR,
  0,
  [_rIo, _uI, _r],
  [0, [() => UserID, 0], 0]
];
export var DisconnectUserResponse$: StaticStructureSchema = [3, n0, _DURi,
  0,
  [],
  []
];
export var FirehoseDestinationConfiguration$: StaticStructureSchema = [3, n0, _FDC,
  0,
  [_dSN],
  [0]
];
export var GetLoggingConfigurationRequest$: StaticStructureSchema = [3, n0, _GLCR,
  0,
  [_id],
  [0]
];
export var GetLoggingConfigurationResponse$: StaticStructureSchema = [3, n0, _GLCRe,
  0,
  [_ar, _i, _cT, _uT, _n, _dC, _s, _ta],
  [0, 0, 5, 5, 0, () => DestinationConfiguration$, 0, 128 | 0]
];
export var GetRoomRequest$: StaticStructureSchema = [3, n0, _GRR,
  0,
  [_id],
  [0]
];
export var GetRoomResponse$: StaticStructureSchema = [3, n0, _GRRe,
  0,
  [_ar, _i, _n, _cT, _uT, _mMRPS, _mML, _mRH, _ta, _lCI],
  [0, 0, 0, 5, 5, 1, 1, () => MessageReviewHandler$, 128 | 0, 64 | 0]
];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var ListLoggingConfigurationsRequest$: StaticStructureSchema = [3, n0, _LLCR,
  0,
  [_nT, _mR],
  [0, 1]
];
export var ListLoggingConfigurationsResponse$: StaticStructureSchema = [3, n0, _LLCRi,
  0,
  [_lC, _nT],
  [() => LoggingConfigurationList, 0]
];
export var ListRoomsRequest$: StaticStructureSchema = [3, n0, _LRR,
  0,
  [_n, _nT, _mR, _mRHU, _lCIo],
  [0, 0, 1, 0, 0]
];
export var ListRoomsResponse$: StaticStructureSchema = [3, n0, _LRRi,
  0,
  [_ro, _nT],
  [() => RoomList, 0]
];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR,
  0,
  [_rA],
  [[0, 1]]
];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi,
  0,
  [_ta],
  [128 | 0]
];
export var LoggingConfigurationSummary$: StaticStructureSchema = [3, n0, _LCS,
  0,
  [_ar, _i, _cT, _uT, _n, _dC, _s, _ta],
  [0, 0, 5, 5, 0, () => DestinationConfiguration$, 0, 128 | 0]
];
export var MessageReviewHandler$: StaticStructureSchema = [3, n0, _MRH,
  0,
  [_u, _fR],
  [0, 0]
];
export var PendingVerification$: StaticErrorSchema = [-3, n0, _PV,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(PendingVerification$, PendingVerification);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m, _rI, _rT],
  [0, 0, 0]
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var RoomSummary$: StaticStructureSchema = [3, n0, _RS,
  0,
  [_ar, _i, _n, _mRH, _cT, _uT, _ta, _lCI],
  [0, 0, 0, () => MessageReviewHandler$, 5, 5, 128 | 0, 64 | 0]
];
export var S3DestinationConfiguration$: StaticStructureSchema = [3, n0, _SDC,
  0,
  [_bN],
  [0]
];
export var SendEventRequest$: StaticStructureSchema = [3, n0, _SER,
  0,
  [_rIo, _eN, _a],
  [0, 0, 128 | 0]
];
export var SendEventResponse$: StaticStructureSchema = [3, n0, _SERe,
  0,
  [_i],
  [0]
];
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m, _rI, _rT, _l],
  [0, 0, 0, 1]
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR,
  0,
  [_rA, _ta],
  [[0, 1], 128 | 0]
];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa,
  0,
  [],
  []
];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _rI, _rT, _l],
  [0, 0, 0, 1]
];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var UntagResourceRequest$: StaticStructureSchema = [3, n0, _URR,
  0,
  [_rA, _tK],
  [[0, 1], [64 | 0, { [_hQ]: _tK }]]
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn,
  0,
  [],
  []
];
export var UpdateLoggingConfigurationRequest$: StaticStructureSchema = [3, n0, _ULCR,
  0,
  [_id, _n, _dC],
  [0, 0, () => DestinationConfiguration$]
];
export var UpdateLoggingConfigurationResponse$: StaticStructureSchema = [3, n0, _ULCRp,
  0,
  [_ar, _i, _cT, _uT, _n, _dC, _s, _ta],
  [0, 0, 5, 5, 0, () => DestinationConfiguration$, 0, 128 | 0]
];
export var UpdateRoomRequest$: StaticStructureSchema = [3, n0, _URRp,
  0,
  [_id, _n, _mMRPS, _mML, _mRH, _lCI],
  [0, 0, 1, 1, () => MessageReviewHandler$, 64 | 0]
];
export var UpdateRoomResponse$: StaticStructureSchema = [3, n0, _URRpd,
  0,
  [_ar, _i, _n, _cT, _uT, _mMRPS, _mML, _mRH, _ta, _lCI],
  [0, 0, 0, 5, 5, 1, 1, () => MessageReviewHandler$, 128 | 0, 64 | 0]
];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList]
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var ValidationExceptionField$: StaticStructureSchema = [3, n0, _VEF,
  0,
  [_n, _m],
  [0, 0]
];
var __Unit = "unit" as const;
export var IvschatServiceException$: StaticErrorSchema = [-3, _sm, "IvschatServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(IvschatServiceException$, IvschatServiceException);
var ChatTokenCapabilities = 64 | 0;
var LoggingConfigurationIdentifierList = 64 | 0;
var LoggingConfigurationList: StaticListSchema = [1, n0, _LCL,
  0, () => LoggingConfigurationSummary$
];
var RoomList: StaticListSchema = [1, n0, _RL,
  0, () => RoomSummary$
];
var TagKeyList = 64 | 0;
var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL,
  0, () => ValidationExceptionField$
];
var ChatTokenAttributes: StaticMapSchema = [2, n0, _CTA,
  8, 0, 0
];
var EventAttributes = 128 | 0;
var Tags = 128 | 0;
export var DestinationConfiguration$: StaticUnionSchema = [4, n0, _DC,
  0,
  [_s_, _cWL, _f],
  [() => S3DestinationConfiguration$, () => CloudWatchLogsDestinationConfiguration$, () => FirehoseDestinationConfiguration$]
];
export var CreateChatToken$: StaticOperationSchema = [9, n0, _CCT,
  { [_h]: ["POST", "/CreateChatToken", 200] }, () => CreateChatTokenRequest$, () => CreateChatTokenResponse$
];
export var CreateLoggingConfiguration$: StaticOperationSchema = [9, n0, _CLC,
  { [_h]: ["POST", "/CreateLoggingConfiguration", 200] }, () => CreateLoggingConfigurationRequest$, () => CreateLoggingConfigurationResponse$
];
export var CreateRoom$: StaticOperationSchema = [9, n0, _CR,
  { [_h]: ["POST", "/CreateRoom", 200] }, () => CreateRoomRequest$, () => CreateRoomResponse$
];
export var DeleteLoggingConfiguration$: StaticOperationSchema = [9, n0, _DLC,
  { [_h]: ["POST", "/DeleteLoggingConfiguration", 204] }, () => DeleteLoggingConfigurationRequest$, () => __Unit
];
export var DeleteMessage$: StaticOperationSchema = [9, n0, _DM,
  { [_h]: ["POST", "/DeleteMessage", 200] }, () => DeleteMessageRequest$, () => DeleteMessageResponse$
];
export var DeleteRoom$: StaticOperationSchema = [9, n0, _DR,
  { [_h]: ["POST", "/DeleteRoom", 204] }, () => DeleteRoomRequest$, () => __Unit
];
export var DisconnectUser$: StaticOperationSchema = [9, n0, _DU,
  { [_h]: ["POST", "/DisconnectUser", 200] }, () => DisconnectUserRequest$, () => DisconnectUserResponse$
];
export var GetLoggingConfiguration$: StaticOperationSchema = [9, n0, _GLC,
  { [_h]: ["POST", "/GetLoggingConfiguration", 200] }, () => GetLoggingConfigurationRequest$, () => GetLoggingConfigurationResponse$
];
export var GetRoom$: StaticOperationSchema = [9, n0, _GR,
  { [_h]: ["POST", "/GetRoom", 200] }, () => GetRoomRequest$, () => GetRoomResponse$
];
export var ListLoggingConfigurations$: StaticOperationSchema = [9, n0, _LLC,
  { [_h]: ["POST", "/ListLoggingConfigurations", 200] }, () => ListLoggingConfigurationsRequest$, () => ListLoggingConfigurationsResponse$
];
export var ListRooms$: StaticOperationSchema = [9, n0, _LR,
  { [_h]: ["POST", "/ListRooms", 200] }, () => ListRoomsRequest$, () => ListRoomsResponse$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  { [_h]: ["GET", "/tags/{resourceArn}", 200] }, () => ListTagsForResourceRequest$, () => ListTagsForResourceResponse$
];
export var SendEvent$: StaticOperationSchema = [9, n0, _SE,
  { [_h]: ["POST", "/SendEvent", 200] }, () => SendEventRequest$, () => SendEventResponse$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  { [_h]: ["POST", "/tags/{resourceArn}", 200] }, () => TagResourceRequest$, () => TagResourceResponse$
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  { [_h]: ["DELETE", "/tags/{resourceArn}", 200] }, () => UntagResourceRequest$, () => UntagResourceResponse$
];
export var UpdateLoggingConfiguration$: StaticOperationSchema = [9, n0, _ULC,
  { [_h]: ["POST", "/UpdateLoggingConfiguration", 200] }, () => UpdateLoggingConfigurationRequest$, () => UpdateLoggingConfigurationResponse$
];
export var UpdateRoom$: StaticOperationSchema = [9, n0, _URp,
  { [_h]: ["POST", "/UpdateRoom", 200] }, () => UpdateRoomRequest$, () => UpdateRoomResponse$
];

export const _ADE = "AccessDeniedException";
export const _CCT = "CreateChatToken";
export const _CCTR = "CreateChatTokenRequest";
export const _CCTRr = "CreateChatTokenResponse";
export const _CE = "ConflictException";
export const _CLC = "CreateLoggingConfiguration";
export const _CLCR = "CreateLoggingConfigurationRequest";
export const _CLCRr = "CreateLoggingConfigurationResponse";
export const _CR = "CreateRoom";
export const _CRR = "CreateRoomRequest";
export const _CRRr = "CreateRoomResponse";
export const _CT = "ChatToken";
export const _CTA = "ChatTokenAttributes";
export const _CWLDC = "CloudWatchLogsDestinationConfiguration";
export const _DC = "DestinationConfiguration";
export const _DLC = "DeleteLoggingConfiguration";
export const _DLCR = "DeleteLoggingConfigurationRequest";
export const _DM = "DeleteMessage";
export const _DMR = "DeleteMessageRequest";
export const _DMRe = "DeleteMessageResponse";
export const _DR = "DeleteRoom";
export const _DRR = "DeleteRoomRequest";
export const _DU = "DisconnectUser";
export const _DUR = "DisconnectUserRequest";
export const _DURi = "DisconnectUserResponse";
export const _FDC = "FirehoseDestinationConfiguration";
export const _GLC = "GetLoggingConfiguration";
export const _GLCR = "GetLoggingConfigurationRequest";
export const _GLCRe = "GetLoggingConfigurationResponse";
export const _GR = "GetRoom";
export const _GRR = "GetRoomRequest";
export const _GRRe = "GetRoomResponse";
export const _ISE = "InternalServerException";
export const _LCL = "LoggingConfigurationList";
export const _LCS = "LoggingConfigurationSummary";
export const _LLC = "ListLoggingConfigurations";
export const _LLCR = "ListLoggingConfigurationsRequest";
export const _LLCRi = "ListLoggingConfigurationsResponse";
export const _LR = "ListRooms";
export const _LRR = "ListRoomsRequest";
export const _LRRi = "ListRoomsResponse";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _MRH = "MessageReviewHandler";
export const _PV = "PendingVerification";
export const _RL = "RoomList";
export const _RNFE = "ResourceNotFoundException";
export const _RS = "RoomSummary";
export const _SDC = "S3DestinationConfiguration";
export const _SE = "SendEvent";
export const _SER = "SendEventRequest";
export const _SERe = "SendEventResponse";
export const _SQEE = "ServiceQuotaExceededException";
export const _TE = "ThrottlingException";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _UID = "UserID";
export const _ULC = "UpdateLoggingConfiguration";
export const _ULCR = "UpdateLoggingConfigurationRequest";
export const _ULCRp = "UpdateLoggingConfigurationResponse";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _URRp = "UpdateRoomRequest";
export const _URRpd = "UpdateRoomResponse";
export const _URp = "UpdateRoom";
export const _VE = "ValidationException";
export const _VEF = "ValidationExceptionField";
export const _VEFL = "ValidationExceptionFieldList";
export const _a = "attributes";
export const _ar = "arn";
export const _bN = "bucketName";
export const _c = "client";
export const _cT = "createTime";
export const _cWL = "cloudWatchLogs";
export const _ca = "capabilities";
export const _dC = "destinationConfiguration";
export const _dSN = "deliveryStreamName";
export const _e = "error";
export const _eN = "eventName";
export const _f = "firehose";
export const _fL = "fieldList";
export const _fR = "fallbackResult";
export const _h = "http";
export const _hE = "httpError";
export const _hQ = "httpQuery";
export const _i = "id";
export const _id = "identifier";
export const _l = "limit";
export const _lC = "loggingConfigurations";
export const _lCI = "loggingConfigurationIdentifiers";
export const _lCIo = "loggingConfigurationIdentifier";
export const _lGN = "logGroupName";
export const _m = "message";
export const _mML = "maximumMessageLength";
export const _mMRPS = "maximumMessageRatePerSecond";
export const _mR = "maxResults";
export const _mRH = "messageReviewHandler";
export const _mRHU = "messageReviewHandlerUri";
export const _n = "name";
export const _nT = "nextToken";
export const _r = "reason";
export const _rA = "resourceArn";
export const _rI = "resourceId";
export const _rIo = "roomIdentifier";
export const _rT = "resourceType";
export const _ro = "rooms";
export const _s = "state";
export const _sDIM = "sessionDurationInMinutes";
export const _sET = "sessionExpirationTime";
export const _s_ = "s3";
export const _se = "server";
export const _t = "token";
export const _tET = "tokenExpirationTime";
export const _tK = "tagKeys";
export const _ta = "tags";
export const _u = "uri";
export const _uI = "userId";
export const _uT = "updateTime";
export const n0 = "com.amazonaws.ivschat";

// smithy-typescript generated code
import { error, list, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ValidationException as __ValidationException,
} from "../models/index";
import { IvschatServiceException as __IvschatServiceException } from "../models/IvschatServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_n, _m], [0, 0]);
export var IvschatServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.ivschat",
  "IvschatServiceException",
  0,
  [],
  [],
  __IvschatServiceException
);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);

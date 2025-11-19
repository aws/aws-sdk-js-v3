const _A = "Arn";
const _AC = "AttendeeCapabilities";
const _AF = "AttendeeFeatures";
const _AFU = "AudioFallbackUrl";
const _AFu = "AudioFeatures";
const _AHU = "AudioHostUrl";
const _AI = "AttendeeId";
const _AII = "AttendeeIdItem";
const _AIL = "AttendeeIdsList";
const _AL = "AttendeeList";
const _At = "Attendee";
const _Att = "Attendees";
const _Au = "Audio";
const _BCA = "BatchCreateAttendee";
const _BCAEL = "BatchCreateAttendeeErrorList";
const _BCAR = "BatchCreateAttendeeRequest";
const _BCARa = "BatchCreateAttendeeResponse";
const _BRE = "BadRequestException";
const _BUACE = "BatchUpdateAttendeeCapabilitiesExcept";
const _BUACER = "BatchUpdateAttendeeCapabilitiesExceptRequest";
const _C = "Capabilities";
const _CA = "CreateAttendee";
const _CAE = "CreateAttendeeError";
const _CAR = "CreateAttendeeRequest";
const _CARI = "CreateAttendeeRequestItem";
const _CARIL = "CreateAttendeeRequestItemList";
const _CARr = "CreateAttendeeResponse";
const _CE = "ConflictException";
const _CF = "ContentFeatures";
const _CIT = "ContentIdentificationType";
const _CM = "CreateMeeting";
const _CMR = "CreateMeetingRequest";
const _CMRr = "CreateMeetingResponse";
const _CMWA = "CreateMeetingWithAttendees";
const _CMWAR = "CreateMeetingWithAttendeesRequest";
const _CMWARIL = "CreateMeetingWithAttendeesRequestItemList";
const _CMWARr = "CreateMeetingWithAttendeesResponse";
const _CRT = "ClientRequestToken";
const _CRTo = "ContentRedactionType";
const _Co = "Content";
const _Cod = "Code";
const _DA = "DeleteAttendee";
const _DAR = "DeleteAttendeeRequest";
const _DM = "DeleteMeeting";
const _DMR = "DeleteMeetingRequest";
const _E = "Errors";
const _EAI = "ExcludedAttendeeIds";
const _EC = "ErrorCode";
const _EIU = "EventIngestionUrl";
const _EM = "ErrorMessage";
const _EMI = "ExternalMeetingId";
const _EPRS = "EnablePartialResultsStabilization";
const _ER = "EchoReduction";
const _ETMS = "EngineTranscribeMedicalSettings";
const _ETS = "EngineTranscribeSettings";
const _EUI = "ExternalUserId";
const _FE = "ForbiddenException";
const _GA = "GetAttendee";
const _GAR = "GetAttendeeRequest";
const _GARe = "GetAttendeeResponse";
const _GM = "GetMeeting";
const _GMR = "GetMeetingRequest";
const _GMRe = "GetMeetingResponse";
const _IL = "IdentifyLanguage";
const _JT = "JoinToken";
const _JTS = "JoinTokenString";
const _K = "Key";
const _LA = "ListAttendees";
const _LAR = "ListAttendeesRequest";
const _LARi = "ListAttendeesResponse";
const _LC = "LanguageCode";
const _LEE = "LimitExceededException";
const _LFA = "LambdaFunctionArn";
const _LMN = "LanguageModelName";
const _LO = "LanguageOptions";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _M = "Message";
const _MA = "MeetingArn";
const _MC = "MaxCount";
const _MF = "MeetingFeatures";
const _MFC = "MeetingFeaturesConfiguration";
const _MHI = "MeetingHostId";
const _MI = "MeetingId";
const _MP = "MediaPlacement";
const _MPNT = "MediaPlacementNetworkType";
const _MR = "MaxResolution";
const _MRa = "MaxResults";
const _MRe = "MediaRegion";
const _Me = "Meeting";
const _NC = "NotificationsConfiguration";
const _NFE = "NotFoundException";
const _NT = "NextToken";
const _PET = "PiiEntityTypes";
const _PL = "PreferredLanguage";
const _PMI = "PrimaryMeetingId";
const _PRS = "PartialResultsStability";
const _R = "Region";
const _RA = "Retry-After";
const _RARN = "ResourceARN";
const _RAS = "RetryAfterSeconds";
const _RI = "RequestId";
const _RN = "ResourceName";
const _RNFE = "ResourceNotFoundException";
const _S = "Specialty";
const _SDU = "ScreenDataUrl";
const _SFE = "ServiceFailureException";
const _SMT = "StartMeetingTranscription";
const _SMTR = "StartMeetingTranscriptionRequest";
const _SMTRt = "StopMeetingTranscriptionRequest";
const _SMTt = "StopMeetingTranscription";
const _SQA = "SqsQueueArn";
const _SSU = "ScreenSharingUrl";
const _STA = "SnsTopicArn";
const _SU = "SignalingUrl";
const _SUE = "ServiceUnavailableException";
const _SVU = "ScreenViewingUrl";
const _T = "Tags";
const _TC = "TranscriptionConfiguration";
const _TCU = "TurnControlUrl";
const _TE = "ThrottlingException";
const _TI = "TenantIds";
const _TK = "TagKeys";
const _TL = "TagList";
const _TMTE = "TooManyTagsException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _Ta = "Tag";
const _Ty = "Type";
const _UAC = "UpdateAttendeeCapabilities";
const _UACR = "UpdateAttendeeCapabilitiesRequest";
const _UACRp = "UpdateAttendeeCapabilitiesResponse";
const _UE = "UnauthorizedException";
const _UEE = "UnprocessableEntityException";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _V = "Video";
const _VF = "VideoFeatures";
const _VFM = "VocabularyFilterMethod";
const _VFN = "VocabularyFilterName";
const _VFNo = "VocabularyFilterNames";
const _VN = "VocabularyName";
const _VNo = "VocabularyNames";
const _Va = "Value";
const _a = "arn";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _mr = "max-results";
const _nt = "next-token";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.chimesdkmeetings";
const n0 = "com.amazonaws.chimesdkmeetings";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { ChimeSDKMeetingsServiceException as __ChimeSDKMeetingsServiceException } from "../models/ChimeSDKMeetingsServiceException";
import {
  BadRequestException as __BadRequestException,
  ConflictException as __ConflictException,
  ForbiddenException as __ForbiddenException,
  LimitExceededException as __LimitExceededException,
  NotFoundException as __NotFoundException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceFailureException as __ServiceFailureException,
  ServiceUnavailableException as __ServiceUnavailableException,
  ThrottlingException as __ThrottlingException,
  TooManyTagsException as __TooManyTagsException,
  UnauthorizedException as __UnauthorizedException,
  UnprocessableEntityException as __UnprocessableEntityException,
} from "../models/errors";

/* eslint no-var: 0 */

export var Arn: StaticSimpleSchema = [0, n0, _A, 8, 0];
export var ClientRequestToken: StaticSimpleSchema = [0, n0, _CRT, 8, 0];
export var ExternalMeetingId: StaticSimpleSchema = [0, n0, _EMI, 8, 0];
export var ExternalUserId: StaticSimpleSchema = [0, n0, _EUI, 8, 0];
export var JoinTokenString: StaticSimpleSchema = [0, n0, _JTS, 8, 0];
export var Attendee: StaticStructureSchema = [
  3,
  n0,
  _At,
  0,
  [_EUI, _AI, _JT, _C],
  [[() => ExternalUserId, 0], 0, [() => JoinTokenString, 0], () => AttendeeCapabilities],
];
export var AttendeeCapabilities: StaticStructureSchema = [3, n0, _AC, 0, [_Au, _V, _Co], [0, 0, 0]];
export var AttendeeFeatures: StaticStructureSchema = [3, n0, _AF, 0, [_MC], [1]];
export var AttendeeIdItem: StaticStructureSchema = [3, n0, _AII, 0, [_AI], [0]];
export var AudioFeatures: StaticStructureSchema = [3, n0, _AFu, 0, [_ER], [0]];
export var BadRequestException: StaticErrorSchema = [
  -3,
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_Cod, _M, _RI],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(BadRequestException, __BadRequestException);

export var BatchCreateAttendeeRequest: StaticStructureSchema = [
  3,
  n0,
  _BCAR,
  0,
  [_MI, _Att],
  [
    [0, 1],
    [() => CreateAttendeeRequestItemList, 0],
  ],
];
export var BatchCreateAttendeeResponse: StaticStructureSchema = [
  3,
  n0,
  _BCARa,
  0,
  [_Att, _E],
  [
    [() => AttendeeList, 0],
    [() => BatchCreateAttendeeErrorList, 0],
  ],
];
export var BatchUpdateAttendeeCapabilitiesExceptRequest: StaticStructureSchema = [
  3,
  n0,
  _BUACER,
  0,
  [_MI, _EAI, _C],
  [[0, 1], () => AttendeeIdsList, () => AttendeeCapabilities],
];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_Cod, _M, _RI],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var ContentFeatures: StaticStructureSchema = [3, n0, _CF, 0, [_MR], [0]];
export var CreateAttendeeError: StaticStructureSchema = [
  3,
  n0,
  _CAE,
  0,
  [_EUI, _EC, _EM],
  [[() => ExternalUserId, 0], 0, 0],
];
export var CreateAttendeeRequest: StaticStructureSchema = [
  3,
  n0,
  _CAR,
  0,
  [_MI, _EUI, _C],
  [[0, 1], [() => ExternalUserId, 0], () => AttendeeCapabilities],
];
export var CreateAttendeeRequestItem: StaticStructureSchema = [
  3,
  n0,
  _CARI,
  0,
  [_EUI, _C],
  [[() => ExternalUserId, 0], () => AttendeeCapabilities],
];
export var CreateAttendeeResponse: StaticStructureSchema = [3, n0, _CARr, 0, [_At], [[() => Attendee, 0]]];
export var CreateMeetingRequest: StaticStructureSchema = [
  3,
  n0,
  _CMR,
  0,
  [_CRT, _MRe, _MHI, _EMI, _NC, _MF, _PMI, _TI, _T, _MPNT],
  [
    [() => ClientRequestToken, 4],
    0,
    [() => ExternalUserId, 0],
    [() => ExternalMeetingId, 0],
    [() => NotificationsConfiguration, 0],
    () => MeetingFeaturesConfiguration,
    0,
    64 | 0,
    () => TagList,
    0,
  ],
];
export var CreateMeetingResponse: StaticStructureSchema = [3, n0, _CMRr, 0, [_Me], [[() => Meeting, 0]]];
export var CreateMeetingWithAttendeesRequest: StaticStructureSchema = [
  3,
  n0,
  _CMWAR,
  0,
  [_CRT, _MRe, _MHI, _EMI, _MF, _NC, _Att, _PMI, _TI, _T, _MPNT],
  [
    [() => ClientRequestToken, 4],
    0,
    [() => ExternalUserId, 0],
    [() => ExternalMeetingId, 0],
    () => MeetingFeaturesConfiguration,
    [() => NotificationsConfiguration, 0],
    [() => CreateMeetingWithAttendeesRequestItemList, 0],
    0,
    64 | 0,
    () => TagList,
    0,
  ],
];
export var CreateMeetingWithAttendeesResponse: StaticStructureSchema = [
  3,
  n0,
  _CMWARr,
  0,
  [_Me, _Att, _E],
  [
    [() => Meeting, 0],
    [() => AttendeeList, 0],
    [() => BatchCreateAttendeeErrorList, 0],
  ],
];
export var DeleteAttendeeRequest: StaticStructureSchema = [
  3,
  n0,
  _DAR,
  0,
  [_MI, _AI],
  [
    [0, 1],
    [0, 1],
  ],
];
export var DeleteMeetingRequest: StaticStructureSchema = [3, n0, _DMR, 0, [_MI], [[0, 1]]];
export var EngineTranscribeMedicalSettings: StaticStructureSchema = [
  3,
  n0,
  _ETMS,
  0,
  [_LC, _S, _Ty, _VN, _R, _CIT],
  [0, 0, 0, 0, 0, 0],
];
export var EngineTranscribeSettings: StaticStructureSchema = [
  3,
  n0,
  _ETS,
  0,
  [_LC, _VFM, _VFN, _VN, _R, _EPRS, _PRS, _CIT, _CRTo, _PET, _LMN, _IL, _LO, _PL, _VNo, _VFNo],
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
];
export var ForbiddenException: StaticErrorSchema = [
  -3,
  n0,
  _FE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_Cod, _M, _RI],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ForbiddenException, __ForbiddenException);

export var GetAttendeeRequest: StaticStructureSchema = [
  3,
  n0,
  _GAR,
  0,
  [_MI, _AI],
  [
    [0, 1],
    [0, 1],
  ],
];
export var GetAttendeeResponse: StaticStructureSchema = [3, n0, _GARe, 0, [_At], [[() => Attendee, 0]]];
export var GetMeetingRequest: StaticStructureSchema = [3, n0, _GMR, 0, [_MI], [[0, 1]]];
export var GetMeetingResponse: StaticStructureSchema = [3, n0, _GMRe, 0, [_Me], [[() => Meeting, 0]]];
export var LimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_Cod, _M, _RI],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(LimitExceededException, __LimitExceededException);

export var ListAttendeesRequest: StaticStructureSchema = [
  3,
  n0,
  _LAR,
  0,
  [_MI, _NT, _MRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ],
];
export var ListAttendeesResponse: StaticStructureSchema = [3, n0, _LARi, 0, [_Att, _NT], [[() => AttendeeList, 0], 0]];
export var ListTagsForResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _LTFRR,
  0,
  [_RARN],
  [
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
  ],
];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_T], [() => TagList]];
export var MediaPlacement: StaticStructureSchema = [
  3,
  n0,
  _MP,
  0,
  [_AHU, _AFU, _SU, _TCU, _SDU, _SVU, _SSU, _EIU],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
export var Meeting: StaticStructureSchema = [
  3,
  n0,
  _Me,
  0,
  [_MI, _MHI, _EMI, _MRe, _MP, _MF, _PMI, _TI, _MA],
  [
    0,
    [() => ExternalUserId, 0],
    [() => ExternalMeetingId, 0],
    0,
    () => MediaPlacement,
    () => MeetingFeaturesConfiguration,
    0,
    64 | 0,
    0,
  ],
];
export var MeetingFeaturesConfiguration: StaticStructureSchema = [
  3,
  n0,
  _MFC,
  0,
  [_Au, _V, _Co, _At],
  [() => AudioFeatures, () => VideoFeatures, () => ContentFeatures, () => AttendeeFeatures],
];
export var NotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_Cod, _M, _RI],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(NotFoundException, __NotFoundException);

export var NotificationsConfiguration: StaticStructureSchema = [
  3,
  n0,
  _NC,
  0,
  [_LFA, _STA, _SQA],
  [
    [() => Arn, 0],
    [() => Arn, 0],
    [() => Arn, 0],
  ],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_Cod, _M, _RI, _RN],
  [0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ServiceFailureException: StaticErrorSchema = [
  -3,
  n0,
  _SFE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_Cod, _M, _RI],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceFailureException, __ServiceFailureException);

export var ServiceUnavailableException: StaticErrorSchema = [
  -3,
  n0,
  _SUE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_Cod, _M, _RI, _RAS],
  [
    0,
    0,
    0,
    [
      0,
      {
        [_hH]: _RA,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(ServiceUnavailableException, __ServiceUnavailableException);

export var StartMeetingTranscriptionRequest: StaticStructureSchema = [
  3,
  n0,
  _SMTR,
  0,
  [_MI, _TC],
  [[0, 1], () => TranscriptionConfiguration],
];
export var StopMeetingTranscriptionRequest: StaticStructureSchema = [3, n0, _SMTRt, 0, [_MI], [[0, 1]]];
export var Tag: StaticStructureSchema = [3, n0, _Ta, 0, [_K, _Va], [0, 0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_RARN, _T], [0, () => TagList]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_Cod, _M, _RI],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var TooManyTagsException: StaticErrorSchema = [
  -3,
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_Cod, _M, _RI, _RN],
  [0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(TooManyTagsException, __TooManyTagsException);

export var TranscriptionConfiguration: StaticStructureSchema = [
  3,
  n0,
  _TC,
  0,
  [_ETS, _ETMS],
  [() => EngineTranscribeSettings, () => EngineTranscribeMedicalSettings],
];
export var UnauthorizedException: StaticErrorSchema = [
  -3,
  n0,
  _UE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_Cod, _M, _RI],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(UnauthorizedException, __UnauthorizedException);

export var UnprocessableEntityException: StaticErrorSchema = [
  -3,
  n0,
  _UEE,
  {
    [_e]: _c,
    [_hE]: 422,
  },
  [_Cod, _M, _RI],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(UnprocessableEntityException, __UnprocessableEntityException);

export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateAttendeeCapabilitiesRequest: StaticStructureSchema = [
  3,
  n0,
  _UACR,
  0,
  [_MI, _AI, _C],
  [[0, 1], [0, 1], () => AttendeeCapabilities],
];
export var UpdateAttendeeCapabilitiesResponse: StaticStructureSchema = [3, n0, _UACRp, 0, [_At], [[() => Attendee, 0]]];
export var VideoFeatures: StaticStructureSchema = [3, n0, _VF, 0, [_MR], [0]];
export var __Unit = "unit" as const;

export var ChimeSDKMeetingsServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "ChimeSDKMeetingsServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(ChimeSDKMeetingsServiceException, __ChimeSDKMeetingsServiceException);

export var AttendeeIdsList: StaticListSchema = [1, n0, _AIL, 0, () => AttendeeIdItem];
export var AttendeeList: StaticListSchema = [1, n0, _AL, 0, [() => Attendee, 0]];
export var BatchCreateAttendeeErrorList: StaticListSchema = [1, n0, _BCAEL, 0, [() => CreateAttendeeError, 0]];
export var CreateAttendeeRequestItemList: StaticListSchema = [1, n0, _CARIL, 0, [() => CreateAttendeeRequestItem, 0]];
export var CreateMeetingWithAttendeesRequestItemList: StaticListSchema = [
  1,
  n0,
  _CMWARIL,
  0,
  [() => CreateAttendeeRequestItem, 0],
];
export var TagKeyList = 64 | 0;

export var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag];
export var TenantIdList = 64 | 0;

export var BatchCreateAttendee: StaticOperationSchema = [
  9,
  n0,
  _BCA,
  {
    [_h]: ["POST", "/meetings/{MeetingId}/attendees?operation=batch-create", 200],
  },
  () => BatchCreateAttendeeRequest,
  () => BatchCreateAttendeeResponse,
];
export var BatchUpdateAttendeeCapabilitiesExcept: StaticOperationSchema = [
  9,
  n0,
  _BUACE,
  {
    [_h]: ["PUT", "/meetings/{MeetingId}/attendees/capabilities?operation=batch-update-except", 200],
  },
  () => BatchUpdateAttendeeCapabilitiesExceptRequest,
  () => __Unit,
];
export var CreateAttendee: StaticOperationSchema = [
  9,
  n0,
  _CA,
  {
    [_h]: ["POST", "/meetings/{MeetingId}/attendees", 200],
  },
  () => CreateAttendeeRequest,
  () => CreateAttendeeResponse,
];
export var CreateMeeting: StaticOperationSchema = [
  9,
  n0,
  _CM,
  {
    [_h]: ["POST", "/meetings", 200],
  },
  () => CreateMeetingRequest,
  () => CreateMeetingResponse,
];
export var CreateMeetingWithAttendees: StaticOperationSchema = [
  9,
  n0,
  _CMWA,
  {
    [_h]: ["POST", "/meetings?operation=create-attendees", 200],
  },
  () => CreateMeetingWithAttendeesRequest,
  () => CreateMeetingWithAttendeesResponse,
];
export var DeleteAttendee: StaticOperationSchema = [
  9,
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/meetings/{MeetingId}/attendees/{AttendeeId}", 204],
  },
  () => DeleteAttendeeRequest,
  () => __Unit,
];
export var DeleteMeeting: StaticOperationSchema = [
  9,
  n0,
  _DM,
  {
    [_h]: ["DELETE", "/meetings/{MeetingId}", 204],
  },
  () => DeleteMeetingRequest,
  () => __Unit,
];
export var GetAttendee: StaticOperationSchema = [
  9,
  n0,
  _GA,
  {
    [_h]: ["GET", "/meetings/{MeetingId}/attendees/{AttendeeId}", 200],
  },
  () => GetAttendeeRequest,
  () => GetAttendeeResponse,
];
export var GetMeeting: StaticOperationSchema = [
  9,
  n0,
  _GM,
  {
    [_h]: ["GET", "/meetings/{MeetingId}", 200],
  },
  () => GetMeetingRequest,
  () => GetMeetingResponse,
];
export var ListAttendees: StaticOperationSchema = [
  9,
  n0,
  _LA,
  {
    [_h]: ["GET", "/meetings/{MeetingId}/attendees", 200],
  },
  () => ListAttendeesRequest,
  () => ListAttendeesResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var StartMeetingTranscription: StaticOperationSchema = [
  9,
  n0,
  _SMT,
  {
    [_h]: ["POST", "/meetings/{MeetingId}/transcription?operation=start", 200],
  },
  () => StartMeetingTranscriptionRequest,
  () => __Unit,
];
export var StopMeetingTranscription: StaticOperationSchema = [
  9,
  n0,
  _SMTt,
  {
    [_h]: ["POST", "/meetings/{MeetingId}/transcription?operation=stop", 200],
  },
  () => StopMeetingTranscriptionRequest,
  () => __Unit,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags?operation=tag-resource", 204],
  },
  () => TagResourceRequest,
  () => TagResourceResponse,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  {
    [_h]: ["POST", "/tags?operation=untag-resource", 204],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateAttendeeCapabilities: StaticOperationSchema = [
  9,
  n0,
  _UAC,
  {
    [_h]: ["PUT", "/meetings/{MeetingId}/attendees/{AttendeeId}/capabilities", 200],
  },
  () => UpdateAttendeeCapabilitiesRequest,
  () => UpdateAttendeeCapabilitiesResponse,
];

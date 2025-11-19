const _A = "Attendee";
const _ADE = "AccessDeniedException";
const _AF = "AudioFeatures";
const _AFU = "AudioFallbackUrl";
const _AHU = "AudioHostUrl";
const _AI = "AttachmentItem";
const _AIt = "AttachmentId";
const _AItt = "AttendeeId";
const _AItta = "AttachmentIds";
const _AN = "AttachmentName";
const _ASIB = "AttachmentSizeInBytes";
const _AT = "AbsoluteTime";
const _AU = "AuthenticationUrl";
const _Ac = "Actions";
const _Ar = "Arn";
const _At = "Attachments";
const _Au = "Audio";
const _C = "Content";
const _CAU = "CompleteAttachmentUpload";
const _CAUR = "CompleteAttachmentUploadRequest";
const _CAURo = "CompleteAttachmentUploadResponse";
const _CC = "ConnectionCredentials";
const _CE = "ConflictException";
const _CEo = "ConnectionExpiry";
const _CI = "ContactId";
const _CP = "ConnectParticipant";
const _CPA = "CancelParticipantAuthentication";
const _CPAR = "CancelParticipantAuthenticationRequest";
const _CPARa = "CancelParticipantAuthenticationResponse";
const _CPC = "CreateParticipantConnection";
const _CPCR = "CreateParticipantConnectionRequest";
const _CPCRr = "CreateParticipantConnectionResponse";
const _CT = "ContentType";
const _CTl = "ClientToken";
const _CTo = "ConnectionToken";
const _DN = "DisplayName";
const _DP = "DisconnectParticipant";
const _DPR = "DisconnectParticipantRequest";
const _DPRi = "DisconnectParticipantResponse";
const _DT = "DeliveredTimestamp";
const _DV = "DescribeView";
const _DVR = "DescribeViewRequest";
const _DVRe = "DescribeViewResponse";
const _E = "Expiry";
const _EIU = "EventIngestionUrl";
const _ER = "EchoReduction";
const _GA = "GetAttachment";
const _GAR = "GetAttachmentRequest";
const _GARe = "GetAttachmentResponse";
const _GAU = "GetAuthenticationUrl";
const _GAUR = "GetAuthenticationUrlRequest";
const _GAURe = "GetAuthenticationUrlResponse";
const _GT = "GetTranscript";
const _GTR = "GetTranscriptRequest";
const _GTRe = "GetTranscriptResponse";
const _HTI = "HeadersToInclude";
const _I = "Item";
const _ICI = "InitialContactId";
const _IS = "InputSchema";
const _ISE = "InternalServerException";
const _Id = "Id";
const _JT = "JoinToken";
const _M = "Message";
const _MF = "MeetingFeatures";
const _MFC = "MeetingFeaturesConfiguration";
const _MI = "MessageId";
const _MIe = "MeetingId";
const _MM = "MessageMetadata";
const _MP = "MediaPlacement";
const _MR = "MaxResults";
const _MRo = "MostRecent";
const _Me = "Meeting";
const _N = "Name";
const _NT = "NextToken";
const _PI = "ParticipantId";
const _PR = "ParticipantRole";
const _PT = "ParticipantToken";
const _R = "Receipts";
const _RCI = "RelatedContactId";
const _RI = "ResourceId";
const _RNFE = "ResourceNotFoundException";
const _RPI = "RecipientParticipantId";
const _RT = "ReadTimestamp";
const _RTe = "ResourceType";
const _RU = "RedirectUri";
const _Re = "Receipt";
const _S = "Status";
const _SAU = "StartAttachmentUpload";
const _SAUR = "StartAttachmentUploadRequest";
const _SAURt = "StartAttachmentUploadResponse";
const _SD = "ScanDirection";
const _SE = "SendEvent";
const _SER = "SendEventRequest";
const _SERe = "SendEventResponse";
const _SI = "SessionId";
const _SM = "SendMessage";
const _SMR = "SendMessageRequest";
const _SMRe = "SendMessageResponse";
const _SO = "SortOrder";
const _SP = "StartPosition";
const _SQEE = "ServiceQuotaExceededException";
const _SU = "SignalingUrl";
const _T = "Type";
const _TE = "ThrottlingException";
const _Te = "Template";
const _Tr = "Transcript";
const _U = "Url";
const _UE = "UrlExpiry";
const _UEIS = "UrlExpiryInSeconds";
const _UM = "UploadMetadata";
const _V = "View";
const _VA = "ViewAction";
const _VAi = "ViewActions";
const _VC = "ViewContent";
const _VE = "ValidationException";
const _VIS = "ViewInputSchema";
const _VN = "ViewName";
const _VT = "ViewTemplate";
const _VTi = "ViewToken";
const _Ve = "Version";
const _W = "Websocket";
const _WRTCC = "WebRTCConnection";
const _WRTCM = "WebRTCMeeting";
const _WRTCMP = "WebRTCMediaPlacement";
const _XAB = "X-Amz-Bearer";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.connectparticipant";
const n0 = "com.amazonaws.connectparticipant";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { ConnectParticipantServiceException as __ConnectParticipantServiceException } from "../models/ConnectParticipantServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */

export var JoinToken: StaticSimpleSchema = [0, n0, _JT, 8, 0];
export var ViewAction: StaticSimpleSchema = [0, n0, _VA, 8, 0];
export var ViewInputSchema: StaticSimpleSchema = [0, n0, _VIS, 8, 0];
export var ViewName: StaticSimpleSchema = [0, n0, _VN, 8, 0];
export var ViewTemplate: StaticSimpleSchema = [0, n0, _VT, 8, 0];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var AttachmentItem: StaticStructureSchema = [3, n0, _AI, 0, [_CT, _AIt, _AN, _S], [0, 0, 0, 0]];
export var Attendee: StaticStructureSchema = [3, n0, _A, 0, [_AItt, _JT], [0, [() => JoinToken, 0]]];
export var AudioFeatures: StaticStructureSchema = [3, n0, _AF, 0, [_ER], [0]];
export var CancelParticipantAuthenticationRequest: StaticStructureSchema = [
  3,
  n0,
  _CPAR,
  0,
  [_SI, _CTo],
  [
    0,
    [
      0,
      {
        [_hH]: _XAB,
      },
    ],
  ],
];
export var CancelParticipantAuthenticationResponse: StaticStructureSchema = [3, n0, _CPARa, 0, [], []];
export var CompleteAttachmentUploadRequest: StaticStructureSchema = [
  3,
  n0,
  _CAUR,
  0,
  [_AItta, _CTl, _CTo],
  [
    64 | 0,
    [0, 4],
    [
      0,
      {
        [_hH]: _XAB,
      },
    ],
  ],
];
export var CompleteAttachmentUploadResponse: StaticStructureSchema = [3, n0, _CAURo, 0, [], []];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var ConnectionCredentials: StaticStructureSchema = [3, n0, _CC, 0, [_CTo, _E], [0, 0]];
export var CreateParticipantConnectionRequest: StaticStructureSchema = [
  3,
  n0,
  _CPCR,
  0,
  [_T, _PT, _CP],
  [
    64 | 0,
    [
      0,
      {
        [_hH]: _XAB,
      },
    ],
    2,
  ],
];
export var CreateParticipantConnectionResponse: StaticStructureSchema = [
  3,
  n0,
  _CPCRr,
  0,
  [_W, _CC, _WRTCC],
  [() => Websocket, () => ConnectionCredentials, [() => WebRTCConnection, 0]],
];
export var DescribeViewRequest: StaticStructureSchema = [
  3,
  n0,
  _DVR,
  0,
  [_VTi, _CTo],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _XAB,
      },
    ],
  ],
];
export var DescribeViewResponse: StaticStructureSchema = [3, n0, _DVRe, 0, [_V], [[() => View, 0]]];
export var DisconnectParticipantRequest: StaticStructureSchema = [
  3,
  n0,
  _DPR,
  0,
  [_CTl, _CTo],
  [
    [0, 4],
    [
      0,
      {
        [_hH]: _XAB,
      },
    ],
  ],
];
export var DisconnectParticipantResponse: StaticStructureSchema = [3, n0, _DPRi, 0, [], []];
export var GetAttachmentRequest: StaticStructureSchema = [
  3,
  n0,
  _GAR,
  0,
  [_AIt, _CTo, _UEIS],
  [
    0,
    [
      0,
      {
        [_hH]: _XAB,
      },
    ],
    1,
  ],
];
export var GetAttachmentResponse: StaticStructureSchema = [3, n0, _GARe, 0, [_U, _UE, _ASIB], [0, 0, 1]];
export var GetAuthenticationUrlRequest: StaticStructureSchema = [
  3,
  n0,
  _GAUR,
  0,
  [_SI, _RU, _CTo],
  [
    0,
    0,
    [
      0,
      {
        [_hH]: _XAB,
      },
    ],
  ],
];
export var GetAuthenticationUrlResponse: StaticStructureSchema = [3, n0, _GAURe, 0, [_AU], [0]];
export var GetTranscriptRequest: StaticStructureSchema = [
  3,
  n0,
  _GTR,
  0,
  [_CI, _MR, _NT, _SD, _SO, _SP, _CTo],
  [
    0,
    1,
    0,
    0,
    0,
    () => StartPosition,
    [
      0,
      {
        [_hH]: _XAB,
      },
    ],
  ],
];
export var GetTranscriptResponse: StaticStructureSchema = [3, n0, _GTRe, 0, [_ICI, _Tr, _NT], [0, () => Transcript, 0]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var Item: StaticStructureSchema = [
  3,
  n0,
  _I,
  0,
  [_AT, _C, _CT, _Id, _T, _PI, _DN, _PR, _At, _MM, _RCI, _CI],
  [0, 0, 0, 0, 0, 0, 0, 0, () => Attachments, () => MessageMetadata, 0, 0],
];
export var MeetingFeaturesConfiguration: StaticStructureSchema = [3, n0, _MFC, 0, [_Au], [() => AudioFeatures]];
export var MessageMetadata: StaticStructureSchema = [3, n0, _MM, 0, [_MI, _R], [0, () => Receipts]];
export var Receipt: StaticStructureSchema = [3, n0, _Re, 0, [_DT, _RT, _RPI], [0, 0, 0]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _RI, _RTe],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var SendEventRequest: StaticStructureSchema = [
  3,
  n0,
  _SER,
  0,
  [_CT, _C, _CTl, _CTo],
  [
    0,
    0,
    [0, 4],
    [
      0,
      {
        [_hH]: _XAB,
      },
    ],
  ],
];
export var SendEventResponse: StaticStructureSchema = [3, n0, _SERe, 0, [_Id, _AT], [0, 0]];
export var SendMessageRequest: StaticStructureSchema = [
  3,
  n0,
  _SMR,
  0,
  [_CT, _C, _CTl, _CTo],
  [
    0,
    0,
    [0, 4],
    [
      0,
      {
        [_hH]: _XAB,
      },
    ],
  ],
];
export var SendMessageResponse: StaticStructureSchema = [3, n0, _SMRe, 0, [_Id, _AT], [0, 0]];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var StartAttachmentUploadRequest: StaticStructureSchema = [
  3,
  n0,
  _SAUR,
  0,
  [_CT, _ASIB, _AN, _CTl, _CTo],
  [
    0,
    1,
    0,
    [0, 4],
    [
      0,
      {
        [_hH]: _XAB,
      },
    ],
  ],
];
export var StartAttachmentUploadResponse: StaticStructureSchema = [
  3,
  n0,
  _SAURt,
  0,
  [_AIt, _UM],
  [0, () => UploadMetadata],
];
export var StartPosition: StaticStructureSchema = [3, n0, _SP, 0, [_Id, _AT, _MRo], [0, 0, 1]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UploadMetadata: StaticStructureSchema = [3, n0, _UM, 0, [_U, _UE, _HTI], [0, 0, 128 | 0]];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var View: StaticStructureSchema = [
  3,
  n0,
  _V,
  0,
  [_Id, _Ar, _N, _Ve, _C],
  [0, 0, [() => ViewName, 0], 1, [() => ViewContent, 0]],
];
export var ViewContent: StaticStructureSchema = [
  3,
  n0,
  _VC,
  0,
  [_IS, _Te, _Ac],
  [
    [() => ViewInputSchema, 0],
    [() => ViewTemplate, 0],
    [() => ViewActions, 0],
  ],
];
export var WebRTCConnection: StaticStructureSchema = [
  3,
  n0,
  _WRTCC,
  0,
  [_A, _Me],
  [[() => Attendee, 0], () => WebRTCMeeting],
];
export var WebRTCMediaPlacement: StaticStructureSchema = [3, n0, _WRTCMP, 0, [_AHU, _AFU, _SU, _EIU], [0, 0, 0, 0]];
export var WebRTCMeeting: StaticStructureSchema = [
  3,
  n0,
  _WRTCM,
  0,
  [_MP, _MF, _MIe],
  [() => WebRTCMediaPlacement, () => MeetingFeaturesConfiguration, 0],
];
export var Websocket: StaticStructureSchema = [3, n0, _W, 0, [_U, _CEo], [0, 0]];
export var __Unit = "unit" as const;

export var ConnectParticipantServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "ConnectParticipantServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(ConnectParticipantServiceException, __ConnectParticipantServiceException);

export var AttachmentIdList = 64 | 0;

export var Attachments: StaticListSchema = [1, n0, _At, 0, () => AttachmentItem];
export var ConnectionTypeList = 64 | 0;

export var Receipts: StaticListSchema = [1, n0, _R, 0, () => Receipt];
export var Transcript: StaticListSchema = [1, n0, _Tr, 0, () => Item];
export var ViewActions: StaticListSchema = [1, n0, _VAi, 0, [() => ViewAction, 0]];
export var UploadMetadataSignedHeaders = 128 | 0;

export var CancelParticipantAuthentication: StaticOperationSchema = [
  9,
  n0,
  _CPA,
  {
    [_h]: ["POST", "/participant/cancel-authentication", 200],
  },
  () => CancelParticipantAuthenticationRequest,
  () => CancelParticipantAuthenticationResponse,
];
export var CompleteAttachmentUpload: StaticOperationSchema = [
  9,
  n0,
  _CAU,
  {
    [_h]: ["POST", "/participant/complete-attachment-upload", 200],
  },
  () => CompleteAttachmentUploadRequest,
  () => CompleteAttachmentUploadResponse,
];
export var CreateParticipantConnection: StaticOperationSchema = [
  9,
  n0,
  _CPC,
  {
    [_h]: ["POST", "/participant/connection", 200],
  },
  () => CreateParticipantConnectionRequest,
  () => CreateParticipantConnectionResponse,
];
export var DescribeView: StaticOperationSchema = [
  9,
  n0,
  _DV,
  {
    [_h]: ["GET", "/participant/views/{ViewToken}", 200],
  },
  () => DescribeViewRequest,
  () => DescribeViewResponse,
];
export var DisconnectParticipant: StaticOperationSchema = [
  9,
  n0,
  _DP,
  {
    [_h]: ["POST", "/participant/disconnect", 200],
  },
  () => DisconnectParticipantRequest,
  () => DisconnectParticipantResponse,
];
export var GetAttachment: StaticOperationSchema = [
  9,
  n0,
  _GA,
  {
    [_h]: ["POST", "/participant/attachment", 200],
  },
  () => GetAttachmentRequest,
  () => GetAttachmentResponse,
];
export var GetAuthenticationUrl: StaticOperationSchema = [
  9,
  n0,
  _GAU,
  {
    [_h]: ["POST", "/participant/authentication-url", 200],
  },
  () => GetAuthenticationUrlRequest,
  () => GetAuthenticationUrlResponse,
];
export var GetTranscript: StaticOperationSchema = [
  9,
  n0,
  _GT,
  {
    [_h]: ["POST", "/participant/transcript", 200],
  },
  () => GetTranscriptRequest,
  () => GetTranscriptResponse,
];
export var SendEvent: StaticOperationSchema = [
  9,
  n0,
  _SE,
  {
    [_h]: ["POST", "/participant/event", 200],
  },
  () => SendEventRequest,
  () => SendEventResponse,
];
export var SendMessage: StaticOperationSchema = [
  9,
  n0,
  _SM,
  {
    [_h]: ["POST", "/participant/message", 200],
  },
  () => SendMessageRequest,
  () => SendMessageResponse,
];
export var StartAttachmentUpload: StaticOperationSchema = [
  9,
  n0,
  _SAU,
  {
    [_h]: ["POST", "/participant/start-attachment-upload", 200],
  },
  () => StartAttachmentUploadRequest,
  () => StartAttachmentUploadResponse,
];

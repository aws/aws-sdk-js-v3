// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _A,
  _Ac,
  _ADE,
  _AF,
  _AFU,
  _AHU,
  _AI,
  _AIt,
  _AItt,
  _AItta,
  _AN,
  _Ar,
  _ASIB,
  _AT,
  _At,
  _AU,
  _Au,
  _C,
  _c,
  _CAU,
  _CAUR,
  _CAURo,
  _CC,
  _CE,
  _CEo,
  _CI,
  _CP,
  _CPA,
  _CPAR,
  _CPARa,
  _CPC,
  _CPCR,
  _CPCRr,
  _CT,
  _CTl,
  _CTo,
  _DN,
  _DP,
  _DPR,
  _DPRi,
  _DT,
  _DV,
  _DVR,
  _DVRe,
  _E,
  _e,
  _EIU,
  _ER,
  _GA,
  _GAR,
  _GARe,
  _GAU,
  _GAUR,
  _GAURe,
  _GT,
  _GTR,
  _GTRe,
  _h,
  _hE,
  _hH,
  _HTI,
  _I,
  _ICI,
  _Id,
  _IS,
  _ISE,
  _JT,
  _M,
  _Me,
  _MF,
  _MFC,
  _MI,
  _MIe,
  _MM,
  _MP,
  _MR,
  _MRo,
  _N,
  _NT,
  _PI,
  _PR,
  _PT,
  _R,
  _RCI,
  _Re,
  _RI,
  _RNFE,
  _RPI,
  _RT,
  _RTe,
  _RU,
  _S,
  _s,
  _SAU,
  _SAUR,
  _SAURt,
  _SD,
  _SE,
  _SER,
  _SERe,
  _SI,
  _SM,
  _SMR,
  _SMRe,
  _SO,
  _SP,
  _SQEE,
  _SU,
  _T,
  _TE,
  _Te,
  _Tr,
  _U,
  _UE,
  _UEIS,
  _UM,
  _V,
  _VA,
  _VAi,
  _VC,
  _VE,
  _Ve,
  _VIS,
  _VN,
  _VT,
  _VTi,
  _W,
  _WRTCC,
  _WRTCM,
  _WRTCMP,
  _XAB,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var JoinToken = sim(n0, _JT, 0, 8);
export var ViewAction = sim(n0, _VA, 0, 8);
export var ViewInputSchema = sim(n0, _VIS, 0, 8);
export var ViewName = sim(n0, _VN, 0, 8);
export var ViewTemplate = sim(n0, _VT, 0, 8);
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
export var AttachmentItem = struct(n0, _AI, 0, [_CT, _AIt, _AN, _S], [0, 0, 0, 0]);
export var Attendee = struct(n0, _A, 0, [_AItt, _JT], [0, [() => JoinToken, 0]]);
export var AudioFeatures = struct(n0, _AF, 0, [_ER], [0]);
export var CancelParticipantAuthenticationRequest = struct(
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
  ]
);
export var CancelParticipantAuthenticationResponse = struct(n0, _CPARa, 0, [], []);
export var CompleteAttachmentUploadRequest = struct(
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
  ]
);
export var CompleteAttachmentUploadResponse = struct(n0, _CAURo, 0, [], []);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var ConnectionCredentials = struct(n0, _CC, 0, [_CTo, _E], [0, 0]);
export var CreateParticipantConnectionRequest = struct(
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
  ]
);
export var CreateParticipantConnectionResponse = struct(
  n0,
  _CPCRr,
  0,
  [_W, _CC, _WRTCC],
  [() => Websocket, () => ConnectionCredentials, [() => WebRTCConnection, 0]]
);
export var DescribeViewRequest = struct(
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
  ]
);
export var DescribeViewResponse = struct(n0, _DVRe, 0, [_V], [[() => View, 0]]);
export var DisconnectParticipantRequest = struct(
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
  ]
);
export var DisconnectParticipantResponse = struct(n0, _DPRi, 0, [], []);
export var GetAttachmentRequest = struct(
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
  ]
);
export var GetAttachmentResponse = struct(n0, _GARe, 0, [_U, _UE, _ASIB], [0, 0, 1]);
export var GetAuthenticationUrlRequest = struct(
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
  ]
);
export var GetAuthenticationUrlResponse = struct(n0, _GAURe, 0, [_AU], [0]);
export var GetTranscriptRequest = struct(
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
  ]
);
export var GetTranscriptResponse = struct(n0, _GTRe, 0, [_ICI, _Tr, _NT], [0, () => Transcript, 0]);
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
export var Item = struct(
  n0,
  _I,
  0,
  [_AT, _C, _CT, _Id, _T, _PI, _DN, _PR, _At, _MM, _RCI, _CI],
  [0, 0, 0, 0, 0, 0, 0, 0, () => Attachments, () => MessageMetadata, 0, 0]
);
export var MeetingFeaturesConfiguration = struct(n0, _MFC, 0, [_Au], [() => AudioFeatures]);
export var MessageMetadata = struct(n0, _MM, 0, [_MI, _R], [0, () => Receipts]);
export var Receipt = struct(n0, _Re, 0, [_DT, _RT, _RPI], [0, 0, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _RI, _RTe],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var SendEventRequest = struct(
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
  ]
);
export var SendEventResponse = struct(n0, _SERe, 0, [_Id, _AT], [0, 0]);
export var SendMessageRequest = struct(
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
  ]
);
export var SendMessageResponse = struct(n0, _SMRe, 0, [_Id, _AT], [0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],

  __ServiceQuotaExceededException
);
export var StartAttachmentUploadRequest = struct(
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
  ]
);
export var StartAttachmentUploadResponse = struct(n0, _SAURt, 0, [_AIt, _UM], [0, () => UploadMetadata]);
export var StartPosition = struct(n0, _SP, 0, [_Id, _AT, _MRo], [0, 0, 1]);
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
export var UploadMetadata = struct(n0, _UM, 0, [_U, _UE, _HTI], [0, 0, 128 | 0]);
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
export var View = struct(n0, _V, 0, [_Id, _Ar, _N, _Ve, _C], [0, 0, [() => ViewName, 0], 1, [() => ViewContent, 0]]);
export var ViewContent = struct(
  n0,
  _VC,
  0,
  [_IS, _Te, _Ac],
  [
    [() => ViewInputSchema, 0],
    [() => ViewTemplate, 0],
    [() => ViewActions, 0],
  ]
);
export var WebRTCConnection = struct(n0, _WRTCC, 0, [_A, _Me], [[() => Attendee, 0], () => WebRTCMeeting]);
export var WebRTCMediaPlacement = struct(n0, _WRTCMP, 0, [_AHU, _AFU, _SU, _EIU], [0, 0, 0, 0]);
export var WebRTCMeeting = struct(
  n0,
  _WRTCM,
  0,
  [_MP, _MF, _MIe],
  [() => WebRTCMediaPlacement, () => MeetingFeaturesConfiguration, 0]
);
export var Websocket = struct(n0, _W, 0, [_U, _CEo], [0, 0]);
export var Unit = "unit" as const;

export var AttachmentIdList = 64 | 0;

export var Attachments = list(n0, _At, 0, () => AttachmentItem);
export var ConnectionTypeList = 64 | 0;

export var Receipts = list(n0, _R, 0, () => Receipt);
export var Transcript = list(n0, _Tr, 0, () => Item);
export var ViewActions = list(n0, _VAi, 0, [() => ViewAction, 0]);
export var UploadMetadataSignedHeaders = 128 | 0;

export var CancelParticipantAuthentication = op(
  n0,
  _CPA,
  {
    [_h]: ["POST", "/participant/cancel-authentication", 200],
  },
  () => CancelParticipantAuthenticationRequest,
  () => CancelParticipantAuthenticationResponse
);
export var CompleteAttachmentUpload = op(
  n0,
  _CAU,
  {
    [_h]: ["POST", "/participant/complete-attachment-upload", 200],
  },
  () => CompleteAttachmentUploadRequest,
  () => CompleteAttachmentUploadResponse
);
export var CreateParticipantConnection = op(
  n0,
  _CPC,
  {
    [_h]: ["POST", "/participant/connection", 200],
  },
  () => CreateParticipantConnectionRequest,
  () => CreateParticipantConnectionResponse
);
export var DescribeView = op(
  n0,
  _DV,
  {
    [_h]: ["GET", "/participant/views/{ViewToken}", 200],
  },
  () => DescribeViewRequest,
  () => DescribeViewResponse
);
export var DisconnectParticipant = op(
  n0,
  _DP,
  {
    [_h]: ["POST", "/participant/disconnect", 200],
  },
  () => DisconnectParticipantRequest,
  () => DisconnectParticipantResponse
);
export var GetAttachment = op(
  n0,
  _GA,
  {
    [_h]: ["POST", "/participant/attachment", 200],
  },
  () => GetAttachmentRequest,
  () => GetAttachmentResponse
);
export var GetAuthenticationUrl = op(
  n0,
  _GAU,
  {
    [_h]: ["POST", "/participant/authentication-url", 200],
  },
  () => GetAuthenticationUrlRequest,
  () => GetAuthenticationUrlResponse
);
export var GetTranscript = op(
  n0,
  _GT,
  {
    [_h]: ["POST", "/participant/transcript", 200],
  },
  () => GetTranscriptRequest,
  () => GetTranscriptResponse
);
export var SendEvent = op(
  n0,
  _SE,
  {
    [_h]: ["POST", "/participant/event", 200],
  },
  () => SendEventRequest,
  () => SendEventResponse
);
export var SendMessage = op(
  n0,
  _SM,
  {
    [_h]: ["POST", "/participant/message", 200],
  },
  () => SendMessageRequest,
  () => SendMessageResponse
);
export var StartAttachmentUpload = op(
  n0,
  _SAU,
  {
    [_h]: ["POST", "/participant/start-attachment-upload", 200],
  },
  () => StartAttachmentUploadRequest,
  () => StartAttachmentUploadResponse
);

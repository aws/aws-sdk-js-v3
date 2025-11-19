const _ADE = "AccessDeniedException";
const _BB = "BoundingBox";
const _BFDT = "BlazeFaceDetectionThreshold";
const _C = "Code";
const _CC = "ChallengeConfig";
const _CCST = "CurrentColorStartTimestamp";
const _CCl = "ClientChallenge";
const _CCu = "CurrentColor";
const _CD = "ColorDisplayed";
const _CE = "ChallengeEvent";
const _CI = "ChallengeId";
const _CS = "ColorSequence";
const _CSIE = "ClientSessionInformationEvent";
const _CSo = "ColorSequences";
const _CV = "ChallengeVersions";
const _CX = "CenterX";
const _CY = "CenterY";
const _Ch = "Challenge";
const _DD = "DownscrollDuration";
const _DE = "DisconnectionEvent";
const _FC = "FreshnessColor";
const _FDD = "FlatDisplayDuration";
const _FDITPET = "FaceDetectedInTargetPositionEndTimestamp";
const _FDITPST = "FaceDetectedInTargetPositionStartTimestamp";
const _FDT = "FaceDistanceThreshold";
const _FDTM = "FaceDistanceThresholdMin";
const _FDTMa = "FaceDistanceThresholdMax";
const _FIHT = "FaceIouHeightThreshold";
const _FIWT = "FaceIouWidthThreshold";
const _FMALC = "FaceMovementAndLightChallenge";
const _FMALCC = "FaceMovementAndLightClientChallenge";
const _FMALSC = "FaceMovementAndLightServerChallenge";
const _FMC = "FaceMovementChallenge";
const _FMCC = "FaceMovementClientChallenge";
const _FMSC = "FaceMovementServerChallenge";
const _H = "Height";
const _IF = "InitialFace";
const _IFDT = "InitialFaceDetectedTimestamp";
const _ISE = "InternalServerException";
const _L = "Left";
const _LCT = "LightChallengeType";
const _LRS = "LivenessRequestStream";
const _LRSi = "LivenessResponseStream";
const _M = "Message";
const _OFT = "OvalFitTimeout";
const _OHWR = "OvalHeightWidthRatio";
const _OIHT = "OvalIouHeightThreshold";
const _OIT = "OvalIouThreshold";
const _OIWT = "OvalIouWidthThreshold";
const _OP = "OvalParameters";
const _PC = "PreviousColor";
const _RGB = "RGB";
const _SC = "ServerChallenge";
const _SFLS = "StartFaceLivenessSession";
const _SFLSR = "StartFaceLivenessSessionRequest";
const _SFLSRt = "StartFaceLivenessSessionResponse";
const _SI = "SessionInformation";
const _SIe = "SessionId";
const _SN = "SequenceNumber";
const _SNFE = "SessionNotFoundException";
const _SQEE = "ServiceQuotaExceededException";
const _SSIE = "ServerSessionInformationEvent";
const _SUE = "ServiceUnavailableException";
const _T = "Top";
const _TE = "ThrottlingException";
const _TF = "TargetFace";
const _TM = "TimestampMillis";
const _Ty = "Type";
const _V = "Version";
const _VC = "VideoChunk";
const _VE = "ValidationException";
const _VET = "VideoEndTimestamp";
const _VEi = "VideoEvent";
const _VH = "VideoHeight";
const _VST = "VideoStartTimestamp";
const _VW = "VideoWidth";
const _W = "Width";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.rekognitionstreaming";
const _st = "streaming";
const _xarslcv = "x-amz-rekognition-streaming-liveness-challenge-versions";
const _xarslsi = "x-amz-rekognition-streaming-liveness-session-id";
const _xarslvh = "x-amz-rekognition-streaming-liveness-video-height";
const _xarslvw = "x-amz-rekognition-streaming-liveness-video-width";
const n0 = "com.amazonaws.rekognitionstreaming";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ServiceUnavailableException as __ServiceUnavailableException,
  SessionNotFoundException as __SessionNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { RekognitionStreamingServiceException as __RekognitionStreamingServiceException } from "../models/RekognitionStreamingServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M, _C],
  [0, 0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var BoundingBox: StaticStructureSchema = [3, n0, _BB, 0, [_W, _H, _L, _T], [1, 1, 1, 1]];
export var ChallengeConfig: StaticStructureSchema = [
  3,
  n0,
  _CC,
  0,
  [_BFDT, _FDTM, _FDT, _FDTMa, _OIT, _OHWR, _OIWT, _OIHT, _FIWT, _FIHT, _OFT],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
export var ChallengeEvent: StaticStructureSchema = [3, n0, _CE, 0, [_V, _Ty], [0, 0]];
export var ClientSessionInformationEvent: StaticStructureSchema = [3, n0, _CSIE, 0, [_Ch], [() => ClientChallenge]];
export var ColorDisplayed: StaticStructureSchema = [
  3,
  n0,
  _CD,
  0,
  [_CCu, _PC, _SN, _CCST],
  [() => FreshnessColor, () => FreshnessColor, 1, 1],
];
export var ColorSequence: StaticStructureSchema = [3, n0, _CS, 0, [_FC, _DD, _FDD], [() => FreshnessColor, 1, 1]];
export var DisconnectionEvent: StaticStructureSchema = [3, n0, _DE, 0, [_TM], [1]];
export var FaceMovementAndLightClientChallenge: StaticStructureSchema = [
  3,
  n0,
  _FMALCC,
  0,
  [_CI, _VST, _VET, _IF, _TF, _CD],
  [0, 1, 1, () => InitialFace, () => TargetFace, () => ColorDisplayed],
];
export var FaceMovementAndLightServerChallenge: StaticStructureSchema = [
  3,
  n0,
  _FMALSC,
  0,
  [_OP, _LCT, _CC, _CSo],
  [() => OvalParameters, 0, () => ChallengeConfig, () => ColorSequences],
];
export var FaceMovementClientChallenge: StaticStructureSchema = [
  3,
  n0,
  _FMCC,
  0,
  [_CI, _VST, _VET, _IF, _TF],
  [0, 1, 1, () => InitialFace, () => TargetFace],
];
export var FaceMovementServerChallenge: StaticStructureSchema = [
  3,
  n0,
  _FMSC,
  0,
  [_OP, _CC],
  [() => OvalParameters, () => ChallengeConfig],
];
export var FreshnessColor: StaticStructureSchema = [3, n0, _FC, 0, [_RGB], [64 | 1]];
export var InitialFace: StaticStructureSchema = [3, n0, _IF, 0, [_BB, _IFDT], [() => BoundingBox, 1]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M, _C],
  [0, 0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var OvalParameters: StaticStructureSchema = [3, n0, _OP, 0, [_W, _H, _CX, _CY], [1, 1, 1, 1]];
export var ServerSessionInformationEvent: StaticStructureSchema = [3, n0, _SSIE, 0, [_SI], [() => SessionInformation]];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M, _C],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var ServiceUnavailableException: StaticErrorSchema = [
  -3,
  n0,
  _SUE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_M, _C],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ServiceUnavailableException, __ServiceUnavailableException);

export var SessionInformation: StaticStructureSchema = [3, n0, _SI, 0, [_Ch], [() => ServerChallenge]];
export var SessionNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _SNFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _C],
  [0, 0],
];
TypeRegistry.for(n0).registerError(SessionNotFoundException, __SessionNotFoundException);

export var StartFaceLivenessSessionRequest: StaticStructureSchema = [
  3,
  n0,
  _SFLSR,
  0,
  [_SIe, _VW, _VH, _CV, _LRS],
  [
    [
      0,
      {
        [_hH]: _xarslsi,
      },
    ],
    [
      0,
      {
        [_hH]: _xarslvw,
      },
    ],
    [
      0,
      {
        [_hH]: _xarslvh,
      },
    ],
    [
      0,
      {
        [_hH]: _xarslcv,
      },
    ],
    [() => LivenessRequestStream, 16],
  ],
];
export var StartFaceLivenessSessionResponse: StaticStructureSchema = [
  3,
  n0,
  _SFLSRt,
  0,
  [_SIe, _LRSi],
  [
    [
      0,
      {
        [_hH]: _xarslsi,
      },
    ],
    [() => LivenessResponseStream, 16],
  ],
];
export var TargetFace: StaticStructureSchema = [3, n0, _TF, 0, [_BB, _FDITPST, _FDITPET], [() => BoundingBox, 1, 1]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M, _C],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _C],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var VideoEvent: StaticStructureSchema = [3, n0, _VEi, 0, [_VC, _TM], [21, 1]];
export var __Unit = "unit" as const;

export var RekognitionStreamingServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "RekognitionStreamingServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(RekognitionStreamingServiceException, __RekognitionStreamingServiceException);

export var ColorComponentList = 64 | 1;

export var ColorSequences: StaticListSchema = [1, n0, _CSo, 0, () => ColorSequence];
export var ClientChallenge: StaticStructureSchema = [
  3,
  n0,
  _CCl,
  0,
  [_FMALC, _FMC],
  [() => FaceMovementAndLightClientChallenge, () => FaceMovementClientChallenge],
];
export var LivenessRequestStream: StaticStructureSchema = [
  3,
  n0,
  _LRS,
  {
    [_st]: 1,
  },
  [_VEi, _CSIE],
  [() => VideoEvent, () => ClientSessionInformationEvent],
];
export var LivenessResponseStream: StaticStructureSchema = [
  3,
  n0,
  _LRSi,
  {
    [_st]: 1,
  },
  [_SSIE, _DE, _CE, _VE, _ISE, _TE, _SQEE, _SUE],
  [
    () => ServerSessionInformationEvent,
    () => DisconnectionEvent,
    () => ChallengeEvent,
    [() => ValidationException, 0],
    [() => InternalServerException, 0],
    [() => ThrottlingException, 0],
    [() => ServiceQuotaExceededException, 0],
    [() => ServiceUnavailableException, 0],
  ],
];
export var ServerChallenge: StaticStructureSchema = [
  3,
  n0,
  _SC,
  0,
  [_FMALC, _FMC],
  [() => FaceMovementAndLightServerChallenge, () => FaceMovementServerChallenge],
];
export var StartFaceLivenessSession: StaticOperationSchema = [
  9,
  n0,
  _SFLS,
  {
    [_h]: ["POST", "/start-face-liveness-session", 200],
  },
  () => StartFaceLivenessSessionRequest,
  () => StartFaceLivenessSessionResponse,
];

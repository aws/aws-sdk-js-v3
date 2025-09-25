// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ServiceUnavailableException as __ServiceUnavailableException,
  SessionNotFoundException as __SessionNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _ADE,
  _BB,
  _BFDT,
  _C,
  _c,
  _CC,
  _CCl,
  _CCST,
  _CCu,
  _CD,
  _CE,
  _Ch,
  _CI,
  _CS,
  _CSIE,
  _CSo,
  _CV,
  _CX,
  _CY,
  _DD,
  _DE,
  _e,
  _FC,
  _FDD,
  _FDITPET,
  _FDITPST,
  _FDT,
  _FDTM,
  _FDTMa,
  _FIHT,
  _FIWT,
  _FMALC,
  _FMALCC,
  _FMALSC,
  _FMC,
  _FMCC,
  _FMSC,
  _H,
  _h,
  _hE,
  _hH,
  _IF,
  _IFDT,
  _ISE,
  _L,
  _LCT,
  _LRS,
  _LRSi,
  _M,
  _OFT,
  _OHWR,
  _OIHT,
  _OIT,
  _OIWT,
  _OP,
  _PC,
  _RGB,
  _s,
  _SC,
  _SFLS,
  _SFLSR,
  _SFLSRt,
  _SI,
  _SIe,
  _SN,
  _SNFE,
  _SQEE,
  _SSIE,
  _st,
  _SUE,
  _T,
  _TE,
  _TF,
  _TM,
  _Ty,
  _V,
  _VC,
  _VE,
  _VEi,
  _VET,
  _VH,
  _VST,
  _VW,
  _W,
  _xarslcv,
  _xarslsi,
  _xarslvh,
  _xarslvw,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M, _C],
  [0, 0],

  __AccessDeniedException
);
export var BoundingBox = struct(n0, _BB, 0, [_W, _H, _L, _T], [1, 1, 1, 1]);
export var ChallengeConfig = struct(
  n0,
  _CC,
  0,
  [_BFDT, _FDTM, _FDT, _FDTMa, _OIT, _OHWR, _OIWT, _OIHT, _FIWT, _FIHT, _OFT],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
);
export var ChallengeEvent = struct(n0, _CE, 0, [_V, _Ty], [0, 0]);
export var ClientSessionInformationEvent = struct(n0, _CSIE, 0, [_Ch], [() => ClientChallenge]);
export var ColorDisplayed = struct(
  n0,
  _CD,
  0,
  [_CCu, _PC, _SN, _CCST],
  [() => FreshnessColor, () => FreshnessColor, 1, 1]
);
export var ColorSequence = struct(n0, _CS, 0, [_FC, _DD, _FDD], [() => FreshnessColor, 1, 1]);
export var DisconnectionEvent = struct(n0, _DE, 0, [_TM], [1]);
export var FaceMovementAndLightClientChallenge = struct(
  n0,
  _FMALCC,
  0,
  [_CI, _VST, _VET, _IF, _TF, _CD],
  [0, 1, 1, () => InitialFace, () => TargetFace, () => ColorDisplayed]
);
export var FaceMovementAndLightServerChallenge = struct(
  n0,
  _FMALSC,
  0,
  [_OP, _LCT, _CC, _CSo],
  [() => OvalParameters, 0, () => ChallengeConfig, () => ColorSequences]
);
export var FaceMovementClientChallenge = struct(
  n0,
  _FMCC,
  0,
  [_CI, _VST, _VET, _IF, _TF],
  [0, 1, 1, () => InitialFace, () => TargetFace]
);
export var FaceMovementServerChallenge = struct(
  n0,
  _FMSC,
  0,
  [_OP, _CC],
  [() => OvalParameters, () => ChallengeConfig]
);
export var FreshnessColor = struct(n0, _FC, 0, [_RGB], [64 | 1]);
export var InitialFace = struct(n0, _IF, 0, [_BB, _IFDT], [() => BoundingBox, 1]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M, _C],
  [0, 0],

  __InternalServerException
);
export var OvalParameters = struct(n0, _OP, 0, [_W, _H, _CX, _CY], [1, 1, 1, 1]);
export var ServerSessionInformationEvent = struct(n0, _SSIE, 0, [_SI], [() => SessionInformation]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M, _C],
  [0, 0],

  __ServiceQuotaExceededException
);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_M, _C],
  [0, 0],

  __ServiceUnavailableException
);
export var SessionInformation = struct(n0, _SI, 0, [_Ch], [() => ServerChallenge]);
export var SessionNotFoundException = error(
  n0,
  _SNFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _C],
  [0, 0],

  __SessionNotFoundException
);
export var StartFaceLivenessSessionRequest = struct(
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
  ]
);
export var StartFaceLivenessSessionResponse = struct(
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
  ]
);
export var TargetFace = struct(n0, _TF, 0, [_BB, _FDITPST, _FDITPET], [() => BoundingBox, 1, 1]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M, _C],
  [0, 0],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _C],
  [0, 0],

  __ValidationException
);
export var VideoEvent = struct(n0, _VEi, 0, [_VC, _TM], [21, 1]);
export var Unit = "unit" as const;

export var ColorComponentList = 64 | 1;

export var ColorSequences = list(n0, _CSo, 0, () => ColorSequence);
export var ClientChallenge = uni(
  n0,
  _CCl,
  0,
  [_FMALC, _FMC],
  [() => FaceMovementAndLightClientChallenge, () => FaceMovementClientChallenge]
);
export var LivenessRequestStream = uni(
  n0,
  _LRS,
  {
    [_st]: 1,
  },
  [_VEi, _CSIE],
  [() => VideoEvent, () => ClientSessionInformationEvent]
);
export var LivenessResponseStream = uni(
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
  ]
);
export var ServerChallenge = uni(
  n0,
  _SC,
  0,
  [_FMALC, _FMC],
  [() => FaceMovementAndLightServerChallenge, () => FaceMovementServerChallenge]
);
export var StartFaceLivenessSession = op(
  n0,
  _SFLS,
  {
    [_h]: ["POST", "/start-face-liveness-session", 200],
  },
  () => StartFaceLivenessSessionRequest,
  () => StartFaceLivenessSessionResponse
);

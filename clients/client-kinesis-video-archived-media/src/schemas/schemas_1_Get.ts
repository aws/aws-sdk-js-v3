// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  ClientLimitExceededException as __ClientLimitExceededException,
  InvalidArgumentException as __InvalidArgumentException,
  InvalidCodecPrivateDataException as __InvalidCodecPrivateDataException,
  InvalidMediaFrameException as __InvalidMediaFrameException,
  MissingCodecPrivateDataException as __MissingCodecPrivateDataException,
  NoDataRetentionException as __NoDataRetentionException,
  NotAuthorizedException as __NotAuthorizedException,
  ResourceNotFoundException as __ResourceNotFoundException,
  UnsupportedStreamMediaTypeException as __UnsupportedStreamMediaTypeException,
} from "../models/index";
import {
  _c,
  _CF,
  _CFS,
  _CLEE,
  _CT,
  _CT_,
  _CTR,
  _DASHFS,
  _DASHSSURL,
  _DASHTR,
  _DFN,
  _DFT,
  _DM,
  _E,
  _e,
  _Er,
  _ET,
  _F,
  _FC,
  _FL,
  _FLIM,
  _FN,
  _Fo,
  _Fr,
  _FS,
  _FSIB,
  _FST,
  _GC,
  _GCI,
  _GCO,
  _GDASHSSURL,
  _GDASHSSURLI,
  _GDASHSSURLO,
  _GHLSSSURL,
  _GHLSSSURLI,
  _GHLSSSURLO,
  _GI,
  _GII,
  _GIO,
  _GMFFL,
  _GMFFLI,
  _GMFFLO,
  _h,
  _hE,
  _hH,
  _HLSFS,
  _HLSSSURL,
  _HLSTR,
  _HP,
  _I,
  _IAE,
  _IC,
  _ICPDE,
  _Im,
  _IMFE,
  _IST,
  _LF,
  _LFI,
  _LFO,
  _M,
  _MCPDE,
  _MMFR,
  _MMPFR,
  _MR,
  _NAE,
  _NDRE,
  _NT,
  _P,
  _PM,
  _PT,
  _RNFE,
  _s,
  _SARN,
  _SI,
  _SN,
  _ST,
  _STe,
  _TR,
  _TS,
  _USMTE,
  _WP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Payload = sim(n0, _P, 42, {
  [_s]: 1,
});
export var ClientLimitExceededException = error(
  n0,
  _CLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ClientLimitExceededException
);
export var ClipFragmentSelector = struct(n0, _CFS, 0, [_FST, _TR], [0, () => ClipTimestampRange]);
export var ClipTimestampRange = struct(n0, _CTR, 0, [_ST, _ET], [4, 4]);
export var DASHFragmentSelector = struct(n0, _DASHFS, 0, [_FST, _TR], [0, () => DASHTimestampRange]);
export var DASHTimestampRange = struct(n0, _DASHTR, 0, [_ST, _ET], [4, 4]);
export var Fragment = struct(n0, _F, 0, [_FN, _FSIB, _PT, _STe, _FLIM], [0, 1, 4, 4, 1]);
export var FragmentSelector = struct(n0, _FS, 0, [_FST, _TR], [0, () => TimestampRange]);
export var GetClipInput = struct(n0, _GCI, 0, [_SN, _SARN, _CFS], [0, 0, () => ClipFragmentSelector]);
export var GetClipOutput = struct(
  n0,
  _GCO,
  0,
  [_CT, _P],
  [
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [() => Payload, 16],
  ]
);
export var GetDASHStreamingSessionURLInput = struct(
  n0,
  _GDASHSSURLI,
  0,
  [_SN, _SARN, _PM, _DFT, _DFN, _DASHFS, _E, _MMFR],
  [0, 0, 0, 0, 0, () => DASHFragmentSelector, 1, 1]
);
export var GetDASHStreamingSessionURLOutput = struct(n0, _GDASHSSURLO, 0, [_DASHSSURL], [0]);
export var GetHLSStreamingSessionURLInput = struct(
  n0,
  _GHLSSSURLI,
  0,
  [_SN, _SARN, _PM, _HLSFS, _CF, _DM, _DFT, _E, _MMPFR],
  [0, 0, 0, () => HLSFragmentSelector, 0, 0, 0, 1, 1]
);
export var GetHLSStreamingSessionURLOutput = struct(n0, _GHLSSSURLO, 0, [_HLSSSURL], [0]);
export var GetImagesInput = struct(
  n0,
  _GII,
  0,
  [_SN, _SARN, _IST, _ST, _ET, _SI, _Fo, _FC, _WP, _HP, _MR, _NT],
  [0, 0, 0, 4, 4, 1, 0, 128 | 0, 1, 1, 1, 0]
);
export var GetImagesOutput = struct(n0, _GIO, 0, [_I, _NT], [() => Images, 0]);
export var GetMediaForFragmentListInput = struct(n0, _GMFFLI, 0, [_SN, _SARN, _Fr], [0, 0, 64 | 0]);
export var GetMediaForFragmentListOutput = struct(
  n0,
  _GMFFLO,
  0,
  [_CT, _P],
  [
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [() => Payload, 16],
  ]
);
export var HLSFragmentSelector = struct(n0, _HLSFS, 0, [_FST, _TR], [0, () => HLSTimestampRange]);
export var HLSTimestampRange = struct(n0, _HLSTR, 0, [_ST, _ET], [4, 4]);
export var Image = struct(n0, _Im, 0, [_TS, _Er, _IC], [4, 0, 0]);
export var InvalidArgumentException = error(
  n0,
  _IAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidArgumentException
);
export var InvalidCodecPrivateDataException = error(
  n0,
  _ICPDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidCodecPrivateDataException
);
export var InvalidMediaFrameException = error(
  n0,
  _IMFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidMediaFrameException
);
export var ListFragmentsInput = struct(n0, _LFI, 0, [_SN, _SARN, _MR, _NT, _FS], [0, 0, 1, 0, () => FragmentSelector]);
export var ListFragmentsOutput = struct(n0, _LFO, 0, [_Fr, _NT], [() => FragmentList, 0]);
export var MissingCodecPrivateDataException = error(
  n0,
  _MCPDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __MissingCodecPrivateDataException
);
export var NoDataRetentionException = error(
  n0,
  _NDRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __NoDataRetentionException
);
export var NotAuthorizedException = error(
  n0,
  _NAE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_M],
  [0],

  __NotAuthorizedException
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
export var TimestampRange = struct(n0, _TR, 0, [_ST, _ET], [4, 4]);
export var UnsupportedStreamMediaTypeException = error(
  n0,
  _USMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __UnsupportedStreamMediaTypeException
);
export var Unit = "unit" as const;

export var FragmentList = list(n0, _FL, 0, () => Fragment);
export var FragmentNumberList = 64 | 0;

export var Images = list(n0, _I, 0, () => Image);
export var FormatConfig = 128 | 0;

export var GetClip = op(
  n0,
  _GC,
  {
    [_h]: ["POST", "/getClip", 200],
  },
  () => GetClipInput,
  () => GetClipOutput
);
export var GetDASHStreamingSessionURL = op(
  n0,
  _GDASHSSURL,
  {
    [_h]: ["POST", "/getDASHStreamingSessionURL", 200],
  },
  () => GetDASHStreamingSessionURLInput,
  () => GetDASHStreamingSessionURLOutput
);
export var GetHLSStreamingSessionURL = op(
  n0,
  _GHLSSSURL,
  {
    [_h]: ["POST", "/getHLSStreamingSessionURL", 200],
  },
  () => GetHLSStreamingSessionURLInput,
  () => GetHLSStreamingSessionURLOutput
);
export var GetImages = op(
  n0,
  _GI,
  {
    [_h]: ["POST", "/getImages", 200],
  },
  () => GetImagesInput,
  () => GetImagesOutput
);
export var GetMediaForFragmentList = op(
  n0,
  _GMFFL,
  {
    [_h]: ["POST", "/getMediaForFragmentList", 200],
  },
  () => GetMediaForFragmentListInput,
  () => GetMediaForFragmentListOutput
);
export var ListFragments = op(
  n0,
  _LF,
  {
    [_h]: ["POST", "/listFragments", 200],
  },
  () => ListFragmentsInput,
  () => ListFragmentsOutput
);

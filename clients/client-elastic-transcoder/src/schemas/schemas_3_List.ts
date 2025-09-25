// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AA,
  _AAF,
  _ACO,
  _ACSC,
  _AP,
  _APM,
  _AR,
  _Ar,
  _Art,
  _As,
  _Au,
  _BD,
  _BO,
  _BR,
  _C,
  _Ca,
  _CF,
  _CFa,
  _Ch,
  _CJO,
  _CJOr,
  _CJP,
  _CJPr,
  _CJr,
  _CJRr,
  _CJRre,
  _Cl,
  _CO,
  _Co,
  _Con,
  _CPr,
  _CPRre,
  _CPRrea,
  _CS,
  _CSa,
  _D,
  _DAR,
  _DM,
  _DP,
  _Du,
  _E,
  _F,
  _FGOP,
  _FR,
  _FS,
  _FTM,
  _H,
  _h,
  _HA,
  _HCP,
  _HO,
  _hQ,
  _I,
  _IC,
  _IK,
  _In,
  _Inp,
  _Int,
  _Inte,
  _IV,
  _J,
  _JAA,
  _JI,
  _JIo,
  _JO,
  _Jo,
  _JOo,
  _JW,
  _JWo,
  _K,
  _KI,
  _KM,
  _KMD,
  _KSP,
  _L,
  _La,
  _LAU,
  _LJBP,
  _LJBPR,
  _LJBPRi,
  _LJBS,
  _LJBSR,
  _LJBSRi,
  _LPi,
  _LPRis,
  _LPRist,
  _M,
  _Me,
  _MFR,
  _MH,
  _MP,
  _MW,
  _N,
  _NPT,
  _O,
  _OK,
  _OKP,
  _Op,
  _Ou,
  _P,
  _Pa,
  _PI,
  _PIi,
  _Pl,
  _Pla,
  _PP,
  _Pr,
  _PRD,
  _Pre,
  _PT,
  _PW,
  _PWI,
  _PWr,
  _R,
  _Re,
  _RJ,
  _RJR,
  _RJRe,
  _RPe,
  _RPRea,
  _RPRead,
  _S,
  _SD,
  _SDt,
  _SP,
  _SR,
  _ST,
  _St,
  _STM,
  _STMt,
  _T,
  _Ta,
  _TE,
  _Ti,
  _TO,
  _TP,
  _TS,
  _Ty,
  _UM,
  _V,
  _VA,
  _VO,
  _VP,
  _W,
  _War,
  _Wi,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Artwork = struct(n0, _A, 0, [_IK, _MW, _MH, _SP, _PP, _AAF, _E], [0, 0, 0, 0, 0, 0, () => Encryption]);
export var AudioCodecOptions = struct(n0, _ACO, 0, [_P, _BD, _BO, _S], [0, 0, 0, 0]);
export var AudioParameters = struct(
  n0,
  _AP,
  0,
  [_C, _SR, _BR, _Ch, _APM, _CO],
  [0, 0, 0, 0, 0, () => AudioCodecOptions]
);
export var CaptionFormat = struct(n0, _CF, 0, [_F, _Pa, _E], [0, 0, () => Encryption]);
export var Captions = struct(n0, _Ca, 0, [_MP, _CS, _CFa], [0, () => CaptionSources, () => CaptionFormats]);
export var CaptionSource = struct(n0, _CSa, 0, [_K, _L, _TO, _La, _E], [0, 0, 0, 0, () => Encryption]);
export var Clip = struct(n0, _Cl, 0, [_TS], [() => TimeSpan]);
export var CreateJobOutput = struct(
  n0,
  _CJO,
  0,
  [_K, _TP, _TE, _R, _PI, _SD, _W, _AA, _Co, _Ca, _E],
  [
    0,
    0,
    () => Encryption,
    0,
    0,
    0,
    () => JobWatermarks,
    () => JobAlbumArt,
    () => Composition,
    () => Captions,
    () => Encryption,
  ]
);
export var CreateJobPlaylist = struct(
  n0,
  _CJP,
  0,
  [_N, _F, _OK, _HCP, _PRD],
  [0, 0, 64 | 0, () => HlsContentProtection, () => PlayReadyDrm]
);
export var CreateJobRequest = struct(
  n0,
  _CJRr,
  0,
  [_PIi, _In, _Inp, _O, _Ou, _OKP, _Pl, _UM],
  [
    0,
    () => JobInput,
    () => JobInputs,
    () => CreateJobOutput,
    () => CreateJobOutputs,
    0,
    () => CreateJobPlaylists,
    128 | 0,
  ]
);
export var CreateJobResponse = struct(n0, _CJRre, 0, [_J], [() => Job]);
export var CreatePresetRequest = struct(
  n0,
  _CPRre,
  0,
  [_N, _D, _Con, _V, _Au, _T],
  [0, 0, 0, () => VideoParameters, () => AudioParameters, () => Thumbnails]
);
export var CreatePresetResponse = struct(n0, _CPRrea, 0, [_Pr, _War], [() => Preset, 0]);
export var DetectedProperties = struct(n0, _DP, 0, [_Wi, _H, _FR, _FS, _DM], [1, 1, 0, 1, 1]);
export var Encryption = struct(n0, _E, 0, [_M, _K, _KM, _IV], [0, 0, 0, 0]);
export var HlsContentProtection = struct(n0, _HCP, 0, [_Me, _K, _KM, _IV, _LAU, _KSP], [0, 0, 0, 0, 0, 0]);
export var InputCaptions = struct(n0, _IC, 0, [_MP, _CS], [0, () => CaptionSources]);
export var Job = struct(
  n0,
  _J,
  0,
  [_I, _Ar, _PIi, _In, _Inp, _O, _Ou, _OKP, _Pl, _St, _UM, _Ti],
  [
    0,
    0,
    0,
    () => JobInput,
    () => JobInputs,
    () => JobOutput,
    () => JobOutputs,
    0,
    () => Playlists,
    0,
    128 | 0,
    () => Timing,
  ]
);
export var JobAlbumArt = struct(n0, _JAA, 0, [_MP, _A], [0, () => Artworks]);
export var JobInput = struct(
  n0,
  _JI,
  0,
  [_K, _FR, _Re, _AR, _Int, _Con, _E, _TS, _IC, _DP],
  [0, 0, 0, 0, 0, 0, () => Encryption, () => TimeSpan, () => InputCaptions, () => DetectedProperties]
);
export var JobOutput = struct(
  n0,
  _JO,
  0,
  [_I, _K, _TP, _TE, _R, _PI, _SD, _St, _SDt, _Du, _Wi, _H, _FR, _FS, _DM, _W, _AA, _Co, _Ca, _E, _ACSC],
  [
    0,
    0,
    0,
    () => Encryption,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    () => JobWatermarks,
    () => JobAlbumArt,
    () => Composition,
    () => Captions,
    () => Encryption,
    0,
  ]
);
export var JobWatermark = struct(n0, _JW, 0, [_PWI, _IK, _E], [0, 0, () => Encryption]);
export var ListJobsByPipelineRequest = struct(
  n0,
  _LJBPR,
  0,
  [_PIi, _As, _PT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _As,
      },
    ],
    [
      0,
      {
        [_hQ]: _PT,
      },
    ],
  ]
);
export var ListJobsByPipelineResponse = struct(n0, _LJBPRi, 0, [_Jo, _NPT], [() => Jobs, 0]);
export var ListJobsByStatusRequest = struct(
  n0,
  _LJBSR,
  0,
  [_St, _As, _PT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _As,
      },
    ],
    [
      0,
      {
        [_hQ]: _PT,
      },
    ],
  ]
);
export var ListJobsByStatusResponse = struct(n0, _LJBSRi, 0, [_Jo, _NPT], [() => Jobs, 0]);
export var ListPresetsRequest = struct(
  n0,
  _LPRis,
  0,
  [_As, _PT],
  [
    [
      0,
      {
        [_hQ]: _As,
      },
    ],
    [
      0,
      {
        [_hQ]: _PT,
      },
    ],
  ]
);
export var ListPresetsResponse = struct(n0, _LPRist, 0, [_Pre, _NPT], [() => Presets, 0]);
export var Playlist = struct(
  n0,
  _Pla,
  0,
  [_N, _F, _OK, _HCP, _PRD, _St, _SDt],
  [0, 0, 64 | 0, () => HlsContentProtection, () => PlayReadyDrm, 0, 0]
);
export var PlayReadyDrm = struct(n0, _PRD, 0, [_F, _K, _KM, _KI, _IV, _LAU], [0, 0, 0, 0, 0, 0]);
export var Preset = struct(
  n0,
  _Pr,
  0,
  [_I, _Ar, _N, _D, _Con, _Au, _V, _T, _Ty],
  [0, 0, 0, 0, 0, () => AudioParameters, () => VideoParameters, () => Thumbnails, 0]
);
export var PresetWatermark = struct(
  n0,
  _PW,
  0,
  [_I, _MW, _MH, _SP, _HA, _HO, _VA, _VO, _Op, _Ta],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var ReadJobRequest = struct(n0, _RJR, 0, [_I], [[0, 1]]);
export var ReadJobResponse = struct(n0, _RJRe, 0, [_J], [() => Job]);
export var ReadPresetRequest = struct(n0, _RPRea, 0, [_I], [[0, 1]]);
export var ReadPresetResponse = struct(n0, _RPRead, 0, [_Pr], [() => Preset]);
export var Thumbnails = struct(n0, _T, 0, [_F, _Inte, _Re, _AR, _MW, _MH, _SP, _PP], [0, 0, 0, 0, 0, 0, 0, 0]);
export var TimeSpan = struct(n0, _TS, 0, [_ST, _Du], [0, 0]);
export var Timing = struct(n0, _Ti, 0, [_STM, _STMt, _FTM], [1, 1, 1]);
export var VideoParameters = struct(
  n0,
  _VP,
  0,
  [_C, _CO, _KMD, _FGOP, _BR, _FR, _MFR, _Re, _AR, _MW, _MH, _DAR, _SP, _PP, _W],
  [0, 128 | 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => PresetWatermarks]
);
export var Artworks = list(n0, _Art, 0, () => Artwork);
export var CaptionFormats = list(n0, _CFa, 0, () => CaptionFormat);
export var CaptionSources = list(n0, _CS, 0, () => CaptionSource);
export var Composition = list(n0, _Co, 0, () => Clip);
export var CreateJobOutputs = list(n0, _CJOr, 0, () => CreateJobOutput);
export var CreateJobPlaylists = list(n0, _CJPr, 0, () => CreateJobPlaylist);
export var JobInputs = list(n0, _JIo, 0, () => JobInput);
export var JobOutputs = list(n0, _JOo, 0, () => JobOutput);
export var Jobs = list(n0, _Jo, 0, () => Job);
export var JobWatermarks = list(n0, _JWo, 0, () => JobWatermark);
export var OutputKeys = 64 | 0;

export var Playlists = list(n0, _Pl, 0, () => Playlist);
export var Presets = list(n0, _Pre, 0, () => Preset);
export var PresetWatermarks = list(n0, _PWr, 0, () => PresetWatermark);
export var CodecOptions = 128 | 0;

export var UserMetadata = 128 | 0;

export var CreateJob = op(
  n0,
  _CJr,
  {
    [_h]: ["POST", "/2012-09-25/jobs", 201],
  },
  () => CreateJobRequest,
  () => CreateJobResponse
);
export var CreatePreset = op(
  n0,
  _CPr,
  {
    [_h]: ["POST", "/2012-09-25/presets", 201],
  },
  () => CreatePresetRequest,
  () => CreatePresetResponse
);
export var ListJobsByPipeline = op(
  n0,
  _LJBP,
  {
    [_h]: ["GET", "/2012-09-25/jobsByPipeline/{PipelineId}", 200],
  },
  () => ListJobsByPipelineRequest,
  () => ListJobsByPipelineResponse
);
export var ListJobsByStatus = op(
  n0,
  _LJBS,
  {
    [_h]: ["GET", "/2012-09-25/jobsByStatus/{Status}", 200],
  },
  () => ListJobsByStatusRequest,
  () => ListJobsByStatusResponse
);
export var ListPresets = op(
  n0,
  _LPi,
  {
    [_h]: ["GET", "/2012-09-25/presets", 200],
  },
  () => ListPresetsRequest,
  () => ListPresetsResponse
);
export var ReadJob = op(
  n0,
  _RJ,
  {
    [_h]: ["GET", "/2012-09-25/jobs/{Id}", 200],
  },
  () => ReadJobRequest,
  () => ReadJobResponse
);
export var ReadPreset = op(
  n0,
  _RPe,
  {
    [_h]: ["GET", "/2012-09-25/presets/{Id}", 200],
  },
  () => ReadPresetRequest,
  () => ReadPresetResponse
);

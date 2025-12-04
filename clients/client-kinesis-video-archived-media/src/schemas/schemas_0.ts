const _CF = "ContainerFormat";
const _CFS = "ClipFragmentSelector";
const _CLEE = "ClientLimitExceededException";
const _CT = "ContentType";
const _CTR = "ClipTimestampRange";
const _CT_ = "Content-Type";
const _DASHFS = "DASHFragmentSelector";
const _DASHSSURL = "DASHStreamingSessionURL";
const _DASHTR = "DASHTimestampRange";
const _DFN = "DisplayFragmentNumber";
const _DFT = "DisplayFragmentTimestamp";
const _DM = "DiscontinuityMode";
const _E = "Expires";
const _ET = "EndTimestamp";
const _Er = "Error";
const _F = "Fragment";
const _FC = "FormatConfig";
const _FL = "FragmentList";
const _FLIM = "FragmentLengthInMilliseconds";
const _FN = "FragmentNumber";
const _FS = "FragmentSelector";
const _FSIB = "FragmentSizeInBytes";
const _FST = "FragmentSelectorType";
const _Fo = "Format";
const _Fr = "Fragments";
const _GC = "GetClip";
const _GCI = "GetClipInput";
const _GCO = "GetClipOutput";
const _GDASHSSURL = "GetDASHStreamingSessionURL";
const _GDASHSSURLI = "GetDASHStreamingSessionURLInput";
const _GDASHSSURLO = "GetDASHStreamingSessionURLOutput";
const _GHLSSSURL = "GetHLSStreamingSessionURL";
const _GHLSSSURLI = "GetHLSStreamingSessionURLInput";
const _GHLSSSURLO = "GetHLSStreamingSessionURLOutput";
const _GI = "GetImages";
const _GII = "GetImagesInput";
const _GIO = "GetImagesOutput";
const _GMFFL = "GetMediaForFragmentList";
const _GMFFLI = "GetMediaForFragmentListInput";
const _GMFFLO = "GetMediaForFragmentListOutput";
const _HLSFS = "HLSFragmentSelector";
const _HLSSSURL = "HLSStreamingSessionURL";
const _HLSTR = "HLSTimestampRange";
const _HP = "HeightPixels";
const _I = "Images";
const _IAE = "InvalidArgumentException";
const _IC = "ImageContent";
const _ICPDE = "InvalidCodecPrivateDataException";
const _IMFE = "InvalidMediaFrameException";
const _IST = "ImageSelectorType";
const _Im = "Image";
const _LF = "ListFragments";
const _LFI = "ListFragmentsInput";
const _LFO = "ListFragmentsOutput";
const _M = "Message";
const _MCPDE = "MissingCodecPrivateDataException";
const _MMFR = "MaxManifestFragmentResults";
const _MMPFR = "MaxMediaPlaylistFragmentResults";
const _MR = "MaxResults";
const _NAE = "NotAuthorizedException";
const _NDRE = "NoDataRetentionException";
const _NT = "NextToken";
const _P = "Payload";
const _PM = "PlaybackMode";
const _PT = "ProducerTimestamp";
const _RNFE = "ResourceNotFoundException";
const _SARN = "StreamARN";
const _SI = "SamplingInterval";
const _SN = "StreamName";
const _ST = "StartTimestamp";
const _STe = "ServerTimestamp";
const _TR = "TimestampRange";
const _TS = "TimeStamp";
const _USMTE = "UnsupportedStreamMediaTypeException";
const _WP = "WidthPixels";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _s = "streaming";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.kinesisvideoarchivedmedia";
const n0 = "com.amazonaws.kinesisvideoarchivedmedia";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

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
} from "../models/errors";
import { KinesisVideoArchivedMediaServiceException as __KinesisVideoArchivedMediaServiceException } from "../models/KinesisVideoArchivedMediaServiceException";

/* eslint no-var: 0 */

export var Payload: StaticSimpleSchema = [
  0,
  n0,
  _P,
  {
    [_s]: 1,
  },
  42,
];
export var ClientLimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _CLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ClientLimitExceededException, __ClientLimitExceededException);

export var ClipFragmentSelector: StaticStructureSchema = [3, n0, _CFS, 0, [_FST, _TR], [0, () => ClipTimestampRange]];
export var ClipTimestampRange: StaticStructureSchema = [3, n0, _CTR, 0, [_ST, _ET], [4, 4]];
export var DASHFragmentSelector: StaticStructureSchema = [
  3,
  n0,
  _DASHFS,
  0,
  [_FST, _TR],
  [0, () => DASHTimestampRange],
];
export var DASHTimestampRange: StaticStructureSchema = [3, n0, _DASHTR, 0, [_ST, _ET], [4, 4]];
export var Fragment: StaticStructureSchema = [3, n0, _F, 0, [_FN, _FSIB, _PT, _STe, _FLIM], [0, 1, 4, 4, 1]];
export var FragmentSelector: StaticStructureSchema = [3, n0, _FS, 0, [_FST, _TR], [0, () => TimestampRange]];
export var GetClipInput: StaticStructureSchema = [
  3,
  n0,
  _GCI,
  0,
  [_SN, _SARN, _CFS],
  [0, 0, () => ClipFragmentSelector],
];
export var GetClipOutput: StaticStructureSchema = [
  3,
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
  ],
];
export var GetDASHStreamingSessionURLInput: StaticStructureSchema = [
  3,
  n0,
  _GDASHSSURLI,
  0,
  [_SN, _SARN, _PM, _DFT, _DFN, _DASHFS, _E, _MMFR],
  [0, 0, 0, 0, 0, () => DASHFragmentSelector, 1, 1],
];
export var GetDASHStreamingSessionURLOutput: StaticStructureSchema = [3, n0, _GDASHSSURLO, 0, [_DASHSSURL], [0]];
export var GetHLSStreamingSessionURLInput: StaticStructureSchema = [
  3,
  n0,
  _GHLSSSURLI,
  0,
  [_SN, _SARN, _PM, _HLSFS, _CF, _DM, _DFT, _E, _MMPFR],
  [0, 0, 0, () => HLSFragmentSelector, 0, 0, 0, 1, 1],
];
export var GetHLSStreamingSessionURLOutput: StaticStructureSchema = [3, n0, _GHLSSSURLO, 0, [_HLSSSURL], [0]];
export var GetImagesInput: StaticStructureSchema = [
  3,
  n0,
  _GII,
  0,
  [_SN, _SARN, _IST, _ST, _ET, _SI, _Fo, _FC, _WP, _HP, _MR, _NT],
  [0, 0, 0, 4, 4, 1, 0, 128 | 0, 1, 1, 1, 0],
];
export var GetImagesOutput: StaticStructureSchema = [3, n0, _GIO, 0, [_I, _NT], [() => Images, 0]];
export var GetMediaForFragmentListInput: StaticStructureSchema = [3, n0, _GMFFLI, 0, [_SN, _SARN, _Fr], [0, 0, 64 | 0]];
export var GetMediaForFragmentListOutput: StaticStructureSchema = [
  3,
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
  ],
];
export var HLSFragmentSelector: StaticStructureSchema = [3, n0, _HLSFS, 0, [_FST, _TR], [0, () => HLSTimestampRange]];
export var HLSTimestampRange: StaticStructureSchema = [3, n0, _HLSTR, 0, [_ST, _ET], [4, 4]];
export var Image: StaticStructureSchema = [3, n0, _Im, 0, [_TS, _Er, _IC], [4, 0, 0]];
export var InvalidArgumentException: StaticErrorSchema = [
  -3,
  n0,
  _IAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidArgumentException, __InvalidArgumentException);

export var InvalidCodecPrivateDataException: StaticErrorSchema = [
  -3,
  n0,
  _ICPDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidCodecPrivateDataException, __InvalidCodecPrivateDataException);

export var InvalidMediaFrameException: StaticErrorSchema = [
  -3,
  n0,
  _IMFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidMediaFrameException, __InvalidMediaFrameException);

export var ListFragmentsInput: StaticStructureSchema = [
  3,
  n0,
  _LFI,
  0,
  [_SN, _SARN, _MR, _NT, _FS],
  [0, 0, 1, 0, () => FragmentSelector],
];
export var ListFragmentsOutput: StaticStructureSchema = [3, n0, _LFO, 0, [_Fr, _NT], [() => FragmentList, 0]];
export var MissingCodecPrivateDataException: StaticErrorSchema = [
  -3,
  n0,
  _MCPDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(MissingCodecPrivateDataException, __MissingCodecPrivateDataException);

export var NoDataRetentionException: StaticErrorSchema = [
  -3,
  n0,
  _NDRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(NoDataRetentionException, __NoDataRetentionException);

export var NotAuthorizedException: StaticErrorSchema = [
  -3,
  n0,
  _NAE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(NotAuthorizedException, __NotAuthorizedException);

export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var TimestampRange: StaticStructureSchema = [3, n0, _TR, 0, [_ST, _ET], [4, 4]];
export var UnsupportedStreamMediaTypeException: StaticErrorSchema = [
  -3,
  n0,
  _USMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(UnsupportedStreamMediaTypeException, __UnsupportedStreamMediaTypeException);

export var __Unit = "unit" as const;

export var KinesisVideoArchivedMediaServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "KinesisVideoArchivedMediaServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(
  KinesisVideoArchivedMediaServiceException,
  __KinesisVideoArchivedMediaServiceException
);

export var FragmentList: StaticListSchema = [1, n0, _FL, 0, () => Fragment];
export var FragmentNumberList = 64 | 0;

export var Images: StaticListSchema = [1, n0, _I, 0, () => Image];
export var FormatConfig = 128 | 0;

export var GetClip: StaticOperationSchema = [
  9,
  n0,
  _GC,
  {
    [_h]: ["POST", "/getClip", 200],
  },
  () => GetClipInput,
  () => GetClipOutput,
];
export var GetDASHStreamingSessionURL: StaticOperationSchema = [
  9,
  n0,
  _GDASHSSURL,
  {
    [_h]: ["POST", "/getDASHStreamingSessionURL", 200],
  },
  () => GetDASHStreamingSessionURLInput,
  () => GetDASHStreamingSessionURLOutput,
];
export var GetHLSStreamingSessionURL: StaticOperationSchema = [
  9,
  n0,
  _GHLSSSURL,
  {
    [_h]: ["POST", "/getHLSStreamingSessionURL", 200],
  },
  () => GetHLSStreamingSessionURLInput,
  () => GetHLSStreamingSessionURLOutput,
];
export var GetImages: StaticOperationSchema = [
  9,
  n0,
  _GI,
  {
    [_h]: ["POST", "/getImages", 200],
  },
  () => GetImagesInput,
  () => GetImagesOutput,
];
export var GetMediaForFragmentList: StaticOperationSchema = [
  9,
  n0,
  _GMFFL,
  {
    [_h]: ["POST", "/getMediaForFragmentList", 200],
  },
  () => GetMediaForFragmentListInput,
  () => GetMediaForFragmentListOutput,
];
export var ListFragments: StaticOperationSchema = [
  9,
  n0,
  _LF,
  {
    [_h]: ["POST", "/listFragments", 200],
  },
  () => ListFragmentsInput,
  () => ListFragmentsOutput,
];

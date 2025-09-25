// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { VideoTooLargeException as __VideoTooLargeException } from "../models/index";
import {
  _Ar,
  _BF,
  _Bu,
  _C,
  _c,
  _CH,
  _CHS,
  _CI,
  _CRT,
  _CSP,
  _CSPR,
  _CSPRr,
  _CTr,
  _DSP,
  _DSPes,
  _DSPRes,
  _DSPResc,
  _e,
  _FA,
  _Fea,
  _Fi,
  _FMT,
  _FSa,
  _FSS,
  _GL,
  _In,
  _JI,
  _JT,
  _KDS,
  _KKI,
  _KP,
  _KVS,
  _L,
  _Lab,
  _LDS,
  _LUTa,
  _M,
  _MCi,
  _MCP,
  _MPT,
  _MSC,
  _N,
  _NC,
  _O,
  _RA,
  _ROI,
  _SCM,
  _SCMR,
  _SCMRt,
  _SCR,
  _SCRR,
  _SCRRt,
  _SD,
  _Se,
  _SFDR,
  _SFDRt,
  _SFDt,
  _SFh,
  _SFS,
  _SFSR,
  _SFSRt,
  _SLD,
  _SLDR,
  _SLDRt,
  _SM,
  _SNSTA,
  _SPAt,
  _SPI,
  _SPNC,
  _SPO,
  _SPS,
  _SPT,
  _SPTR,
  _SPTRt,
  _SSD,
  _SSDF,
  _SSDFt,
  _SSDR,
  _SSDRt,
  _St,
  _STCDF,
  _STD,
  _STDF,
  _STDR,
  _STDRt,
  _STe,
  _Ta,
  _TCF,
  _Vi,
  _VTLE,
  _WF,
  n0,
  Video,
} from "./schemas_0";
import { DetectionFilter, RegionsOfInterest, StreamProcessorDataSharingPreference } from "./schemas_17_StreamProcessor";
import { GeneralLabelsSettings } from "./schemas_25_Label";

/* eslint no-var: 0 */

export var BlackFrame = struct(n0, _BF, 0, [_MPT, _MCP], [1, 1]);
export var ConnectedHomeSettings = struct(n0, _CHS, 0, [_Lab, _MCi], [64 | 0, 1]);
export var CreateStreamProcessorRequest = struct(
  n0,
  _CSPR,
  0,
  [_In, _O, _N, _Se, _RA, _Ta, _NC, _KKI, _ROI, _DSP],
  [
    () => StreamProcessorInput,
    () => StreamProcessorOutput,
    0,
    () => StreamProcessorSettings,
    0,
    128 | 0,
    () => StreamProcessorNotificationChannel,
    0,
    () => RegionsOfInterest,
    () => StreamProcessorDataSharingPreference,
  ]
);
export var CreateStreamProcessorResponse = struct(n0, _CSPRr, 0, [_SPAt], [0]);
export var DescribeStreamProcessorRequest = struct(n0, _DSPRes, 0, [_N], [0]);
export var DescribeStreamProcessorResponse = struct(
  n0,
  _DSPResc,
  0,
  [_N, _SPAt, _St, _SM, _CTr, _LUTa, _In, _O, _RA, _Se, _NC, _KKI, _ROI, _DSP],
  [
    0,
    0,
    0,
    0,
    4,
    4,
    () => StreamProcessorInput,
    () => StreamProcessorOutput,
    0,
    () => StreamProcessorSettings,
    () => StreamProcessorNotificationChannel,
    0,
    () => RegionsOfInterest,
    () => StreamProcessorDataSharingPreference,
  ]
);
export var FaceSearchSettings = struct(n0, _FSS, 0, [_CI, _FMT], [0, 1]);
export var KinesisDataStream = struct(n0, _KDS, 0, [_Ar], [0]);
export var KinesisVideoStream = struct(n0, _KVS, 0, [_Ar], [0]);
export var LabelDetectionSettings = struct(n0, _LDS, 0, [_GL], [() => GeneralLabelsSettings]);
export var NotificationChannel = struct(n0, _NC, 0, [_SNSTA, _RA], [0, 0]);
export var S3Destination = struct(n0, _SD, 0, [_Bu, _KP], [0, 0]);
export var StartCelebrityRecognitionRequest = struct(
  n0,
  _SCRR,
  0,
  [_Vi, _CRT, _NC, _JT],
  [() => Video, 0, () => NotificationChannel, 0]
);
export var StartCelebrityRecognitionResponse = struct(n0, _SCRRt, 0, [_JI], [0]);
export var StartContentModerationRequest = struct(
  n0,
  _SCMR,
  0,
  [_Vi, _MCi, _CRT, _NC, _JT],
  [() => Video, 1, 0, () => NotificationChannel, 0]
);
export var StartContentModerationResponse = struct(n0, _SCMRt, 0, [_JI], [0]);
export var StartFaceDetectionRequest = struct(
  n0,
  _SFDR,
  0,
  [_Vi, _CRT, _NC, _FA, _JT],
  [() => Video, 0, () => NotificationChannel, 0, 0]
);
export var StartFaceDetectionResponse = struct(n0, _SFDRt, 0, [_JI], [0]);
export var StartFaceSearchRequest = struct(
  n0,
  _SFSR,
  0,
  [_Vi, _CRT, _FMT, _CI, _NC, _JT],
  [() => Video, 0, 1, 0, () => NotificationChannel, 0]
);
export var StartFaceSearchResponse = struct(n0, _SFSRt, 0, [_JI], [0]);
export var StartLabelDetectionRequest = struct(
  n0,
  _SLDR,
  0,
  [_Vi, _CRT, _MCi, _NC, _JT, _Fea, _Se],
  [() => Video, 0, 1, () => NotificationChannel, 0, 64 | 0, () => LabelDetectionSettings]
);
export var StartLabelDetectionResponse = struct(n0, _SLDRt, 0, [_JI], [0]);
export var StartPersonTrackingRequest = struct(
  n0,
  _SPTR,
  0,
  [_Vi, _CRT, _NC, _JT],
  [() => Video, 0, () => NotificationChannel, 0]
);
export var StartPersonTrackingResponse = struct(n0, _SPTRt, 0, [_JI], [0]);
export var StartSegmentDetectionFilters = struct(
  n0,
  _SSDF,
  0,
  [_TCF, _SFh],
  [() => StartTechnicalCueDetectionFilter, () => StartShotDetectionFilter]
);
export var StartSegmentDetectionRequest = struct(
  n0,
  _SSDR,
  0,
  [_Vi, _CRT, _NC, _JT, _Fi, _STe],
  [() => Video, 0, () => NotificationChannel, 0, () => StartSegmentDetectionFilters, 64 | 0]
);
export var StartSegmentDetectionResponse = struct(n0, _SSDRt, 0, [_JI], [0]);
export var StartShotDetectionFilter = struct(n0, _SSDFt, 0, [_MSC], [1]);
export var StartTechnicalCueDetectionFilter = struct(n0, _STCDF, 0, [_MSC, _BF], [1, () => BlackFrame]);
export var StartTextDetectionFilters = struct(
  n0,
  _STDF,
  0,
  [_WF, _ROI],
  [() => DetectionFilter, () => RegionsOfInterest]
);
export var StartTextDetectionRequest = struct(
  n0,
  _STDR,
  0,
  [_Vi, _CRT, _NC, _JT, _Fi],
  [() => Video, 0, () => NotificationChannel, 0, () => StartTextDetectionFilters]
);
export var StartTextDetectionResponse = struct(n0, _STDRt, 0, [_JI], [0]);
export var StreamProcessorInput = struct(n0, _SPI, 0, [_KVS], [() => KinesisVideoStream]);
export var StreamProcessorNotificationChannel = struct(n0, _SPNC, 0, [_SNSTA], [0]);
export var StreamProcessorOutput = struct(n0, _SPO, 0, [_KDS, _SD], [() => KinesisDataStream, () => S3Destination]);
export var StreamProcessorSettings = struct(
  n0,
  _SPS,
  0,
  [_FSa, _CH],
  [() => FaceSearchSettings, () => ConnectedHomeSettings]
);
export var VideoTooLargeException = error(
  n0,
  _VTLE,
  {
    [_e]: _c,
  },
  [_M, _C, _L],
  [0, 0, 0],

  __VideoTooLargeException
);
export var LabelDetectionFeatureList = 64 | 0;

export var SegmentTypes = 64 | 0;

export var CreateStreamProcessor = op(
  n0,
  _CSP,
  0,
  () => CreateStreamProcessorRequest,
  () => CreateStreamProcessorResponse
);
export var DescribeStreamProcessor = op(
  n0,
  _DSPes,
  0,
  () => DescribeStreamProcessorRequest,
  () => DescribeStreamProcessorResponse
);
export var StartCelebrityRecognition = op(
  n0,
  _SCR,
  2,
  () => StartCelebrityRecognitionRequest,
  () => StartCelebrityRecognitionResponse
);
export var StartContentModeration = op(
  n0,
  _SCM,
  2,
  () => StartContentModerationRequest,
  () => StartContentModerationResponse
);
export var StartFaceDetection = op(
  n0,
  _SFDt,
  2,
  () => StartFaceDetectionRequest,
  () => StartFaceDetectionResponse
);
export var StartFaceSearch = op(
  n0,
  _SFS,
  2,
  () => StartFaceSearchRequest,
  () => StartFaceSearchResponse
);
export var StartLabelDetection = op(
  n0,
  _SLD,
  2,
  () => StartLabelDetectionRequest,
  () => StartLabelDetectionResponse
);
export var StartPersonTracking = op(
  n0,
  _SPT,
  2,
  () => StartPersonTrackingRequest,
  () => StartPersonTrackingResponse
);
export var StartSegmentDetection = op(
  n0,
  _SSD,
  2,
  () => StartSegmentDetectionRequest,
  () => StartSegmentDetectionResponse
);
export var StartTextDetection = op(
  n0,
  _STD,
  2,
  () => StartTextDetectionRequest,
  () => StartTextDetectionResponse
);

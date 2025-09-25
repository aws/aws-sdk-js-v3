// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _AB,
  _ABd,
  _ABM,
  _ABML,
  _ADS,
  _AE,
  _AMl,
  _AMT,
  _AMu,
  _AN,
  _Ar,
  _AST,
  _Au,
  _Aud,
  _CCR,
  _CCr,
  _CCRr,
  _Ch,
  _CN,
  _CP,
  _CPR,
  _CPRr,
  _CR,
  _CS,
  _CT,
  _DCes,
  _DCRes,
  _DCResc,
  _DM,
  _dM,
  _DMu,
  _DPe,
  _DPRes,
  _DPResc,
  _DPS,
  _EOM,
  _FS,
  _GCS,
  _GCSR,
  _GCSRe,
  _h,
  _HPS,
  _hQ,
  _I,
  _jN,
  _K,
  _KVP,
  _LC,
  _LCFC,
  _LCi,
  _LCR,
  _LCRi,
  _LMT,
  _lOAB,
  _lOAM,
  _lOAMi,
  _lOC,
  _lOSAB,
  _lOSE,
  _LSN,
  _LT,
  _MBTS,
  _MN,
  _MR,
  _mR,
  _MT,
  _MTDS,
  _MUPS,
  _MWS,
  _NT,
  _nT,
  _OM,
  _Ou,
  _PM,
  _PN,
  _PU,
  _RO,
  _ROe,
  _ROI,
  _ROIe,
  _RP,
  _RPe,
  _S,
  _SAB,
  _SABc,
  _SC,
  _SD,
  _SDe,
  _SDL,
  _SE,
  _SEe,
  _SEI,
  _SEIp,
  _SET,
  _SG,
  _SIM,
  _SLN,
  _SN,
  _SOM,
  _SPDS,
  _SS,
  _SSE,
  _SSN,
  _SST,
  _SSTM,
  _STI,
  _SUe,
  _SUT,
  _T,
  _t,
  _Ti,
  _Tr,
  _TSC,
  _TSM,
  _Ty,
  _UC,
  _UCR,
  _UCRp,
  _UP,
  _UPI,
  _UPR,
  _UPRp,
  _UPSC,
  _UPT,
  _V,
  _VSN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdBreak = struct(
  n0,
  _AB,
  0,
  [_MT, _OM, _S, _SIM, _TSM, _ABM],
  [0, 1, () => SlateSource, () => SpliceInsertMessage, () => TimeSignalMessage, () => AdBreakMetadataList]
);
export var AlternateMedia = struct(
  n0,
  _AMl,
  0,
  [_SLN, _LSN, _VSN, _CR, _SSTM, _ABd, _DM],
  [0, 0, 0, () => ClipRange, 1, () => __listOfAdBreak, 1]
);
export var AudienceMedia = struct(n0, _AMu, 0, [_Au, _AMl], [0, () => __listOfAlternateMedia]);
export var Channel = struct(
  n0,
  _Ch,
  0,
  [_Ar, _CN, _CS, _CT, _FS, _LMT, _Ou, _PM, _T, _Ti, _LC, _Aud],
  [
    0,
    0,
    0,
    7,
    () => SlateSource,
    7,
    () => ResponseOutputs,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
    () => LogConfigurationForChannel,
    64 | 0,
  ]
);
export var ClipRange = struct(n0, _CR, 0, [_EOM, _SOM], [1, 1]);
export var CreateChannelRequest = struct(
  n0,
  _CCR,
  0,
  [_CN, _FS, _Ou, _PM, _T, _Ti, _TSC, _Aud],
  [
    [0, 1],
    () => SlateSource,
    () => RequestOutputs,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
    () => TimeShiftConfiguration,
    64 | 0,
  ]
);
export var CreateChannelResponse = struct(
  n0,
  _CCRr,
  0,
  [_Ar, _CN, _CS, _CT, _FS, _LMT, _Ou, _PM, _T, _Ti, _TSC, _Aud],
  [
    0,
    0,
    0,
    7,
    () => SlateSource,
    7,
    () => ResponseOutputs,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
    () => TimeShiftConfiguration,
    64 | 0,
  ]
);
export var CreateProgramRequest = struct(
  n0,
  _CPR,
  0,
  [_ABd, _CN, _LSN, _PN, _SC, _SLN, _VSN, _AMu],
  [() => __listOfAdBreak, [0, 1], 0, [0, 1], () => ScheduleConfiguration, 0, 0, () => __listOfAudienceMedia]
);
export var CreateProgramResponse = struct(
  n0,
  _CPRr,
  0,
  [_ABd, _Ar, _CN, _CT, _LSN, _PN, _SST, _SLN, _VSN, _CR, _DM, _AMu],
  [() => __listOfAdBreak, 0, 0, 7, 0, 0, 7, 0, 0, () => ClipRange, 1, () => __listOfAudienceMedia]
);
export var DashPlaylistSettings = struct(n0, _DPS, 0, [_MWS, _MBTS, _MUPS, _SPDS], [1, 1, 1, 1]);
export var DescribeChannelRequest = struct(n0, _DCRes, 0, [_CN], [[0, 1]]);
export var DescribeChannelResponse = struct(
  n0,
  _DCResc,
  0,
  [_Ar, _CN, _CS, _CT, _FS, _LMT, _Ou, _PM, _T, _Ti, _LC, _TSC, _Aud],
  [
    0,
    0,
    0,
    7,
    () => SlateSource,
    7,
    () => ResponseOutputs,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
    () => LogConfigurationForChannel,
    () => TimeShiftConfiguration,
    64 | 0,
  ]
);
export var DescribeProgramRequest = struct(
  n0,
  _DPRes,
  0,
  [_CN, _PN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeProgramResponse = struct(
  n0,
  _DPResc,
  0,
  [_ABd, _Ar, _CN, _CT, _LSN, _PN, _SST, _SLN, _VSN, _CR, _DM, _AMu],
  [() => __listOfAdBreak, 0, 0, 7, 0, 0, 7, 0, 0, () => ClipRange, 1, () => __listOfAudienceMedia]
);
export var GetChannelScheduleRequest = struct(
  n0,
  _GCSR,
  0,
  [_CN, _DMu, _MR, _NT, _Au],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dM,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
  ]
);
export var GetChannelScheduleResponse = struct(n0, _GCSRe, 0, [_I, _NT], [() => __listOfScheduleEntry, 0]);
export var HlsPlaylistSettings = struct(n0, _HPS, 0, [_MWS, _AMT], [1, 64 | 0]);
export var KeyValuePair = struct(n0, _KVP, 0, [_K, _V], [0, 0]);
export var ListChannelsRequest = struct(
  n0,
  _LCR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListChannelsResponse = struct(n0, _LCRi, 0, [_I, _NT], [[() => __listOfChannel, 0], 0]);
export var LogConfigurationForChannel = struct(n0, _LCFC, 0, [_LT], [64 | 0]);
export var RequestOutputItem = struct(
  n0,
  _ROI,
  0,
  [_DPS, _HPS, _MN, _SG],
  [() => DashPlaylistSettings, () => HlsPlaylistSettings, 0, 0]
);
export var ResponseOutputItem = struct(
  n0,
  _ROIe,
  0,
  [_DPS, _HPS, _MN, _PU, _SG],
  [() => DashPlaylistSettings, () => HlsPlaylistSettings, 0, 0, 0]
);
export var ScheduleAdBreak = struct(n0, _SAB, 0, [_ADS, _AST, _SLN, _VSN], [1, 7, 0, 0]);
export var ScheduleConfiguration = struct(n0, _SC, 0, [_Tr, _CR], [() => Transition, () => ClipRange]);
export var ScheduleEntry = struct(
  n0,
  _SE,
  0,
  [_ADS, _AST, _Ar, _CN, _LSN, _PN, _SABc, _SET, _SLN, _VSN, _Aud],
  [1, 7, 0, 0, 0, 0, () => __listOfScheduleAdBreak, 0, 0, 0, 64 | 0]
);
export var SegmentationDescriptor = struct(
  n0,
  _SD,
  0,
  [_SEI, _SUT, _SUe, _STI, _SN, _SEe, _SSN, _SSE],
  [1, 1, 0, 1, 1, 1, 1, 1]
);
export var SlateSource = struct(n0, _SS, 0, [_SLN, _VSN], [0, 0]);
export var SpliceInsertMessage = struct(n0, _SIM, 0, [_AN, _AE, _SEIp, _UPI], [1, 1, 1, 1]);
export var TimeShiftConfiguration = struct(n0, _TSC, 0, [_MTDS], [1]);
export var TimeSignalMessage = struct(n0, _TSM, 0, [_SDe], [() => SegmentationDescriptorList]);
export var Transition = struct(n0, _Tr, 0, [_DM, _RP, _RPe, _SSTM, _Ty], [1, 0, 0, 1, 0]);
export var UpdateChannelRequest = struct(
  n0,
  _UCR,
  0,
  [_CN, _FS, _Ou, _TSC, _Aud],
  [[0, 1], () => SlateSource, () => RequestOutputs, () => TimeShiftConfiguration, 64 | 0]
);
export var UpdateChannelResponse = struct(
  n0,
  _UCRp,
  0,
  [_Ar, _CN, _CS, _CT, _FS, _LMT, _Ou, _PM, _T, _Ti, _TSC, _Aud],
  [
    0,
    0,
    0,
    7,
    () => SlateSource,
    7,
    () => ResponseOutputs,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
    () => TimeShiftConfiguration,
    64 | 0,
  ]
);
export var UpdateProgramRequest = struct(
  n0,
  _UPR,
  0,
  [_ABd, _CN, _PN, _SC, _AMu],
  [() => __listOfAdBreak, [0, 1], [0, 1], () => UpdateProgramScheduleConfiguration, () => __listOfAudienceMedia]
);
export var UpdateProgramResponse = struct(
  n0,
  _UPRp,
  0,
  [_ABd, _Ar, _CN, _CT, _PN, _SLN, _VSN, _LSN, _CR, _DM, _SST, _AMu],
  [() => __listOfAdBreak, 0, 0, 7, 0, 0, 0, 0, () => ClipRange, 1, 7, () => __listOfAudienceMedia]
);
export var UpdateProgramScheduleConfiguration = struct(
  n0,
  _UPSC,
  0,
  [_Tr, _CR],
  [() => UpdateProgramTransition, () => ClipRange]
);
export var UpdateProgramTransition = struct(n0, _UPT, 0, [_SSTM, _DM], [1, 1]);
export var __listOfAdBreak = list(n0, _lOAB, 0, () => AdBreak);
export var __listOfAlternateMedia = list(n0, _lOAM, 0, () => AlternateMedia);
export var __listOfAudienceMedia = list(n0, _lOAMi, 0, () => AudienceMedia);
export var __listOfChannel = list(n0, _lOC, 0, [() => Channel, 0]);
export var __listOfScheduleAdBreak = list(n0, _lOSAB, 0, () => ScheduleAdBreak);
export var __listOfScheduleEntry = list(n0, _lOSE, 0, () => ScheduleEntry);
export var AdBreakMetadataList = list(n0, _ABML, 0, () => KeyValuePair);
export var adMarkupTypes = 64 | 0;

export var Audiences = 64 | 0;

export var RequestOutputs = list(n0, _RO, 0, () => RequestOutputItem);
export var ResponseOutputs = list(n0, _ROe, 0, () => ResponseOutputItem);
export var SegmentationDescriptorList = list(n0, _SDL, 0, () => SegmentationDescriptor);
export var CreateChannel = op(
  n0,
  _CCr,
  {
    [_h]: ["POST", "/channel/{ChannelName}", 200],
  },
  () => CreateChannelRequest,
  () => CreateChannelResponse
);
export var CreateProgram = op(
  n0,
  _CP,
  {
    [_h]: ["POST", "/channel/{ChannelName}/program/{ProgramName}", 200],
  },
  () => CreateProgramRequest,
  () => CreateProgramResponse
);
export var DescribeChannel = op(
  n0,
  _DCes,
  {
    [_h]: ["GET", "/channel/{ChannelName}", 200],
  },
  () => DescribeChannelRequest,
  () => DescribeChannelResponse
);
export var DescribeProgram = op(
  n0,
  _DPe,
  {
    [_h]: ["GET", "/channel/{ChannelName}/program/{ProgramName}", 200],
  },
  () => DescribeProgramRequest,
  () => DescribeProgramResponse
);
export var GetChannelSchedule = op(
  n0,
  _GCS,
  {
    [_h]: ["GET", "/channel/{ChannelName}/schedule", 200],
  },
  () => GetChannelScheduleRequest,
  () => GetChannelScheduleResponse
);
export var ListChannels = op(
  n0,
  _LCi,
  {
    [_h]: ["GET", "/channels", 200],
  },
  () => ListChannelsRequest,
  () => ListChannelsResponse
);
export var UpdateChannel = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/channel/{ChannelName}", 200],
  },
  () => UpdateChannelRequest,
  () => UpdateChannelResponse
);
export var UpdateProgram = op(
  n0,
  _UP,
  {
    [_h]: ["PUT", "/channel/{ChannelName}/program/{ProgramName}", 200],
  },
  () => UpdateProgramRequest,
  () => UpdateProgramResponse
);

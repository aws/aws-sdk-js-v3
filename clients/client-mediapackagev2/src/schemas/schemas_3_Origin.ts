// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AMD,
  _AMH,
  _BU,
  _C,
  _CA,
  _CC,
  _CCR,
  _CCRr,
  _CDM,
  _CDMC,
  _CEM,
  _CESDM,
  _CGN,
  _CHM,
  _CHMC,
  _CIV,
  _CLLHM,
  _CLLHMC,
  _CMM,
  _CMMC,
  _CMN,
  _CN,
  _Co,
  _COE,
  _COER,
  _COERr,
  _CST,
  _CT,
  _CTo,
  _D,
  _DBU,
  _DBUa,
  _DDEM,
  _DDFD,
  _DDMR,
  _DDS,
  _DM,
  _DP,
  _DPI,
  _DS,
  _DSC,
  _DSr,
  _DSv,
  _DTC,
  _DUT,
  _DW,
  _E,
  _ECC,
  _EMn,
  _EMr,
  _En,
  _ET,
  _FC,
  _FD,
  _FEEC,
  _FF,
  _GC,
  _GCR,
  _GCRe,
  _GDM,
  _GDMC,
  _GHM,
  _GHMC,
  _GLLHM,
  _GLLHMC,
  _GMM,
  _GMMC,
  _GOE,
  _GOER,
  _GOERe,
  _h,
  _hH,
  _HMl,
  _I,
  _IE,
  _IEL,
  _IEM,
  _IEn,
  _IIOS,
  _ISC,
  _IT,
  _iT,
  _jN,
  _KRIS,
  _LC,
  _LLHM,
  _MA,
  _MBTS,
  _MF,
  _MIU,
  _ML,
  _MM,
  _MN,
  _MQCSIS,
  _MT,
  _MUPS,
  _MWS,
  _OEN,
  _OHC,
  _P,
  _PDTIS,
  _PI,
  _PIr,
  _PMQCS,
  _Pr,
  _Pre,
  _PSA,
  _PSV,
  _PT,
  _RA,
  _RAo,
  _RI,
  _RU,
  _SC,
  _Sc,
  _SD,
  _SDS,
  _Se,
  _SF,
  _SH,
  _SKP,
  _SL,
  _SN,
  _So,
  _SPDS,
  _ST,
  _St,
  _STF,
  _SWS,
  _T,
  _t,
  _TC,
  _TDS,
  _TEM,
  _Ti,
  _TIDS,
  _TM,
  _TO,
  _TP,
  _TS,
  _TUARG,
  _U,
  _UC,
  _UCR,
  _UCRp,
  _UECM,
  _UOE,
  _UOER,
  _UOERp,
  _UT,
  _xact,
  _xauim,
  n0,
} from "./schemas_0";
import { ForceEndpointErrorConfiguration } from "./schemas_5_Origin";

/* eslint no-var: 0 */

export var CreateChannelRequest = struct(
  n0,
  _CCR,
  0,
  [_CGN, _CN, _CT, _IT, _D, _ISC, _OHC, _T],
  [
    [0, 1],
    0,
    [
      0,
      {
        [_hH]: _xact,
        [_iT]: 1,
      },
    ],
    0,
    0,
    () => InputSwitchConfiguration,
    () => OutputHeaderConfiguration,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateChannelResponse = struct(
  n0,
  _CCRr,
  0,
  [_A, _CN, _CGN, _CA, _MA, _D, _IE, _IT, _ET, _T, _ISC, _OHC],
  [
    0,
    0,
    0,
    4,
    4,
    0,
    () => IngestEndpointList,
    0,
    0,
    128 | 0,
    () => InputSwitchConfiguration,
    () => OutputHeaderConfiguration,
  ]
);
export var CreateDashManifestConfiguration = struct(
  n0,
  _CDMC,
  0,
  [_MN, _MWS, _FC, _MUPS, _MBTS, _SPDS, _STF, _PT, _SD, _DS, _UT, _P, _BU, _PI, _DSv, _C, _SC],
  [
    0,
    1,
    () => FilterConfiguration,
    1,
    1,
    1,
    0,
    64 | 0,
    () => ScteDash,
    0,
    () => DashUtcTiming,
    64 | 0,
    () => DashBaseUrls,
    () => DashProgramInformation,
    () => DashDvbSettings,
    0,
    () => DashSubtitleConfiguration,
  ]
);
export var CreateHlsManifestConfiguration = struct(
  n0,
  _CHMC,
  0,
  [_MN, _CMN, _SH, _ST, _MWS, _PDTIS, _FC, _UECM],
  [0, 0, () => ScteHls, () => StartTag, 1, 1, () => FilterConfiguration, 2]
);
export var CreateLowLatencyHlsManifestConfiguration = struct(
  n0,
  _CLLHMC,
  0,
  [_MN, _CMN, _SH, _ST, _MWS, _PDTIS, _FC, _UECM],
  [0, 0, () => ScteHls, () => StartTag, 1, 1, () => FilterConfiguration, 2]
);
export var CreateMssManifestConfiguration = struct(
  n0,
  _CMMC,
  0,
  [_MN, _MWS, _FC, _ML],
  [0, 1, () => FilterConfiguration, 0]
);
export var CreateOriginEndpointRequest = struct(
  n0,
  _COER,
  0,
  [_CGN, _CN, _OEN, _CTo, _Se, _CT, _D, _SWS, _HMl, _LLHM, _DM, _MM, _FEEC, _T],
  [
    [0, 1],
    [0, 1],
    0,
    0,
    () => Segment,
    [
      0,
      {
        [_hH]: _xact,
        [_iT]: 1,
      },
    ],
    0,
    1,
    () => CreateHlsManifests,
    () => CreateLowLatencyHlsManifests,
    () => CreateDashManifests,
    () => CreateMssManifests,
    () => ForceEndpointErrorConfiguration,
    128 | 0,
  ]
);
export var CreateOriginEndpointResponse = struct(
  n0,
  _COERr,
  0,
  [_A, _CGN, _CN, _OEN, _CTo, _Se, _CA, _MA, _D, _SWS, _HMl, _LLHM, _DM, _MM, _FEEC, _ET, _T],
  [
    0,
    0,
    0,
    0,
    0,
    () => Segment,
    4,
    4,
    0,
    1,
    () => GetHlsManifests,
    () => GetLowLatencyHlsManifests,
    () => GetDashManifests,
    () => GetMssManifests,
    () => ForceEndpointErrorConfiguration,
    0,
    128 | 0,
  ]
);
export var DashBaseUrl = struct(n0, _DBU, 0, [_U, _SL, _DP, _DW], [0, 0, 1, 1]);
export var DashDvbFontDownload = struct(n0, _DDFD, 0, [_U, _MT, _FF], [0, 0, 0]);
export var DashDvbMetricsReporting = struct(n0, _DDMR, 0, [_RU, _Pr], [0, 1]);
export var DashDvbSettings = struct(n0, _DDS, 0, [_FD, _EMr], [() => DashDvbFontDownload, () => DashDvbErrorMetrics]);
export var DashProgramInformation = struct(n0, _DPI, 0, [_Ti, _So, _Co, _LC, _MIU], [0, 0, 0, 0, 0]);
export var DashSubtitleConfiguration = struct(n0, _DSC, 0, [_TC], [() => DashTtmlConfiguration]);
export var DashTtmlConfiguration = struct(n0, _DTC, 0, [_TP], [0]);
export var DashUtcTiming = struct(n0, _DUT, 0, [_TM, _TS], [0, 0]);
export var Encryption = struct(
  n0,
  _E,
  0,
  [_CIV, _EMn, _KRIS, _CESDM, _SKP],
  [0, () => EncryptionMethod, 1, 2, () => SpekeKeyProvider]
);
export var EncryptionContractConfiguration = struct(n0, _ECC, 0, [_PSA, _PSV], [0, 0]);
export var EncryptionMethod = struct(n0, _EMn, 0, [_TEM, _CEM, _IEM], [0, 0, 0]);
export var FilterConfiguration = struct(n0, _FC, 0, [_MF, _St, _En, _TDS, _CST], [0, 4, 4, 1, 4]);
export var GetChannelRequest = struct(
  n0,
  _GCR,
  0,
  [_CGN, _CN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetChannelResponse = struct(
  n0,
  _GCRe,
  0,
  [_A, _CN, _CGN, _CA, _MA, _RA, _D, _IE, _IT, _ET, _T, _ISC, _OHC],
  [
    0,
    0,
    0,
    4,
    4,
    4,
    0,
    () => IngestEndpointList,
    0,
    0,
    128 | 0,
    () => InputSwitchConfiguration,
    () => OutputHeaderConfiguration,
  ]
);
export var GetDashManifestConfiguration = struct(
  n0,
  _GDMC,
  0,
  [_MN, _U, _MWS, _FC, _MUPS, _MBTS, _SPDS, _STF, _PT, _SD, _DS, _UT, _P, _BU, _PI, _DSv, _C, _SC],
  [
    0,
    0,
    1,
    () => FilterConfiguration,
    1,
    1,
    1,
    0,
    64 | 0,
    () => ScteDash,
    0,
    () => DashUtcTiming,
    64 | 0,
    () => DashBaseUrls,
    () => DashProgramInformation,
    () => DashDvbSettings,
    0,
    () => DashSubtitleConfiguration,
  ]
);
export var GetHlsManifestConfiguration = struct(
  n0,
  _GHMC,
  0,
  [_MN, _U, _CMN, _MWS, _PDTIS, _SH, _FC, _ST, _UECM],
  [0, 0, 0, 1, 1, () => ScteHls, () => FilterConfiguration, () => StartTag, 2]
);
export var GetLowLatencyHlsManifestConfiguration = struct(
  n0,
  _GLLHMC,
  0,
  [_MN, _U, _CMN, _MWS, _PDTIS, _SH, _FC, _ST, _UECM],
  [0, 0, 0, 1, 1, () => ScteHls, () => FilterConfiguration, () => StartTag, 2]
);
export var GetMssManifestConfiguration = struct(
  n0,
  _GMMC,
  0,
  [_MN, _U, _FC, _MWS, _ML],
  [0, 0, () => FilterConfiguration, 1, 0]
);
export var GetOriginEndpointRequest = struct(
  n0,
  _GOER,
  0,
  [_CGN, _CN, _OEN],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetOriginEndpointResponse = struct(
  n0,
  _GOERe,
  0,
  [_A, _CGN, _CN, _OEN, _CTo, _Se, _CA, _MA, _RA, _D, _SWS, _HMl, _LLHM, _DM, _MM, _FEEC, _ET, _T],
  [
    0,
    0,
    0,
    0,
    0,
    () => Segment,
    4,
    4,
    4,
    0,
    1,
    () => GetHlsManifests,
    () => GetLowLatencyHlsManifests,
    () => GetDashManifests,
    () => GetMssManifests,
    () => ForceEndpointErrorConfiguration,
    0,
    128 | 0,
  ]
);
export var IngestEndpoint = struct(n0, _IEn, 0, [_I, _U], [0, 0]);
export var InputSwitchConfiguration = struct(n0, _ISC, 0, [_MQCSIS, _PIr], [2, 1]);
export var OutputHeaderConfiguration = struct(n0, _OHC, 0, [_PMQCS], [2]);
export var Scte = struct(n0, _Sc, 0, [_SF], [64 | 0]);
export var ScteDash = struct(n0, _SD, 0, [_AMD], [0]);
export var ScteHls = struct(n0, _SH, 0, [_AMH], [0]);
export var Segment = struct(
  n0,
  _Se,
  0,
  [_SDS, _SN, _TUARG, _IIOS, _TIDS, _Sc, _E],
  [1, 0, 2, 2, 2, () => Scte, () => Encryption]
);
export var SpekeKeyProvider = struct(
  n0,
  _SKP,
  0,
  [_ECC, _RI, _DSr, _RAo, _U],
  [() => EncryptionContractConfiguration, 0, 64 | 0, 0, 0]
);
export var StartTag = struct(n0, _ST, 0, [_TO, _Pre], [1, 2]);
export var UpdateChannelRequest = struct(
  n0,
  _UCR,
  0,
  [_CGN, _CN, _ET, _D, _ISC, _OHC],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xauim,
      },
    ],
    0,
    () => InputSwitchConfiguration,
    () => OutputHeaderConfiguration,
  ]
);
export var UpdateChannelResponse = struct(
  n0,
  _UCRp,
  0,
  [_A, _CN, _CGN, _CA, _MA, _D, _IE, _IT, _ET, _T, _ISC, _OHC],
  [
    0,
    0,
    0,
    4,
    4,
    0,
    () => IngestEndpointList,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    () => InputSwitchConfiguration,
    () => OutputHeaderConfiguration,
  ]
);
export var UpdateOriginEndpointRequest = struct(
  n0,
  _UOER,
  0,
  [_CGN, _CN, _OEN, _CTo, _Se, _D, _SWS, _HMl, _LLHM, _DM, _MM, _FEEC, _ET],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    0,
    () => Segment,
    0,
    1,
    () => CreateHlsManifests,
    () => CreateLowLatencyHlsManifests,
    () => CreateDashManifests,
    () => CreateMssManifests,
    () => ForceEndpointErrorConfiguration,
    [
      0,
      {
        [_hH]: _xauim,
      },
    ],
  ]
);
export var UpdateOriginEndpointResponse = struct(
  n0,
  _UOERp,
  0,
  [_A, _CGN, _CN, _OEN, _CTo, _Se, _CA, _MA, _D, _SWS, _HMl, _LLHM, _MM, _FEEC, _ET, _T, _DM],
  [
    0,
    0,
    0,
    0,
    0,
    () => Segment,
    4,
    4,
    0,
    1,
    () => GetHlsManifests,
    () => GetLowLatencyHlsManifests,
    () => GetMssManifests,
    () => ForceEndpointErrorConfiguration,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    () => GetDashManifests,
  ]
);
export var CreateDashManifests = list(n0, _CDM, 0, () => CreateDashManifestConfiguration);
export var CreateHlsManifests = list(n0, _CHM, 0, () => CreateHlsManifestConfiguration);
export var CreateLowLatencyHlsManifests = list(n0, _CLLHM, 0, () => CreateLowLatencyHlsManifestConfiguration);
export var CreateMssManifests = list(n0, _CMM, 0, () => CreateMssManifestConfiguration);
export var DashBaseUrls = list(n0, _DBUa, 0, () => DashBaseUrl);
export var DashDvbErrorMetrics = list(n0, _DDEM, 0, () => DashDvbMetricsReporting);
export var DashPeriodTriggers = 64 | 0;

export var DashProfiles = 64 | 0;

export var DrmSystems = 64 | 0;

export var GetDashManifests = list(n0, _GDM, 0, () => GetDashManifestConfiguration);
export var GetHlsManifests = list(n0, _GHM, 0, () => GetHlsManifestConfiguration);
export var GetLowLatencyHlsManifests = list(n0, _GLLHM, 0, () => GetLowLatencyHlsManifestConfiguration);
export var GetMssManifests = list(n0, _GMM, 0, () => GetMssManifestConfiguration);
export var IngestEndpointList = list(n0, _IEL, 0, () => IngestEndpoint);
export var ScteFilterList = 64 | 0;

export var CreateChannel = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/channelGroup/{ChannelGroupName}/channel", 200],
  },
  () => CreateChannelRequest,
  () => CreateChannelResponse
);
export var CreateOriginEndpoint = op(
  n0,
  _COE,
  {
    [_h]: ["POST", "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint", 200],
  },
  () => CreateOriginEndpointRequest,
  () => CreateOriginEndpointResponse
);
export var GetChannel = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/", 200],
  },
  () => GetChannelRequest,
  () => GetChannelResponse
);
export var GetOriginEndpoint = op(
  n0,
  _GOE,
  {
    [_h]: ["GET", "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}", 200],
  },
  () => GetOriginEndpointRequest,
  () => GetOriginEndpointResponse
);
export var UpdateChannel = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/", 200],
  },
  () => UpdateChannelRequest,
  () => UpdateChannelResponse
);
export var UpdateOriginEndpoint = op(
  n0,
  _UOE,
  {
    [_h]: ["PUT", "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}", 200],
  },
  () => UpdateOriginEndpointRequest,
  () => UpdateOriginEndpointResponse
);

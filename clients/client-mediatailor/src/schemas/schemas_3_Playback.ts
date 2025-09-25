// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _ACC,
  _ADSU,
  _AIL,
  _AMP,
  _AS,
  _ASUP,
  _B,
  _CA,
  _CAR,
  _CARo,
  _CC,
  _CLFPC,
  _CLFPCR,
  _CLFPCRo,
  _CSUP,
  _DC,
  _DCFP,
  _E,
  _EET,
  _ELS,
  _EU,
  _FP,
  _GPC,
  _GPCR,
  _GPCRe,
  _h,
  _HCl,
  _IM,
  _jN,
  _LC,
  _LPRC,
  _M,
  _MDS,
  _MEP,
  _ML,
  _MPR,
  _MSIL,
  _N,
  _OMT,
  _PCA,
  _PCN,
  _PE,
  _PEP,
  _POIET,
  _PPC,
  _PPCR,
  _PPCRu,
  _PTS,
  _SAU,
  _SIEP,
  _SMFC,
  _SU,
  _T,
  _t,
  _TPN,
  _V,
  _VCSU,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdConditioningConfiguration = struct(n0, _ACC, 0, [_SMFC], [0]);
export var AdMarkerPassthrough = struct(n0, _AMP, 0, [_E], [2]);
export var AdsInteractionLog = struct(n0, _AIL, 0, [_POIET, _EET], [64 | 0, 64 | 0]);
export var AvailSuppression = struct(n0, _AS, 0, [_M, _V, _FP], [0, 0, 0]);
export var Bumper = struct(n0, _B, 0, [_EU, _SU], [0, 0]);
export var CdnConfiguration = struct(n0, _CC, 0, [_ASUP, _CSUP], [0, 0]);
export var ConfigureLogsForPlaybackConfigurationRequest = struct(
  n0,
  _CLFPCR,
  0,
  [_PE, _PCN, _ELS, _AIL, _MSIL],
  [1, 0, 64 | 0, () => AdsInteractionLog, () => ManifestServiceInteractionLog]
);
export var ConfigureLogsForPlaybackConfigurationResponse = struct(
  n0,
  _CLFPCRo,
  0,
  [_PE, _PCN, _ELS, _AIL, _MSIL],
  [1, 0, 64 | 0, () => AdsInteractionLog, () => ManifestServiceInteractionLog]
);
export var DashConfiguration = struct(n0, _DC, 0, [_MEP, _ML, _OMT], [0, 0, 0]);
export var DashConfigurationForPut = struct(n0, _DCFP, 0, [_ML, _OMT], [0, 0]);
export var GetPlaybackConfigurationRequest = struct(n0, _GPCR, 0, [_N], [[0, 1]]);
export var GetPlaybackConfigurationResponse = struct(
  n0,
  _GPCRe,
  0,
  [
    _ADSU,
    _AS,
    _B,
    _CC,
    _CA,
    _DC,
    _HCl,
    _IM,
    _LPRC,
    _LC,
    _MPR,
    _N,
    _PTS,
    _PCA,
    _PEP,
    _SIEP,
    _SAU,
    _T,
    _TPN,
    _VCSU,
    _ACC,
  ],
  [
    0,
    () => AvailSuppression,
    () => Bumper,
    () => CdnConfiguration,
    map(n0, _CAR, 0, 0, 128 | 0),
    () => DashConfiguration,
    () => HlsConfiguration,
    0,
    () => LivePreRollConfiguration,
    () => LogConfiguration,
    () => ManifestProcessingRules,
    0,
    1,
    0,
    0,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
    0,
    () => AdConditioningConfiguration,
  ]
);
export var HlsConfiguration = struct(n0, _HCl, 0, [_MEP], [0]);
export var LivePreRollConfiguration = struct(n0, _LPRC, 0, [_ADSU, _MDS], [0, 1]);
export var LogConfiguration = struct(
  n0,
  _LC,
  0,
  [_PE, _ELS, _AIL, _MSIL],
  [1, 64 | 0, () => AdsInteractionLog, () => ManifestServiceInteractionLog]
);
export var ManifestProcessingRules = struct(n0, _MPR, 0, [_AMP], [() => AdMarkerPassthrough]);
export var ManifestServiceInteractionLog = struct(n0, _MSIL, 0, [_EET], [64 | 0]);
export var PutPlaybackConfigurationRequest = struct(
  n0,
  _PPCR,
  0,
  [_ADSU, _AS, _B, _CC, _CA, _DC, _IM, _LPRC, _MPR, _N, _PTS, _SAU, _T, _TPN, _VCSU, _ACC],
  [
    0,
    () => AvailSuppression,
    () => Bumper,
    () => CdnConfiguration,
    map(n0, _CARo, 0, 0, 128 | 0),
    () => DashConfigurationForPut,
    0,
    () => LivePreRollConfiguration,
    () => ManifestProcessingRules,
    0,
    1,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
    0,
    () => AdConditioningConfiguration,
  ]
);
export var PutPlaybackConfigurationResponse = struct(
  n0,
  _PPCRu,
  0,
  [
    _ADSU,
    _AS,
    _B,
    _CC,
    _CA,
    _DC,
    _HCl,
    _IM,
    _LPRC,
    _LC,
    _MPR,
    _N,
    _PTS,
    _PCA,
    _PEP,
    _SIEP,
    _SAU,
    _T,
    _TPN,
    _VCSU,
    _ACC,
  ],
  [
    0,
    () => AvailSuppression,
    () => Bumper,
    () => CdnConfiguration,
    map(n0, _CAR, 0, 0, 128 | 0),
    () => DashConfiguration,
    () => HlsConfiguration,
    0,
    () => LivePreRollConfiguration,
    () => LogConfiguration,
    () => ManifestProcessingRules,
    0,
    1,
    0,
    0,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
    0,
    () => AdConditioningConfiguration,
  ]
);
export var __adsInteractionExcludeEventTypesList = 64 | 0;

export var __adsInteractionPublishOptInEventTypesList = 64 | 0;

export var __listOfLoggingStrategies = 64 | 0;

export var __manifestServiceExcludeEventTypesList = 64 | 0;

export var ConfigurationAliasesRequest = map(n0, _CARo, 0, 0, 128 | 0);
export var ConfigurationAliasesResponse = map(n0, _CAR, 0, 0, 128 | 0);
export var ConfigureLogsForPlaybackConfiguration = op(
  n0,
  _CLFPC,
  {
    [_h]: ["PUT", "/configureLogs/playbackConfiguration", 200],
  },
  () => ConfigureLogsForPlaybackConfigurationRequest,
  () => ConfigureLogsForPlaybackConfigurationResponse
);
export var GetPlaybackConfiguration = op(
  n0,
  _GPC,
  {
    [_h]: ["GET", "/playbackConfiguration/{Name}", 200],
  },
  () => GetPlaybackConfigurationRequest,
  () => GetPlaybackConfigurationResponse
);
export var PutPlaybackConfiguration = op(
  n0,
  _PPC,
  {
    [_h]: ["PUT", "/playbackConfiguration", 200],
  },
  () => PutPlaybackConfigurationRequest,
  () => PutPlaybackConfigurationResponse
);

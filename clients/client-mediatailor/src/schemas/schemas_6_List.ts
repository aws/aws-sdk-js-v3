// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AC,
  _ACC,
  _ACl,
  _ADSU,
  _AM,
  _Ar,
  _AS,
  _B,
  _C,
  _CA,
  _CAR,
  _CC,
  _CT,
  _DC,
  _DSDC,
  _h,
  _HC,
  _HCl,
  _hQ,
  _I,
  _IM,
  _jN,
  _LA,
  _LAR,
  _LARi,
  _LC,
  _LMT,
  _lOA,
  _lOPC,
  _lOSL,
  _LPC,
  _LPCR,
  _LPCRi,
  _LPRC,
  _LSL,
  _LSLR,
  _LSLRi,
  _MPR,
  _MR,
  _mR,
  _N,
  _NT,
  _nT,
  _PC,
  _PCA,
  _PEP,
  _PTS,
  _RA,
  _rA,
  _RRA,
  _SAU,
  _SDC,
  _SIEP,
  _SL,
  _SLN,
  _T,
  _t,
  _TPN,
  _VCSU,
  n0,
} from "./schemas_0";
import {
  AdConditioningConfiguration,
  AvailSuppression,
  Bumper,
  CdnConfiguration,
  DashConfiguration,
  HlsConfiguration,
  LivePreRollConfiguration,
  LogConfiguration,
  ManifestProcessingRules,
} from "./schemas_3_Playback";
import {
  __listOfSegmentDeliveryConfiguration,
  AccessConfiguration,
  DefaultSegmentDeliveryConfiguration,
  HttpConfiguration,
} from "./schemas_12_Source";

/* eslint no-var: 0 */

export var Alert = struct(n0, _A, 0, [_ACl, _AM, _LMT, _RRA, _RA, _C], [0, 0, 7, 64 | 0, 0, 0]);
export var ListAlertsRequest = struct(
  n0,
  _LAR,
  0,
  [_MR, _NT, _RA],
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
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
  ]
);
export var ListAlertsResponse = struct(n0, _LARi, 0, [_I, _NT], [() => __listOfAlert, 0]);
export var ListPlaybackConfigurationsRequest = struct(
  n0,
  _LPCR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListPlaybackConfigurationsResponse = struct(
  n0,
  _LPCRi,
  0,
  [_I, _NT],
  [[() => __listOfPlaybackConfiguration, 0], 0]
);
export var ListSourceLocationsRequest = struct(
  n0,
  _LSLR,
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
export var ListSourceLocationsResponse = struct(n0, _LSLRi, 0, [_I, _NT], [[() => __listOfSourceLocation, 0], 0]);
export var PlaybackConfiguration = struct(
  n0,
  _PC,
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
export var SourceLocation = struct(
  n0,
  _SL,
  0,
  [_AC, _Ar, _CT, _DSDC, _HC, _LMT, _SDC, _SLN, _T],
  [
    () => AccessConfiguration,
    0,
    7,
    () => DefaultSegmentDeliveryConfiguration,
    () => HttpConfiguration,
    7,
    () => __listOfSegmentDeliveryConfiguration,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var __listOfAlert = list(n0, _lOA, 0, () => Alert);
export var __listOfPlaybackConfiguration = list(n0, _lOPC, 0, [() => PlaybackConfiguration, 0]);
export var __listOfSourceLocation = list(n0, _lOSL, 0, [() => SourceLocation, 0]);
export var ListAlerts = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/alerts", 200],
  },
  () => ListAlertsRequest,
  () => ListAlertsResponse
);
export var ListPlaybackConfigurations = op(
  n0,
  _LPC,
  {
    [_h]: ["GET", "/playbackConfigurations", 200],
  },
  () => ListPlaybackConfigurationsRequest,
  () => ListPlaybackConfigurationsResponse
);
export var ListSourceLocations = op(
  n0,
  _LSL,
  {
    [_h]: ["GET", "/sourceLocations", 200],
  },
  () => ListSourceLocationsRequest,
  () => ListSourceLocationsResponse
);

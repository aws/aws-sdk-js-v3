// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CA,
  _CGN,
  _CMN,
  _CN,
  _CTo,
  _D,
  _DM,
  _EEC,
  _FEEC,
  _h,
  _HMl,
  _hQ,
  _It,
  _LDM,
  _LDMC,
  _LHM,
  _LHMC,
  _LLHM,
  _LLLHM,
  _LLLHMC,
  _LMM,
  _LMMC,
  _LOE,
  _LOER,
  _LOERi,
  _MA,
  _MM,
  _MN,
  _MR,
  _mR,
  _NT,
  _nT,
  _OEL,
  _OELC,
  _OEN,
  _U,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ForceEndpointErrorConfiguration = struct(n0, _FEEC, 0, [_EEC], [64 | 0]);
export var ListDashManifestConfiguration = struct(n0, _LDMC, 0, [_MN, _U], [0, 0]);
export var ListHlsManifestConfiguration = struct(n0, _LHMC, 0, [_MN, _CMN, _U], [0, 0, 0]);
export var ListLowLatencyHlsManifestConfiguration = struct(n0, _LLLHMC, 0, [_MN, _CMN, _U], [0, 0, 0]);
export var ListMssManifestConfiguration = struct(n0, _LMMC, 0, [_MN, _U], [0, 0]);
export var ListOriginEndpointsRequest = struct(
  n0,
  _LOER,
  0,
  [_CGN, _CN, _MR, _NT],
  [
    [0, 1],
    [0, 1],
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
export var ListOriginEndpointsResponse = struct(n0, _LOERi, 0, [_It, _NT], [() => OriginEndpointsList, 0]);
export var OriginEndpointListConfiguration = struct(
  n0,
  _OELC,
  0,
  [_A, _CGN, _CN, _OEN, _CTo, _D, _CA, _MA, _HMl, _LLHM, _DM, _MM, _FEEC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    () => ListHlsManifests,
    () => ListLowLatencyHlsManifests,
    () => ListDashManifests,
    () => ListMssManifests,
    () => ForceEndpointErrorConfiguration,
  ]
);
export var EndpointErrorConditions = 64 | 0;

export var ListDashManifests = list(n0, _LDM, 0, () => ListDashManifestConfiguration);
export var ListHlsManifests = list(n0, _LHM, 0, () => ListHlsManifestConfiguration);
export var ListLowLatencyHlsManifests = list(n0, _LLLHM, 0, () => ListLowLatencyHlsManifestConfiguration);
export var ListMssManifests = list(n0, _LMM, 0, () => ListMssManifestConfiguration);
export var OriginEndpointsList = list(n0, _OEL, 0, () => OriginEndpointListConfiguration);
export var ListOriginEndpoints = op(
  n0,
  _LOE,
  {
    [_h]: ["GET", "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint", 200],
  },
  () => ListOriginEndpointsRequest,
  () => ListOriginEndpointsResponse
);

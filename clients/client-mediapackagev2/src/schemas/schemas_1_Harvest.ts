// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _BN,
  _CA,
  _CGN,
  _CN,
  _D,
  _De,
  _DM,
  _DPe,
  _EM,
  _ET,
  _ETn,
  _GHJ,
  _GHJR,
  _GHJRe,
  _h,
  _HDM,
  _HDML,
  _HHM,
  _HHML,
  _HJN,
  _HLLHM,
  _HLLHML,
  _HM,
  _HMl,
  _HSC,
  _LLHM,
  _MA,
  _MN,
  _OEN,
  _S,
  _SCc,
  _SDC,
  _SDe,
  _STt,
  _T,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Destination = struct(n0, _De, 0, [_SDe], [() => S3DestinationConfig]);
export var GetHarvestJobRequest = struct(
  n0,
  _GHJR,
  0,
  [_CGN, _CN, _OEN, _HJN],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetHarvestJobResponse = struct(
  n0,
  _GHJRe,
  0,
  [_CGN, _CN, _OEN, _De, _HJN, _HM, _D, _SCc, _A, _CA, _MA, _S, _EM, _ET, _T],
  [
    0,
    0,
    0,
    () => Destination,
    0,
    () => HarvestedManifests,
    0,
    () => HarvesterScheduleConfiguration,
    0,
    4,
    4,
    0,
    0,
    0,
    128 | 0,
  ]
);
export var HarvestedDashManifest = struct(n0, _HDM, 0, [_MN], [0]);
export var HarvestedHlsManifest = struct(n0, _HHM, 0, [_MN], [0]);
export var HarvestedLowLatencyHlsManifest = struct(n0, _HLLHM, 0, [_MN], [0]);
export var HarvestedManifests = struct(
  n0,
  _HM,
  0,
  [_HMl, _DM, _LLHM],
  [() => HarvestedHlsManifestsList, () => HarvestedDashManifestsList, () => HarvestedLowLatencyHlsManifestsList]
);
export var HarvesterScheduleConfiguration = struct(n0, _HSC, 0, [_STt, _ETn], [4, 4]);
export var S3DestinationConfig = struct(n0, _SDC, 0, [_BN, _DPe], [0, 0]);
export var HarvestedDashManifestsList = list(n0, _HDML, 0, () => HarvestedDashManifest);
export var HarvestedHlsManifestsList = list(n0, _HHML, 0, () => HarvestedHlsManifest);
export var HarvestedLowLatencyHlsManifestsList = list(n0, _HLLHML, 0, () => HarvestedLowLatencyHlsManifest);
export var GetHarvestJob = op(
  n0,
  _GHJ,
  {
    [_h]: [
      "GET",
      "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/harvestJob/{HarvestJobName}",
      200,
    ],
  },
  () => GetHarvestJobRequest,
  () => GetHarvestJobResponse
);

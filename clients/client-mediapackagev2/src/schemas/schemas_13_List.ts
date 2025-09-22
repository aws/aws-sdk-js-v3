// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CA,
  _CGL,
  _CGLC,
  _CGN,
  _CN,
  _cN,
  _D,
  _De,
  _EM,
  _ET,
  _h,
  _HJ,
  _HJL,
  _HJN,
  _HM,
  _hQ,
  _iS,
  _It,
  _LCG,
  _LCGR,
  _LCGRi,
  _LHJ,
  _LHJR,
  _LHJRi,
  _MA,
  _MR,
  _mR,
  _NT,
  _nT,
  _OEN,
  _oEN,
  _S,
  _SCc,
  n0,
} from "./schemas_0";
import { Destination, HarvestedManifests, HarvesterScheduleConfiguration } from "./schemas_1_Harvest";

/* eslint no-var: 0 */

export var ChannelGroupListConfiguration = struct(n0, _CGLC, 0, [_CGN, _A, _CA, _MA, _D], [0, 0, 4, 4, 0]);
export var HarvestJob = struct(
  n0,
  _HJ,
  0,
  [_CGN, _CN, _OEN, _De, _HJN, _HM, _D, _SCc, _A, _CA, _MA, _S, _EM, _ET],
  [0, 0, 0, () => Destination, 0, () => HarvestedManifests, 0, () => HarvesterScheduleConfiguration, 0, 4, 4, 0, 0, 0]
);
export var ListChannelGroupsRequest = struct(
  n0,
  _LCGR,
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
export var ListChannelGroupsResponse = struct(n0, _LCGRi, 0, [_It, _NT], [() => ChannelGroupsList, 0]);
export var ListHarvestJobsRequest = struct(
  n0,
  _LHJR,
  0,
  [_CGN, _CN, _OEN, _S, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cN,
      },
    ],
    [
      0,
      {
        [_hQ]: _oEN,
      },
    ],
    [
      0,
      {
        [_hQ]: _iS,
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
  ]
);
export var ListHarvestJobsResponse = struct(n0, _LHJRi, 0, [_It, _NT], [() => HarvestJobsList, 0]);
export var ChannelGroupsList = list(n0, _CGL, 0, () => ChannelGroupListConfiguration);
export var HarvestJobsList = list(n0, _HJL, 0, () => HarvestJob);
export var ListChannelGroups = op(
  n0,
  _LCG,
  {
    [_h]: ["GET", "/channelGroup", 200],
  },
  () => ListChannelGroupsRequest,
  () => ListChannelGroupsResponse
);
export var ListHarvestJobs = op(
  n0,
  _LHJ,
  {
    [_h]: ["GET", "/channelGroup/{ChannelGroupName}/harvestJob", 200],
  },
  () => ListHarvestJobsRequest,
  () => ListHarvestJobsResponse
);

// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _A,
  _c,
  _CA,
  _CCG,
  _CCGR,
  _CCGRr,
  _CGN,
  _CHJr,
  _CHJRr,
  _CHJRre,
  _CN,
  _CT,
  _D,
  _De,
  _e,
  _ED,
  _EM,
  _ET,
  _h,
  _hE,
  _hH,
  _HJN,
  _HM,
  _iT,
  _jN,
  _M,
  _MA,
  _OEN,
  _S,
  _SCc,
  _SQEE,
  _T,
  _t,
  _xact,
  n0,
} from "./schemas_0";
import { Destination, HarvestedManifests, HarvesterScheduleConfiguration } from "./schemas_1_Harvest";

/* eslint no-var: 0 */

export var CreateChannelGroupRequest = struct(
  n0,
  _CCGR,
  0,
  [_CGN, _CT, _D, _T],
  [
    0,
    [
      0,
      {
        [_hH]: _xact,
        [_iT]: 1,
      },
    ],
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateChannelGroupResponse = struct(
  n0,
  _CCGRr,
  0,
  [_CGN, _A, _ED, _CA, _MA, _ET, _D, _T],
  [0, 0, 0, 4, 4, 0, 0, 128 | 0]
);
export var CreateHarvestJobRequest = struct(
  n0,
  _CHJRr,
  0,
  [_CGN, _CN, _OEN, _D, _HM, _SCc, _De, _CT, _HJN, _T],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    0,
    () => HarvestedManifests,
    () => HarvesterScheduleConfiguration,
    () => Destination,
    [
      0,
      {
        [_hH]: _xact,
        [_iT]: 1,
      },
    ],
    0,
    128 | 0,
  ]
);
export var CreateHarvestJobResponse = struct(
  n0,
  _CHJRre,
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
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],

  __ServiceQuotaExceededException
);
export var CreateChannelGroup = op(
  n0,
  _CCG,
  {
    [_h]: ["POST", "/channelGroup", 200],
  },
  () => CreateChannelGroupRequest,
  () => CreateChannelGroupResponse
);
export var CreateHarvestJob = op(
  n0,
  _CHJr,
  {
    [_h]: [
      "POST",
      "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/harvestJob",
      200,
    ],
  },
  () => CreateHarvestJobRequest,
  () => CreateHarvestJobResponse
);

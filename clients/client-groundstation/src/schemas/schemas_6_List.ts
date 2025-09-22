// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _dEGA,
  _dEGI,
  _DEGL,
  _dEGL,
  _DELI,
  _GSD,
  _gSI,
  _GSL,
  _gSL,
  _gSN,
  _h,
  _hQ,
  _LDEG,
  _LDEGR,
  _LDEGRi,
  _LGS,
  _LGSR,
  _LGSRi,
  _LMP,
  _LMPR,
  _LMPRi,
  _mPA,
  _mPI,
  _MPL,
  _mPL,
  _MPLI,
  _mR,
  _n,
  _nT,
  _r,
  _sI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataflowEndpointListItem = struct(n0, _DELI, 0, [_dEGI, _dEGA], [0, 0]);
export var GroundStationData = struct(n0, _GSD, 0, [_gSI, _gSN, _r], [0, 0, 0]);
export var ListDataflowEndpointGroupsRequest = struct(
  n0,
  _LDEGR,
  0,
  [_mR, _nT],
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
export var ListDataflowEndpointGroupsResponse = struct(
  n0,
  _LDEGRi,
  0,
  [_nT, _dEGL],
  [0, () => DataflowEndpointGroupList]
);
export var ListGroundStationsRequest = struct(
  n0,
  _LGSR,
  0,
  [_sI, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _sI,
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
export var ListGroundStationsResponse = struct(n0, _LGSRi, 0, [_nT, _gSL], [0, () => GroundStationList]);
export var ListMissionProfilesRequest = struct(
  n0,
  _LMPR,
  0,
  [_mR, _nT],
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
export var ListMissionProfilesResponse = struct(n0, _LMPRi, 0, [_nT, _mPL], [0, () => MissionProfileList]);
export var MissionProfileListItem = struct(n0, _MPLI, 0, [_mPI, _mPA, _r, _n], [0, 0, 0, 0]);
export var DataflowEndpointGroupList = list(n0, _DEGL, 0, () => DataflowEndpointListItem);
export var GroundStationList = list(n0, _GSL, 0, () => GroundStationData);
export var MissionProfileList = list(n0, _MPL, 0, () => MissionProfileListItem);
export var ListDataflowEndpointGroups = op(
  n0,
  _LDEG,
  {
    [_h]: ["GET", "/dataflowEndpointGroup", 200],
  },
  () => ListDataflowEndpointGroupsRequest,
  () => ListDataflowEndpointGroupsResponse
);
export var ListGroundStations = op(
  n0,
  _LGS,
  {
    [_h]: ["GET", "/groundstation", 200],
  },
  () => ListGroundStationsRequest,
  () => ListGroundStationsResponse
);
export var ListMissionProfiles = op(
  n0,
  _LMP,
  {
    [_h]: ["GET", "/missionprofile", 200],
  },
  () => ListMissionProfilesRequest,
  () => ListMissionProfilesResponse
);

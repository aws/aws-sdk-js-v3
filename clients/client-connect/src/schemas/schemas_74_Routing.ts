// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AAT,
  _AQI,
  _CRP,
  _CRPR,
  _CRPRr,
  _D,
  _DOQI,
  _DRPe,
  _DRPRe,
  _DRPRes,
  _h,
  _hQ,
  _I,
  _ID,
  _II,
  _LMR,
  _LMT,
  _LRP,
  _LRPR,
  _LRPRi,
  _MCe,
  _mR,
  _MRa,
  _N,
  _NOAQ,
  _NOAU,
  _NT,
  _nT,
  _QC,
  _RP,
  _RPA,
  _RPI,
  _RPS,
  _RPSL,
  _Ta,
  _URPN,
  _URPNR,
  n0,
  Unit,
} from "./schemas_0";
import { RoutingProfileQueueConfigList } from "./schemas_53_RoutingProfile";
import { MediaConcurrencies } from "./schemas_65_Routing";

/* eslint no-var: 0 */

export var CreateRoutingProfileRequest = struct(
  n0,
  _CRPR,
  0,
  [_II, _N, _D, _DOQI, _QC, _MCe, _Ta, _AAT],
  [[0, 1], 0, 0, 0, () => RoutingProfileQueueConfigList, () => MediaConcurrencies, 128 | 0, 0]
);
export var CreateRoutingProfileResponse = struct(n0, _CRPRr, 0, [_RPA, _RPI], [0, 0]);
export var DescribeRoutingProfileRequest = struct(
  n0,
  _DRPRe,
  0,
  [_II, _RPI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeRoutingProfileResponse = struct(n0, _DRPRes, 0, [_RP], [() => RoutingProfile]);
export var ListRoutingProfilesRequest = struct(
  n0,
  _LRPR,
  0,
  [_II, _NT, _MRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListRoutingProfilesResponse = struct(n0, _LRPRi, 0, [_RPSL, _NT], [() => RoutingProfileSummaryList, 0]);
export var RoutingProfile = struct(
  n0,
  _RP,
  0,
  [_II, _N, _RPA, _RPI, _D, _MCe, _DOQI, _Ta, _NOAQ, _NOAU, _AAT, _LMT, _LMR, _ID, _AQI],
  [0, 0, 0, 0, 0, () => MediaConcurrencies, 0, 128 | 0, 1, 1, 0, 4, 0, 2, 64 | 0]
);
export var RoutingProfileSummary = struct(n0, _RPS, 0, [_I, _A, _N, _LMT, _LMR], [0, 0, 0, 4, 0]);
export var UpdateRoutingProfileNameRequest = struct(n0, _URPNR, 0, [_II, _RPI, _N, _D], [[0, 1], [0, 1], 0, 0]);
export var AssociatedQueueIdList = 64 | 0;

export var RoutingProfileSummaryList = list(n0, _RPSL, 0, () => RoutingProfileSummary);
export var CreateRoutingProfile = op(
  n0,
  _CRP,
  {
    [_h]: ["PUT", "/routing-profiles/{InstanceId}", 200],
  },
  () => CreateRoutingProfileRequest,
  () => CreateRoutingProfileResponse
);
export var DescribeRoutingProfile = op(
  n0,
  _DRPe,
  {
    [_h]: ["GET", "/routing-profiles/{InstanceId}/{RoutingProfileId}", 200],
  },
  () => DescribeRoutingProfileRequest,
  () => DescribeRoutingProfileResponse
);
export var ListRoutingProfiles = op(
  n0,
  _LRP,
  {
    [_h]: ["GET", "/routing-profiles-summary/{InstanceId}", 200],
  },
  () => ListRoutingProfilesRequest,
  () => ListRoutingProfilesResponse
);
export var UpdateRoutingProfileName = op(
  n0,
  _URPN,
  {
    [_h]: ["POST", "/routing-profiles/{InstanceId}/{RoutingProfileId}/name", 200],
  },
  () => UpdateRoutingProfileNameRequest,
  () => Unit
);

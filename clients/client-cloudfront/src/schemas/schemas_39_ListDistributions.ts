// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DI,
  _DIL,
  _DILS,
  _h,
  _hQ,
  _I,
  _IT,
  _LDBVOI,
  _LDBVOIR,
  _LDBVOIRi,
  _Ma,
  _MI,
  _NM,
  _Q,
  _VOI,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DistributionIdList = struct(
  n0,
  _DIL,
  0,
  [_Ma, _NM, _MI, _IT, _Q, _I],
  [0, 0, 1, 2, 1, [() => DistributionIdListSummary, 0]]
);
export var ListDistributionsByVpcOriginIdRequest = struct(
  n0,
  _LDBVOIR,
  0,
  [_Ma, _MI, _VOI],
  [
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
    [0, 1],
  ]
);
export var ListDistributionsByVpcOriginIdResult = struct(n0, _LDBVOIRi, 0, [_DIL], [[() => DistributionIdList, 16]]);
export var DistributionIdListSummary = list(n0, _DILS, 0, [
  0,
  {
    [_xN]: _DI,
  },
]);
export var ListDistributionsByVpcOriginId = op(
  n0,
  _LDBVOI,
  {
    [_h]: ["GET", "/2020-05-31/distributionsByVpcOriginId/{VpcOriginId}", 200],
  },
  () => ListDistributionsByVpcOriginIdRequest,
  () => ListDistributionsByVpcOriginIdResult
);

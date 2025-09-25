// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cN, _fPNa, _hQ, _ht, _LFP, _LFPR, _LFPRi, _mR, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListFargateProfilesRequest = struct(
  n0,
  _LFPR,
  0,
  [_cN, _mR, _nT],
  [
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
export var ListFargateProfilesResponse = struct(n0, _LFPRi, 0, [_fPNa, _nT], [64 | 0, 0]);
export var ListFargateProfiles = op(
  n0,
  _LFP,
  {
    [_ht]: ["GET", "/clusters/{clusterName}/fargate-profiles", 200],
  },
  () => ListFargateProfilesRequest,
  () => ListFargateProfilesResponse
);

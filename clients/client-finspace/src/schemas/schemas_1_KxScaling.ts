// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aZI,
  _cl,
  _cTl,
  _cTr,
  _DKSG,
  _DKSGR,
  _DKSGRe,
  _eI,
  _GKSG,
  _GKSGR,
  _GKSGRe,
  _h,
  _hQ,
  _hT,
  _iT,
  _lMT,
  _s,
  _sGA,
  _sGN,
  _sR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteKxScalingGroupRequest = struct(
  n0,
  _DKSGR,
  0,
  [_eI, _sGN, _cTl],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
  ]
);
export var DeleteKxScalingGroupResponse = struct(n0, _DKSGRe, 0, [], []);
export var GetKxScalingGroupRequest = struct(
  n0,
  _GKSGR,
  0,
  [_eI, _sGN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetKxScalingGroupResponse = struct(
  n0,
  _GKSGRe,
  0,
  [_sGN, _sGA, _hT, _cl, _aZI, _s, _sR, _lMT, _cTr],
  [0, 0, 0, 64 | 0, 0, 0, 0, 4, 4]
);
export var KxClusterNameList = 64 | 0;

export var DeleteKxScalingGroup = op(
  n0,
  _DKSG,
  {
    [_h]: ["DELETE", "/kx/environments/{environmentId}/scalingGroups/{scalingGroupName}", 200],
  },
  () => DeleteKxScalingGroupRequest,
  () => DeleteKxScalingGroupResponse
);
export var GetKxScalingGroup = op(
  n0,
  _GKSG,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}/scalingGroups/{scalingGroupName}", 200],
  },
  () => GetKxScalingGroupRequest,
  () => GetKxScalingGroupResponse
);

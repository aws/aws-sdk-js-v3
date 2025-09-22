// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cTl, _DKV, _DKVR, _DKVRe, _eI, _h, _hQ, _iT, _vN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteKxVolumeRequest = struct(
  n0,
  _DKVR,
  0,
  [_eI, _vN, _cTl],
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
export var DeleteKxVolumeResponse = struct(n0, _DKVRe, 0, [], []);
export var DeleteKxVolume = op(
  n0,
  _DKV,
  {
    [_h]: ["DELETE", "/kx/environments/{environmentId}/kxvolumes/{volumeName}", 200],
  },
  () => DeleteKxVolumeRequest,
  () => DeleteKxVolumeResponse
);

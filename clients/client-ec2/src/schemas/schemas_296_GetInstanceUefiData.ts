// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _eQN, _GIUD, _GIUDR, _GIUDRe, _II, _iI, _UD, _uD, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetInstanceUefiDataRequest = struct(
  n0,
  _GIUDR,
  0,
  [_II, _DR],
  [
    [
      0,
      {
        [_xN]: _II,
      },
    ],
    2,
  ]
);
export var GetInstanceUefiDataResult = struct(
  n0,
  _GIUDRe,
  0,
  [_II, _UD],
  [
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `UefiData`,
        [_xN]: _uD,
      },
    ],
  ]
);
export var GetInstanceUefiData = op(
  n0,
  _GIUD,
  0,
  () => GetInstanceUefiDataRequest,
  () => GetInstanceUefiDataResult
);

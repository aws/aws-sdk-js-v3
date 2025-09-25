// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPG, _DPGR, _DR, _dR, _eQN, _GN, _gN, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePlacementGroupRequest = struct(
  n0,
  _DPGR,
  0,
  [_DR, _GN],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupName`,
        [_xN]: _gN,
      },
    ],
  ]
);
export var DeletePlacementGroup = op(
  n0,
  _DPG,
  0,
  () => DeletePlacementGroupRequest,
  () => Unit
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _dR, _DSelet, _DSRe, _eQN, _SIu, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSubnetRequest = struct(
  n0,
  _DSRe,
  0,
  [_SIu, _DR],
  [
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var DeleteSubnet = op(
  n0,
  _DSelet,
  0,
  () => DeleteSubnetRequest,
  () => Unit
);

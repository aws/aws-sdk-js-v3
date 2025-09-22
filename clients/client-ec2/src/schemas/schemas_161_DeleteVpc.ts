// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _dR, _DVele, _DVRe, _eQN, _VI, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVpcRequest = struct(
  n0,
  _DVRe,
  0,
  [_VI, _DR],
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
export var DeleteVpc = op(
  n0,
  _DVele,
  0,
  () => DeleteVpcRequest,
  () => Unit
);

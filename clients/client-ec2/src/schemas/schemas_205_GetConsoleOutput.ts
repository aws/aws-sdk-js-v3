// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _dR, _eQN, _GCO, _GCOR, _GCORe, _II, _iI, _La, _Ou, _ou, _Ti, _ti, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetConsoleOutputRequest = struct(
  n0,
  _GCOR,
  0,
  [_II, _La, _DR],
  [
    0,
    2,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var GetConsoleOutputResult = struct(
  n0,
  _GCORe,
  0,
  [_II, _Ti, _Ou],
  [
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      4,
      {
        [_eQN]: `Timestamp`,
        [_xN]: _ti,
      },
    ],
    [
      0,
      {
        [_eQN]: `Output`,
        [_xN]: _ou,
      },
    ],
  ]
);
export var GetConsoleOutput = op(
  n0,
  _GCO,
  0,
  () => GetConsoleOutputRequest,
  () => GetConsoleOutputResult
);

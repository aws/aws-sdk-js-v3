// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DKP, _DKPR, _DKPRe, _DR, _dR, _eQN, _KN, _KPI, _kPI, _R, _r, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteKeyPairRequest = struct(
  n0,
  _DKPR,
  0,
  [_KN, _KPI, _DR],
  [
    0,
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
export var DeleteKeyPairResult = struct(
  n0,
  _DKPRe,
  0,
  [_R, _KPI],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
    [
      0,
      {
        [_eQN]: `KeyPairId`,
        [_xN]: _kPI,
      },
    ],
  ]
);
export var DeleteKeyPair = op(
  n0,
  _DKP,
  0,
  () => DeleteKeyPairRequest,
  () => DeleteKeyPairResult
);

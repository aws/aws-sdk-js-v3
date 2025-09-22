// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _DR, _dR, _eQN, _GPD, _GPDR, _GPDRe, _II, _iI, _PD, _pD, _Ti, _ti, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PasswordData = sim(n0, _PD, 0, 8);
export var GetPasswordDataRequest = struct(
  n0,
  _GPDR,
  0,
  [_II, _DR],
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
export var GetPasswordDataResult = struct(
  n0,
  _GPDRe,
  0,
  [_II, _Ti, _PD],
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
      () => PasswordData,
      {
        [_eQN]: `PasswordData`,
        [_xN]: _pD,
      },
    ],
  ]
);
export var GetPasswordData = op(
  n0,
  _GPD,
  0,
  () => GetPasswordDataRequest,
  () => GetPasswordDataResult
);

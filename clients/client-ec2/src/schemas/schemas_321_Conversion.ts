// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CCR, _CCT, _CTI, _cTI, _DR, _dR, _eQN, _RM, _rM, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelConversionRequest = struct(
  n0,
  _CCR,
  0,
  [_DR, _CTI, _RM],
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
        [_eQN]: `ConversionTaskId`,
        [_xN]: _cTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ReasonMessage`,
        [_xN]: _rM,
      },
    ],
  ]
);
export var CancelConversionTask = op(
  n0,
  _CCT,
  0,
  () => CancelConversionRequest,
  () => Unit
);

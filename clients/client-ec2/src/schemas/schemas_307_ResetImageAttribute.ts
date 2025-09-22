// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _At, _DR, _dR, _eQN, _IIm, _RIA, _RIAR, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ResetImageAttributeRequest = struct(
  n0,
  _RIAR,
  0,
  [_At, _IIm, _DR],
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
export var ResetImageAttribute = op(
  n0,
  _RIA,
  0,
  () => ResetImageAttributeRequest,
  () => Unit
);

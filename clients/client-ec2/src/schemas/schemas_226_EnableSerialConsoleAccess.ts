// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _eQN, _ESCA, _ESCAR, _ESCARn, _SCAE, _sCAE, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableSerialConsoleAccessRequest = struct(n0, _ESCAR, 0, [_DR], [2]);
export var EnableSerialConsoleAccessResult = struct(
  n0,
  _ESCARn,
  0,
  [_SCAE],
  [
    [
      2,
      {
        [_eQN]: `SerialConsoleAccessEnabled`,
        [_xN]: _sCAE,
      },
    ],
  ]
);
export var EnableSerialConsoleAccess = op(
  n0,
  _ESCA,
  0,
  () => EnableSerialConsoleAccessRequest,
  () => EnableSerialConsoleAccessResult
);

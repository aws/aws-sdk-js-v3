// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIDP, _DIDPR, _DIDPRi, _DR, _eQN, _IIm, _R, _r, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableImageDeregistrationProtectionRequest = struct(n0, _DIDPR, 0, [_IIm, _DR], [0, 2]);
export var DisableImageDeregistrationProtectionResult = struct(
  n0,
  _DIDPRi,
  0,
  [_R],
  [
    [
      0,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var DisableImageDeregistrationProtection = op(
  n0,
  _DIDP,
  0,
  () => DisableImageDeregistrationProtectionRequest,
  () => DisableImageDeregistrationProtectionResult
);

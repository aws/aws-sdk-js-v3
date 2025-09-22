// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _EIDP, _EIDPR, _EIDPRn, _eQN, _IIm, _R, _r, _WC, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableImageDeregistrationProtectionRequest = struct(n0, _EIDPR, 0, [_IIm, _WC, _DR], [0, 2, 2]);
export var EnableImageDeregistrationProtectionResult = struct(
  n0,
  _EIDPRn,
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
export var EnableImageDeregistrationProtection = op(
  n0,
  _EIDP,
  0,
  () => EnableImageDeregistrationProtectionRequest,
  () => EnableImageDeregistrationProtectionResult
);

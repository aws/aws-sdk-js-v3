// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIDis, _DIDR, _DIDRi, _DR, _eQN, _IIm, _R, _r, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableImageDeprecationRequest = struct(n0, _DIDR, 0, [_IIm, _DR], [0, 2]);
export var DisableImageDeprecationResult = struct(
  n0,
  _DIDRi,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var DisableImageDeprecation = op(
  n0,
  _DIDis,
  0,
  () => DisableImageDeprecationRequest,
  () => DisableImageDeprecationResult
);

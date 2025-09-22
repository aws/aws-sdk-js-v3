// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIBPA, _DIBPAR, _DIBPARi, _DR, _eQN, _IBPAS, _iBPAS, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableImageBlockPublicAccessRequest = struct(n0, _DIBPAR, 0, [_DR], [2]);
export var DisableImageBlockPublicAccessResult = struct(
  n0,
  _DIBPARi,
  0,
  [_IBPAS],
  [
    [
      0,
      {
        [_eQN]: `ImageBlockPublicAccessState`,
        [_xN]: _iBPAS,
      },
    ],
  ]
);
export var DisableImageBlockPublicAccess = op(
  n0,
  _DIBPA,
  0,
  () => DisableImageBlockPublicAccessRequest,
  () => DisableImageBlockPublicAccessResult
);

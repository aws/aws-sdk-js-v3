// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _EIBPA, _EIBPAR, _EIBPARn, _eQN, _IBPAS, _iBPAS, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableImageBlockPublicAccessRequest = struct(n0, _EIBPAR, 0, [_IBPAS, _DR], [0, 2]);
export var EnableImageBlockPublicAccessResult = struct(
  n0,
  _EIBPARn,
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
export var EnableImageBlockPublicAccess = op(
  n0,
  _EIBPA,
  0,
  () => EnableImageBlockPublicAccessRequest,
  () => EnableImageBlockPublicAccessResult
);

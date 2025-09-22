// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _eQN, _MIIF, _MIIFR, _PAr, _pAr, _re, _Reso, _ULI, _uLI, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyIdentityIdFormatRequest = struct(
  n0,
  _MIIFR,
  0,
  [_Reso, _ULI, _PAr],
  [
    [
      0,
      {
        [_eQN]: `Resource`,
        [_xN]: _re,
      },
    ],
    [
      2,
      {
        [_eQN]: `UseLongIds`,
        [_xN]: _uLI,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrincipalArn`,
        [_xN]: _pAr,
      },
    ],
  ]
);
export var ModifyIdentityIdFormat = op(
  n0,
  _MIIF,
  0,
  () => ModifyIdentityIdFormatRequest,
  () => Unit
);

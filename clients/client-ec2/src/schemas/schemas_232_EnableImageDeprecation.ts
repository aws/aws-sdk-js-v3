// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAep, _DR, _EID, _EIDR, _EIDRn, _eQN, _IIm, _R, _r, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableImageDeprecationRequest = struct(n0, _EIDR, 0, [_IIm, _DAep, _DR], [0, 4, 2]);
export var EnableImageDeprecationResult = struct(
  n0,
  _EIDRn,
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
export var EnableImageDeprecation = op(
  n0,
  _EID,
  0,
  () => EnableImageDeprecationRequest,
  () => EnableImageDeprecationResult
);

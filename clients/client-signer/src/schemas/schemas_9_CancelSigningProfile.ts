// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSP, _CSPR, _h, _pN, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Signing";

/* eslint no-var: 0 */

export var CancelSigningProfileRequest = struct(n0, _CSPR, 0, [_pN], [[0, 1]]);
export var CancelSigningProfile = op(
  n0,
  _CSP,
  {
    [_h]: ["DELETE", "/signing-profiles/{profileName}", 200],
  },
  () => CancelSigningProfileRequest,
  () => Unit
);

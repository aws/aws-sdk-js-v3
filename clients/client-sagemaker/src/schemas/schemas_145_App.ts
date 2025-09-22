// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Ali, _BI, _CIV, _CIVR, _CIVRr, _CTl, _H, _IN, _IVA, _JT, _MLF, _PL, _Pro, _RN, _VG, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateImageVersionRequest = struct(
  n0,
  _CIVR,
  0,
  [_BI, _CTl, _IN, _Ali, _VG, _JT, _MLF, _PL, _Pro, _H, _RN],
  [0, [0, 4], 0, 64 | 0, 0, 0, 0, 0, 0, 2, 0]
);
export var CreateImageVersionResponse = struct(n0, _CIVRr, 0, [_IVA], [0]);
export var CreateImageVersion = op(
  n0,
  _CIV,
  0,
  () => CreateImageVersionRequest,
  () => CreateImageVersionResponse
);

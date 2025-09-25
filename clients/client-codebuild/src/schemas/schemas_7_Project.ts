// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _pAr, _pPA, _pV, _rAR, _UPV, _UPVI, _UPVO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateProjectVisibilityInput = struct(n0, _UPVI, 0, [_pAr, _pV, _rAR], [0, 0, 0]);
export var UpdateProjectVisibilityOutput = struct(n0, _UPVO, 0, [_pAr, _pPA, _pV], [0, 0, 0]);
export var UpdateProjectVisibility = op(
  n0,
  _UPV,
  0,
  () => UpdateProjectVisibilityInput,
  () => UpdateProjectVisibilityOutput
);

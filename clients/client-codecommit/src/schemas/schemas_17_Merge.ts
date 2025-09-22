// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bI, _cI, _cS, _fC, _fMi, _fP, _fSi, _GF, _GFI, _GFO, _rN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetFileInput = struct(n0, _GFI, 0, [_rN, _cS, _fP], [0, 0, 0]);
export var GetFileOutput = struct(n0, _GFO, 0, [_cI, _bI, _fP, _fMi, _fSi, _fC], [0, 0, 0, 0, 1, 21]);
export var GetFile = op(
  n0,
  _GF,
  0,
  () => GetFileInput,
  () => GetFileOutput
);

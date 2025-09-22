// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _gV, _hQ, _LSV, _LSVI, _LSVO, _mR, _nT, _sh, _SVL, _SVS, _sVy, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListSystemVersionsInput = struct(
  n0,
  _LSVI,
  0,
  [_mR, _nT, _gV, _sh],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    0,
    0,
  ]
);
export var ListSystemVersionsOutput = struct(n0, _LSVO, 0, [_nT, _sVy], [0, () => SystemVersionList]);
export var SystemVersionSummary = struct(n0, _SVS, 0, [_gV, _sh, _sVy], [0, 0, 64 | 0]);
export var SystemVersionList = list(n0, _SVL, 0, () => SystemVersionSummary);
export var ListSystemVersions = op(
  n0,
  _LSV,
  0,
  () => ListSystemVersionsInput,
  () => ListSystemVersionsOutput
);

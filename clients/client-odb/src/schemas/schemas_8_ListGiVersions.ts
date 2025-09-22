// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _gVi, _GVL, _GVS, _hQ, _LGV, _LGVI, _LGVO, _mR, _nT, _sh, _v, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GiVersionSummary = struct(n0, _GVS, 0, [_v], [0]);
export var ListGiVersionsInput = struct(
  n0,
  _LGVI,
  0,
  [_mR, _nT, _sh],
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
  ]
);
export var ListGiVersionsOutput = struct(n0, _LGVO, 0, [_nT, _gVi], [0, () => GiVersionList]);
export var GiVersionList = list(n0, _GVL, 0, () => GiVersionSummary);
export var ListGiVersions = op(
  n0,
  _LGV,
  0,
  () => ListGiVersionsInput,
  () => ListGiVersionsOutput
);

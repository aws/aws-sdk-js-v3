// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _cB,
  _de,
  _dN,
  _end,
  _f,
  _fI,
  _FS,
  _FSa,
  _GF,
  _GFR,
  _GFRe,
  _h,
  _hQ,
  _kKA,
  _LF,
  _LFR,
  _LFRi,
  _mR,
  _nT,
  _pI,
  _uA,
  _uB,
  Description,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FarmSummary = struct(n0, _FS, 0, [_fI, _dN, _kKA, _cA, _cB, _uA, _uB], [0, 0, 0, 5, 0, 5, 0]);
export var GetFarmRequest = struct(n0, _GFR, 0, [_fI], [[0, 1]]);
export var GetFarmResponse = struct(
  n0,
  _GFRe,
  0,
  [_fI, _dN, _de, _kKA, _cA, _cB, _uA, _uB],
  [0, 0, [() => Description, 0], 0, 5, 0, 5, 0]
);
export var ListFarmsRequest = struct(
  n0,
  _LFR,
  0,
  [_nT, _pI, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListFarmsResponse = struct(n0, _LFRi, 0, [_nT, _f], [0, () => FarmSummaries]);
export var FarmSummaries = list(n0, _FSa, 0, () => FarmSummary);
export var GetFarm = op(
  n0,
  _GF,
  {
    [_h]: ["GET", "/2023-10-12/farms/{farmId}", 200],
    [_end]: ["management."],
  },
  () => GetFarmRequest,
  () => GetFarmResponse
);
export var ListFarms = op(
  n0,
  _LF,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms", 200],
  },
  () => ListFarmsRequest,
  () => ListFarmsResponse
);

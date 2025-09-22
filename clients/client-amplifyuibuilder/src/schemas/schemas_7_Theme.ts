// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aI, _eN, _ent, _h, _hQ, _i, _LT, _LTR, _LTRi, _mR, _n, _nT, _TS, _TSL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListThemesRequest = struct(
  n0,
  _LTR,
  0,
  [_aI, _eN, _nT, _mR],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
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
export var ListThemesResponse = struct(n0, _LTRi, 0, [_ent, _nT], [() => ThemeSummaryList, 0]);
export var ThemeSummary = struct(n0, _TS, 0, [_aI, _eN, _i, _n], [0, 0, 0, 0]);
export var ThemeSummaryList = list(n0, _TSL, 0, () => ThemeSummary);
export var ListThemes = op(
  n0,
  _LT,
  {
    [_h]: ["GET", "/app/{appId}/environment/{environmentName}/themes", 200],
  },
  () => ListThemesRequest,
  () => ListThemesResponse
);

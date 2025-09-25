// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _cT,
  _d,
  _GSC,
  _GSCR,
  _GSCRe,
  _ht,
  _lMT,
  _n,
  _NC,
  _nC,
  _tAo,
  _tAot,
  _tB,
  _tNo,
  _tP,
  _tS,
  _tSo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSignalCatalogRequest = struct(n0, _GSCR, 0, [_n], [[0, 1]]);
export var GetSignalCatalogResponse = struct(
  n0,
  _GSCRe,
  0,
  [_n, _a, _d, _nC, _cT, _lMT],
  [0, 0, 0, () => NodeCounts, 4, 4]
);
export var NodeCounts = struct(n0, _NC, 0, [_tNo, _tB, _tS, _tAo, _tAot, _tSo, _tP], [1, 1, 1, 1, 1, 1, 1]);
export var GetSignalCatalog = op(
  n0,
  _GSC,
  {
    [_ht]: ["GET", "/signal-catalogs/{name}", 200],
  },
  () => GetSignalCatalogRequest,
  () => GetSignalCatalogResponse
);

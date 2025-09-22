// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _cT, _hQ, _ht, _lMT, _LSC, _LSCR, _LSCRi, _mR, _n, _nT, _SCS, _sCS, _su, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListSignalCatalogsRequest = struct(
  n0,
  _LSCR,
  0,
  [_nT, _mR],
  [
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
export var ListSignalCatalogsResponse = struct(n0, _LSCRi, 0, [_su, _nT], [() => signalCatalogSummaries, 0]);
export var SignalCatalogSummary = struct(n0, _SCS, 0, [_n, _a, _cT, _lMT], [0, 0, 4, 4]);
export var signalCatalogSummaries = list(n0, _sCS, 0, () => SignalCatalogSummary);
export var ListSignalCatalogs = op(
  n0,
  _LSC,
  {
    [_ht]: ["GET", "/signal-catalogs", 200],
  },
  () => ListSignalCatalogsRequest,
  () => ListSignalCatalogsResponse
);

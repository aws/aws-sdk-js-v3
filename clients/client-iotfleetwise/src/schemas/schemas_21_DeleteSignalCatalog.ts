// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DSC, _DSCR, _DSCRe, _ht, _n, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSignalCatalogRequest = struct(n0, _DSCR, 0, [_n], [[0, 1]]);
export var DeleteSignalCatalogResponse = struct(n0, _DSCRe, 0, [_n, _a], [0, 0]);
export var DeleteSignalCatalog = op(
  n0,
  _DSC,
  {
    [_ht]: ["DELETE", "/signal-catalogs/{name}", 200],
  },
  () => DeleteSignalCatalogRequest,
  () => DeleteSignalCatalogResponse
);

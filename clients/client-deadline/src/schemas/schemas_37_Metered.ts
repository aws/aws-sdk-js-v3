// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _end,
  _fa,
  _h,
  _hQ,
  _LAMP,
  _LAMPR,
  _LAMPRi,
  _mP,
  _MPS,
  _MPSL,
  _mR,
  _nT,
  _pIr,
  _por,
  _ve,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListAvailableMeteredProductsRequest = struct(
  n0,
  _LAMPR,
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
export var ListAvailableMeteredProductsResponse = struct(
  n0,
  _LAMPRi,
  0,
  [_mP, _nT],
  [() => MeteredProductSummaryList, 0]
);
export var MeteredProductSummary = struct(n0, _MPS, 0, [_pIr, _fa, _ve, _por], [0, 0, 0, 1]);
export var MeteredProductSummaryList = list(n0, _MPSL, 0, () => MeteredProductSummary);
export var ListAvailableMeteredProducts = op(
  n0,
  _LAMP,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/metered-products", 200],
  },
  () => ListAvailableMeteredProductsRequest,
  () => ListAvailableMeteredProductsResponse
);

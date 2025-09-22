// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _LEPFI, _LEPFIR, _LEPFIRi, _MRa, _NTe, _PSro, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListEnabledProductsForImportRequest = struct(
  n0,
  _LEPFIR,
  0,
  [_NTe, _MRa],
  [
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MRa,
      },
    ],
  ]
);
export var ListEnabledProductsForImportResponse = struct(n0, _LEPFIRi, 0, [_PSro, _NTe], [64 | 0, 0]);
export var ProductSubscriptionArnList = 64 | 0;

export var ListEnabledProductsForImport = op(
  n0,
  _LEPFI,
  {
    [_h]: ["GET", "/productSubscriptions", 200],
  },
  () => ListEnabledProductsForImportRequest,
  () => ListEnabledProductsForImportResponse
);

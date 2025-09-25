// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BOMIJ, _GBOMIJ, _GBOMIJR, _GBOMIJRe, _h, _iI, _j, _jI, _m, _s, _su, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BillOfMaterialsImportJob = struct(n0, _BOMIJ, 0, [_iI, _jI, _s, _su, _m], [0, 0, 0, 0, 0]);
export var GetBillOfMaterialsImportJobRequest = struct(
  n0,
  _GBOMIJR,
  0,
  [_iI, _jI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetBillOfMaterialsImportJobResponse = struct(n0, _GBOMIJRe, 0, [_j], [() => BillOfMaterialsImportJob]);
export var GetBillOfMaterialsImportJob = op(
  n0,
  _GBOMIJ,
  {
    [_h]: ["GET", "/api/configuration/instances/{instanceId}/bill-of-materials-import-jobs/{jobId}", 200],
  },
  () => GetBillOfMaterialsImportJobRequest,
  () => GetBillOfMaterialsImportJobResponse
);

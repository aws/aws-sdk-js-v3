// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CBOMIJ, _CBOMIJR, _CBOMIJRr, _cT, _h, _iI, _jI, _su, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateBillOfMaterialsImportJobRequest = struct(n0, _CBOMIJR, 0, [_iI, _su, _cT], [[0, 1], 0, [0, 4]]);
export var CreateBillOfMaterialsImportJobResponse = struct(n0, _CBOMIJRr, 0, [_jI], [0]);
export var CreateBillOfMaterialsImportJob = op(
  n0,
  _CBOMIJ,
  {
    [_h]: ["POST", "/api/configuration/instances/{instanceId}/bill-of-materials-import-jobs", 200],
  },
  () => CreateBillOfMaterialsImportJobRequest,
  () => CreateBillOfMaterialsImportJobResponse
);

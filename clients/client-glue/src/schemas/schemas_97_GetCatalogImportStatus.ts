// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _CISa, _GCIS, _GCISR, _GCISRe, _IBm, _IC, _IS, _IT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CatalogImportStatus = struct(n0, _CISa, 0, [_IC, _IT, _IBm], [2, 4, 0]);
export var GetCatalogImportStatusRequest = struct(n0, _GCISR, 0, [_CI], [0]);
export var GetCatalogImportStatusResponse = struct(n0, _GCISRe, 0, [_IS], [() => CatalogImportStatus]);
export var GetCatalogImportStatus = op(
  n0,
  _GCIS,
  0,
  () => GetCatalogImportStatusRequest,
  () => GetCatalogImportStatusResponse
);

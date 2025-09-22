// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _ICTG, _ICTGR, _ICTGRm, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ImportCatalogToGlueRequest = struct(n0, _ICTGR, 0, [_CI], [0]);
export var ImportCatalogToGlueResponse = struct(n0, _ICTGRm, 0, [], []);
export var ImportCatalogToGlue = op(
  n0,
  _ICTG,
  0,
  () => ImportCatalogToGlueRequest,
  () => ImportCatalogToGlueResponse
);

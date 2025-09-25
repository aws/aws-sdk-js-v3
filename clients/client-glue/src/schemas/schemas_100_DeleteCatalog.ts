// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _DC, _DCR, _DCRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCatalogRequest = struct(n0, _DCR, 0, [_CI], [0]);
export var DeleteCatalogResponse = struct(n0, _DCRe, 0, [], []);
export var DeleteCatalog = op(
  n0,
  _DC,
  0,
  () => DeleteCatalogRequest,
  () => DeleteCatalogResponse
);

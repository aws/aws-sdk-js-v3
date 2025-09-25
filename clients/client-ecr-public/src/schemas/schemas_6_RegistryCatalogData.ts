// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dN, _GRCD, _GRCDR, _GRCDRe, _PRCD, _PRCDR, _PRCDRu, _RCD, _rCD, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetRegistryCatalogDataRequest = struct(n0, _GRCDR, 0, [], []);
export var GetRegistryCatalogDataResponse = struct(n0, _GRCDRe, 0, [_rCD], [() => RegistryCatalogData]);
export var PutRegistryCatalogDataRequest = struct(n0, _PRCDR, 0, [_dN], [0]);
export var PutRegistryCatalogDataResponse = struct(n0, _PRCDRu, 0, [_rCD], [() => RegistryCatalogData]);
export var RegistryCatalogData = struct(n0, _RCD, 0, [_dN], [0]);
export var GetRegistryCatalogData = op(
  n0,
  _GRCD,
  0,
  () => GetRegistryCatalogDataRequest,
  () => GetRegistryCatalogDataResponse
);
export var PutRegistryCatalogData = op(
  n0,
  _PRCD,
  0,
  () => PutRegistryCatalogDataRequest,
  () => PutRegistryCatalogDataResponse
);

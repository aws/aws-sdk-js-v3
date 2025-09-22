// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CI,
  _CII,
  _ECC,
  _ECCa,
  _ECCLD,
  _F,
  _GCI,
  _GCII,
  _GCIO,
  _h,
  _IS,
  _MS,
  _PK,
  _Q,
  _SS,
  _SUG,
  _WL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CatalogItem = struct(
  n0,
  _CI,
  0,
  [_CII, _IS, _ECC, _PK, _WL, _SUG, _SS],
  [0, 0, () => EC2CapacityListDefinition, 1, 1, 64 | 1, 64 | 0]
);
export var EC2Capacity = struct(n0, _ECCa, 0, [_F, _MS, _Q], [0, 0, 0]);
export var GetCatalogItemInput = struct(n0, _GCII, 0, [_CII], [[0, 1]]);
export var GetCatalogItemOutput = struct(n0, _GCIO, 0, [_CI], [() => CatalogItem]);
export var EC2CapacityListDefinition = list(n0, _ECCLD, 0, () => EC2Capacity);
export var SupportedStorageList = 64 | 0;

export var SupportedUplinkGbpsListDefinition = 64 | 1;

export var GetCatalogItem = op(
  n0,
  _GCI,
  {
    [_h]: ["GET", "/catalog/item/{CatalogItemId}", 200],
  },
  () => GetCatalogItemInput,
  () => GetCatalogItemOutput
);

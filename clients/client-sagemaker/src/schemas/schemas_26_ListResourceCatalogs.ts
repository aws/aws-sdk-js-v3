// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _CTA,
  _CTB,
  _D,
  _LRC,
  _LRCR,
  _LRCRi,
  _MR,
  _NCa,
  _NT,
  _RCAe,
  _RCes,
  _RCeso,
  _RCL,
  _RCNe,
  _SBo,
  _SO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListResourceCatalogsRequest = struct(
  n0,
  _LRCR,
  0,
  [_NCa, _CTA, _CTB, _SO, _SBo, _MR, _NT],
  [0, 4, 4, 0, 0, 1, 0]
);
export var ListResourceCatalogsResponse = struct(n0, _LRCRi, 0, [_RCes, _NT], [() => ResourceCatalogList, 0]);
export var ResourceCatalog = struct(n0, _RCeso, 0, [_RCAe, _RCNe, _D, _CT], [0, 0, 0, 4]);
export var ResourceCatalogList = list(n0, _RCL, 0, () => ResourceCatalog);
export var ListResourceCatalogs = op(
  n0,
  _LRC,
  0,
  () => ListResourceCatalogsRequest,
  () => ListResourceCatalogsResponse
);

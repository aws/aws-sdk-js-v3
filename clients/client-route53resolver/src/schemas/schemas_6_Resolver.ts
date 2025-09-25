// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _F,
  _Fi,
  _LRQLCA,
  _LRQLCAR,
  _LRQLCARi,
  _MR,
  _N,
  _NT,
  _RQLCAe,
  _RQLCAL,
  _SB,
  _SO,
  _TC,
  _TFC,
  _V,
  n0,
} from "./schemas_0";
import { ResolverQueryLogConfigAssociation } from "./schemas_4_Query";

/* eslint no-var: 0 */

export var Filter = struct(n0, _F, 0, [_N, _V], [0, 64 | 0]);
export var ListResolverQueryLogConfigAssociationsRequest = struct(
  n0,
  _LRQLCAR,
  0,
  [_MR, _NT, _Fi, _SB, _SO],
  [1, 0, () => Filters, 0, 0]
);
export var ListResolverQueryLogConfigAssociationsResponse = struct(
  n0,
  _LRQLCARi,
  0,
  [_NT, _TC, _TFC, _RQLCAe],
  [0, 1, 1, () => ResolverQueryLogConfigAssociationList]
);
export var Filters = list(n0, _Fi, 0, () => Filter);
export var FilterValues = 64 | 0;

export var ResolverQueryLogConfigAssociationList = list(n0, _RQLCAL, 0, () => ResolverQueryLogConfigAssociation);
export var ListResolverQueryLogConfigAssociations = op(
  n0,
  _LRQLCA,
  0,
  () => ListResolverQueryLogConfigAssociationsRequest,
  () => ListResolverQueryLogConfigAssociationsResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cDT,
  _CSR,
  _CSr,
  _CSRr,
  _d,
  _DGa,
  _dGA,
  _dGa,
  _DGS,
  _DS,
  _DSes,
  _DSRes,
  _DSResc,
  _DSS,
  _fR,
  _LDG,
  _LDGR,
  _LDGRi,
  _LR,
  _LRR,
  _LRRi,
  _LS,
  _LSR,
  _LSRi,
  _lUDT,
  _mRa,
  _n,
  _nT,
  _rAe,
  _Rec,
  _rec,
  _rP,
  _RS,
  _s,
  _sA,
  _Sc,
  _sc,
  _sch,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSchemaRequest = struct(n0, _CSR, 0, [_n, _sc, _d], [0, 0, 0]);
export var CreateSchemaResponse = struct(n0, _CSRr, 0, [_sA], [0]);
export var DatasetGroupSummary = struct(n0, _DGS, 0, [_n, _dGA, _s, _cDT, _lUDT, _fR, _d], [0, 0, 0, 4, 4, 0, 0]);
export var DatasetSchema = struct(n0, _DS, 0, [_n, _sA, _sc, _cDT, _lUDT, _d], [0, 0, 0, 4, 4, 0]);
export var DatasetSchemaSummary = struct(n0, _DSS, 0, [_n, _sA, _cDT, _lUDT, _d], [0, 0, 4, 4, 0]);
export var DescribeSchemaRequest = struct(n0, _DSRes, 0, [_sA], [0]);
export var DescribeSchemaResponse = struct(n0, _DSResc, 0, [_sc], [() => DatasetSchema]);
export var ListDatasetGroupsRequest = struct(n0, _LDGR, 0, [_nT, _mRa], [0, 1]);
export var ListDatasetGroupsResponse = struct(n0, _LDGRi, 0, [_dGa, _nT], [() => DatasetGroups, 0]);
export var ListRecipesRequest = struct(n0, _LRR, 0, [_rP, _nT, _mRa, _d], [0, 0, 1, 0]);
export var ListRecipesResponse = struct(n0, _LRRi, 0, [_rec, _nT], [() => Recipes, 0]);
export var ListSchemasRequest = struct(n0, _LSR, 0, [_nT, _mRa], [0, 1]);
export var ListSchemasResponse = struct(n0, _LSRi, 0, [_sch, _nT], [() => Schemas, 0]);
export var RecipeSummary = struct(n0, _RS, 0, [_n, _rAe, _s, _cDT, _lUDT, _d], [0, 0, 0, 4, 4, 0]);
export var DatasetGroups = list(n0, _DGa, 0, () => DatasetGroupSummary);
export var Recipes = list(n0, _Rec, 0, () => RecipeSummary);
export var Schemas = list(n0, _Sc, 0, () => DatasetSchemaSummary);
export var CreateSchema = op(
  n0,
  _CSr,
  2,
  () => CreateSchemaRequest,
  () => CreateSchemaResponse
);
export var DescribeSchema = op(
  n0,
  _DSes,
  2,
  () => DescribeSchemaRequest,
  () => DescribeSchemaResponse
);
export var ListDatasetGroups = op(
  n0,
  _LDG,
  2,
  () => ListDatasetGroupsRequest,
  () => ListDatasetGroupsResponse
);
export var ListRecipes = op(
  n0,
  _LR,
  2,
  () => ListRecipesRequest,
  () => ListRecipesResponse
);
export var ListSchemas = op(
  n0,
  _LS,
  2,
  () => ListSchemasRequest,
  () => ListSchemasResponse
);

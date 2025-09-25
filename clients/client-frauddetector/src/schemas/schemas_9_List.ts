// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _ADL,
  _ADLl,
  _CL,
  _CLR,
  _CLRr,
  _cT,
  _d,
  _DLel,
  _DLRel,
  _DLRele,
  _E,
  _EL,
  _el,
  _GLE,
  _GLER,
  _GLERe,
  _GLM,
  _GLMR,
  _GLMRe,
  _li,
  _mR,
  _n,
  _nT,
  _ta,
  _UL,
  _ULR,
  _ULRp,
  _uM,
  _uT,
  _vT,
  n0,
  tagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Elements = sim(n0, _E, 0, 8);
export var AllowDenyList = struct(n0, _ADL, 0, [_n, _d, _vT, _cT, _uT, _a], [0, 0, 0, 0, 0, 0]);
export var CreateListRequest = struct(
  n0,
  _CLR,
  0,
  [_n, _el, _vT, _d, _ta],
  [0, [() => ElementsList, 0], 0, 0, () => tagList]
);
export var CreateListResult = struct(n0, _CLRr, 0, [], []);
export var DeleteListRequest = struct(n0, _DLRel, 0, [_n], [0]);
export var DeleteListResult = struct(n0, _DLRele, 0, [], []);
export var GetListElementsRequest = struct(n0, _GLER, 0, [_n, _nT, _mR], [0, 0, 1]);
export var GetListElementsResult = struct(n0, _GLERe, 0, [_el, _nT], [[() => ElementsList, 0], 0]);
export var GetListsMetadataRequest = struct(n0, _GLMR, 0, [_n, _nT, _mR], [0, 0, 1]);
export var GetListsMetadataResult = struct(n0, _GLMRe, 0, [_li, _nT], [() => AllowDenyLists, 0]);
export var UpdateListRequest = struct(n0, _ULR, 0, [_n, _el, _d, _uM, _vT], [0, [() => ElementsList, 0], 0, 0, 0]);
export var UpdateListResult = struct(n0, _ULRp, 0, [], []);
export var AllowDenyLists = list(n0, _ADLl, 0, () => AllowDenyList);
export var ElementsList = list(n0, _EL, 0, [() => Elements, 0]);
export var CreateList = op(
  n0,
  _CL,
  0,
  () => CreateListRequest,
  () => CreateListResult
);
export var DeleteList = op(
  n0,
  _DLel,
  0,
  () => DeleteListRequest,
  () => DeleteListResult
);
export var GetListElements = op(
  n0,
  _GLE,
  0,
  () => GetListElementsRequest,
  () => GetListElementsResult
);
export var GetListsMetadata = op(
  n0,
  _GLM,
  0,
  () => GetListsMetadataRequest,
  () => GetListsMetadataResult
);
export var UpdateList = op(
  n0,
  _UL,
  0,
  () => UpdateListRequest,
  () => UpdateListResult
);

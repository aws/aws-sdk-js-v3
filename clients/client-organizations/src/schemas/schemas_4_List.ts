// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ChildNotFoundException as __ChildNotFoundException,
  ParentNotFoundException as __ParentNotFoundException,
} from "../models/index";
import {
  _C,
  _c,
  _Ch,
  _CI,
  _CNFE,
  _CTh,
  _e,
  _hE,
  _I,
  _LC,
  _LCR,
  _LCRi,
  _LOUFP,
  _LOUFPR,
  _LOUFPRi,
  _LP,
  _LPR,
  _LPRi,
  _M,
  _MR,
  _NT,
  _OUr,
  _Par,
  _Pare,
  _PIa,
  _PNFE,
  _T,
  n0,
} from "./schemas_0";
import { OrganizationalUnit } from "./schemas_13_Organizational";

/* eslint no-var: 0 */

export var Child = struct(n0, _C, 0, [_I, _T], [0, 0]);
export var ChildNotFoundException = error(
  n0,
  _CNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ChildNotFoundException
);
export var ListChildrenRequest = struct(n0, _LCR, 0, [_PIa, _CTh, _NT, _MR], [0, 0, 0, 1]);
export var ListChildrenResponse = struct(n0, _LCRi, 0, [_Ch, _NT], [() => Children, 0]);
export var ListOrganizationalUnitsForParentRequest = struct(n0, _LOUFPR, 0, [_PIa, _NT, _MR], [0, 0, 1]);
export var ListOrganizationalUnitsForParentResponse = struct(
  n0,
  _LOUFPRi,
  0,
  [_OUr, _NT],
  [() => OrganizationalUnits, 0]
);
export var ListParentsRequest = struct(n0, _LPR, 0, [_CI, _NT, _MR], [0, 0, 1]);
export var ListParentsResponse = struct(n0, _LPRi, 0, [_Par, _NT], [() => Parents, 0]);
export var Parent = struct(n0, _Pare, 0, [_I, _T], [0, 0]);
export var ParentNotFoundException = error(
  n0,
  _PNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ParentNotFoundException
);
export var Children = list(n0, _Ch, 0, () => Child);
export var OrganizationalUnits = list(n0, _OUr, 0, () => OrganizationalUnit);
export var Parents = list(n0, _Par, 0, () => Parent);
export var ListChildren = op(
  n0,
  _LC,
  0,
  () => ListChildrenRequest,
  () => ListChildrenResponse
);
export var ListOrganizationalUnitsForParent = op(
  n0,
  _LOUFP,
  0,
  () => ListOrganizationalUnitsForParentRequest,
  () => ListOrganizationalUnitsForParentResponse
);
export var ListParents = op(
  n0,
  _LP,
  0,
  () => ListParentsRequest,
  () => ListParentsResponse
);

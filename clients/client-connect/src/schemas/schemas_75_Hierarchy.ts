// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _HLU, _HS, _HSU, _II, _LF, _LFe, _LO, _LT, _LTe, _N, _UUHS, _UUHSR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var HierarchyLevelUpdate = struct(n0, _HLU, 0, [_N], [0]);
export var HierarchyStructureUpdate = struct(
  n0,
  _HSU,
  0,
  [_LO, _LT, _LTe, _LF, _LFe],
  [
    () => HierarchyLevelUpdate,
    () => HierarchyLevelUpdate,
    () => HierarchyLevelUpdate,
    () => HierarchyLevelUpdate,
    () => HierarchyLevelUpdate,
  ]
);
export var UpdateUserHierarchyStructureRequest = struct(
  n0,
  _UUHSR,
  0,
  [_HS, _II],
  [() => HierarchyStructureUpdate, [0, 1]]
);
export var UpdateUserHierarchyStructure = op(
  n0,
  _UUHS,
  {
    [_h]: ["POST", "/user-hierarchy-structure/{InstanceId}", 200],
  },
  () => UpdateUserHierarchyStructureRequest,
  () => Unit
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _DUHS,
  _DUHSR,
  _DUHSRe,
  _h,
  _HL,
  _HS,
  _I,
  _II,
  _LF,
  _LFe,
  _LMR,
  _LMT,
  _LO,
  _LT,
  _LTe,
  _N,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeUserHierarchyStructureRequest = struct(n0, _DUHSR, 0, [_II], [[0, 1]]);
export var DescribeUserHierarchyStructureResponse = struct(n0, _DUHSRe, 0, [_HS], [() => HierarchyStructure]);
export var HierarchyLevel = struct(n0, _HL, 0, [_I, _A, _N, _LMT, _LMR], [0, 0, 0, 4, 0]);
export var HierarchyStructure = struct(
  n0,
  _HS,
  0,
  [_LO, _LT, _LTe, _LF, _LFe],
  [() => HierarchyLevel, () => HierarchyLevel, () => HierarchyLevel, () => HierarchyLevel, () => HierarchyLevel]
);
export var DescribeUserHierarchyStructure = op(
  n0,
  _DUHS,
  {
    [_h]: ["GET", "/user-hierarchy-structure/{InstanceId}", 200],
  },
  () => DescribeUserHierarchyStructureRequest,
  () => DescribeUserHierarchyStructureResponse
);

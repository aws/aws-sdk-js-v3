// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CT, _DG, _DGA, _DGN, _DGS, _LDG, _LDGR, _LDGRi, _LMT, _MR, _NT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DatasetGroupSummary = struct(n0, _DGS, 0, [_DGA, _DGN, _CT, _LMT], [0, 0, 4, 4]);
export var ListDatasetGroupsRequest = struct(n0, _LDGR, 0, [_NT, _MR], [0, 1]);
export var ListDatasetGroupsResponse = struct(n0, _LDGRi, 0, [_DG, _NT], [() => DatasetGroups, 0]);
export var DatasetGroups = list(n0, _DG, 0, () => DatasetGroupSummary);
export var ListDatasetGroups = op(
  n0,
  _LDG,
  2,
  () => ListDatasetGroupsRequest,
  () => ListDatasetGroupsResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CDG,
  _CDGR,
  _CDGRr,
  _CT,
  _D,
  _DA,
  _Da,
  _DAa,
  _DDGe,
  _DDGRe,
  _DDGRes,
  _DGA,
  _DGN,
  _DN,
  _DSa,
  _DT,
  _LD,
  _LDR,
  _LDRi,
  _LMT,
  _MR,
  _NT,
  _St,
  _Ta,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDatasetGroupRequest = struct(n0, _CDGR, 0, [_DGN, _D, _DA, _Ta], [0, 0, 64 | 0, [() => Tags, 0]]);
export var CreateDatasetGroupResponse = struct(n0, _CDGRr, 0, [_DGA], [0]);
export var DatasetSummary = struct(n0, _DSa, 0, [_DAa, _DN, _DT, _D, _CT, _LMT], [0, 0, 0, 0, 4, 4]);
export var DescribeDatasetGroupRequest = struct(n0, _DDGRe, 0, [_DGA], [0]);
export var DescribeDatasetGroupResponse = struct(
  n0,
  _DDGRes,
  0,
  [_DGN, _DGA, _DA, _D, _St, _CT, _LMT],
  [0, 0, 64 | 0, 0, 0, 4, 4]
);
export var ListDatasetsRequest = struct(n0, _LDR, 0, [_NT, _MR], [0, 1]);
export var ListDatasetsResponse = struct(n0, _LDRi, 0, [_Da, _NT], [() => Datasets, 0]);
export var Datasets = list(n0, _Da, 0, () => DatasetSummary);
export var CreateDatasetGroup = op(
  n0,
  _CDG,
  0,
  () => CreateDatasetGroupRequest,
  () => CreateDatasetGroupResponse
);
export var DescribeDatasetGroup = op(
  n0,
  _DDGe,
  2,
  () => DescribeDatasetGroupRequest,
  () => DescribeDatasetGroupResponse
);
export var ListDatasets = op(
  n0,
  _LD,
  2,
  () => ListDatasetsRequest,
  () => ListDatasetsResponse
);

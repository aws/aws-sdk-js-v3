// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAl,
  _CNl,
  _CSl,
  _CSlu,
  _CSlus,
  _CT,
  _CTA,
  _CTB,
  _LCi,
  _LCR,
  _LCRi,
  _MR,
  _NCa,
  _NT,
  _SBo,
  _SO,
  _TPA,
  _TPAr,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterSummary = struct(n0, _CSl, 0, [_CAl, _CNl, _CT, _CSlu, _TPAr], [0, 0, 4, 0, 64 | 0]);
export var ListClustersRequest = struct(
  n0,
  _LCR,
  0,
  [_CTA, _CTB, _MR, _NCa, _NT, _SBo, _SO, _TPA],
  [4, 4, 1, 0, 0, 0, 0, 0]
);
export var ListClustersResponse = struct(n0, _LCRi, 0, [_NT, _CSlus], [0, () => ClusterSummaries]);
export var ClusterSummaries = list(n0, _CSlus, 0, () => ClusterSummary);
export var TrainingPlanArns = 64 | 0;

export var ListClusters = op(
  n0,
  _LCi,
  0,
  () => ListClustersRequest,
  () => ListClustersResponse
);

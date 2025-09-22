// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _ABK, _CERCF, _CF, _CFCERCF, _SN, _Ta, _TCERCF, _TCERCFa, _TV, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CloudFormationCostEstimationResourceCollectionFilter = struct(n0, _CFCERCF, 0, [_SN], [64 | 0]);
export var CostEstimationResourceCollectionFilter = struct(
  n0,
  _CERCF,
  0,
  [_CF, _Ta],
  [() => CloudFormationCostEstimationResourceCollectionFilter, () => TagCostEstimationResourceCollectionFilters]
);
export var TagCostEstimationResourceCollectionFilter = struct(n0, _TCERCF, 0, [_ABK, _TV], [0, 64 | 0]);
export var CostEstimationStackNames = 64 | 0;

export var CostEstimationTagValues = 64 | 0;

export var TagCostEstimationResourceCollectionFilters = list(
  n0,
  _TCERCFa,
  0,
  () => TagCostEstimationResourceCollectionFilter
);

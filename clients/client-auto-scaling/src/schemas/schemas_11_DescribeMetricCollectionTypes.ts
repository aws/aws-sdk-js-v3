// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DMCT, _DMCTA, _G, _Gr, _MCT, _MCTe, _Me, _Met, _MGT, _MGTe, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeMetricCollectionTypesAnswer = struct(
  n0,
  _DMCTA,
  0,
  [_Me, _G],
  [() => MetricCollectionTypes, () => MetricGranularityTypes]
);
export var MetricCollectionType = struct(n0, _MCT, 0, [_Met], [0]);
export var MetricGranularityType = struct(n0, _MGT, 0, [_Gr], [0]);
export var MetricCollectionTypes = list(n0, _MCTe, 0, () => MetricCollectionType);
export var MetricGranularityTypes = list(n0, _MGTe, 0, () => MetricGranularityType);
export var DescribeMetricCollectionTypes = op(
  n0,
  _DMCT,
  0,
  () => Unit,
  () => DescribeMetricCollectionTypesAnswer
);

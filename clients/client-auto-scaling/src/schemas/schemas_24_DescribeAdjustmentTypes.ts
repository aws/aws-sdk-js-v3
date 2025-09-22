// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ATd, _ATdj, _DAT, _DATA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AdjustmentType = struct(n0, _ATd, 0, [_ATd], [0]);
export var DescribeAdjustmentTypesAnswer = struct(n0, _DATA, 0, [_ATdj], [() => AdjustmentTypes]);
export var AdjustmentTypes = list(n0, _ATdj, 0, () => AdjustmentType);
export var DescribeAdjustmentTypes = op(
  n0,
  _DAT,
  0,
  () => Unit,
  () => DescribeAdjustmentTypesAnswer
);

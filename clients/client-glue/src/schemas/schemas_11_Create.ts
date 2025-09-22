// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _CPI, _CPIR, _CPIRr, _DN, _INn, _Ke, _PIar, _TN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreatePartitionIndexRequest = struct(n0, _CPIR, 0, [_CI, _DN, _TN, _PIar], [0, 0, 0, () => PartitionIndex]);
export var CreatePartitionIndexResponse = struct(n0, _CPIRr, 0, [], []);
export var PartitionIndex = struct(n0, _PIar, 0, [_Ke, _INn], [64 | 0, 0]);
export var KeyList = 64 | 0;

export var CreatePartitionIndex = op(
  n0,
  _CPI,
  0,
  () => CreatePartitionIndexRequest,
  () => CreatePartitionIndexResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _BDP, _BDPR, _BDPRa, _BDPVL, _CI, _DN, _E, _PTD, _PVL, _TN, _Val, n0 } from "./schemas_0";
import { PartitionErrors } from "./schemas_93_Partition";

/* eslint no-var: 0 */

export var BatchDeletePartitionRequest = struct(
  n0,
  _BDPR,
  0,
  [_CI, _DN, _TN, _PTD],
  [0, 0, 0, () => BatchDeletePartitionValueList]
);
export var BatchDeletePartitionResponse = struct(n0, _BDPRa, 0, [_E], [() => PartitionErrors]);
export var PartitionValueList = struct(n0, _PVL, 0, [_Val], [64 | 0]);
export var BatchDeletePartitionValueList = list(n0, _BDPVL, 0, () => PartitionValueList);
export var BatchDeletePartition = op(
  n0,
  _BDP,
  0,
  () => BatchDeletePartitionRequest,
  () => BatchDeletePartitionResponse
);

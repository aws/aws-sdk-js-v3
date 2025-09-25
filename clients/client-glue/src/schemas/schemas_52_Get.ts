// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BGP,
  _BGPR,
  _BGPRa,
  _BGPVL,
  _CI,
  _CTre,
  _DN,
  _GPe,
  _GPR,
  _GPRe,
  _LAT,
  _LATa,
  _Pa,
  _Par,
  _Part,
  _PL,
  _PTG,
  _PV,
  _SDto,
  _TN,
  _UK,
  _Val,
  n0,
  StorageDescriptor,
} from "./schemas_0";
import { PartitionValueList } from "./schemas_110_Partition";

/* eslint no-var: 0 */

export var BatchGetPartitionRequest = struct(
  n0,
  _BGPR,
  0,
  [_CI, _DN, _TN, _PTG],
  [0, 0, 0, () => BatchGetPartitionValueList]
);
export var BatchGetPartitionResponse = struct(
  n0,
  _BGPRa,
  0,
  [_Pa, _UK],
  [() => PartitionList, () => BatchGetPartitionValueList]
);
export var GetPartitionRequest = struct(n0, _GPR, 0, [_CI, _DN, _TN, _PV], [0, 0, 0, 64 | 0]);
export var GetPartitionResponse = struct(n0, _GPRe, 0, [_Part], [() => Partition]);
export var Partition = struct(
  n0,
  _Part,
  0,
  [_Val, _DN, _TN, _CTre, _LAT, _SDto, _Par, _LATa, _CI],
  [64 | 0, 0, 0, 4, 4, () => StorageDescriptor, 128 | 0, 4, 0]
);
export var BatchGetPartitionValueList = list(n0, _BGPVL, 0, () => PartitionValueList);
export var PartitionList = list(n0, _PL, 0, () => Partition);
export var BatchGetPartition = op(
  n0,
  _BGP,
  0,
  () => BatchGetPartitionRequest,
  () => BatchGetPartitionResponse
);
export var GetPartition = op(
  n0,
  _GPe,
  0,
  () => GetPartitionRequest,
  () => GetPartitionResponse
);

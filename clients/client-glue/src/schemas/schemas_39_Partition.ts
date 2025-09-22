// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BCP,
  _BCPR,
  _BCPRa,
  _BUP,
  _BUPFE,
  _BUPFL,
  _BUPR,
  _BUPRa,
  _BUPRE,
  _BUPREL,
  _CI,
  _CPR,
  _CPr,
  _CPRr,
  _DN,
  _E,
  _ED,
  _En,
  _LAT,
  _LATa,
  _Par,
  _PIa,
  _PIL,
  _PVL,
  _SDto,
  _TN,
  _UPp,
  _UPR,
  _UPRp,
  _Val,
  ErrorDetail,
  n0,
  StorageDescriptor,
} from "./schemas_0";
import { PartitionErrors } from "./schemas_93_Partition";

/* eslint no-var: 0 */

export var BatchCreatePartitionRequest = struct(
  n0,
  _BCPR,
  0,
  [_CI, _DN, _TN, _PIL],
  [0, 0, 0, () => PartitionInputList]
);
export var BatchCreatePartitionResponse = struct(n0, _BCPRa, 0, [_E], [() => PartitionErrors]);
export var BatchUpdatePartitionFailureEntry = struct(n0, _BUPFE, 0, [_PVL, _ED], [64 | 0, () => ErrorDetail]);
export var BatchUpdatePartitionRequest = struct(
  n0,
  _BUPR,
  0,
  [_CI, _DN, _TN, _En],
  [0, 0, 0, () => BatchUpdatePartitionRequestEntryList]
);
export var BatchUpdatePartitionRequestEntry = struct(n0, _BUPRE, 0, [_PVL, _PIa], [64 | 0, () => PartitionInput]);
export var BatchUpdatePartitionResponse = struct(n0, _BUPRa, 0, [_E], [() => BatchUpdatePartitionFailureList]);
export var CreatePartitionRequest = struct(n0, _CPR, 0, [_CI, _DN, _TN, _PIa], [0, 0, 0, () => PartitionInput]);
export var CreatePartitionResponse = struct(n0, _CPRr, 0, [], []);
export var PartitionInput = struct(
  n0,
  _PIa,
  0,
  [_Val, _LAT, _SDto, _Par, _LATa],
  [64 | 0, 4, () => StorageDescriptor, 128 | 0, 4]
);
export var UpdatePartitionRequest = struct(
  n0,
  _UPR,
  0,
  [_CI, _DN, _TN, _PVL, _PIa],
  [0, 0, 0, 64 | 0, () => PartitionInput]
);
export var UpdatePartitionResponse = struct(n0, _UPRp, 0, [], []);
export var BatchUpdatePartitionFailureList = list(n0, _BUPFL, 0, () => BatchUpdatePartitionFailureEntry);
export var BatchUpdatePartitionRequestEntryList = list(n0, _BUPREL, 0, () => BatchUpdatePartitionRequestEntry);
export var BoundedPartitionValueList = 64 | 0;

export var PartitionInputList = list(n0, _PIL, 0, () => PartitionInput);
export var BatchCreatePartition = op(
  n0,
  _BCP,
  0,
  () => BatchCreatePartitionRequest,
  () => BatchCreatePartitionResponse
);
export var BatchUpdatePartition = op(
  n0,
  _BUP,
  0,
  () => BatchUpdatePartitionRequest,
  () => BatchUpdatePartitionResponse
);
export var CreatePartition = op(
  n0,
  _CPr,
  0,
  () => CreatePartitionRequest,
  () => CreatePartitionResponse
);
export var UpdatePartition = op(
  n0,
  _UPp,
  0,
  () => UpdatePartitionRequest,
  () => UpdatePartitionResponse
);

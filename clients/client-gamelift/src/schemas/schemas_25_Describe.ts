// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACTIVE,
  _CIu,
  _DECIL,
  _DECILI,
  _DECILO,
  _DESIRED,
  _DFC,
  _DFCI,
  _DFCO,
  _DFLC,
  _DFLCI,
  _DFLCO,
  _ECIC,
  _ECIL,
  _ECILL,
  _ECILn,
  _ECIT,
  _FA,
  _FCL,
  _FCl,
  _FI,
  _FIl,
  _GSCGC,
  _IC,
  _IDLE,
  _IL,
  _IT,
  _L,
  _Li,
  _MAXIMUM,
  _MINIMUM,
  _NTe,
  _PENDING,
  _TERMINATING,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEC2InstanceLimitsInput = struct(n0, _DECILI, 0, [_ECIT, _L], [0, 0]);
export var DescribeEC2InstanceLimitsOutput = struct(n0, _DECILO, 0, [_ECIL], [() => EC2InstanceLimitList]);
export var DescribeFleetCapacityInput = struct(n0, _DFCI, 0, [_FIl, _Li, _NTe], [64 | 0, 1, 0]);
export var DescribeFleetCapacityOutput = struct(n0, _DFCO, 0, [_FCl, _NTe], [() => FleetCapacityList, 0]);
export var DescribeFleetLocationCapacityInput = struct(n0, _DFLCI, 0, [_FI, _L], [0, 0]);
export var DescribeFleetLocationCapacityOutput = struct(n0, _DFLCO, 0, [_FCl], [() => FleetCapacity]);
export var EC2InstanceCounts = struct(
  n0,
  _ECIC,
  0,
  [_DESIRED, _MINIMUM, _MAXIMUM, _PENDING, _ACTIVE, _IDLE, _TERMINATING],
  [1, 1, 1, 1, 1, 1, 1]
);
export var EC2InstanceLimit = struct(n0, _ECILn, 0, [_ECIT, _CIu, _IL, _L], [0, 1, 1, 0]);
export var FleetCapacity = struct(
  n0,
  _FCl,
  0,
  [_FI, _FA, _IT, _IC, _L, _GSCGC],
  [0, 0, 0, () => EC2InstanceCounts, 0, () => GameServerContainerGroupCounts]
);
export var GameServerContainerGroupCounts = struct(
  n0,
  _GSCGC,
  0,
  [_PENDING, _ACTIVE, _IDLE, _TERMINATING],
  [1, 1, 1, 1]
);
export var EC2InstanceLimitList = list(n0, _ECILL, 0, () => EC2InstanceLimit);
export var FleetCapacityList = list(n0, _FCL, 0, () => FleetCapacity);
export var DescribeEC2InstanceLimits = op(
  n0,
  _DECIL,
  0,
  () => DescribeEC2InstanceLimitsInput,
  () => DescribeEC2InstanceLimitsOutput
);
export var DescribeFleetCapacity = op(
  n0,
  _DFC,
  0,
  () => DescribeFleetCapacityInput,
  () => DescribeFleetCapacityOutput
);
export var DescribeFleetLocationCapacity = op(
  n0,
  _DFLC,
  0,
  () => DescribeFleetLocationCapacityInput,
  () => DescribeFleetLocationCapacityOutput
);

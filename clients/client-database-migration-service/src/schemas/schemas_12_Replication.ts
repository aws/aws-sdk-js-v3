// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZv,
  _DAS,
  _DORI,
  _DORIM,
  _DORIR,
  _EV,
  _IAS,
  _Ma,
  _MAS,
  _MASa,
  _MR,
  _ORI,
  _ORIL,
  _ORIr,
  _RIC,
  _RSel,
  _STtor,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeOrderableReplicationInstancesMessage = struct(n0, _DORIM, 0, [_MR, _Ma], [1, 0]);
export var DescribeOrderableReplicationInstancesResponse = struct(
  n0,
  _DORIR,
  0,
  [_ORI, _Ma],
  [[() => OrderableReplicationInstanceList, 0], 0]
);
export var OrderableReplicationInstance = struct(
  n0,
  _ORIr,
  0,
  [_EV, _RIC, _STtor, _MAS, _MASa, _DAS, _IAS, _AZv, _RSel],
  [0, 0, 0, 1, 1, 1, 1, 64 | 0, 0]
);
export var AvailabilityZonesList = 64 | 0;

export var OrderableReplicationInstanceList = list(n0, _ORIL, 0, [
  () => OrderableReplicationInstance,
  {
    [_xN]: _ORIr,
  },
]);
export var DescribeOrderableReplicationInstances = op(
  n0,
  _DORI,
  0,
  () => DescribeOrderableReplicationInstancesMessage,
  () => DescribeOrderableReplicationInstancesResponse
);

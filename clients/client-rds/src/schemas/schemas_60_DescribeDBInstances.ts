// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DBI,
  _DBII,
  _DBIL,
  _DBIM,
  _DBIn,
  _DDBIe,
  _DDBIMe,
  _Fi,
  _Ma,
  _MR,
  _xN,
  DBInstance,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DBInstanceMessage = struct(n0, _DBIM, 0, [_Ma, _DBIn], [0, [() => DBInstanceList, 0]]);
export var DescribeDBInstancesMessage = struct(
  n0,
  _DDBIMe,
  0,
  [_DBII, _Fi, _MR, _Ma],
  [0, [() => FilterList, 0], 1, 0]
);
export var DBInstanceList = list(n0, _DBIL, 0, [
  () => DBInstance,
  {
    [_xN]: _DBI,
  },
]);
export var DescribeDBInstances = op(
  n0,
  _DDBIe,
  0,
  () => DescribeDBInstancesMessage,
  () => DBInstanceMessage
);

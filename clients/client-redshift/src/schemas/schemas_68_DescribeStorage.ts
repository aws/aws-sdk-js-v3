// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSM, _DSe, _TBSIMB, _TPSIMB, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CustomerStorageMessage = struct(n0, _CSM, 0, [_TBSIMB, _TPSIMB], [1, 1]);
export var DescribeStorage = op(
  n0,
  _DSe,
  0,
  () => Unit,
  () => CustomerStorageMessage
);

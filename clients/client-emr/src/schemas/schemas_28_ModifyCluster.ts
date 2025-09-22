// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _ES, _MCI, _MCO, _MCo, _SCL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyClusterInput = struct(n0, _MCI, 0, [_CI, _SCL, _ES], [0, 1, 2]);
export var ModifyClusterOutput = struct(n0, _MCO, 0, [_SCL, _ES], [1, 2]);
export var ModifyCluster = op(
  n0,
  _MCo,
  0,
  () => ModifyClusterInput,
  () => ModifyClusterOutput
);

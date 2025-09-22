// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import { _CI, _DN, _h, _Re, _SOC, _SOCM, _TN, _UTSO, _UTSOR, _UTSORp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateTableStorageOptimizerRequest = struct(
  n0,
  _UTSOR,
  0,
  [_CI, _DN, _TN, _SOC],
  [0, 0, 0, map(n0, _SOCM, 0, 0, 128 | 0)]
);
export var UpdateTableStorageOptimizerResponse = struct(n0, _UTSORp, 0, [_Re], [0]);
export var StorageOptimizerConfig = 128 | 0;

export var StorageOptimizerConfigMap = map(n0, _SOCM, 0, 0, 128 | 0);
export var UpdateTableStorageOptimizer = op(
  n0,
  _UTSO,
  {
    [_h]: ["POST", "/UpdateTableStorageOptimizer", 200],
  },
  () => UpdateTableStorageOptimizerRequest,
  () => UpdateTableStorageOptimizerResponse
);

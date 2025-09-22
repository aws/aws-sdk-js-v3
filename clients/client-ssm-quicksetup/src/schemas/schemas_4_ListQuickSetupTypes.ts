// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _h, _LQST, _LQSTO, _LV, _QSTL, _QSTO, _T, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Configuration";

/* eslint no-var: 0 */

export var ListQuickSetupTypesOutput = struct(n0, _LQSTO, 0, [_QSTL], [() => QuickSetupTypeList]);
export var QuickSetupTypeOutput = struct(n0, _QSTO, 0, [_T, _LV], [0, 0]);
export var QuickSetupTypeList = list(n0, _QSTL, 0, () => QuickSetupTypeOutput);
export var ListQuickSetupTypes = op(
  n0,
  _LQST,
  {
    [_h]: ["GET", "/listQuickSetupTypes", 200],
  },
  () => Unit,
  () => ListQuickSetupTypesOutput
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Ac, _FA, _FI, _L, _SFA, _SFAI, _SFAIt, _SFAO, _SFAOt, _SFAt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartFleetActionsInput = struct(n0, _SFAI, 0, [_FI, _Ac, _L], [0, 64 | 0, 0]);
export var StartFleetActionsOutput = struct(n0, _SFAO, 0, [_FI, _FA], [0, 0]);
export var StopFleetActionsInput = struct(n0, _SFAIt, 0, [_FI, _Ac, _L], [0, 64 | 0, 0]);
export var StopFleetActionsOutput = struct(n0, _SFAOt, 0, [_FI, _FA], [0, 0]);
export var FleetActionList = 64 | 0;

export var StartFleetActions = op(
  n0,
  _SFA,
  0,
  () => StartFleetActionsInput,
  () => StartFleetActionsOutput
);
export var StopFleetActions = op(
  n0,
  _SFAt,
  0,
  () => StopFleetActionsInput,
  () => StopFleetActionsOutput
);

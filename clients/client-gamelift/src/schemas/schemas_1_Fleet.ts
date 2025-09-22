// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _DFLA,
  _DFLAI,
  _DFLAO,
  _FA,
  _FI,
  _L,
  _LA,
  _LAL,
  _Li,
  _Lo,
  _LSo,
  _NTe,
  _SAt,
  _SFA,
  _SFAI,
  _SFAIt,
  _SFAO,
  _SFAOt,
  _SFAt,
  _US,
  n0,
} from "./schemas_0";
import { LocationState } from "./schemas_39_Fleet";

/* eslint no-var: 0 */

export var DescribeFleetLocationAttributesInput = struct(n0, _DFLAI, 0, [_FI, _Lo, _Li, _NTe], [0, 64 | 0, 1, 0]);
export var DescribeFleetLocationAttributesOutput = struct(
  n0,
  _DFLAO,
  0,
  [_FI, _FA, _LA, _NTe],
  [0, 0, () => LocationAttributesList, 0]
);
export var LocationAttributes = struct(n0, _LA, 0, [_LSo, _SAt, _US], [() => LocationState, 64 | 0, 0]);
export var StartFleetActionsInput = struct(n0, _SFAI, 0, [_FI, _Ac, _L], [0, 64 | 0, 0]);
export var StartFleetActionsOutput = struct(n0, _SFAO, 0, [_FI, _FA], [0, 0]);
export var StopFleetActionsInput = struct(n0, _SFAIt, 0, [_FI, _Ac, _L], [0, 64 | 0, 0]);
export var StopFleetActionsOutput = struct(n0, _SFAOt, 0, [_FI, _FA], [0, 0]);
export var FleetActionList = 64 | 0;

export var LocationAttributesList = list(n0, _LAL, 0, () => LocationAttributes);
export var DescribeFleetLocationAttributes = op(
  n0,
  _DFLA,
  0,
  () => DescribeFleetLocationAttributesInput,
  () => DescribeFleetLocationAttributesOutput
);
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

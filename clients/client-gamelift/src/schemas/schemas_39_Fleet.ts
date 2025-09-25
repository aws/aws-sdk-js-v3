// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DFL,
  _DFLA,
  _DFLAI,
  _DFLAO,
  _DFLI,
  _DFLO,
  _FA,
  _FI,
  _L,
  _LA,
  _LAL,
  _Li,
  _Lo,
  _LS,
  _LSL,
  _LSo,
  _NTe,
  _SAt,
  _St,
  _US,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFleetLocationsInput = struct(n0, _DFLI, 0, [_FI, _Lo], [0, 64 | 0]);
export var DeleteFleetLocationsOutput = struct(n0, _DFLO, 0, [_FI, _FA, _LS], [0, 0, () => LocationStateList]);
export var DescribeFleetLocationAttributesInput = struct(n0, _DFLAI, 0, [_FI, _Lo, _Li, _NTe], [0, 64 | 0, 1, 0]);
export var DescribeFleetLocationAttributesOutput = struct(
  n0,
  _DFLAO,
  0,
  [_FI, _FA, _LA, _NTe],
  [0, 0, () => LocationAttributesList, 0]
);
export var LocationAttributes = struct(n0, _LA, 0, [_LSo, _SAt, _US], [() => LocationState, 64 | 0, 0]);
export var LocationState = struct(n0, _LSo, 0, [_L, _St], [0, 0]);
export var LocationAttributesList = list(n0, _LAL, 0, () => LocationAttributes);
export var LocationStateList = list(n0, _LSL, 0, () => LocationState);
export var DeleteFleetLocations = op(
  n0,
  _DFL,
  0,
  () => DeleteFleetLocationsInput,
  () => DeleteFleetLocationsOutput
);
export var DescribeFleetLocationAttributes = op(
  n0,
  _DFLA,
  0,
  () => DescribeFleetLocationAttributesInput,
  () => DescribeFleetLocationAttributesOutput
);

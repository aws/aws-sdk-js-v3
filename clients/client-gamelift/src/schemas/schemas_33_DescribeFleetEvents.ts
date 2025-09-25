// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Cou,
  _DFE,
  _DFEI,
  _DFEO,
  _E,
  _EC,
  _EI,
  _EL,
  _ET,
  _ETv,
  _Ev,
  _FI,
  _Li,
  _M,
  _NTe,
  _PSLU,
  _RI,
  _STt,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeFleetEventsInput = struct(n0, _DFEI, 0, [_FI, _STt, _ET, _Li, _NTe], [0, 4, 4, 1, 0]);
export var DescribeFleetEventsOutput = struct(n0, _DFEO, 0, [_E, _NTe], [() => EventList, 0]);
export var Event = struct(n0, _Ev, 0, [_EI, _RI, _EC, _M, _ETv, _PSLU, _Cou], [0, 0, 0, 0, 4, 0, 1]);
export var EventList = list(n0, _EL, 0, () => Event);
export var DescribeFleetEvents = op(
  n0,
  _DFE,
  0,
  () => DescribeFleetEventsInput,
  () => DescribeFleetEventsOutput
);

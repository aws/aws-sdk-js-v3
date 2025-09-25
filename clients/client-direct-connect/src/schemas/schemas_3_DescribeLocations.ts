// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aMSPS, _aP, _aPS, _DLesc, _lCo, _LLo, _lNo, _Loc, _loc, _Loca, _r, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var Location = struct(n0, _Loc, 0, [_lCo, _lNo, _r, _aPS, _aP, _aMSPS], [0, 0, 0, 64 | 0, 64 | 0, 64 | 0]);
export var Locations = struct(n0, _Loca, 0, [_loc], [() => LocationList]);
export var AvailableMacSecPortSpeeds = 64 | 0;

export var AvailablePortSpeeds = 64 | 0;

export var LocationList = list(n0, _LLo, 0, () => Location);
export var ProviderList = 64 | 0;

export var DescribeLocations = op(
  n0,
  _DLesc,
  0,
  () => Unit,
  () => Locations
);

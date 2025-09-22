// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import {
  _Acc,
  _EAx,
  _ERN,
  _ICOU,
  _Re,
  _Ta,
  _TLAC,
  _TLar,
  _TLMC,
  _TLME,
  _TMC,
  _TME,
  AlarmConfiguration,
  n0,
  Targets,
} from "./schemas_0";

/* eslint no-var: 0 */

export var TargetLocation = struct(
  n0,
  _TLar,
  0,
  [_Acc, _Re, _TLMC, _TLME, _ERN, _TLAC, _ICOU, _EAx, _Ta, _TMC, _TME],
  [64 | 0, 64 | 0, 0, 0, 0, () => AlarmConfiguration, 2, 64 | 0, () => Targets, 0, 0]
);
export var Accounts = 64 | 0;

export var ExcludeAccounts = 64 | 0;

export var Regions = 64 | 0;

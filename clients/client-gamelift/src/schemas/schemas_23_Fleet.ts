// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidFleetStatusException as __InvalidFleetStatusException } from "../models/index";
import {
  _c,
  _CFLI,
  _CFLO,
  _CFLr,
  _DF,
  _DFI,
  _DIe,
  _e,
  _FA,
  _FI,
  _IFSE,
  _IPA,
  _IPR,
  _L,
  _Lo,
  _LS,
  _M,
  _MS,
  _MSa,
  _RC,
  _UFC,
  _UFCI,
  _UFCO,
  _UFPS,
  _UFPSI,
  _UFPSO,
  _URC,
  _URCI,
  _URCO,
  n0,
  Unit,
} from "./schemas_0";
import { RuntimeConfiguration } from "./schemas_4_Describe";
import { LocationStateList } from "./schemas_39_Fleet";
import { IpPermissionsList } from "./schemas_42_Fleet";
import { LocationConfigurationList } from "./schemas_50_Fleet";

/* eslint no-var: 0 */

export var CreateFleetLocationsInput = struct(n0, _CFLI, 0, [_FI, _Lo], [0, () => LocationConfigurationList]);
export var CreateFleetLocationsOutput = struct(n0, _CFLO, 0, [_FI, _FA, _LS], [0, 0, () => LocationStateList]);
export var DeleteFleetInput = struct(n0, _DFI, 0, [_FI], [0]);
export var InvalidFleetStatusException = error(
  n0,
  _IFSE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidFleetStatusException
);
export var UpdateFleetCapacityInput = struct(n0, _UFCI, 0, [_FI, _DIe, _MS, _MSa, _L], [0, 1, 1, 1, 0]);
export var UpdateFleetCapacityOutput = struct(n0, _UFCO, 0, [_FI, _FA, _L], [0, 0, 0]);
export var UpdateFleetPortSettingsInput = struct(
  n0,
  _UFPSI,
  0,
  [_FI, _IPA, _IPR],
  [0, [() => IpPermissionsList, 0], [() => IpPermissionsList, 0]]
);
export var UpdateFleetPortSettingsOutput = struct(n0, _UFPSO, 0, [_FI, _FA], [0, 0]);
export var UpdateRuntimeConfigurationInput = struct(n0, _URCI, 0, [_FI, _RC], [0, () => RuntimeConfiguration]);
export var UpdateRuntimeConfigurationOutput = struct(n0, _URCO, 0, [_RC], [() => RuntimeConfiguration]);
export var CreateFleetLocations = op(
  n0,
  _CFLr,
  0,
  () => CreateFleetLocationsInput,
  () => CreateFleetLocationsOutput
);
export var DeleteFleet = op(
  n0,
  _DF,
  0,
  () => DeleteFleetInput,
  () => Unit
);
export var UpdateFleetCapacity = op(
  n0,
  _UFC,
  0,
  () => UpdateFleetCapacityInput,
  () => UpdateFleetCapacityOutput
);
export var UpdateFleetPortSettings = op(
  n0,
  _UFPS,
  0,
  () => UpdateFleetPortSettingsInput,
  () => UpdateFleetPortSettingsOutput
);
export var UpdateRuntimeConfiguration = op(
  n0,
  _URC,
  0,
  () => UpdateRuntimeConfigurationInput,
  () => UpdateRuntimeConfigurationOutput
);

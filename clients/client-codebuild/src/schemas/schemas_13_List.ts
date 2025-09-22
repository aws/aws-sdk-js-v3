// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _f, _i, _LF, _LFI, _LFO, _LSFP, _LSFPI, _LSFPO, _mR, _nT, _pN, _sB, _sO, _SS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveString = sim(n0, _SS, 0, 8);
export var ListFleetsInput = struct(n0, _LFI, 0, [_nT, _mR, _sO, _sB], [[() => SensitiveString, 0], 1, 0, 0]);
export var ListFleetsOutput = struct(n0, _LFO, 0, [_nT, _f], [0, 64 | 0]);
export var ListSandboxesForProjectInput = struct(
  n0,
  _LSFPI,
  0,
  [_pN, _mR, _sO, _nT],
  [0, 1, 0, [() => SensitiveString, 0]]
);
export var ListSandboxesForProjectOutput = struct(n0, _LSFPO, 0, [_i, _nT], [64 | 0, 0]);
export var FleetArns = 64 | 0;

export var ListFleets = op(
  n0,
  _LF,
  0,
  () => ListFleetsInput,
  () => ListFleetsOutput
);
export var ListSandboxesForProject = op(
  n0,
  _LSFP,
  0,
  () => ListSandboxesForProjectInput,
  () => ListSandboxesForProjectOutput
);

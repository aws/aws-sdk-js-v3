// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _DC,
  _DI,
  _DS,
  _FD,
  _FDl,
  _FI,
  _GSBA,
  _ISm,
  _LFD,
  _LFDI,
  _LFDO,
  _Li,
  _MHP,
  _NTe,
  _PIBA,
  _PSr,
  _RGSBA,
  _RPIBA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeploymentConfiguration = struct(n0, _DC, 0, [_PSr, _MHP, _ISm], [0, 1, 0]);
export var FleetDeployment = struct(
  n0,
  _FD,
  0,
  [_DI, _FI, _GSBA, _RGSBA, _PIBA, _RPIBA, _DS, _DC, _CT],
  [0, 0, 0, 0, 0, 0, 0, () => DeploymentConfiguration, 4]
);
export var ListFleetDeploymentsInput = struct(n0, _LFDI, 0, [_FI, _Li, _NTe], [0, 1, 0]);
export var ListFleetDeploymentsOutput = struct(n0, _LFDO, 0, [_FDl, _NTe], [() => FleetDeployments, 0]);
export var FleetDeployments = list(n0, _FDl, 0, () => FleetDeployment);
export var ListFleetDeployments = op(
  n0,
  _LFD,
  0,
  () => ListFleetDeploymentsInput,
  () => ListFleetDeploymentsOutput
);

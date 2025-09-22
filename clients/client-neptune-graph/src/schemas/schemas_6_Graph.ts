// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPGE, _DPGEI, _DPGEO, _gIr, _GPGE, _GPGEI, _GPGEO, _h, _sI, _st, _vEI, _vI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePrivateGraphEndpointInput = struct(
  n0,
  _DPGEI,
  0,
  [_gIr, _vI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeletePrivateGraphEndpointOutput = struct(n0, _DPGEO, 0, [_vI, _sI, _st, _vEI], [0, 64 | 0, 0, 0]);
export var GetPrivateGraphEndpointInput = struct(
  n0,
  _GPGEI,
  0,
  [_gIr, _vI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetPrivateGraphEndpointOutput = struct(n0, _GPGEO, 0, [_vI, _sI, _st, _vEI], [0, 64 | 0, 0, 0]);
export var SubnetIds = 64 | 0;

export var DeletePrivateGraphEndpoint = op(
  n0,
  _DPGE,
  {
    [_h]: ["DELETE", "/graphs/{graphIdentifier}/endpoints/{vpcId}", 200],
  },
  () => DeletePrivateGraphEndpointInput,
  () => DeletePrivateGraphEndpointOutput
);
export var GetPrivateGraphEndpoint = op(
  n0,
  _GPGE,
  {
    [_h]: ["GET", "/graphs/{graphIdentifier}/endpoints/{vpcId}", 200],
  },
  () => GetPrivateGraphEndpointInput,
  () => GetPrivateGraphEndpointOutput
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _C,
  _CLFOI,
  _CLFOIR,
  _CLFOIRr,
  _DLFOI,
  _DLFOIR,
  _DLFOIRe,
  _Ex,
  _h,
  _P,
  _R,
  DataLakePrincipal,
  n0,
} from "./schemas_0";
import { Resource } from "./schemas_14_Permissions";

/* eslint no-var: 0 */

export var Condition = struct(n0, _C, 0, [_Ex], [0]);
export var CreateLakeFormationOptInRequest = struct(
  n0,
  _CLFOIR,
  0,
  [_P, _R, _C],
  [() => DataLakePrincipal, () => Resource, () => Condition]
);
export var CreateLakeFormationOptInResponse = struct(n0, _CLFOIRr, 0, [], []);
export var DeleteLakeFormationOptInRequest = struct(
  n0,
  _DLFOIR,
  0,
  [_P, _R, _C],
  [() => DataLakePrincipal, () => Resource, () => Condition]
);
export var DeleteLakeFormationOptInResponse = struct(n0, _DLFOIRe, 0, [], []);
export var CreateLakeFormationOptIn = op(
  n0,
  _CLFOI,
  {
    [_h]: ["POST", "/CreateLakeFormationOptIn", 200],
  },
  () => CreateLakeFormationOptInRequest,
  () => CreateLakeFormationOptInResponse
);
export var DeleteLakeFormationOptIn = op(
  n0,
  _DLFOI,
  {
    [_h]: ["POST", "/DeleteLakeFormationOptIn", 200],
  },
  () => DeleteLakeFormationOptInRequest,
  () => DeleteLakeFormationOptInResponse
);

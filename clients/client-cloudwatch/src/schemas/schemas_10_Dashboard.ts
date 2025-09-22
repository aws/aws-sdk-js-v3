// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DashboardInvalidInputError as __DashboardInvalidInputError,
  DashboardNotFoundError as __DashboardNotFoundError,
} from "../models/index";
import {
  _aQE,
  _c,
  _DA,
  _DB,
  _DD,
  _DDI,
  _DDO,
  _DIIE,
  _DN,
  _DNa,
  _DNFE,
  _DP,
  _DVM,
  _dVM,
  _DVMa,
  _e,
  _GD,
  _GDI,
  _GDO,
  _hE,
  _M,
  _m,
  _PD,
  _PDI,
  _PDO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DashboardInvalidInputError = error(
  n0,
  _DIIE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidParameterInput`, 400],
  },
  [_m, _dVM],
  [0, () => DashboardValidationMessages],

  __DashboardInvalidInputError
);
export var DashboardNotFoundError = error(
  n0,
  _DNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ResourceNotFound`, 404],
  },
  [_m],
  [0],

  __DashboardNotFoundError
);
export var DashboardValidationMessage = struct(n0, _DVM, 0, [_DP, _M], [0, 0]);
export var DeleteDashboardsInput = struct(n0, _DDI, 0, [_DNa], [64 | 0]);
export var DeleteDashboardsOutput = struct(n0, _DDO, 0, [], []);
export var GetDashboardInput = struct(n0, _GDI, 0, [_DN], [0]);
export var GetDashboardOutput = struct(n0, _GDO, 0, [_DA, _DB, _DN], [0, 0, 0]);
export var PutDashboardInput = struct(n0, _PDI, 0, [_DN, _DB], [0, 0]);
export var PutDashboardOutput = struct(n0, _PDO, 0, [_DVMa], [() => DashboardValidationMessages]);
export var DashboardNames = 64 | 0;

export var DashboardValidationMessages = list(n0, _DVMa, 0, () => DashboardValidationMessage);
export var DeleteDashboards = op(
  n0,
  _DD,
  0,
  () => DeleteDashboardsInput,
  () => DeleteDashboardsOutput
);
export var GetDashboard = op(
  n0,
  _GD,
  0,
  () => GetDashboardInput,
  () => GetDashboardOutput
);
export var PutDashboard = op(
  n0,
  _PD,
  0,
  () => PutDashboardInput,
  () => PutDashboardOutput
);

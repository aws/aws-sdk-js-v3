// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DirectoryInDesiredStateException as __DirectoryInDesiredStateException } from "../models/index";
import {
  _c,
  _CSBU,
  _DDDAi,
  _DDDARi,
  _DDDARis,
  _DI,
  _DIDSE,
  _e,
  _EDDA,
  _EDDAR,
  _EDDARn,
  _M,
  _OSUS,
  _RI,
  _UDS,
  _UDSR,
  _UDSRp,
  _UT,
  n0,
} from "./schemas_0";
import { OSUpdateSettings } from "./schemas_45_Describe";

/* eslint no-var: 0 */

export var DirectoryInDesiredStateException = error(
  n0,
  _DIDSE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __DirectoryInDesiredStateException
);
export var DisableDirectoryDataAccessRequest = struct(n0, _DDDARi, 0, [_DI], [0]);
export var DisableDirectoryDataAccessResult = struct(n0, _DDDARis, 0, [], []);
export var EnableDirectoryDataAccessRequest = struct(n0, _EDDAR, 0, [_DI], [0]);
export var EnableDirectoryDataAccessResult = struct(n0, _EDDARn, 0, [], []);
export var UpdateDirectorySetupRequest = struct(
  n0,
  _UDSR,
  0,
  [_DI, _UT, _OSUS, _CSBU],
  [0, 0, () => OSUpdateSettings, 2]
);
export var UpdateDirectorySetupResult = struct(n0, _UDSRp, 0, [], []);
export var DisableDirectoryDataAccess = op(
  n0,
  _DDDAi,
  0,
  () => DisableDirectoryDataAccessRequest,
  () => DisableDirectoryDataAccessResult
);
export var EnableDirectoryDataAccess = op(
  n0,
  _EDDA,
  0,
  () => EnableDirectoryDataAccessRequest,
  () => EnableDirectoryDataAccessResult
);
export var UpdateDirectorySetup = op(
  n0,
  _UDS,
  0,
  () => UpdateDirectorySetupRequest,
  () => UpdateDirectorySetupResult
);

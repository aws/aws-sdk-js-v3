// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TenantDatabaseNotFoundFault as __TenantDatabaseNotFoundFault } from "../models/index";
import {
  _aQE,
  _c,
  _DBII,
  _DTD,
  _DTDM,
  _DTDR,
  _e,
  _FDBSI,
  _hE,
  _m,
  _MMUP,
  _MTD,
  _MTDM,
  _MTDR,
  _MUP,
  _MUSKKI,
  _NTDBN,
  _RMUP,
  _SFS,
  _TD,
  _TDBN,
  _TDNFF,
  n0,
} from "./schemas_0";
import { SensitiveString, TenantDatabase } from "./schemas_59_Tenant";

/* eslint no-var: 0 */

export var DeleteTenantDatabaseMessage = struct(n0, _DTDM, 0, [_DBII, _TDBN, _SFS, _FDBSI], [0, 0, 2, 0]);
export var DeleteTenantDatabaseResult = struct(n0, _DTDR, 0, [_TD], [[() => TenantDatabase, 0]]);
export var ModifyTenantDatabaseMessage = struct(
  n0,
  _MTDM,
  0,
  [_DBII, _TDBN, _MUP, _NTDBN, _MMUP, _RMUP, _MUSKKI],
  [0, 0, [() => SensitiveString, 0], 0, 2, 2, 0]
);
export var ModifyTenantDatabaseResult = struct(n0, _MTDR, 0, [_TD], [[() => TenantDatabase, 0]]);
export var TenantDatabaseNotFoundFault = error(
  n0,
  _TDNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`TenantDatabaseNotFound`, 404],
  },
  [_m],
  [0],

  __TenantDatabaseNotFoundFault
);
export var DeleteTenantDatabase = op(
  n0,
  _DTD,
  0,
  () => DeleteTenantDatabaseMessage,
  () => DeleteTenantDatabaseResult
);
export var ModifyTenantDatabase = op(
  n0,
  _MTD,
  0,
  () => ModifyTenantDatabaseMessage,
  () => ModifyTenantDatabaseResult
);

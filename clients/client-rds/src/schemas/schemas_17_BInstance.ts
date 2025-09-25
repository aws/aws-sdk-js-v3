// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TenantDatabaseQuotaExceededFault as __TenantDatabaseQuotaExceededFault } from "../models/index";
import {
  _aQE,
  _c,
  _CSN,
  _CTD,
  _CTDM,
  _CTDR,
  _DBII,
  _e,
  _hE,
  _m,
  _MMUP,
  _MU,
  _MUP,
  _MUSKKI,
  _NCSN,
  _T,
  _TD,
  _TDBN,
  _TDQEF,
  n0,
  TagList,
} from "./schemas_0";
import { SensitiveString, TenantDatabase } from "./schemas_59_Tenant";

/* eslint no-var: 0 */

export var CreateTenantDatabaseMessage = struct(
  n0,
  _CTDM,
  0,
  [_DBII, _TDBN, _MU, _MUP, _CSN, _NCSN, _MMUP, _MUSKKI, _T],
  [0, 0, 0, [() => SensitiveString, 0], 0, 0, 2, 0, [() => TagList, 0]]
);
export var CreateTenantDatabaseResult = struct(n0, _CTDR, 0, [_TD], [[() => TenantDatabase, 0]]);
export var TenantDatabaseQuotaExceededFault = error(
  n0,
  _TDQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TenantDatabaseQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __TenantDatabaseQuotaExceededFault
);
export var CreateTenantDatabase = op(
  n0,
  _CTD,
  0,
  () => CreateTenantDatabaseMessage,
  () => CreateTenantDatabaseResult
);

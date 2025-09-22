// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { TenantDatabaseAlreadyExistsFault as __TenantDatabaseAlreadyExistsFault } from "../models/index";
import {
  _aQE,
  _c,
  _CSN,
  _DBII,
  _DP,
  _DRI,
  _DTDe,
  _DTDMe,
  _e,
  _Fi,
  _hE,
  _m,
  _Ma,
  _MR,
  _MU,
  _MUP,
  _MUS,
  _NCSN,
  _PMV,
  _SS,
  _St,
  _TD,
  _TDAEF,
  _TDARN,
  _TDBN,
  _TDCT,
  _TDe,
  _TDL,
  _TDM,
  _TDPMV,
  _TDRI,
  _TL,
  _xN,
  FilterList,
  MasterUserSecret,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveString = sim(n0, _SS, 0, 8);
export var DescribeTenantDatabasesMessage = struct(
  n0,
  _DTDMe,
  0,
  [_DBII, _TDBN, _Fi, _Ma, _MR],
  [0, 0, [() => FilterList, 0], 0, 1]
);
export var TenantDatabase = struct(
  n0,
  _TD,
  0,
  [_TDCT, _DBII, _TDBN, _St, _MU, _DRI, _TDRI, _TDARN, _CSN, _NCSN, _DP, _PMV, _MUS, _TL],
  [
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    [() => TenantDatabasePendingModifiedValues, 0],
    () => MasterUserSecret,
    [() => TagList, 0],
  ]
);
export var TenantDatabaseAlreadyExistsFault = error(
  n0,
  _TDAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TenantDatabaseAlreadyExists`, 400],
  },
  [_m],
  [0],

  __TenantDatabaseAlreadyExistsFault
);
export var TenantDatabasePendingModifiedValues = struct(n0, _TDPMV, 0, [_MUP, _TDBN], [[() => SensitiveString, 0], 0]);
export var TenantDatabasesMessage = struct(n0, _TDM, 0, [_Ma, _TDe], [0, [() => TenantDatabasesList, 0]]);
export var TenantDatabasesList = list(n0, _TDL, 0, [
  () => TenantDatabase,
  {
    [_xN]: _TD,
  },
]);
export var DescribeTenantDatabases = op(
  n0,
  _DTDe,
  0,
  () => DescribeTenantDatabasesMessage,
  () => TenantDatabasesMessage
);

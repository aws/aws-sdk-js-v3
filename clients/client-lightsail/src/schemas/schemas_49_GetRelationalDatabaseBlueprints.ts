// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _bI,
  _bl,
  _eDn,
  _eng,
  _eV,
  _eVD,
  _GRDB,
  _GRDBR,
  _GRDBRe,
  _ht,
  _iED,
  _nPT,
  _pT,
  _RDB,
  _RDBL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetRelationalDatabaseBlueprintsRequest = struct(n0, _GRDBR, 0, [_pT], [0]);
export var GetRelationalDatabaseBlueprintsResult = struct(
  n0,
  _GRDBRe,
  0,
  [_bl, _nPT],
  [() => RelationalDatabaseBlueprintList, 0]
);
export var RelationalDatabaseBlueprint = struct(n0, _RDB, 0, [_bI, _eng, _eV, _eDn, _eVD, _iED], [0, 0, 0, 0, 0, 2]);
export var RelationalDatabaseBlueprintList = list(n0, _RDBL, 0, () => RelationalDatabaseBlueprint);
export var GetRelationalDatabaseBlueprints = op(
  n0,
  _GRDB,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetRelationalDatabaseBlueprints", 200],
  },
  () => GetRelationalDatabaseBlueprintsRequest,
  () => GetRelationalDatabaseBlueprintsResult
);

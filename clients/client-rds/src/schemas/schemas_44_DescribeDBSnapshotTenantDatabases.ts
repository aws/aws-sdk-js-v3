// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CSN,
  _DBII,
  _DBSIn,
  _DBSTD,
  _DBSTDARN,
  _DBSTDL,
  _DBSTDM,
  _DBSTDn,
  _DDBSTD,
  _DDBSTDM,
  _DRI,
  _EN,
  _Fi,
  _Ma,
  _MR,
  _MU,
  _NCSN,
  _STna,
  _TDBN,
  _TDCT,
  _TDRI,
  _TL,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DBSnapshotTenantDatabase = struct(
  n0,
  _DBSTD,
  0,
  [_DBSIn, _DBII, _DRI, _EN, _STna, _TDCT, _TDBN, _MU, _TDRI, _CSN, _DBSTDARN, _NCSN, _TL],
  [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, [() => TagList, 0]]
);
export var DBSnapshotTenantDatabasesMessage = struct(
  n0,
  _DBSTDM,
  0,
  [_Ma, _DBSTDn],
  [0, [() => DBSnapshotTenantDatabasesList, 0]]
);
export var DescribeDBSnapshotTenantDatabasesMessage = struct(
  n0,
  _DDBSTDM,
  0,
  [_DBII, _DBSIn, _STna, _Fi, _MR, _Ma, _DRI],
  [0, 0, 0, [() => FilterList, 0], 1, 0, 0]
);
export var DBSnapshotTenantDatabasesList = list(n0, _DBSTDL, 0, [
  () => DBSnapshotTenantDatabase,
  {
    [_xN]: _DBSTD,
  },
]);
export var DescribeDBSnapshotTenantDatabases = op(
  n0,
  _DDBSTD,
  0,
  () => DescribeDBSnapshotTenantDatabasesMessage,
  () => DBSnapshotTenantDatabasesMessage
);

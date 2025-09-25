// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZv,
  _CCT,
  _CDBCS,
  _CDBCSM,
  _CDBCSMr,
  _CDBCSR,
  _CDBCSr,
  _CDBCSRr,
  _CTo,
  _DBCI,
  _DBCS,
  _DBCSA,
  _DBCSI,
  _DBCSL,
  _DBCSl,
  _DBCSM,
  _DDBCS,
  _DDBCSe,
  _DDBCSM,
  _DDBCSMe,
  _DDBCSR,
  _E,
  _EV,
  _F,
  _IP,
  _IS,
  _KKI,
  _M,
  _MR,
  _MU,
  _P,
  _PP,
  _PSU,
  _S,
  _SCT,
  _SDBCSA,
  _SDBCSI,
  _SE,
  _ST,
  _STn,
  _T,
  _TDBCSI,
  _VI,
  _xN,
  AvailabilityZones,
  FilterList,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_12_BCluster";

/* eslint no-var: 0 */

export var CopyDBClusterSnapshotMessage = struct(
  n0,
  _CDBCSM,
  0,
  [_SDBCSI, _TDBCSI, _KKI, _PSU, _CTo, _T],
  [0, 0, 0, 0, 2, [() => TagList, 0]]
);
export var CopyDBClusterSnapshotResult = struct(n0, _CDBCSR, 0, [_DBCS], [[() => DBClusterSnapshot, 0]]);
export var CreateDBClusterSnapshotMessage = struct(n0, _CDBCSMr, 0, [_DBCSI, _DBCI, _T], [0, 0, [() => TagList, 0]]);
export var CreateDBClusterSnapshotResult = struct(n0, _CDBCSRr, 0, [_DBCS], [[() => DBClusterSnapshot, 0]]);
export var DBClusterSnapshot = struct(
  n0,
  _DBCS,
  0,
  [_AZv, _DBCSI, _DBCI, _SCT, _E, _S, _P, _VI, _CCT, _MU, _EV, _STn, _PP, _SE, _KKI, _DBCSA, _SDBCSA, _ST],
  [[() => AvailabilityZones, 0], 0, 0, 4, 0, 0, 1, 0, 4, 0, 0, 0, 1, 2, 0, 0, 0, 0]
);
export var DBClusterSnapshotMessage = struct(n0, _DBCSM, 0, [_M, _DBCSl], [0, [() => DBClusterSnapshotList, 0]]);
export var DeleteDBClusterSnapshotMessage = struct(n0, _DDBCSM, 0, [_DBCSI], [0]);
export var DeleteDBClusterSnapshotResult = struct(n0, _DDBCSR, 0, [_DBCS], [[() => DBClusterSnapshot, 0]]);
export var DescribeDBClusterSnapshotsMessage = struct(
  n0,
  _DDBCSMe,
  0,
  [_DBCI, _DBCSI, _STn, _F, _MR, _M, _IS, _IP],
  [0, 0, 0, [() => FilterList, 0], 1, 0, 2, 2]
);
export var DBClusterSnapshotList = list(n0, _DBCSL, 0, [
  () => DBClusterSnapshot,
  {
    [_xN]: _DBCS,
  },
]);
export var CopyDBClusterSnapshot = op(
  n0,
  _CDBCS,
  0,
  () => CopyDBClusterSnapshotMessage,
  () => CopyDBClusterSnapshotResult
);
export var CreateDBClusterSnapshot = op(
  n0,
  _CDBCSr,
  0,
  () => CreateDBClusterSnapshotMessage,
  () => CreateDBClusterSnapshotResult
);
export var DeleteDBClusterSnapshot = op(
  n0,
  _DDBCS,
  0,
  () => DeleteDBClusterSnapshotMessage,
  () => DeleteDBClusterSnapshotResult
);
export var DescribeDBClusterSnapshots = op(
  n0,
  _DDBCSe,
  0,
  () => DescribeDBClusterSnapshotsMessage,
  () => DBClusterSnapshotMessage
);

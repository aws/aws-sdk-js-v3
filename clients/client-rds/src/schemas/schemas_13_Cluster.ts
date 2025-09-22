// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DBClusterSnapshotNotFoundFault as __DBClusterSnapshotNotFoundFault,
  ExportTaskAlreadyExistsFault as __ExportTaskAlreadyExistsFault,
  IamRoleMissingPermissionsFault as __IamRoleMissingPermissionsFault,
  IamRoleNotFoundFault as __IamRoleNotFoundFault,
  InvalidExportOnlyFault as __InvalidExportOnlyFault,
  InvalidExportSourceStateFault as __InvalidExportSourceStateFault,
} from "../models/index";
import {
  _AN,
  _aQE,
  _AVt,
  _c,
  _CDBCS,
  _CDBCSM,
  _CDBCSR,
  _CTo,
  _DBCI,
  _DBCS,
  _DBCSAL,
  _DBCSAl,
  _DBCSAlu,
  _DBCSAR,
  _DBCSI,
  _DBCSL,
  _DBCSl,
  _DBCSM,
  _DBCSNFF,
  _DCRI,
  _DDBCS,
  _DDBCSA,
  _DDBCSAM,
  _DDBCSAR,
  _DDBCSe,
  _DDBCSM,
  _DDBCSMe,
  _DDBCSR,
  _e,
  _EO,
  _ETAEF,
  _ETI,
  _Fi,
  _hE,
  _IEOF,
  _IESSFn,
  _IP,
  _IRA,
  _IRMPF,
  _IRNFF,
  _IS,
  _KKI,
  _m,
  _Ma,
  _MDBCSA,
  _MDBCSAM,
  _MDBCSAR,
  _MR,
  _PSU,
  _SA,
  _SBN,
  _SDBCSI,
  _SET,
  _SETM,
  _SP,
  _STna,
  _T,
  _TDBCSI,
  _VTA,
  _VTR,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";
import { ExportTask } from "./schemas_9_Export";
import { AttributeValueList } from "./schemas_61_Snapshot";
import { DBClusterSnapshot } from "./schemas_73_DBCluster";

/* eslint no-var: 0 */

export var CopyDBClusterSnapshotMessage = struct(
  n0,
  _CDBCSM,
  0,
  [_SDBCSI, _TDBCSI, _KKI, _PSU, _CTo, _T],
  [0, 0, 0, 0, 2, [() => TagList, 0]]
);
export var CopyDBClusterSnapshotResult = struct(n0, _CDBCSR, 0, [_DBCS], [[() => DBClusterSnapshot, 0]]);
export var DBClusterSnapshotAttribute = struct(n0, _DBCSAl, 0, [_AN, _AVt], [0, [() => AttributeValueList, 0]]);
export var DBClusterSnapshotAttributesResult = struct(
  n0,
  _DBCSAR,
  0,
  [_DBCSI, _DBCSAlu],
  [0, [() => DBClusterSnapshotAttributeList, 0]]
);
export var DBClusterSnapshotMessage = struct(n0, _DBCSM, 0, [_Ma, _DBCSl], [0, [() => DBClusterSnapshotList, 0]]);
export var DBClusterSnapshotNotFoundFault = error(
  n0,
  _DBCSNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBClusterSnapshotNotFoundFault`, 404],
  },
  [_m],
  [0],

  __DBClusterSnapshotNotFoundFault
);
export var DeleteDBClusterSnapshotMessage = struct(n0, _DDBCSM, 0, [_DBCSI], [0]);
export var DeleteDBClusterSnapshotResult = struct(n0, _DDBCSR, 0, [_DBCS], [[() => DBClusterSnapshot, 0]]);
export var DescribeDBClusterSnapshotAttributesMessage = struct(n0, _DDBCSAM, 0, [_DBCSI], [0]);
export var DescribeDBClusterSnapshotAttributesResult = struct(
  n0,
  _DDBCSAR,
  0,
  [_DBCSAR],
  [[() => DBClusterSnapshotAttributesResult, 0]]
);
export var DescribeDBClusterSnapshotsMessage = struct(
  n0,
  _DDBCSMe,
  0,
  [_DBCI, _DBCSI, _STna, _Fi, _MR, _Ma, _IS, _IP, _DCRI],
  [0, 0, 0, [() => FilterList, 0], 1, 0, 2, 2, 0]
);
export var ExportTaskAlreadyExistsFault = error(
  n0,
  _ETAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ExportTaskAlreadyExists`, 400],
  },
  [_m],
  [0],

  __ExportTaskAlreadyExistsFault
);
export var IamRoleMissingPermissionsFault = error(
  n0,
  _IRMPF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`IamRoleMissingPermissions`, 400],
  },
  [_m],
  [0],

  __IamRoleMissingPermissionsFault
);
export var IamRoleNotFoundFault = error(
  n0,
  _IRNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`IamRoleNotFound`, 404],
  },
  [_m],
  [0],

  __IamRoleNotFoundFault
);
export var InvalidExportOnlyFault = error(
  n0,
  _IEOF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidExportOnly`, 400],
  },
  [_m],
  [0],

  __InvalidExportOnlyFault
);
export var InvalidExportSourceStateFault = error(
  n0,
  _IESSFn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidExportSourceState`, 400],
  },
  [_m],
  [0],

  __InvalidExportSourceStateFault
);
export var ModifyDBClusterSnapshotAttributeMessage = struct(
  n0,
  _MDBCSAM,
  0,
  [_DBCSI, _AN, _VTA, _VTR],
  [0, 0, [() => AttributeValueList, 0], [() => AttributeValueList, 0]]
);
export var ModifyDBClusterSnapshotAttributeResult = struct(
  n0,
  _MDBCSAR,
  0,
  [_DBCSAR],
  [[() => DBClusterSnapshotAttributesResult, 0]]
);
export var StartExportTaskMessage = struct(
  n0,
  _SETM,
  0,
  [_ETI, _SA, _SBN, _IRA, _KKI, _SP, _EO],
  [0, 0, 0, 0, 0, 0, 64 | 0]
);
export var DBClusterSnapshotAttributeList = list(n0, _DBCSAL, 0, [
  () => DBClusterSnapshotAttribute,
  {
    [_xN]: _DBCSAl,
  },
]);
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
export var DeleteDBClusterSnapshot = op(
  n0,
  _DDBCS,
  0,
  () => DeleteDBClusterSnapshotMessage,
  () => DeleteDBClusterSnapshotResult
);
export var DescribeDBClusterSnapshotAttributes = op(
  n0,
  _DDBCSA,
  0,
  () => DescribeDBClusterSnapshotAttributesMessage,
  () => DescribeDBClusterSnapshotAttributesResult
);
export var DescribeDBClusterSnapshots = op(
  n0,
  _DDBCSe,
  0,
  () => DescribeDBClusterSnapshotsMessage,
  () => DBClusterSnapshotMessage
);
export var ModifyDBClusterSnapshotAttribute = op(
  n0,
  _MDBCSA,
  0,
  () => ModifyDBClusterSnapshotAttributeMessage,
  () => ModifyDBClusterSnapshotAttributeResult
);
export var StartExportTask = op(
  n0,
  _SET,
  0,
  () => StartExportTaskMessage,
  () => ExportTask
);

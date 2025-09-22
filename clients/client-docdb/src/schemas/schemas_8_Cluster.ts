// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { DBClusterSnapshotNotFoundFault as __DBClusterSnapshotNotFoundFault } from "../models/index";
import {
  _AN,
  _aQE,
  _AV,
  _AVL,
  _AVt,
  _c,
  _DBCSAL,
  _DBCSAl,
  _DBCSAlu,
  _DBCSAR,
  _DBCSI,
  _DBCSNFF,
  _DDBCSA,
  _DDBCSAM,
  _DDBCSAR,
  _e,
  _hE,
  _m,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DBClusterSnapshotAttribute = struct(n0, _DBCSAl, 0, [_AN, _AV], [0, [() => AttributeValueList, 0]]);
export var DBClusterSnapshotAttributesResult = struct(
  n0,
  _DBCSAR,
  0,
  [_DBCSI, _DBCSAlu],
  [0, [() => DBClusterSnapshotAttributeList, 0]]
);
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
export var DescribeDBClusterSnapshotAttributesMessage = struct(n0, _DDBCSAM, 0, [_DBCSI], [0]);
export var DescribeDBClusterSnapshotAttributesResult = struct(
  n0,
  _DDBCSAR,
  0,
  [_DBCSAR],
  [[() => DBClusterSnapshotAttributesResult, 0]]
);
export var AttributeValueList = list(n0, _AVL, 0, [
  0,
  {
    [_xN]: _AVt,
  },
]);
export var DBClusterSnapshotAttributeList = list(n0, _DBCSAL, 0, [
  () => DBClusterSnapshotAttribute,
  {
    [_xN]: _DBCSAl,
  },
]);
export var DescribeDBClusterSnapshotAttributes = op(
  n0,
  _DDBCSA,
  0,
  () => DescribeDBClusterSnapshotAttributesMessage,
  () => DescribeDBClusterSnapshotAttributesResult
);

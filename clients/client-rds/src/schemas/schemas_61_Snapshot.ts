// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { SharedSnapshotQuotaExceededFault as __SharedSnapshotQuotaExceededFault } from "../models/index";
import {
  _AN,
  _aQE,
  _AVL,
  _AVt,
  _AVtt,
  _c,
  _DBSAL,
  _DBSAn,
  _DBSAna,
  _DBSAR,
  _DBSIn,
  _DDBSA,
  _DDBSAM,
  _DDBSAR,
  _e,
  _hE,
  _m,
  _SSQEF,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DBSnapshotAttribute = struct(n0, _DBSAn, 0, [_AN, _AVt], [0, [() => AttributeValueList, 0]]);
export var DBSnapshotAttributesResult = struct(
  n0,
  _DBSAR,
  0,
  [_DBSIn, _DBSAna],
  [0, [() => DBSnapshotAttributeList, 0]]
);
export var DescribeDBSnapshotAttributesMessage = struct(n0, _DDBSAM, 0, [_DBSIn], [0]);
export var DescribeDBSnapshotAttributesResult = struct(
  n0,
  _DDBSAR,
  0,
  [_DBSAR],
  [[() => DBSnapshotAttributesResult, 0]]
);
export var SharedSnapshotQuotaExceededFault = error(
  n0,
  _SSQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SharedSnapshotQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __SharedSnapshotQuotaExceededFault
);
export var AttributeValueList = list(n0, _AVL, 0, [
  0,
  {
    [_xN]: _AVtt,
  },
]);
export var DBSnapshotAttributeList = list(n0, _DBSAL, 0, [
  () => DBSnapshotAttribute,
  {
    [_xN]: _DBSAn,
  },
]);
export var DescribeDBSnapshotAttributes = op(
  n0,
  _DDBSA,
  0,
  () => DescribeDBSnapshotAttributesMessage,
  () => DescribeDBSnapshotAttributesResult
);

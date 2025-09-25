// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidDBSnapshotStateFault as __InvalidDBSnapshotStateFault } from "../models/index";
import {
  _AN,
  _aQE,
  _c,
  _DBS,
  _DBSAR,
  _DBSIn,
  _DDBS,
  _DDBSM,
  _DDBSR,
  _e,
  _hE,
  _IDBSSF,
  _m,
  _MDBSA,
  _MDBSAM,
  _MDBSAR,
  _VTA,
  _VTR,
  n0,
} from "./schemas_0";
import { AttributeValueList, DBSnapshotAttributesResult } from "./schemas_61_Snapshot";
import { DBSnapshot } from "./schemas_70_Snapshot";

/* eslint no-var: 0 */

export var DeleteDBSnapshotMessage = struct(n0, _DDBSM, 0, [_DBSIn], [0]);
export var DeleteDBSnapshotResult = struct(n0, _DDBSR, 0, [_DBS], [[() => DBSnapshot, 0]]);
export var InvalidDBSnapshotStateFault = error(
  n0,
  _IDBSSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBSnapshotState`, 400],
  },
  [_m],
  [0],

  __InvalidDBSnapshotStateFault
);
export var ModifyDBSnapshotAttributeMessage = struct(
  n0,
  _MDBSAM,
  0,
  [_DBSIn, _AN, _VTA, _VTR],
  [0, 0, [() => AttributeValueList, 0], [() => AttributeValueList, 0]]
);
export var ModifyDBSnapshotAttributeResult = struct(n0, _MDBSAR, 0, [_DBSAR], [[() => DBSnapshotAttributesResult, 0]]);
export var DeleteDBSnapshot = op(
  n0,
  _DDBS,
  0,
  () => DeleteDBSnapshotMessage,
  () => DeleteDBSnapshotResult
);
export var ModifyDBSnapshotAttribute = op(
  n0,
  _MDBSA,
  0,
  () => ModifyDBSnapshotAttributeMessage,
  () => ModifyDBSnapshotAttributeResult
);

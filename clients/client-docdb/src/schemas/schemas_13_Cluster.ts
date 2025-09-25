// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DBClusterSnapshotAlreadyExistsFault as __DBClusterSnapshotAlreadyExistsFault,
  InvalidDBClusterSnapshotStateFault as __InvalidDBClusterSnapshotStateFault,
  SharedSnapshotQuotaExceededFault as __SharedSnapshotQuotaExceededFault,
} from "../models/index";
import {
  _AN,
  _aQE,
  _c,
  _DBCSAEF,
  _DBCSAR,
  _DBCSI,
  _e,
  _hE,
  _IDBCSSF,
  _m,
  _MDBCSA,
  _MDBCSAM,
  _MDBCSAR,
  _SSQEF,
  _VTA,
  _VTR,
  n0,
} from "./schemas_0";
import { AttributeValueList, DBClusterSnapshotAttributesResult } from "./schemas_8_Cluster";

/* eslint no-var: 0 */

export var DBClusterSnapshotAlreadyExistsFault = error(
  n0,
  _DBCSAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBClusterSnapshotAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __DBClusterSnapshotAlreadyExistsFault
);
export var InvalidDBClusterSnapshotStateFault = error(
  n0,
  _IDBCSSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBClusterSnapshotStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidDBClusterSnapshotStateFault
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
export var ModifyDBClusterSnapshotAttribute = op(
  n0,
  _MDBCSA,
  0,
  () => ModifyDBClusterSnapshotAttributeMessage,
  () => ModifyDBClusterSnapshotAttributeResult
);

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  DBClusterSnapshotAlreadyExistsFault as __DBClusterSnapshotAlreadyExistsFault,
  InvalidDBClusterSnapshotStateFault as __InvalidDBClusterSnapshotStateFault,
} from "../models/index";
import { _aQE, _c, _DBCSAEF, _e, _hE, _IDBCSSF, _m, n0 } from "./schemas_0";

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

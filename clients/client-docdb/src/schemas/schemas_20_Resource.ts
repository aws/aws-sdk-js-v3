// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { DBSnapshotNotFoundFault as __DBSnapshotNotFoundFault } from "../models/index";
import { _aQE, _c, _DBSNFF, _e, _hE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DBSnapshotNotFoundFault = error(
  n0,
  _DBSNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBSnapshotNotFound`, 404],
  },
  [_m],
  [0],

  __DBSnapshotNotFoundFault
);

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { SnapshotQuotaExceededFault as __SnapshotQuotaExceededFault } from "../models/index";
import { _aQE, _c, _e, _hE, _m, _SQEF, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SnapshotQuotaExceededFault = error(
  n0,
  _SQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __SnapshotQuotaExceededFault
);

// smithy-typescript generated code
import { error, struct } from "@smithy/core/schema";

import { ServerlessCacheSnapshotQuotaExceededFault as __ServerlessCacheSnapshotQuotaExceededFault } from "../models/index";
import {
  _aQE,
  _ARN,
  _BUFC,
  _c,
  _CTr,
  _E,
  _e,
  _ETx,
  _hE,
  _KKI,
  _m,
  _MEVa,
  _SCC,
  _SCN,
  _SCS,
  _SCSN,
  _SCSQEF,
  _St,
  _STn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ServerlessCacheConfiguration = struct(n0, _SCC, 0, [_SCN, _E, _MEVa], [0, 0, 0]);
export var ServerlessCacheSnapshot = struct(
  n0,
  _SCS,
  0,
  [_SCSN, _ARN, _KKI, _STn, _St, _CTr, _ETx, _BUFC, _SCC],
  [0, 0, 0, 0, 0, 4, 4, 0, () => ServerlessCacheConfiguration]
);
export var ServerlessCacheSnapshotQuotaExceededFault = error(
  n0,
  _SCSQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ServerlessCacheSnapshotQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __ServerlessCacheSnapshotQuotaExceededFault
);

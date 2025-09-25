// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ServiceUpdateNotFoundFault as __ServiceUpdateNotFoundFault } from "../models/index";
import {
  _aQE,
  _AUARABD,
  _c,
  _DSU,
  _DSUM,
  _E,
  _e,
  _EUT,
  _EV,
  _hE,
  _M,
  _m,
  _MR,
  _SU,
  _SUD,
  _SUe,
  _SUED,
  _SUL,
  _SUMe,
  _SUN,
  _SUNFF,
  _SURABD,
  _SURD,
  _SUS,
  _SUSe,
  _SUT,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeServiceUpdatesMessage = struct(n0, _DSUM, 0, [_SUN, _SUS, _MR, _M], [0, 64 | 0, 1, 0]);
export var ServiceUpdate = struct(
  n0,
  _SU,
  0,
  [_SUN, _SURD, _SUED, _SUSe, _SURABD, _SUS, _SUD, _SUT, _E, _EV, _AUARABD, _EUT],
  [0, 4, 4, 0, 4, 0, 0, 0, 0, 0, 2, 0]
);
export var ServiceUpdateNotFoundFault = error(
  n0,
  _SUNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ServiceUpdateNotFoundFault`, 404],
  },
  [_m],
  [0],

  __ServiceUpdateNotFoundFault
);
export var ServiceUpdatesMessage = struct(n0, _SUMe, 0, [_M, _SUe], [0, [() => ServiceUpdateList, 0]]);
export var ServiceUpdateList = list(n0, _SUL, 0, [
  () => ServiceUpdate,
  {
    [_xN]: _SU,
  },
]);
export var DescribeServiceUpdates = op(
  n0,
  _DSU,
  0,
  () => DescribeServiceUpdatesMessage,
  () => ServiceUpdatesMessage
);

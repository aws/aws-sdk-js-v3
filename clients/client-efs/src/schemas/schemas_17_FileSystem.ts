// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  InsufficientThroughputCapacity as __InsufficientThroughputCapacity,
  ThroughputLimitExceeded as __ThroughputLimitExceeded,
} from "../models/index";
import { _c, _e, _EC, _hE, _ITC, _M, _s, _TLE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InsufficientThroughputCapacity = error(
  n0,
  _ITC,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_EC, _M],
  [0, 0],

  __InsufficientThroughputCapacity
);
export var ThroughputLimitExceeded = error(
  n0,
  _TLE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_EC, _M],
  [0, 0],

  __ThroughputLimitExceeded
);

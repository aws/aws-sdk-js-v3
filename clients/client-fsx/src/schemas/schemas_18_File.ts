// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  InvalidNetworkSettings as __InvalidNetworkSettings,
  InvalidPerUnitStorageThroughput as __InvalidPerUnitStorageThroughput,
} from "../models/index";
import { _c, _e, _INS, _IPUST, _IRTI, _ISGI, _ISI, _M, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidNetworkSettings = error(
  n0,
  _INS,
  {
    [_e]: _c,
  },
  [_M, _ISI, _ISGI, _IRTI],
  [0, 0, 0, 0],

  __InvalidNetworkSettings
);
export var InvalidPerUnitStorageThroughput = error(
  n0,
  _IPUST,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidPerUnitStorageThroughput
);
export var SecurityGroupIds = 64 | 0;

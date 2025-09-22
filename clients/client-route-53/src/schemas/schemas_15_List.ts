// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidPaginationToken as __InvalidPaginationToken } from "../models/index";
import {
  _c,
  _e,
  _h,
  _hE,
  _hQ,
  _ht,
  _HZI,
  _IPT,
  _LQLC,
  _LQLCR,
  _LQLCRi,
  _m,
  _ma,
  _MR,
  _n,
  _NT,
  _QLC,
  _QLCu,
  _xN,
  n0,
} from "./schemas_0";
import { QueryLoggingConfig } from "./schemas_16_Logging";

/* eslint no-var: 0 */

export var InvalidPaginationToken = error(
  n0,
  _IPT,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidPaginationToken
);
export var ListQueryLoggingConfigsRequest = struct(
  n0,
  _LQLCR,
  0,
  [_HZI, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _h,
      },
    ],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      1,
      {
        [_hQ]: _ma,
      },
    ],
  ]
);
export var ListQueryLoggingConfigsResponse = struct(n0, _LQLCRi, 0, [_QLCu, _NT], [[() => QueryLoggingConfigs, 0], 0]);
export var QueryLoggingConfigs = list(n0, _QLCu, 0, [
  () => QueryLoggingConfig,
  {
    [_xN]: _QLC,
  },
]);
export var ListQueryLoggingConfigs = op(
  n0,
  _LQLC,
  {
    [_ht]: ["GET", "/2013-04-01/queryloggingconfig", 200],
  },
  () => ListQueryLoggingConfigsRequest,
  () => ListQueryLoggingConfigsResponse
);

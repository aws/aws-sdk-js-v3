// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { HostedZoneNotPrivate as __HostedZoneNotPrivate } from "../models/index";
import {
  _AL,
  _c,
  _Cou,
  _e,
  _GAL,
  _GALR,
  _GALRe,
  _GHZL,
  _GHZLR,
  _GHZLRe,
  _ht,
  _HZI,
  _HZL,
  _HZNP,
  _Li,
  _m,
  _T,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountLimit = struct(n0, _AL, 0, [_T, _V], [0, 1]);
export var GetAccountLimitRequest = struct(n0, _GALR, 0, [_T], [[0, 1]]);
export var GetAccountLimitResponse = struct(n0, _GALRe, 0, [_Li, _Cou], [() => AccountLimit, 1]);
export var GetHostedZoneLimitRequest = struct(
  n0,
  _GHZLR,
  0,
  [_T, _HZI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetHostedZoneLimitResponse = struct(n0, _GHZLRe, 0, [_Li, _Cou], [() => HostedZoneLimit, 1]);
export var HostedZoneLimit = struct(n0, _HZL, 0, [_T, _V], [0, 1]);
export var HostedZoneNotPrivate = error(
  n0,
  _HZNP,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __HostedZoneNotPrivate
);
export var GetAccountLimit = op(
  n0,
  _GAL,
  {
    [_ht]: ["GET", "/2013-04-01/accountlimit/{Type}", 200],
  },
  () => GetAccountLimitRequest,
  () => GetAccountLimitResponse
);
export var GetHostedZoneLimit = op(
  n0,
  _GHZL,
  {
    [_ht]: ["GET", "/2013-04-01/hostedzonelimit/{HostedZoneId}/{Type}", 200],
  },
  () => GetHostedZoneLimitRequest,
  () => GetHostedZoneLimitResponse
);

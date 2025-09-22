// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DelegationSetInUse as __DelegationSetInUse,
  DelegationSetNotReusable as __DelegationSetNotReusable,
  NoSuchDelegationSet as __NoSuchDelegationSet,
} from "../models/index";
import {
  _c,
  _Cou,
  _DRDS,
  _DRDSR,
  _DRDSRe,
  _DSI,
  _DSIU,
  _DSNR,
  _e,
  _GRDSL,
  _GRDSLR,
  _GRDSLRe,
  _ht,
  _I,
  _Li,
  _m,
  _NSDS,
  _RDSL,
  _T,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DelegationSetInUse = error(
  n0,
  _DSIU,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __DelegationSetInUse
);
export var DelegationSetNotReusable = error(
  n0,
  _DSNR,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __DelegationSetNotReusable
);
export var DeleteReusableDelegationSetRequest = struct(n0, _DRDSR, 0, [_I], [[0, 1]]);
export var DeleteReusableDelegationSetResponse = struct(n0, _DRDSRe, 0, [], []);
export var GetReusableDelegationSetLimitRequest = struct(
  n0,
  _GRDSLR,
  0,
  [_T, _DSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetReusableDelegationSetLimitResponse = struct(
  n0,
  _GRDSLRe,
  0,
  [_Li, _Cou],
  [() => ReusableDelegationSetLimit, 1]
);
export var NoSuchDelegationSet = error(
  n0,
  _NSDS,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __NoSuchDelegationSet
);
export var ReusableDelegationSetLimit = struct(n0, _RDSL, 0, [_T, _V], [0, 1]);
export var DeleteReusableDelegationSet = op(
  n0,
  _DRDS,
  {
    [_ht]: ["DELETE", "/2013-04-01/delegationset/{Id}", 200],
  },
  () => DeleteReusableDelegationSetRequest,
  () => DeleteReusableDelegationSetResponse
);
export var GetReusableDelegationSetLimit = op(
  n0,
  _GRDSL,
  {
    [_ht]: ["GET", "/2013-04-01/reusabledelegationsetlimit/{DelegationSetId}/{Type}", 200],
  },
  () => GetReusableDelegationSetLimitRequest,
  () => GetReusableDelegationSetLimitResponse
);

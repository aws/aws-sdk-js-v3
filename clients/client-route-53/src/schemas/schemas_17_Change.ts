// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { NoSuchChange as __NoSuchChange } from "../models/index";
import { _c, _CI, _e, _GC, _GCR, _GCRe, _hE, _ht, _I, _m, _NSCo, n0 } from "./schemas_0";
import { ChangeInfo } from "./schemas_10_Hosted";

/* eslint no-var: 0 */

export var GetChangeRequest = struct(n0, _GCR, 0, [_I], [[0, 1]]);
export var GetChangeResponse = struct(n0, _GCRe, 0, [_CI], [() => ChangeInfo]);
export var NoSuchChange = error(
  n0,
  _NSCo,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __NoSuchChange
);
export var GetChange = op(
  n0,
  _GC,
  {
    [_ht]: ["GET", "/2013-04-01/change/{Id}", 200],
  },
  () => GetChangeRequest,
  () => GetChangeResponse
);

// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ThrottlingException as __ThrottlingException } from "../models/index";
import { _aA, _aTc, _c, _e, _h, _hE, _m, _rA, _re, _rT, _sC, _SR, _SRR, _SRRy, _TE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SyncResourceRequest = struct(
  n0,
  _SRR,
  0,
  [_rT, _re],
  [
    [0, 1],
    [0, 1],
  ]
);
export var SyncResourceResponse = struct(n0, _SRRy, 0, [_aA, _rA, _aTc], [0, 0, 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _sC],
  [0, 0],

  __ThrottlingException
);
export var SyncResource = op(
  n0,
  _SR,
  {
    [_h]: ["POST", "/sync/{resourceType}/{resource}", 200],
  },
  () => SyncResourceRequest,
  () => SyncResourceResponse
);

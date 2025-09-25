// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ForbiddenException as __ForbiddenException,
  GoneException as __GoneException,
  LimitExceededException as __LimitExceededException,
  PayloadTooLargeException as __PayloadTooLargeException,
} from "../models/index";
import {
  _c,
  _CA,
  _cA,
  _CI,
  _D,
  _DC,
  _DCR,
  _e,
  _FE,
  _GC,
  _GCR,
  _GCRe,
  _GE,
  _h,
  _hE,
  _I,
  _i,
  _jN,
  _LAA,
  _lAA,
  _LEE,
  _M,
  _m,
  _PTC,
  _PTCR,
  _PTLE,
  _SI,
  _sI,
  _UA,
  _uA,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConnectionRequest = struct(n0, _DCR, 0, [_CI], [[0, 1]]);
export var ForbiddenException = error(
  n0,
  _FE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [],
  [],

  __ForbiddenException
);
export var GetConnectionRequest = struct(n0, _GCR, 0, [_CI], [[0, 1]]);
export var GetConnectionResponse = struct(
  n0,
  _GCRe,
  0,
  [_CA, _I, _LAA],
  [
    [
      5,
      {
        [_jN]: _cA,
      },
    ],
    [
      () => Identity,
      {
        [_jN]: _i,
      },
    ],
    [
      5,
      {
        [_jN]: _lAA,
      },
    ],
  ]
);
export var GoneException = error(
  n0,
  _GE,
  {
    [_e]: _c,
    [_hE]: 410,
  },
  [],
  [],

  __GoneException
);
export var Identity = struct(
  n0,
  _I,
  0,
  [_SI, _UA],
  [
    [
      0,
      {
        [_jN]: _sI,
      },
    ],
    [
      0,
      {
        [_jN]: _uA,
      },
    ],
  ]
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [],
  [],

  __LimitExceededException
);
export var PayloadTooLargeException = error(
  n0,
  _PTLE,
  {
    [_e]: _c,
    [_hE]: 413,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __PayloadTooLargeException
);
export var PostToConnectionRequest = struct(
  n0,
  _PTCR,
  0,
  [_D, _CI],
  [
    [21, 16],
    [0, 1],
  ]
);
export var DeleteConnection = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/@connections/{ConnectionId}", 204],
  },
  () => DeleteConnectionRequest,
  () => Unit
);
export var GetConnection = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/@connections/{ConnectionId}", 200],
  },
  () => GetConnectionRequest,
  () => GetConnectionResponse
);
export var PostToConnection = op(
  n0,
  _PTC,
  {
    [_h]: ["POST", "/@connections/{ConnectionId}", 200],
  },
  () => PostToConnectionRequest,
  () => Unit
);

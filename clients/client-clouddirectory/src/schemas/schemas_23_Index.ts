// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  NotIndexException as __NotIndexException,
  ObjectAlreadyDetachedException as __ObjectAlreadyDetachedException,
} from "../models/index";
import {
  _c,
  _DA,
  _DFI,
  _DFIR,
  _DFIRe,
  _DOI,
  _e,
  _h,
  _hE,
  _hH,
  _IR,
  _M,
  _NIE,
  _OADE,
  _TR,
  _xadp,
  n0,
  ObjectReference,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DetachFromIndexRequest = struct(
  n0,
  _DFIR,
  0,
  [_DA, _IR, _TR],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
    () => ObjectReference,
  ]
);
export var DetachFromIndexResponse = struct(n0, _DFIRe, 0, [_DOI], [0]);
export var NotIndexException = error(
  n0,
  _NIE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __NotIndexException
);
export var ObjectAlreadyDetachedException = error(
  n0,
  _OADE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ObjectAlreadyDetachedException
);
export var DetachFromIndex = op(
  n0,
  _DFI,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/index/detach", 200],
  },
  () => DetachFromIndexRequest,
  () => DetachFromIndexResponse
);

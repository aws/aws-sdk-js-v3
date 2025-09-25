// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ObjectNotDetachedException as __ObjectNotDetachedException } from "../models/index";
import { _c, _DA, _DOe, _DOR, _DORe, _e, _h, _hE, _hH, _M, _ONDE, _OR, _xadp, n0, ObjectReference } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteObjectRequest = struct(
  n0,
  _DOR,
  0,
  [_DA, _OR],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
  ]
);
export var DeleteObjectResponse = struct(n0, _DORe, 0, [], []);
export var ObjectNotDetachedException = error(
  n0,
  _ONDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ObjectNotDetachedException
);
export var DeleteObject = op(
  n0,
  _DOe,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/object/delete", 200],
  },
  () => DeleteObjectRequest,
  () => DeleteObjectResponse
);

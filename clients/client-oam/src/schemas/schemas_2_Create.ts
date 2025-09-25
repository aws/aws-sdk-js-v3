// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TooManyTagsException as __TooManyTagsException } from "../models/index";
import { _c, _e, _h, _hE, _hQ, _M, _RA, _T, _TK, _tK, _TMTE, _TR, _TRI, _TRO, _UR, _URI, _URO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceInput = struct(n0, _TRI, 0, [_RA, _T], [[0, 1], 128 | 0]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyTagsException
);
export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_RA, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var TagKeys = 64 | 0;

export var TagMapInput = 128 | 0;

export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["PUT", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 200],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);

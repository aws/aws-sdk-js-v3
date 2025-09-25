// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TooManyTagsException as __TooManyTagsException } from "../models/index";
import { _c, _cT, _e, _h, _hE, _m, _rA, _rN, _ta, _TMTE, _TR, _TRR, _TRRa, n0 } from "./schemas_0";
import { TagList } from "./schemas_8_Create";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_rA, _ta, _cT],
  [
    [0, 1],
    [() => TagList, 0],
    [0, 4],
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _rN],
  [0, 0],

  __TooManyTagsException
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn+}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);

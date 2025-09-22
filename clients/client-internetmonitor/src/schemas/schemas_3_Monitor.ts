// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  BadRequestException as __BadRequestException,
  InternalServerErrorException as __InternalServerErrorException,
  NotFoundException as __NotFoundException,
  TooManyRequestsException as __TooManyRequestsException,
} from "../models/index";
import {
  _BRE,
  _c,
  _e,
  _h,
  _hE,
  _hQ,
  _ISEE,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _m,
  _NFE,
  _RA,
  _s,
  _T,
  _TK,
  _tK,
  _TMRE,
  _TR,
  _TRI,
  _TRO,
  _UR,
  _URI,
  _URO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BadRequestException = error(
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __BadRequestException
);
export var InternalServerErrorException = error(
  n0,
  _ISEE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerErrorException
);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_RA], [[0, 1]]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_T], [128 | 0]);
export var NotFoundException = error(
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __NotFoundException
);
export var TagResourceInput = struct(n0, _TRI, 0, [_RA, _T], [[0, 1], 128 | 0]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var TooManyRequestsException = error(
  n0,
  _TMRE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __TooManyRequestsException
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

export var TagMap = 128 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 204],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 204],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);

// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ResourceAlreadyExistsException as __ResourceAlreadyExistsException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _AI,
  _AT,
  _BT,
  _c,
  _CA,
  _CAI,
  _CAO,
  _CRT,
  _e,
  _h,
  _hE,
  _M,
  _NT,
  _RAEE,
  _RN,
  _Ta,
  _TMTE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateAccessorInput = struct(n0, _CAI, 0, [_CRT, _AT, _Ta, _NT], [[0, 4], 0, 128 | 0, 0]);
export var CreateAccessorOutput = struct(n0, _CAO, 0, [_AI, _BT, _NT], [0, 0, 0]);
export var ResourceAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ResourceAlreadyExistsException
);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _RN],
  [0, 0],

  __TooManyTagsException
);
export var InputTagMap = 128 | 0;

export var CreateAccessor = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/accessors", 200],
  },
  () => CreateAccessorInput,
  () => CreateAccessorOutput
);

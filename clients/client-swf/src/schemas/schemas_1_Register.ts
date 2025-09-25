// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { LimitExceededFault as __LimitExceededFault, TooManyTagsFault as __TooManyTagsFault } from "../models/index";
import {
  _cl,
  _er,
  _hE,
  _k,
  _LEF,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _m,
  _rA,
  _RT,
  _RTL,
  _t,
  _tK,
  _TMTF,
  _TR,
  _TRI,
  _UR,
  _URI,
  _va,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var LimitExceededFault = error(
  n0,
  _LEF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],

  __LimitExceededFault
);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_rA], [0]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_t], [() => ResourceTagList]);
export var ResourceTag = struct(n0, _RT, 0, [_k, _va], [0, 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_rA, _t], [0, () => ResourceTagList]);
export var TooManyTagsFault = error(
  n0,
  _TMTF,
  {
    [_er]: _cl,
    [_hE]: 400,
  },
  [_m],
  [0],

  __TooManyTagsFault
);
export var UntagResourceInput = struct(n0, _URI, 0, [_rA, _tK], [0, 64 | 0]);
export var ResourceTagKeyList = 64 | 0;

export var ResourceTagList = list(n0, _RTL, 0, () => ResourceTag);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceInput,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceInput,
  () => Unit
);

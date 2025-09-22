// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidTagging as __InvalidTagging } from "../models/index";
import {
  _c,
  _e,
  _h,
  _hE,
  _hP,
  _hQ,
  _I,
  _ITn,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _Res,
  _Ta,
  _TK,
  _TKL,
  _TRag,
  _TRR,
  _UR,
  _URR,
  _xN,
  n0,
  Tags,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidTagging = error(
  n0,
  _ITn,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidTagging
);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_Res],
  [
    [
      0,
      {
        [_hQ]: _Res,
      },
    ],
  ]
);
export var ListTagsForResourceResult = struct(n0, _LTFRRi, 0, [_Ta], [[() => Tags, 16]]);
export var TagKeys = struct(n0, _TK, 0, [_I], [[() => TagKeyList, 0]]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_Res, _Ta],
  [
    [
      0,
      {
        [_hQ]: _Res,
      },
    ],
    [
      () => Tags,
      {
        [_xN]: _Ta,
        [_hP]: 1,
      },
    ],
  ]
);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_Res, _TK],
  [
    [
      0,
      {
        [_hQ]: _Res,
      },
    ],
    [
      () => TagKeys,
      {
        [_xN]: _TK,
        [_hP]: 1,
      },
    ],
  ]
);
export var TagKeyList = list(n0, _TKL, 0, [
  0,
  {
    [_xN]: _K,
  },
]);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/2020-05-31/tagging", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResult
);
export var TagResource = op(
  n0,
  _TRag,
  {
    [_h]: ["POST", "/2020-05-31/tagging?Operation=Tag", 204],
  },
  () => TagResourceRequest,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/2020-05-31/tagging?Operation=Untag", 204],
  },
  () => UntagResourceRequest,
  () => Unit
);

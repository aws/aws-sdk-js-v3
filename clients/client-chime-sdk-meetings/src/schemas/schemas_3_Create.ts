// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  LimitExceededException as __LimitExceededException,
  ResourceNotFoundException as __ResourceNotFoundException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _a,
  _c,
  _Cod,
  _e,
  _h,
  _hE,
  _hQ,
  _K,
  _LEE,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _RARN,
  _RI,
  _RN,
  _RNFE,
  _T,
  _Ta,
  _TK,
  _TL,
  _TMTE,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_Cod, _M, _RI],
  [0, 0, 0],

  __LimitExceededException
);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_RARN],
  [
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [() => TagList]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_Cod, _M, _RI, _RN],
  [0, 0, 0, 0],

  __ResourceNotFoundException
);
export var Tag = struct(n0, _Ta, 0, [_K, _Va], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _T], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_Cod, _M, _RI, _RN],
  [0, 0, 0, 0],

  __TooManyTagsException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags?operation=tag-resource", 204],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/tags?operation=untag-resource", 204],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);

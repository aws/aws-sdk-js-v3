// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidTaggingRequestException as __InvalidTaggingRequestException } from "../models/index";
import {
  _c,
  _e,
  _h,
  _hE,
  _ITRE,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MR,
  _NT,
  _RA,
  _Ta,
  _Tag,
  _TK,
  _TL,
  _TRa,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidTaggingRequestException = error(
  n0,
  _ITRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidTaggingRequestException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA, _NT, _MR], [0, 0, 1]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta, _NT], [() => TagList, 0]);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RA, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/tags/add", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/tags/remove", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);

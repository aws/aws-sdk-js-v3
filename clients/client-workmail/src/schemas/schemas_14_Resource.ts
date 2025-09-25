// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { TooManyTagsException as __TooManyTagsException } from "../models/index";
import {
  _Al,
  _ARN,
  _c,
  _CD,
  _DI,
  _DMD,
  _DOe,
  _DORes,
  _DOResc,
  _DTi,
  _e,
  _EM,
  _hE,
  _IE,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MA,
  _OI,
  _RARN,
  _S,
  _Ta,
  _Tag,
  _TK,
  _TL,
  _TMTE,
  _TR,
  _TRR,
  _TRRa,
  _URn,
  _URR,
  _URRn,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeOrganizationRequest = struct(n0, _DORes, 0, [_OI], [0]);
export var DescribeOrganizationResponse = struct(
  n0,
  _DOResc,
  0,
  [_OI, _Al, _S, _DI, _DTi, _DMD, _CD, _EM, _ARN, _MA, _IE],
  [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 2]
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARN], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [() => TagList]);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
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
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var DescribeOrganization = op(
  n0,
  _DOe,
  2,
  () => DescribeOrganizationRequest,
  () => DescribeOrganizationResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _URn,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);

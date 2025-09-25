// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  TagPolicyException as __TagPolicyException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _cl,
  _er,
  _hE,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _rA,
  _rI,
  _RNFE,
  _rT,
  _SQEE,
  _ta,
  _tK,
  _TMTE,
  _TPE,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [128 | 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_er]: _cl,
    [_hE]: 404,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_er]: _cl,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var TagPolicyException = error(
  n0,
  _TPE,
  {
    [_er]: _cl,
    [_hE]: 400,
  },
  [_m],
  [0],

  __TagPolicyException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _ta], [0, 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_er]: _cl,
    [_hE]: 400,
  },
  [_m],
  [0],

  __TooManyTagsException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rA, _tK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeys = 64 | 0;

export var ResponseTagMap = 128 | 0;

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
  2,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  2,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);

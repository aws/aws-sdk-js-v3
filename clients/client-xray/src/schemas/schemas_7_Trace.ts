// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ResourceNotFoundException as __ResourceNotFoundException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _c,
  _CTR,
  _CTRR,
  _CTRRa,
  _e,
  _ET,
  _h,
  _hE,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _NT,
  _RARNe,
  _RNe,
  _RNFE,
  _RT,
  _ST,
  _STR,
  _STRR,
  _STRRt,
  _Ta,
  _TI,
  _TK,
  _TMTE,
  _TRa,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_10_Resource";

/* eslint no-var: 0 */

export var CancelTraceRetrievalRequest = struct(n0, _CTRR, 0, [_RT], [0]);
export var CancelTraceRetrievalResult = struct(n0, _CTRRa, 0, [], []);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARNe, _NT], [0, 0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta, _NT], [() => TagList, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _RNe],
  [0, 0],

  __ResourceNotFoundException
);
export var StartTraceRetrievalRequest = struct(n0, _STRR, 0, [_TI, _ST, _ET], [64 | 0, 4, 4]);
export var StartTraceRetrievalResult = struct(n0, _STRRt, 0, [_RT], [0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARNe, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _RNe],
  [0, 0],

  __TooManyTagsException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARNe, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TraceIdListForRetrieval = 64 | 0;

export var CancelTraceRetrieval = op(
  n0,
  _CTR,
  {
    [_h]: ["POST", "/CancelTraceRetrieval", 200],
  },
  () => CancelTraceRetrievalRequest,
  () => CancelTraceRetrievalResult
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["POST", "/ListTagsForResource", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var StartTraceRetrieval = op(
  n0,
  _STR,
  {
    [_h]: ["POST", "/StartTraceRetrieval", 200],
  },
  () => StartTraceRetrievalRequest,
  () => StartTraceRetrievalResult
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/TagResource", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/UntagResource", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);

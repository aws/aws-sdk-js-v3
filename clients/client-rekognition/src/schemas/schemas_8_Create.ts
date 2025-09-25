// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CA,
  _CCR,
  _CCr,
  _CCRr,
  _CI,
  _FMV,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _RAe,
  _SC,
  _Ta,
  _TK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateCollectionRequest = struct(n0, _CCR, 0, [_CI, _Ta], [0, 128 | 0]);
export var CreateCollectionResponse = struct(n0, _CCRr, 0, [_SC, _CA, _FMV], [1, 0, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAe], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [128 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RAe, _Ta], [0, 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RAe, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var CreateCollection = op(
  n0,
  _CCr,
  0,
  () => CreateCollectionRequest,
  () => CreateCollectionResponse
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
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DT, _DTR, _DTRe, _rA, _rAe, _RT, _rT, _RTL, _t, _tK, _UR, _URR, _URRn, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeTagsRequest = struct(n0, _DTR, 0, [_rA], [64 | 0]);
export var DescribeTagsResponse = struct(n0, _DTRe, 0, [_rT], [() => ResourceTagList]);
export var ResourceTag = struct(n0, _RT, 0, [_rAe, _t], [0, () => TagList]);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rAe, _tK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var ResourceArnList = 64 | 0;

export var ResourceTagList = list(n0, _RTL, 0, () => ResourceTag);
export var TagKeyList = 64 | 0;

export var DescribeTags = op(
  n0,
  _DT,
  0,
  () => DescribeTagsRequest,
  () => DescribeTagsResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);

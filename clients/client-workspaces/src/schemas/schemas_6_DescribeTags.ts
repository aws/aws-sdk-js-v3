// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTes, _DTRes, _DTResc, _RI, _TL, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeTagsRequest = struct(n0, _DTRes, 0, [_RI], [0]);
export var DescribeTagsResult = struct(n0, _DTResc, 0, [_TL], [() => TagList]);
export var DescribeTags = op(
  n0,
  _DTes,
  0,
  () => DescribeTagsRequest,
  () => DescribeTagsResult
);

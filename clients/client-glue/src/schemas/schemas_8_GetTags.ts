// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GTeta, _GTRetag, _GTRetags, _RAe, _Tag, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetTagsRequest = struct(n0, _GTRetag, 0, [_RAe], [0]);
export var GetTagsResponse = struct(n0, _GTRetags, 0, [_Tag], [128 | 0]);
export var GetTags = op(
  n0,
  _GTeta,
  0,
  () => GetTagsRequest,
  () => GetTagsResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CTR, _CTre, _CTRr, _RI, _T, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTagsRequest = struct(n0, _CTR, 0, [_RI, _T], [0, () => TagList]);
export var CreateTagsResult = struct(n0, _CTRr, 0, [], []);
export var CreateTags = op(
  n0,
  _CTre,
  0,
  () => CreateTagsRequest,
  () => CreateTagsResult
);

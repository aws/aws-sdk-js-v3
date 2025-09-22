// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ATTR, _ATTRM, _ATTRR, _RA, _T, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var AddTagsToResourceMessage = struct(n0, _ATTRM, 0, [_RA, _T], [0, [() => TagList, 0]]);
export var AddTagsToResourceResponse = struct(n0, _ATTRR, 0, [], []);
export var AddTagsToResource = op(
  n0,
  _ATTR,
  0,
  () => AddTagsToResourceMessage,
  () => AddTagsToResourceResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _IT, _LUT, _LUTR, _LUTRi, _Ma, _MI, _T, _UN, n0, tagListType } from "./schemas_0";

/* eslint no-var: 0 */

export var ListUserTagsRequest = struct(n0, _LUTR, 0, [_UN, _Ma, _MI], [0, 0, 1]);
export var ListUserTagsResponse = struct(n0, _LUTRi, 0, [_T, _IT, _Ma], [() => tagListType, 2, 0]);
export var ListUserTags = op(
  n0,
  _LUT,
  0,
  () => ListUserTagsRequest,
  () => ListUserTagsResponse
);

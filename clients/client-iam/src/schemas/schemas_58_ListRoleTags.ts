// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _IT, _LRT, _LRTR, _LRTRi, _Ma, _MI, _RN, _T, n0, tagListType } from "./schemas_0";

/* eslint no-var: 0 */

export var ListRoleTagsRequest = struct(n0, _LRTR, 0, [_RN, _Ma, _MI], [0, 0, 1]);
export var ListRoleTagsResponse = struct(n0, _LRTRi, 0, [_T, _IT, _Ma], [() => tagListType, 2, 0]);
export var ListRoleTags = op(
  n0,
  _LRT,
  0,
  () => ListRoleTagsRequest,
  () => ListRoleTagsResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _IT, _LPT, _LPTR, _LPTRi, _Ma, _MI, _PA, _T, n0, tagListType } from "./schemas_0";

/* eslint no-var: 0 */

export var ListPolicyTagsRequest = struct(n0, _LPTR, 0, [_PA, _Ma, _MI], [0, 0, 1]);
export var ListPolicyTagsResponse = struct(n0, _LPTRi, 0, [_T, _IT, _Ma], [() => tagListType, 2, 0]);
export var ListPolicyTags = op(
  n0,
  _LPT,
  0,
  () => ListPolicyTagsRequest,
  () => ListPolicyTagsResponse
);

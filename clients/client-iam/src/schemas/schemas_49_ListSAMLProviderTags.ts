// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _IT, _LSAMLPT, _LSAMLPTR, _LSAMLPTRi, _Ma, _MI, _SAMLPA, _T, n0, tagListType } from "./schemas_0";

/* eslint no-var: 0 */

export var ListSAMLProviderTagsRequest = struct(n0, _LSAMLPTR, 0, [_SAMLPA, _Ma, _MI], [0, 0, 1]);
export var ListSAMLProviderTagsResponse = struct(n0, _LSAMLPTRi, 0, [_T, _IT, _Ma], [() => tagListType, 2, 0]);
export var ListSAMLProviderTags = op(
  n0,
  _LSAMLPT,
  0,
  () => ListSAMLProviderTagsRequest,
  () => ListSAMLProviderTagsResponse
);

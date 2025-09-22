// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _IT, _LOIDCPT, _LOIDCPTR, _LOIDCPTRi, _Ma, _MI, _OIDCPA, _T, n0, tagListType } from "./schemas_0";

/* eslint no-var: 0 */

export var ListOpenIDConnectProviderTagsRequest = struct(n0, _LOIDCPTR, 0, [_OIDCPA, _Ma, _MI], [0, 0, 1]);
export var ListOpenIDConnectProviderTagsResponse = struct(n0, _LOIDCPTRi, 0, [_T, _IT, _Ma], [() => tagListType, 2, 0]);
export var ListOpenIDConnectProviderTags = op(
  n0,
  _LOIDCPT,
  0,
  () => ListOpenIDConnectProviderTagsRequest,
  () => ListOpenIDConnectProviderTagsResponse
);

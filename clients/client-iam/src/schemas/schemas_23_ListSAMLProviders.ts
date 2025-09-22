// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _A, _CD, _LSAMLP, _LSAMLPR, _LSAMLPRi, _SAMLPL, _SAMLPLE, _SAMLPLT, _VU, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListSAMLProvidersRequest = struct(n0, _LSAMLPR, 0, [], []);
export var ListSAMLProvidersResponse = struct(n0, _LSAMLPRi, 0, [_SAMLPL], [() => SAMLProviderListType]);
export var SAMLProviderListEntry = struct(n0, _SAMLPLE, 0, [_A, _VU, _CD], [0, 4, 4]);
export var SAMLProviderListType = list(n0, _SAMLPLT, 0, () => SAMLProviderListEntry);
export var ListSAMLProviders = op(
  n0,
  _LSAMLP,
  0,
  () => ListSAMLProvidersRequest,
  () => ListSAMLProvidersResponse
);

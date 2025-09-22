// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _A, _LOIDCP, _LOIDCPR, _LOIDCPRi, _OIDCPL, _OIDCPLE, _OIDCPLT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListOpenIDConnectProvidersRequest = struct(n0, _LOIDCPR, 0, [], []);
export var ListOpenIDConnectProvidersResponse = struct(
  n0,
  _LOIDCPRi,
  0,
  [_OIDCPL],
  [() => OpenIDConnectProviderListType]
);
export var OpenIDConnectProviderListEntry = struct(n0, _OIDCPLE, 0, [_A], [0]);
export var OpenIDConnectProviderListType = list(n0, _OIDCPLT, 0, () => OpenIDConnectProviderListEntry);
export var ListOpenIDConnectProviders = op(
  n0,
  _LOIDCP,
  0,
  () => ListOpenIDConnectProvidersRequest,
  () => ListOpenIDConnectProvidersResponse
);

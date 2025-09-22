// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _OIDCPA, _T, _TOIDCP, _TOIDCPR, n0, tagListType, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var TagOpenIDConnectProviderRequest = struct(n0, _TOIDCPR, 0, [_OIDCPA, _T], [0, () => tagListType]);
export var TagOpenIDConnectProvider = op(
  n0,
  _TOIDCP,
  0,
  () => TagOpenIDConnectProviderRequest,
  () => Unit
);

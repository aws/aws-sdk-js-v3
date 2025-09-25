// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DOIDCP, _DOIDCPR, _OIDCPA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteOpenIDConnectProviderRequest = struct(n0, _DOIDCPR, 0, [_OIDCPA], [0]);
export var DeleteOpenIDConnectProvider = op(
  n0,
  _DOIDCP,
  0,
  () => DeleteOpenIDConnectProviderRequest,
  () => Unit
);

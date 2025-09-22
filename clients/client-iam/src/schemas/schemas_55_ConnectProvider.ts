// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _OIDCPA, _TL, _UOIDCPT, _UOIDCPTR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateOpenIDConnectProviderThumbprintRequest = struct(n0, _UOIDCPTR, 0, [_OIDCPA, _TL], [0, 64 | 0]);
export var thumbprintListType = 64 | 0;

export var UpdateOpenIDConnectProviderThumbprint = op(
  n0,
  _UOIDCPT,
  0,
  () => UpdateOpenIDConnectProviderThumbprintRequest,
  () => Unit
);

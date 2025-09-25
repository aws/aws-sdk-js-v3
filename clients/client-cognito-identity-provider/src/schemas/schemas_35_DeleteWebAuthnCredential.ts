// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ATc, _CIr, _DWAC, _DWACR, _DWACRe, n0, TokenModelType } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWebAuthnCredentialRequest = struct(n0, _DWACR, 0, [_ATc, _CIr], [[() => TokenModelType, 0], 0]);
export var DeleteWebAuthnCredentialResponse = struct(n0, _DWACRe, 0, [], []);
export var DeleteWebAuthnCredential = op(
  n0,
  _DWAC,
  0,
  () => DeleteWebAuthnCredentialRequest,
  () => DeleteWebAuthnCredentialResponse
);

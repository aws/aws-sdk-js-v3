// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GDPP, _GDPPR, _GDPPRe, _lGI, _lUT, _pD, _PDPP, _PDPPR, _PDPPRu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetDataProtectionPolicyRequest = struct(n0, _GDPPR, 0, [_lGI], [0]);
export var GetDataProtectionPolicyResponse = struct(n0, _GDPPRe, 0, [_lGI, _pD, _lUT], [0, 0, 1]);
export var PutDataProtectionPolicyRequest = struct(n0, _PDPPR, 0, [_lGI, _pD], [0, 0]);
export var PutDataProtectionPolicyResponse = struct(n0, _PDPPRu, 0, [_lGI, _pD, _lUT], [0, 0, 1]);
export var GetDataProtectionPolicy = op(
  n0,
  _GDPP,
  0,
  () => GetDataProtectionPolicyRequest,
  () => GetDataProtectionPolicyResponse
);
export var PutDataProtectionPolicy = op(
  n0,
  _PDPP,
  0,
  () => PutDataProtectionPolicyRequest,
  () => PutDataProtectionPolicyResponse
);

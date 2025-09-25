// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DADPC, _DADPCR, _DADPCRe, _DPCA, _DPCI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccountDefaultProtectConfigurationRequest = struct(n0, _DADPCR, 0, [], []);
export var DeleteAccountDefaultProtectConfigurationResult = struct(n0, _DADPCRe, 0, [_DPCA, _DPCI], [0, 0]);
export var DeleteAccountDefaultProtectConfiguration = op(
  n0,
  _DADPC,
  0,
  () => DeleteAccountDefaultProtectConfigurationRequest,
  () => DeleteAccountDefaultProtectConfigurationResult
);

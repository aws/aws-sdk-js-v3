// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPCA, _DPCI, _PCI, _SADPC, _SADPCR, _SADPCRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SetAccountDefaultProtectConfigurationRequest = struct(n0, _SADPCR, 0, [_PCI], [0]);
export var SetAccountDefaultProtectConfigurationResult = struct(n0, _SADPCRe, 0, [_DPCA, _DPCI], [0, 0]);
export var SetAccountDefaultProtectConfiguration = op(
  n0,
  _SADPC,
  0,
  () => SetAccountDefaultProtectConfigurationRequest,
  () => SetAccountDefaultProtectConfigurationResult
);

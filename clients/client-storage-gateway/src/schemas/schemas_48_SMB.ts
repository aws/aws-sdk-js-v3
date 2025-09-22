// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GARN, _SMBSS, _USMBSS, _USMBSSI, _USMBSSO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateSMBSecurityStrategyInput = struct(n0, _USMBSSI, 0, [_GARN, _SMBSS], [0, 0]);
export var UpdateSMBSecurityStrategyOutput = struct(n0, _USMBSSO, 0, [_GARN], [0]);
export var UpdateSMBSecurityStrategy = op(
  n0,
  _USMBSS,
  0,
  () => UpdateSMBSecurityStrategyInput,
  () => UpdateSMBSecurityStrategyOutput
);

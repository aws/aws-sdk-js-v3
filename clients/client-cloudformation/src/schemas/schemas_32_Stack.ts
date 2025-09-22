// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GSP, _GSPI, _GSPO, _SN, _SPB, _SPURL, _SSP, _SSPI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var GetStackPolicyInput = struct(n0, _GSPI, 0, [_SN], [0]);
export var GetStackPolicyOutput = struct(n0, _GSPO, 0, [_SPB], [0]);
export var SetStackPolicyInput = struct(n0, _SSPI, 0, [_SN, _SPB, _SPURL], [0, 0, 0]);
export var GetStackPolicy = op(
  n0,
  _GSP,
  0,
  () => GetStackPolicyInput,
  () => GetStackPolicyOutput
);
export var SetStackPolicy = op(
  n0,
  _SSP,
  0,
  () => SetStackPolicyInput,
  () => Unit
);

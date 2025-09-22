// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ETP, _SI, _SN, _UTP, _UTPI, _UTPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateTerminationProtectionInput = struct(n0, _UTPI, 0, [_ETP, _SN], [2, 0]);
export var UpdateTerminationProtectionOutput = struct(n0, _UTPO, 0, [_SI], [0]);
export var UpdateTerminationProtection = op(
  n0,
  _UTP,
  0,
  () => UpdateTerminationProtectionInput,
  () => UpdateTerminationProtectionOutput
);

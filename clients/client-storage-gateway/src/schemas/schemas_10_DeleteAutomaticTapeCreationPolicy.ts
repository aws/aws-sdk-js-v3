// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DATCP, _DATCPI, _DATCPO, _GARN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAutomaticTapeCreationPolicyInput = struct(n0, _DATCPI, 0, [_GARN], [0]);
export var DeleteAutomaticTapeCreationPolicyOutput = struct(n0, _DATCPO, 0, [_GARN], [0]);
export var DeleteAutomaticTapeCreationPolicy = op(
  n0,
  _DATCP,
  0,
  () => DeleteAutomaticTapeCreationPolicyInput,
  () => DeleteAutomaticTapeCreationPolicyOutput
);

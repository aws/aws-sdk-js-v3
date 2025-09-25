// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ARN, _N, _RSe, _RSR, _RSRe, _SI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RestoreSecretRequest = struct(n0, _RSR, 0, [_SI], [0]);
export var RestoreSecretResponse = struct(n0, _RSRe, 0, [_ARN, _N], [0, 0]);
export var RestoreSecret = op(
  n0,
  _RSe,
  0,
  () => RestoreSecretRequest,
  () => RestoreSecretResponse
);

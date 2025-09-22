// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEe, _DER, _DERe, _EAx, _ENx, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteExperimentRequest = struct(n0, _DER, 0, [_ENx], [0]);
export var DeleteExperimentResponse = struct(n0, _DERe, 0, [_EAx], [0]);
export var DeleteExperiment = op(
  n0,
  _DEe,
  0,
  () => DeleteExperimentRequest,
  () => DeleteExperimentResponse
);

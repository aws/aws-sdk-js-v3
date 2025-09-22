// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LAI, _RFALA, _RFALAR, _S, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var RunFleetAdvisorLsaAnalysisResponse = struct(n0, _RFALAR, 0, [_LAI, _S], [0, 0]);
export var RunFleetAdvisorLsaAnalysis = op(
  n0,
  _RFALA,
  0,
  () => Unit,
  () => RunFleetAdvisorLsaAnalysisResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _A, _DFALA, _DFALAR, _DFALARe, _FALAR, _FALARL, _LAI, _MR, _NTe, _S, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeFleetAdvisorLsaAnalysisRequest = struct(n0, _DFALAR, 0, [_MR, _NTe], [1, 0]);
export var DescribeFleetAdvisorLsaAnalysisResponse = struct(
  n0,
  _DFALARe,
  0,
  [_A, _NTe],
  [() => FleetAdvisorLsaAnalysisResponseList, 0]
);
export var FleetAdvisorLsaAnalysisResponse = struct(n0, _FALAR, 0, [_LAI, _S], [0, 0]);
export var FleetAdvisorLsaAnalysisResponseList = list(n0, _FALARL, 0, () => FleetAdvisorLsaAnalysisResponse);
export var DescribeFleetAdvisorLsaAnalysis = op(
  n0,
  _DFALA,
  0,
  () => DescribeFleetAdvisorLsaAnalysisRequest,
  () => DescribeFleetAdvisorLsaAnalysisResponse
);

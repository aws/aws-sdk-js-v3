// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DNIASA, _DNIASAR, _DNIASARe, _DR, _eQN, _NIASAI, _nIASAI, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNetworkInsightsAccessScopeAnalysisRequest = struct(n0, _DNIASAR, 0, [_NIASAI, _DR], [0, 2]);
export var DeleteNetworkInsightsAccessScopeAnalysisResult = struct(
  n0,
  _DNIASARe,
  0,
  [_NIASAI],
  [
    [
      0,
      {
        [_eQN]: `NetworkInsightsAccessScopeAnalysisId`,
        [_xN]: _nIASAI,
      },
    ],
  ]
);
export var DeleteNetworkInsightsAccessScopeAnalysis = op(
  n0,
  _DNIASA,
  0,
  () => DeleteNetworkInsightsAccessScopeAnalysisRequest,
  () => DeleteNetworkInsightsAccessScopeAnalysisResult
);

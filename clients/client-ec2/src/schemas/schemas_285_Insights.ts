// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DNIA, _DNIAR, _DNIARe, _DR, _eQN, _NIAI, _nIAI, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNetworkInsightsAnalysisRequest = struct(n0, _DNIAR, 0, [_DR, _NIAI], [2, 0]);
export var DeleteNetworkInsightsAnalysisResult = struct(
  n0,
  _DNIARe,
  0,
  [_NIAI],
  [
    [
      0,
      {
        [_eQN]: `NetworkInsightsAnalysisId`,
        [_xN]: _nIAI,
      },
    ],
  ]
);
export var DeleteNetworkInsightsAnalysis = op(
  n0,
  _DNIA,
  0,
  () => DeleteNetworkInsightsAnalysisRequest,
  () => DeleteNetworkInsightsAnalysisResult
);

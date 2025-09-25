// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DDMA, _DDMAR, _DDMARe, _h, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeDetectorModelAnalysisRequest = struct(n0, _DDMAR, 0, [_aI], [[0, 1]]);
export var DescribeDetectorModelAnalysisResponse = struct(n0, _DDMARe, 0, [_st], [0]);
export var DescribeDetectorModelAnalysis = op(
  n0,
  _DDMA,
  {
    [_h]: ["GET", "/analysis/detector-models/{analysisId}", 200],
  },
  () => DescribeDetectorModelAnalysisRequest,
  () => DescribeDetectorModelAnalysisResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cTl, _DRT, _DRTR, _DRTRe, _h, _rTA, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRecommendationTemplateRequest = struct(n0, _DRTR, 0, [_rTA, _cTl], [0, [0, 4]]);
export var DeleteRecommendationTemplateResponse = struct(n0, _DRTRe, 0, [_rTA, _st], [0, 0]);
export var DeleteRecommendationTemplate = op(
  n0,
  _DRT,
  {
    [_h]: ["POST", "/delete-recommendation-template", 200],
  },
  () => DeleteRecommendationTemplateRequest,
  () => DeleteRecommendationTemplateResponse
);

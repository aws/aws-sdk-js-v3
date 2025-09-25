// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _CRTI, _CRTO, _CRTr, _D, _h, _L, _N, _TA, _Ta, _TN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateReviewTemplateInput = struct(
  n0,
  _CRTI,
  0,
  [_TN, _D, _L, _N, _Ta, _CRT],
  [0, 0, 64 | 0, 0, 128 | 0, [0, 4]]
);
export var CreateReviewTemplateOutput = struct(n0, _CRTO, 0, [_TA], [0]);
export var ReviewTemplateLenses = 64 | 0;

export var CreateReviewTemplate = op(
  n0,
  _CRTr,
  {
    [_h]: ["POST", "/reviewTemplates", 200],
  },
  () => CreateReviewTemplateInput,
  () => CreateReviewTemplateOutput
);

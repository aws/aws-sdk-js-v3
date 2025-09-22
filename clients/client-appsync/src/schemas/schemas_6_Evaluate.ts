// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _con, _e, _ED, _EMT, _EMTR, _EMTRv, _eR, _h, _lo, _m, _oE, _st, _te, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ErrorDetail = struct(n0, _ED, 0, [_m], [0]);
export var EvaluateMappingTemplateRequest = struct(n0, _EMTR, 0, [_te, _con], [0, 0]);
export var EvaluateMappingTemplateResponse = struct(
  n0,
  _EMTRv,
  0,
  [_eR, _e, _lo, _st, _oE],
  [0, () => ErrorDetail, 64 | 0, 0, 0]
);
export var Logs = 64 | 0;

export var EvaluateMappingTemplate = op(
  n0,
  _EMT,
  {
    [_h]: ["POST", "/v1/dataplane-evaluatetemplate", 200],
  },
  () => EvaluateMappingTemplateRequest,
  () => EvaluateMappingTemplateResponse
);

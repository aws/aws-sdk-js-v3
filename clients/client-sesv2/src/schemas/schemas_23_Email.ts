// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _RTen, _TD, _TN, _TRET, _TRETR, _TRETRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var TestRenderEmailTemplateRequest = struct(n0, _TRETR, 0, [_TN, _TD], [[0, 1], 0]);
export var TestRenderEmailTemplateResponse = struct(n0, _TRETRe, 0, [_RTen], [0]);
export var TestRenderEmailTemplate = op(
  n0,
  _TRET,
  {
    [_h]: ["POST", "/v2/email/templates/{TemplateName}/render", 200],
  },
  () => TestRenderEmailTemplateRequest,
  () => TestRenderEmailTemplateResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DETe, _DETR, _DETRe, _h, _TN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEmailTemplateRequest = struct(n0, _DETR, 0, [_TN], [[0, 1]]);
export var DeleteEmailTemplateResponse = struct(n0, _DETRe, 0, [], []);
export var DeleteEmailTemplate = op(
  n0,
  _DETe,
  {
    [_h]: ["DELETE", "/v2/email/templates/{TemplateName}", 200],
  },
  () => DeleteEmailTemplateRequest,
  () => DeleteEmailTemplateResponse
);

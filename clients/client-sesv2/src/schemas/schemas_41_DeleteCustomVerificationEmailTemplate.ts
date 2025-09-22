// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCVET, _DCVETR, _DCVETRe, _h, _TN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCustomVerificationEmailTemplateRequest = struct(n0, _DCVETR, 0, [_TN], [[0, 1]]);
export var DeleteCustomVerificationEmailTemplateResponse = struct(n0, _DCVETRe, 0, [], []);
export var DeleteCustomVerificationEmailTemplate = op(
  n0,
  _DCVET,
  {
    [_h]: ["DELETE", "/v2/email/custom-verification-email-templates/{TemplateName}", 200],
  },
  () => DeleteCustomVerificationEmailTemplateRequest,
  () => DeleteCustomVerificationEmailTemplateResponse
);

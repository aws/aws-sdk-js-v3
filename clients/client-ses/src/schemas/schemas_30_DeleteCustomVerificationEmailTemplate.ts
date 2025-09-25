// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCVET, _DCVETR, _TN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCustomVerificationEmailTemplateRequest = struct(n0, _DCVETR, 0, [_TN], [0]);
export var DeleteCustomVerificationEmailTemplate = op(
  n0,
  _DCVET,
  0,
  () => DeleteCustomVerificationEmailTemplateRequest,
  () => Unit
);

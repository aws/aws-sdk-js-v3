// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTel, _DTR, _DTRe, _TN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTemplateRequest = struct(n0, _DTR, 0, [_TN], [0]);
export var DeleteTemplateResponse = struct(n0, _DTRe, 0, [], []);
export var DeleteTemplate = op(
  n0,
  _DTel,
  0,
  () => DeleteTemplateRequest,
  () => DeleteTemplateResponse
);

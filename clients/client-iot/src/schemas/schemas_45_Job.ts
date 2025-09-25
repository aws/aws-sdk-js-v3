// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DJT, _DJTR, _h, _jTI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteJobTemplateRequest = struct(n0, _DJTR, 0, [_jTI], [[0, 1]]);
export var DeleteJobTemplate = op(
  n0,
  _DJT,
  {
    [_h]: ["DELETE", "/job-templates/{jobTemplateId}", 200],
  },
  () => DeleteJobTemplateRequest,
  () => Unit
);

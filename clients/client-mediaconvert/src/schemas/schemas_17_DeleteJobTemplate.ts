// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DJT, _DJTR, _DJTRe, _ht, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteJobTemplateRequest = struct(n0, _DJTR, 0, [_N], [[0, 1]]);
export var DeleteJobTemplateResponse = struct(n0, _DJTRe, 0, [], []);
export var DeleteJobTemplate = op(
  n0,
  _DJT,
  {
    [_ht]: ["DELETE", "/2017-08-29/jobTemplates/{Name}", 202],
  },
  () => DeleteJobTemplateRequest,
  () => DeleteJobTemplateResponse
);

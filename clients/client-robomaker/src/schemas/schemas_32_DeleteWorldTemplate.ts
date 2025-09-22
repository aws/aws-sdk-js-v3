// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWT, _DWTR, _DWTRe, _h, _te, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorldTemplateRequest = struct(n0, _DWTR, 0, [_te], [0]);
export var DeleteWorldTemplateResponse = struct(n0, _DWTRe, 0, [], []);
export var DeleteWorldTemplate = op(
  n0,
  _DWT,
  {
    [_h]: ["POST", "/deleteWorldTemplate", 200],
  },
  () => DeleteWorldTemplateRequest,
  () => DeleteWorldTemplateResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _GMT, _GMTR, _GMTRe, _ht, _jN, _MI, _Va, _va, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetModelTemplateRequest = struct(
  n0,
  _GMTR,
  0,
  [_AI, _MI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetModelTemplateResponse = struct(
  n0,
  _GMTRe,
  0,
  [_Va],
  [
    [
      0,
      {
        [_jN]: _va,
      },
    ],
  ]
);
export var GetModelTemplate = op(
  n0,
  _GMT,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/models/{ModelId}/template", 200],
  },
  () => GetModelTemplateRequest,
  () => GetModelTemplateResponse
);

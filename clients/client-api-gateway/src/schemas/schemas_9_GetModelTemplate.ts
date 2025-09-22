// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GMT, _GMTR, _ht, _mN, _rAI, _Te, _v, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetModelTemplateRequest = struct(
  n0,
  _GMTR,
  0,
  [_rAI, _mN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var Template = struct(n0, _Te, 0, [_v], [0]);
export var GetModelTemplate = op(
  n0,
  _GMT,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/models/{modelName}/default_template", 200],
  },
  () => GetModelTemplateRequest,
  () => Template
);

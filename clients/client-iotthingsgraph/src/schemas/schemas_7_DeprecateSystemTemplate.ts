// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSTe, _DSTRep, _DSTRepr, _i, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeprecateSystemTemplateRequest = struct(n0, _DSTRep, 0, [_i], [0]);
export var DeprecateSystemTemplateResponse = struct(n0, _DSTRepr, 0, [], []);
export var DeprecateSystemTemplate = op(
  n0,
  _DSTe,
  0,
  () => DeprecateSystemTemplateRequest,
  () => DeprecateSystemTemplateResponse
);

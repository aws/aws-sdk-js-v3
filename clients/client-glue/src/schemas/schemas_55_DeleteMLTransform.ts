// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMLT, _DMLTR, _DMLTRe, _TIr, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMLTransformRequest = struct(n0, _DMLTR, 0, [_TIr], [0]);
export var DeleteMLTransformResponse = struct(n0, _DMLTRe, 0, [_TIr], [0]);
export var DeleteMLTransform = op(
  n0,
  _DMLT,
  0,
  () => DeleteMLTransformRequest,
  () => DeleteMLTransformResponse
);

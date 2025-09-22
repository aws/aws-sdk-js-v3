// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _STJRt, _STJt, _TJNr, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopTransformJobRequest = struct(n0, _STJRt, 0, [_TJNr], [0]);
export var StopTransformJob = op(
  n0,
  _STJt,
  0,
  () => StopTransformJobRequest,
  () => Unit
);

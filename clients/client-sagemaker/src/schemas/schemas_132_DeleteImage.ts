// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIel, _DIR, _DIRe, _IN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteImageRequest = struct(n0, _DIR, 0, [_IN], [0]);
export var DeleteImageResponse = struct(n0, _DIRe, 0, [], []);
export var DeleteImage = op(
  n0,
  _DIel,
  0,
  () => DeleteImageRequest,
  () => DeleteImageResponse
);

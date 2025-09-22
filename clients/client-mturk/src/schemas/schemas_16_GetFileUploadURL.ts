// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _FUURL, _GFUURL, _GFUURLR, _GFUURLRe, _QI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetFileUploadURLRequest = struct(n0, _GFUURLR, 0, [_AI, _QI], [0, 0]);
export var GetFileUploadURLResponse = struct(n0, _GFUURLRe, 0, [_FUURL], [0]);
export var GetFileUploadURL = op(
  n0,
  _GFUURL,
  2,
  () => GetFileUploadURLRequest,
  () => GetFileUploadURLResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _GLFT, _GLFTR, _GLFTRe, _h, _TK, _TV, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetLFTagRequest = struct(n0, _GLFTR, 0, [_CI, _TK], [0, 0]);
export var GetLFTagResponse = struct(n0, _GLFTRe, 0, [_CI, _TK, _TV], [0, 0, 64 | 0]);
export var GetLFTag = op(
  n0,
  _GLFT,
  {
    [_h]: ["POST", "/GetLFTag", 200],
  },
  () => GetLFTagRequest,
  () => GetLFTagResponse
);

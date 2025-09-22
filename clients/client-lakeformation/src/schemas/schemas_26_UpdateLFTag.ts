// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _h, _TK, _TVTA, _TVTD, _ULFT, _ULFTR, _ULFTRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateLFTagRequest = struct(n0, _ULFTR, 0, [_CI, _TK, _TVTD, _TVTA], [0, 0, 64 | 0, 64 | 0]);
export var UpdateLFTagResponse = struct(n0, _ULFTRp, 0, [], []);
export var UpdateLFTag = op(
  n0,
  _ULFT,
  {
    [_h]: ["POST", "/UpdateLFTag", 200],
  },
  () => UpdateLFTagRequest,
  () => UpdateLFTagResponse
);

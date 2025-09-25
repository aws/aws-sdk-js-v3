// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _DLFT, _DLFTR, _DLFTRe, _h, _TK, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLFTagRequest = struct(n0, _DLFTR, 0, [_CI, _TK], [0, 0]);
export var DeleteLFTagResponse = struct(n0, _DLFTRe, 0, [], []);
export var DeleteLFTag = op(
  n0,
  _DLFT,
  {
    [_h]: ["POST", "/DeleteLFTag", 200],
  },
  () => DeleteLFTagRequest,
  () => DeleteLFTagResponse
);

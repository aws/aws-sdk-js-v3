// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _RA, _RTFR, _RTFRM, _RTFRR, _TK, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveTagsFromResourceMessage = struct(n0, _RTFRM, 0, [_RA, _TK], [0, 64 | 0]);
export var RemoveTagsFromResourceResponse = struct(n0, _RTFRR, 0, [], []);
export var KeyList = 64 | 0;

export var RemoveTagsFromResource = op(
  n0,
  _RTFR,
  0,
  () => RemoveTagsFromResourceMessage,
  () => RemoveTagsFromResourceResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _lGN, _LTLG, _LTLGR, _LTLGRi, _ta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsLogGroupRequest = struct(n0, _LTLGR, 0, [_lGN], [0]);
export var ListTagsLogGroupResponse = struct(n0, _LTLGRi, 0, [_ta], [128 | 0]);
export var ListTagsLogGroup = op(
  n0,
  _LTLG,
  0,
  () => ListTagsLogGroupRequest,
  () => ListTagsLogGroupResponse
);

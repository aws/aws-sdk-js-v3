// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ARN, _h, _RT, _RTR, _TK, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveTagsRequest = struct(n0, _RTR, 0, [_ARN, _TK], [0, 64 | 0]);
export var RemoveTags = op(
  n0,
  _RT,
  {
    [_h]: ["POST", "/2021-01-01/tags-removal", 200],
  },
  () => RemoveTagsRequest,
  () => Unit
);

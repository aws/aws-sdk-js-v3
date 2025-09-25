// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTe, _DTR, _DTRe, _RI, _TK, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTagsRequest = struct(n0, _DTR, 0, [_RI, _TK], [0, 64 | 0]);
export var DeleteTagsResult = struct(n0, _DTRe, 0, [], []);
export var TagKeyList = 64 | 0;

export var DeleteTags = op(
  n0,
  _DTe,
  0,
  () => DeleteTagsRequest,
  () => DeleteTagsResult
);

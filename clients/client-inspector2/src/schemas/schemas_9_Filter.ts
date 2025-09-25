// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _arn, _DFe, _DFR, _DFRe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFilterRequest = struct(n0, _DFR, 0, [_arn], [0]);
export var DeleteFilterResponse = struct(n0, _DFRe, 0, [_arn], [0]);
export var DeleteFilter = op(
  n0,
  _DFe,
  {
    [_ht]: ["POST", "/filters/delete", 200],
  },
  () => DeleteFilterRequest,
  () => DeleteFilterResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIp, _DI, _DIR, _DIRe, _ht, _iI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIndexRequest = struct(
  n0,
  _DIR,
  0,
  [_aIp, _iI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteIndexResponse = struct(n0, _DIRe, 0, [], []);
export var DeleteIndex = op(
  n0,
  _DI,
  {
    [_ht]: ["DELETE", "/applications/{applicationId}/indices/{indexId}", 200],
  },
  () => DeleteIndexRequest,
  () => DeleteIndexResponse
);

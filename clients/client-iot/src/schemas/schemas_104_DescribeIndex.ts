// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _DIR, _DIRe, _h, _iN, _iSn, _sc, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeIndexRequest = struct(n0, _DIR, 0, [_iN], [[0, 1]]);
export var DescribeIndexResponse = struct(n0, _DIRe, 0, [_iN, _iSn, _sc], [0, 0, 0]);
export var DescribeIndex = op(
  n0,
  _DI,
  {
    [_h]: ["GET", "/indices/{indexName}", 200],
  },
  () => DescribeIndexRequest,
  () => DescribeIndexResponse
);

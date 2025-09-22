// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aQ, _cA, _cRA, _cRN, _cRo, _DCRe, _DCRRes, _DCRResc, _ht, _iUQ, _rT, _t, _tQ, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeConsumableResourceRequest = struct(n0, _DCRRes, 0, [_cRo], [0]);
export var DescribeConsumableResourceResponse = struct(
  n0,
  _DCRResc,
  0,
  [_cRN, _cRA, _tQ, _iUQ, _aQ, _rT, _cA, _t],
  [0, 0, 1, 1, 1, 0, 1, 128 | 0]
);
export var DescribeConsumableResource = op(
  n0,
  _DCRe,
  {
    [_ht]: ["POST", "/v1/describeconsumableresource", 200],
  },
  () => DescribeConsumableResourceRequest,
  () => DescribeConsumableResourceResponse
);

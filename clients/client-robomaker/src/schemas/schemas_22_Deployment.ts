// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _cA, _DFe, _DFRes, _DFResc, _f, _h, _lDJ, _lDS, _lDT, _n, _ro, _t, n0 } from "./schemas_0";
import { Robots } from "./schemas_6_Describe";

/* eslint no-var: 0 */

export var DescribeFleetRequest = struct(n0, _DFRes, 0, [_f], [0]);
export var DescribeFleetResponse = struct(
  n0,
  _DFResc,
  0,
  [_n, _a, _ro, _cA, _lDS, _lDJ, _lDT, _t],
  [0, 0, () => Robots, 4, 0, 0, 4, 128 | 0]
);
export var DescribeFleet = op(
  n0,
  _DFe,
  {
    [_h]: ["POST", "/describeFleet", 200],
  },
  () => DescribeFleetRequest,
  () => DescribeFleetResponse
);

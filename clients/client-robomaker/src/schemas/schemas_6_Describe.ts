// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _ar,
  _cA,
  _DRes,
  _DRRes,
  _DRResc,
  _fA,
  _gGGI,
  _gGI,
  _h,
  _lDJ,
  _lDT,
  _n,
  _R,
  _r,
  _Ro,
  _s,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeRobotRequest = struct(n0, _DRRes, 0, [_r], [0]);
export var DescribeRobotResponse = struct(
  n0,
  _DRResc,
  0,
  [_a, _n, _fA, _s, _gGI, _cA, _ar, _lDJ, _lDT, _t],
  [0, 0, 0, 0, 0, 4, 0, 0, 4, 128 | 0]
);
export var Robot = struct(n0, _R, 0, [_a, _n, _fA, _s, _gGGI, _cA, _ar, _lDJ, _lDT], [0, 0, 0, 0, 0, 4, 0, 0, 4]);
export var Robots = list(n0, _Ro, 0, () => Robot);
export var DescribeRobot = op(
  n0,
  _DRes,
  {
    [_h]: ["POST", "/describeRobot", 200],
  },
  () => DescribeRobotRequest,
  () => DescribeRobotResponse
);

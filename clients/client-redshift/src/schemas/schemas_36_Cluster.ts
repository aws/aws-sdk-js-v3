// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ATp,
  _AVl,
  _D,
  _DCP,
  _DDCP,
  _DDCPM,
  _DDCPR,
  _DT,
  _IMs,
  _M,
  _MEV,
  _MR,
  _P,
  _Pa,
  _PGF,
  _PL,
  _PN,
  _PV,
  _So,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DefaultClusterParameters = struct(n0, _DCP, 0, [_PGF, _M, _P], [0, 0, [() => ParametersList, 0]]);
export var DescribeDefaultClusterParametersMessage = struct(n0, _DDCPM, 0, [_PGF, _MR, _M], [0, 1, 0]);
export var DescribeDefaultClusterParametersResult = struct(
  n0,
  _DDCPR,
  0,
  [_DCP],
  [[() => DefaultClusterParameters, 0]]
);
export var Parameter = struct(
  n0,
  _Pa,
  0,
  [_PN, _PV, _D, _So, _DT, _AVl, _ATp, _IMs, _MEV],
  [0, 0, 0, 0, 0, 0, 0, 2, 0]
);
export var ParametersList = list(n0, _PL, 0, [
  () => Parameter,
  {
    [_xN]: _Pa,
  },
]);
export var DescribeDefaultClusterParameters = op(
  n0,
  _DDCP,
  0,
  () => DescribeDefaultClusterParametersMessage,
  () => DescribeDefaultClusterParametersResult
);

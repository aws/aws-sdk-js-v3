// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _Ac,
  _Ad,
  _APM,
  _d,
  _DAe,
  _DAIe,
  _DAOe,
  _De,
  _Dec,
  _Do,
  _EI,
  _h,
  _hQ,
  _IPM,
  _LCa,
  _LO,
  _N,
  _S,
  _s,
  _SAEI,
  _SAPM,
  _St,
  _TS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeAppInput = struct(
  n0,
  _DAIe,
  0,
  [_S, _Do, _A],
  [
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
  ]
);
export var DescribeAppOutput = struct(
  n0,
  _DAOe,
  0,
  [_N, _S, _Do, _St, _TS, _LO, _De, _EI],
  [0, 0, 0, 0, 0, () => LaunchOverrides, 0, () => SimulationAppEndpointInfo]
);
export var LaunchOverrides = struct(n0, _LO, 0, [_LCa], [64 | 0]);
export var SimulationAppEndpointInfo = struct(n0, _SAEI, 0, [_Ad, _IPM], [0, () => AppPortMappings]);
export var SimulationAppPortMapping = struct(n0, _SAPM, 0, [_Dec, _Ac], [1, 1]);
export var AppPortMappings = list(n0, _APM, 0, () => SimulationAppPortMapping);
export var LaunchCommandList = 64 | 0;

export var DescribeApp = op(
  n0,
  _DAe,
  {
    [_h]: ["GET", "/describeapp", 200],
  },
  () => DescribeAppInput,
  () => DescribeAppOutput
);

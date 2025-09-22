// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _a, _cT, _dSN, _lUA, _n, _rAN, _s, _sAN, _SJS, _SJSi, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SimulationJobSummary = struct(
  n0,
  _SJS,
  0,
  [_a, _lUA, _n, _s, _sAN, _rAN, _dSN, _cT],
  [0, 4, 0, 0, 64 | 0, 64 | 0, 64 | 0, 0]
);
export var DataSourceNames = 64 | 0;

export var RobotApplicationNames = 64 | 0;

export var SimulationApplicationNames = 64 | 0;

export var SimulationJobSummaries = list(n0, _SJSi, 0, () => SimulationJobSummary);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LP, _LPI, _LPO, _nT, _p, _sB, _sO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListProjectsInput = struct(n0, _LPI, 0, [_sB, _sO, _nT], [0, 0, 0]);
export var ListProjectsOutput = struct(n0, _LPO, 0, [_nT, _p], [0, 64 | 0]);
export var ProjectNames = 64 | 0;

export var ListProjects = op(
  n0,
  _LP,
  0,
  () => ListProjectsInput,
  () => ListProjectsOutput
);

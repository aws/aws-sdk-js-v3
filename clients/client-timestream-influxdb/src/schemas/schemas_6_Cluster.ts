// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dCI, _dCS, _DDC, _DDCI, _DDCO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDbClusterInput = struct(n0, _DDCI, 0, [_dCI], [0]);
export var DeleteDbClusterOutput = struct(n0, _DDCO, 0, [_dCS], [0]);
export var DeleteDbCluster = op(
  n0,
  _DDC,
  2,
  () => DeleteDbClusterInput,
  () => DeleteDbClusterOutput
);

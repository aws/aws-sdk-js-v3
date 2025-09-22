// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DSC, _DSCI, _DSCO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSourceCredentialsInput = struct(n0, _DSCI, 0, [_a], [0]);
export var DeleteSourceCredentialsOutput = struct(n0, _DSCO, 0, [_a], [0]);
export var DeleteSourceCredentials = op(
  n0,
  _DSC,
  0,
  () => DeleteSourceCredentialsInput,
  () => DeleteSourceCredentialsOutput
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSC, _DSCI, _DSCO, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSecurityConfigurationInput = struct(n0, _DSCI, 0, [_N], [0]);
export var DeleteSecurityConfigurationOutput = struct(n0, _DSCO, 0, [], []);
export var DeleteSecurityConfiguration = op(
  n0,
  _DSC,
  0,
  () => DeleteSecurityConfigurationInput,
  () => DeleteSecurityConfigurationOutput
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CDT, _CSC, _CSCI, _CSCO, _N, _SC, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSecurityConfigurationInput = struct(n0, _CSCI, 0, [_N, _SC], [0, 0]);
export var CreateSecurityConfigurationOutput = struct(n0, _CSCO, 0, [_N, _CDT], [0, 4]);
export var CreateSecurityConfiguration = op(
  n0,
  _CSC,
  0,
  () => CreateSecurityConfigurationInput,
  () => CreateSecurityConfigurationOutput
);

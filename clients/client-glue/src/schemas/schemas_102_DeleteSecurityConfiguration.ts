// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSC, _DSCR, _DSCRe, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSecurityConfigurationRequest = struct(n0, _DSCR, 0, [_N], [0]);
export var DeleteSecurityConfigurationResponse = struct(n0, _DSCRe, 0, [], []);
export var DeleteSecurityConfiguration = op(
  n0,
  _DSC,
  0,
  () => DeleteSecurityConfigurationRequest,
  () => DeleteSecurityConfigurationResponse
);

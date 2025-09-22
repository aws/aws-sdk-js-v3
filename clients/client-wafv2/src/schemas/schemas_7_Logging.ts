// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DLC, _DLCR, _DLCRe, _LS, _LTo, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLoggingConfigurationRequest = struct(n0, _DLCR, 0, [_RA, _LTo, _LS], [0, 0, 0]);
export var DeleteLoggingConfigurationResponse = struct(n0, _DLCRe, 0, [], []);
export var DeleteLoggingConfiguration = op(
  n0,
  _DLC,
  0,
  () => DeleteLoggingConfigurationRequest,
  () => DeleteLoggingConfigurationResponse
);

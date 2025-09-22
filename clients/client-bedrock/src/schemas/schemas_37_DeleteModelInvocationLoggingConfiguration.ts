// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMILC, _DMILCR, _DMILCRe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteModelInvocationLoggingConfigurationRequest = struct(n0, _DMILCR, 0, [], []);
export var DeleteModelInvocationLoggingConfigurationResponse = struct(n0, _DMILCRe, 0, [], []);
export var DeleteModelInvocationLoggingConfiguration = op(
  n0,
  _DMILC,
  {
    [_ht]: ["DELETE", "/logging/modelinvocations", 200],
  },
  () => DeleteModelInvocationLoggingConfigurationRequest,
  () => DeleteModelInvocationLoggingConfigurationResponse
);

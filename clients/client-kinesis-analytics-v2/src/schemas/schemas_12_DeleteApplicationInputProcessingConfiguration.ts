// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AARN, _AN, _AVI, _CAVI, _DAIPC, _DAIPCR, _DAIPCRe, _II, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApplicationInputProcessingConfigurationRequest = struct(n0, _DAIPCR, 0, [_AN, _CAVI, _II], [0, 1, 0]);
export var DeleteApplicationInputProcessingConfigurationResponse = struct(n0, _DAIPCRe, 0, [_AARN, _AVI], [0, 1]);
export var DeleteApplicationInputProcessingConfiguration = op(
  n0,
  _DAIPC,
  0,
  () => DeleteApplicationInputProcessingConfigurationRequest,
  () => DeleteApplicationInputProcessingConfigurationResponse
);

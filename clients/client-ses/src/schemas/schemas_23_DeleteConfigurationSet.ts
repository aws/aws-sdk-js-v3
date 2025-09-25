// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSN, _DCS, _DCSR, _DCSRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConfigurationSetRequest = struct(n0, _DCSR, 0, [_CSN], [0]);
export var DeleteConfigurationSetResponse = struct(n0, _DCSRe, 0, [], []);
export var DeleteConfigurationSet = op(
  n0,
  _DCS,
  0,
  () => DeleteConfigurationSetRequest,
  () => DeleteConfigurationSetResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CT, _DSIMS, _DSIMSR, _DSIMSRe, _SIMSI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSqlInjectionMatchSetRequest = struct(n0, _DSIMSR, 0, [_SIMSI, _CT], [0, 0]);
export var DeleteSqlInjectionMatchSetResponse = struct(n0, _DSIMSRe, 0, [_CT], [0]);
export var DeleteSqlInjectionMatchSet = op(
  n0,
  _DSIMS,
  0,
  () => DeleteSqlInjectionMatchSetRequest,
  () => DeleteSqlInjectionMatchSetResponse
);

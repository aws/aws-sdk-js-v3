// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _AARu, _DAA, _DAAR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAggregationAuthorizationRequest = struct(n0, _DAAR, 0, [_AAI, _AARu], [0, 0]);
export var DeleteAggregationAuthorization = op(
  n0,
  _DAA,
  0,
  () => DeleteAggregationAuthorizationRequest,
  () => Unit
);

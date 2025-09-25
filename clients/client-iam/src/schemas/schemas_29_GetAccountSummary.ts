// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GAS, _GASR, _SM, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAccountSummaryResponse = struct(n0, _GASR, 0, [_SM], [128 | 1]);
export var summaryMapType = 128 | 1;

export var GetAccountSummary = op(
  n0,
  _GAS,
  0,
  () => Unit,
  () => GetAccountSummaryResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ILTPAR, _LTPIo, _RJ, _ULTP, _ULTPR, _ULTPRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateLongTermPricingRequest = struct(n0, _ULTPR, 0, [_LTPIo, _RJ, _ILTPAR], [0, 0, 2]);
export var UpdateLongTermPricingResult = struct(n0, _ULTPRp, 0, [], []);
export var UpdateLongTermPricing = op(
  n0,
  _ULTP,
  0,
  () => UpdateLongTermPricingRequest,
  () => UpdateLongTermPricingResult
);

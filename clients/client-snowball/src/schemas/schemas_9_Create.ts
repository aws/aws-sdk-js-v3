// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CLTP, _CLTPR, _CLTPRr, _ILTPAR, _LTPIo, _LTPT, _ST, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateLongTermPricingRequest = struct(n0, _CLTPR, 0, [_LTPT, _ILTPAR, _ST], [0, 2, 0]);
export var CreateLongTermPricingResult = struct(n0, _CLTPRr, 0, [_LTPIo], [0]);
export var CreateLongTermPricing = op(
  n0,
  _CLTP,
  0,
  () => CreateLongTermPricingRequest,
  () => CreateLongTermPricingResult
);

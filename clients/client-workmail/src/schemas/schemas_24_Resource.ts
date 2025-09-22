// smithy-typescript generated code
import { sim, struct } from "@smithy/core/schema";

import { _AAR, _ADCR, _ADRR, _BO, _RD, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResourceDescription = sim(n0, _RD, 0, 8);
export var BookingOptions = struct(n0, _BO, 0, [_AAR, _ADRR, _ADCR], [2, 2, 2]);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPNe, _DPNR, _h, _PNIh, n0, Unit } from "./schemas_0";
import { SensitiveNonEmptyString } from "./schemas_30_Phone";

/* eslint no-var: 0 */

export var DeletePhoneNumberRequest = struct(n0, _DPNR, 0, [_PNIh], [[() => SensitiveNonEmptyString, 1]]);
export var DeletePhoneNumber = op(
  n0,
  _DPNe,
  {
    [_h]: ["DELETE", "/phone-numbers/{PhoneNumberId}", 204],
  },
  () => DeletePhoneNumberRequest,
  () => Unit
);

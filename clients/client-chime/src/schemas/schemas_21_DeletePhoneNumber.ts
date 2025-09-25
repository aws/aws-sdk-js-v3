// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPN, _DPNR, _h, _PNIh, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePhoneNumberRequest = struct(n0, _DPNR, 0, [_PNIh], [[0, 1]]);
export var DeletePhoneNumber = op(
  n0,
  _DPN,
  {
    [_h]: ["DELETE", "/phone-numbers/{PhoneNumberId}", 204],
  },
  () => DeletePhoneNumberRequest,
  () => Unit
);

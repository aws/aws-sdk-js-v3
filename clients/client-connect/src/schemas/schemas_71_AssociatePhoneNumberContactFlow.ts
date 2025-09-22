// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _APNCF, _APNCFR, _CFI, _h, _II, _PNI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociatePhoneNumberContactFlowRequest = struct(n0, _APNCFR, 0, [_PNI, _II, _CFI], [[0, 1], 0, 0]);
export var AssociatePhoneNumberContactFlow = op(
  n0,
  _APNCF,
  {
    [_h]: ["PUT", "/phone-number/{PhoneNumberId}/contact-flow", 200],
  },
  () => AssociatePhoneNumberContactFlowRequest,
  () => Unit
);

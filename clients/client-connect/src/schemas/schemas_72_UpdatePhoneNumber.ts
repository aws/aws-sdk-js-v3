// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CT, _h, _II, _PNA, _PNI, _TA, _UPN, _UPNR, _UPNRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdatePhoneNumberRequest = struct(n0, _UPNR, 0, [_PNI, _TA, _II, _CT], [[0, 1], 0, 0, [0, 4]]);
export var UpdatePhoneNumberResponse = struct(n0, _UPNRp, 0, [_PNI, _PNA], [0, 0]);
export var UpdatePhoneNumber = op(
  n0,
  _UPN,
  {
    [_h]: ["PUT", "/phone-number/{PhoneNumberId}", 200],
  },
  () => UpdatePhoneNumberRequest,
  () => UpdatePhoneNumberResponse
);

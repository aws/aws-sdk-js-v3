// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _BDPN, _BDPNR, _BDPNRa, _ECr, _EM, _h, _PNE, _PNEh, _PNEL, _PNI, _PNIh, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeletePhoneNumberRequest = struct(n0, _BDPNR, 0, [_PNI], [64 | 0]);
export var BatchDeletePhoneNumberResponse = struct(n0, _BDPNRa, 0, [_PNE], [() => PhoneNumberErrorList]);
export var PhoneNumberError = struct(n0, _PNEh, 0, [_PNIh, _ECr, _EM], [0, 0, 0]);
export var PhoneNumberErrorList = list(n0, _PNEL, 0, () => PhoneNumberError);
export var BatchDeletePhoneNumber = op(
  n0,
  _BDPN,
  {
    [_h]: ["POST", "/phone-numbers?operation=batch-delete", 200],
  },
  () => BatchDeletePhoneNumberRequest,
  () => BatchDeletePhoneNumberResponse
);

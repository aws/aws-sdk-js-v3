// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DPNFU, _DPNFUR, _DPNFURi, _h, _UI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociatePhoneNumberFromUserRequest = struct(
  n0,
  _DPNFUR,
  0,
  [_AI, _UI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociatePhoneNumberFromUserResponse = struct(n0, _DPNFURi, 0, [], []);
export var DisassociatePhoneNumberFromUser = op(
  n0,
  _DPNFU,
  {
    [_h]: ["POST", "/accounts/{AccountId}/users/{UserId}?operation=disassociate-phone-number", 200],
  },
  () => DisassociatePhoneNumberFromUserRequest,
  () => DisassociatePhoneNumberFromUserResponse
);

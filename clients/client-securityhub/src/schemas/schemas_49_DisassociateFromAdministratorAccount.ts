// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFAA, _DFAAR, _DFAARi, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateFromAdministratorAccountRequest = struct(n0, _DFAAR, 0, [], []);
export var DisassociateFromAdministratorAccountResponse = struct(n0, _DFAARi, 0, [], []);
export var DisassociateFromAdministratorAccount = op(
  n0,
  _DFAA,
  {
    [_h]: ["POST", "/administrator/disassociate", 200],
  },
  () => DisassociateFromAdministratorAccountRequest,
  () => DisassociateFromAdministratorAccountResponse
);

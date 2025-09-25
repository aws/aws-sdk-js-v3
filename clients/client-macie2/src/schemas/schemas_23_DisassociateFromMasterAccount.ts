// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFMA, _DFMAR, _DFMARi, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateFromMasterAccountRequest = struct(n0, _DFMAR, 0, [], []);
export var DisassociateFromMasterAccountResponse = struct(n0, _DFMARi, 0, [], []);
export var DisassociateFromMasterAccount = op(
  n0,
  _DFMA,
  {
    [_h]: ["POST", "/master/disassociate", 200],
  },
  () => DisassociateFromMasterAccountRequest,
  () => DisassociateFromMasterAccountResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWACLi, _DWACLRi, _DWACLRis, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateWebACLRequest = struct(n0, _DWACLRi, 0, [_RA], [0]);
export var DisassociateWebACLResponse = struct(n0, _DWACLRis, 0, [], []);
export var DisassociateWebACL = op(
  n0,
  _DWACLi,
  0,
  () => DisassociateWebACLRequest,
  () => DisassociateWebACLResponse
);

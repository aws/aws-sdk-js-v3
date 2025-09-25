// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AORs, _AOs, _C, _DO, _DOR, _h, _OIp, _REI, _RET, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateOpportunityRequest = struct(n0, _AORs, 0, [_C, _OIp, _RET, _REI], [0, 0, 0, 0]);
export var DisassociateOpportunityRequest = struct(n0, _DOR, 0, [_C, _OIp, _RET, _REI], [0, 0, 0, 0]);
export var AssociateOpportunity = op(
  n0,
  _AOs,
  {
    [_h]: ["POST", "/AssociateOpportunity", 200],
  },
  () => AssociateOpportunityRequest,
  () => Unit
);
export var DisassociateOpportunity = op(
  n0,
  _DO,
  {
    [_h]: ["POST", "/DisassociateOpportunity", 200],
  },
  () => DisassociateOpportunityRequest,
  () => Unit
);

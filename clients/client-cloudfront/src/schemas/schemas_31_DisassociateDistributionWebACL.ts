// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDWACL, _DDWACLR, _DDWACLRi, _ET, _h, _hH, _Id, _IM, _IM_, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateDistributionWebACLRequest = struct(
  n0,
  _DDWACLR,
  0,
  [_Id, _IM],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var DisassociateDistributionWebACLResult = struct(
  n0,
  _DDWACLRi,
  0,
  [_Id, _ET],
  [
    0,
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var DisassociateDistributionWebACL = op(
  n0,
  _DDWACL,
  {
    [_h]: ["PUT", "/2020-05-31/distribution/{Id}/disassociate-web-acl", 200],
  },
  () => DisassociateDistributionWebACLRequest,
  () => DisassociateDistributionWebACLResult
);

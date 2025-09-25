// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDTWACL, _DDTWACLR, _DDTWACLRi, _ET, _h, _hH, _Id, _IM, _IM_, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateDistributionTenantWebACLRequest = struct(
  n0,
  _DDTWACLR,
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
export var DisassociateDistributionTenantWebACLResult = struct(
  n0,
  _DDTWACLRi,
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
export var DisassociateDistributionTenantWebACL = op(
  n0,
  _DDTWACL,
  {
    [_h]: ["PUT", "/2020-05-31/distribution-tenant/{Id}/disassociate-web-acl", 200],
  },
  () => DisassociateDistributionTenantWebACLRequest,
  () => DisassociateDistributionTenantWebACLResult
);

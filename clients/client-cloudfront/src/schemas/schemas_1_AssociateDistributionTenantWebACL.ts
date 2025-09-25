// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ADTWACL, _ADTWACLR, _ADTWACLRs, _ET, _h, _hH, _Id, _IM, _IM_, _WACLA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateDistributionTenantWebACLRequest = struct(
  n0,
  _ADTWACLR,
  0,
  [_Id, _WACLA, _IM],
  [
    [0, 1],
    0,
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var AssociateDistributionTenantWebACLResult = struct(
  n0,
  _ADTWACLRs,
  0,
  [_Id, _WACLA, _ET],
  [
    0,
    0,
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var AssociateDistributionTenantWebACL = op(
  n0,
  _ADTWACL,
  {
    [_h]: ["PUT", "/2020-05-31/distribution-tenant/{Id}/associate-web-acl", 200],
  },
  () => AssociateDistributionTenantWebACLRequest,
  () => AssociateDistributionTenantWebACLResult
);

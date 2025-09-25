// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ADWACL, _ADWACLR, _ADWACLRs, _ET, _h, _hH, _Id, _IM, _IM_, _WACLA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateDistributionWebACLRequest = struct(
  n0,
  _ADWACLR,
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
export var AssociateDistributionWebACLResult = struct(
  n0,
  _ADWACLRs,
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
export var AssociateDistributionWebACL = op(
  n0,
  _ADWACL,
  {
    [_h]: ["PUT", "/2020-05-31/distribution/{Id}/associate-web-acl", 200],
  },
  () => AssociateDistributionWebACLRequest,
  () => AssociateDistributionWebACLResult
);

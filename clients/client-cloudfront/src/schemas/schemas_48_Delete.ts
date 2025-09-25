// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceNotDisabled as __ResourceNotDisabled } from "../models/index";
import { _c, _DDT, _DDTR, _e, _h, _hE, _hH, _Id, _IM, _IM_, _M, _RND, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDistributionTenantRequest = struct(
  n0,
  _DDTR,
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
export var ResourceNotDisabled = error(
  n0,
  _RND,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ResourceNotDisabled
);
export var DeleteDistributionTenant = op(
  n0,
  _DDT,
  {
    [_h]: ["DELETE", "/2020-05-31/distribution-tenant/{Id}", 204],
  },
  () => DeleteDistributionTenantRequest,
  () => Unit
);

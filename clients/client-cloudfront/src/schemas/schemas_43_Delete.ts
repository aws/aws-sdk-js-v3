// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DistributionNotDisabled as __DistributionNotDisabled,
  ResourceInUse as __ResourceInUse,
} from "../models/index";
import { _c, _DD, _DDR, _DND, _e, _h, _hE, _hH, _Id, _IM, _IM_, _M, _RIU, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDistributionRequest = struct(
  n0,
  _DDR,
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
export var DistributionNotDisabled = error(
  n0,
  _DND,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __DistributionNotDisabled
);
export var ResourceInUse = error(
  n0,
  _RIU,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ResourceInUse
);
export var DeleteDistribution = op(
  n0,
  _DD,
  {
    [_h]: ["DELETE", "/2020-05-31/distribution/{Id}", 204],
  },
  () => DeleteDistributionRequest,
  () => Unit
);

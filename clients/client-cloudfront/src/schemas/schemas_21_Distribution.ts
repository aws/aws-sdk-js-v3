// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TooManyDistributionCNAMEs as __TooManyDistributionCNAMEs } from "../models/index";
import { _AA, _AAR, _Al, _c, _e, _h, _hE, _hQ, _M, _TDI, _TMDCNAME, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateAliasRequest = struct(
  n0,
  _AAR,
  0,
  [_TDI, _Al],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Al,
      },
    ],
  ]
);
export var TooManyDistributionCNAMEs = error(
  n0,
  _TMDCNAME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyDistributionCNAMEs
);
export var AssociateAlias = op(
  n0,
  _AA,
  {
    [_h]: ["PUT", "/2020-05-31/distribution/{TargetDistributionId}/associate-alias", 200],
  },
  () => AssociateAliasRequest,
  () => Unit
);

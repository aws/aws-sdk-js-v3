// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  NoSuchOriginAccessControl as __NoSuchOriginAccessControl,
  OriginAccessControlInUse as __OriginAccessControlInUse,
} from "../models/index";
import { _c, _DOAC, _DOACR, _e, _h, _hE, _hH, _Id, _IM, _IM_, _M, _NSOAC, _OACIU, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteOriginAccessControlRequest = struct(
  n0,
  _DOACR,
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
export var NoSuchOriginAccessControl = error(
  n0,
  _NSOAC,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchOriginAccessControl
);
export var OriginAccessControlInUse = error(
  n0,
  _OACIU,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __OriginAccessControlInUse
);
export var DeleteOriginAccessControl = op(
  n0,
  _DOAC,
  {
    [_h]: ["DELETE", "/2020-05-31/origin-access-control/{Id}", 204],
  },
  () => DeleteOriginAccessControlRequest,
  () => Unit
);

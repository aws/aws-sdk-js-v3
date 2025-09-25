// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { IllegalDelete as __IllegalDelete } from "../models/index";
import {
  _c,
  _DAIL,
  _DAILR,
  _DVO,
  _DVOR,
  _DVORe,
  _e,
  _ET,
  _h,
  _hE,
  _hH,
  _Id,
  _IDl,
  _IM,
  _IM_,
  _M,
  _VO,
  n0,
  Unit,
} from "./schemas_0";
import { VpcOrigin } from "./schemas_57_Origin";

/* eslint no-var: 0 */

export var DeleteAnycastIpListRequest = struct(
  n0,
  _DAILR,
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
export var DeleteVpcOriginRequest = struct(
  n0,
  _DVOR,
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
export var DeleteVpcOriginResult = struct(
  n0,
  _DVORe,
  0,
  [_VO, _ET],
  [
    [() => VpcOrigin, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var IllegalDelete = error(
  n0,
  _IDl,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __IllegalDelete
);
export var DeleteAnycastIpList = op(
  n0,
  _DAIL,
  {
    [_h]: ["DELETE", "/2020-05-31/anycast-ip-list/{Id}", 204],
  },
  () => DeleteAnycastIpListRequest,
  () => Unit
);
export var DeleteVpcOrigin = op(
  n0,
  _DVO,
  {
    [_h]: ["DELETE", "/2020-05-31/vpc-origin/{Id}", 202],
  },
  () => DeleteVpcOriginRequest,
  () => DeleteVpcOriginResult
);

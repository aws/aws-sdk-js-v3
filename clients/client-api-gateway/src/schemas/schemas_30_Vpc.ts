// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CVL,
  _CVLR,
  _d,
  _GVL,
  _GVLe,
  _GVLR,
  _GVLRe,
  _hQ,
  _ht,
  _i,
  _it,
  _ite,
  _jN,
  _li,
  _LOVL,
  _n,
  _p,
  _pO,
  _sM,
  _st,
  _t,
  _tA,
  _UVL,
  _UVLR,
  _VL,
  _vLI,
  _VLp,
  ListOfPatchOperation,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateVpcLinkRequest = struct(n0, _CVLR, 0, [_n, _d, _tA, _t], [0, 0, 64 | 0, 128 | 0]);
export var GetVpcLinkRequest = struct(n0, _GVLR, 0, [_vLI], [[0, 1]]);
export var GetVpcLinksRequest = struct(
  n0,
  _GVLRe,
  0,
  [_p, _li],
  [
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
  ]
);
export var UpdateVpcLinkRequest = struct(n0, _UVLR, 0, [_vLI, _pO], [[0, 1], () => ListOfPatchOperation]);
export var VpcLink = struct(n0, _VL, 0, [_i, _n, _d, _tA, _st, _sM, _t], [0, 0, 0, 64 | 0, 0, 0, 128 | 0]);
export var VpcLinks = struct(
  n0,
  _VLp,
  0,
  [_it, _p],
  [
    [
      () => ListOfVpcLink,
      {
        [_jN]: _ite,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
  ]
);
export var ListOfVpcLink = list(n0, _LOVL, 0, () => VpcLink);
export var CreateVpcLink = op(
  n0,
  _CVL,
  {
    [_ht]: ["POST", "/vpclinks", 202],
  },
  () => CreateVpcLinkRequest,
  () => VpcLink
);
export var GetVpcLink = op(
  n0,
  _GVL,
  {
    [_ht]: ["GET", "/vpclinks/{vpcLinkId}", 200],
  },
  () => GetVpcLinkRequest,
  () => VpcLink
);
export var GetVpcLinks = op(
  n0,
  _GVLe,
  {
    [_ht]: ["GET", "/vpclinks", 200],
  },
  () => GetVpcLinksRequest,
  () => VpcLinks
);
export var UpdateVpcLink = op(
  n0,
  _UVL,
  {
    [_ht]: ["PATCH", "/vpclinks/{vpcLinkId}", 200],
  },
  () => UpdateVpcLinkRequest,
  () => VpcLink
);

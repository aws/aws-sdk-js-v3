// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CD,
  _cD,
  _CVL,
  _CVLR,
  _CVLRr,
  _GVL,
  _GVLe,
  _GVLR,
  _GVLRe,
  _GVLRet,
  _GVLRetp,
  _hQ,
  _ht,
  _I,
  _i,
  _jN,
  _lOVL,
  _MR,
  _mR,
  _N,
  _n,
  _NT,
  _nT,
  _SGI,
  _sGI,
  _SI,
  _sI,
  _T,
  _t,
  _UVL,
  _UVLR,
  _UVLRp,
  _VL,
  _VLI,
  _vLI,
  _VLS,
  _vLS,
  _VLSM,
  _vLSM,
  _VLV,
  _vLV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateVpcLinkRequest = struct(
  n0,
  _CVLR,
  0,
  [_N, _SGI, _SI, _T],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sGI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sI,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateVpcLinkResponse = struct(
  n0,
  _CVLRr,
  0,
  [_CD, _N, _SGI, _SI, _T, _VLI, _VLS, _VLSM, _VLV],
  [
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sGI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sI,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      0,
      {
        [_jN]: _vLI,
      },
    ],
    [
      0,
      {
        [_jN]: _vLS,
      },
    ],
    [
      0,
      {
        [_jN]: _vLSM,
      },
    ],
    [
      0,
      {
        [_jN]: _vLV,
      },
    ],
  ]
);
export var GetVpcLinkRequest = struct(n0, _GVLR, 0, [_VLI], [[0, 1]]);
export var GetVpcLinkResponse = struct(
  n0,
  _GVLRe,
  0,
  [_CD, _N, _SGI, _SI, _T, _VLI, _VLS, _VLSM, _VLV],
  [
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sGI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sI,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      0,
      {
        [_jN]: _vLI,
      },
    ],
    [
      0,
      {
        [_jN]: _vLS,
      },
    ],
    [
      0,
      {
        [_jN]: _vLSM,
      },
    ],
    [
      0,
      {
        [_jN]: _vLV,
      },
    ],
  ]
);
export var GetVpcLinksRequest = struct(
  n0,
  _GVLRet,
  0,
  [_MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var GetVpcLinksResponse = struct(
  n0,
  _GVLRetp,
  0,
  [_I, _NT],
  [
    [
      () => __listOfVpcLink,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var UpdateVpcLinkRequest = struct(
  n0,
  _UVLR,
  0,
  [_N, _VLI],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [0, 1],
  ]
);
export var UpdateVpcLinkResponse = struct(
  n0,
  _UVLRp,
  0,
  [_CD, _N, _SGI, _SI, _T, _VLI, _VLS, _VLSM, _VLV],
  [
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sGI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sI,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      0,
      {
        [_jN]: _vLI,
      },
    ],
    [
      0,
      {
        [_jN]: _vLS,
      },
    ],
    [
      0,
      {
        [_jN]: _vLSM,
      },
    ],
    [
      0,
      {
        [_jN]: _vLV,
      },
    ],
  ]
);
export var VpcLink = struct(
  n0,
  _VL,
  0,
  [_CD, _N, _SGI, _SI, _T, _VLI, _VLS, _VLSM, _VLV],
  [
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sGI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sI,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      0,
      {
        [_jN]: _vLI,
      },
    ],
    [
      0,
      {
        [_jN]: _vLS,
      },
    ],
    [
      0,
      {
        [_jN]: _vLSM,
      },
    ],
    [
      0,
      {
        [_jN]: _vLV,
      },
    ],
  ]
);
export var __listOfVpcLink = list(n0, _lOVL, 0, [() => VpcLink, 0]);
export var SecurityGroupIdList = 64 | 0;

export var SubnetIdList = 64 | 0;

export var CreateVpcLink = op(
  n0,
  _CVL,
  {
    [_ht]: ["POST", "/v2/vpclinks", 201],
  },
  () => CreateVpcLinkRequest,
  () => CreateVpcLinkResponse
);
export var GetVpcLink = op(
  n0,
  _GVL,
  {
    [_ht]: ["GET", "/v2/vpclinks/{VpcLinkId}", 200],
  },
  () => GetVpcLinkRequest,
  () => GetVpcLinkResponse
);
export var GetVpcLinks = op(
  n0,
  _GVLe,
  {
    [_ht]: ["GET", "/v2/vpclinks", 200],
  },
  () => GetVpcLinksRequest,
  () => GetVpcLinksResponse
);
export var UpdateVpcLink = op(
  n0,
  _UVL,
  {
    [_ht]: ["PATCH", "/v2/vpclinks/{VpcLinkId}", 200],
  },
  () => UpdateVpcLinkRequest,
  () => UpdateVpcLinkResponse
);

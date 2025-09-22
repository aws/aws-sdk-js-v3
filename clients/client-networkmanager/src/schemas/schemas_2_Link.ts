// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _B,
  _CA,
  _CLR,
  _CLr,
  _CLRr,
  _D,
  _DLe,
  _DLR,
  _DLRe,
  _DS,
  _GL,
  _GLR,
  _GLRe,
  _GNI,
  _h,
  _hQ,
  _LAin,
  _LI,
  _Li,
  _LIi,
  _lIi,
  _Lin,
  _LL,
  _MR,
  _mR,
  _NT,
  _nT,
  _p,
  _Pr,
  _S,
  _SI,
  _sI,
  _T,
  _t,
  _Ty,
  _UL,
  _ULR,
  _ULRp,
  _US,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Bandwidth = struct(n0, _B, 0, [_US, _DS], [1, 1]);
export var CreateLinkRequest = struct(
  n0,
  _CLR,
  0,
  [_GNI, _D, _Ty, _B, _Pr, _SI, _T],
  [[0, 1], 0, 0, () => Bandwidth, 0, 0, () => TagList]
);
export var CreateLinkResponse = struct(n0, _CLRr, 0, [_Li], [() => Link]);
export var DeleteLinkRequest = struct(
  n0,
  _DLR,
  0,
  [_GNI, _LI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteLinkResponse = struct(n0, _DLRe, 0, [_Li], [() => Link]);
export var GetLinksRequest = struct(
  n0,
  _GLR,
  0,
  [_GNI, _LIi, _SI, _Ty, _Pr, _MR, _NT],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _lIi,
      },
    ],
    [
      0,
      {
        [_hQ]: _sI,
      },
    ],
    [
      0,
      {
        [_hQ]: _t,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      1,
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
export var GetLinksResponse = struct(n0, _GLRe, 0, [_Lin, _NT], [() => LinkList, 0]);
export var Link = struct(
  n0,
  _Li,
  0,
  [_LI, _LAin, _GNI, _SI, _D, _Ty, _B, _Pr, _CA, _S, _T],
  [0, 0, 0, 0, 0, 0, () => Bandwidth, 0, 4, 0, () => TagList]
);
export var UpdateLinkRequest = struct(
  n0,
  _ULR,
  0,
  [_GNI, _LI, _D, _Ty, _B, _Pr],
  [[0, 1], [0, 1], 0, 0, () => Bandwidth, 0]
);
export var UpdateLinkResponse = struct(n0, _ULRp, 0, [_Li], [() => Link]);
export var LinkIdList = 64 | 0;

export var LinkList = list(n0, _LL, 0, () => Link);
export var CreateLink = op(
  n0,
  _CLr,
  {
    [_h]: ["POST", "/global-networks/{GlobalNetworkId}/links", 200],
  },
  () => CreateLinkRequest,
  () => CreateLinkResponse
);
export var DeleteLink = op(
  n0,
  _DLe,
  {
    [_h]: ["DELETE", "/global-networks/{GlobalNetworkId}/links/{LinkId}", 200],
  },
  () => DeleteLinkRequest,
  () => DeleteLinkResponse
);
export var GetLinks = op(
  n0,
  _GL,
  {
    [_h]: ["GET", "/global-networks/{GlobalNetworkId}/links", 200],
  },
  () => GetLinksRequest,
  () => GetLinksResponse
);
export var UpdateLink = op(
  n0,
  _UL,
  {
    [_h]: ["PATCH", "/global-networks/{GlobalNetworkId}/links/{LinkId}", 200],
  },
  () => UpdateLinkRequest,
  () => UpdateLinkResponse
);

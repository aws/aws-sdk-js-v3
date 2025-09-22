// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ad,
  _CA,
  _CSR,
  _CSr,
  _CSRr,
  _D,
  _DSe,
  _DSR,
  _DSRe,
  _GNI,
  _GS,
  _GSR,
  _GSRe,
  _h,
  _hQ,
  _L,
  _La,
  _Lo,
  _MR,
  _mR,
  _NT,
  _nT,
  _S,
  _SAi,
  _SI,
  _Si,
  _SIi,
  _sIi,
  _Sit,
  _SL,
  _T,
  _USp,
  _USR,
  _USRp,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSiteRequest = struct(n0, _CSR, 0, [_GNI, _D, _L, _T], [[0, 1], 0, [() => Location, 0], () => TagList]);
export var CreateSiteResponse = struct(n0, _CSRr, 0, [_Si], [[() => Site, 0]]);
export var DeleteSiteRequest = struct(
  n0,
  _DSR,
  0,
  [_GNI, _SI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteSiteResponse = struct(n0, _DSRe, 0, [_Si], [[() => Site, 0]]);
export var GetSitesRequest = struct(
  n0,
  _GSR,
  0,
  [_GNI, _SIi, _MR, _NT],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _sIi,
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
export var GetSitesResponse = struct(n0, _GSRe, 0, [_Sit, _NT], [[() => SiteList, 0], 0]);
export var Location = struct(n0, _L, 8, [_Ad, _La, _Lo], [0, 0, 0]);
export var Site = struct(
  n0,
  _Si,
  0,
  [_SI, _SAi, _GNI, _D, _L, _CA, _S, _T],
  [0, 0, 0, 0, [() => Location, 0], 4, 0, () => TagList]
);
export var UpdateSiteRequest = struct(n0, _USR, 0, [_GNI, _SI, _D, _L], [[0, 1], [0, 1], 0, [() => Location, 0]]);
export var UpdateSiteResponse = struct(n0, _USRp, 0, [_Si], [[() => Site, 0]]);
export var SiteIdList = 64 | 0;

export var SiteList = list(n0, _SL, 0, [() => Site, 0]);
export var CreateSite = op(
  n0,
  _CSr,
  {
    [_h]: ["POST", "/global-networks/{GlobalNetworkId}/sites", 200],
  },
  () => CreateSiteRequest,
  () => CreateSiteResponse
);
export var DeleteSite = op(
  n0,
  _DSe,
  {
    [_h]: ["DELETE", "/global-networks/{GlobalNetworkId}/sites/{SiteId}", 200],
  },
  () => DeleteSiteRequest,
  () => DeleteSiteResponse
);
export var GetSites = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/global-networks/{GlobalNetworkId}/sites", 200],
  },
  () => GetSitesRequest,
  () => GetSitesResponse
);
export var UpdateSite = op(
  n0,
  _USp,
  {
    [_h]: ["PATCH", "/global-networks/{GlobalNetworkId}/sites/{SiteId}", 200],
  },
  () => UpdateSiteRequest,
  () => UpdateSiteResponse
);

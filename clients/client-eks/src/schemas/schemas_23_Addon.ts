// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ad,
  _add,
  _AI,
  _aN,
  _ar,
  _aV,
  _aVd,
  _AVI,
  _AVIL,
  _Co,
  _Com,
  _com,
  _cT,
  _cVl,
  _DAV,
  _DAVR,
  _DAVRe,
  _dN,
  _dV,
  _hQ,
  _ht,
  _kV,
  _MI,
  _mI,
  _mR,
  _nT,
  _o,
  _ow,
  _p,
  _pI,
  _pU,
  _pu,
  _pVl,
  _rC,
  _rIP,
  _ty,
  _typ,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddonInfo = struct(
  n0,
  _AI,
  0,
  [_aN, _ty, _aVd, _p, _o, _mI, _dN],
  [0, 0, () => AddonVersionInfoList, 0, 0, () => MarketplaceInformation, 0]
);
export var AddonVersionInfo = struct(
  n0,
  _AVI,
  0,
  [_aV, _ar, _cT, _com, _rC, _rIP],
  [0, 64 | 0, 64 | 0, () => Compatibilities, 2, 2]
);
export var Compatibility = struct(n0, _Co, 0, [_cVl, _pVl, _dV], [0, 64 | 0, 2]);
export var DescribeAddonVersionsRequest = struct(
  n0,
  _DAVR,
  0,
  [_kV, _mR, _nT, _aN, _typ, _pu, _ow],
  [
    [
      0,
      {
        [_hQ]: _kV,
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
    [
      0,
      {
        [_hQ]: _aN,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _typ,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _pu,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _ow,
      },
    ],
  ]
);
export var DescribeAddonVersionsResponse = struct(n0, _DAVRe, 0, [_add, _nT], [() => Addons, 0]);
export var MarketplaceInformation = struct(n0, _MI, 0, [_pI, _pU], [0, 0]);
export var Addons = list(n0, _Ad, 0, () => AddonInfo);
export var AddonVersionInfoList = list(n0, _AVIL, 0, () => AddonVersionInfo);
export var Compatibilities = list(n0, _Com, 0, () => Compatibility);
export var DescribeAddonVersions = op(
  n0,
  _DAV,
  {
    [_ht]: ["GET", "/addons/supported-versions", 200],
  },
  () => DescribeAddonVersionsRequest,
  () => DescribeAddonVersionsResponse
);

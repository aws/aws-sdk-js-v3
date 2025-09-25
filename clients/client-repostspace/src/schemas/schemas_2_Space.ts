// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _aA,
  _aD,
  _ADL,
  _cDT,
  _cIl,
  _cRA,
  _CS,
  _CSI,
  _CSO,
  _cSo,
  _cSon,
  _d,
  _dDT,
  _ED,
  _en,
  _gA,
  _GS,
  _GSI,
  _GSO,
  _h,
  _hQ,
  _iSI,
  _LS,
  _LSI,
  _LSO,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _mR,
  _n,
  _nT,
  _R,
  _rA,
  _rAe,
  _rD,
  _ro,
  _s,
  _SD,
  _SDp,
  _sED,
  _SEDP,
  _SEDS,
  _sI,
  _SL,
  _sL,
  _SN,
  _sp,
  _st,
  _T,
  _t,
  _ta,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _uA,
  _uC,
  _uKMSK,
  _UR,
  _URR,
  _URRn,
  _US,
  _USI,
  _vD,
  _vDS,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EmailDomain = sim(n0, _ED, 0, 8);
export var SpaceDescription = sim(n0, _SD, 0, 8);
export var SpaceName = sim(n0, _SN, 0, 8);
export var CreateSpaceInput = struct(
  n0,
  _CSI,
  0,
  [_n, _s, _t, _d, _uKMSK, _ta, _rA, _sED],
  [
    [() => SpaceName, 0],
    0,
    0,
    [() => SpaceDescription, 0],
    0,
    [() => Tags, 0],
    0,
    [() => SupportedEmailDomainsParameters, 0],
  ]
);
export var CreateSpaceOutput = struct(n0, _CSO, 0, [_sI], [0]);
export var GetSpaceInput = struct(n0, _GSI, 0, [_sI], [[0, 1]]);
export var GetSpaceOutput = struct(
  n0,
  _GSO,
  0,
  [
    _sI,
    _a,
    _n,
    _st,
    _cSo,
    _cIl,
    _iSI,
    _aA,
    _d,
    _vDS,
    _vD,
    _rD,
    _cRA,
    _cDT,
    _dDT,
    _t,
    _sL,
    _uA,
    _gA,
    _ro,
    _uKMSK,
    _uC,
    _cSon,
    _sED,
  ],
  [
    0,
    0,
    [() => SpaceName, 0],
    0,
    0,
    0,
    0,
    0,
    [() => SpaceDescription, 0],
    0,
    0,
    0,
    0,
    5,
    5,
    0,
    1,
    64 | 0,
    64 | 0,
    map(n0, _R, 0, 0, 64 | 0),
    0,
    1,
    1,
    [() => SupportedEmailDomainsStatus, 0],
  ]
);
export var ListSpacesInput = struct(
  n0,
  _LSI,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListSpacesOutput = struct(n0, _LSO, 0, [_sp, _nT], [[() => SpacesList, 0], 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rAe], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [[() => Tags, 0]]);
export var SpaceData = struct(
  n0,
  _SDp,
  0,
  [_sI, _a, _n, _d, _st, _cSo, _vDS, _vD, _rD, _t, _sL, _cDT, _dDT, _uKMSK, _uC, _cSon, _sED],
  [
    0,
    0,
    [() => SpaceName, 0],
    [() => SpaceDescription, 0],
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    5,
    5,
    0,
    1,
    1,
    [() => SupportedEmailDomainsStatus, 0],
  ]
);
export var SupportedEmailDomainsParameters = struct(n0, _SEDP, 0, [_en, _aD], [0, [() => AllowedDomainsList, 0]]);
export var SupportedEmailDomainsStatus = struct(n0, _SEDS, 0, [_en, _aD], [0, [() => AllowedDomainsList, 0]]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_rAe, _ta],
  [
    [0, 1],
    [() => Tags, 0],
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rAe, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateSpaceInput = struct(
  n0,
  _USI,
  0,
  [_sI, _d, _t, _rA, _sED],
  [[0, 1], [() => SpaceDescription, 0], 0, 0, [() => SupportedEmailDomainsParameters, 0]]
);
export var AllowedDomainsList = list(n0, _ADL, 0, [() => EmailDomain, 0]);
export var GroupAdmins = 64 | 0;

export var RoleList = 64 | 0;

export var SpacesList = list(n0, _SL, 0, [() => SpaceData, 0]);
export var TagKeyList = 64 | 0;

export var UserAdmins = 64 | 0;

export var Roles = map(n0, _R, 0, 0, 64 | 0);
export var Tags = map(n0, _T, 8, 0, 0);
export var CreateSpace = op(
  n0,
  _CS,
  {
    [_h]: ["POST", "/spaces", 200],
  },
  () => CreateSpaceInput,
  () => CreateSpaceOutput
);
export var GetSpace = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/spaces/{spaceId}", 200],
  },
  () => GetSpaceInput,
  () => GetSpaceOutput
);
export var ListSpaces = op(
  n0,
  _LS,
  {
    [_h]: ["GET", "/spaces", 200],
  },
  () => ListSpacesInput,
  () => ListSpacesOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateSpace = op(
  n0,
  _US,
  {
    [_h]: ["PUT", "/spaces/{spaceId}", 200],
  },
  () => UpdateSpaceInput,
  () => Unit
);

// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _aEC,
  _aPA,
  _aT,
  _bSA,
  _bT,
  _cD,
  _CIAS,
  _CIASR,
  _CIASRr,
  _cMK,
  _CPR,
  _CPr,
  _CPRr,
  _cT,
  _D,
  _de,
  _DN,
  _dN,
  _dPSA,
  _GIAS,
  _GIASR,
  _GIASRe,
  _GP,
  _GPR,
  _GPRe,
  _h,
  _hQ,
  _IAS,
  _iAS,
  _iASA,
  _IASL,
  _IASS,
  _IR,
  _iR,
  _IRL,
  _IRp,
  _iRp,
  _iT,
  _LIAS,
  _LIASR,
  _LIASRi,
  _LP,
  _LPR,
  _LPRi,
  _mCS,
  _mR,
  _nSA,
  _nT,
  _P,
  _pA,
  _pE,
  _PL,
  _po,
  _por,
  _PS,
  _pS,
  _rTe,
  _sLA,
  _sR,
  _ta,
  _tSA,
  _uALSA,
  _UIAS,
  _UIASR,
  _UIASRp,
  _UP,
  _UPR,
  _UPRp,
  _uSA,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_8_Create";

/* eslint no-var: 0 */

export var Description = sim(n0, _D, 0, 8);
export var DisplayName = sim(n0, _DN, 0, 8);
export var IpRange = sim(n0, _IR, 0, 8);
export var CreateIpAccessSettingsRequest = struct(
  n0,
  _CIASR,
  0,
  [_dN, _de, _ta, _cMK, _aEC, _iR, _cT],
  [[() => DisplayName, 0], [() => Description, 0], [() => TagList, 0], 0, 128 | 0, [() => IpRuleList, 0], [0, 4]]
);
export var CreateIpAccessSettingsResponse = struct(n0, _CIASRr, 0, [_iASA], [0]);
export var CreatePortalRequest = struct(
  n0,
  _CPR,
  0,
  [_dN, _ta, _cMK, _aEC, _cT, _aT, _iT, _mCS],
  [[() => DisplayName, 0], [() => TagList, 0], 0, 128 | 0, [0, 4], 0, 0, 1]
);
export var CreatePortalResponse = struct(n0, _CPRr, 0, [_pA, _pE], [0, 0]);
export var GetIpAccessSettingsRequest = struct(n0, _GIASR, 0, [_iASA], [[0, 1]]);
export var GetIpAccessSettingsResponse = struct(n0, _GIASRe, 0, [_iAS], [[() => IpAccessSettings, 0]]);
export var GetPortalRequest = struct(n0, _GPR, 0, [_pA], [[0, 1]]);
export var GetPortalResponse = struct(n0, _GPRe, 0, [_po], [[() => Portal, 0]]);
export var IpAccessSettings = struct(
  n0,
  _IAS,
  0,
  [_iASA, _aPA, _iR, _dN, _de, _cD, _cMK, _aEC],
  [0, 64 | 0, [() => IpRuleList, 0], [() => DisplayName, 0], [() => Description, 0], 4, 0, 128 | 0]
);
export var IpAccessSettingsSummary = struct(
  n0,
  _IASS,
  0,
  [_iASA, _dN, _de, _cD],
  [0, [() => DisplayName, 0], [() => Description, 0], 4]
);
export var IpRule = struct(
  n0,
  _IRp,
  0,
  [_iRp, _de],
  [
    [() => IpRange, 0],
    [() => Description, 0],
  ]
);
export var ListIpAccessSettingsRequest = struct(
  n0,
  _LIASR,
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
export var ListIpAccessSettingsResponse = struct(n0, _LIASRi, 0, [_iAS, _nT], [[() => IpAccessSettingsList, 0], 0]);
export var ListPortalsRequest = struct(
  n0,
  _LPR,
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
export var ListPortalsResponse = struct(n0, _LPRi, 0, [_por, _nT], [[() => PortalList, 0], 0]);
export var Portal = struct(
  n0,
  _P,
  0,
  [
    _pA,
    _rTe,
    _bT,
    _pS,
    _pE,
    _dN,
    _cD,
    _bSA,
    _dPSA,
    _uSA,
    _nSA,
    _sLA,
    _tSA,
    _sR,
    _uALSA,
    _aT,
    _iASA,
    _cMK,
    _aEC,
    _iT,
    _mCS,
  ],
  [0, 0, 0, 0, 0, [() => DisplayName, 0], 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128 | 0, 0, 1]
);
export var PortalSummary = struct(
  n0,
  _PS,
  0,
  [_pA, _rTe, _bT, _pS, _pE, _dN, _cD, _bSA, _dPSA, _uSA, _nSA, _sLA, _tSA, _uALSA, _aT, _iASA, _iT, _mCS],
  [0, 0, 0, 0, 0, [() => DisplayName, 0], 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
);
export var UpdateIpAccessSettingsRequest = struct(
  n0,
  _UIASR,
  0,
  [_iASA, _dN, _de, _iR, _cT],
  [
    [0, 1],
    [() => DisplayName, 0],
    [() => Description, 0],
    [() => IpRuleList, 0],
    [0, 4],
  ]
);
export var UpdateIpAccessSettingsResponse = struct(n0, _UIASRp, 0, [_iAS], [[() => IpAccessSettings, 0]]);
export var UpdatePortalRequest = struct(
  n0,
  _UPR,
  0,
  [_pA, _dN, _aT, _iT, _mCS],
  [[0, 1], [() => DisplayName, 0], 0, 0, 1]
);
export var UpdatePortalResponse = struct(n0, _UPRp, 0, [_po], [[() => Portal, 0]]);
export var IpAccessSettingsList = list(n0, _IASL, 0, [() => IpAccessSettingsSummary, 0]);
export var IpRuleList = list(n0, _IRL, 8, [() => IpRule, 0]);
export var PortalList = list(n0, _PL, 0, [() => PortalSummary, 0]);
export var CreateIpAccessSettings = op(
  n0,
  _CIAS,
  {
    [_h]: ["POST", "/ipAccessSettings", 200],
  },
  () => CreateIpAccessSettingsRequest,
  () => CreateIpAccessSettingsResponse
);
export var CreatePortal = op(
  n0,
  _CPr,
  {
    [_h]: ["POST", "/portals", 200],
  },
  () => CreatePortalRequest,
  () => CreatePortalResponse
);
export var GetIpAccessSettings = op(
  n0,
  _GIAS,
  {
    [_h]: ["GET", "/ipAccessSettings/{ipAccessSettingsArn+}", 200],
  },
  () => GetIpAccessSettingsRequest,
  () => GetIpAccessSettingsResponse
);
export var GetPortal = op(
  n0,
  _GP,
  {
    [_h]: ["GET", "/portals/{portalArn+}", 200],
  },
  () => GetPortalRequest,
  () => GetPortalResponse
);
export var ListIpAccessSettings = op(
  n0,
  _LIAS,
  {
    [_h]: ["GET", "/ipAccessSettings", 200],
  },
  () => ListIpAccessSettingsRequest,
  () => ListIpAccessSettingsResponse
);
export var ListPortals = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/portals", 200],
  },
  () => ListPortalsRequest,
  () => ListPortalsResponse
);
export var UpdateIpAccessSettings = op(
  n0,
  _UIAS,
  {
    [_h]: ["PATCH", "/ipAccessSettings/{ipAccessSettingsArn+}", 200],
  },
  () => UpdateIpAccessSettingsRequest,
  () => UpdateIpAccessSettingsResponse
);
export var UpdatePortal = op(
  n0,
  _UP,
  {
    [_h]: ["PUT", "/portals/{portalArn+}", 200],
  },
  () => UpdatePortalRequest,
  () => UpdatePortalResponse
);

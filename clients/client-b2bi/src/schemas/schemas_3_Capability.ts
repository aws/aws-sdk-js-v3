// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aOc,
  _aRC,
  _aRCc,
  _aSC,
  _cA,
  _ca,
  _cI,
  _CL,
  _cN,
  _CO,
  _cO,
  _com,
  _CP,
  _CPR,
  _CPRr,
  _CS,
  _cS,
  _cT,
  _d,
  _DC,
  _DCR,
  _dES,
  _em,
  _fA,
  _fGH,
  _GP,
  _GPR,
  _GPRe,
  _gTF,
  _h,
  _hQ,
  _iCH,
  _iE,
  _IEO,
  _LC,
  _LCR,
  _LCRi,
  _lL,
  _LP,
  _LPR,
  _LPRi,
  _lT,
  _mA,
  _mR,
  _n,
  _nT,
  _oE,
  _OEO,
  _p,
  _pA,
  _pa,
  _pI,
  _pIa,
  _PL,
  _PS,
  _rAC,
  _rIe,
  _rIQ,
  _rS,
  _sFGCN,
  _sI,
  _sICN,
  _sIQ,
  _sT,
  _sTSCN,
  _t,
  _ta,
  _tAe,
  _tPI,
  _uIC,
  _UP,
  _UPR,
  _UPRp,
  _vE,
  _wB,
  _WO,
  _wO,
  _x,
  _XAO,
  _XCN,
  _XD,
  _XE,
  _XFGH,
  _XICH,
  _XIEO,
  _XOEH,
  n0,
  Unit,
} from "./schemas_0";
import { Email, Phone } from "./schemas_5_Profile";
import { TagList } from "./schemas_6_Create";

/* eslint no-var: 0 */

export var CapabilityOptions = struct(n0, _CO, 0, [_oE, _iE], [() => OutboundEdiOptions, () => InboundEdiOptions]);
export var CapabilitySummary = struct(n0, _CS, 0, [_cI, _n, _t, _cA, _mA], [0, 0, 0, 5, 5]);
export var CreatePartnershipRequest = struct(
  n0,
  _CPR,
  0,
  [_pI, _n, _em, _p, _ca, _cO, _cT, _ta],
  [0, 0, [() => Email, 0], [() => Phone, 0], 64 | 0, () => CapabilityOptions, [0, 4], () => TagList]
);
export var CreatePartnershipResponse = struct(
  n0,
  _CPRr,
  0,
  [_pI, _pIa, _pA, _n, _em, _p, _ca, _cO, _tPI, _cA],
  [0, 0, 0, 0, [() => Email, 0], [() => Phone, 0], 64 | 0, () => CapabilityOptions, 0, 5]
);
export var DeleteCapabilityRequest = struct(n0, _DCR, 0, [_cI], [[0, 1]]);
export var GetPartnershipRequest = struct(n0, _GPR, 0, [_pIa], [[0, 1]]);
export var GetPartnershipResponse = struct(
  n0,
  _GPRe,
  0,
  [_pI, _pIa, _pA, _n, _em, _p, _ca, _cO, _tPI, _cA, _mA],
  [0, 0, 0, 0, [() => Email, 0], [() => Phone, 0], 64 | 0, () => CapabilityOptions, 0, 5, 5]
);
export var InboundEdiOptions = struct(n0, _IEO, 0, [_x], [() => X12InboundEdiOptions]);
export var ListCapabilitiesRequest = struct(
  n0,
  _LCR,
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
export var ListCapabilitiesResponse = struct(n0, _LCRi, 0, [_ca, _nT], [() => CapabilityList, 0]);
export var ListPartnershipsRequest = struct(
  n0,
  _LPR,
  0,
  [_pI, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
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
export var ListPartnershipsResponse = struct(n0, _LPRi, 0, [_pa, _nT], [() => PartnershipList, 0]);
export var PartnershipSummary = struct(
  n0,
  _PS,
  0,
  [_pI, _pIa, _n, _ca, _cO, _tPI, _cA, _mA],
  [0, 0, 0, 64 | 0, () => CapabilityOptions, 0, 5, 5]
);
export var UpdatePartnershipRequest = struct(
  n0,
  _UPR,
  0,
  [_pIa, _n, _ca, _cO],
  [[0, 1], 0, 64 | 0, () => CapabilityOptions]
);
export var UpdatePartnershipResponse = struct(
  n0,
  _UPRp,
  0,
  [_pI, _pIa, _pA, _n, _em, _p, _ca, _cO, _tPI, _cA, _mA],
  [0, 0, 0, 0, [() => Email, 0], [() => Phone, 0], 64 | 0, () => CapabilityOptions, 0, 5, 5]
);
export var WrapOptions = struct(n0, _WO, 0, [_wB, _lT, _lL], [0, 0, 1]);
export var X12AcknowledgmentOptions = struct(n0, _XAO, 0, [_fA, _tAe], [0, 0]);
export var X12ControlNumbers = struct(n0, _XCN, 0, [_sICN, _sFGCN, _sTSCN], [1, 1, 1]);
export var X12Delimiters = struct(n0, _XD, 0, [_cS, _dES, _sT], [0, 0, 0]);
export var X12Envelope = struct(n0, _XE, 0, [_com, _wO], [() => X12OutboundEdiHeaders, () => WrapOptions]);
export var X12FunctionalGroupHeaders = struct(n0, _XFGH, 0, [_aSC, _aRC, _rAC], [0, 0, 0]);
export var X12InboundEdiOptions = struct(n0, _XIEO, 0, [_aOc], [() => X12AcknowledgmentOptions]);
export var X12InterchangeControlHeaders = struct(
  n0,
  _XICH,
  0,
  [_sIQ, _sI, _rIQ, _rIe, _rS, _aRCc, _uIC],
  [0, 0, 0, 0, 0, 0, 0]
);
export var X12OutboundEdiHeaders = struct(
  n0,
  _XOEH,
  0,
  [_iCH, _fGH, _d, _vE, _cN, _gTF],
  [
    () => X12InterchangeControlHeaders,
    () => X12FunctionalGroupHeaders,
    () => X12Delimiters,
    2,
    () => X12ControlNumbers,
    0,
  ]
);
export var CapabilityList = list(n0, _CL, 0, () => CapabilitySummary);
export var PartnershipCapabilities = 64 | 0;

export var PartnershipList = list(n0, _PL, 0, () => PartnershipSummary);
export var OutboundEdiOptions = uni(n0, _OEO, 0, [_x], [() => X12Envelope]);
export var CreatePartnership = op(
  n0,
  _CP,
  {
    [_h]: ["POST", "/partnerships", 201],
  },
  () => CreatePartnershipRequest,
  () => CreatePartnershipResponse
);
export var DeleteCapability = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/capabilities/{capabilityId}", 200],
  },
  () => DeleteCapabilityRequest,
  () => Unit
);
export var GetPartnership = op(
  n0,
  _GP,
  {
    [_h]: ["GET", "/partnerships/{partnershipId}", 200],
  },
  () => GetPartnershipRequest,
  () => GetPartnershipResponse
);
export var ListCapabilities = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/capabilities", 200],
  },
  () => ListCapabilitiesRequest,
  () => ListCapabilitiesResponse
);
export var ListPartnerships = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/partnerships", 200],
  },
  () => ListPartnershipsRequest,
  () => ListPartnershipsResponse
);
export var UpdatePartnership = op(
  n0,
  _UP,
  {
    [_h]: ["PATCH", "/partnerships/{partnershipId}", 200],
  },
  () => UpdatePartnershipRequest,
  () => UpdatePartnershipResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACP,
  _aCP,
  _AI,
  _aI,
  _Ar,
  _ar,
  _AZv,
  _aZv,
  _CIon,
  _cIon,
  _Cod,
  _cod,
  _CSon,
  _cSon,
  _DA,
  _dA,
  _DID,
  _DIDR,
  _DIDRe,
  _DSe,
  _dSe,
  _DSSSe,
  _dSSSe,
  _DUS,
  _dUS,
  _FAlo,
  _fAlo,
  _Fr,
  _fr,
  _Ga,
  _ga,
  _H,
  _h,
  _HDS,
  _hDS,
  _hQ,
  _ht,
  _I,
  _i,
  _IAp,
  _iAp,
  _ID,
  _iD,
  _IDCACPC,
  _IDCS,
  _IDHS,
  _IDI,
  _IDMCCS,
  _IDMCS,
  _IDNS,
  _IDSn,
  _IDUACPC,
  _IDUS,
  _IR,
  _iR,
  _ISp,
  _iSp,
  _jN,
  _LID,
  _LIDR,
  _LIDRi,
  _lM,
  _LMa,
  _lOIDCACPC,
  _lOIDSi,
  _lOIDUACPC,
  _MAa,
  _mAa,
  _MB,
  _mB,
  _MIA,
  _mIA,
  _MR,
  _mR,
  _MSe,
  _mSe,
  _N,
  _n,
  _NS,
  _nS,
  _NT,
  _nT,
  _OTu,
  _oTu,
  _P,
  _p,
  _RA,
  _rA,
  _SAe,
  _sAe,
  _SMu,
  _sMu,
  _SNe,
  _sNe,
  _SNo,
  _sNo,
  _STca,
  _sTca,
  _Ta,
  _ta,
  _Ty,
  _ty,
  _UDS,
  _uDS,
  _UID,
  _UIDR,
  _UIDRp,
  _W,
  _w,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeInputDeviceRequest = struct(n0, _DIDR, 0, [_IDI], [[0, 1]]);
export var DescribeInputDeviceResponse = struct(
  n0,
  _DIDRe,
  0,
  [_Ar, _CSon, _DSSSe, _DUS, _HDS, _I, _MAa, _N, _NS, _SNe, _Ty, _UDS, _Ta, _AZv, _MIA, _OTu],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _cSon,
      },
    ],
    [
      0,
      {
        [_jN]: _dSSSe,
      },
    ],
    [
      0,
      {
        [_jN]: _dUS,
      },
    ],
    [
      () => InputDeviceHdSettings,
      {
        [_jN]: _hDS,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _mAa,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => InputDeviceNetworkSettings,
      {
        [_jN]: _nS,
      },
    ],
    [
      0,
      {
        [_jN]: _sNe,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
    [
      () => InputDeviceUhdSettings,
      {
        [_jN]: _uDS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _aZv,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _mIA,
      },
    ],
    [
      0,
      {
        [_jN]: _oTu,
      },
    ],
  ]
);
export var InputDeviceConfigurableAudioChannelPairConfig = struct(
  n0,
  _IDCACPC,
  0,
  [_I, _P],
  [
    [
      1,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _p,
      },
    ],
  ]
);
export var InputDeviceConfigurableSettings = struct(
  n0,
  _IDCS,
  0,
  [_CIon, _MB, _LMa, _Cod, _MSe, _ACP, _IR],
  [
    [
      0,
      {
        [_jN]: _cIon,
      },
    ],
    [
      1,
      {
        [_jN]: _mB,
      },
    ],
    [
      1,
      {
        [_jN]: _lM,
      },
    ],
    [
      0,
      {
        [_jN]: _cod,
      },
    ],
    [
      () => InputDeviceMediaConnectConfigurableSettings,
      {
        [_jN]: _mSe,
      },
    ],
    [
      () => __listOfInputDeviceConfigurableAudioChannelPairConfig,
      {
        [_jN]: _aCP,
      },
    ],
    [
      0,
      {
        [_jN]: _iR,
      },
    ],
  ]
);
export var InputDeviceHdSettings = struct(
  n0,
  _IDHS,
  0,
  [_AI, _CIon, _DSe, _Fr, _H, _MB, _STca, _W, _LMa],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _cIon,
      },
    ],
    [
      0,
      {
        [_jN]: _dSe,
      },
    ],
    [
      1,
      {
        [_jN]: _fr,
      },
    ],
    [
      1,
      {
        [_jN]: _h,
      },
    ],
    [
      1,
      {
        [_jN]: _mB,
      },
    ],
    [
      0,
      {
        [_jN]: _sTca,
      },
    ],
    [
      1,
      {
        [_jN]: _w,
      },
    ],
    [
      1,
      {
        [_jN]: _lM,
      },
    ],
  ]
);
export var InputDeviceMediaConnectConfigurableSettings = struct(
  n0,
  _IDMCCS,
  0,
  [_FAlo, _RA, _SAe, _SNo],
  [
    [
      0,
      {
        [_jN]: _fAlo,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      0,
      {
        [_jN]: _sAe,
      },
    ],
    [
      0,
      {
        [_jN]: _sNo,
      },
    ],
  ]
);
export var InputDeviceMediaConnectSettings = struct(
  n0,
  _IDMCS,
  0,
  [_FAlo, _RA, _SAe, _SNo],
  [
    [
      0,
      {
        [_jN]: _fAlo,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      0,
      {
        [_jN]: _sAe,
      },
    ],
    [
      0,
      {
        [_jN]: _sNo,
      },
    ],
  ]
);
export var InputDeviceNetworkSettings = struct(
  n0,
  _IDNS,
  0,
  [_DA, _Ga, _IAp, _ISp, _SMu],
  [
    [
      64 | 0,
      {
        [_jN]: _dA,
      },
    ],
    [
      0,
      {
        [_jN]: _ga,
      },
    ],
    [
      0,
      {
        [_jN]: _iAp,
      },
    ],
    [
      0,
      {
        [_jN]: _iSp,
      },
    ],
    [
      0,
      {
        [_jN]: _sMu,
      },
    ],
  ]
);
export var InputDeviceSummary = struct(
  n0,
  _IDSn,
  0,
  [_Ar, _CSon, _DSSSe, _DUS, _HDS, _I, _MAa, _N, _NS, _SNe, _Ty, _UDS, _Ta, _AZv, _MIA, _OTu],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _cSon,
      },
    ],
    [
      0,
      {
        [_jN]: _dSSSe,
      },
    ],
    [
      0,
      {
        [_jN]: _dUS,
      },
    ],
    [
      () => InputDeviceHdSettings,
      {
        [_jN]: _hDS,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _mAa,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => InputDeviceNetworkSettings,
      {
        [_jN]: _nS,
      },
    ],
    [
      0,
      {
        [_jN]: _sNe,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
    [
      () => InputDeviceUhdSettings,
      {
        [_jN]: _uDS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _aZv,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _mIA,
      },
    ],
    [
      0,
      {
        [_jN]: _oTu,
      },
    ],
  ]
);
export var InputDeviceUhdAudioChannelPairConfig = struct(
  n0,
  _IDUACPC,
  0,
  [_I, _P],
  [
    [
      1,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _p,
      },
    ],
  ]
);
export var InputDeviceUhdSettings = struct(
  n0,
  _IDUS,
  0,
  [_AI, _CIon, _DSe, _Fr, _H, _MB, _STca, _W, _LMa, _Cod, _MSe, _ACP, _IR],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _cIon,
      },
    ],
    [
      0,
      {
        [_jN]: _dSe,
      },
    ],
    [
      1,
      {
        [_jN]: _fr,
      },
    ],
    [
      1,
      {
        [_jN]: _h,
      },
    ],
    [
      1,
      {
        [_jN]: _mB,
      },
    ],
    [
      0,
      {
        [_jN]: _sTca,
      },
    ],
    [
      1,
      {
        [_jN]: _w,
      },
    ],
    [
      1,
      {
        [_jN]: _lM,
      },
    ],
    [
      0,
      {
        [_jN]: _cod,
      },
    ],
    [
      () => InputDeviceMediaConnectSettings,
      {
        [_jN]: _mSe,
      },
    ],
    [
      () => __listOfInputDeviceUhdAudioChannelPairConfig,
      {
        [_jN]: _aCP,
      },
    ],
    [
      0,
      {
        [_jN]: _iR,
      },
    ],
  ]
);
export var ListInputDevicesRequest = struct(
  n0,
  _LIDR,
  0,
  [_MR, _NT],
  [
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
export var ListInputDevicesResponse = struct(
  n0,
  _LIDRi,
  0,
  [_ID, _NT],
  [
    [
      () => __listOfInputDeviceSummary,
      {
        [_jN]: _iD,
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
export var UpdateInputDeviceRequest = struct(
  n0,
  _UIDR,
  0,
  [_HDS, _IDI, _N, _UDS, _AZv],
  [
    [
      () => InputDeviceConfigurableSettings,
      {
        [_jN]: _hDS,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => InputDeviceConfigurableSettings,
      {
        [_jN]: _uDS,
      },
    ],
    [
      0,
      {
        [_jN]: _aZv,
      },
    ],
  ]
);
export var UpdateInputDeviceResponse = struct(
  n0,
  _UIDRp,
  0,
  [_Ar, _CSon, _DSSSe, _DUS, _HDS, _I, _MAa, _N, _NS, _SNe, _Ty, _UDS, _Ta, _AZv, _MIA, _OTu],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _cSon,
      },
    ],
    [
      0,
      {
        [_jN]: _dSSSe,
      },
    ],
    [
      0,
      {
        [_jN]: _dUS,
      },
    ],
    [
      () => InputDeviceHdSettings,
      {
        [_jN]: _hDS,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _mAa,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => InputDeviceNetworkSettings,
      {
        [_jN]: _nS,
      },
    ],
    [
      0,
      {
        [_jN]: _sNe,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
    [
      () => InputDeviceUhdSettings,
      {
        [_jN]: _uDS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _aZv,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _mIA,
      },
    ],
    [
      0,
      {
        [_jN]: _oTu,
      },
    ],
  ]
);
export var __listOfInputDeviceConfigurableAudioChannelPairConfig = list(n0, _lOIDCACPC, 0, [
  () => InputDeviceConfigurableAudioChannelPairConfig,
  0,
]);
export var __listOfInputDeviceSummary = list(n0, _lOIDSi, 0, [() => InputDeviceSummary, 0]);
export var __listOfInputDeviceUhdAudioChannelPairConfig = list(n0, _lOIDUACPC, 0, [
  () => InputDeviceUhdAudioChannelPairConfig,
  0,
]);
export var DescribeInputDevice = op(
  n0,
  _DID,
  {
    [_ht]: ["GET", "/prod/inputDevices/{InputDeviceId}", 200],
  },
  () => DescribeInputDeviceRequest,
  () => DescribeInputDeviceResponse
);
export var ListInputDevices = op(
  n0,
  _LID,
  {
    [_ht]: ["GET", "/prod/inputDevices", 200],
  },
  () => ListInputDevicesRequest,
  () => ListInputDevicesResponse
);
export var UpdateInputDevice = op(
  n0,
  _UID,
  {
    [_ht]: ["PUT", "/prod/inputDevices/{InputDeviceId}", 200],
  },
  () => UpdateInputDeviceRequest,
  () => UpdateInputDeviceResponse
);

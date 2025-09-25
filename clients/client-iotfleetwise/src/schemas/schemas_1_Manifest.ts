// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  DecoderManifestValidationException as __DecoderManifestValidationException,
  InvalidSignalsException as __InvalidSignalsException,
} from "../models/index";
import {
  _a,
  _bL,
  _bML,
  _bRS,
  _c,
  _cap,
  _cD,
  _CDD,
  _cDF,
  _CDS,
  _cDS,
  _CSa,
  _cSan,
  _d,
  _dFUS,
  _DMVE,
  _dT,
  _e,
  _f,
  _fN,
  _fQN,
  _h,
  _hE,
  _hQ,
  _ht,
  _i,
  _iBE,
  _IDM,
  _IDMR,
  _IDMRm,
  _iI,
  _INI,
  _iNI,
  _INIn,
  _IS,
  _iS,
  _ISD,
  _ISDn,
  _ISEn,
  _ISn,
  _iSn,
  _l,
  _LDMS,
  _LDMSR,
  _LDMSRi,
  _lTi,
  _m,
  _mI,
  _mR,
  _MS,
  _mSe,
  _mT,
  _n,
  _NFD,
  _nFD,
  _NFDe,
  _nI,
  _nITA,
  _nITR,
  _nITU,
  _nT,
  _o,
  _OS,
  _oSb,
  _pi,
  _PMD,
  _pMD,
  _pRL,
  _pT,
  _re,
  _ROSPMD,
  _rPMD,
  _s,
  _sB,
  _sBt,
  _sc,
  _SD,
  _sD,
  _SDi,
  _sDTA,
  _sDTR,
  _sDTU,
  _SM,
  _sM,
  _SMD,
  _sMD,
  _sMe,
  _SMFNADTP,
  _SMLD,
  _sMLD,
  _sMt,
  _sVT,
  _tN,
  _ty,
  _uB,
  _UDM,
  _UDMR,
  _UDMRp,
  n0,
} from "./schemas_0";
import { NetworkInterfaces } from "./schemas_3_DecoderManifest";

/* eslint no-var: 0 */

export var CanDbcDefinition = struct(n0, _CDD, 0, [_nI, _cDF, _sM], [0, 64 | 21, 128 | 0]);
export var CanSignal = struct(n0, _CSa, 0, [_mI, _iBE, _iS, _sB, _o, _f, _l, _n, _sVT], [1, 2, 2, 1, 1, 1, 1, 0, 0]);
export var CustomDecodingSignal = struct(n0, _CDS, 0, [_i], [0]);
export var DecoderManifestValidationException = error(
  n0,
  _DMVE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_iSn, _iNI, _m],
  [() => InvalidSignalDecoders, () => InvalidNetworkInterfaces, 0],

  __DecoderManifestValidationException
);
export var ImportDecoderManifestRequest = struct(n0, _IDMR, 0, [_n, _nFD], [[0, 1], () => NetworkFileDefinitions]);
export var ImportDecoderManifestResponse = struct(n0, _IDMRm, 0, [_n, _a], [0, 0]);
export var InvalidNetworkInterface = struct(n0, _INI, 0, [_iI, _re], [0, 0]);
export var InvalidSignal = struct(n0, _IS, 0, [_n, _re], [0, 0]);
export var InvalidSignalDecoder = struct(n0, _ISD, 0, [_n, _re, _h], [0, 0, 0]);
export var InvalidSignalsException = error(
  n0,
  _ISEn,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _iSn],
  [0, () => InvalidSignals],

  __InvalidSignalsException
);
export var ListDecoderManifestSignalsRequest = struct(
  n0,
  _LDMSR,
  0,
  [_n, _nT, _mR],
  [
    [0, 1],
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
export var ListDecoderManifestSignalsResponse = struct(n0, _LDMSRi, 0, [_sD, _nT], [() => SignalDecoders, 0]);
export var MessageSignal = struct(n0, _MS, 0, [_tN, _sMt], [0, () => StructuredMessage]);
export var ObdSignal = struct(
  n0,
  _OS,
  0,
  [_pRL, _sMe, _pi, _sc, _o, _sBt, _bL, _bRS, _bML, _iS, _sVT],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0]
);
export var ROS2PrimitiveMessageDefinition = struct(n0, _ROSPMD, 0, [_pT, _o, _sc, _uB], [0, 1, 1, 1]);
export var SignalDecoder = struct(
  n0,
  _SD,
  0,
  [_fQN, _ty, _iI, _cSan, _oSb, _mSe, _cDS],
  [0, 0, 0, () => CanSignal, () => ObdSignal, () => MessageSignal, () => CustomDecodingSignal]
);
export var StructuredMessageFieldNameAndDataTypePair = struct(
  n0,
  _SMFNADTP,
  0,
  [_fN, _dT],
  [0, () => StructuredMessage]
);
export var StructuredMessageListDefinition = struct(
  n0,
  _SMLD,
  0,
  [_n, _mT, _lTi, _cap],
  [0, () => StructuredMessage, 0, 1]
);
export var UpdateDecoderManifestRequest = struct(
  n0,
  _UDMR,
  0,
  [_n, _d, _sDTA, _sDTU, _sDTR, _nITA, _nITU, _nITR, _s, _dFUS],
  [
    [0, 1],
    0,
    () => SignalDecoders,
    () => SignalDecoders,
    64 | 0,
    () => NetworkInterfaces,
    () => NetworkInterfaces,
    64 | 0,
    0,
    0,
  ]
);
export var UpdateDecoderManifestResponse = struct(n0, _UDMRp, 0, [_n, _a], [0, 0]);
export var Fqns = 64 | 0;

export var InterfaceIds = 64 | 0;

export var InvalidNetworkInterfaces = list(n0, _INIn, 0, () => InvalidNetworkInterface);
export var InvalidSignalDecoders = list(n0, _ISDn, 0, () => InvalidSignalDecoder);
export var InvalidSignals = list(n0, _ISn, 0, () => InvalidSignal);
export var NetworkFileDefinitions = list(n0, _NFD, 0, () => NetworkFileDefinition);
export var NetworkFilesList = 64 | 21;

export var SignalDecoders = list(n0, _SDi, 0, () => SignalDecoder);
export var StructuredMessageDefinition = list(n0, _SMD, 0, () => StructuredMessageFieldNameAndDataTypePair);
export var ModelSignalsMap = 128 | 0;

export var NetworkFileDefinition = uni(n0, _NFDe, 0, [_cD], [() => CanDbcDefinition]);
export var PrimitiveMessageDefinition = uni(n0, _PMD, 0, [_rPMD], [() => ROS2PrimitiveMessageDefinition]);
export var StructuredMessage = uni(
  n0,
  _SM,
  0,
  [_pMD, _sMLD, _sMD],
  [() => PrimitiveMessageDefinition, () => StructuredMessageListDefinition, () => StructuredMessageDefinition]
);
export var ImportDecoderManifest = op(
  n0,
  _IDM,
  {
    [_ht]: ["PUT", "/decoder-manifests/{name}", 200],
  },
  () => ImportDecoderManifestRequest,
  () => ImportDecoderManifestResponse
);
export var ListDecoderManifestSignals = op(
  n0,
  _LDMS,
  {
    [_ht]: ["GET", "/decoder-manifests/{name}/signals", 200],
  },
  () => ListDecoderManifestSignalsRequest,
  () => ListDecoderManifestSignalsResponse
);
export var UpdateDecoderManifest = op(
  n0,
  _UDM,
  {
    [_ht]: ["PATCH", "/decoder-manifests/{name}", 200],
  },
  () => UpdateDecoderManifestRequest,
  () => UpdateDecoderManifestResponse
);

// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _ADE,
  _APC,
  _aPC,
  _B,
  _b,
  _bA,
  _BL,
  _c,
  _cT,
  _DAC,
  _dAC,
  _dAPA,
  _dAPAa,
  _e,
  _EBC,
  _eBC,
  _eBE,
  _EC,
  _eC,
  _eM,
  _eT,
  _eTM,
  _GDAS,
  _GDASR,
  _GDASRe,
  _hE,
  _iA,
  _IC,
  _iC,
  _IDAA,
  _IDAAR,
  _IDAARn,
  _ISE,
  _k,
  _kEC,
  _kKI,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _NC,
  _nC,
  _OC,
  _oC,
  _rARN,
  _RNFE,
  _s,
  _sC,
  _se,
  _SQEE,
  _st,
  _sTM,
  _sU,
  _T,
  _t,
  _TE,
  _tK,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _TS,
  _tS,
  _UR,
  _URR,
  _URRn,
  _v,
  _va,
  _VAPC,
  _VE,
  _ve,
  _VSC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var AssetProcessingConfiguration = struct(n0, _APC, 0, [_v], [() => VideoAssetProcessingConfiguration]);
export var Blueprint = struct(n0, _B, 0, [_bA, _ve, _s], [0, 0, 0]);
export var DataAutomationConfiguration = struct(n0, _DAC, 0, [_dAPA, _s], [0, 0]);
export var EncryptionConfiguration = struct(n0, _EC, 0, [_kKI, _kEC], [0, 128 | 0]);
export var EventBridgeConfiguration = struct(n0, _EBC, 0, [_eBE], [2]);
export var GetDataAutomationStatusRequest = struct(n0, _GDASR, 0, [_iA], [[0, 1]]);
export var GetDataAutomationStatusResponse = struct(
  n0,
  _GDASRe,
  0,
  [_st, _eT, _eM, _oC],
  [0, 0, 0, () => OutputConfiguration]
);
export var InputConfiguration = struct(n0, _IC, 0, [_sU, _aPC], [0, () => AssetProcessingConfiguration]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var InvokeDataAutomationAsyncRequest = struct(
  n0,
  _IDAAR,
  0,
  [_cT, _iC, _oC, _dAC, _eC, _nC, _b, _dAPAa, _t],
  [
    [0, 4],
    () => InputConfiguration,
    () => OutputConfiguration,
    () => DataAutomationConfiguration,
    () => EncryptionConfiguration,
    () => NotificationConfiguration,
    () => BlueprintList,
    0,
    () => TagList,
  ]
);
export var InvokeDataAutomationAsyncResponse = struct(n0, _IDAARn, 0, [_iA], [0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rARN], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [() => TagList]);
export var NotificationConfiguration = struct(n0, _NC, 0, [_eBC], [() => EventBridgeConfiguration]);
export var OutputConfiguration = struct(n0, _OC, 0, [_sU], [0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var Tag = struct(n0, _T, 0, [_k, _va], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rARN, _t], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var TimestampSegment = struct(n0, _TS, 0, [_sTM, _eTM], [1, 1]);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rARN, _tK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ValidationException
);
export var VideoAssetProcessingConfiguration = struct(n0, _VAPC, 0, [_sC], [() => VideoSegmentConfiguration]);
export var Unit = "unit" as const;

export var BlueprintList = list(n0, _BL, 0, () => Blueprint);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var EncryptionContextMap = 128 | 0;

export var VideoSegmentConfiguration = uni(n0, _VSC, 0, [_tS], [() => TimestampSegment]);
export var GetDataAutomationStatus = op(
  n0,
  _GDAS,
  0,
  () => GetDataAutomationStatusRequest,
  () => GetDataAutomationStatusResponse
);
export var InvokeDataAutomationAsync = op(
  n0,
  _IDAA,
  2,
  () => InvokeDataAutomationAsyncRequest,
  () => InvokeDataAutomationAsyncResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);

export const _ADE = "AccessDeniedException";
export const _APC = "AssetProcessingConfiguration";
export const _B = "Blueprint";
export const _BL = "BlueprintList";
export const _DAC = "DataAutomationConfiguration";
export const _EBC = "EventBridgeConfiguration";
export const _EC = "EncryptionConfiguration";
export const _GDAS = "GetDataAutomationStatus";
export const _GDASR = "GetDataAutomationStatusRequest";
export const _GDASRe = "GetDataAutomationStatusResponse";
export const _IC = "InputConfiguration";
export const _IDAA = "InvokeDataAutomationAsync";
export const _IDAAR = "InvokeDataAutomationAsyncRequest";
export const _IDAARn = "InvokeDataAutomationAsyncResponse";
export const _ISE = "InternalServerException";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _NC = "NotificationConfiguration";
export const _OC = "OutputConfiguration";
export const _RNFE = "ResourceNotFoundException";
export const _SQEE = "ServiceQuotaExceededException";
export const _T = "Tag";
export const _TE = "ThrottlingException";
export const _TL = "TagList";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _TS = "TimestampSegment";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _VAPC = "VideoAssetProcessingConfiguration";
export const _VE = "ValidationException";
export const _VSC = "VideoSegmentConfiguration";
export const _aPC = "assetProcessingConfiguration";
export const _b = "blueprints";
export const _bA = "blueprintArn";
export const _c = "client";
export const _cT = "clientToken";
export const _dAC = "dataAutomationConfiguration";
export const _dAPA = "dataAutomationProjectArn";
export const _dAPAa = "dataAutomationProfileArn";
export const _e = "error";
export const _eBC = "eventBridgeConfiguration";
export const _eBE = "eventBridgeEnabled";
export const _eC = "encryptionConfiguration";
export const _eM = "errorMessage";
export const _eT = "errorType";
export const _eTM = "endTimeMillis";
export const _hE = "httpError";
export const _iA = "invocationArn";
export const _iC = "inputConfiguration";
export const _k = "key";
export const _kEC = "kmsEncryptionContext";
export const _kKI = "kmsKeyId";
export const _m = "message";
export const _nC = "notificationConfiguration";
export const _oC = "outputConfiguration";
export const _rARN = "resourceARN";
export const _s = "stage";
export const _sC = "segmentConfiguration";
export const _sTM = "startTimeMillis";
export const _sU = "s3Uri";
export const _se = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.bedrockdataautomationruntime";
export const _st = "status";
export const _t = "tags";
export const _tK = "tagKeys";
export const _tS = "timestampSegment";
export const _v = "video";
export const _va = "value";
export const _ve = "version";
export const n0 = "com.amazonaws.bedrockdataautomationruntime";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { BedrockDataAutomationRuntimeServiceException as __BedrockDataAutomationRuntimeServiceException } from "../models/BedrockDataAutomationRuntimeServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var AssetProcessingConfiguration: StaticStructureSchema = [
  3,
  n0,
  _APC,
  0,
  [_v],
  [() => VideoAssetProcessingConfiguration],
];
export var Blueprint: StaticStructureSchema = [3, n0, _B, 0, [_bA, _ve, _s], [0, 0, 0]];
export var DataAutomationConfiguration: StaticStructureSchema = [3, n0, _DAC, 0, [_dAPA, _s], [0, 0]];
export var EncryptionConfiguration: StaticStructureSchema = [3, n0, _EC, 0, [_kKI, _kEC], [0, 128 | 0]];
export var EventBridgeConfiguration: StaticStructureSchema = [3, n0, _EBC, 0, [_eBE], [2]];
export var GetDataAutomationStatusRequest: StaticStructureSchema = [3, n0, _GDASR, 0, [_iA], [[0, 1]]];
export var GetDataAutomationStatusResponse: StaticStructureSchema = [
  3,
  n0,
  _GDASRe,
  0,
  [_st, _eT, _eM, _oC],
  [0, 0, 0, () => OutputConfiguration],
];
export var InputConfiguration: StaticStructureSchema = [
  3,
  n0,
  _IC,
  0,
  [_sU, _aPC],
  [0, () => AssetProcessingConfiguration],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var InvokeDataAutomationAsyncRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var InvokeDataAutomationAsyncResponse: StaticStructureSchema = [3, n0, _IDAARn, 0, [_iA], [0]];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rARN], [0]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_t], [() => TagList]];
export var NotificationConfiguration: StaticStructureSchema = [3, n0, _NC, 0, [_eBC], [() => EventBridgeConfiguration]];
export var OutputConfiguration: StaticStructureSchema = [3, n0, _OC, 0, [_sU], [0]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var Tag: StaticStructureSchema = [3, n0, _T, 0, [_k, _va], [0, 0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_rARN, _t], [0, () => TagList]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var TimestampSegment: StaticStructureSchema = [3, n0, _TS, 0, [_sTM, _eTM], [1, 1]];
export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_rARN, _tK], [0, 64 | 0]];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var VideoAssetProcessingConfiguration: StaticStructureSchema = [
  3,
  n0,
  _VAPC,
  0,
  [_sC],
  [() => VideoSegmentConfiguration],
];
export var __Unit = "unit" as const;

export var BedrockDataAutomationRuntimeServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "BedrockDataAutomationRuntimeServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(
  BedrockDataAutomationRuntimeServiceException,
  __BedrockDataAutomationRuntimeServiceException
);

export var BlueprintList: StaticListSchema = [1, n0, _BL, 0, () => Blueprint];
export var TagKeyList = 64 | 0;

export var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag];
export var EncryptionContextMap = 128 | 0;

export var VideoSegmentConfiguration: StaticStructureSchema = [3, n0, _VSC, 0, [_tS], [() => TimestampSegment]];
export var GetDataAutomationStatus: StaticOperationSchema = [
  9,
  n0,
  _GDAS,
  0,
  () => GetDataAutomationStatusRequest,
  () => GetDataAutomationStatusResponse,
];
export var InvokeDataAutomationAsync: StaticOperationSchema = [
  9,
  n0,
  _IDAA,
  2,
  () => InvokeDataAutomationAsyncRequest,
  () => InvokeDataAutomationAsyncResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var TagResource: StaticOperationSchema = [9, n0, _TR, 0, () => TagResourceRequest, () => TagResourceResponse];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];

const _ADE = "AccessDeniedException";
const _APC = "AssetProcessingConfiguration";
const _B = "Blueprint";
const _BL = "BlueprintList";
const _DAC = "DataAutomationConfiguration";
const _EBC = "EventBridgeConfiguration";
const _EC = "EncryptionConfiguration";
const _GDAS = "GetDataAutomationStatus";
const _GDASR = "GetDataAutomationStatusRequest";
const _GDASRe = "GetDataAutomationStatusResponse";
const _IC = "InputConfiguration";
const _IDAA = "InvokeDataAutomationAsync";
const _IDAAR = "InvokeDataAutomationAsyncRequest";
const _IDAARn = "InvokeDataAutomationAsyncResponse";
const _ISE = "InternalServerException";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _NC = "NotificationConfiguration";
const _OC = "OutputConfiguration";
const _RNFE = "ResourceNotFoundException";
const _SQEE = "ServiceQuotaExceededException";
const _T = "Tag";
const _TE = "ThrottlingException";
const _TL = "TagList";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _TS = "TimestampSegment";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _VAPC = "VideoAssetProcessingConfiguration";
const _VE = "ValidationException";
const _VSC = "VideoSegmentConfiguration";
const _aPC = "assetProcessingConfiguration";
const _b = "blueprints";
const _bA = "blueprintArn";
const _c = "client";
const _cT = "clientToken";
const _dAC = "dataAutomationConfiguration";
const _dAPA = "dataAutomationProjectArn";
const _dAPAa = "dataAutomationProfileArn";
const _e = "error";
const _eBC = "eventBridgeConfiguration";
const _eBE = "eventBridgeEnabled";
const _eC = "encryptionConfiguration";
const _eM = "errorMessage";
const _eT = "errorType";
const _eTM = "endTimeMillis";
const _hE = "httpError";
const _iA = "invocationArn";
const _iC = "inputConfiguration";
const _k = "key";
const _kEC = "kmsEncryptionContext";
const _kKI = "kmsKeyId";
const _m = "message";
const _nC = "notificationConfiguration";
const _oC = "outputConfiguration";
const _rARN = "resourceARN";
const _s = "stage";
const _sC = "segmentConfiguration";
const _sTM = "startTimeMillis";
const _sU = "s3Uri";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.bedrockdataautomationruntime";
const _st = "status";
const _t = "tags";
const _tK = "tagKeys";
const _tS = "timestampSegment";
const _v = "video";
const _va = "value";
const _ve = "version";
const n0 = "com.amazonaws.bedrockdataautomationruntime";

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
} from "../models/errors";

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

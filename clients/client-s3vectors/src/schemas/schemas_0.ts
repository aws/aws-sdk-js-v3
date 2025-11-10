const _ADE = "AccessDeniedException";
const _CE = "ConflictException";
const _CI = "CreateIndex";
const _CII = "CreateIndexInput";
const _CIO = "CreateIndexOutput";
const _CVB = "CreateVectorBucket";
const _CVBI = "CreateVectorBucketInput";
const _CVBO = "CreateVectorBucketOutput";
const _DI = "DeleteIndex";
const _DII = "DeleteIndexInput";
const _DIO = "DeleteIndexOutput";
const _DV = "DeleteVectors";
const _DVB = "DeleteVectorBucket";
const _DVBI = "DeleteVectorBucketInput";
const _DVBO = "DeleteVectorBucketOutput";
const _DVBP = "DeleteVectorBucketPolicy";
const _DVBPI = "DeleteVectorBucketPolicyInput";
const _DVBPO = "DeleteVectorBucketPolicyOutput";
const _DVI = "DeleteVectorsInput";
const _DVO = "DeleteVectorsOutput";
const _EC = "EncryptionConfiguration";
const _GI = "GetIndex";
const _GII = "GetIndexInput";
const _GIO = "GetIndexOutput";
const _GOV = "GetOutputVector";
const _GV = "GetVectors";
const _GVB = "GetVectorBucket";
const _GVBI = "GetVectorBucketInput";
const _GVBO = "GetVectorBucketOutput";
const _GVBP = "GetVectorBucketPolicy";
const _GVBPI = "GetVectorBucketPolicyInput";
const _GVBPO = "GetVectorBucketPolicyOutput";
const _GVI = "GetVectorsInput";
const _GVO = "GetVectorsOutput";
const _GVOL = "GetVectorsOutputList";
const _I = "Index";
const _IS = "IndexSummary";
const _ISE = "InternalServerException";
const _KDE = "KmsDisabledException";
const _KIKUE = "KmsInvalidKeyUsageException";
const _KISE = "KmsInvalidStateException";
const _KNFE = "KmsNotFoundException";
const _LI = "ListIndexes";
const _LII = "ListIndexesInput";
const _LIO = "ListIndexesOutput";
const _LIOL = "ListIndexesOutputList";
const _LOV = "ListOutputVector";
const _LV = "ListVectors";
const _LVB = "ListVectorBuckets";
const _LVBI = "ListVectorBucketsInput";
const _LVBO = "ListVectorBucketsOutput";
const _LVBOL = "ListVectorBucketsOutputList";
const _LVI = "ListVectorsInput";
const _LVO = "ListVectorsOutput";
const _LVOL = "ListVectorsOutputList";
const _MC = "MetadataConfiguration";
const _NFE = "NotFoundException";
const _PIV = "PutInputVector";
const _PV = "PutVectors";
const _PVBP = "PutVectorBucketPolicy";
const _PVBPI = "PutVectorBucketPolicyInput";
const _PVBPO = "PutVectorBucketPolicyOutput";
const _PVI = "PutVectorsInput";
const _PVIL = "PutVectorsInputList";
const _PVO = "PutVectorsOutput";
const _QOV = "QueryOutputVector";
const _QV = "QueryVectors";
const _QVI = "QueryVectorsInput";
const _QVO = "QueryVectorsOutput";
const _QVOL = "QueryVectorsOutputList";
const _RTE = "RequestTimeoutException";
const _SQEE = "ServiceQuotaExceededException";
const _SUE = "ServiceUnavailableException";
const _TMRE = "TooManyRequestsException";
const _VB = "VectorBucket";
const _VBS = "VectorBucketSummary";
const _VD = "VectorData";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _c = "client";
const _cT = "creationTime";
const _d = "dimension";
const _dM = "distanceMetric";
const _dT = "dataType";
const _da = "data";
const _di = "distance";
const _e = "error";
const _eC = "encryptionConfiguration";
const _f = "filter";
const _fL = "fieldList";
const _fl = "float32";
const _h = "http";
const _hE = "httpError";
const _i = "index";
const _iA = "indexArn";
const _iN = "indexName";
const _in = "indexes";
const _k = "keys";
const _kKA = "kmsKeyArn";
const _ke = "key";
const _m = "message";
const _mC = "metadataConfiguration";
const _mR = "maxResults";
const _me = "metadata";
const _nFMK = "nonFilterableMetadataKeys";
const _nT = "nextToken";
const _p = "policy";
const _pa = "path";
const _pr = "prefix";
const _qV = "queryVector";
const _rD = "returnData";
const _rDe = "returnDistance";
const _rM = "returnMetadata";
const _s = "server";
const _sC = "segmentCount";
const _sI = "segmentIndex";
const _sT = "sseType";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.s3vectors";
const _tK = "topK";
const _v = "vectors";
const _vB = "vectorBucket";
const _vBA = "vectorBucketArn";
const _vBN = "vectorBucketName";
const _vBe = "vectorBuckets";
const n0 = "com.amazonaws.s3vectors";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  KmsDisabledException as __KmsDisabledException,
  KmsInvalidKeyUsageException as __KmsInvalidKeyUsageException,
  KmsInvalidStateException as __KmsInvalidStateException,
  KmsNotFoundException as __KmsNotFoundException,
  NotFoundException as __NotFoundException,
  RequestTimeoutException as __RequestTimeoutException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ServiceUnavailableException as __ServiceUnavailableException,
  TooManyRequestsException as __TooManyRequestsException,
  ValidationException as __ValidationException,
} from "../models/index";
import { S3VectorsServiceException as __S3VectorsServiceException } from "../models/S3VectorsServiceException";

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

export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CreateIndexInput: StaticStructureSchema = [
  3,
  n0,
  _CII,
  0,
  [_vBN, _vBA, _iN, _dT, _d, _dM, _mC],
  [0, 0, 0, 0, 1, 0, () => MetadataConfiguration],
];
export var CreateIndexOutput: StaticStructureSchema = [3, n0, _CIO, 0, [_iA], [0]];
export var CreateVectorBucketInput: StaticStructureSchema = [
  3,
  n0,
  _CVBI,
  0,
  [_vBN, _eC],
  [0, () => EncryptionConfiguration],
];
export var CreateVectorBucketOutput: StaticStructureSchema = [3, n0, _CVBO, 0, [_vBA], [0]];
export var DeleteIndexInput: StaticStructureSchema = [3, n0, _DII, 0, [_vBN, _iN, _iA], [0, 0, 0]];
export var DeleteIndexOutput: StaticStructureSchema = [3, n0, _DIO, 0, [], []];
export var DeleteVectorBucketInput: StaticStructureSchema = [3, n0, _DVBI, 0, [_vBN, _vBA], [0, 0]];
export var DeleteVectorBucketOutput: StaticStructureSchema = [3, n0, _DVBO, 0, [], []];
export var DeleteVectorBucketPolicyInput: StaticStructureSchema = [3, n0, _DVBPI, 0, [_vBN, _vBA], [0, 0]];
export var DeleteVectorBucketPolicyOutput: StaticStructureSchema = [3, n0, _DVBPO, 0, [], []];
export var DeleteVectorsInput: StaticStructureSchema = [3, n0, _DVI, 0, [_vBN, _iN, _iA, _k], [0, 0, 0, 64 | 0]];
export var DeleteVectorsOutput: StaticStructureSchema = [3, n0, _DVO, 0, [], []];
export var EncryptionConfiguration: StaticStructureSchema = [3, n0, _EC, 0, [_sT, _kKA], [0, 0]];
export var GetIndexInput: StaticStructureSchema = [3, n0, _GII, 0, [_vBN, _iN, _iA], [0, 0, 0]];
export var GetIndexOutput: StaticStructureSchema = [3, n0, _GIO, 0, [_i], [() => Index]];
export var GetOutputVector: StaticStructureSchema = [3, n0, _GOV, 0, [_ke, _da, _me], [0, () => VectorData, 15]];
export var GetVectorBucketInput: StaticStructureSchema = [3, n0, _GVBI, 0, [_vBN, _vBA], [0, 0]];
export var GetVectorBucketOutput: StaticStructureSchema = [3, n0, _GVBO, 0, [_vB], [() => VectorBucket]];
export var GetVectorBucketPolicyInput: StaticStructureSchema = [3, n0, _GVBPI, 0, [_vBN, _vBA], [0, 0]];
export var GetVectorBucketPolicyOutput: StaticStructureSchema = [3, n0, _GVBPO, 0, [_p], [0]];
export var GetVectorsInput: StaticStructureSchema = [
  3,
  n0,
  _GVI,
  0,
  [_vBN, _iN, _iA, _k, _rD, _rM],
  [0, 0, 0, 64 | 0, 2, 2],
];
export var GetVectorsOutput: StaticStructureSchema = [3, n0, _GVO, 0, [_v], [() => GetVectorsOutputList]];
export var Index: StaticStructureSchema = [
  3,
  n0,
  _I,
  0,
  [_vBN, _iN, _iA, _cT, _dT, _d, _dM, _mC],
  [0, 0, 0, 4, 0, 1, 0, () => MetadataConfiguration],
];
export var IndexSummary: StaticStructureSchema = [3, n0, _IS, 0, [_vBN, _iN, _iA, _cT], [0, 0, 0, 4]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var KmsDisabledException: StaticErrorSchema = [
  -3,
  n0,
  _KDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(KmsDisabledException, __KmsDisabledException);

export var KmsInvalidKeyUsageException: StaticErrorSchema = [
  -3,
  n0,
  _KIKUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(KmsInvalidKeyUsageException, __KmsInvalidKeyUsageException);

export var KmsInvalidStateException: StaticErrorSchema = [
  -3,
  n0,
  _KISE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(KmsInvalidStateException, __KmsInvalidStateException);

export var KmsNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _KNFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(KmsNotFoundException, __KmsNotFoundException);

export var ListIndexesInput: StaticStructureSchema = [3, n0, _LII, 0, [_vBN, _vBA, _mR, _nT, _pr], [0, 0, 1, 0, 0]];
export var ListIndexesOutput: StaticStructureSchema = [3, n0, _LIO, 0, [_nT, _in], [0, () => ListIndexesOutputList]];
export var ListOutputVector: StaticStructureSchema = [3, n0, _LOV, 0, [_ke, _da, _me], [0, () => VectorData, 15]];
export var ListVectorBucketsInput: StaticStructureSchema = [3, n0, _LVBI, 0, [_mR, _nT, _pr], [1, 0, 0]];
export var ListVectorBucketsOutput: StaticStructureSchema = [
  3,
  n0,
  _LVBO,
  0,
  [_nT, _vBe],
  [0, () => ListVectorBucketsOutputList],
];
export var ListVectorsInput: StaticStructureSchema = [
  3,
  n0,
  _LVI,
  0,
  [_vBN, _iN, _iA, _mR, _nT, _sC, _sI, _rD, _rM],
  [0, 0, 0, 1, 0, 1, 1, 2, 2],
];
export var ListVectorsOutput: StaticStructureSchema = [3, n0, _LVO, 0, [_nT, _v], [0, () => ListVectorsOutputList]];
export var MetadataConfiguration: StaticStructureSchema = [3, n0, _MC, 0, [_nFMK], [64 | 0]];
export var NotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(NotFoundException, __NotFoundException);

export var PutInputVector: StaticStructureSchema = [3, n0, _PIV, 0, [_ke, _da, _me], [0, () => VectorData, 15]];
export var PutVectorBucketPolicyInput: StaticStructureSchema = [3, n0, _PVBPI, 0, [_vBN, _vBA, _p], [0, 0, 0]];
export var PutVectorBucketPolicyOutput: StaticStructureSchema = [3, n0, _PVBPO, 0, [], []];
export var PutVectorsInput: StaticStructureSchema = [
  3,
  n0,
  _PVI,
  0,
  [_vBN, _iN, _iA, _v],
  [0, 0, 0, () => PutVectorsInputList],
];
export var PutVectorsOutput: StaticStructureSchema = [3, n0, _PVO, 0, [], []];
export var QueryOutputVector: StaticStructureSchema = [
  3,
  n0,
  _QOV,
  0,
  [_ke, _da, _me, _di],
  [0, () => VectorData, 15, 1],
];
export var QueryVectorsInput: StaticStructureSchema = [
  3,
  n0,
  _QVI,
  0,
  [_vBN, _iN, _iA, _tK, _qV, _f, _rM, _rDe],
  [0, 0, 0, 1, () => VectorData, 15, 2, 2],
];
export var QueryVectorsOutput: StaticStructureSchema = [3, n0, _QVO, 0, [_v, _dM], [() => QueryVectorsOutputList, 0]];
export var RequestTimeoutException: StaticErrorSchema = [
  -3,
  n0,
  _RTE,
  {
    [_e]: _c,
    [_hE]: 408,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(RequestTimeoutException, __RequestTimeoutException);

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

export var ServiceUnavailableException: StaticErrorSchema = [
  -3,
  n0,
  _SUE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceUnavailableException, __ServiceUnavailableException);

export var TooManyRequestsException: StaticErrorSchema = [
  -3,
  n0,
  _TMRE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(TooManyRequestsException, __TooManyRequestsException);

export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
  },
  [_m, _fL],
  [0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_pa, _m], [0, 0]];
export var VectorBucket: StaticStructureSchema = [
  3,
  n0,
  _VB,
  0,
  [_vBN, _vBA, _cT, _eC],
  [0, 0, 4, () => EncryptionConfiguration],
];
export var VectorBucketSummary: StaticStructureSchema = [3, n0, _VBS, 0, [_vBN, _vBA, _cT], [0, 0, 4]];
export var __Unit = "unit" as const;

export var S3VectorsServiceException: StaticErrorSchema = [-3, _sm, "S3VectorsServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(S3VectorsServiceException, __S3VectorsServiceException);

export var DeleteVectorsInputList = 64 | 0;

export var Float32VectorData = 64 | 1;

export var GetVectorsInputList = 64 | 0;

export var GetVectorsOutputList: StaticListSchema = [1, n0, _GVOL, 0, () => GetOutputVector];
export var ListIndexesOutputList: StaticListSchema = [1, n0, _LIOL, 0, () => IndexSummary];
export var ListVectorBucketsOutputList: StaticListSchema = [1, n0, _LVBOL, 0, () => VectorBucketSummary];
export var ListVectorsOutputList: StaticListSchema = [1, n0, _LVOL, 0, () => ListOutputVector];
export var NonFilterableMetadataKeys = 64 | 0;

export var PutVectorsInputList: StaticListSchema = [1, n0, _PVIL, 0, () => PutInputVector];
export var QueryVectorsOutputList: StaticListSchema = [1, n0, _QVOL, 0, () => QueryOutputVector];
export var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField];
export var VectorData: StaticStructureSchema = [3, n0, _VD, 0, [_fl], [64 | 1]];
export var CreateIndex: StaticOperationSchema = [
  9,
  n0,
  _CI,
  {
    [_h]: ["POST", "/CreateIndex", 200],
  },
  () => CreateIndexInput,
  () => CreateIndexOutput,
];
export var CreateVectorBucket: StaticOperationSchema = [
  9,
  n0,
  _CVB,
  {
    [_h]: ["POST", "/CreateVectorBucket", 200],
  },
  () => CreateVectorBucketInput,
  () => CreateVectorBucketOutput,
];
export var DeleteIndex: StaticOperationSchema = [
  9,
  n0,
  _DI,
  {
    [_h]: ["POST", "/DeleteIndex", 200],
  },
  () => DeleteIndexInput,
  () => DeleteIndexOutput,
];
export var DeleteVectorBucket: StaticOperationSchema = [
  9,
  n0,
  _DVB,
  {
    [_h]: ["POST", "/DeleteVectorBucket", 200],
  },
  () => DeleteVectorBucketInput,
  () => DeleteVectorBucketOutput,
];
export var DeleteVectorBucketPolicy: StaticOperationSchema = [
  9,
  n0,
  _DVBP,
  {
    [_h]: ["POST", "/DeleteVectorBucketPolicy", 200],
  },
  () => DeleteVectorBucketPolicyInput,
  () => DeleteVectorBucketPolicyOutput,
];
export var DeleteVectors: StaticOperationSchema = [
  9,
  n0,
  _DV,
  {
    [_h]: ["POST", "/DeleteVectors", 200],
  },
  () => DeleteVectorsInput,
  () => DeleteVectorsOutput,
];
export var GetIndex: StaticOperationSchema = [
  9,
  n0,
  _GI,
  {
    [_h]: ["POST", "/GetIndex", 200],
  },
  () => GetIndexInput,
  () => GetIndexOutput,
];
export var GetVectorBucket: StaticOperationSchema = [
  9,
  n0,
  _GVB,
  {
    [_h]: ["POST", "/GetVectorBucket", 200],
  },
  () => GetVectorBucketInput,
  () => GetVectorBucketOutput,
];
export var GetVectorBucketPolicy: StaticOperationSchema = [
  9,
  n0,
  _GVBP,
  {
    [_h]: ["POST", "/GetVectorBucketPolicy", 200],
  },
  () => GetVectorBucketPolicyInput,
  () => GetVectorBucketPolicyOutput,
];
export var GetVectors: StaticOperationSchema = [
  9,
  n0,
  _GV,
  {
    [_h]: ["POST", "/GetVectors", 200],
  },
  () => GetVectorsInput,
  () => GetVectorsOutput,
];
export var ListIndexes: StaticOperationSchema = [
  9,
  n0,
  _LI,
  {
    [_h]: ["POST", "/ListIndexes", 200],
  },
  () => ListIndexesInput,
  () => ListIndexesOutput,
];
export var ListVectorBuckets: StaticOperationSchema = [
  9,
  n0,
  _LVB,
  {
    [_h]: ["POST", "/ListVectorBuckets", 200],
  },
  () => ListVectorBucketsInput,
  () => ListVectorBucketsOutput,
];
export var ListVectors: StaticOperationSchema = [
  9,
  n0,
  _LV,
  {
    [_h]: ["POST", "/ListVectors", 200],
  },
  () => ListVectorsInput,
  () => ListVectorsOutput,
];
export var PutVectorBucketPolicy: StaticOperationSchema = [
  9,
  n0,
  _PVBP,
  {
    [_h]: ["POST", "/PutVectorBucketPolicy", 200],
  },
  () => PutVectorBucketPolicyInput,
  () => PutVectorBucketPolicyOutput,
];
export var PutVectors: StaticOperationSchema = [
  9,
  n0,
  _PV,
  {
    [_h]: ["POST", "/PutVectors", 200],
  },
  () => PutVectorsInput,
  () => PutVectorsOutput,
];
export var QueryVectors: StaticOperationSchema = [
  9,
  n0,
  _QV,
  {
    [_h]: ["POST", "/QueryVectors", 200],
  },
  () => QueryVectorsInput,
  () => QueryVectorsOutput,
];

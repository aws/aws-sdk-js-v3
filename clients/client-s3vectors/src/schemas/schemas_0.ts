export const _ADE = "AccessDeniedException";
export const _CE = "ConflictException";
export const _CI = "CreateIndex";
export const _CII = "CreateIndexInput";
export const _CIO = "CreateIndexOutput";
export const _CVB = "CreateVectorBucket";
export const _CVBI = "CreateVectorBucketInput";
export const _CVBO = "CreateVectorBucketOutput";
export const _DI = "DeleteIndex";
export const _DII = "DeleteIndexInput";
export const _DIO = "DeleteIndexOutput";
export const _DV = "DeleteVectors";
export const _DVB = "DeleteVectorBucket";
export const _DVBI = "DeleteVectorBucketInput";
export const _DVBO = "DeleteVectorBucketOutput";
export const _DVBP = "DeleteVectorBucketPolicy";
export const _DVBPI = "DeleteVectorBucketPolicyInput";
export const _DVBPO = "DeleteVectorBucketPolicyOutput";
export const _DVI = "DeleteVectorsInput";
export const _DVO = "DeleteVectorsOutput";
export const _EC = "EncryptionConfiguration";
export const _GI = "GetIndex";
export const _GII = "GetIndexInput";
export const _GIO = "GetIndexOutput";
export const _GOV = "GetOutputVector";
export const _GV = "GetVectors";
export const _GVB = "GetVectorBucket";
export const _GVBI = "GetVectorBucketInput";
export const _GVBO = "GetVectorBucketOutput";
export const _GVBP = "GetVectorBucketPolicy";
export const _GVBPI = "GetVectorBucketPolicyInput";
export const _GVBPO = "GetVectorBucketPolicyOutput";
export const _GVI = "GetVectorsInput";
export const _GVO = "GetVectorsOutput";
export const _GVOL = "GetVectorsOutputList";
export const _I = "Index";
export const _IS = "IndexSummary";
export const _ISE = "InternalServerException";
export const _KDE = "KmsDisabledException";
export const _KIKUE = "KmsInvalidKeyUsageException";
export const _KISE = "KmsInvalidStateException";
export const _KNFE = "KmsNotFoundException";
export const _LI = "ListIndexes";
export const _LII = "ListIndexesInput";
export const _LIO = "ListIndexesOutput";
export const _LIOL = "ListIndexesOutputList";
export const _LOV = "ListOutputVector";
export const _LV = "ListVectors";
export const _LVB = "ListVectorBuckets";
export const _LVBI = "ListVectorBucketsInput";
export const _LVBO = "ListVectorBucketsOutput";
export const _LVBOL = "ListVectorBucketsOutputList";
export const _LVI = "ListVectorsInput";
export const _LVO = "ListVectorsOutput";
export const _LVOL = "ListVectorsOutputList";
export const _MC = "MetadataConfiguration";
export const _NFE = "NotFoundException";
export const _PIV = "PutInputVector";
export const _PV = "PutVectors";
export const _PVBP = "PutVectorBucketPolicy";
export const _PVBPI = "PutVectorBucketPolicyInput";
export const _PVBPO = "PutVectorBucketPolicyOutput";
export const _PVI = "PutVectorsInput";
export const _PVIL = "PutVectorsInputList";
export const _PVO = "PutVectorsOutput";
export const _QOV = "QueryOutputVector";
export const _QV = "QueryVectors";
export const _QVI = "QueryVectorsInput";
export const _QVO = "QueryVectorsOutput";
export const _QVOL = "QueryVectorsOutputList";
export const _SQEE = "ServiceQuotaExceededException";
export const _SUE = "ServiceUnavailableException";
export const _TMRE = "TooManyRequestsException";
export const _VB = "VectorBucket";
export const _VBS = "VectorBucketSummary";
export const _VD = "VectorData";
export const _VE = "ValidationException";
export const _VEF = "ValidationExceptionField";
export const _VEFL = "ValidationExceptionFieldList";
export const _c = "client";
export const _cT = "creationTime";
export const _d = "dimension";
export const _dM = "distanceMetric";
export const _dT = "dataType";
export const _da = "data";
export const _di = "distance";
export const _e = "error";
export const _eC = "encryptionConfiguration";
export const _f = "filter";
export const _fL = "fieldList";
export const _fl = "float32";
export const _h = "http";
export const _hE = "httpError";
export const _i = "index";
export const _iA = "indexArn";
export const _iN = "indexName";
export const _in = "indexes";
export const _k = "keys";
export const _kKA = "kmsKeyArn";
export const _ke = "key";
export const _m = "message";
export const _mC = "metadataConfiguration";
export const _mR = "maxResults";
export const _me = "metadata";
export const _nFMK = "nonFilterableMetadataKeys";
export const _nT = "nextToken";
export const _p = "policy";
export const _pa = "path";
export const _pr = "prefix";
export const _qV = "queryVector";
export const _rD = "returnData";
export const _rDe = "returnDistance";
export const _rM = "returnMetadata";
export const _s = "server";
export const _sC = "segmentCount";
export const _sI = "segmentIndex";
export const _sT = "sseType";
export const _tK = "topK";
export const _v = "vectors";
export const _vB = "vectorBucket";
export const _vBA = "vectorBucketArn";
export const _vBN = "vectorBucketName";
export const _vBe = "vectorBuckets";
export const n0 = "com.amazonaws.s3vectors";

// smithy-typescript generated code
import { error, list, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ServiceUnavailableException as __ServiceUnavailableException,
  TooManyRequestsException as __TooManyRequestsException,
  ValidationException as __ValidationException,
} from "../models/index";
import { S3VectorsServiceException as __S3VectorsServiceException } from "../models/S3VectorsServiceException";

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
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
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
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_m],
  [0],

  __ServiceUnavailableException
);
export var TooManyRequestsException = error(
  n0,
  _TMRE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __TooManyRequestsException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
  },
  [_m, _fL],
  [0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_pa, _m], [0, 0]);
export var S3VectorsServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.s3vectors",
  "S3VectorsServiceException",
  0,
  [],
  [],
  __S3VectorsServiceException
);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cT,
  _DVB,
  _DVBI,
  _DVBO,
  _DVBP,
  _DVBPI,
  _DVBPO,
  _eC,
  _GVB,
  _GVBI,
  _GVBO,
  _GVBP,
  _GVBPI,
  _GVBPO,
  _h,
  _LVB,
  _LVBI,
  _LVBO,
  _LVBOL,
  _mR,
  _nT,
  _p,
  _pr,
  _PVBP,
  _PVBPI,
  _PVBPO,
  _VB,
  _vB,
  _vBA,
  _vBe,
  _vBN,
  _VBS,
  n0,
} from "./schemas_0";
import { EncryptionConfiguration } from "./schemas_3_VectorBucket";

/* eslint no-var: 0 */

export var DeleteVectorBucketInput = struct(n0, _DVBI, 0, [_vBN, _vBA], [0, 0]);
export var DeleteVectorBucketOutput = struct(n0, _DVBO, 0, [], []);
export var DeleteVectorBucketPolicyInput = struct(n0, _DVBPI, 0, [_vBN, _vBA], [0, 0]);
export var DeleteVectorBucketPolicyOutput = struct(n0, _DVBPO, 0, [], []);
export var GetVectorBucketInput = struct(n0, _GVBI, 0, [_vBN, _vBA], [0, 0]);
export var GetVectorBucketOutput = struct(n0, _GVBO, 0, [_vB], [() => VectorBucket]);
export var GetVectorBucketPolicyInput = struct(n0, _GVBPI, 0, [_vBN, _vBA], [0, 0]);
export var GetVectorBucketPolicyOutput = struct(n0, _GVBPO, 0, [_p], [0]);
export var ListVectorBucketsInput = struct(n0, _LVBI, 0, [_mR, _nT, _pr], [1, 0, 0]);
export var ListVectorBucketsOutput = struct(n0, _LVBO, 0, [_nT, _vBe], [0, () => ListVectorBucketsOutputList]);
export var PutVectorBucketPolicyInput = struct(n0, _PVBPI, 0, [_vBN, _vBA, _p], [0, 0, 0]);
export var PutVectorBucketPolicyOutput = struct(n0, _PVBPO, 0, [], []);
export var VectorBucket = struct(n0, _VB, 0, [_vBN, _vBA, _cT, _eC], [0, 0, 4, () => EncryptionConfiguration]);
export var VectorBucketSummary = struct(n0, _VBS, 0, [_vBN, _vBA, _cT], [0, 0, 4]);
export var ListVectorBucketsOutputList = list(n0, _LVBOL, 0, () => VectorBucketSummary);
export var DeleteVectorBucket = op(
  n0,
  _DVB,
  {
    [_h]: ["POST", "/DeleteVectorBucket", 200],
  },
  () => DeleteVectorBucketInput,
  () => DeleteVectorBucketOutput
);
export var DeleteVectorBucketPolicy = op(
  n0,
  _DVBP,
  {
    [_h]: ["POST", "/DeleteVectorBucketPolicy", 200],
  },
  () => DeleteVectorBucketPolicyInput,
  () => DeleteVectorBucketPolicyOutput
);
export var GetVectorBucket = op(
  n0,
  _GVB,
  {
    [_h]: ["POST", "/GetVectorBucket", 200],
  },
  () => GetVectorBucketInput,
  () => GetVectorBucketOutput
);
export var GetVectorBucketPolicy = op(
  n0,
  _GVBP,
  {
    [_h]: ["POST", "/GetVectorBucketPolicy", 200],
  },
  () => GetVectorBucketPolicyInput,
  () => GetVectorBucketPolicyOutput
);
export var ListVectorBuckets = op(
  n0,
  _LVB,
  {
    [_h]: ["POST", "/ListVectorBuckets", 200],
  },
  () => ListVectorBucketsInput,
  () => ListVectorBucketsOutput
);
export var PutVectorBucketPolicy = op(
  n0,
  _PVBP,
  {
    [_h]: ["POST", "/PutVectorBucketPolicy", 200],
  },
  () => PutVectorBucketPolicyInput,
  () => PutVectorBucketPolicyOutput
);

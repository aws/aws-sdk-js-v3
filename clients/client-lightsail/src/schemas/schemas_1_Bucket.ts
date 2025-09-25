// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _acc,
  _AK,
  _aK,
  _aKc,
  _aKI,
  _AKL,
  _AKLU,
  _ALBS,
  _aLBS,
  _aLC,
  _aPO,
  _AR,
  _aR,
  _ARL,
  _aTUB,
  _BALC,
  _bIL,
  _bIu,
  _BLu,
  _bN,
  _BS,
  _Bu,
  _bu,
  _buc,
  _cA,
  _CBAK,
  _CBAKR,
  _CBAKRr,
  _CBR,
  _CBr,
  _CBRr,
  _co,
  _DBAK,
  _DBAKR,
  _DBAKRe,
  _DBe,
  _DBR,
  _DBRe,
  _des,
  _en,
  _eOV,
  _eT,
  _fD,
  _GBAK,
  _GBAKR,
  _GBAKRe,
  _GBe,
  _GBMD,
  _GBMDR,
  _GBMDRe,
  _GBRet,
  _GBRetu,
  _gO,
  _ht,
  _IAMAKI,
  _iCR,
  _l,
  _lSA,
  _lU,
  _lUD,
  _m,
  _mD,
  _mN,
  _n,
  _nPT,
  _o,
  _oV,
  _p,
  _pr,
  _pT,
  _r,
  _rAA,
  _rN,
  _RRA,
  _rRA,
  _rT,
  _s,
  _sAK,
  _sC,
  _sN,
  _SRAFB,
  _SRAFBR,
  _SRAFBRe,
  _sT,
  _sta,
  _stat,
  _ta,
  _u,
  _UB,
  _UBB,
  _UBBR,
  _UBBRp,
  _UBR,
  _UBRp,
  _ur,
  _ve,
  n0,
  OperationList,
  ResourceLocation,
  TagList,
} from "./schemas_0";
import { MetricDatapointList } from "./schemas_5_Get";

/* eslint no-var: 0 */

export var IAMAccessKeyId = sim(n0, _IAMAKI, 0, 8);
export var AccessKey = struct(
  n0,
  _AK,
  0,
  [_aKI, _sAK, _s, _cA, _lU],
  [[() => IAMAccessKeyId, 0], 0, 0, 4, () => AccessKeyLastUsed]
);
export var AccessKeyLastUsed = struct(n0, _AKLU, 0, [_lUD, _r, _sN], [4, 0, 0]);
export var AccessRules = struct(n0, _AR, 0, [_gO, _aPO], [0, 2]);
export var AccountLevelBpaSync = struct(n0, _ALBS, 0, [_s, _lSA, _m, _bIL], [0, 4, 0, 2]);
export var Bucket = struct(
  n0,
  _Bu,
  0,
  [_rT, _aR, _a, _bIu, _cA, _ur, _l, _n, _sC, _ta, _oV, _aTUB, _rAA, _rRA, _sta, _aLC],
  [
    0,
    () => AccessRules,
    0,
    0,
    4,
    0,
    () => ResourceLocation,
    0,
    0,
    () => TagList,
    0,
    2,
    64 | 0,
    () => AccessReceiverList,
    () => BucketState,
    () => BucketAccessLogConfig,
  ]
);
export var BucketAccessLogConfig = struct(n0, _BALC, 0, [_en, _des, _pr], [2, 0, 0]);
export var BucketState = struct(n0, _BS, 0, [_co, _m], [0, 0]);
export var CreateBucketAccessKeyRequest = struct(n0, _CBAKR, 0, [_bN], [0]);
export var CreateBucketAccessKeyResult = struct(n0, _CBAKRr, 0, [_aK, _o], [[() => AccessKey, 0], () => OperationList]);
export var CreateBucketRequest = struct(n0, _CBR, 0, [_bN, _bIu, _ta, _eOV], [0, 0, () => TagList, 2]);
export var CreateBucketResult = struct(n0, _CBRr, 0, [_bu, _o], [() => Bucket, () => OperationList]);
export var DeleteBucketAccessKeyRequest = struct(n0, _DBAKR, 0, [_bN, _aKI], [0, 0]);
export var DeleteBucketAccessKeyResult = struct(n0, _DBAKRe, 0, [_o], [() => OperationList]);
export var DeleteBucketRequest = struct(n0, _DBR, 0, [_bN, _fD], [0, 2]);
export var DeleteBucketResult = struct(n0, _DBRe, 0, [_o], [() => OperationList]);
export var GetBucketAccessKeysRequest = struct(n0, _GBAKR, 0, [_bN], [0]);
export var GetBucketAccessKeysResult = struct(n0, _GBAKRe, 0, [_aKc], [[() => AccessKeyList, 0]]);
export var GetBucketMetricDataRequest = struct(
  n0,
  _GBMDR,
  0,
  [_bN, _mN, _sT, _eT, _p, _stat, _u],
  [0, 0, 4, 4, 1, 64 | 0, 0]
);
export var GetBucketMetricDataResult = struct(n0, _GBMDRe, 0, [_mN, _mD], [0, () => MetricDatapointList]);
export var GetBucketsRequest = struct(n0, _GBRet, 0, [_bN, _pT, _iCR], [0, 0, 2]);
export var GetBucketsResult = struct(
  n0,
  _GBRetu,
  0,
  [_buc, _nPT, _aLBS],
  [() => BucketList, 0, () => AccountLevelBpaSync]
);
export var ResourceReceivingAccess = struct(n0, _RRA, 0, [_n, _rT], [0, 0]);
export var SetResourceAccessForBucketRequest = struct(n0, _SRAFBR, 0, [_rN, _bN, _acc], [0, 0, 0]);
export var SetResourceAccessForBucketResult = struct(n0, _SRAFBRe, 0, [_o], [() => OperationList]);
export var UpdateBucketBundleRequest = struct(n0, _UBBR, 0, [_bN, _bIu], [0, 0]);
export var UpdateBucketBundleResult = struct(n0, _UBBRp, 0, [_o], [() => OperationList]);
export var UpdateBucketRequest = struct(
  n0,
  _UBR,
  0,
  [_bN, _aR, _ve, _rAA, _aLC],
  [0, () => AccessRules, 0, 64 | 0, () => BucketAccessLogConfig]
);
export var UpdateBucketResult = struct(n0, _UBRp, 0, [_bu, _o], [() => Bucket, () => OperationList]);
export var AccessKeyList = list(n0, _AKL, 0, [() => AccessKey, 0]);
export var AccessReceiverList = list(n0, _ARL, 0, () => ResourceReceivingAccess);
export var BucketList = list(n0, _BLu, 0, () => Bucket);
export var PartnerIdList = 64 | 0;

export var CreateBucket = op(
  n0,
  _CBr,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateBucket", 200],
  },
  () => CreateBucketRequest,
  () => CreateBucketResult
);
export var CreateBucketAccessKey = op(
  n0,
  _CBAK,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateBucketAccessKey", 200],
  },
  () => CreateBucketAccessKeyRequest,
  () => CreateBucketAccessKeyResult
);
export var DeleteBucket = op(
  n0,
  _DBe,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteBucket", 200],
  },
  () => DeleteBucketRequest,
  () => DeleteBucketResult
);
export var DeleteBucketAccessKey = op(
  n0,
  _DBAK,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteBucketAccessKey", 200],
  },
  () => DeleteBucketAccessKeyRequest,
  () => DeleteBucketAccessKeyResult
);
export var GetBucketAccessKeys = op(
  n0,
  _GBAK,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetBucketAccessKeys", 200],
  },
  () => GetBucketAccessKeysRequest,
  () => GetBucketAccessKeysResult
);
export var GetBucketMetricData = op(
  n0,
  _GBMD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetBucketMetricData", 200],
  },
  () => GetBucketMetricDataRequest,
  () => GetBucketMetricDataResult
);
export var GetBuckets = op(
  n0,
  _GBe,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetBuckets", 200],
  },
  () => GetBucketsRequest,
  () => GetBucketsResult
);
export var SetResourceAccessForBucket = op(
  n0,
  _SRAFB,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/SetResourceAccessForBucket", 200],
  },
  () => SetResourceAccessForBucketRequest,
  () => SetResourceAccessForBucketResult
);
export var UpdateBucket = op(
  n0,
  _UB,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/UpdateBucket", 200],
  },
  () => UpdateBucketRequest,
  () => UpdateBucketResult
);
export var UpdateBucketBundle = op(
  n0,
  _UBB,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/UpdateBucketBundle", 200],
  },
  () => UpdateBucketBundleRequest,
  () => UpdateBucketBundleResult
);

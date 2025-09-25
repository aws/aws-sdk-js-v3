// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { NotSupportedOperationException as __NotSupportedOperationException } from "../models/index";
import {
  _a,
  _AMRSU,
  _AMRSUR,
  _AMRSURb,
  _c,
  _ch,
  _CMRSUr,
  _CMRSURr,
  _CMRSURre,
  _cT,
  _cTl,
  _d,
  _DSAP,
  _DSAPR,
  _DSAPRe,
  _e,
  _end,
  _gF,
  _GSAP,
  _GSAPR,
  _GSAPRe,
  _hE,
  _hQ,
  _ht,
  _m,
  _mT,
  _n,
  _NSOE,
  _pa,
  _pN,
  _pS,
  _PSAP,
  _PSAPR,
  _PSAPRu,
  _rAe,
  _rL,
  _RSPSB,
  _s,
  _SAP,
  _sAP,
  _sAPA,
  _sFT,
  _sIa,
  _sIt,
  _sIu,
  _sSI,
  _sTtor,
  _ta,
  _uI,
  _URSP,
  _URSPR,
  _URSPRp,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ReadSetPartStreamingBlob = sim(n0, _RSPSB, 42, {
  [_rL]: 1,
  [_s]: 1,
});
export var S3AccessPolicy = sim(n0, _SAP, 0, {
  [_mT]: _a,
});
export var AbortMultipartReadSetUploadRequest = struct(
  n0,
  _AMRSUR,
  0,
  [_sSI, _uI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var AbortMultipartReadSetUploadResponse = struct(n0, _AMRSURb, 0, [], []);
export var CreateMultipartReadSetUploadRequest = struct(
  n0,
  _CMRSURr,
  0,
  [_sSI, _cTl, _sFT, _sIu, _sIa, _gF, _rAe, _n, _d, _ta],
  [[0, 1], 0, 0, 0, 0, 0, 0, 0, 0, 128 | 0]
);
export var CreateMultipartReadSetUploadResponse = struct(
  n0,
  _CMRSURre,
  0,
  [_sSI, _uI, _sFT, _sIu, _sIa, _gF, _rAe, _n, _d, _ta, _cT],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 128 | 0, 5]
);
export var DeleteS3AccessPolicyRequest = struct(n0, _DSAPR, 0, [_sAPA], [[0, 1]]);
export var DeleteS3AccessPolicyResponse = struct(n0, _DSAPRe, 0, [], []);
export var GetS3AccessPolicyRequest = struct(n0, _GSAPR, 0, [_sAPA], [[0, 1]]);
export var GetS3AccessPolicyResponse = struct(
  n0,
  _GSAPRe,
  0,
  [_sAPA, _sIt, _sTtor, _uT, _sAP],
  [0, 0, 0, 5, [() => S3AccessPolicy, 0]]
);
export var NotSupportedOperationException = error(
  n0,
  _NSOE,
  {
    [_e]: _c,
    [_hE]: 405,
  },
  [_m],
  [0],

  __NotSupportedOperationException
);
export var PutS3AccessPolicyRequest = struct(
  n0,
  _PSAPR,
  0,
  [_sAPA, _sAP],
  [
    [0, 1],
    [() => S3AccessPolicy, 0],
  ]
);
export var PutS3AccessPolicyResponse = struct(n0, _PSAPRu, 0, [_sAPA, _sIt, _sTtor], [0, 0, 0]);
export var UploadReadSetPartRequest = struct(
  n0,
  _URSPR,
  0,
  [_sSI, _uI, _pS, _pN, _pa],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _pS,
      },
    ],
    [
      1,
      {
        [_hQ]: _pN,
      },
    ],
    [() => ReadSetPartStreamingBlob, 16],
  ]
);
export var UploadReadSetPartResponse = struct(n0, _URSPRp, 0, [_ch], [0]);
export var Unit = "unit" as const;

export var AbortMultipartReadSetUpload = op(
  n0,
  _AMRSU,
  {
    [_ht]: ["DELETE", "/sequencestore/{sequenceStoreId}/upload/{uploadId}/abort", 200],
    [_end]: ["control-storage-"],
  },
  () => AbortMultipartReadSetUploadRequest,
  () => AbortMultipartReadSetUploadResponse
);
export var CreateMultipartReadSetUpload = op(
  n0,
  _CMRSUr,
  {
    [_ht]: ["POST", "/sequencestore/{sequenceStoreId}/upload", 200],
    [_end]: ["control-storage-"],
  },
  () => CreateMultipartReadSetUploadRequest,
  () => CreateMultipartReadSetUploadResponse
);
export var DeleteS3AccessPolicy = op(
  n0,
  _DSAP,
  {
    [_ht]: ["DELETE", "/s3accesspolicy/{s3AccessPointArn}", 200],
    [_end]: ["control-storage-"],
  },
  () => DeleteS3AccessPolicyRequest,
  () => DeleteS3AccessPolicyResponse
);
export var GetS3AccessPolicy = op(
  n0,
  _GSAP,
  {
    [_ht]: ["GET", "/s3accesspolicy/{s3AccessPointArn}", 200],
    [_end]: ["control-storage-"],
  },
  () => GetS3AccessPolicyRequest,
  () => GetS3AccessPolicyResponse
);
export var PutS3AccessPolicy = op(
  n0,
  _PSAP,
  {
    [_ht]: ["PUT", "/s3accesspolicy/{s3AccessPointArn}", 200],
    [_end]: ["control-storage-"],
  },
  () => PutS3AccessPolicyRequest,
  () => PutS3AccessPolicyResponse
);
export var UploadReadSetPart = op(
  n0,
  _URSP,
  {
    [_ht]: ["PUT", "/sequencestore/{sequenceStoreId}/upload/{uploadId}/part", 200],
    [_end]: ["storage-"],
  },
  () => UploadReadSetPartRequest,
  () => UploadReadSetPartResponse
);

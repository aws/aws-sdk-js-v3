// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACL,
  _ACL_,
  _ACP,
  _B,
  _BR,
  _br,
  _Bu,
  _CA,
  _CM,
  _CMD,
  _Con,
  _CP,
  _CPL,
  _CPom,
  _CT,
  _ct,
  _CTon,
  _d,
  _Deli,
  _DM,
  _DME,
  _DMe,
  _DN,
  _EBO,
  _ET,
  _et,
  _ETnc,
  _FO,
  _fo,
  _G,
  _GBA,
  _GBAO,
  _GBAR,
  _GFC,
  _GOA,
  _GOAO,
  _GOAR,
  _GR,
  _GRACP,
  _GW,
  _GWACP,
  _h,
  _hH,
  _hP,
  _hQ,
  _ID,
  _IL,
  _In,
  _Ini,
  _IRIP,
  _IT,
  _K,
  _KC,
  _KM,
  _km,
  _LAMBR,
  _LB,
  _LBO,
  _LBR,
  _LBRi,
  _LM,
  _LMU,
  _LMUO,
  _LMUR,
  _LMURi,
  _LO,
  _LOO,
  _LOR,
  _LOV,
  _LOVi,
  _LOVO,
  _LOVOi,
  _LOVR,
  _LOVRi,
  _LVR,
  _m,
  _Ma,
  _MB,
  _mb,
  _MK,
  _mk,
  _MU,
  _mu,
  _MUa,
  _MUL,
  _N,
  _NCT,
  _NKM,
  _NM,
  _NUIM,
  _NVIM,
  _O,
  _Obj,
  _OLb,
  _OOA,
  _OV,
  _OVL,
  _P,
  _p,
  _PBA,
  _PBAR,
  _POA,
  _POAO,
  _POAR,
  _RC,
  _RED,
  _RP,
  _RSe,
  _SA,
  _sa,
  _SC,
  _Si,
  _U,
  _UI,
  _UIM,
  _uim,
  _Up,
  _Ve,
  _Ver,
  _VI,
  _vI,
  _VIM,
  _vim,
  _xaa,
  _xaebo,
  _xagfc,
  _xagr,
  _xagra,
  _xagw,
  _xagwa,
  _xaooa,
  _xarc,
  _xarp,
  _xasca,
  _xF,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { Buckets } from "./schemas_22_Bucket";
import { Grants } from "./schemas_30_Bucket";

/* eslint no-var: 0 */

export var AccessControlPolicy = struct(
  n0,
  _ACP,
  0,
  [_G, _O],
  [
    [
      () => Grants,
      {
        [_xN]: _ACL,
      },
    ],
    () => Owner,
  ]
);
export var CommonPrefix = struct(n0, _CP, 0, [_P], [0]);
export var DeleteMarkerEntry = struct(n0, _DME, 0, [_O, _K, _VI, _IL, _LM], [() => Owner, 0, 0, 2, 4]);
export var GetBucketAclOutput = struct(
  n0,
  _GBAO,
  {
    [_xN]: _ACP,
  },
  [_O, _G],
  [
    () => Owner,
    [
      () => Grants,
      {
        [_xN]: _ACL,
      },
    ],
  ]
);
export var GetBucketAclRequest = struct(
  n0,
  _GBAR,
  0,
  [_B, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var GetObjectAclOutput = struct(
  n0,
  _GOAO,
  {
    [_xN]: _ACP,
  },
  [_O, _G, _RC],
  [
    () => Owner,
    [
      () => Grants,
      {
        [_xN]: _ACL,
      },
    ],
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var GetObjectAclRequest = struct(
  n0,
  _GOAR,
  0,
  [_B, _K, _VI, _RP, _EBO],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var Initiator = struct(n0, _In, 0, [_ID, _DN], [0, 0]);
export var ListBucketsOutput = struct(
  n0,
  _LBO,
  {
    [_xN]: _LAMBR,
  },
  [_Bu, _O, _CTon, _P],
  [[() => Buckets, 0], () => Owner, 0, 0]
);
export var ListBucketsRequest = struct(
  n0,
  _LBR,
  0,
  [_MB, _CTon, _P, _BR],
  [
    [
      1,
      {
        [_hQ]: _mb,
      },
    ],
    [
      0,
      {
        [_hQ]: _ct,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _br,
      },
    ],
  ]
);
export var ListMultipartUploadsOutput = struct(
  n0,
  _LMUO,
  {
    [_xN]: _LMUR,
  },
  [_B, _KM, _UIM, _NKM, _P, _Deli, _NUIM, _MUa, _IT, _U, _CPom, _ETnc, _RC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    2,
    [
      () => MultipartUploadList,
      {
        [_xN]: _Up,
        [_xF]: 1,
      },
    ],
    [
      () => CommonPrefixList,
      {
        [_xF]: 1,
      },
    ],
    0,
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var ListMultipartUploadsRequest = struct(
  n0,
  _LMURi,
  0,
  [_B, _Deli, _ETnc, _KM, _MUa, _P, _UIM, _EBO, _RP],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _et,
      },
    ],
    [
      0,
      {
        [_hQ]: _km,
      },
    ],
    [
      1,
      {
        [_hQ]: _mu,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _uim,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
  ]
);
export var ListObjectsOutput = struct(
  n0,
  _LOO,
  {
    [_xN]: _LBRi,
  },
  [_IT, _Ma, _NM, _Con, _N, _P, _Deli, _MK, _CPom, _ETnc, _RC],
  [
    2,
    0,
    0,
    [
      () => ObjectList,
      {
        [_xF]: 1,
      },
    ],
    0,
    0,
    0,
    1,
    [
      () => CommonPrefixList,
      {
        [_xF]: 1,
      },
    ],
    0,
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var ListObjectsRequest = struct(
  n0,
  _LOR,
  0,
  [_B, _Deli, _ETnc, _Ma, _MK, _P, _RP, _EBO, _OOA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _et,
      },
    ],
    [
      0,
      {
        [_hQ]: _m,
      },
    ],
    [
      1,
      {
        [_hQ]: _mk,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      64 | 0,
      {
        [_hH]: _xaooa,
      },
    ],
  ]
);
export var ListObjectsV2Output = struct(
  n0,
  _LOVO,
  {
    [_xN]: _LBRi,
  },
  [_IT, _Con, _N, _P, _Deli, _MK, _CPom, _ETnc, _KC, _CTon, _NCT, _SA, _RC],
  [
    2,
    [
      () => ObjectList,
      {
        [_xF]: 1,
      },
    ],
    0,
    0,
    0,
    1,
    [
      () => CommonPrefixList,
      {
        [_xF]: 1,
      },
    ],
    0,
    1,
    0,
    0,
    0,
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var ListObjectsV2Request = struct(
  n0,
  _LOVR,
  0,
  [_B, _Deli, _ETnc, _MK, _P, _CTon, _FO, _SA, _RP, _EBO, _OOA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _et,
      },
    ],
    [
      1,
      {
        [_hQ]: _mk,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _ct,
      },
    ],
    [
      2,
      {
        [_hQ]: _fo,
      },
    ],
    [
      0,
      {
        [_hQ]: _sa,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      64 | 0,
      {
        [_hH]: _xaooa,
      },
    ],
  ]
);
export var ListObjectVersionsOutput = struct(
  n0,
  _LOVOi,
  {
    [_xN]: _LVR,
  },
  [_IT, _KM, _VIM, _NKM, _NVIM, _Ve, _DMe, _N, _P, _Deli, _MK, _CPom, _ETnc, _RC],
  [
    2,
    0,
    0,
    0,
    0,
    [
      () => ObjectVersionList,
      {
        [_xN]: _Ver,
        [_xF]: 1,
      },
    ],
    [
      () => DeleteMarkers,
      {
        [_xN]: _DM,
        [_xF]: 1,
      },
    ],
    0,
    0,
    0,
    1,
    [
      () => CommonPrefixList,
      {
        [_xF]: 1,
      },
    ],
    0,
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var ListObjectVersionsRequest = struct(
  n0,
  _LOVRi,
  0,
  [_B, _Deli, _ETnc, _KM, _MK, _P, _VIM, _EBO, _RP, _OOA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _et,
      },
    ],
    [
      0,
      {
        [_hQ]: _km,
      },
    ],
    [
      1,
      {
        [_hQ]: _mk,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _vim,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      64 | 0,
      {
        [_hH]: _xaooa,
      },
    ],
  ]
);
export var MultipartUpload = struct(
  n0,
  _MU,
  0,
  [_UI, _K, _Ini, _SC, _O, _In, _CA, _CT],
  [0, 0, 4, 0, () => Owner, () => Initiator, 0, 0]
);
export var _Object = struct(
  n0,
  _Obj,
  0,
  [_K, _LM, _ET, _CA, _CT, _Si, _SC, _O, _RSe],
  [
    0,
    4,
    0,
    [
      64 | 0,
      {
        [_xF]: 1,
      },
    ],
    0,
    1,
    0,
    () => Owner,
    () => RestoreStatus,
  ]
);
export var ObjectVersion = struct(
  n0,
  _OV,
  0,
  [_ET, _CA, _CT, _Si, _SC, _K, _VI, _IL, _LM, _O, _RSe],
  [
    0,
    [
      64 | 0,
      {
        [_xF]: 1,
      },
    ],
    0,
    1,
    0,
    0,
    0,
    2,
    4,
    () => Owner,
    () => RestoreStatus,
  ]
);
export var Owner = struct(n0, _O, 0, [_DN, _ID], [0, 0]);
export var PutBucketAclRequest = struct(
  n0,
  _PBAR,
  0,
  [_ACL_, _ACP, _B, _CMD, _CA, _GFC, _GR, _GRACP, _GW, _GWACP, _EBO],
  [
    [
      0,
      {
        [_hH]: _xaa,
      },
    ],
    [
      () => AccessControlPolicy,
      {
        [_xN]: _ACP,
        [_hP]: 1,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _CM,
      },
    ],
    [
      0,
      {
        [_hH]: _xasca,
      },
    ],
    [
      0,
      {
        [_hH]: _xagfc,
      },
    ],
    [
      0,
      {
        [_hH]: _xagr,
      },
    ],
    [
      0,
      {
        [_hH]: _xagra,
      },
    ],
    [
      0,
      {
        [_hH]: _xagw,
      },
    ],
    [
      0,
      {
        [_hH]: _xagwa,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var PutObjectAclOutput = struct(
  n0,
  _POAO,
  0,
  [_RC],
  [
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var PutObjectAclRequest = struct(
  n0,
  _POAR,
  0,
  [_ACL_, _ACP, _B, _CMD, _CA, _GFC, _GR, _GRACP, _GW, _GWACP, _K, _RP, _VI, _EBO],
  [
    [
      0,
      {
        [_hH]: _xaa,
      },
    ],
    [
      () => AccessControlPolicy,
      {
        [_xN]: _ACP,
        [_hP]: 1,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _CM,
      },
    ],
    [
      0,
      {
        [_hH]: _xasca,
      },
    ],
    [
      0,
      {
        [_hH]: _xagfc,
      },
    ],
    [
      0,
      {
        [_hH]: _xagr,
      },
    ],
    [
      0,
      {
        [_hH]: _xagra,
      },
    ],
    [
      0,
      {
        [_hH]: _xagw,
      },
    ],
    [
      0,
      {
        [_hH]: _xagwa,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var RestoreStatus = struct(n0, _RSe, 0, [_IRIP, _RED], [2, 4]);
export var ChecksumAlgorithmList = 64 | 0;

export var CommonPrefixList = list(n0, _CPL, 0, () => CommonPrefix);
export var DeleteMarkers = list(n0, _DMe, 0, () => DeleteMarkerEntry);
export var MultipartUploadList = list(n0, _MUL, 0, () => MultipartUpload);
export var ObjectList = list(n0, _OLb, 0, [() => _Object, 0]);
export var ObjectVersionList = list(n0, _OVL, 0, [() => ObjectVersion, 0]);
export var OptionalObjectAttributesList = 64 | 0;

export var GetBucketAcl = op(
  n0,
  _GBA,
  {
    [_h]: ["GET", "/?acl", 200],
  },
  () => GetBucketAclRequest,
  () => GetBucketAclOutput
);
export var GetObjectAcl = op(
  n0,
  _GOA,
  {
    [_h]: ["GET", "/{Key+}?acl", 200],
  },
  () => GetObjectAclRequest,
  () => GetObjectAclOutput
);
export var ListBuckets = op(
  n0,
  _LB,
  {
    [_h]: ["GET", "/?x-id=ListBuckets", 200],
  },
  () => ListBucketsRequest,
  () => ListBucketsOutput
);
export var ListMultipartUploads = op(
  n0,
  _LMU,
  {
    [_h]: ["GET", "/?uploads", 200],
  },
  () => ListMultipartUploadsRequest,
  () => ListMultipartUploadsOutput
);
export var ListObjects = op(
  n0,
  _LO,
  {
    [_h]: ["GET", "/", 200],
  },
  () => ListObjectsRequest,
  () => ListObjectsOutput
);
export var ListObjectsV2 = op(
  n0,
  _LOV,
  {
    [_h]: ["GET", "/?list-type=2", 200],
  },
  () => ListObjectsV2Request,
  () => ListObjectsV2Output
);
export var ListObjectVersions = op(
  n0,
  _LOVi,
  {
    [_h]: ["GET", "/?versions", 200],
  },
  () => ListObjectVersionsRequest,
  () => ListObjectVersionsOutput
);
export var PutBucketAcl = op(
  n0,
  _PBA,
  {
    [_h]: ["PUT", "/?acl", 200],
  },
  () => PutBucketAclRequest,
  () => Unit
);
export var PutObjectAcl = op(
  n0,
  _POA,
  {
    [_h]: ["PUT", "/{Key+}?acl", 200],
  },
  () => PutObjectAclRequest,
  () => PutObjectAclOutput
);

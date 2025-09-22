// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessPointAlreadyExists as __AccessPointAlreadyExists,
  AccessPointLimitExceeded as __AccessPointLimitExceeded,
  FileSystemAlreadyExists as __FileSystemAlreadyExists,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _AP,
  _APA,
  _APAE,
  _APD,
  _APDc,
  _API,
  _APLE,
  _AZI,
  _AZN,
  _B,
  _c,
  _CAP,
  _CAPR,
  _CFS,
  _CFSR,
  _CI,
  _CT,
  _CTR,
  _CTr,
  _CTre,
  _CTrea,
  _DAPe,
  _DAPRe,
  _DAPRes,
  _DFSe,
  _DFSRe,
  _DFSRes,
  _DTe,
  _DTes,
  _DTR,
  _DTRe,
  _DTRes,
  _E,
  _e,
  _EC,
  _FS,
  _FSA,
  _FSAE,
  _FSD,
  _FSDi,
  _FSI,
  _FSP,
  _FSS,
  _G,
  _h,
  _hE,
  _hQ,
  _K,
  _KKI,
  _LCS,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _Ma,
  _MI,
  _MR,
  _N,
  _NM,
  _NOMT,
  _NT,
  _OG,
  _OI,
  _OU,
  _P,
  _Pa,
  _PM,
  _PTIM,
  _PU,
  _RD,
  _RI,
  _SGe,
  _SIB,
  _T,
  _Ta,
  _TE,
  _Ti,
  _TK,
  _tK,
  _TM,
  _TR,
  _TRR,
  _U,
  _UFS,
  _UFSR,
  _UR,
  _URR,
  _V,
  _VIA,
  _VIIA,
  _VIS,
  n0,
  Unit,
} from "./schemas_0";
import { FileSystemProtectionDescription } from "./schemas_15_File";

/* eslint no-var: 0 */

export var AccessPointAlreadyExists = error(
  n0,
  _APAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_EC, _M, _API],
  [0, 0, 0],

  __AccessPointAlreadyExists
);
export var AccessPointDescription = struct(
  n0,
  _APD,
  0,
  [_CT, _N, _T, _API, _APA, _FSI, _PU, _RD, _OI, _LCS],
  [0, 0, () => Tags, 0, 0, 0, () => PosixUser, () => RootDirectory, 0, 0]
);
export var AccessPointLimitExceeded = error(
  n0,
  _APLE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_EC, _M],
  [0, 0],

  __AccessPointLimitExceeded
);
export var CreateAccessPointRequest = struct(
  n0,
  _CAPR,
  0,
  [_CT, _T, _FSI, _PU, _RD],
  [[0, 4], () => Tags, 0, () => PosixUser, () => RootDirectory]
);
export var CreateFileSystemRequest = struct(
  n0,
  _CFSR,
  0,
  [_CTr, _PM, _E, _KKI, _TM, _PTIM, _AZN, _B, _T],
  [[0, 4], 0, 2, 0, 0, 1, 0, 2, () => Tags]
);
export var CreateTagsRequest = struct(n0, _CTR, 0, [_FSI, _T], [[0, 1], () => Tags]);
export var CreationInfo = struct(n0, _CI, 0, [_OU, _OG, _P], [1, 1, 0]);
export var DeleteTagsRequest = struct(n0, _DTR, 0, [_FSI, _TK], [[0, 1], 64 | 0]);
export var DescribeAccessPointsRequest = struct(
  n0,
  _DAPRe,
  0,
  [_MR, _NT, _API, _FSI],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      0,
      {
        [_hQ]: _API,
      },
    ],
    [
      0,
      {
        [_hQ]: _FSI,
      },
    ],
  ]
);
export var DescribeAccessPointsResponse = struct(n0, _DAPRes, 0, [_AP, _NT], [() => AccessPointDescriptions, 0]);
export var DescribeFileSystemsRequest = struct(
  n0,
  _DFSRe,
  0,
  [_MI, _Ma, _CTr, _FSI],
  [
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      0,
      {
        [_hQ]: _CTr,
      },
    ],
    [
      0,
      {
        [_hQ]: _FSI,
      },
    ],
  ]
);
export var DescribeFileSystemsResponse = struct(n0, _DFSRes, 0, [_Ma, _FS, _NM], [0, () => FileSystemDescriptions, 0]);
export var DescribeTagsRequest = struct(
  n0,
  _DTRe,
  0,
  [_MI, _Ma, _FSI],
  [
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [0, 1],
  ]
);
export var DescribeTagsResponse = struct(n0, _DTRes, 0, [_Ma, _T, _NM], [0, () => Tags, 0]);
export var FileSystemAlreadyExists = error(
  n0,
  _FSAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_EC, _M, _FSI],
  [0, 0, 0],

  __FileSystemAlreadyExists
);
export var FileSystemDescription = struct(
  n0,
  _FSD,
  0,
  [_OI, _CTr, _FSI, _FSA, _CTre, _LCS, _N, _NOMT, _SIB, _PM, _E, _KKI, _TM, _PTIM, _AZN, _AZI, _T, _FSP],
  [0, 0, 0, 0, 4, 0, 0, 1, () => FileSystemSize, 0, 2, 0, 0, 1, 0, 0, () => Tags, () => FileSystemProtectionDescription]
);
export var FileSystemSize = struct(n0, _FSS, 0, [_V, _Ti, _VIIA, _VIS, _VIA], [1, 4, 1, 1, 1]);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_RI, _MR, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T, _NT], [() => Tags, 0]);
export var PosixUser = struct(n0, _PU, 0, [_U, _G, _SGe], [1, 1, 64 | 1]);
export var RootDirectory = struct(n0, _RD, 0, [_Pa, _CI], [0, () => CreationInfo]);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RI, _T], [[0, 1], () => Tags]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_EC, _M],
  [0, 0],

  __ThrottlingException
);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RI, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UpdateFileSystemRequest = struct(n0, _UFSR, 0, [_FSI, _TM, _PTIM], [[0, 1], 0, 1]);
export var AccessPointDescriptions = list(n0, _APDc, 0, () => AccessPointDescription);
export var FileSystemDescriptions = list(n0, _FSDi, 0, () => FileSystemDescription);
export var SecondaryGids = 64 | 1;

export var TagKeys = 64 | 0;

export var Tags = list(n0, _T, 0, () => Tag);
export var CreateAccessPoint = op(
  n0,
  _CAP,
  {
    [_h]: ["POST", "/2015-02-01/access-points", 200],
  },
  () => CreateAccessPointRequest,
  () => AccessPointDescription
);
export var CreateFileSystem = op(
  n0,
  _CFS,
  {
    [_h]: ["POST", "/2015-02-01/file-systems", 201],
  },
  () => CreateFileSystemRequest,
  () => FileSystemDescription
);
export var CreateTags = op(
  n0,
  _CTrea,
  {
    [_h]: ["POST", "/2015-02-01/create-tags/{FileSystemId}", 204],
  },
  () => CreateTagsRequest,
  () => Unit
);
export var DeleteTags = op(
  n0,
  _DTe,
  {
    [_h]: ["POST", "/2015-02-01/delete-tags/{FileSystemId}", 204],
  },
  () => DeleteTagsRequest,
  () => Unit
);
export var DescribeAccessPoints = op(
  n0,
  _DAPe,
  {
    [_h]: ["GET", "/2015-02-01/access-points", 200],
  },
  () => DescribeAccessPointsRequest,
  () => DescribeAccessPointsResponse
);
export var DescribeFileSystems = op(
  n0,
  _DFSe,
  {
    [_h]: ["GET", "/2015-02-01/file-systems", 200],
  },
  () => DescribeFileSystemsRequest,
  () => DescribeFileSystemsResponse
);
export var DescribeTags = op(
  n0,
  _DTes,
  {
    [_h]: ["GET", "/2015-02-01/tags/{FileSystemId}", 200],
  },
  () => DescribeTagsRequest,
  () => DescribeTagsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/2015-02-01/resource-tags/{ResourceId}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/2015-02-01/resource-tags/{ResourceId}", 200],
  },
  () => TagResourceRequest,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/2015-02-01/resource-tags/{ResourceId}", 200],
  },
  () => UntagResourceRequest,
  () => Unit
);
export var UpdateFileSystem = op(
  n0,
  _UFS,
  {
    [_h]: ["PUT", "/2015-02-01/file-systems/{FileSystemId}", 202],
  },
  () => UpdateFileSystemRequest,
  () => FileSystemDescription
);

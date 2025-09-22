// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aA,
  _AEC,
  _AECR,
  _AECRs,
  _CR,
  _CRR,
  _CRRr,
  _cT,
  _d,
  _de,
  _DEC,
  _DECR,
  _DECRi,
  _dN,
  _dO,
  _do,
  _DR,
  _DRe,
  _DRR,
  _DRRe,
  _DRRes,
  _DRResc,
  _eC,
  _ec,
  _eCN,
  _eCx,
  _hQ,
  _ht,
  _n,
  _pF,
  _r,
  _RD,
  _RECI,
  _RECIL,
  _rN,
  _st,
  _t,
  _u,
  _UR,
  _URI,
  _URIL,
  _URL,
  _URp,
  _URRp,
  _URRpd,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_7_Create";

/* eslint no-var: 0 */

export var AssociateExternalConnectionRequest = struct(
  n0,
  _AECR,
  0,
  [_d, _dO, _r, _eC],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    [
      0,
      {
        [_hQ]: _ec,
      },
    ],
  ]
);
export var AssociateExternalConnectionResult = struct(n0, _AECRs, 0, [_r], [() => RepositoryDescription]);
export var CreateRepositoryRequest = struct(
  n0,
  _CRR,
  0,
  [_d, _dO, _r, _de, _u, _t],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    0,
    () => UpstreamRepositoryList,
    () => TagList,
  ]
);
export var CreateRepositoryResult = struct(n0, _CRRr, 0, [_r], [() => RepositoryDescription]);
export var DeleteRepositoryRequest = struct(
  n0,
  _DRR,
  0,
  [_d, _dO, _r],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
  ]
);
export var DeleteRepositoryResult = struct(n0, _DRRe, 0, [_r], [() => RepositoryDescription]);
export var DescribeRepositoryRequest = struct(
  n0,
  _DRRes,
  0,
  [_d, _dO, _r],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
  ]
);
export var DescribeRepositoryResult = struct(n0, _DRResc, 0, [_r], [() => RepositoryDescription]);
export var DisassociateExternalConnectionRequest = struct(
  n0,
  _DECR,
  0,
  [_d, _dO, _r, _eC],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    [
      0,
      {
        [_hQ]: _ec,
      },
    ],
  ]
);
export var DisassociateExternalConnectionResult = struct(n0, _DECRi, 0, [_r], [() => RepositoryDescription]);
export var RepositoryDescription = struct(
  n0,
  _RD,
  0,
  [_n, _aA, _dN, _dO, _a, _de, _u, _eCx, _cT],
  [0, 0, 0, 0, 0, 0, () => UpstreamRepositoryInfoList, () => RepositoryExternalConnectionInfoList, 4]
);
export var RepositoryExternalConnectionInfo = struct(n0, _RECI, 0, [_eCN, _pF, _st], [0, 0, 0]);
export var UpdateRepositoryRequest = struct(
  n0,
  _URRp,
  0,
  [_d, _dO, _r, _de, _u],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    0,
    () => UpstreamRepositoryList,
  ]
);
export var UpdateRepositoryResult = struct(n0, _URRpd, 0, [_r], [() => RepositoryDescription]);
export var UpstreamRepository = struct(n0, _UR, 0, [_rN], [0]);
export var UpstreamRepositoryInfo = struct(n0, _URI, 0, [_rN], [0]);
export var RepositoryExternalConnectionInfoList = list(n0, _RECIL, 0, () => RepositoryExternalConnectionInfo);
export var UpstreamRepositoryInfoList = list(n0, _URIL, 0, () => UpstreamRepositoryInfo);
export var UpstreamRepositoryList = list(n0, _URL, 0, () => UpstreamRepository);
export var AssociateExternalConnection = op(
  n0,
  _AEC,
  {
    [_ht]: ["POST", "/v1/repository/external-connection", 200],
  },
  () => AssociateExternalConnectionRequest,
  () => AssociateExternalConnectionResult
);
export var CreateRepository = op(
  n0,
  _CR,
  {
    [_ht]: ["POST", "/v1/repository", 200],
  },
  () => CreateRepositoryRequest,
  () => CreateRepositoryResult
);
export var DeleteRepository = op(
  n0,
  _DR,
  {
    [_ht]: ["DELETE", "/v1/repository", 200],
  },
  () => DeleteRepositoryRequest,
  () => DeleteRepositoryResult
);
export var DescribeRepository = op(
  n0,
  _DRe,
  {
    [_ht]: ["GET", "/v1/repository", 200],
  },
  () => DescribeRepositoryRequest,
  () => DescribeRepositoryResult
);
export var DisassociateExternalConnection = op(
  n0,
  _DEC,
  {
    [_ht]: ["DELETE", "/v1/repository/external-connection", 200],
  },
  () => DisassociateExternalConnectionRequest,
  () => DisassociateExternalConnectionResult
);
export var UpdateRepository = op(
  n0,
  _URp,
  {
    [_ht]: ["PUT", "/v1/repository", 200],
  },
  () => UpdateRepositoryRequest,
  () => UpdateRepositoryResult
);

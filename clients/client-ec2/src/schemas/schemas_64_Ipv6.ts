// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aRs,
  _ARss,
  _Ci,
  _De,
  _de,
  _DIPes,
  _DIPRescr,
  _DIPRescri,
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _GAIPC,
  _GAIPCR,
  _GAIPCRe,
  _ICA,
  _ICAp,
  _ICAS,
  _iCAS,
  _ICp,
  _iCp,
  _IPIL,
  _IPpvo,
  _IPpvoo,
  _iPSp,
  _IPSpv,
  _it,
  _MR,
  _NTe,
  _nTe,
  _PCB,
  _pCB,
  _PCBo,
  _PCBS,
  _pCBS,
  _PIo,
  _pIo,
  _PIoo,
  _T,
  _tS,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeIpv6PoolsRequest = struct(
  n0,
  _DIPRescr,
  0,
  [_PIoo, _NTe, _MR, _DR, _Fi],
  [
    [
      () => Ipv6PoolIdList,
      {
        [_xN]: _PIo,
      },
    ],
    0,
    1,
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeIpv6PoolsResult = struct(
  n0,
  _DIPRescri,
  0,
  [_IPpvoo, _NTe],
  [
    [
      () => Ipv6PoolSet,
      {
        [_eQN]: `Ipv6PoolSet`,
        [_xN]: _iPSp,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var GetAssociatedIpv6PoolCidrsRequest = struct(n0, _GAIPCR, 0, [_PIo, _NTe, _MR, _DR], [0, 0, 1, 2]);
export var GetAssociatedIpv6PoolCidrsResult = struct(
  n0,
  _GAIPCRe,
  0,
  [_ICA, _NTe],
  [
    [
      () => Ipv6CidrAssociationSet,
      {
        [_eQN]: `Ipv6CidrAssociationSet`,
        [_xN]: _iCAS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var Ipv6CidrAssociation = struct(
  n0,
  _ICAp,
  0,
  [_ICp, _ARss],
  [
    [
      0,
      {
        [_eQN]: `Ipv6Cidr`,
        [_xN]: _iCp,
      },
    ],
    [
      0,
      {
        [_eQN]: `AssociatedResource`,
        [_xN]: _aRs,
      },
    ],
  ]
);
export var Ipv6Pool = struct(
  n0,
  _IPpvo,
  0,
  [_PIo, _De, _PCB, _T],
  [
    [
      0,
      {
        [_eQN]: `PoolId`,
        [_xN]: _pIo,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      () => PoolCidrBlocksSet,
      {
        [_eQN]: `PoolCidrBlockSet`,
        [_xN]: _pCBS,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var PoolCidrBlock = struct(
  n0,
  _PCBo,
  0,
  [_Ci],
  [
    [
      0,
      {
        [_eQN]: `PoolCidrBlock`,
        [_xN]: _pCB,
      },
    ],
  ]
);
export var Ipv6CidrAssociationSet = list(n0, _ICAS, 0, [
  () => Ipv6CidrAssociation,
  {
    [_xN]: _it,
  },
]);
export var Ipv6PoolIdList = list(n0, _IPIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var Ipv6PoolSet = list(n0, _IPSpv, 0, [
  () => Ipv6Pool,
  {
    [_xN]: _it,
  },
]);
export var PoolCidrBlocksSet = list(n0, _PCBS, 0, [
  () => PoolCidrBlock,
  {
    [_xN]: _it,
  },
]);
export var DescribeIpv6Pools = op(
  n0,
  _DIPes,
  0,
  () => DescribeIpv6PoolsRequest,
  () => DescribeIpv6PoolsResult
);
export var GetAssociatedIpv6PoolCidrs = op(
  n0,
  _GAIPC,
  0,
  () => GetAssociatedIpv6PoolCidrsRequest,
  () => GetAssociatedIpv6PoolCidrsResult
);

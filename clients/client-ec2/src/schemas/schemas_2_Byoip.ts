// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aA,
  _AAS,
  _AAs,
  _aAS,
  _AAsn,
  _ABC,
  _ABCR,
  _ABCRd,
  _AIB,
  _AIBR,
  _AIBRs,
  _as,
  _Asn,
  _BC,
  _bC,
  _BCS,
  _bCS,
  _BCy,
  _CAC,
  _Ci,
  _ci,
  _DBC,
  _DBCe,
  _DBCR,
  _DBCRe,
  _DBCRes,
  _DBCResc,
  _De,
  _de,
  _DIBi,
  _DIBRi,
  _DIBRis,
  _DR,
  _eQN,
  _IPI,
  _IPO,
  _it,
  _MBCTI,
  _MBCTIR,
  _MBCTIRo,
  _Me,
  _MR,
  _MRu,
  _NBG,
  _nBG,
  _NTe,
  _nTe,
  _PAu,
  _PBC,
  _PBCR,
  _PBCRr,
  _PTS,
  _PTSo,
  _Si,
  _SMt,
  _sMt,
  _St,
  _st,
  _WBC,
  _WBCR,
  _WBCRi,
  _xN,
  n0,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdvertiseByoipCidrRequest = struct(n0, _ABCR, 0, [_Ci, _Asn, _DR, _NBG], [0, 0, 2, 0]);
export var AdvertiseByoipCidrResult = struct(
  n0,
  _ABCRd,
  0,
  [_BC],
  [
    [
      () => ByoipCidr,
      {
        [_eQN]: `ByoipCidr`,
        [_xN]: _bC,
      },
    ],
  ]
);
export var AsnAssociation = struct(
  n0,
  _AAs,
  0,
  [_Asn, _Ci, _SMt, _St],
  [
    [
      0,
      {
        [_eQN]: `Asn`,
        [_xN]: _as,
      },
    ],
    [
      0,
      {
        [_eQN]: `Cidr`,
        [_xN]: _ci,
      },
    ],
    [
      0,
      {
        [_eQN]: `StatusMessage`,
        [_xN]: _sMt,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var AssociateIpamByoasnRequest = struct(n0, _AIBR, 0, [_DR, _Asn, _Ci], [2, 0, 0]);
export var AssociateIpamByoasnResult = struct(
  n0,
  _AIBRs,
  0,
  [_AAs],
  [
    [
      () => AsnAssociation,
      {
        [_eQN]: `AsnAssociation`,
        [_xN]: _aA,
      },
    ],
  ]
);
export var ByoipCidr = struct(
  n0,
  _BC,
  0,
  [_Ci, _De, _AAsn, _SMt, _St, _NBG],
  [
    [
      0,
      {
        [_eQN]: `Cidr`,
        [_xN]: _ci,
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
      () => AsnAssociationSet,
      {
        [_eQN]: `AsnAssociationSet`,
        [_xN]: _aAS,
      },
    ],
    [
      0,
      {
        [_eQN]: `StatusMessage`,
        [_xN]: _sMt,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkBorderGroup`,
        [_xN]: _nBG,
      },
    ],
  ]
);
export var CidrAuthorizationContext = struct(n0, _CAC, 0, [_Me, _Si], [0, 0]);
export var DeprovisionByoipCidrRequest = struct(n0, _DBCR, 0, [_Ci, _DR], [0, 2]);
export var DeprovisionByoipCidrResult = struct(
  n0,
  _DBCRe,
  0,
  [_BC],
  [
    [
      () => ByoipCidr,
      {
        [_eQN]: `ByoipCidr`,
        [_xN]: _bC,
      },
    ],
  ]
);
export var DescribeByoipCidrsRequest = struct(n0, _DBCRes, 0, [_DR, _MR, _NTe], [2, 1, 0]);
export var DescribeByoipCidrsResult = struct(
  n0,
  _DBCResc,
  0,
  [_BCy, _NTe],
  [
    [
      () => ByoipCidrSet,
      {
        [_eQN]: `ByoipCidrSet`,
        [_xN]: _bCS,
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
export var DisassociateIpamByoasnRequest = struct(n0, _DIBRi, 0, [_DR, _Asn, _Ci], [2, 0, 0]);
export var DisassociateIpamByoasnResult = struct(
  n0,
  _DIBRis,
  0,
  [_AAs],
  [
    [
      () => AsnAssociation,
      {
        [_eQN]: `AsnAssociation`,
        [_xN]: _aA,
      },
    ],
  ]
);
export var MoveByoipCidrToIpamRequest = struct(n0, _MBCTIR, 0, [_DR, _Ci, _IPI, _IPO], [2, 0, 0, 0]);
export var MoveByoipCidrToIpamResult = struct(
  n0,
  _MBCTIRo,
  0,
  [_BC],
  [
    [
      () => ByoipCidr,
      {
        [_eQN]: `ByoipCidr`,
        [_xN]: _bC,
      },
    ],
  ]
);
export var ProvisionByoipCidrRequest = struct(
  n0,
  _PBCR,
  0,
  [_Ci, _CAC, _PAu, _De, _DR, _PTS, _MRu, _NBG],
  [
    0,
    () => CidrAuthorizationContext,
    2,
    0,
    2,
    [
      () => TagSpecificationList,
      {
        [_xN]: _PTSo,
      },
    ],
    2,
    0,
  ]
);
export var ProvisionByoipCidrResult = struct(
  n0,
  _PBCRr,
  0,
  [_BC],
  [
    [
      () => ByoipCidr,
      {
        [_eQN]: `ByoipCidr`,
        [_xN]: _bC,
      },
    ],
  ]
);
export var WithdrawByoipCidrRequest = struct(n0, _WBCR, 0, [_Ci, _DR], [0, 2]);
export var WithdrawByoipCidrResult = struct(
  n0,
  _WBCRi,
  0,
  [_BC],
  [
    [
      () => ByoipCidr,
      {
        [_eQN]: `ByoipCidr`,
        [_xN]: _bC,
      },
    ],
  ]
);
export var AsnAssociationSet = list(n0, _AAS, 0, [
  () => AsnAssociation,
  {
    [_xN]: _it,
  },
]);
export var ByoipCidrSet = list(n0, _BCS, 0, [
  () => ByoipCidr,
  {
    [_xN]: _it,
  },
]);
export var AdvertiseByoipCidr = op(
  n0,
  _ABC,
  0,
  () => AdvertiseByoipCidrRequest,
  () => AdvertiseByoipCidrResult
);
export var AssociateIpamByoasn = op(
  n0,
  _AIB,
  0,
  () => AssociateIpamByoasnRequest,
  () => AssociateIpamByoasnResult
);
export var DeprovisionByoipCidr = op(
  n0,
  _DBC,
  0,
  () => DeprovisionByoipCidrRequest,
  () => DeprovisionByoipCidrResult
);
export var DescribeByoipCidrs = op(
  n0,
  _DBCe,
  0,
  () => DescribeByoipCidrsRequest,
  () => DescribeByoipCidrsResult
);
export var DisassociateIpamByoasn = op(
  n0,
  _DIBi,
  0,
  () => DisassociateIpamByoasnRequest,
  () => DisassociateIpamByoasnResult
);
export var MoveByoipCidrToIpam = op(
  n0,
  _MBCTI,
  0,
  () => MoveByoipCidrToIpamRequest,
  () => MoveByoipCidrToIpamResult
);
export var ProvisionByoipCidr = op(
  n0,
  _PBC,
  0,
  () => ProvisionByoipCidrRequest,
  () => ProvisionByoipCidrResult
);
export var WithdrawByoipCidr = op(
  n0,
  _WBC,
  0,
  () => WithdrawByoipCidrRequest,
  () => WithdrawByoipCidrResult
);

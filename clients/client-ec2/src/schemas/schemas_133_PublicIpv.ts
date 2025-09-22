// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _aAC,
  _AACv,
  _AAl,
  _AAR,
  _AARl,
  _ACd,
  _aCd,
  _aI,
  _AIl,
  _AIs,
  _aIs,
  _ARTRs,
  _ARTRss,
  _ARTs,
  _AS,
  _aS,
  _CI,
  _Ci,
  _cI,
  _COI,
  _cOI,
  _COIP,
  _cOIP,
  _CPIP,
  _CPIPR,
  _CPIPRr,
  _DAe,
  _DASe,
  _dASe,
  _De,
  _de,
  _Do,
  _do,
  _DPIP,
  _DPIPC,
  _DPIPCR,
  _DPIPCRe,
  _DPIPe,
  _DPIPR,
  _DPIPRe,
  _DPIPRes,
  _DPIPResc,
  _DR,
  _dR,
  _eQN,
  _FAi,
  _fAi,
  _Fi,
  _Fil,
  _GI,
  _IPI,
  _it,
  _LAa,
  _lAa,
  _MR,
  _NBG,
  _nBG,
  _NL,
  _NTe,
  _nTe,
  _PAR,
  _pAR,
  _PARo,
  _pARS,
  _PI,
  _pI,
  _PIo,
  _pIo,
  _PIoo,
  _PIP,
  _pIP,
  _PIPISL,
  _PIPR,
  _PIPRS,
  _PIPS,
  _pIPS,
  _PIPu,
  _PPIPC,
  _PPIPCR,
  _PPIPCRr,
  _RTI,
  _rTI,
  _RV,
  _rV,
  _SIu,
  _sIu,
  _T,
  _TAAC,
  _tAAC,
  _TACo,
  _tACo,
  _TS,
  _tS,
  _TSa,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";
import { RouteTableAssociationState } from "./schemas_238_Route";

/* eslint no-var: 0 */

export var AllocateAddressRequest = struct(
  n0,
  _AAR,
  0,
  [_Do, _A, _PIP, _NBG, _COIP, _TS, _IPI, _DR],
  [
    0,
    0,
    0,
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var AllocateAddressResult = struct(
  n0,
  _AARl,
  0,
  [_AIl, _PIP, _NBG, _Do, _COI, _COIP, _CI, _PI],
  [
    [
      0,
      {
        [_eQN]: `AllocationId`,
        [_xN]: _aI,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicIpv4Pool`,
        [_xN]: _pIP,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkBorderGroup`,
        [_xN]: _nBG,
      },
    ],
    [
      0,
      {
        [_eQN]: `Domain`,
        [_xN]: _do,
      },
    ],
    [
      0,
      {
        [_eQN]: `CustomerOwnedIp`,
        [_xN]: _cOI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CustomerOwnedIpv4Pool`,
        [_xN]: _cOIP,
      },
    ],
    [
      0,
      {
        [_eQN]: `CarrierIp`,
        [_xN]: _cI,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicIp`,
        [_xN]: _pI,
      },
    ],
  ]
);
export var AssociateRouteTableRequest = struct(
  n0,
  _ARTRs,
  0,
  [_GI, _PIP, _DR, _SIu, _RTI],
  [
    0,
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
    [
      0,
      {
        [_eQN]: `RouteTableId`,
        [_xN]: _rTI,
      },
    ],
  ]
);
export var AssociateRouteTableResult = struct(
  n0,
  _ARTRss,
  0,
  [_AIs, _AS],
  [
    [
      0,
      {
        [_eQN]: `AssociationId`,
        [_xN]: _aIs,
      },
    ],
    [
      () => RouteTableAssociationState,
      {
        [_eQN]: `AssociationState`,
        [_xN]: _aS,
      },
    ],
  ]
);
export var CreatePublicIpv4PoolRequest = struct(
  n0,
  _CPIPR,
  0,
  [_DR, _TS, _NBG],
  [
    2,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    0,
  ]
);
export var CreatePublicIpv4PoolResult = struct(
  n0,
  _CPIPRr,
  0,
  [_PIo],
  [
    [
      0,
      {
        [_eQN]: `PoolId`,
        [_xN]: _pIo,
      },
    ],
  ]
);
export var DeletePublicIpv4PoolRequest = struct(n0, _DPIPR, 0, [_DR, _PIo, _NBG], [2, 0, 0]);
export var DeletePublicIpv4PoolResult = struct(
  n0,
  _DPIPRe,
  0,
  [_RV],
  [
    [
      2,
      {
        [_eQN]: `ReturnValue`,
        [_xN]: _rV,
      },
    ],
  ]
);
export var DeprovisionPublicIpv4PoolCidrRequest = struct(n0, _DPIPCR, 0, [_DR, _PIo, _Ci], [2, 0, 0]);
export var DeprovisionPublicIpv4PoolCidrResult = struct(
  n0,
  _DPIPCRe,
  0,
  [_PIo, _DAe],
  [
    [
      0,
      {
        [_eQN]: `PoolId`,
        [_xN]: _pIo,
      },
    ],
    [
      () => DeprovisionedAddressSet,
      {
        [_eQN]: `DeprovisionedAddressSet`,
        [_xN]: _dASe,
      },
    ],
  ]
);
export var DescribePublicIpv4PoolsRequest = struct(
  n0,
  _DPIPRes,
  0,
  [_PIoo, _NTe, _MR, _Fi],
  [
    [
      () => PublicIpv4PoolIdStringList,
      {
        [_xN]: _PIo,
      },
    ],
    0,
    1,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribePublicIpv4PoolsResult = struct(
  n0,
  _DPIPResc,
  0,
  [_PIPu, _NTe],
  [
    [
      () => PublicIpv4PoolSet,
      {
        [_eQN]: `PublicIpv4PoolSet`,
        [_xN]: _pIPS,
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
export var ProvisionPublicIpv4PoolCidrRequest = struct(n0, _PPIPCR, 0, [_DR, _IPI, _PIo, _NL, _NBG], [2, 0, 0, 1, 0]);
export var ProvisionPublicIpv4PoolCidrResult = struct(
  n0,
  _PPIPCRr,
  0,
  [_PIo, _PAR],
  [
    [
      0,
      {
        [_eQN]: `PoolId`,
        [_xN]: _pIo,
      },
    ],
    [
      () => PublicIpv4PoolRange,
      {
        [_eQN]: `PoolAddressRange`,
        [_xN]: _pAR,
      },
    ],
  ]
);
export var PublicIpv4Pool = struct(
  n0,
  _PIP,
  0,
  [_PIo, _De, _PARo, _TACo, _TAAC, _NBG, _T],
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
      () => PublicIpv4PoolRangeSet,
      {
        [_eQN]: `PoolAddressRangeSet`,
        [_xN]: _pARS,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalAddressCount`,
        [_xN]: _tACo,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalAvailableAddressCount`,
        [_xN]: _tAAC,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkBorderGroup`,
        [_xN]: _nBG,
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
export var PublicIpv4PoolRange = struct(
  n0,
  _PIPR,
  0,
  [_FAi, _LAa, _ACd, _AACv],
  [
    [
      0,
      {
        [_eQN]: `FirstAddress`,
        [_xN]: _fAi,
      },
    ],
    [
      0,
      {
        [_eQN]: `LastAddress`,
        [_xN]: _lAa,
      },
    ],
    [
      1,
      {
        [_eQN]: `AddressCount`,
        [_xN]: _aCd,
      },
    ],
    [
      1,
      {
        [_eQN]: `AvailableAddressCount`,
        [_xN]: _aAC,
      },
    ],
  ]
);
export var DeprovisionedAddressSet = list(n0, _DASe, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var PublicIpv4PoolIdStringList = list(n0, _PIPISL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var PublicIpv4PoolRangeSet = list(n0, _PIPRS, 0, [
  () => PublicIpv4PoolRange,
  {
    [_xN]: _it,
  },
]);
export var PublicIpv4PoolSet = list(n0, _PIPS, 0, [
  () => PublicIpv4Pool,
  {
    [_xN]: _it,
  },
]);
export var AllocateAddress = op(
  n0,
  _AAl,
  0,
  () => AllocateAddressRequest,
  () => AllocateAddressResult
);
export var AssociateRouteTable = op(
  n0,
  _ARTs,
  0,
  () => AssociateRouteTableRequest,
  () => AssociateRouteTableResult
);
export var CreatePublicIpv4Pool = op(
  n0,
  _CPIP,
  0,
  () => CreatePublicIpv4PoolRequest,
  () => CreatePublicIpv4PoolResult
);
export var DeletePublicIpv4Pool = op(
  n0,
  _DPIP,
  0,
  () => DeletePublicIpv4PoolRequest,
  () => DeletePublicIpv4PoolResult
);
export var DeprovisionPublicIpv4PoolCidr = op(
  n0,
  _DPIPC,
  0,
  () => DeprovisionPublicIpv4PoolCidrRequest,
  () => DeprovisionPublicIpv4PoolCidrResult
);
export var DescribePublicIpv4Pools = op(
  n0,
  _DPIPe,
  0,
  () => DescribePublicIpv4PoolsRequest,
  () => DescribePublicIpv4PoolsResult
);
export var ProvisionPublicIpv4PoolCidr = op(
  n0,
  _PPIPC,
  0,
  () => ProvisionPublicIpv4PoolCidrRequest,
  () => ProvisionPublicIpv4PoolCidrResult
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AAd,
  _AARs,
  _AARss,
  _AAss,
  _ad,
  _Add,
  _aI,
  _AIL,
  _AIl,
  _AIll,
  _AIs,
  _aIs,
  _ALd,
  _ANGA,
  _ANGAR,
  _ANGARs,
  _ARl,
  _aRl,
  _ASd,
  _aSd,
  _aSdd,
  _AT,
  _At,
  _aT,
  _ATd,
  _ATL,
  _aTSd,
  _CI,
  _cI,
  _CNG,
  _CNGR,
  _CNGRr,
  _COI,
  _cOI,
  _COIP,
  _cOIP,
  _CT,
  _cT,
  _CTon,
  _DAAe,
  _DAARes,
  _DAAResc,
  _DAesc,
  _DAR,
  _DARe,
  _DATe,
  _DATi,
  _DATR,
  _DATRe,
  _DATRi,
  _DATRis,
  _DNo,
  _Do,
  _do,
  _DR,
  _dR,
  _EAT,
  _EATR,
  _EATRn,
  _eQN,
  _Fi,
  _Fil,
  _II,
  _iI,
  _it,
  _MAA,
  _MAAR,
  _MAARo,
  _MR,
  _NBG,
  _nBG,
  _NG,
  _nG,
  _NGA,
  _nGAS,
  _NGI,
  _nGI,
  _NII,
  _nII,
  _NIOI,
  _nIOI,
  _NTe,
  _nTe,
  _PI,
  _pI,
  _PIAr,
  _pIAr,
  _PIAri,
  _PIP,
  _pIP,
  _PISL,
  _PIu,
  _PR,
  _pR,
  _PRU,
  _pRU,
  _PUS,
  _RAA,
  _RAAR,
  _RAARe,
  _RAel,
  _RAR,
  _Rea,
  _rea,
  _SAI,
  _SAIe,
  _SIu,
  _sIu,
  _SM,
  _sM,
  _SPIA,
  _SPIAC,
  _SPIAe,
  _Sta,
  _sta,
  _T,
  _TAI,
  _TS,
  _tS,
  _TSa,
  _V,
  _v,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
  Unit,
} from "./schemas_0";
import { IpList, NatGateway, NatGatewayAddressList } from "./schemas_80_Nat";
import { AddressTransfer } from "./schemas_118_Address";

/* eslint no-var: 0 */

export var Address = struct(
  n0,
  _A,
  0,
  [_AIl, _AIs, _Do, _NII, _NIOI, _PIAr, _T, _PIP, _NBG, _COI, _COIP, _CI, _SIu, _SM, _II, _PI],
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
        [_eQN]: `AssociationId`,
        [_xN]: _aIs,
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
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInterfaceOwnerId`,
        [_xN]: _nIOI,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateIpAddress`,
        [_xN]: _pIAr,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
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
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServiceManaged`,
        [_xN]: _sM,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
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
export var AddressAttribute = struct(
  n0,
  _AAd,
  0,
  [_PI, _AIl, _PR, _PRU],
  [
    [
      0,
      {
        [_eQN]: `PublicIp`,
        [_xN]: _pI,
      },
    ],
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
        [_eQN]: `PtrRecord`,
        [_xN]: _pR,
      },
    ],
    [
      () => PtrUpdateStatus,
      {
        [_eQN]: `PtrRecordUpdate`,
        [_xN]: _pRU,
      },
    ],
  ]
);
export var AssociateAddressRequest = struct(
  n0,
  _AARs,
  0,
  [_AIl, _II, _PI, _DR, _NII, _PIAr, _ARl],
  [
    0,
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
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateIpAddress`,
        [_xN]: _pIAr,
      },
    ],
    [
      2,
      {
        [_eQN]: `AllowReassociation`,
        [_xN]: _aRl,
      },
    ],
  ]
);
export var AssociateAddressResult = struct(
  n0,
  _AARss,
  0,
  [_AIs],
  [
    [
      0,
      {
        [_eQN]: `AssociationId`,
        [_xN]: _aIs,
      },
    ],
  ]
);
export var AssociateNatGatewayAddressRequest = struct(
  n0,
  _ANGAR,
  0,
  [_NGI, _AIll, _PIAri, _DR],
  [
    0,
    [
      () => AllocationIdList,
      {
        [_xN]: _AIl,
      },
    ],
    [
      () => IpList,
      {
        [_xN]: _PIAr,
      },
    ],
    2,
  ]
);
export var AssociateNatGatewayAddressResult = struct(
  n0,
  _ANGARs,
  0,
  [_NGI, _NGA],
  [
    [
      0,
      {
        [_eQN]: `NatGatewayId`,
        [_xN]: _nGI,
      },
    ],
    [
      () => NatGatewayAddressList,
      {
        [_eQN]: `NatGatewayAddressSet`,
        [_xN]: _nGAS,
      },
    ],
  ]
);
export var CreateNatGatewayRequest = struct(
  n0,
  _CNGR,
  0,
  [_AIl, _CT, _DR, _SIu, _TS, _CTon, _PIAr, _SAI, _SPIA, _SPIAC],
  [
    0,
    [0, 4],
    2,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    0,
    0,
    [
      () => AllocationIdList,
      {
        [_xN]: _SAIe,
      },
    ],
    [
      () => IpList,
      {
        [_xN]: _SPIAe,
      },
    ],
    1,
  ]
);
export var CreateNatGatewayResult = struct(
  n0,
  _CNGRr,
  0,
  [_CT, _NG],
  [
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
    [
      () => NatGateway,
      {
        [_eQN]: `NatGateway`,
        [_xN]: _nG,
      },
    ],
  ]
);
export var DescribeAddressesAttributeRequest = struct(
  n0,
  _DAARes,
  0,
  [_AIll, _At, _NTe, _MR, _DR],
  [
    [
      () => AllocationIds,
      {
        [_xN]: _AIl,
      },
    ],
    0,
    0,
    1,
    2,
  ]
);
export var DescribeAddressesAttributeResult = struct(
  n0,
  _DAAResc,
  0,
  [_Add, _NTe],
  [
    [
      () => AddressSet,
      {
        [_eQN]: `AddressSet`,
        [_xN]: _aSd,
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
export var DescribeAddressesRequest = struct(
  n0,
  _DAR,
  0,
  [_PIu, _DR, _Fi, _AIll],
  [
    [
      () => PublicIpStringList,
      {
        [_xN]: _PI,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      () => AllocationIdList,
      {
        [_xN]: _AIl,
      },
    ],
  ]
);
export var DescribeAddressesResult = struct(
  n0,
  _DARe,
  0,
  [_Add],
  [
    [
      () => AddressList,
      {
        [_eQN]: `AddressesSet`,
        [_xN]: _aSdd,
      },
    ],
  ]
);
export var DescribeAddressTransfersRequest = struct(
  n0,
  _DATR,
  0,
  [_AIll, _NTe, _MR, _DR],
  [
    [
      () => AllocationIdList,
      {
        [_xN]: _AIl,
      },
    ],
    0,
    1,
    2,
  ]
);
export var DescribeAddressTransfersResult = struct(
  n0,
  _DATRe,
  0,
  [_ATd, _NTe],
  [
    [
      () => AddressTransferList,
      {
        [_eQN]: `AddressTransferSet`,
        [_xN]: _aTSd,
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
export var DisableAddressTransferRequest = struct(n0, _DATRi, 0, [_AIl, _DR], [0, 2]);
export var DisableAddressTransferResult = struct(
  n0,
  _DATRis,
  0,
  [_AT],
  [
    [
      () => AddressTransfer,
      {
        [_eQN]: `AddressTransfer`,
        [_xN]: _aT,
      },
    ],
  ]
);
export var EnableAddressTransferRequest = struct(n0, _EATR, 0, [_AIl, _TAI, _DR], [0, 0, 2]);
export var EnableAddressTransferResult = struct(
  n0,
  _EATRn,
  0,
  [_AT],
  [
    [
      () => AddressTransfer,
      {
        [_eQN]: `AddressTransfer`,
        [_xN]: _aT,
      },
    ],
  ]
);
export var ModifyAddressAttributeRequest = struct(n0, _MAAR, 0, [_AIl, _DNo, _DR], [0, 0, 2]);
export var ModifyAddressAttributeResult = struct(
  n0,
  _MAARo,
  0,
  [_A],
  [
    [
      () => AddressAttribute,
      {
        [_eQN]: `Address`,
        [_xN]: _ad,
      },
    ],
  ]
);
export var PtrUpdateStatus = struct(
  n0,
  _PUS,
  0,
  [_V, _Sta, _Rea],
  [
    [
      0,
      {
        [_eQN]: `Value`,
        [_xN]: _v,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
    [
      0,
      {
        [_eQN]: `Reason`,
        [_xN]: _rea,
      },
    ],
  ]
);
export var ReleaseAddressRequest = struct(
  n0,
  _RAR,
  0,
  [_AIl, _PI, _NBG, _DR],
  [
    0,
    0,
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
export var ResetAddressAttributeRequest = struct(n0, _RAAR, 0, [_AIl, _At, _DR], [0, 0, 2]);
export var ResetAddressAttributeResult = struct(
  n0,
  _RAARe,
  0,
  [_A],
  [
    [
      () => AddressAttribute,
      {
        [_eQN]: `Address`,
        [_xN]: _ad,
      },
    ],
  ]
);
export var AddressList = list(n0, _ALd, 0, [
  () => Address,
  {
    [_xN]: _it,
  },
]);
export var AddressSet = list(n0, _ASd, 0, [
  () => AddressAttribute,
  {
    [_xN]: _it,
  },
]);
export var AddressTransferList = list(n0, _ATL, 0, [
  () => AddressTransfer,
  {
    [_xN]: _it,
  },
]);
export var AllocationIdList = list(n0, _AIL, 0, [
  0,
  {
    [_xN]: _AIl,
  },
]);
export var AllocationIds = list(n0, _AIll, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var PublicIpStringList = list(n0, _PISL, 0, [
  0,
  {
    [_xN]: _PI,
  },
]);
export var AssociateAddress = op(
  n0,
  _AAss,
  0,
  () => AssociateAddressRequest,
  () => AssociateAddressResult
);
export var AssociateNatGatewayAddress = op(
  n0,
  _ANGA,
  0,
  () => AssociateNatGatewayAddressRequest,
  () => AssociateNatGatewayAddressResult
);
export var CreateNatGateway = op(
  n0,
  _CNG,
  0,
  () => CreateNatGatewayRequest,
  () => CreateNatGatewayResult
);
export var DescribeAddresses = op(
  n0,
  _DAesc,
  0,
  () => DescribeAddressesRequest,
  () => DescribeAddressesResult
);
export var DescribeAddressesAttribute = op(
  n0,
  _DAAe,
  0,
  () => DescribeAddressesAttributeRequest,
  () => DescribeAddressesAttributeResult
);
export var DescribeAddressTransfers = op(
  n0,
  _DATe,
  0,
  () => DescribeAddressTransfersRequest,
  () => DescribeAddressTransfersResult
);
export var DisableAddressTransfer = op(
  n0,
  _DATi,
  0,
  () => DisableAddressTransferRequest,
  () => DisableAddressTransferResult
);
export var EnableAddressTransfer = op(
  n0,
  _EAT,
  0,
  () => EnableAddressTransferRequest,
  () => EnableAddressTransferResult
);
export var ModifyAddressAttribute = op(
  n0,
  _MAA,
  0,
  () => ModifyAddressAttributeRequest,
  () => ModifyAddressAttributeResult
);
export var ReleaseAddress = op(
  n0,
  _RAel,
  0,
  () => ReleaseAddressRequest,
  () => Unit
);
export var ResetAddressAttribute = op(
  n0,
  _RAA,
  0,
  () => ResetAddressAttributeRequest,
  () => ResetAddressAttributeResult
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AS,
  _As,
  _aS,
  _aSss,
  _CCG,
  _CCGR,
  _CCGRr,
  _CG,
  _cG,
  _CGa,
  _CGI,
  _cGI,
  _CGIa,
  _CGS,
  _cGS,
  _CNA,
  _cNA,
  _CRTr,
  _CRTRr,
  _CRTRre,
  _CT,
  _cT,
  _DCB,
  _dCB,
  _DCG,
  _DCGes,
  _DCGR,
  _DCGRe,
  _DCGRes,
  _DCGResc,
  _DICB,
  _dICB,
  _DPLI,
  _dPLI,
  _DR,
  _dR,
  _DRTe,
  _DRTRe,
  _DRTRes,
  _EOIGI,
  _eOIGI,
  _eQN,
  _Fi,
  _Fil,
  _GI,
  _gI,
  _IAp,
  _iAp,
  _II,
  _iI,
  _IOIn,
  _iOIn,
  _it,
  _LGI,
  _lGI,
  _Mai,
  _mai,
  _MR,
  _NGI,
  _nGI,
  _NII,
  _nII,
  _NTe,
  _nTe,
  _O,
  _o,
  _OI,
  _oI,
  _ONA,
  _oNA,
  _PIP,
  _pIP,
  _PV,
  _PVL,
  _PVro,
  _pVS,
  _RLo,
  _Ro,
  _Rou,
  _rSou,
  _RTA,
  _RTAI,
  _rTAI,
  _RTAL,
  _RTI,
  _rTI,
  _RTIo,
  _RTISL,
  _RTL,
  _RTo,
  _rTo,
  _RTou,
  _rTS,
  _SIu,
  _sIu,
  _St,
  _st,
  _T,
  _TGI,
  _tGI,
  _TS,
  _tS,
  _TSa,
  _VI,
  _vI,
  _VPCI,
  _vPCI,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";
import { RouteTableAssociationState } from "./schemas_238_Route";

/* eslint no-var: 0 */

export var CarrierGateway = struct(
  n0,
  _CG,
  0,
  [_CGI, _VI, _St, _OI, _T],
  [
    [
      0,
      {
        [_eQN]: `CarrierGatewayId`,
        [_xN]: _cGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
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
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
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
export var CreateCarrierGatewayRequest = struct(
  n0,
  _CCGR,
  0,
  [_VI, _TS, _DR, _CT],
  [
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
    [0, 4],
  ]
);
export var CreateCarrierGatewayResult = struct(
  n0,
  _CCGRr,
  0,
  [_CG],
  [
    [
      () => CarrierGateway,
      {
        [_eQN]: `CarrierGateway`,
        [_xN]: _cG,
      },
    ],
  ]
);
export var CreateRouteTableRequest = struct(
  n0,
  _CRTRr,
  0,
  [_TS, _CT, _DR, _VI],
  [
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [0, 4],
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
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
  ]
);
export var CreateRouteTableResult = struct(
  n0,
  _CRTRre,
  0,
  [_RTo, _CT],
  [
    [
      () => RouteTable,
      {
        [_eQN]: `RouteTable`,
        [_xN]: _rTo,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
  ]
);
export var DeleteCarrierGatewayRequest = struct(n0, _DCGR, 0, [_CGI, _DR], [0, 2]);
export var DeleteCarrierGatewayResult = struct(
  n0,
  _DCGRe,
  0,
  [_CG],
  [
    [
      () => CarrierGateway,
      {
        [_eQN]: `CarrierGateway`,
        [_xN]: _cG,
      },
    ],
  ]
);
export var DescribeCarrierGatewaysRequest = struct(
  n0,
  _DCGRes,
  0,
  [_CGIa, _Fi, _MR, _NTe, _DR],
  [
    [
      64 | 0,
      {
        [_xN]: _CGI,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
    2,
  ]
);
export var DescribeCarrierGatewaysResult = struct(
  n0,
  _DCGResc,
  0,
  [_CGa, _NTe],
  [
    [
      () => CarrierGatewaySet,
      {
        [_eQN]: `CarrierGatewaySet`,
        [_xN]: _cGS,
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
export var DescribeRouteTablesRequest = struct(
  n0,
  _DRTRe,
  0,
  [_NTe, _MR, _DR, _RTIo, _Fi],
  [
    0,
    1,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => RouteTableIdStringList,
      {
        [_xN]: _RTI,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeRouteTablesResult = struct(
  n0,
  _DRTRes,
  0,
  [_RTou, _NTe],
  [
    [
      () => RouteTableList,
      {
        [_eQN]: `RouteTableSet`,
        [_xN]: _rTS,
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
export var PropagatingVgw = struct(
  n0,
  _PV,
  0,
  [_GI],
  [
    [
      0,
      {
        [_eQN]: `GatewayId`,
        [_xN]: _gI,
      },
    ],
  ]
);
export var Route = struct(
  n0,
  _Ro,
  0,
  [_DCB, _DICB, _DPLI, _EOIGI, _GI, _II, _IOIn, _NGI, _TGI, _LGI, _CGI, _NII, _O, _St, _VPCI, _CNA, _ONA, _IAp],
  [
    [
      0,
      {
        [_eQN]: `DestinationCidrBlock`,
        [_xN]: _dCB,
      },
    ],
    [
      0,
      {
        [_eQN]: `DestinationIpv6CidrBlock`,
        [_xN]: _dICB,
      },
    ],
    [
      0,
      {
        [_eQN]: `DestinationPrefixListId`,
        [_xN]: _dPLI,
      },
    ],
    [
      0,
      {
        [_eQN]: `EgressOnlyInternetGatewayId`,
        [_xN]: _eOIGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `GatewayId`,
        [_xN]: _gI,
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
        [_eQN]: `InstanceOwnerId`,
        [_xN]: _iOIn,
      },
    ],
    [
      0,
      {
        [_eQN]: `NatGatewayId`,
        [_xN]: _nGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `TransitGatewayId`,
        [_xN]: _tGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `LocalGatewayId`,
        [_xN]: _lGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CarrierGatewayId`,
        [_xN]: _cGI,
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
        [_eQN]: `Origin`,
        [_xN]: _o,
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
        [_eQN]: `VpcPeeringConnectionId`,
        [_xN]: _vPCI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CoreNetworkArn`,
        [_xN]: _cNA,
      },
    ],
    [
      0,
      {
        [_eQN]: `OdbNetworkArn`,
        [_xN]: _oNA,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpAddress`,
        [_xN]: _iAp,
      },
    ],
  ]
);
export var RouteTable = struct(
  n0,
  _RTo,
  0,
  [_As, _PVro, _RTI, _Rou, _T, _VI, _OI],
  [
    [
      () => RouteTableAssociationList,
      {
        [_eQN]: `AssociationSet`,
        [_xN]: _aSss,
      },
    ],
    [
      () => PropagatingVgwList,
      {
        [_eQN]: `PropagatingVgwSet`,
        [_xN]: _pVS,
      },
    ],
    [
      0,
      {
        [_eQN]: `RouteTableId`,
        [_xN]: _rTI,
      },
    ],
    [
      () => RouteList,
      {
        [_eQN]: `RouteSet`,
        [_xN]: _rSou,
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
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
  ]
);
export var RouteTableAssociation = struct(
  n0,
  _RTA,
  0,
  [_Mai, _RTAI, _RTI, _SIu, _GI, _PIP, _AS],
  [
    [
      2,
      {
        [_eQN]: `Main`,
        [_xN]: _mai,
      },
    ],
    [
      0,
      {
        [_eQN]: `RouteTableAssociationId`,
        [_xN]: _rTAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `RouteTableId`,
        [_xN]: _rTI,
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
        [_eQN]: `GatewayId`,
        [_xN]: _gI,
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
      () => RouteTableAssociationState,
      {
        [_eQN]: `AssociationState`,
        [_xN]: _aS,
      },
    ],
  ]
);
export var CarrierGatewayIdSet = 64 | 0;

export var CarrierGatewaySet = list(n0, _CGS, 0, [
  () => CarrierGateway,
  {
    [_xN]: _it,
  },
]);
export var PropagatingVgwList = list(n0, _PVL, 0, [
  () => PropagatingVgw,
  {
    [_xN]: _it,
  },
]);
export var RouteList = list(n0, _RLo, 0, [
  () => Route,
  {
    [_xN]: _it,
  },
]);
export var RouteTableAssociationList = list(n0, _RTAL, 0, [
  () => RouteTableAssociation,
  {
    [_xN]: _it,
  },
]);
export var RouteTableIdStringList = list(n0, _RTISL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var RouteTableList = list(n0, _RTL, 0, [
  () => RouteTable,
  {
    [_xN]: _it,
  },
]);
export var CreateCarrierGateway = op(
  n0,
  _CCG,
  0,
  () => CreateCarrierGatewayRequest,
  () => CreateCarrierGatewayResult
);
export var CreateRouteTable = op(
  n0,
  _CRTr,
  0,
  () => CreateRouteTableRequest,
  () => CreateRouteTableResult
);
export var DeleteCarrierGateway = op(
  n0,
  _DCG,
  0,
  () => DeleteCarrierGatewayRequest,
  () => DeleteCarrierGatewayResult
);
export var DescribeCarrierGateways = op(
  n0,
  _DCGes,
  0,
  () => DescribeCarrierGatewaysRequest,
  () => DescribeCarrierGatewaysResult
);
export var DescribeRouteTables = op(
  n0,
  _DRTe,
  0,
  () => DescribeRouteTablesRequest,
  () => DescribeRouteTablesResult
);

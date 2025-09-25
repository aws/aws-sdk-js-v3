// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CCP,
  _CCPR,
  _CCPRr,
  _CLGR,
  _CLGRR,
  _CLGRRr,
  _CLGRTVA,
  _CLGRTVAR,
  _CLGRTVARr,
  _CLGRTVIGA,
  _CLGRTVIGAR,
  _CLGRTVIGARr,
  _CP,
  _cP,
  _CPI,
  _cPI,
  _CPIS,
  _CPo,
  _CPS,
  _cPS,
  _DCB,
  _dCB,
  _DCP,
  _DCPe,
  _DCPR,
  _DCPRe,
  _DCPRes,
  _DCPResc,
  _DLGRel,
  _DLGRR,
  _DLGRRe,
  _DLGRT,
  _DLGRTe,
  _DLGRTR,
  _DLGRTRe,
  _DLGRTRes,
  _DLGRTResc,
  _DPLI,
  _dPLI,
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _LGR,
  _LGRL,
  _LGRT,
  _lGRT,
  _LGRTA,
  _lGRTA,
  _LGRTI,
  _lGRTI,
  _LGRTIo,
  _LGRTIS,
  _LGRTo,
  _LGRTS,
  _lGRTS,
  _LGRTVA,
  _lGRTVA,
  _LGRTVIGA,
  _lGRTVIGA,
  _LGVIGI,
  _lGVIGI,
  _MLGR,
  _MLGRR,
  _MLGRRo,
  _MR,
  _NII,
  _nII,
  _NTe,
  _nTe,
  _OI,
  _oI,
  _PA,
  _pA,
  _PC,
  _pCS,
  _PIo,
  _pIo,
  _PIoo,
  _Ro,
  _ro,
  _Rou,
  _rSou,
  _SIu,
  _sIu,
  _SLGR,
  _SLGRR,
  _SLGRRe,
  _St,
  _st,
  _T,
  _TS,
  _tS,
  _TSa,
  _Ty,
  _ty,
  _VI,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
  ValueStringList,
} from "./schemas_0";
import { LocalGatewayRouteTableVpcAssociation } from "./schemas_46_TableVpc";
import { LocalGatewayRouteTable, LocalGatewayRouteTableVirtualInterfaceGroupAssociation } from "./schemas_145_Route";

/* eslint no-var: 0 */

export var CoipPool = struct(
  n0,
  _CP,
  0,
  [_PIo, _PC, _LGRTI, _T, _PA],
  [
    [
      0,
      {
        [_eQN]: `PoolId`,
        [_xN]: _pIo,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `PoolCidrSet`,
        [_xN]: _pCS,
      },
    ],
    [
      0,
      {
        [_eQN]: `LocalGatewayRouteTableId`,
        [_xN]: _lGRTI,
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
        [_eQN]: `PoolArn`,
        [_xN]: _pA,
      },
    ],
  ]
);
export var CreateCoipPoolRequest = struct(
  n0,
  _CCPR,
  0,
  [_LGRTI, _TS, _DR],
  [
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
  ]
);
export var CreateCoipPoolResult = struct(
  n0,
  _CCPRr,
  0,
  [_CP],
  [
    [
      () => CoipPool,
      {
        [_eQN]: `CoipPool`,
        [_xN]: _cP,
      },
    ],
  ]
);
export var CreateLocalGatewayRouteRequest = struct(
  n0,
  _CLGRR,
  0,
  [_DCB, _LGRTI, _LGVIGI, _DR, _NII, _DPLI],
  [0, 0, 0, 2, 0, 0]
);
export var CreateLocalGatewayRouteResult = struct(
  n0,
  _CLGRRr,
  0,
  [_Ro],
  [
    [
      () => LocalGatewayRoute,
      {
        [_eQN]: `Route`,
        [_xN]: _ro,
      },
    ],
  ]
);
export var CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest = struct(
  n0,
  _CLGRTVIGAR,
  0,
  [_LGRTI, _LGVIGI, _TS, _DR],
  [
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
  ]
);
export var CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult = struct(
  n0,
  _CLGRTVIGARr,
  0,
  [_LGRTVIGA],
  [
    [
      () => LocalGatewayRouteTableVirtualInterfaceGroupAssociation,
      {
        [_eQN]: `LocalGatewayRouteTableVirtualInterfaceGroupAssociation`,
        [_xN]: _lGRTVIGA,
      },
    ],
  ]
);
export var CreateLocalGatewayRouteTableVpcAssociationRequest = struct(
  n0,
  _CLGRTVAR,
  0,
  [_LGRTI, _VI, _TS, _DR],
  [
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
  ]
);
export var CreateLocalGatewayRouteTableVpcAssociationResult = struct(
  n0,
  _CLGRTVARr,
  0,
  [_LGRTVA],
  [
    [
      () => LocalGatewayRouteTableVpcAssociation,
      {
        [_eQN]: `LocalGatewayRouteTableVpcAssociation`,
        [_xN]: _lGRTVA,
      },
    ],
  ]
);
export var DeleteCoipPoolRequest = struct(n0, _DCPR, 0, [_CPI, _DR], [0, 2]);
export var DeleteCoipPoolResult = struct(
  n0,
  _DCPRe,
  0,
  [_CP],
  [
    [
      () => CoipPool,
      {
        [_eQN]: `CoipPool`,
        [_xN]: _cP,
      },
    ],
  ]
);
export var DeleteLocalGatewayRouteRequest = struct(n0, _DLGRR, 0, [_DCB, _LGRTI, _DR, _DPLI], [0, 0, 2, 0]);
export var DeleteLocalGatewayRouteResult = struct(
  n0,
  _DLGRRe,
  0,
  [_Ro],
  [
    [
      () => LocalGatewayRoute,
      {
        [_eQN]: `Route`,
        [_xN]: _ro,
      },
    ],
  ]
);
export var DeleteLocalGatewayRouteTableRequest = struct(n0, _DLGRTR, 0, [_LGRTI, _DR], [0, 2]);
export var DeleteLocalGatewayRouteTableResult = struct(
  n0,
  _DLGRTRe,
  0,
  [_LGRT],
  [
    [
      () => LocalGatewayRouteTable,
      {
        [_eQN]: `LocalGatewayRouteTable`,
        [_xN]: _lGRT,
      },
    ],
  ]
);
export var DescribeCoipPoolsRequest = struct(
  n0,
  _DCPRes,
  0,
  [_PIoo, _Fi, _MR, _NTe, _DR],
  [
    [
      () => CoipPoolIdSet,
      {
        [_xN]: _PIo,
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
export var DescribeCoipPoolsResult = struct(
  n0,
  _DCPResc,
  0,
  [_CPo, _NTe],
  [
    [
      () => CoipPoolSet,
      {
        [_eQN]: `CoipPoolSet`,
        [_xN]: _cPS,
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
export var DescribeLocalGatewayRouteTablesRequest = struct(
  n0,
  _DLGRTRes,
  0,
  [_LGRTIo, _Fi, _MR, _NTe, _DR],
  [
    [
      () => LocalGatewayRouteTableIdSet,
      {
        [_xN]: _LGRTI,
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
export var DescribeLocalGatewayRouteTablesResult = struct(
  n0,
  _DLGRTResc,
  0,
  [_LGRTo, _NTe],
  [
    [
      () => LocalGatewayRouteTableSet,
      {
        [_eQN]: `LocalGatewayRouteTableSet`,
        [_xN]: _lGRTS,
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
export var LocalGatewayRoute = struct(
  n0,
  _LGR,
  0,
  [_DCB, _LGVIGI, _Ty, _St, _LGRTI, _LGRTA, _OI, _SIu, _CPI, _NII, _DPLI],
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
        [_eQN]: `LocalGatewayVirtualInterfaceGroupId`,
        [_xN]: _lGVIGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Type`,
        [_xN]: _ty,
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
        [_eQN]: `LocalGatewayRouteTableId`,
        [_xN]: _lGRTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `LocalGatewayRouteTableArn`,
        [_xN]: _lGRTA,
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
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
    [
      0,
      {
        [_eQN]: `CoipPoolId`,
        [_xN]: _cPI,
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
        [_eQN]: `DestinationPrefixListId`,
        [_xN]: _dPLI,
      },
    ],
  ]
);
export var ModifyLocalGatewayRouteRequest = struct(
  n0,
  _MLGRR,
  0,
  [_DCB, _LGRTI, _LGVIGI, _NII, _DR, _DPLI],
  [0, 0, 0, 0, 2, 0]
);
export var ModifyLocalGatewayRouteResult = struct(
  n0,
  _MLGRRo,
  0,
  [_Ro],
  [
    [
      () => LocalGatewayRoute,
      {
        [_eQN]: `Route`,
        [_xN]: _ro,
      },
    ],
  ]
);
export var SearchLocalGatewayRoutesRequest = struct(
  n0,
  _SLGRR,
  0,
  [_LGRTI, _Fi, _MR, _NTe, _DR],
  [
    0,
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
export var SearchLocalGatewayRoutesResult = struct(
  n0,
  _SLGRRe,
  0,
  [_Rou, _NTe],
  [
    [
      () => LocalGatewayRouteList,
      {
        [_eQN]: `RouteSet`,
        [_xN]: _rSou,
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
export var CoipPoolIdSet = list(n0, _CPIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var CoipPoolSet = list(n0, _CPS, 0, [
  () => CoipPool,
  {
    [_xN]: _it,
  },
]);
export var LocalGatewayRouteList = list(n0, _LGRL, 0, [
  () => LocalGatewayRoute,
  {
    [_xN]: _it,
  },
]);
export var LocalGatewayRouteTableIdSet = list(n0, _LGRTIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var LocalGatewayRouteTableSet = list(n0, _LGRTS, 0, [
  () => LocalGatewayRouteTable,
  {
    [_xN]: _it,
  },
]);
export var CreateCoipPool = op(
  n0,
  _CCP,
  0,
  () => CreateCoipPoolRequest,
  () => CreateCoipPoolResult
);
export var CreateLocalGatewayRoute = op(
  n0,
  _CLGR,
  0,
  () => CreateLocalGatewayRouteRequest,
  () => CreateLocalGatewayRouteResult
);
export var CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation = op(
  n0,
  _CLGRTVIGA,
  0,
  () => CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest,
  () => CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult
);
export var CreateLocalGatewayRouteTableVpcAssociation = op(
  n0,
  _CLGRTVA,
  0,
  () => CreateLocalGatewayRouteTableVpcAssociationRequest,
  () => CreateLocalGatewayRouteTableVpcAssociationResult
);
export var DeleteCoipPool = op(
  n0,
  _DCP,
  0,
  () => DeleteCoipPoolRequest,
  () => DeleteCoipPoolResult
);
export var DeleteLocalGatewayRoute = op(
  n0,
  _DLGRel,
  0,
  () => DeleteLocalGatewayRouteRequest,
  () => DeleteLocalGatewayRouteResult
);
export var DeleteLocalGatewayRouteTable = op(
  n0,
  _DLGRT,
  0,
  () => DeleteLocalGatewayRouteTableRequest,
  () => DeleteLocalGatewayRouteTableResult
);
export var DescribeCoipPools = op(
  n0,
  _DCPe,
  0,
  () => DescribeCoipPoolsRequest,
  () => DescribeCoipPoolsResult
);
export var DescribeLocalGatewayRouteTables = op(
  n0,
  _DLGRTe,
  0,
  () => DescribeLocalGatewayRouteTablesRequest,
  () => DescribeLocalGatewayRouteTablesResult
);
export var ModifyLocalGatewayRoute = op(
  n0,
  _MLGR,
  0,
  () => ModifyLocalGatewayRouteRequest,
  () => ModifyLocalGatewayRouteResult
);
export var SearchLocalGatewayRoutes = op(
  n0,
  _SLGR,
  0,
  () => SearchLocalGatewayRoutesRequest,
  () => SearchLocalGatewayRoutesResult
);

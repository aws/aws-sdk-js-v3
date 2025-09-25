// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CLGRT,
  _CLGRTR,
  _CLGRTRr,
  _CLGVIG,
  _CLGVIGR,
  _CLGVIGRr,
  _DLG,
  _DLGR,
  _DLGRe,
  _DLGRTVIGA,
  _DLGRTVIGAe,
  _DLGRTVIGAR,
  _DLGRTVIGARe,
  _DLGRTVIGARes,
  _DLGRTVIGAResc,
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _LBA,
  _LBAE,
  _LG,
  _LGI,
  _lGI,
  _LGIo,
  _LGIS,
  _LGo,
  _LGRT,
  _lGRT,
  _LGRTA,
  _lGRTA,
  _LGRTI,
  _lGRTI,
  _LGRTVIGA,
  _lGRTVIGA,
  _LGRTVIGAI,
  _lGRTVIGAI,
  _LGRTVIGAIo,
  _LGRTVIGAIS,
  _LGRTVIGAo,
  _LGRTVIGAS,
  _lGRTVIGAS,
  _LGS,
  _lGS,
  _LGVIG,
  _lGVIG,
  _LGVIGI,
  _lGVIGI,
  _Mo,
  _mod,
  _MR,
  _NTe,
  _nTe,
  _OA,
  _oA,
  _OI,
  _oI,
  _SRt,
  _sRt,
  _St,
  _st,
  _T,
  _TS,
  _tS,
  _TSa,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";
import { LocalGatewayVirtualInterfaceGroup } from "./schemas_117_LocalGatewayVirtual";
import { StateReason } from "./schemas_287_Describe";

/* eslint no-var: 0 */

export var CreateLocalGatewayRouteTableRequest = struct(
  n0,
  _CLGRTR,
  0,
  [_LGI, _Mo, _TS, _DR],
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
export var CreateLocalGatewayRouteTableResult = struct(
  n0,
  _CLGRTRr,
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
export var CreateLocalGatewayVirtualInterfaceGroupRequest = struct(
  n0,
  _CLGVIGR,
  0,
  [_LGI, _LBA, _LBAE, _TS, _DR],
  [
    0,
    1,
    1,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
  ]
);
export var CreateLocalGatewayVirtualInterfaceGroupResult = struct(
  n0,
  _CLGVIGRr,
  0,
  [_LGVIG],
  [
    [
      () => LocalGatewayVirtualInterfaceGroup,
      {
        [_eQN]: `LocalGatewayVirtualInterfaceGroup`,
        [_xN]: _lGVIG,
      },
    ],
  ]
);
export var DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest = struct(
  n0,
  _DLGRTVIGAR,
  0,
  [_LGRTVIGAI, _DR],
  [0, 2]
);
export var DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult = struct(
  n0,
  _DLGRTVIGARe,
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
export var DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest = struct(
  n0,
  _DLGRTVIGARes,
  0,
  [_LGRTVIGAIo, _Fi, _MR, _NTe, _DR],
  [
    [
      () => LocalGatewayRouteTableVirtualInterfaceGroupAssociationIdSet,
      {
        [_xN]: _LGRTVIGAI,
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
export var DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult = struct(
  n0,
  _DLGRTVIGAResc,
  0,
  [_LGRTVIGAo, _NTe],
  [
    [
      () => LocalGatewayRouteTableVirtualInterfaceGroupAssociationSet,
      {
        [_eQN]: `LocalGatewayRouteTableVirtualInterfaceGroupAssociationSet`,
        [_xN]: _lGRTVIGAS,
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
export var DescribeLocalGatewaysRequest = struct(
  n0,
  _DLGR,
  0,
  [_LGIo, _Fi, _MR, _NTe, _DR],
  [
    [
      () => LocalGatewayIdSet,
      {
        [_xN]: _LGI,
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
export var DescribeLocalGatewaysResult = struct(
  n0,
  _DLGRe,
  0,
  [_LG, _NTe],
  [
    [
      () => LocalGatewaySet,
      {
        [_eQN]: `LocalGatewaySet`,
        [_xN]: _lGS,
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
export var LocalGateway = struct(
  n0,
  _LGo,
  0,
  [_LGI, _OA, _OI, _St, _T],
  [
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
        [_eQN]: `OutpostArn`,
        [_xN]: _oA,
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
        [_eQN]: `State`,
        [_xN]: _st,
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
export var LocalGatewayRouteTable = struct(
  n0,
  _LGRT,
  0,
  [_LGRTI, _LGRTA, _LGI, _OA, _OI, _St, _T, _Mo, _SRt],
  [
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
        [_eQN]: `LocalGatewayId`,
        [_xN]: _lGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `OutpostArn`,
        [_xN]: _oA,
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
        [_eQN]: `State`,
        [_xN]: _st,
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
        [_eQN]: `Mode`,
        [_xN]: _mod,
      },
    ],
    [
      () => StateReason,
      {
        [_eQN]: `StateReason`,
        [_xN]: _sRt,
      },
    ],
  ]
);
export var LocalGatewayRouteTableVirtualInterfaceGroupAssociation = struct(
  n0,
  _LGRTVIGA,
  0,
  [_LGRTVIGAI, _LGVIGI, _LGI, _LGRTI, _LGRTA, _OI, _St, _T],
  [
    [
      0,
      {
        [_eQN]: `LocalGatewayRouteTableVirtualInterfaceGroupAssociationId`,
        [_xN]: _lGRTVIGAI,
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
        [_eQN]: `LocalGatewayId`,
        [_xN]: _lGI,
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
        [_eQN]: `State`,
        [_xN]: _st,
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
export var LocalGatewayIdSet = list(n0, _LGIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var LocalGatewayRouteTableVirtualInterfaceGroupAssociationIdSet = list(n0, _LGRTVIGAIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var LocalGatewayRouteTableVirtualInterfaceGroupAssociationSet = list(n0, _LGRTVIGAS, 0, [
  () => LocalGatewayRouteTableVirtualInterfaceGroupAssociation,
  {
    [_xN]: _it,
  },
]);
export var LocalGatewaySet = list(n0, _LGS, 0, [
  () => LocalGateway,
  {
    [_xN]: _it,
  },
]);
export var CreateLocalGatewayRouteTable = op(
  n0,
  _CLGRT,
  0,
  () => CreateLocalGatewayRouteTableRequest,
  () => CreateLocalGatewayRouteTableResult
);
export var CreateLocalGatewayVirtualInterfaceGroup = op(
  n0,
  _CLGVIG,
  0,
  () => CreateLocalGatewayVirtualInterfaceGroupRequest,
  () => CreateLocalGatewayVirtualInterfaceGroupResult
);
export var DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation = op(
  n0,
  _DLGRTVIGA,
  0,
  () => DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest,
  () => DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult
);
export var DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations = op(
  n0,
  _DLGRTVIGAe,
  0,
  () => DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest,
  () => DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult
);
export var DescribeLocalGateways = op(
  n0,
  _DLG,
  0,
  () => DescribeLocalGatewaysRequest,
  () => DescribeLocalGatewaysResult
);

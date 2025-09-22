// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CTGRT,
  _CTGRTR,
  _CTGRTRr,
  _CTre,
  _cTre,
  _DART,
  _dART,
  _DPRT,
  _dPRT,
  _DR,
  _DTGRT,
  _DTGRTe,
  _DTGRTR,
  _DTGRTRe,
  _DTGRTRes,
  _DTGRTResc,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _MR,
  _NTe,
  _nTe,
  _St,
  _st,
  _T,
  _TGI,
  _tGI,
  _TGRT,
  _tGRT,
  _TGRTI,
  _tGRTI,
  _TGRTIr,
  _TGRTISL,
  _TGRTL,
  _TGRTr,
  _tGRTr,
  _TS,
  _tS,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTransitGatewayRouteTableRequest = struct(
  n0,
  _CTGRTR,
  0,
  [_TGI, _TS, _DR],
  [0, [() => TagSpecificationList, 0], 2]
);
export var CreateTransitGatewayRouteTableResult = struct(
  n0,
  _CTGRTRr,
  0,
  [_TGRT],
  [
    [
      () => TransitGatewayRouteTable,
      {
        [_eQN]: `TransitGatewayRouteTable`,
        [_xN]: _tGRT,
      },
    ],
  ]
);
export var DeleteTransitGatewayRouteTableRequest = struct(n0, _DTGRTR, 0, [_TGRTI, _DR], [0, 2]);
export var DeleteTransitGatewayRouteTableResult = struct(
  n0,
  _DTGRTRe,
  0,
  [_TGRT],
  [
    [
      () => TransitGatewayRouteTable,
      {
        [_eQN]: `TransitGatewayRouteTable`,
        [_xN]: _tGRT,
      },
    ],
  ]
);
export var DescribeTransitGatewayRouteTablesRequest = struct(
  n0,
  _DTGRTRes,
  0,
  [_TGRTIr, _Fi, _MR, _NTe, _DR],
  [
    [() => TransitGatewayRouteTableIdStringList, 0],
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
export var DescribeTransitGatewayRouteTablesResult = struct(
  n0,
  _DTGRTResc,
  0,
  [_TGRTr, _NTe],
  [
    [
      () => TransitGatewayRouteTableList,
      {
        [_eQN]: `TransitGatewayRouteTables`,
        [_xN]: _tGRTr,
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
export var TransitGatewayRouteTable = struct(
  n0,
  _TGRT,
  0,
  [_TGRTI, _TGI, _St, _DART, _DPRT, _CTre, _T],
  [
    [
      0,
      {
        [_eQN]: `TransitGatewayRouteTableId`,
        [_xN]: _tGRTI,
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
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      2,
      {
        [_eQN]: `DefaultAssociationRouteTable`,
        [_xN]: _dART,
      },
    ],
    [
      2,
      {
        [_eQN]: `DefaultPropagationRouteTable`,
        [_xN]: _dPRT,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreationTime`,
        [_xN]: _cTre,
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
export var TransitGatewayRouteTableIdStringList = list(n0, _TGRTISL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayRouteTableList = list(n0, _TGRTL, 0, [
  () => TransitGatewayRouteTable,
  {
    [_xN]: _it,
  },
]);
export var CreateTransitGatewayRouteTable = op(
  n0,
  _CTGRT,
  0,
  () => CreateTransitGatewayRouteTableRequest,
  () => CreateTransitGatewayRouteTableResult
);
export var DeleteTransitGatewayRouteTable = op(
  n0,
  _DTGRT,
  0,
  () => DeleteTransitGatewayRouteTableRequest,
  () => DeleteTransitGatewayRouteTableResult
);
export var DescribeTransitGatewayRouteTables = op(
  n0,
  _DTGRTe,
  0,
  () => DescribeTransitGatewayRouteTablesRequest,
  () => DescribeTransitGatewayRouteTablesResult
);

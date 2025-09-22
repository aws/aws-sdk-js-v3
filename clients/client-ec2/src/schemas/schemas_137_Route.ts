// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASA,
  _aSA,
  _CRSr,
  _CRSRr,
  _CRSRre,
  _CT,
  _DR,
  _DRSe,
  _DRSes,
  _DRSR,
  _DRSRe,
  _DRSRes,
  _DRSResc,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _MR,
  _MRS,
  _MRSR,
  _MRSRo,
  _NTe,
  _nTe,
  _PRD,
  _pRD,
  _PRe,
  _PRS,
  _pRSe,
  _RSI,
  _rSI,
  _RSIo,
  _RSLo,
  _RSo,
  _rSo,
  _RSou,
  _rSSo,
  _SNE,
  _sNE,
  _St,
  _st,
  _STA,
  _sTA,
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

/* eslint no-var: 0 */

export var CreateRouteServerRequest = struct(
  n0,
  _CRSRr,
  0,
  [_ASA, _CT, _DR, _PRe, _PRD, _SNE, _TS],
  [
    1,
    [0, 4],
    2,
    0,
    1,
    2,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var CreateRouteServerResult = struct(
  n0,
  _CRSRre,
  0,
  [_RSo],
  [
    [
      () => RouteServer,
      {
        [_eQN]: `RouteServer`,
        [_xN]: _rSo,
      },
    ],
  ]
);
export var DeleteRouteServerRequest = struct(n0, _DRSR, 0, [_RSI, _DR], [0, 2]);
export var DeleteRouteServerResult = struct(
  n0,
  _DRSRe,
  0,
  [_RSo],
  [
    [
      () => RouteServer,
      {
        [_eQN]: `RouteServer`,
        [_xN]: _rSo,
      },
    ],
  ]
);
export var DescribeRouteServersRequest = struct(
  n0,
  _DRSRes,
  0,
  [_RSIo, _NTe, _MR, _Fi, _DR],
  [
    [
      64 | 0,
      {
        [_xN]: _RSI,
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
    2,
  ]
);
export var DescribeRouteServersResult = struct(
  n0,
  _DRSResc,
  0,
  [_RSou, _NTe],
  [
    [
      () => RouteServersList,
      {
        [_eQN]: `RouteServerSet`,
        [_xN]: _rSSo,
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
export var ModifyRouteServerRequest = struct(n0, _MRSR, 0, [_RSI, _PRe, _PRD, _SNE, _DR], [0, 0, 1, 2, 2]);
export var ModifyRouteServerResult = struct(
  n0,
  _MRSRo,
  0,
  [_RSo],
  [
    [
      () => RouteServer,
      {
        [_eQN]: `RouteServer`,
        [_xN]: _rSo,
      },
    ],
  ]
);
export var RouteServer = struct(
  n0,
  _RSo,
  0,
  [_RSI, _ASA, _St, _T, _PRS, _PRD, _SNE, _STA],
  [
    [
      0,
      {
        [_eQN]: `RouteServerId`,
        [_xN]: _rSI,
      },
    ],
    [
      1,
      {
        [_eQN]: `AmazonSideAsn`,
        [_xN]: _aSA,
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
        [_eQN]: `PersistRoutesState`,
        [_xN]: _pRSe,
      },
    ],
    [
      1,
      {
        [_eQN]: `PersistRoutesDuration`,
        [_xN]: _pRD,
      },
    ],
    [
      2,
      {
        [_eQN]: `SnsNotificationsEnabled`,
        [_xN]: _sNE,
      },
    ],
    [
      0,
      {
        [_eQN]: `SnsTopicArn`,
        [_xN]: _sTA,
      },
    ],
  ]
);
export var RouteServerIdsList = 64 | 0;

export var RouteServersList = list(n0, _RSLo, 0, [
  () => RouteServer,
  {
    [_xN]: _it,
  },
]);
export var CreateRouteServer = op(
  n0,
  _CRSr,
  0,
  () => CreateRouteServerRequest,
  () => CreateRouteServerResult
);
export var DeleteRouteServer = op(
  n0,
  _DRSe,
  0,
  () => DeleteRouteServerRequest,
  () => DeleteRouteServerResult
);
export var DescribeRouteServers = op(
  n0,
  _DRSes,
  0,
  () => DescribeRouteServersRequest,
  () => DescribeRouteServersResult
);
export var ModifyRouteServer = op(
  n0,
  _MRS,
  0,
  () => ModifyRouteServerRequest,
  () => ModifyRouteServerResult
);

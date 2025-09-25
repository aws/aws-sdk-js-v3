// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CCVR,
  _CCVRR,
  _CCVRRr,
  _Co,
  _co,
  _CT,
  _CVEI,
  _cVEI,
  _CVR,
  _CVRS,
  _CVRSl,
  _dC,
  _DCB,
  _DCe,
  _DCVR,
  _DCVRe,
  _DCVRR,
  _DCVRRe,
  _DCVRRes,
  _DCVRResc,
  _De,
  _de,
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _Me,
  _me,
  _MR,
  _NTe,
  _nTe,
  _O,
  _o,
  _Rou,
  _rou,
  _Sta,
  _sta,
  _tSa,
  _TSar,
  _TVSI,
  _Ty,
  _ty,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClientVpnRoute = struct(
  n0,
  _CVR,
  0,
  [_CVEI, _DCe, _TSar, _Ty, _O, _Sta, _De],
  [
    [
      0,
      {
        [_eQN]: `ClientVpnEndpointId`,
        [_xN]: _cVEI,
      },
    ],
    [
      0,
      {
        [_eQN]: `DestinationCidr`,
        [_xN]: _dC,
      },
    ],
    [
      0,
      {
        [_eQN]: `TargetSubnet`,
        [_xN]: _tSa,
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
        [_eQN]: `Origin`,
        [_xN]: _o,
      },
    ],
    [
      () => ClientVpnRouteStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
  ]
);
export var ClientVpnRouteStatus = struct(
  n0,
  _CVRS,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var CreateClientVpnRouteRequest = struct(
  n0,
  _CCVRR,
  0,
  [_CVEI, _DCB, _TVSI, _De, _CT, _DR],
  [0, 0, 0, 0, [0, 4], 2]
);
export var CreateClientVpnRouteResult = struct(
  n0,
  _CCVRRr,
  0,
  [_Sta],
  [
    [
      () => ClientVpnRouteStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var DeleteClientVpnRouteRequest = struct(n0, _DCVRR, 0, [_CVEI, _TVSI, _DCB, _DR], [0, 0, 0, 2]);
export var DeleteClientVpnRouteResult = struct(
  n0,
  _DCVRRe,
  0,
  [_Sta],
  [
    [
      () => ClientVpnRouteStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var DescribeClientVpnRoutesRequest = struct(
  n0,
  _DCVRRes,
  0,
  [_CVEI, _Fi, _MR, _NTe, _DR],
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
export var DescribeClientVpnRoutesResult = struct(
  n0,
  _DCVRResc,
  0,
  [_Rou, _NTe],
  [
    [
      () => ClientVpnRouteSet,
      {
        [_eQN]: `Routes`,
        [_xN]: _rou,
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
export var ClientVpnRouteSet = list(n0, _CVRSl, 0, [
  () => ClientVpnRoute,
  {
    [_xN]: _it,
  },
]);
export var CreateClientVpnRoute = op(
  n0,
  _CCVR,
  0,
  () => CreateClientVpnRouteRequest,
  () => CreateClientVpnRouteResult
);
export var DeleteClientVpnRoute = op(
  n0,
  _DCVR,
  0,
  () => DeleteClientVpnRouteRequest,
  () => DeleteClientVpnRouteResult
);
export var DescribeClientVpnRoutes = op(
  n0,
  _DCVRe,
  0,
  () => DescribeClientVpnRoutesRequest,
  () => DescribeClientVpnRoutesResult
);

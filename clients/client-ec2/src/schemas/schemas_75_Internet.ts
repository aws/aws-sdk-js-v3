// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIG,
  _AIGR,
  _DIG,
  _DIGe,
  _DIGet,
  _DIGR,
  _DIGRe,
  _DIGRes,
  _DIGRet,
  _DR,
  _dR,
  _eQN,
  _Fi,
  _Fil,
  _IGI,
  _iGI,
  _IGIL,
  _IGIn,
  _IGL,
  _IGn,
  _iGS,
  _it,
  _MR,
  _NTe,
  _nTe,
  _VI,
  _vI,
  _xN,
  FilterList,
  n0,
  Unit,
} from "./schemas_0";
import { InternetGateway } from "./schemas_234_Internet";

/* eslint no-var: 0 */

export var AttachInternetGatewayRequest = struct(
  n0,
  _AIGR,
  0,
  [_DR, _IGI, _VI],
  [
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
        [_eQN]: `InternetGatewayId`,
        [_xN]: _iGI,
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
export var DeleteInternetGatewayRequest = struct(
  n0,
  _DIGR,
  0,
  [_DR, _IGI],
  [
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
        [_eQN]: `InternetGatewayId`,
        [_xN]: _iGI,
      },
    ],
  ]
);
export var DescribeInternetGatewaysRequest = struct(
  n0,
  _DIGRe,
  0,
  [_NTe, _MR, _DR, _IGIn, _Fi],
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
      () => InternetGatewayIdList,
      {
        [_eQN]: `InternetGatewayId`,
        [_xN]: _iGI,
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
export var DescribeInternetGatewaysResult = struct(
  n0,
  _DIGRes,
  0,
  [_IGn, _NTe],
  [
    [
      () => InternetGatewayList,
      {
        [_eQN]: `InternetGatewaySet`,
        [_xN]: _iGS,
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
export var DetachInternetGatewayRequest = struct(
  n0,
  _DIGRet,
  0,
  [_DR, _IGI, _VI],
  [
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
        [_eQN]: `InternetGatewayId`,
        [_xN]: _iGI,
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
export var InternetGatewayIdList = list(n0, _IGIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var InternetGatewayList = list(n0, _IGL, 0, [
  () => InternetGateway,
  {
    [_xN]: _it,
  },
]);
export var AttachInternetGateway = op(
  n0,
  _AIG,
  0,
  () => AttachInternetGatewayRequest,
  () => Unit
);
export var DeleteInternetGateway = op(
  n0,
  _DIG,
  0,
  () => DeleteInternetGatewayRequest,
  () => Unit
);
export var DescribeInternetGateways = op(
  n0,
  _DIGe,
  0,
  () => DescribeInternetGatewaysRequest,
  () => DescribeInternetGatewaysResult
);
export var DetachInternetGateway = op(
  n0,
  _DIGet,
  0,
  () => DetachInternetGatewayRequest,
  () => Unit
);

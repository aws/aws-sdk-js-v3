// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CGISL,
  _CGIu,
  _CGIus,
  _CGL,
  _cGSu,
  _CGus,
  _DCGe,
  _DCGesc,
  _DCGRel,
  _DCGRescr,
  _DCGRescri,
  _DR,
  _dR,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _xN,
  FilterList,
  n0,
  Unit,
} from "./schemas_0";
import { CustomerGateway } from "./schemas_329_Customer";

/* eslint no-var: 0 */

export var DeleteCustomerGatewayRequest = struct(
  n0,
  _DCGRel,
  0,
  [_CGIu, _DR],
  [
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
export var DescribeCustomerGatewaysRequest = struct(
  n0,
  _DCGRescr,
  0,
  [_CGIus, _Fi, _DR],
  [
    [
      () => CustomerGatewayIdStringList,
      {
        [_xN]: _CGIu,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var DescribeCustomerGatewaysResult = struct(
  n0,
  _DCGRescri,
  0,
  [_CGus],
  [
    [
      () => CustomerGatewayList,
      {
        [_eQN]: `CustomerGatewaySet`,
        [_xN]: _cGSu,
      },
    ],
  ]
);
export var CustomerGatewayIdStringList = list(n0, _CGISL, 0, [
  0,
  {
    [_xN]: _CGIu,
  },
]);
export var CustomerGatewayList = list(n0, _CGL, 0, [
  () => CustomerGateway,
  {
    [_xN]: _it,
  },
]);
export var DeleteCustomerGateway = op(
  n0,
  _DCGe,
  0,
  () => DeleteCustomerGatewayRequest,
  () => Unit
);
export var DescribeCustomerGateways = op(
  n0,
  _DCGesc,
  0,
  () => DescribeCustomerGatewaysRequest,
  () => DescribeCustomerGatewaysResult
);

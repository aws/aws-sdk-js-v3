// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DLGRTVAe,
  _DLGRTVARes,
  _DLGRTVAResc,
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _LGRTVAI,
  _LGRTVAIo,
  _LGRTVAIS,
  _LGRTVAo,
  _LGRTVAS,
  _lGRTVAS,
  _MR,
  _NTe,
  _nTe,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";
import { LocalGatewayRouteTableVpcAssociation } from "./schemas_46_TableVpc";

/* eslint no-var: 0 */

export var DescribeLocalGatewayRouteTableVpcAssociationsRequest = struct(
  n0,
  _DLGRTVARes,
  0,
  [_LGRTVAIo, _Fi, _MR, _NTe, _DR],
  [
    [
      () => LocalGatewayRouteTableVpcAssociationIdSet,
      {
        [_xN]: _LGRTVAI,
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
export var DescribeLocalGatewayRouteTableVpcAssociationsResult = struct(
  n0,
  _DLGRTVAResc,
  0,
  [_LGRTVAo, _NTe],
  [
    [
      () => LocalGatewayRouteTableVpcAssociationSet,
      {
        [_eQN]: `LocalGatewayRouteTableVpcAssociationSet`,
        [_xN]: _lGRTVAS,
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
export var LocalGatewayRouteTableVpcAssociationIdSet = list(n0, _LGRTVAIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var LocalGatewayRouteTableVpcAssociationSet = list(n0, _LGRTVAS, 0, [
  () => LocalGatewayRouteTableVpcAssociation,
  {
    [_xN]: _it,
  },
]);
export var DescribeLocalGatewayRouteTableVpcAssociations = op(
  n0,
  _DLGRTVAe,
  0,
  () => DescribeLocalGatewayRouteTableVpcAssociationsRequest,
  () => DescribeLocalGatewayRouteTableVpcAssociationsResult
);

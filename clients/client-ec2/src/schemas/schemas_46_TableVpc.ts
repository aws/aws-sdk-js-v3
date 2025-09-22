// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DLGRTVA,
  _DLGRTVAR,
  _DLGRTVARe,
  _DR,
  _eQN,
  _LGI,
  _lGI,
  _LGRTA,
  _lGRTA,
  _LGRTI,
  _lGRTI,
  _LGRTVA,
  _lGRTVA,
  _LGRTVAI,
  _lGRTVAI,
  _OI,
  _oI,
  _St,
  _st,
  _T,
  _tS,
  _VI,
  _vI,
  _xN,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLocalGatewayRouteTableVpcAssociationRequest = struct(n0, _DLGRTVAR, 0, [_LGRTVAI, _DR], [0, 2]);
export var DeleteLocalGatewayRouteTableVpcAssociationResult = struct(
  n0,
  _DLGRTVARe,
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
export var LocalGatewayRouteTableVpcAssociation = struct(
  n0,
  _LGRTVA,
  0,
  [_LGRTVAI, _LGRTI, _LGRTA, _LGI, _VI, _OI, _St, _T],
  [
    [
      0,
      {
        [_eQN]: `LocalGatewayRouteTableVpcAssociationId`,
        [_xN]: _lGRTVAI,
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
        [_eQN]: `LocalGatewayId`,
        [_xN]: _lGI,
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
export var DeleteLocalGatewayRouteTableVpcAssociation = op(
  n0,
  _DLGRTVA,
  0,
  () => DeleteLocalGatewayRouteTableVpcAssociationRequest,
  () => DeleteLocalGatewayRouteTableVpcAssociationResult
);

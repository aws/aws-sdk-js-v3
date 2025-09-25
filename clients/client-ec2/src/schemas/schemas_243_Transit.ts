// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _GTGAP,
  _GTGAPR,
  _GTGAPRe,
  _it,
  _MR,
  _NTe,
  _nTe,
  _St,
  _st,
  _TGAI,
  _TGAP,
  _tGAP,
  _TGAPL,
  _TGAPr,
  _TGRTI,
  _tGRTI,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetTransitGatewayAttachmentPropagationsRequest = struct(
  n0,
  _GTGAPR,
  0,
  [_TGAI, _Fi, _MR, _NTe, _DR],
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
export var GetTransitGatewayAttachmentPropagationsResult = struct(
  n0,
  _GTGAPRe,
  0,
  [_TGAP, _NTe],
  [
    [
      () => TransitGatewayAttachmentPropagationList,
      {
        [_eQN]: `TransitGatewayAttachmentPropagations`,
        [_xN]: _tGAP,
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
export var TransitGatewayAttachmentPropagation = struct(
  n0,
  _TGAPr,
  0,
  [_TGRTI, _St],
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
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var TransitGatewayAttachmentPropagationList = list(n0, _TGAPL, 0, [
  () => TransitGatewayAttachmentPropagation,
  {
    [_xN]: _it,
  },
]);
export var GetTransitGatewayAttachmentPropagations = op(
  n0,
  _GTGAP,
  0,
  () => GetTransitGatewayAttachmentPropagationsRequest,
  () => GetTransitGatewayAttachmentPropagationsResult
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _As,
  _Ass,
  _ass,
  _ATGRT,
  _ATGRTR,
  _ATGRTRs,
  _CTre,
  _cTre,
  _DR,
  _DTGA,
  _DTGAR,
  _DTGARe,
  _DTGRTi,
  _DTGRTRi,
  _DTGRTRis,
  _eQN,
  _Fi,
  _Fil,
  _GTGRTA,
  _GTGRTAR,
  _GTGRTARe,
  _it,
  _MR,
  _NTe,
  _nTe,
  _rIe,
  _RIes,
  _ROI,
  _rOI,
  _RTe,
  _rTe,
  _St,
  _st,
  _T,
  _tGA,
  _TGAA,
  _TGAI,
  _tGAI,
  _TGAIr,
  _TGAL,
  _TGAr,
  _TGAra,
  _TGArans,
  _TGI,
  _tGI,
  _TGOI,
  _tGOI,
  _TGRTALr,
  _TGRTAra,
  _TGRTI,
  _tGRTI,
  _tS,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateTransitGatewayRouteTableRequest = struct(n0, _ATGRTR, 0, [_TGRTI, _TGAI, _DR], [0, 0, 2]);
export var AssociateTransitGatewayRouteTableResult = struct(
  n0,
  _ATGRTRs,
  0,
  [_Ass],
  [
    [
      () => TransitGatewayAssociation,
      {
        [_eQN]: `Association`,
        [_xN]: _ass,
      },
    ],
  ]
);
export var DescribeTransitGatewayAttachmentsRequest = struct(
  n0,
  _DTGAR,
  0,
  [_TGAIr, _Fi, _MR, _NTe, _DR],
  [
    64 | 0,
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
export var DescribeTransitGatewayAttachmentsResult = struct(
  n0,
  _DTGARe,
  0,
  [_TGAr, _NTe],
  [
    [
      () => TransitGatewayAttachmentList,
      {
        [_eQN]: `TransitGatewayAttachments`,
        [_xN]: _tGA,
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
export var DisassociateTransitGatewayRouteTableRequest = struct(n0, _DTGRTRi, 0, [_TGRTI, _TGAI, _DR], [0, 0, 2]);
export var DisassociateTransitGatewayRouteTableResult = struct(
  n0,
  _DTGRTRis,
  0,
  [_Ass],
  [
    [
      () => TransitGatewayAssociation,
      {
        [_eQN]: `Association`,
        [_xN]: _ass,
      },
    ],
  ]
);
export var GetTransitGatewayRouteTableAssociationsRequest = struct(
  n0,
  _GTGRTAR,
  0,
  [_TGRTI, _Fi, _MR, _NTe, _DR],
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
export var GetTransitGatewayRouteTableAssociationsResult = struct(
  n0,
  _GTGRTARe,
  0,
  [_As, _NTe],
  [
    [
      () => TransitGatewayRouteTableAssociationList,
      {
        [_eQN]: `Associations`,
        [_xN]: _a,
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
export var TransitGatewayAssociation = struct(
  n0,
  _TGArans,
  0,
  [_TGRTI, _TGAI, _RIes, _RTe, _St],
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
        [_eQN]: `TransitGatewayAttachmentId`,
        [_xN]: _tGAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceId`,
        [_xN]: _rIe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
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
export var TransitGatewayAttachment = struct(
  n0,
  _TGAra,
  0,
  [_TGAI, _TGI, _TGOI, _ROI, _RTe, _RIes, _St, _Ass, _CTre, _T],
  [
    [
      0,
      {
        [_eQN]: `TransitGatewayAttachmentId`,
        [_xN]: _tGAI,
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
        [_eQN]: `TransitGatewayOwnerId`,
        [_xN]: _tGOI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceOwnerId`,
        [_xN]: _rOI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceId`,
        [_xN]: _rIe,
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
      () => TransitGatewayAttachmentAssociation,
      {
        [_eQN]: `Association`,
        [_xN]: _ass,
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
export var TransitGatewayAttachmentAssociation = struct(
  n0,
  _TGAA,
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
export var TransitGatewayRouteTableAssociation = struct(
  n0,
  _TGRTAra,
  0,
  [_TGAI, _RIes, _RTe, _St],
  [
    [
      0,
      {
        [_eQN]: `TransitGatewayAttachmentId`,
        [_xN]: _tGAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceId`,
        [_xN]: _rIe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
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
export var TransitGatewayAttachmentList = list(n0, _TGAL, 0, [
  () => TransitGatewayAttachment,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayRouteTableAssociationList = list(n0, _TGRTALr, 0, [
  () => TransitGatewayRouteTableAssociation,
  {
    [_xN]: _it,
  },
]);
export var AssociateTransitGatewayRouteTable = op(
  n0,
  _ATGRT,
  0,
  () => AssociateTransitGatewayRouteTableRequest,
  () => AssociateTransitGatewayRouteTableResult
);
export var DescribeTransitGatewayAttachments = op(
  n0,
  _DTGA,
  0,
  () => DescribeTransitGatewayAttachmentsRequest,
  () => DescribeTransitGatewayAttachmentsResult
);
export var DisassociateTransitGatewayRouteTable = op(
  n0,
  _DTGRTi,
  0,
  () => DisassociateTransitGatewayRouteTableRequest,
  () => DisassociateTransitGatewayRouteTableResult
);
export var GetTransitGatewayRouteTableAssociations = op(
  n0,
  _GTGRTA,
  0,
  () => GetTransitGatewayRouteTableAssociationsRequest,
  () => GetTransitGatewayRouteTableAssociationsResult
);

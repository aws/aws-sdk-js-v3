// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ADn,
  _aDn,
  _ARAd,
  _aRAd,
  _Bl,
  _cNIo,
  _CNIor,
  _CTGRR,
  _CTGRre,
  _CTGRRr,
  _CTGRTA,
  _CTGRTAR,
  _CTGRTARr,
  _CTre,
  _cTre,
  _DCB,
  _dCB,
  _DR,
  _DTGRel,
  _DTGRR,
  _DTGRRe,
  _DTGRTA,
  _DTGRTAe,
  _DTGRTAR,
  _DTGRTARe,
  _DTGRTARes,
  _DTGRTAResc,
  _DTGRTP,
  _DTGRTPR,
  _DTGRTPRi,
  _eQN,
  _ETGRTP,
  _ETGRTPR,
  _ETGRTPRn,
  _Fi,
  _Fil,
  _GTGRTP,
  _GTGRTPR,
  _GTGRTPRe,
  _it,
  _MR,
  _NTe,
  _nTe,
  _pAI,
  _PAIe,
  _PCNI,
  _pCNI,
  _PLI,
  _pLI,
  _Prop,
  _prop,
  _PTGI,
  _pTGI,
  _rIe,
  _RIes,
  _Ro,
  _ro,
  _Rou,
  _rSou,
  _RTe,
  _rTe,
  _RTGR,
  _RTGRR,
  _RTGRRe,
  _St,
  _st,
  _STGR,
  _STGRR,
  _STGRRe,
  _T,
  _tGA,
  _TGAI,
  _tGAI,
  _TGAr,
  _TGI,
  _tGI,
  _TGP,
  _TGR,
  _TGRA,
  _TGRAL,
  _TGRL,
  _TGRTA,
  _tGRTA,
  _TGRTAI,
  _tGRTAI,
  _TGRTAIr,
  _TGRTAISL,
  _TGRTAL,
  _TGRTAr,
  _tGRTAr,
  _TGRTI,
  _tGRTI,
  _TGRTP,
  _tGRTP,
  _TGRTPL,
  _TGRTPr,
  _TS,
  _tS,
  _TSa,
  _Ty,
  _ty,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTransitGatewayRouteRequest = struct(n0, _CTGRR, 0, [_DCB, _TGRTI, _TGAI, _Bl, _DR], [0, 0, 0, 2, 2]);
export var CreateTransitGatewayRouteResult = struct(
  n0,
  _CTGRRr,
  0,
  [_Ro],
  [
    [
      () => TransitGatewayRoute,
      {
        [_eQN]: `Route`,
        [_xN]: _ro,
      },
    ],
  ]
);
export var CreateTransitGatewayRouteTableAnnouncementRequest = struct(
  n0,
  _CTGRTAR,
  0,
  [_TGRTI, _PAIe, _TS, _DR],
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
export var CreateTransitGatewayRouteTableAnnouncementResult = struct(
  n0,
  _CTGRTARr,
  0,
  [_TGRTA],
  [
    [
      () => TransitGatewayRouteTableAnnouncement,
      {
        [_eQN]: `TransitGatewayRouteTableAnnouncement`,
        [_xN]: _tGRTA,
      },
    ],
  ]
);
export var DeleteTransitGatewayRouteRequest = struct(n0, _DTGRR, 0, [_TGRTI, _DCB, _DR], [0, 0, 2]);
export var DeleteTransitGatewayRouteResult = struct(
  n0,
  _DTGRRe,
  0,
  [_Ro],
  [
    [
      () => TransitGatewayRoute,
      {
        [_eQN]: `Route`,
        [_xN]: _ro,
      },
    ],
  ]
);
export var DeleteTransitGatewayRouteTableAnnouncementRequest = struct(n0, _DTGRTAR, 0, [_TGRTAI, _DR], [0, 2]);
export var DeleteTransitGatewayRouteTableAnnouncementResult = struct(
  n0,
  _DTGRTARe,
  0,
  [_TGRTA],
  [
    [
      () => TransitGatewayRouteTableAnnouncement,
      {
        [_eQN]: `TransitGatewayRouteTableAnnouncement`,
        [_xN]: _tGRTA,
      },
    ],
  ]
);
export var DescribeTransitGatewayRouteTableAnnouncementsRequest = struct(
  n0,
  _DTGRTARes,
  0,
  [_TGRTAIr, _Fi, _MR, _NTe, _DR],
  [
    [() => TransitGatewayRouteTableAnnouncementIdStringList, 0],
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
export var DescribeTransitGatewayRouteTableAnnouncementsResult = struct(
  n0,
  _DTGRTAResc,
  0,
  [_TGRTAr, _NTe],
  [
    [
      () => TransitGatewayRouteTableAnnouncementList,
      {
        [_eQN]: `TransitGatewayRouteTableAnnouncements`,
        [_xN]: _tGRTAr,
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
export var DisableTransitGatewayRouteTablePropagationRequest = struct(
  n0,
  _DTGRTPR,
  0,
  [_TGRTI, _TGAI, _DR, _TGRTAI],
  [0, 0, 2, 0]
);
export var DisableTransitGatewayRouteTablePropagationResult = struct(
  n0,
  _DTGRTPRi,
  0,
  [_Prop],
  [
    [
      () => TransitGatewayPropagation,
      {
        [_eQN]: `Propagation`,
        [_xN]: _prop,
      },
    ],
  ]
);
export var EnableTransitGatewayRouteTablePropagationRequest = struct(
  n0,
  _ETGRTPR,
  0,
  [_TGRTI, _TGAI, _DR, _TGRTAI],
  [0, 0, 2, 0]
);
export var EnableTransitGatewayRouteTablePropagationResult = struct(
  n0,
  _ETGRTPRn,
  0,
  [_Prop],
  [
    [
      () => TransitGatewayPropagation,
      {
        [_eQN]: `Propagation`,
        [_xN]: _prop,
      },
    ],
  ]
);
export var GetTransitGatewayRouteTablePropagationsRequest = struct(
  n0,
  _GTGRTPR,
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
export var GetTransitGatewayRouteTablePropagationsResult = struct(
  n0,
  _GTGRTPRe,
  0,
  [_TGRTP, _NTe],
  [
    [
      () => TransitGatewayRouteTablePropagationList,
      {
        [_eQN]: `TransitGatewayRouteTablePropagations`,
        [_xN]: _tGRTP,
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
export var ReplaceTransitGatewayRouteRequest = struct(n0, _RTGRR, 0, [_DCB, _TGRTI, _TGAI, _Bl, _DR], [0, 0, 0, 2, 2]);
export var ReplaceTransitGatewayRouteResult = struct(
  n0,
  _RTGRRe,
  0,
  [_Ro],
  [
    [
      () => TransitGatewayRoute,
      {
        [_eQN]: `Route`,
        [_xN]: _ro,
      },
    ],
  ]
);
export var SearchTransitGatewayRoutesRequest = struct(
  n0,
  _STGRR,
  0,
  [_TGRTI, _Fi, _MR, _DR],
  [
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    2,
  ]
);
export var SearchTransitGatewayRoutesResult = struct(
  n0,
  _STGRRe,
  0,
  [_Rou, _ARAd],
  [
    [
      () => TransitGatewayRouteList,
      {
        [_eQN]: `RouteSet`,
        [_xN]: _rSou,
      },
    ],
    [
      2,
      {
        [_eQN]: `AdditionalRoutesAvailable`,
        [_xN]: _aRAd,
      },
    ],
  ]
);
export var TransitGatewayPropagation = struct(
  n0,
  _TGP,
  0,
  [_TGAI, _RIes, _RTe, _TGRTI, _St, _TGRTAI],
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
    [
      0,
      {
        [_eQN]: `TransitGatewayRouteTableAnnouncementId`,
        [_xN]: _tGRTAI,
      },
    ],
  ]
);
export var TransitGatewayRoute = struct(
  n0,
  _TGR,
  0,
  [_DCB, _PLI, _TGRTAI, _TGAr, _Ty, _St],
  [
    [
      0,
      {
        [_eQN]: `DestinationCidrBlock`,
        [_xN]: _dCB,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrefixListId`,
        [_xN]: _pLI,
      },
    ],
    [
      0,
      {
        [_eQN]: `TransitGatewayRouteTableAnnouncementId`,
        [_xN]: _tGRTAI,
      },
    ],
    [
      () => TransitGatewayRouteAttachmentList,
      {
        [_eQN]: `TransitGatewayAttachments`,
        [_xN]: _tGA,
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
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var TransitGatewayRouteAttachment = struct(
  n0,
  _TGRA,
  0,
  [_RIes, _TGAI, _RTe],
  [
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
        [_eQN]: `TransitGatewayAttachmentId`,
        [_xN]: _tGAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
      },
    ],
  ]
);
export var TransitGatewayRouteTableAnnouncement = struct(
  n0,
  _TGRTA,
  0,
  [_TGRTAI, _TGI, _CNIor, _PTGI, _PCNI, _PAIe, _ADn, _TGRTI, _St, _CTre, _T],
  [
    [
      0,
      {
        [_eQN]: `TransitGatewayRouteTableAnnouncementId`,
        [_xN]: _tGRTAI,
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
        [_eQN]: `CoreNetworkId`,
        [_xN]: _cNIo,
      },
    ],
    [
      0,
      {
        [_eQN]: `PeerTransitGatewayId`,
        [_xN]: _pTGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `PeerCoreNetworkId`,
        [_xN]: _pCNI,
      },
    ],
    [
      0,
      {
        [_eQN]: `PeeringAttachmentId`,
        [_xN]: _pAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `AnnouncementDirection`,
        [_xN]: _aDn,
      },
    ],
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
export var TransitGatewayRouteTablePropagation = struct(
  n0,
  _TGRTPr,
  0,
  [_TGAI, _RIes, _RTe, _St, _TGRTAI],
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
    [
      0,
      {
        [_eQN]: `TransitGatewayRouteTableAnnouncementId`,
        [_xN]: _tGRTAI,
      },
    ],
  ]
);
export var TransitGatewayRouteAttachmentList = list(n0, _TGRAL, 0, [
  () => TransitGatewayRouteAttachment,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayRouteList = list(n0, _TGRL, 0, [
  () => TransitGatewayRoute,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayRouteTableAnnouncementIdStringList = list(n0, _TGRTAISL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayRouteTableAnnouncementList = list(n0, _TGRTAL, 0, [
  () => TransitGatewayRouteTableAnnouncement,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayRouteTablePropagationList = list(n0, _TGRTPL, 0, [
  () => TransitGatewayRouteTablePropagation,
  {
    [_xN]: _it,
  },
]);
export var CreateTransitGatewayRoute = op(
  n0,
  _CTGRre,
  0,
  () => CreateTransitGatewayRouteRequest,
  () => CreateTransitGatewayRouteResult
);
export var CreateTransitGatewayRouteTableAnnouncement = op(
  n0,
  _CTGRTA,
  0,
  () => CreateTransitGatewayRouteTableAnnouncementRequest,
  () => CreateTransitGatewayRouteTableAnnouncementResult
);
export var DeleteTransitGatewayRoute = op(
  n0,
  _DTGRel,
  0,
  () => DeleteTransitGatewayRouteRequest,
  () => DeleteTransitGatewayRouteResult
);
export var DeleteTransitGatewayRouteTableAnnouncement = op(
  n0,
  _DTGRTA,
  0,
  () => DeleteTransitGatewayRouteTableAnnouncementRequest,
  () => DeleteTransitGatewayRouteTableAnnouncementResult
);
export var DescribeTransitGatewayRouteTableAnnouncements = op(
  n0,
  _DTGRTAe,
  0,
  () => DescribeTransitGatewayRouteTableAnnouncementsRequest,
  () => DescribeTransitGatewayRouteTableAnnouncementsResult
);
export var DisableTransitGatewayRouteTablePropagation = op(
  n0,
  _DTGRTP,
  0,
  () => DisableTransitGatewayRouteTablePropagationRequest,
  () => DisableTransitGatewayRouteTablePropagationResult
);
export var EnableTransitGatewayRouteTablePropagation = op(
  n0,
  _ETGRTP,
  0,
  () => EnableTransitGatewayRouteTablePropagationRequest,
  () => EnableTransitGatewayRouteTablePropagationResult
);
export var GetTransitGatewayRouteTablePropagations = op(
  n0,
  _GTGRTP,
  0,
  () => GetTransitGatewayRouteTablePropagationsRequest,
  () => GetTransitGatewayRouteTablePropagationsResult
);
export var ReplaceTransitGatewayRoute = op(
  n0,
  _RTGR,
  0,
  () => ReplaceTransitGatewayRouteRequest,
  () => ReplaceTransitGatewayRouteResult
);
export var SearchTransitGatewayRoutes = op(
  n0,
  _STGR,
  0,
  () => SearchTransitGatewayRoutesRequest,
  () => SearchTransitGatewayRoutesResult
);

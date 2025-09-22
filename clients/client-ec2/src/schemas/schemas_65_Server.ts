// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _APs,
  _APsa,
  _aPSs,
  _ARP,
  _aRP,
  _BO,
  _bO,
  _BSf,
  _bSf,
  _BSg,
  _bSg,
  _CRSE,
  _CRSER,
  _CRSERr,
  _CRSP,
  _CRSPR,
  _CRSPRr,
  _CT,
  _DR,
  _DRSE,
  _DRSEe,
  _DRSER,
  _DRSERe,
  _DRSERes,
  _DRSEResc,
  _DRSP,
  _DRSPe,
  _DRSPR,
  _DRSPRe,
  _DRSPRes,
  _DRSPResc,
  _EA,
  _eA,
  _EEA,
  _eEA,
  _EEI,
  _eEI,
  _EIn,
  _eIn,
  _eQN,
  _Fi,
  _Fil,
  _FR,
  _fR,
  _GRSRD,
  _GRSRDR,
  _GRSRDRe,
  _it,
  _Med,
  _med,
  _MR,
  _NHI,
  _nHI,
  _NTe,
  _nTe,
  _PAe,
  _pAe,
  _PAee,
  _pAee,
  _PLD,
  _pLD,
  _Pre,
  _pre,
  _RID,
  _rIDS,
  _RIS,
  _rISo,
  _rISR,
  _RISRo,
  _Rou,
  _RSBO,
  _RSBOR,
  _RSBS,
  _RSBSo,
  _RSE,
  _rSE,
  _RSEI,
  _rSEI,
  _RSEIo,
  _RSEL,
  _RSEo,
  _rSES,
  _RSI,
  _rSI,
  _rSou,
  _RSout,
  _rSout,
  _RSP,
  _rSP,
  _RSPI,
  _rSPI,
  _RSPIo,
  _RSPL,
  _RSPo,
  _rSPS,
  _RSRID,
  _RSRIDo,
  _RSRL,
  _RSRo,
  _RTI,
  _rTI,
  _SIu,
  _sIu,
  _St,
  _st,
  _Sta,
  _sta,
  _T,
  _TS,
  _tS,
  _TSa,
  _VI,
  _vI,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRouteServerEndpointRequest = struct(
  n0,
  _CRSER,
  0,
  [_RSI, _SIu, _CT, _DR, _TS],
  [
    0,
    0,
    [0, 4],
    2,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var CreateRouteServerEndpointResult = struct(
  n0,
  _CRSERr,
  0,
  [_RSE],
  [
    [
      () => RouteServerEndpoint,
      {
        [_eQN]: `RouteServerEndpoint`,
        [_xN]: _rSE,
      },
    ],
  ]
);
export var CreateRouteServerPeerRequest = struct(
  n0,
  _CRSPR,
  0,
  [_RSEI, _PAe, _BO, _DR, _TS],
  [
    0,
    0,
    () => RouteServerBgpOptionsRequest,
    2,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var CreateRouteServerPeerResult = struct(
  n0,
  _CRSPRr,
  0,
  [_RSP],
  [
    [
      () => RouteServerPeer,
      {
        [_eQN]: `RouteServerPeer`,
        [_xN]: _rSP,
      },
    ],
  ]
);
export var DeleteRouteServerEndpointRequest = struct(n0, _DRSER, 0, [_RSEI, _DR], [0, 2]);
export var DeleteRouteServerEndpointResult = struct(
  n0,
  _DRSERe,
  0,
  [_RSE],
  [
    [
      () => RouteServerEndpoint,
      {
        [_eQN]: `RouteServerEndpoint`,
        [_xN]: _rSE,
      },
    ],
  ]
);
export var DeleteRouteServerPeerRequest = struct(n0, _DRSPR, 0, [_RSPI, _DR], [0, 2]);
export var DeleteRouteServerPeerResult = struct(
  n0,
  _DRSPRe,
  0,
  [_RSP],
  [
    [
      () => RouteServerPeer,
      {
        [_eQN]: `RouteServerPeer`,
        [_xN]: _rSP,
      },
    ],
  ]
);
export var DescribeRouteServerEndpointsRequest = struct(
  n0,
  _DRSERes,
  0,
  [_RSEIo, _NTe, _MR, _Fi, _DR],
  [
    [
      64 | 0,
      {
        [_xN]: _RSEI,
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
export var DescribeRouteServerEndpointsResult = struct(
  n0,
  _DRSEResc,
  0,
  [_RSEo, _NTe],
  [
    [
      () => RouteServerEndpointsList,
      {
        [_eQN]: `RouteServerEndpointSet`,
        [_xN]: _rSES,
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
export var DescribeRouteServerPeersRequest = struct(
  n0,
  _DRSPRes,
  0,
  [_RSPIo, _NTe, _MR, _Fi, _DR],
  [
    [
      64 | 0,
      {
        [_xN]: _RSPI,
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
export var DescribeRouteServerPeersResult = struct(
  n0,
  _DRSPResc,
  0,
  [_RSPo, _NTe],
  [
    [
      () => RouteServerPeersList,
      {
        [_eQN]: `RouteServerPeerSet`,
        [_xN]: _rSPS,
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
export var GetRouteServerRoutingDatabaseRequest = struct(
  n0,
  _GRSRDR,
  0,
  [_RSI, _NTe, _MR, _DR, _Fi],
  [
    0,
    0,
    1,
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var GetRouteServerRoutingDatabaseResult = struct(
  n0,
  _GRSRDRe,
  0,
  [_ARP, _Rou, _NTe],
  [
    [
      2,
      {
        [_eQN]: `AreRoutesPersisted`,
        [_xN]: _aRP,
      },
    ],
    [
      () => RouteServerRouteList,
      {
        [_eQN]: `RouteSet`,
        [_xN]: _rSou,
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
export var RouteServerBfdStatus = struct(
  n0,
  _RSBS,
  0,
  [_Sta],
  [
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var RouteServerBgpOptions = struct(
  n0,
  _RSBO,
  0,
  [_PAee, _PLD],
  [
    [
      1,
      {
        [_eQN]: `PeerAsn`,
        [_xN]: _pAee,
      },
    ],
    [
      0,
      {
        [_eQN]: `PeerLivenessDetection`,
        [_xN]: _pLD,
      },
    ],
  ]
);
export var RouteServerBgpOptionsRequest = struct(n0, _RSBOR, 0, [_PAee, _PLD], [1, 0]);
export var RouteServerBgpStatus = struct(
  n0,
  _RSBSo,
  0,
  [_Sta],
  [
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var RouteServerEndpoint = struct(
  n0,
  _RSE,
  0,
  [_RSI, _RSEI, _VI, _SIu, _EIn, _EA, _St, _FR, _T],
  [
    [
      0,
      {
        [_eQN]: `RouteServerId`,
        [_xN]: _rSI,
      },
    ],
    [
      0,
      {
        [_eQN]: `RouteServerEndpointId`,
        [_xN]: _rSEI,
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
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
    [
      0,
      {
        [_eQN]: `EniId`,
        [_xN]: _eIn,
      },
    ],
    [
      0,
      {
        [_eQN]: `EniAddress`,
        [_xN]: _eA,
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
        [_eQN]: `FailureReason`,
        [_xN]: _fR,
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
export var RouteServerPeer = struct(
  n0,
  _RSP,
  0,
  [_RSPI, _RSEI, _RSI, _VI, _SIu, _St, _FR, _EEI, _EEA, _PAe, _BO, _BSg, _BSf, _T],
  [
    [
      0,
      {
        [_eQN]: `RouteServerPeerId`,
        [_xN]: _rSPI,
      },
    ],
    [
      0,
      {
        [_eQN]: `RouteServerEndpointId`,
        [_xN]: _rSEI,
      },
    ],
    [
      0,
      {
        [_eQN]: `RouteServerId`,
        [_xN]: _rSI,
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
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
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
        [_eQN]: `FailureReason`,
        [_xN]: _fR,
      },
    ],
    [
      0,
      {
        [_eQN]: `EndpointEniId`,
        [_xN]: _eEI,
      },
    ],
    [
      0,
      {
        [_eQN]: `EndpointEniAddress`,
        [_xN]: _eEA,
      },
    ],
    [
      0,
      {
        [_eQN]: `PeerAddress`,
        [_xN]: _pAe,
      },
    ],
    [
      () => RouteServerBgpOptions,
      {
        [_eQN]: `BgpOptions`,
        [_xN]: _bO,
      },
    ],
    [
      () => RouteServerBgpStatus,
      {
        [_eQN]: `BgpStatus`,
        [_xN]: _bSg,
      },
    ],
    [
      () => RouteServerBfdStatus,
      {
        [_eQN]: `BfdStatus`,
        [_xN]: _bSf,
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
export var RouteServerRoute = struct(
  n0,
  _RSRo,
  0,
  [_RSEI, _RSPI, _RID, _RSout, _Pre, _APs, _Med, _NHI],
  [
    [
      0,
      {
        [_eQN]: `RouteServerEndpointId`,
        [_xN]: _rSEI,
      },
    ],
    [
      0,
      {
        [_eQN]: `RouteServerPeerId`,
        [_xN]: _rSPI,
      },
    ],
    [
      () => RouteServerRouteInstallationDetails,
      {
        [_eQN]: `RouteInstallationDetailSet`,
        [_xN]: _rIDS,
      },
    ],
    [
      0,
      {
        [_eQN]: `RouteStatus`,
        [_xN]: _rSout,
      },
    ],
    [
      0,
      {
        [_eQN]: `Prefix`,
        [_xN]: _pre,
      },
    ],
    [
      () => AsPath,
      {
        [_eQN]: `AsPathSet`,
        [_xN]: _aPSs,
      },
    ],
    [
      1,
      {
        [_eQN]: `Med`,
        [_xN]: _med,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextHopIp`,
        [_xN]: _nHI,
      },
    ],
  ]
);
export var RouteServerRouteInstallationDetail = struct(
  n0,
  _RSRID,
  0,
  [_RTI, _RIS, _RISRo],
  [
    [
      0,
      {
        [_eQN]: `RouteTableId`,
        [_xN]: _rTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `RouteInstallationStatus`,
        [_xN]: _rISo,
      },
    ],
    [
      0,
      {
        [_eQN]: `RouteInstallationStatusReason`,
        [_xN]: _rISR,
      },
    ],
  ]
);
export var AsPath = list(n0, _APsa, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var RouteServerEndpointIdsList = 64 | 0;

export var RouteServerEndpointsList = list(n0, _RSEL, 0, [
  () => RouteServerEndpoint,
  {
    [_xN]: _it,
  },
]);
export var RouteServerPeerIdsList = 64 | 0;

export var RouteServerPeersList = list(n0, _RSPL, 0, [
  () => RouteServerPeer,
  {
    [_xN]: _it,
  },
]);
export var RouteServerRouteInstallationDetails = list(n0, _RSRIDo, 0, [
  () => RouteServerRouteInstallationDetail,
  {
    [_xN]: _it,
  },
]);
export var RouteServerRouteList = list(n0, _RSRL, 0, [
  () => RouteServerRoute,
  {
    [_xN]: _it,
  },
]);
export var CreateRouteServerEndpoint = op(
  n0,
  _CRSE,
  0,
  () => CreateRouteServerEndpointRequest,
  () => CreateRouteServerEndpointResult
);
export var CreateRouteServerPeer = op(
  n0,
  _CRSP,
  0,
  () => CreateRouteServerPeerRequest,
  () => CreateRouteServerPeerResult
);
export var DeleteRouteServerEndpoint = op(
  n0,
  _DRSE,
  0,
  () => DeleteRouteServerEndpointRequest,
  () => DeleteRouteServerEndpointResult
);
export var DeleteRouteServerPeer = op(
  n0,
  _DRSP,
  0,
  () => DeleteRouteServerPeerRequest,
  () => DeleteRouteServerPeerResult
);
export var DescribeRouteServerEndpoints = op(
  n0,
  _DRSEe,
  0,
  () => DescribeRouteServerEndpointsRequest,
  () => DescribeRouteServerEndpointsResult
);
export var DescribeRouteServerPeers = op(
  n0,
  _DRSPe,
  0,
  () => DescribeRouteServerPeersRequest,
  () => DescribeRouteServerPeersResult
);
export var GetRouteServerRoutingDatabase = op(
  n0,
  _GRSRD,
  0,
  () => GetRouteServerRoutingDatabaseRequest,
  () => GetRouteServerRoutingDatabaseResult
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BCg,
  _bCg,
  _BO,
  _BSg,
  _bSg,
  _CPC,
  _cPC,
  _CTGC,
  _CTGCP,
  _CTGCPR,
  _CTGCPRr,
  _CTGCR,
  _CTGCRO,
  _CTGCRr,
  _CTre,
  _cTre,
  _DR,
  _DTGC,
  _DTGCe,
  _DTGCP,
  _DTGCPe,
  _DTGCPR,
  _DTGCPRe,
  _DTGCPRes,
  _DTGCPResc,
  _DTGCR,
  _DTGCRe,
  _DTGCRes,
  _DTGCResc,
  _eQN,
  _Fi,
  _Fil,
  _ICBn,
  _iCBn,
  _ICBSL,
  _it,
  _MR,
  _NTe,
  _nTe,
  _op,
  _Opt,
  _PAe,
  _pAe,
  _PAee,
  _pAee,
  _Pr,
  _pr,
  _St,
  _st,
  _T,
  _TGA,
  _TGABC,
  _TGABCL,
  _TGAI,
  _tGAI,
  _TGAIr,
  _tGAran,
  _tGArans,
  _TGAransi,
  _TGC,
  _tGC,
  _TGCL,
  _TGCO,
  _TGCP,
  _tGCP,
  _TGCPC,
  _TGCPI,
  _tGCPI,
  _TGCPIr,
  _TGCPISL,
  _TGCPL,
  _TGCPr,
  _tGCPS,
  _TGCr,
  _TGCRBO,
  _tGCS,
  _TGI,
  _tGI,
  _TS,
  _tS,
  _TSa,
  _TTGAI,
  _tTGAI,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTransitGatewayConnectPeerRequest = struct(
  n0,
  _CTGCPR,
  0,
  [_TGAI, _TGA, _PAe, _BO, _ICBn, _TS, _DR],
  [
    0,
    0,
    0,
    () => TransitGatewayConnectRequestBgpOptions,
    [() => InsideCidrBlocksStringList, 0],
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
  ]
);
export var CreateTransitGatewayConnectPeerResult = struct(
  n0,
  _CTGCPRr,
  0,
  [_TGCP],
  [
    [
      () => TransitGatewayConnectPeer,
      {
        [_eQN]: `TransitGatewayConnectPeer`,
        [_xN]: _tGCP,
      },
    ],
  ]
);
export var CreateTransitGatewayConnectRequest = struct(
  n0,
  _CTGCR,
  0,
  [_TTGAI, _Opt, _TS, _DR],
  [
    0,
    () => CreateTransitGatewayConnectRequestOptions,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
  ]
);
export var CreateTransitGatewayConnectRequestOptions = struct(n0, _CTGCRO, 0, [_Pr], [0]);
export var CreateTransitGatewayConnectResult = struct(
  n0,
  _CTGCRr,
  0,
  [_TGC],
  [
    [
      () => TransitGatewayConnect,
      {
        [_eQN]: `TransitGatewayConnect`,
        [_xN]: _tGC,
      },
    ],
  ]
);
export var DeleteTransitGatewayConnectPeerRequest = struct(n0, _DTGCPR, 0, [_TGCPI, _DR], [0, 2]);
export var DeleteTransitGatewayConnectPeerResult = struct(
  n0,
  _DTGCPRe,
  0,
  [_TGCP],
  [
    [
      () => TransitGatewayConnectPeer,
      {
        [_eQN]: `TransitGatewayConnectPeer`,
        [_xN]: _tGCP,
      },
    ],
  ]
);
export var DeleteTransitGatewayConnectRequest = struct(n0, _DTGCR, 0, [_TGAI, _DR], [0, 2]);
export var DeleteTransitGatewayConnectResult = struct(
  n0,
  _DTGCRe,
  0,
  [_TGC],
  [
    [
      () => TransitGatewayConnect,
      {
        [_eQN]: `TransitGatewayConnect`,
        [_xN]: _tGC,
      },
    ],
  ]
);
export var DescribeTransitGatewayConnectPeersRequest = struct(
  n0,
  _DTGCPRes,
  0,
  [_TGCPIr, _Fi, _MR, _NTe, _DR],
  [
    [() => TransitGatewayConnectPeerIdStringList, 0],
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
export var DescribeTransitGatewayConnectPeersResult = struct(
  n0,
  _DTGCPResc,
  0,
  [_TGCPr, _NTe],
  [
    [
      () => TransitGatewayConnectPeerList,
      {
        [_eQN]: `TransitGatewayConnectPeerSet`,
        [_xN]: _tGCPS,
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
export var DescribeTransitGatewayConnectsRequest = struct(
  n0,
  _DTGCRes,
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
export var DescribeTransitGatewayConnectsResult = struct(
  n0,
  _DTGCResc,
  0,
  [_TGCr, _NTe],
  [
    [
      () => TransitGatewayConnectList,
      {
        [_eQN]: `TransitGatewayConnectSet`,
        [_xN]: _tGCS,
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
export var TransitGatewayAttachmentBgpConfiguration = struct(
  n0,
  _TGABC,
  0,
  [_TGAransi, _PAee, _TGA, _PAe, _BSg],
  [
    [
      1,
      {
        [_eQN]: `TransitGatewayAsn`,
        [_xN]: _tGAran,
      },
    ],
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
        [_eQN]: `TransitGatewayAddress`,
        [_xN]: _tGArans,
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
      0,
      {
        [_eQN]: `BgpStatus`,
        [_xN]: _bSg,
      },
    ],
  ]
);
export var TransitGatewayConnect = struct(
  n0,
  _TGC,
  0,
  [_TGAI, _TTGAI, _TGI, _St, _CTre, _Opt, _T],
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
        [_eQN]: `TransportTransitGatewayAttachmentId`,
        [_xN]: _tTGAI,
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
      () => TransitGatewayConnectOptions,
      {
        [_eQN]: `Options`,
        [_xN]: _op,
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
export var TransitGatewayConnectOptions = struct(
  n0,
  _TGCO,
  0,
  [_Pr],
  [
    [
      0,
      {
        [_eQN]: `Protocol`,
        [_xN]: _pr,
      },
    ],
  ]
);
export var TransitGatewayConnectPeer = struct(
  n0,
  _TGCP,
  0,
  [_TGAI, _TGCPI, _St, _CTre, _CPC, _T],
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
        [_eQN]: `TransitGatewayConnectPeerId`,
        [_xN]: _tGCPI,
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
      () => TransitGatewayConnectPeerConfiguration,
      {
        [_eQN]: `ConnectPeerConfiguration`,
        [_xN]: _cPC,
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
export var TransitGatewayConnectPeerConfiguration = struct(
  n0,
  _TGCPC,
  0,
  [_TGA, _PAe, _ICBn, _Pr, _BCg],
  [
    [
      0,
      {
        [_eQN]: `TransitGatewayAddress`,
        [_xN]: _tGArans,
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
      () => InsideCidrBlocksStringList,
      {
        [_eQN]: `InsideCidrBlocks`,
        [_xN]: _iCBn,
      },
    ],
    [
      0,
      {
        [_eQN]: `Protocol`,
        [_xN]: _pr,
      },
    ],
    [
      () => TransitGatewayAttachmentBgpConfigurationList,
      {
        [_eQN]: `BgpConfigurations`,
        [_xN]: _bCg,
      },
    ],
  ]
);
export var TransitGatewayConnectRequestBgpOptions = struct(n0, _TGCRBO, 0, [_PAee], [1]);
export var InsideCidrBlocksStringList = list(n0, _ICBSL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayAttachmentBgpConfigurationList = list(n0, _TGABCL, 0, [
  () => TransitGatewayAttachmentBgpConfiguration,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayConnectList = list(n0, _TGCL, 0, [
  () => TransitGatewayConnect,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayConnectPeerIdStringList = list(n0, _TGCPISL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayConnectPeerList = list(n0, _TGCPL, 0, [
  () => TransitGatewayConnectPeer,
  {
    [_xN]: _it,
  },
]);
export var CreateTransitGatewayConnect = op(
  n0,
  _CTGC,
  0,
  () => CreateTransitGatewayConnectRequest,
  () => CreateTransitGatewayConnectResult
);
export var CreateTransitGatewayConnectPeer = op(
  n0,
  _CTGCP,
  0,
  () => CreateTransitGatewayConnectPeerRequest,
  () => CreateTransitGatewayConnectPeerResult
);
export var DeleteTransitGatewayConnect = op(
  n0,
  _DTGC,
  0,
  () => DeleteTransitGatewayConnectRequest,
  () => DeleteTransitGatewayConnectResult
);
export var DeleteTransitGatewayConnectPeer = op(
  n0,
  _DTGCP,
  0,
  () => DeleteTransitGatewayConnectPeerRequest,
  () => DeleteTransitGatewayConnectPeerResult
);
export var DescribeTransitGatewayConnectPeers = op(
  n0,
  _DTGCPe,
  0,
  () => DescribeTransitGatewayConnectPeersRequest,
  () => DescribeTransitGatewayConnectPeersResult
);
export var DescribeTransitGatewayConnects = op(
  n0,
  _DTGCe,
  0,
  () => DescribeTransitGatewayConnectsRequest,
  () => DescribeTransitGatewayConnectsResult
);

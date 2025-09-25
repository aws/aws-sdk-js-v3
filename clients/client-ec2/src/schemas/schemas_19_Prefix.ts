// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Bl,
  _bl,
  _CTGPLR,
  _CTGPLRR,
  _CTGPLRRr,
  _DR,
  _DTGPLR,
  _DTGPLRR,
  _DTGPLRRe,
  _eQN,
  _Fi,
  _Fil,
  _GTGPLR,
  _GTGPLRR,
  _GTGPLRRe,
  _it,
  _MR,
  _MTGPLR,
  _MTGPLRR,
  _MTGPLRRo,
  _NTe,
  _nTe,
  _PLI,
  _pLI,
  _PLOI,
  _pLOI,
  _rIe,
  _RIes,
  _RTe,
  _rTe,
  _St,
  _st,
  _TGAI,
  _tGAI,
  _tGAr,
  _TGAra,
  _TGPLA,
  _TGPLR,
  _tGPLR,
  _TGPLRr,
  _TGPLRS,
  _tGPLRS,
  _TGRTI,
  _tGRTI,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTransitGatewayPrefixListReferenceRequest = struct(
  n0,
  _CTGPLRR,
  0,
  [_TGRTI, _PLI, _TGAI, _Bl, _DR],
  [0, 0, 0, 2, 2]
);
export var CreateTransitGatewayPrefixListReferenceResult = struct(
  n0,
  _CTGPLRRr,
  0,
  [_TGPLR],
  [
    [
      () => TransitGatewayPrefixListReference,
      {
        [_eQN]: `TransitGatewayPrefixListReference`,
        [_xN]: _tGPLR,
      },
    ],
  ]
);
export var DeleteTransitGatewayPrefixListReferenceRequest = struct(n0, _DTGPLRR, 0, [_TGRTI, _PLI, _DR], [0, 0, 2]);
export var DeleteTransitGatewayPrefixListReferenceResult = struct(
  n0,
  _DTGPLRRe,
  0,
  [_TGPLR],
  [
    [
      () => TransitGatewayPrefixListReference,
      {
        [_eQN]: `TransitGatewayPrefixListReference`,
        [_xN]: _tGPLR,
      },
    ],
  ]
);
export var GetTransitGatewayPrefixListReferencesRequest = struct(
  n0,
  _GTGPLRR,
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
export var GetTransitGatewayPrefixListReferencesResult = struct(
  n0,
  _GTGPLRRe,
  0,
  [_TGPLRr, _NTe],
  [
    [
      () => TransitGatewayPrefixListReferenceSet,
      {
        [_eQN]: `TransitGatewayPrefixListReferenceSet`,
        [_xN]: _tGPLRS,
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
export var ModifyTransitGatewayPrefixListReferenceRequest = struct(
  n0,
  _MTGPLRR,
  0,
  [_TGRTI, _PLI, _TGAI, _Bl, _DR],
  [0, 0, 0, 2, 2]
);
export var ModifyTransitGatewayPrefixListReferenceResult = struct(
  n0,
  _MTGPLRRo,
  0,
  [_TGPLR],
  [
    [
      () => TransitGatewayPrefixListReference,
      {
        [_eQN]: `TransitGatewayPrefixListReference`,
        [_xN]: _tGPLR,
      },
    ],
  ]
);
export var TransitGatewayPrefixListAttachment = struct(
  n0,
  _TGPLA,
  0,
  [_TGAI, _RTe, _RIes],
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
  ]
);
export var TransitGatewayPrefixListReference = struct(
  n0,
  _TGPLR,
  0,
  [_TGRTI, _PLI, _PLOI, _St, _Bl, _TGAra],
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
        [_eQN]: `PrefixListId`,
        [_xN]: _pLI,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrefixListOwnerId`,
        [_xN]: _pLOI,
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
      2,
      {
        [_eQN]: `Blackhole`,
        [_xN]: _bl,
      },
    ],
    [
      () => TransitGatewayPrefixListAttachment,
      {
        [_eQN]: `TransitGatewayAttachment`,
        [_xN]: _tGAr,
      },
    ],
  ]
);
export var TransitGatewayPrefixListReferenceSet = list(n0, _TGPLRS, 0, [
  () => TransitGatewayPrefixListReference,
  {
    [_xN]: _it,
  },
]);
export var CreateTransitGatewayPrefixListReference = op(
  n0,
  _CTGPLR,
  0,
  () => CreateTransitGatewayPrefixListReferenceRequest,
  () => CreateTransitGatewayPrefixListReferenceResult
);
export var DeleteTransitGatewayPrefixListReference = op(
  n0,
  _DTGPLR,
  0,
  () => DeleteTransitGatewayPrefixListReferenceRequest,
  () => DeleteTransitGatewayPrefixListReferenceResult
);
export var GetTransitGatewayPrefixListReferences = op(
  n0,
  _GTGPLR,
  0,
  () => GetTransitGatewayPrefixListReferencesRequest,
  () => GetTransitGatewayPrefixListReferencesResult
);
export var ModifyTransitGatewayPrefixListReference = op(
  n0,
  _MTGPLR,
  0,
  () => ModifyTransitGatewayPrefixListReferenceRequest,
  () => ModifyTransitGatewayPrefixListReferenceResult
);

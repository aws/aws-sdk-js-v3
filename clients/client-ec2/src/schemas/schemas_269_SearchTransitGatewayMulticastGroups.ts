// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _GIA,
  _gIA,
  _GM,
  _gM,
  _GS,
  _gSr,
  _it,
  _MG,
  _mG,
  _MR,
  _MTe,
  _mTe,
  _NII,
  _nII,
  _NTe,
  _nTe,
  _rIe,
  _RIes,
  _ROI,
  _rOI,
  _RTe,
  _rTe,
  _SIu,
  _sIu,
  _STGMG,
  _STGMGR,
  _STGMGRe,
  _STo,
  _sTo,
  _TGAI,
  _tGAI,
  _TGMDI,
  _TGMG,
  _TGMGL,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SearchTransitGatewayMulticastGroupsRequest = struct(
  n0,
  _STGMGR,
  0,
  [_TGMDI, _Fi, _MR, _NTe, _DR],
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
export var SearchTransitGatewayMulticastGroupsResult = struct(
  n0,
  _STGMGRe,
  0,
  [_MG, _NTe],
  [
    [
      () => TransitGatewayMulticastGroupList,
      {
        [_eQN]: `MulticastGroups`,
        [_xN]: _mG,
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
export var TransitGatewayMulticastGroup = struct(
  n0,
  _TGMG,
  0,
  [_GIA, _TGAI, _SIu, _RIes, _RTe, _ROI, _NII, _GM, _GS, _MTe, _STo],
  [
    [
      0,
      {
        [_eQN]: `GroupIpAddress`,
        [_xN]: _gIA,
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
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
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
        [_eQN]: `ResourceOwnerId`,
        [_xN]: _rOI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      2,
      {
        [_eQN]: `GroupMember`,
        [_xN]: _gM,
      },
    ],
    [
      2,
      {
        [_eQN]: `GroupSource`,
        [_xN]: _gSr,
      },
    ],
    [
      0,
      {
        [_eQN]: `MemberType`,
        [_xN]: _mTe,
      },
    ],
    [
      0,
      {
        [_eQN]: `SourceType`,
        [_xN]: _sTo,
      },
    ],
  ]
);
export var TransitGatewayMulticastGroupList = list(n0, _TGMGL, 0, [
  () => TransitGatewayMulticastGroup,
  {
    [_xN]: _it,
  },
]);
export var SearchTransitGatewayMulticastGroups = op(
  n0,
  _STGMG,
  0,
  () => SearchTransitGatewayMulticastGroupsRequest,
  () => SearchTransitGatewayMulticastGroupsResult
);

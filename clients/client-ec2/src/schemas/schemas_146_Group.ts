// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DMGM,
  _dMGM,
  _DMGS,
  _dMGS,
  _DNII,
  _dNII,
  _DR,
  _DTGMGM,
  _DTGMGMR,
  _DTGMGMRe,
  _DTGMGS,
  _DTGMGSR,
  _DTGMGSRe,
  _eQN,
  _GIA,
  _gIA,
  _it,
  _NIIe,
  _RMGM,
  _rMGM,
  _RMGS,
  _rMGS,
  _RNII,
  _rNII,
  _RTGMGM,
  _RTGMGMR,
  _RTGMGMRe,
  _RTGMGS,
  _RTGMGSR,
  _RTGMGSRe,
  _TGMDGM,
  _TGMDGS,
  _TGMDI,
  _tGMDI,
  _TGMRGM,
  _TGMRGS,
  _TGNIIL,
  _xN,
  n0,
  ValueStringList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterTransitGatewayMulticastGroupMembersRequest = struct(
  n0,
  _DTGMGMR,
  0,
  [_TGMDI, _GIA, _NIIe, _DR],
  [0, 0, [() => TransitGatewayNetworkInterfaceIdList, 0], 2]
);
export var DeregisterTransitGatewayMulticastGroupMembersResult = struct(
  n0,
  _DTGMGMRe,
  0,
  [_DMGM],
  [
    [
      () => TransitGatewayMulticastDeregisteredGroupMembers,
      {
        [_eQN]: `DeregisteredMulticastGroupMembers`,
        [_xN]: _dMGM,
      },
    ],
  ]
);
export var DeregisterTransitGatewayMulticastGroupSourcesRequest = struct(
  n0,
  _DTGMGSR,
  0,
  [_TGMDI, _GIA, _NIIe, _DR],
  [0, 0, [() => TransitGatewayNetworkInterfaceIdList, 0], 2]
);
export var DeregisterTransitGatewayMulticastGroupSourcesResult = struct(
  n0,
  _DTGMGSRe,
  0,
  [_DMGS],
  [
    [
      () => TransitGatewayMulticastDeregisteredGroupSources,
      {
        [_eQN]: `DeregisteredMulticastGroupSources`,
        [_xN]: _dMGS,
      },
    ],
  ]
);
export var RegisterTransitGatewayMulticastGroupMembersRequest = struct(
  n0,
  _RTGMGMR,
  0,
  [_TGMDI, _GIA, _NIIe, _DR],
  [0, 0, [() => TransitGatewayNetworkInterfaceIdList, 0], 2]
);
export var RegisterTransitGatewayMulticastGroupMembersResult = struct(
  n0,
  _RTGMGMRe,
  0,
  [_RMGM],
  [
    [
      () => TransitGatewayMulticastRegisteredGroupMembers,
      {
        [_eQN]: `RegisteredMulticastGroupMembers`,
        [_xN]: _rMGM,
      },
    ],
  ]
);
export var RegisterTransitGatewayMulticastGroupSourcesRequest = struct(
  n0,
  _RTGMGSR,
  0,
  [_TGMDI, _GIA, _NIIe, _DR],
  [0, 0, [() => TransitGatewayNetworkInterfaceIdList, 0], 2]
);
export var RegisterTransitGatewayMulticastGroupSourcesResult = struct(
  n0,
  _RTGMGSRe,
  0,
  [_RMGS],
  [
    [
      () => TransitGatewayMulticastRegisteredGroupSources,
      {
        [_eQN]: `RegisteredMulticastGroupSources`,
        [_xN]: _rMGS,
      },
    ],
  ]
);
export var TransitGatewayMulticastDeregisteredGroupMembers = struct(
  n0,
  _TGMDGM,
  0,
  [_TGMDI, _DNII, _GIA],
  [
    [
      0,
      {
        [_eQN]: `TransitGatewayMulticastDomainId`,
        [_xN]: _tGMDI,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `DeregisteredNetworkInterfaceIds`,
        [_xN]: _dNII,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupIpAddress`,
        [_xN]: _gIA,
      },
    ],
  ]
);
export var TransitGatewayMulticastDeregisteredGroupSources = struct(
  n0,
  _TGMDGS,
  0,
  [_TGMDI, _DNII, _GIA],
  [
    [
      0,
      {
        [_eQN]: `TransitGatewayMulticastDomainId`,
        [_xN]: _tGMDI,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `DeregisteredNetworkInterfaceIds`,
        [_xN]: _dNII,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupIpAddress`,
        [_xN]: _gIA,
      },
    ],
  ]
);
export var TransitGatewayMulticastRegisteredGroupMembers = struct(
  n0,
  _TGMRGM,
  0,
  [_TGMDI, _RNII, _GIA],
  [
    [
      0,
      {
        [_eQN]: `TransitGatewayMulticastDomainId`,
        [_xN]: _tGMDI,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `RegisteredNetworkInterfaceIds`,
        [_xN]: _rNII,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupIpAddress`,
        [_xN]: _gIA,
      },
    ],
  ]
);
export var TransitGatewayMulticastRegisteredGroupSources = struct(
  n0,
  _TGMRGS,
  0,
  [_TGMDI, _RNII, _GIA],
  [
    [
      0,
      {
        [_eQN]: `TransitGatewayMulticastDomainId`,
        [_xN]: _tGMDI,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `RegisteredNetworkInterfaceIds`,
        [_xN]: _rNII,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupIpAddress`,
        [_xN]: _gIA,
      },
    ],
  ]
);
export var TransitGatewayNetworkInterfaceIdList = list(n0, _TGNIIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var DeregisterTransitGatewayMulticastGroupMembers = op(
  n0,
  _DTGMGM,
  0,
  () => DeregisterTransitGatewayMulticastGroupMembersRequest,
  () => DeregisterTransitGatewayMulticastGroupMembersResult
);
export var DeregisterTransitGatewayMulticastGroupSources = op(
  n0,
  _DTGMGS,
  0,
  () => DeregisterTransitGatewayMulticastGroupSourcesRequest,
  () => DeregisterTransitGatewayMulticastGroupSourcesResult
);
export var RegisterTransitGatewayMulticastGroupMembers = op(
  n0,
  _RTGMGM,
  0,
  () => RegisterTransitGatewayMulticastGroupMembersRequest,
  () => RegisterTransitGatewayMulticastGroupMembersResult
);
export var RegisterTransitGatewayMulticastGroupSources = op(
  n0,
  _RTGMGS,
  0,
  () => RegisterTransitGatewayMulticastGroupSourcesRequest,
  () => RegisterTransitGatewayMulticastGroupSourcesResult
);

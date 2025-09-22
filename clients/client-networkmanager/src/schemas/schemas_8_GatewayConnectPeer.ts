// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ATGCP,
  _ATGCPR,
  _ATGCPRs,
  _DI,
  _DTGCP,
  _DTGCPR,
  _DTGCPRi,
  _GNI,
  _GTGCPA,
  _GTGCPAR,
  _GTGCPARe,
  _h,
  _hQ,
  _LI,
  _MR,
  _mR,
  _NT,
  _nT,
  _S,
  _TGCPA,
  _tGCPA,
  _TGCPAL,
  _TGCPAr,
  _TGCPAra,
  _TGCPAran,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateTransitGatewayConnectPeerRequest = struct(
  n0,
  _ATGCPR,
  0,
  [_GNI, _TGCPA, _DI, _LI],
  [[0, 1], 0, 0, 0]
);
export var AssociateTransitGatewayConnectPeerResponse = struct(
  n0,
  _ATGCPRs,
  0,
  [_TGCPAr],
  [() => TransitGatewayConnectPeerAssociation]
);
export var DisassociateTransitGatewayConnectPeerRequest = struct(
  n0,
  _DTGCPR,
  0,
  [_GNI, _TGCPA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateTransitGatewayConnectPeerResponse = struct(
  n0,
  _DTGCPRi,
  0,
  [_TGCPAr],
  [() => TransitGatewayConnectPeerAssociation]
);
export var GetTransitGatewayConnectPeerAssociationsRequest = struct(
  n0,
  _GTGCPAR,
  0,
  [_GNI, _TGCPAra, _MR, _NT],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tGCPA,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var GetTransitGatewayConnectPeerAssociationsResponse = struct(
  n0,
  _GTGCPARe,
  0,
  [_TGCPAran, _NT],
  [() => TransitGatewayConnectPeerAssociationList, 0]
);
export var TransitGatewayConnectPeerAssociation = struct(n0, _TGCPAr, 0, [_TGCPA, _GNI, _DI, _LI, _S], [0, 0, 0, 0, 0]);
export var TransitGatewayConnectPeerArnList = 64 | 0;

export var TransitGatewayConnectPeerAssociationList = list(n0, _TGCPAL, 0, () => TransitGatewayConnectPeerAssociation);
export var AssociateTransitGatewayConnectPeer = op(
  n0,
  _ATGCP,
  {
    [_h]: ["POST", "/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations", 200],
  },
  () => AssociateTransitGatewayConnectPeerRequest,
  () => AssociateTransitGatewayConnectPeerResponse
);
export var DisassociateTransitGatewayConnectPeer = op(
  n0,
  _DTGCP,
  {
    [_h]: [
      "DELETE",
      "/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations/{TransitGatewayConnectPeerArn}",
      200,
    ],
  },
  () => DisassociateTransitGatewayConnectPeerRequest,
  () => DisassociateTransitGatewayConnectPeerResponse
);
export var GetTransitGatewayConnectPeerAssociations = op(
  n0,
  _GTGCPA,
  {
    [_h]: ["GET", "/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations", 200],
  },
  () => GetTransitGatewayConnectPeerAssociationsRequest,
  () => GetTransitGatewayConnectPeerAssociationsResponse
);

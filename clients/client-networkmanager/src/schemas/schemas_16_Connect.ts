// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACP,
  _ACPR,
  _ACPRs,
  _CPA,
  _CPAL,
  _CPAo,
  _CPI,
  _cPI,
  _CPIo,
  _DCPi,
  _DCPRi,
  _DCPRis,
  _DI,
  _GCPA,
  _GCPAR,
  _GCPARe,
  _GNI,
  _h,
  _hQ,
  _LI,
  _MR,
  _mR,
  _NT,
  _nT,
  _S,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateConnectPeerRequest = struct(n0, _ACPR, 0, [_GNI, _CPI, _DI, _LI], [[0, 1], 0, 0, 0]);
export var AssociateConnectPeerResponse = struct(n0, _ACPRs, 0, [_CPA], [() => ConnectPeerAssociation]);
export var ConnectPeerAssociation = struct(n0, _CPA, 0, [_CPI, _GNI, _DI, _LI, _S], [0, 0, 0, 0, 0]);
export var DisassociateConnectPeerRequest = struct(
  n0,
  _DCPRi,
  0,
  [_GNI, _CPI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateConnectPeerResponse = struct(n0, _DCPRis, 0, [_CPA], [() => ConnectPeerAssociation]);
export var GetConnectPeerAssociationsRequest = struct(
  n0,
  _GCPAR,
  0,
  [_GNI, _CPIo, _MR, _NT],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _cPI,
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
export var GetConnectPeerAssociationsResponse = struct(
  n0,
  _GCPARe,
  0,
  [_CPAo, _NT],
  [() => ConnectPeerAssociationList, 0]
);
export var ConnectPeerAssociationList = list(n0, _CPAL, 0, () => ConnectPeerAssociation);
export var ConnectPeerIdList = 64 | 0;

export var AssociateConnectPeer = op(
  n0,
  _ACP,
  {
    [_h]: ["POST", "/global-networks/{GlobalNetworkId}/connect-peer-associations", 200],
  },
  () => AssociateConnectPeerRequest,
  () => AssociateConnectPeerResponse
);
export var DisassociateConnectPeer = op(
  n0,
  _DCPi,
  {
    [_h]: ["DELETE", "/global-networks/{GlobalNetworkId}/connect-peer-associations/{ConnectPeerId}", 200],
  },
  () => DisassociateConnectPeerRequest,
  () => DisassociateConnectPeerResponse
);
export var GetConnectPeerAssociations = op(
  n0,
  _GCPA,
  {
    [_h]: ["GET", "/global-networks/{GlobalNetworkId}/connect-peer-associations", 200],
  },
  () => GetConnectPeerAssociationsRequest,
  () => GetConnectPeerAssociationsResponse
);

// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { CoreNetworkPolicyException as __CoreNetworkPolicyException } from "../models/index";
import {
  _c,
  _CAo,
  _CCA,
  _CCAR,
  _CCARr,
  _CCN,
  _CCNR,
  _CCNRr,
  _CDCGA,
  _CDCGAR,
  _CDCGARr,
  _CN,
  _CNI,
  _CNP,
  _CNPEo,
  _CSTSVA,
  _CSTSVAR,
  _CSTSVARr,
  _CT,
  _CTGP,
  _CTGPR,
  _CTGPRr,
  _CTGRTA,
  _CTGRTAR,
  _CTGRTARr,
  _D,
  _DCGA,
  _DCGAi,
  _e,
  _EL,
  _ELd,
  _Er,
  _GNI,
  _h,
  _hE,
  _LVI,
  _M,
  _O,
  _PCNP,
  _PCNPR,
  _PCNPRu,
  _PD,
  _PI,
  _STSVA,
  _T,
  _TAI,
  _TGA,
  _TGP,
  _TGRTA,
  _TGRTAr,
  _VCA,
  n0,
  TagList,
} from "./schemas_0";
import { CoreNetwork } from "./schemas_1_Network";
import { DirectConnectGatewayAttachment } from "./schemas_3_GatewayAttachment";
import { TransitGatewayPeering } from "./schemas_10_Gateway";
import { CoreNetworkPolicy, SynthesizedJsonCoreNetworkPolicyDocument } from "./schemas_11_Policy";
import { TransitGatewayRouteTableAttachment } from "./schemas_19_Transit";
import { SiteToSiteVpnAttachment } from "./schemas_28_Site";
import { ConnectAttachment, ConnectAttachmentOptions } from "./schemas_29_Connect";
import { CoreNetworkPolicyErrorList } from "./schemas_32_CoreNetwork";

/* eslint no-var: 0 */

export var CoreNetworkPolicyException = error(
  n0,
  _CNPEo,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _Er],
  [0, () => CoreNetworkPolicyErrorList],

  __CoreNetworkPolicyException
);
export var CreateConnectAttachmentRequest = struct(
  n0,
  _CCAR,
  0,
  [_CNI, _EL, _TAI, _O, _T, _CT],
  [0, 0, 0, () => ConnectAttachmentOptions, () => TagList, [0, 4]]
);
export var CreateConnectAttachmentResponse = struct(n0, _CCARr, 0, [_CAo], [() => ConnectAttachment]);
export var CreateCoreNetworkRequest = struct(n0, _CCNR, 0, [_GNI, _D, _T, _PD, _CT], [0, 0, () => TagList, 0, [0, 4]]);
export var CreateCoreNetworkResponse = struct(n0, _CCNRr, 0, [_CN], [() => CoreNetwork]);
export var CreateDirectConnectGatewayAttachmentRequest = struct(
  n0,
  _CDCGAR,
  0,
  [_CNI, _DCGA, _ELd, _T, _CT],
  [0, 0, 64 | 0, () => TagList, [0, 4]]
);
export var CreateDirectConnectGatewayAttachmentResponse = struct(
  n0,
  _CDCGARr,
  0,
  [_DCGAi],
  [() => DirectConnectGatewayAttachment]
);
export var CreateSiteToSiteVpnAttachmentRequest = struct(
  n0,
  _CSTSVAR,
  0,
  [_CNI, _VCA, _T, _CT],
  [0, 0, () => TagList, [0, 4]]
);
export var CreateSiteToSiteVpnAttachmentResponse = struct(n0, _CSTSVARr, 0, [_STSVA], [() => SiteToSiteVpnAttachment]);
export var CreateTransitGatewayPeeringRequest = struct(
  n0,
  _CTGPR,
  0,
  [_CNI, _TGA, _T, _CT],
  [0, 0, () => TagList, [0, 4]]
);
export var CreateTransitGatewayPeeringResponse = struct(n0, _CTGPRr, 0, [_TGP], [() => TransitGatewayPeering]);
export var CreateTransitGatewayRouteTableAttachmentRequest = struct(
  n0,
  _CTGRTAR,
  0,
  [_PI, _TGRTA, _T, _CT],
  [0, 0, () => TagList, [0, 4]]
);
export var CreateTransitGatewayRouteTableAttachmentResponse = struct(
  n0,
  _CTGRTARr,
  0,
  [_TGRTAr],
  [() => TransitGatewayRouteTableAttachment]
);
export var PutCoreNetworkPolicyRequest = struct(
  n0,
  _PCNPR,
  0,
  [_CNI, _PD, _D, _LVI, _CT],
  [[0, 1], [() => SynthesizedJsonCoreNetworkPolicyDocument, 0], 0, 1, [0, 4]]
);
export var PutCoreNetworkPolicyResponse = struct(n0, _PCNPRu, 0, [_CNP], [[() => CoreNetworkPolicy, 0]]);
export var CreateConnectAttachment = op(
  n0,
  _CCA,
  {
    [_h]: ["POST", "/connect-attachments", 200],
  },
  () => CreateConnectAttachmentRequest,
  () => CreateConnectAttachmentResponse
);
export var CreateCoreNetwork = op(
  n0,
  _CCN,
  {
    [_h]: ["POST", "/core-networks", 200],
  },
  () => CreateCoreNetworkRequest,
  () => CreateCoreNetworkResponse
);
export var CreateDirectConnectGatewayAttachment = op(
  n0,
  _CDCGA,
  {
    [_h]: ["POST", "/direct-connect-gateway-attachments", 200],
  },
  () => CreateDirectConnectGatewayAttachmentRequest,
  () => CreateDirectConnectGatewayAttachmentResponse
);
export var CreateSiteToSiteVpnAttachment = op(
  n0,
  _CSTSVA,
  {
    [_h]: ["POST", "/site-to-site-vpn-attachments", 200],
  },
  () => CreateSiteToSiteVpnAttachmentRequest,
  () => CreateSiteToSiteVpnAttachmentResponse
);
export var CreateTransitGatewayPeering = op(
  n0,
  _CTGP,
  {
    [_h]: ["POST", "/transit-gateway-peerings", 200],
  },
  () => CreateTransitGatewayPeeringRequest,
  () => CreateTransitGatewayPeeringResponse
);
export var CreateTransitGatewayRouteTableAttachment = op(
  n0,
  _CTGRTA,
  {
    [_h]: ["POST", "/transit-gateway-route-table-attachments", 200],
  },
  () => CreateTransitGatewayRouteTableAttachmentRequest,
  () => CreateTransitGatewayRouteTableAttachmentResponse
);
export var PutCoreNetworkPolicy = op(
  n0,
  _PCNP,
  {
    [_h]: ["POST", "/core-networks/{CoreNetworkId}/core-network-policy", 200],
  },
  () => PutCoreNetworkPolicyRequest,
  () => PutCoreNetworkPolicyResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ANFTGA,
  _ANFTGAR,
  _ANFTGARc,
  _DNFTGA,
  _DNFTGAR,
  _DNFTGARe,
  _RNFTGA,
  _RNFTGAR,
  _RNFTGARe,
  _TGAI,
  _TGAS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptNetworkFirewallTransitGatewayAttachmentRequest = struct(n0, _ANFTGAR, 0, [_TGAI], [0]);
export var AcceptNetworkFirewallTransitGatewayAttachmentResponse = struct(n0, _ANFTGARc, 0, [_TGAI, _TGAS], [0, 0]);
export var DeleteNetworkFirewallTransitGatewayAttachmentRequest = struct(n0, _DNFTGAR, 0, [_TGAI], [0]);
export var DeleteNetworkFirewallTransitGatewayAttachmentResponse = struct(n0, _DNFTGARe, 0, [_TGAI, _TGAS], [0, 0]);
export var RejectNetworkFirewallTransitGatewayAttachmentRequest = struct(n0, _RNFTGAR, 0, [_TGAI], [0]);
export var RejectNetworkFirewallTransitGatewayAttachmentResponse = struct(n0, _RNFTGARe, 0, [_TGAI, _TGAS], [0, 0]);
export var AcceptNetworkFirewallTransitGatewayAttachment = op(
  n0,
  _ANFTGA,
  0,
  () => AcceptNetworkFirewallTransitGatewayAttachmentRequest,
  () => AcceptNetworkFirewallTransitGatewayAttachmentResponse
);
export var DeleteNetworkFirewallTransitGatewayAttachment = op(
  n0,
  _DNFTGA,
  0,
  () => DeleteNetworkFirewallTransitGatewayAttachmentRequest,
  () => DeleteNetworkFirewallTransitGatewayAttachmentResponse
);
export var RejectNetworkFirewallTransitGatewayAttachment = op(
  n0,
  _RNFTGA,
  0,
  () => RejectNetworkFirewallTransitGatewayAttachmentRequest,
  () => RejectNetworkFirewallTransitGatewayAttachmentResponse
);

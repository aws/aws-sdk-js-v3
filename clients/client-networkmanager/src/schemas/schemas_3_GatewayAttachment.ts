// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _AI,
  _DCGA,
  _DCGAi,
  _ELd,
  _GDCGA,
  _GDCGAR,
  _GDCGARe,
  _h,
  _UDCGA,
  _UDCGAR,
  _UDCGARp,
  Attachment,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DirectConnectGatewayAttachment = struct(n0, _DCGAi, 0, [_A, _DCGA], [() => Attachment, 0]);
export var GetDirectConnectGatewayAttachmentRequest = struct(n0, _GDCGAR, 0, [_AI], [[0, 1]]);
export var GetDirectConnectGatewayAttachmentResponse = struct(
  n0,
  _GDCGARe,
  0,
  [_DCGAi],
  [() => DirectConnectGatewayAttachment]
);
export var UpdateDirectConnectGatewayAttachmentRequest = struct(n0, _UDCGAR, 0, [_AI, _ELd], [[0, 1], 64 | 0]);
export var UpdateDirectConnectGatewayAttachmentResponse = struct(
  n0,
  _UDCGARp,
  0,
  [_DCGAi],
  [() => DirectConnectGatewayAttachment]
);
export var GetDirectConnectGatewayAttachment = op(
  n0,
  _GDCGA,
  {
    [_h]: ["GET", "/direct-connect-gateway-attachments/{AttachmentId}", 200],
  },
  () => GetDirectConnectGatewayAttachmentRequest,
  () => GetDirectConnectGatewayAttachmentResponse
);
export var UpdateDirectConnectGatewayAttachment = op(
  n0,
  _UDCGA,
  {
    [_h]: ["PATCH", "/direct-connect-gateway-attachments/{AttachmentId}", 200],
  },
  () => UpdateDirectConnectGatewayAttachmentRequest,
  () => UpdateDirectConnectGatewayAttachmentResponse
);

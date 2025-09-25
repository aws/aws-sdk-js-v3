// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AWGWC, _AWGWCR, _AWGWCRs, _GWGC, _GWGCR, _GWGCRe, _h, _I, _ICI, _LRWANNSCI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateWirelessGatewayWithCertificateRequest = struct(n0, _AWGWCR, 0, [_I, _ICI], [[0, 1], 0]);
export var AssociateWirelessGatewayWithCertificateResponse = struct(n0, _AWGWCRs, 0, [_ICI], [0]);
export var GetWirelessGatewayCertificateRequest = struct(n0, _GWGCR, 0, [_I], [[0, 1]]);
export var GetWirelessGatewayCertificateResponse = struct(n0, _GWGCRe, 0, [_ICI, _LRWANNSCI], [0, 0]);
export var AssociateWirelessGatewayWithCertificate = op(
  n0,
  _AWGWC,
  {
    [_h]: ["PUT", "/wireless-gateways/{Id}/certificate", 200],
  },
  () => AssociateWirelessGatewayWithCertificateRequest,
  () => AssociateWirelessGatewayWithCertificateResponse
);
export var GetWirelessGatewayCertificate = op(
  n0,
  _GWGC,
  {
    [_h]: ["GET", "/wireless-gateways/{Id}/certificate", 200],
  },
  () => GetWirelessGatewayCertificateRequest,
  () => GetWirelessGatewayCertificateResponse
);

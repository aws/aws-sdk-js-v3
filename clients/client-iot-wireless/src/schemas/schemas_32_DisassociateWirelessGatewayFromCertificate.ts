// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWGFC, _DWGFCR, _DWGFCRi, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateWirelessGatewayFromCertificateRequest = struct(n0, _DWGFCR, 0, [_I], [[0, 1]]);
export var DisassociateWirelessGatewayFromCertificateResponse = struct(n0, _DWGFCRi, 0, [], []);
export var DisassociateWirelessGatewayFromCertificate = op(
  n0,
  _DWGFC,
  {
    [_h]: ["DELETE", "/wireless-gateways/{Id}/certificate", 204],
  },
  () => DisassociateWirelessGatewayFromCertificateRequest,
  () => DisassociateWirelessGatewayFromCertificateResponse
);

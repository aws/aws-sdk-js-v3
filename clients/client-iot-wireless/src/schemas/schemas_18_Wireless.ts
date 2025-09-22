// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CV, _GWGFI, _GWGFIR, _GWGFIRe, _h, _I, _LRWAN, _LRWANGCV, _LRWANGV, _Mo, _PV, _Sta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetWirelessGatewayFirmwareInformationRequest = struct(n0, _GWGFIR, 0, [_I], [[0, 1]]);
export var GetWirelessGatewayFirmwareInformationResponse = struct(
  n0,
  _GWGFIRe,
  0,
  [_LRWAN],
  [() => LoRaWANGatewayCurrentVersion]
);
export var LoRaWANGatewayCurrentVersion = struct(n0, _LRWANGCV, 0, [_CV], [() => LoRaWANGatewayVersion]);
export var LoRaWANGatewayVersion = struct(n0, _LRWANGV, 0, [_PV, _Mo, _Sta], [0, 0, 0]);
export var GetWirelessGatewayFirmwareInformation = op(
  n0,
  _GWGFI,
  {
    [_h]: ["GET", "/wireless-gateways/{Id}/firmware-information", 200],
  },
  () => GetWirelessGatewayFirmwareInformationRequest,
  () => GetWirelessGatewayFirmwareInformationResponse
);

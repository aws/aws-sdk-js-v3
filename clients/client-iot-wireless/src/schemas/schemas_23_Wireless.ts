// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AWDWT, _AWDWTR, _AWDWTRs, _AWGWT, _AWGWTR, _AWGWTRs, _h, _I, _TA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateWirelessDeviceWithThingRequest = struct(n0, _AWDWTR, 0, [_I, _TA], [[0, 1], 0]);
export var AssociateWirelessDeviceWithThingResponse = struct(n0, _AWDWTRs, 0, [], []);
export var AssociateWirelessGatewayWithThingRequest = struct(n0, _AWGWTR, 0, [_I, _TA], [[0, 1], 0]);
export var AssociateWirelessGatewayWithThingResponse = struct(n0, _AWGWTRs, 0, [], []);
export var AssociateWirelessDeviceWithThing = op(
  n0,
  _AWDWT,
  {
    [_h]: ["PUT", "/wireless-devices/{Id}/thing", 204],
  },
  () => AssociateWirelessDeviceWithThingRequest,
  () => AssociateWirelessDeviceWithThingResponse
);
export var AssociateWirelessGatewayWithThing = op(
  n0,
  _AWGWT,
  {
    [_h]: ["PUT", "/wireless-gateways/{Id}/thing", 204],
  },
  () => AssociateWirelessGatewayWithThingRequest,
  () => AssociateWirelessGatewayWithThingResponse
);

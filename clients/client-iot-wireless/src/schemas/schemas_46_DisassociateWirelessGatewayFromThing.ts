// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWGFT, _DWGFTR, _DWGFTRi, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateWirelessGatewayFromThingRequest = struct(n0, _DWGFTR, 0, [_I], [[0, 1]]);
export var DisassociateWirelessGatewayFromThingResponse = struct(n0, _DWGFTRi, 0, [], []);
export var DisassociateWirelessGatewayFromThing = op(
  n0,
  _DWGFT,
  {
    [_h]: ["DELETE", "/wireless-gateways/{Id}/thing", 204],
  },
  () => DisassociateWirelessGatewayFromThingRequest,
  () => DisassociateWirelessGatewayFromThingResponse
);

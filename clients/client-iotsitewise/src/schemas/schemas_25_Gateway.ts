// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cDOS,
  _cDTN,
  _end,
  _G,
  _g,
  _gAr,
  _gI,
  _gN,
  _GP,
  _GV,
  _gVr,
  _ht,
  _iCTN,
  _SIE,
  _sIE,
  _UG,
  _UGR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GatewayPlatform = struct(
  n0,
  _GP,
  0,
  [_g, _gVr, _sIE],
  [() => Greengrass, () => GreengrassV2, () => SiemensIE]
);
export var Greengrass = struct(n0, _G, 0, [_gAr], [0]);
export var GreengrassV2 = struct(n0, _GV, 0, [_cDTN, _cDOS], [0, 0]);
export var SiemensIE = struct(n0, _SIE, 0, [_iCTN], [0]);
export var UpdateGatewayRequest = struct(n0, _UGR, 0, [_gI, _gN], [[0, 1], 0]);
export var UpdateGateway = op(
  n0,
  _UG,
  {
    [_ht]: ["PUT", "/20200301/gateways/{gatewayId}", 200],
    [_end]: ["api."],
  },
  () => UpdateGatewayRequest,
  () => Unit
);

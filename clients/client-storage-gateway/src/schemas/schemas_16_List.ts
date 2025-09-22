// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DD,
  _EII,
  _EIR,
  _G,
  _GARN,
  _GI,
  _GIa,
  _GN,
  _GOS,
  _GTa,
  _HE,
  _HEI,
  _L,
  _LG,
  _LGI,
  _LGO,
  _M,
  _SV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GatewayInfo = struct(
  n0,
  _GIa,
  0,
  [_GI, _GARN, _GTa, _GOS, _GN, _EII, _EIR, _HE, _HEI, _DD, _SV],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var ListGatewaysInput = struct(n0, _LGI, 0, [_M, _L], [0, 1]);
export var ListGatewaysOutput = struct(n0, _LGO, 0, [_G, _M], [() => Gateways, 0]);
export var Gateways = list(n0, _G, 0, () => GatewayInfo);
export var ListGateways = op(
  n0,
  _LG,
  0,
  () => ListGatewaysInput,
  () => ListGatewaysOutput
);

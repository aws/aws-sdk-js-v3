// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CIPPE, _EGA, _EI, _EIn, _EIndp, _RE, _RER, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var EndpointIdentifier = struct(n0, _EIn, 0, [_EI, _CIPPE], [0, 2]);
export var RemoveEndpointsRequest = struct(n0, _RER, 0, [_EIndp, _EGA], [() => EndpointIdentifiers, 0]);
export var EndpointIdentifiers = list(n0, _EIndp, 0, () => EndpointIdentifier);
export var RemoveEndpoints = op(
  n0,
  _RE,
  0,
  () => RemoveEndpointsRequest,
  () => Unit
);

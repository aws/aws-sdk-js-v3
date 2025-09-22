// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AR, _GRC, _GRCR, _GRCRe, _I, _OI, _RCe, _RI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetResolverConfigRequest = struct(n0, _GRCR, 0, [_RI], [0]);
export var GetResolverConfigResponse = struct(n0, _GRCRe, 0, [_RCe], [() => ResolverConfig]);
export var ResolverConfig = struct(n0, _RCe, 0, [_I, _RI, _OI, _AR], [0, 0, 0, 0]);
export var GetResolverConfig = op(
  n0,
  _GRC,
  0,
  () => GetResolverConfigRequest,
  () => GetResolverConfigResponse
);

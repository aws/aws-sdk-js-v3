// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CIid, _DI, _RIR, _RIRR, _RIRRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveIpRoutesRequest = struct(n0, _RIRR, 0, [_DI, _CIid], [0, 64 | 0]);
export var RemoveIpRoutesResult = struct(n0, _RIRRe, 0, [], []);
export var CidrIps = 64 | 0;

export var RemoveIpRoutes = op(
  n0,
  _RIR,
  0,
  () => RemoveIpRoutesRequest,
  () => RemoveIpRoutesResult
);

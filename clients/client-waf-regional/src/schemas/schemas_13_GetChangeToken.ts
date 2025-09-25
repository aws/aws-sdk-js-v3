// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CT, _GCT, _GCTR, _GCTRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetChangeTokenRequest = struct(n0, _GCTR, 0, [], []);
export var GetChangeTokenResponse = struct(n0, _GCTRe, 0, [_CT], [0]);
export var GetChangeToken = op(
  n0,
  _GCT,
  0,
  () => GetChangeTokenRequest,
  () => GetChangeTokenResponse
);

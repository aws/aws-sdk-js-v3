// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AC, _ACV, _APc, _APR, _APRc, _AT, _CCI, _N, _PI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptPageRequest = struct(n0, _APR, 0, [_PI, _CCI, _AT, _N, _AC, _ACV], [0, 0, 0, 0, 0, 0]);
export var AcceptPageResult = struct(n0, _APRc, 0, [], []);
export var AcceptPage = op(
  n0,
  _APc,
  0,
  () => AcceptPageRequest,
  () => AcceptPageResult
);

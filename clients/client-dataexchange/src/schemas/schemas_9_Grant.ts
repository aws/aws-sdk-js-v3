// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDG, _DDGR, _DGI, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataGrantRequest = struct(n0, _DDGR, 0, [_DGI], [[0, 1]]);
export var DeleteDataGrant = op(
  n0,
  _DDG,
  {
    [_h]: ["DELETE", "/v1/data-grants/{DataGrantId}", 204],
  },
  () => DeleteDataGrantRequest,
  () => Unit
);

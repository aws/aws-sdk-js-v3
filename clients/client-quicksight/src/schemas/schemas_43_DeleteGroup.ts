// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DGe, _DGR, _DGRe, _GN, _h, _Na, _RI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGroupRequest = struct(
  n0,
  _DGR,
  0,
  [_GN, _AAI, _Na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteGroupResponse = struct(n0, _DGRe, 0, [_RI, _St], [0, [1, 32]]);
export var DeleteGroup = op(
  n0,
  _DGe,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}", 200],
  },
  () => DeleteGroupRequest,
  () => DeleteGroupResponse
);

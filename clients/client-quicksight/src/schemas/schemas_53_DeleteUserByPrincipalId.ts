// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DUBPI, _DUBPIR, _DUBPIRe, _h, _Na, _PIr, _RI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUserByPrincipalIdRequest = struct(
  n0,
  _DUBPIR,
  0,
  [_PIr, _AAI, _Na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteUserByPrincipalIdResponse = struct(n0, _DUBPIRe, 0, [_RI, _St], [0, [1, 32]]);
export var DeleteUserByPrincipalId = op(
  n0,
  _DUBPI,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/namespaces/{Namespace}/user-principals/{PrincipalId}", 200],
  },
  () => DeleteUserByPrincipalIdRequest,
  () => DeleteUserByPrincipalIdResponse
);

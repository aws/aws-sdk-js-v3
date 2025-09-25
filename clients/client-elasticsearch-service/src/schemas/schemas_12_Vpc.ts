// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _DN, _h, _RVEA, _RVEAR, _RVEARe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RevokeVpcEndpointAccessRequest = struct(n0, _RVEAR, 0, [_DN, _A], [[0, 1], 0]);
export var RevokeVpcEndpointAccessResponse = struct(n0, _RVEARe, 0, [], []);
export var RevokeVpcEndpointAccess = op(
  n0,
  _RVEA,
  {
    [_h]: ["POST", "/2015-01-01/es/domain/{DomainName}/revokeVpcEndpointAccess", 200],
  },
  () => RevokeVpcEndpointAccessRequest,
  () => RevokeVpcEndpointAccessResponse
);

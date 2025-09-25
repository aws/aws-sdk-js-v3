// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _AP, _AVEA, _AVEAR, _AVEARu, _DN, _h, _RVEA, _RVEAR, _RVEARe, _Se, n0 } from "./schemas_0";
import { AuthorizedPrincipal } from "./schemas_36_VpcEndpoint";

/* eslint no-var: 0 */

export var AuthorizeVpcEndpointAccessRequest = struct(n0, _AVEAR, 0, [_DN, _A, _Se], [[0, 1], 0, 0]);
export var AuthorizeVpcEndpointAccessResponse = struct(n0, _AVEARu, 0, [_AP], [() => AuthorizedPrincipal]);
export var RevokeVpcEndpointAccessRequest = struct(n0, _RVEAR, 0, [_DN, _A, _Se], [[0, 1], 0, 0]);
export var RevokeVpcEndpointAccessResponse = struct(n0, _RVEARe, 0, [], []);
export var AuthorizeVpcEndpointAccess = op(
  n0,
  _AVEA,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/domain/{DomainName}/authorizeVpcEndpointAccess", 200],
  },
  () => AuthorizeVpcEndpointAccessRequest,
  () => AuthorizeVpcEndpointAccessResponse
);
export var RevokeVpcEndpointAccess = op(
  n0,
  _RVEA,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/domain/{DomainName}/revokeVpcEndpointAccess", 200],
  },
  () => RevokeVpcEndpointAccessRequest,
  () => RevokeVpcEndpointAccessResponse
);

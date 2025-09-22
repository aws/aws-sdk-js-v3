// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AP, _APL, _DN, _h, _hQ, _LVEA, _LVEAR, _LVEARi, _NT, _nT, _Pr, _PT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AuthorizedPrincipal = struct(n0, _AP, 0, [_PT, _Pr], [0, 0]);
export var ListVpcEndpointAccessRequest = struct(
  n0,
  _LVEAR,
  0,
  [_DN, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListVpcEndpointAccessResponse = struct(n0, _LVEARi, 0, [_APL, _NT], [() => AuthorizedPrincipalList, 0]);
export var AuthorizedPrincipalList = list(n0, _APL, 0, () => AuthorizedPrincipal);
export var ListVpcEndpointAccess = op(
  n0,
  _LVEA,
  {
    [_h]: ["GET", "/2015-01-01/es/domain/{DomainName}/listVpcEndpointAccess", 200],
  },
  () => ListVpcEndpointAccessRequest,
  () => ListVpcEndpointAccessResponse
);

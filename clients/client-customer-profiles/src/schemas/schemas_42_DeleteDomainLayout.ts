// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDL, _DDLR, _DDLRe, _DN, _h, _LDN, _M, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDomainLayoutRequest = struct(
  n0,
  _DDLR,
  0,
  [_DN, _LDN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDomainLayoutResponse = struct(n0, _DDLRe, 0, [_M], [0]);
export var DeleteDomainLayout = op(
  n0,
  _DDL,
  {
    [_h]: ["DELETE", "/domains/{DomainName}/layouts/{LayoutDefinitionName}", 200],
  },
  () => DeleteDomainLayoutRequest,
  () => DeleteDomainLayoutResponse
);

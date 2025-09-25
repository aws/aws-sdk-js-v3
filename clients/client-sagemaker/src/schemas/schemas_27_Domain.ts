// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CT, _DAo, _DDo, _DI, _DL, _DNo, _Dom, _LDi, _LDRis, _LDRist, _LMT, _MR, _NT, _St, _U, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DomainDetails = struct(n0, _DDo, 0, [_DAo, _DI, _DNo, _St, _CT, _LMT, _U], [0, 0, 0, 0, 4, 4, 0]);
export var ListDomainsRequest = struct(n0, _LDRis, 0, [_NT, _MR], [0, 1]);
export var ListDomainsResponse = struct(n0, _LDRist, 0, [_Dom, _NT], [() => DomainList, 0]);
export var DomainList = list(n0, _DL, 0, () => DomainDetails);
export var ListDomains = op(
  n0,
  _LDi,
  0,
  () => ListDomainsRequest,
  () => ListDomainsResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CA, _DLo, _DN, _h, _hQ, _It, _LD, _LDI, _LDR, _LDRi, _LUA, _MR, _mr, _NT, _nt, _Ta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListDomainItem = struct(n0, _LDI, 0, [_DN, _CA, _LUA, _Ta], [0, 4, 4, 128 | 0]);
export var ListDomainsRequest = struct(
  n0,
  _LDR,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListDomainsResponse = struct(n0, _LDRi, 0, [_It, _NT], [() => DomainList, 0]);
export var DomainList = list(n0, _DLo, 0, () => ListDomainItem);
export var ListDomains = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/domains", 200],
  },
  () => ListDomainsRequest,
  () => ListDomainsResponse
);

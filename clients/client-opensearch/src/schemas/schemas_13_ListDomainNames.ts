// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DI, _DIL, _DN, _DNo, _ET, _eT, _h, _hQ, _LDN, _LDNR, _LDNRi, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DomainInfo = struct(n0, _DI, 0, [_DN, _ET], [0, 0]);
export var ListDomainNamesRequest = struct(
  n0,
  _LDNR,
  0,
  [_ET],
  [
    [
      0,
      {
        [_hQ]: _eT,
      },
    ],
  ]
);
export var ListDomainNamesResponse = struct(n0, _LDNRi, 0, [_DNo], [() => DomainInfoList]);
export var DomainInfoList = list(n0, _DIL, 0, () => DomainInfo);
export var ListDomainNames = op(
  n0,
  _LDN,
  {
    [_h]: ["GET", "/2021-01-01/domain", 200],
  },
  () => ListDomainNamesRequest,
  () => ListDomainNamesResponse
);

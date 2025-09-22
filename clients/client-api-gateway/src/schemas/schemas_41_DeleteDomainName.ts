// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDN, _DDNR, _dN, _dNI, _hQ, _ht, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDomainNameRequest = struct(
  n0,
  _DDNR,
  0,
  [_dN, _dNI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dNI,
      },
    ],
  ]
);
export var DeleteDomainName = op(
  n0,
  _DDN,
  {
    [_ht]: ["DELETE", "/domainnames/{domainName}", 202],
  },
  () => DeleteDomainNameRequest,
  () => Unit
);

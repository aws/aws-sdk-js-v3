// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDU, _DDUI, _DDUO, _dI, _ht, _i, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDomainUnitInput = struct(
  n0,
  _DDUI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDomainUnitOutput = struct(n0, _DDUO, 0, [], []);
export var DeleteDomainUnit = op(
  n0,
  _DDU,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/domain-units/{identifier}", 204],
  },
  () => DeleteDomainUnitInput,
  () => DeleteDomainUnitOutput
);

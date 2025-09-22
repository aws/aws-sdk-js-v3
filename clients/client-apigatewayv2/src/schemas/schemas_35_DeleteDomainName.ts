// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDN, _DDNR, _DN, _ht, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDomainNameRequest = struct(n0, _DDNR, 0, [_DN], [[0, 1]]);
export var DeleteDomainName = op(
  n0,
  _DDN,
  {
    [_ht]: ["DELETE", "/v2/domainnames/{DomainName}", 204],
  },
  () => DeleteDomainNameRequest,
  () => Unit
);

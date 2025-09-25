// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DD, _DDR, _DDRe, _dI, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDomainRequest = struct(n0, _DDR, 0, [_dI], [[0, 1]]);
export var DeleteDomainResponse = struct(n0, _DDRe, 0, [], []);
export var DeleteDomain = op(
  n0,
  _DD,
  {
    [_h]: ["DELETE", "/domains/{domainId}", 200],
  },
  () => DeleteDomainRequest,
  () => DeleteDomainResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDel, _DDR, _DDRe, _DN, _h, _M, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDomainRequest = struct(n0, _DDR, 0, [_DN], [[0, 1]]);
export var DeleteDomainResponse = struct(n0, _DDRe, 0, [_M], [0]);
export var DeleteDomain = op(
  n0,
  _DDel,
  {
    [_h]: ["DELETE", "/domains/{DomainName}", 200],
  },
  () => DeleteDomainRequest,
  () => DeleteDomainResponse
);

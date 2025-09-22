// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _DIR, _DIRe, _DN, _h, _M, _U, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIntegrationRequest = struct(n0, _DIR, 0, [_DN, _U], [[0, 1], 0]);
export var DeleteIntegrationResponse = struct(n0, _DIRe, 0, [_M], [0]);
export var DeleteIntegration = op(
  n0,
  _DI,
  {
    [_h]: ["POST", "/domains/{DomainName}/integrations/delete", 200],
  },
  () => DeleteIntegrationRequest,
  () => DeleteIntegrationResponse
);

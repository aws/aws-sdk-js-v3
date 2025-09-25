// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _E, _e, _h, _jN, _RBC, _RBCR, _RBCRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveBackendConfigRequest = struct(n0, _RBCR, 0, [_AI], [[0, 1]]);
export var RemoveBackendConfigResponse = struct(
  n0,
  _RBCRe,
  0,
  [_E],
  [
    [
      0,
      {
        [_jN]: _e,
      },
    ],
  ]
);
export var RemoveBackendConfig = op(
  n0,
  _RBC,
  {
    [_h]: ["POST", "/backend/{AppId}/config/remove", 200],
  },
  () => RemoveBackendConfigRequest,
  () => RemoveBackendConfigResponse
);

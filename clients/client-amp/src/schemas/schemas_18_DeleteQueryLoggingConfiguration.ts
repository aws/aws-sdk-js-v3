// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _DQLC, _DQLCR, _h, _hQ, _iT, _wI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteQueryLoggingConfigurationRequest = struct(
  n0,
  _DQLCR,
  0,
  [_wI, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteQueryLoggingConfiguration = op(
  n0,
  _DQLC,
  {
    [_h]: ["DELETE", "/workspaces/{workspaceId}/logging/query", 202],
  },
  () => DeleteQueryLoggingConfigurationRequest,
  () => Unit
);

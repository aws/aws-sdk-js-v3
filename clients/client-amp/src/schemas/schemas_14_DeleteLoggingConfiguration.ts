// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _DLC, _DLCR, _h, _hQ, _iT, _wI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLoggingConfigurationRequest = struct(
  n0,
  _DLCR,
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
export var DeleteLoggingConfiguration = op(
  n0,
  _DLC,
  {
    [_h]: ["DELETE", "/workspaces/{workspaceId}/logging", 202],
  },
  () => DeleteLoggingConfigurationRequest,
  () => Unit
);

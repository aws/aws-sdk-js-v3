// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _DAMD, _DAMDR, _h, _hQ, _iT, _wI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAlertManagerDefinitionRequest = struct(
  n0,
  _DAMDR,
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
export var DeleteAlertManagerDefinition = op(
  n0,
  _DAMD,
  {
    [_h]: ["DELETE", "/workspaces/{workspaceId}/alertmanager/definition", 202],
  },
  () => DeleteAlertManagerDefinitionRequest,
  () => Unit
);

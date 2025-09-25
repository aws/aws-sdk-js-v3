// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AISS, _aISS, _DR, _EAIS, _EAISR, _EAISRn, _eQN, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableAllowedImagesSettingsRequest = struct(n0, _EAISR, 0, [_AISS, _DR], [0, 2]);
export var EnableAllowedImagesSettingsResult = struct(
  n0,
  _EAISRn,
  0,
  [_AISS],
  [
    [
      0,
      {
        [_eQN]: `AllowedImagesSettingsState`,
        [_xN]: _aISS,
      },
    ],
  ]
);
export var EnableAllowedImagesSettings = op(
  n0,
  _EAIS,
  0,
  () => EnableAllowedImagesSettingsRequest,
  () => EnableAllowedImagesSettingsResult
);

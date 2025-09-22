// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AISS, _aISS, _DAIS, _DAISR, _DAISRi, _DR, _eQN, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableAllowedImagesSettingsRequest = struct(n0, _DAISR, 0, [_DR], [2]);
export var DisableAllowedImagesSettingsResult = struct(
  n0,
  _DAISRi,
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
export var DisableAllowedImagesSettings = op(
  n0,
  _DAIS,
  0,
  () => DisableAllowedImagesSettingsRequest,
  () => DisableAllowedImagesSettingsResult
);

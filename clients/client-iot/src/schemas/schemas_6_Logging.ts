// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DVLL,
  _DVLLR,
  _h,
  _hQ,
  _lL,
  _lT,
  _LTC,
  _lTC,
  _LTCo,
  _LTo,
  _LVLL,
  _LVLLR,
  _LVLLRi,
  _mR,
  _nT,
  _SVLL,
  _SVLLR,
  _tNa,
  _tTa,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteV2LoggingLevelRequest = struct(
  n0,
  _DVLLR,
  0,
  [_tTa, _tNa],
  [
    [
      0,
      {
        [_hQ]: _tTa,
      },
    ],
    [
      0,
      {
        [_hQ]: _tNa,
      },
    ],
  ]
);
export var ListV2LoggingLevelsRequest = struct(
  n0,
  _LVLLR,
  0,
  [_tTa, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _tTa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListV2LoggingLevelsResponse = struct(n0, _LVLLRi, 0, [_lTC, _nT], [() => LogTargetConfigurations, 0]);
export var LogTarget = struct(n0, _LTo, 0, [_tTa, _tNa], [0, 0]);
export var LogTargetConfiguration = struct(n0, _LTC, 0, [_lT, _lL], [() => LogTarget, 0]);
export var SetV2LoggingLevelRequest = struct(n0, _SVLLR, 0, [_lT, _lL], [() => LogTarget, 0]);
export var LogTargetConfigurations = list(n0, _LTCo, 0, () => LogTargetConfiguration);
export var DeleteV2LoggingLevel = op(
  n0,
  _DVLL,
  {
    [_h]: ["DELETE", "/v2LoggingLevel", 200],
  },
  () => DeleteV2LoggingLevelRequest,
  () => Unit
);
export var ListV2LoggingLevels = op(
  n0,
  _LVLL,
  {
    [_h]: ["GET", "/v2LoggingLevel", 200],
  },
  () => ListV2LoggingLevelsRequest,
  () => ListV2LoggingLevelsResponse
);
export var SetV2LoggingLevel = op(
  n0,
  _SVLL,
  {
    [_h]: ["POST", "/v2LoggingLevel", 200],
  },
  () => SetV2LoggingLevelRequest,
  () => Unit
);

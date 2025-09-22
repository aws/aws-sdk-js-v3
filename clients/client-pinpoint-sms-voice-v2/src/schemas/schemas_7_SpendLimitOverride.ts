// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DMMSLO,
  _DMMSLOR,
  _DMMSLORe,
  _DTMSLO,
  _DTMSLOR,
  _DTMSLORe,
  _DVMSLO,
  _DVMSLOR,
  _DVMSLORe,
  _ML,
  _SMMSLO,
  _SMMSLOR,
  _SMMSLORe,
  _STMSLO,
  _STMSLOR,
  _STMSLORe,
  _SVMSLO,
  _SVMSLOR,
  _SVMSLORe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMediaMessageSpendLimitOverrideRequest = struct(n0, _DMMSLOR, 0, [], []);
export var DeleteMediaMessageSpendLimitOverrideResult = struct(n0, _DMMSLORe, 0, [_ML], [1]);
export var DeleteTextMessageSpendLimitOverrideRequest = struct(n0, _DTMSLOR, 0, [], []);
export var DeleteTextMessageSpendLimitOverrideResult = struct(n0, _DTMSLORe, 0, [_ML], [1]);
export var DeleteVoiceMessageSpendLimitOverrideRequest = struct(n0, _DVMSLOR, 0, [], []);
export var DeleteVoiceMessageSpendLimitOverrideResult = struct(n0, _DVMSLORe, 0, [_ML], [1]);
export var SetMediaMessageSpendLimitOverrideRequest = struct(n0, _SMMSLOR, 0, [_ML], [1]);
export var SetMediaMessageSpendLimitOverrideResult = struct(n0, _SMMSLORe, 0, [_ML], [1]);
export var SetTextMessageSpendLimitOverrideRequest = struct(n0, _STMSLOR, 0, [_ML], [1]);
export var SetTextMessageSpendLimitOverrideResult = struct(n0, _STMSLORe, 0, [_ML], [1]);
export var SetVoiceMessageSpendLimitOverrideRequest = struct(n0, _SVMSLOR, 0, [_ML], [1]);
export var SetVoiceMessageSpendLimitOverrideResult = struct(n0, _SVMSLORe, 0, [_ML], [1]);
export var DeleteMediaMessageSpendLimitOverride = op(
  n0,
  _DMMSLO,
  0,
  () => DeleteMediaMessageSpendLimitOverrideRequest,
  () => DeleteMediaMessageSpendLimitOverrideResult
);
export var DeleteTextMessageSpendLimitOverride = op(
  n0,
  _DTMSLO,
  0,
  () => DeleteTextMessageSpendLimitOverrideRequest,
  () => DeleteTextMessageSpendLimitOverrideResult
);
export var DeleteVoiceMessageSpendLimitOverride = op(
  n0,
  _DVMSLO,
  0,
  () => DeleteVoiceMessageSpendLimitOverrideRequest,
  () => DeleteVoiceMessageSpendLimitOverrideResult
);
export var SetMediaMessageSpendLimitOverride = op(
  n0,
  _SMMSLO,
  0,
  () => SetMediaMessageSpendLimitOverrideRequest,
  () => SetMediaMessageSpendLimitOverrideResult
);
export var SetTextMessageSpendLimitOverride = op(
  n0,
  _STMSLO,
  0,
  () => SetTextMessageSpendLimitOverrideRequest,
  () => SetTextMessageSpendLimitOverrideResult
);
export var SetVoiceMessageSpendLimitOverride = op(
  n0,
  _SVMSLO,
  0,
  () => SetVoiceMessageSpendLimitOverrideRequest,
  () => SetVoiceMessageSpendLimitOverrideResult
);

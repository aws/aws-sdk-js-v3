// smithy-typescript generated code
import { struct, struct as uni } from "@smithy/core/schema";

import { _ADC, _aDC, _bA, _DC, _dC, _PDC, _pDC, _PDCr, _pDCr, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AgentlessDialerConfig = struct(n0, _ADC, 0, [_dC], [1]);
export var PredictiveDialerConfig = struct(n0, _PDC, 0, [_bA, _dC], [1, 1]);
export var ProgressiveDialerConfig = struct(n0, _PDCr, 0, [_bA, _dC], [1, 1]);
export var DialerConfig = uni(
  n0,
  _DC,
  0,
  [_pDC, _pDCr, _aDC],
  [() => ProgressiveDialerConfig, () => PredictiveDialerConfig, () => AgentlessDialerConfig]
);

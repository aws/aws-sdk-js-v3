// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ADRLIBPS, _AURLIBPS, _DBRLe, _DBRLIe, _DBRLOe, _GARN, _UBRL, _UBRLI, _UBRLO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeBandwidthRateLimitInput = struct(n0, _DBRLIe, 0, [_GARN], [0]);
export var DescribeBandwidthRateLimitOutput = struct(n0, _DBRLOe, 0, [_GARN, _AURLIBPS, _ADRLIBPS], [0, 1, 1]);
export var UpdateBandwidthRateLimitInput = struct(n0, _UBRLI, 0, [_GARN, _AURLIBPS, _ADRLIBPS], [0, 1, 1]);
export var UpdateBandwidthRateLimitOutput = struct(n0, _UBRLO, 0, [_GARN], [0]);
export var DescribeBandwidthRateLimit = op(
  n0,
  _DBRLe,
  0,
  () => DescribeBandwidthRateLimitInput,
  () => DescribeBandwidthRateLimitOutput
);
export var UpdateBandwidthRateLimit = op(
  n0,
  _UBRL,
  0,
  () => UpdateBandwidthRateLimitInput,
  () => UpdateBandwidthRateLimitOutput
);

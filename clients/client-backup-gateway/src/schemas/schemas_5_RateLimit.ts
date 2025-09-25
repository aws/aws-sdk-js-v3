// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AURLIBPS,
  _BRLI,
  _BRLIa,
  _DOW,
  _EHOD,
  _EMOH,
  _GA,
  _GBRLS,
  _GBRLSI,
  _GBRLSO,
  _PBRLS,
  _PBRLSI,
  _PBRLSO,
  _SHOD,
  _SMOH,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BandwidthRateLimitInterval = struct(
  n0,
  _BRLI,
  0,
  [_AURLIBPS, _SHOD, _EHOD, _SMOH, _EMOH, _DOW],
  [1, 1, 1, 1, 1, 64 | 1]
);
export var GetBandwidthRateLimitScheduleInput = struct(n0, _GBRLSI, 0, [_GA], [0]);
export var GetBandwidthRateLimitScheduleOutput = struct(
  n0,
  _GBRLSO,
  0,
  [_GA, _BRLIa],
  [0, () => BandwidthRateLimitIntervals]
);
export var PutBandwidthRateLimitScheduleInput = struct(
  n0,
  _PBRLSI,
  0,
  [_GA, _BRLIa],
  [0, () => BandwidthRateLimitIntervals]
);
export var PutBandwidthRateLimitScheduleOutput = struct(n0, _PBRLSO, 0, [_GA], [0]);
export var BandwidthRateLimitIntervals = list(n0, _BRLIa, 0, () => BandwidthRateLimitInterval);
export var DaysOfWeek = 64 | 1;

export var GetBandwidthRateLimitSchedule = op(
  n0,
  _GBRLS,
  0,
  () => GetBandwidthRateLimitScheduleInput,
  () => GetBandwidthRateLimitScheduleOutput
);
export var PutBandwidthRateLimitSchedule = op(
  n0,
  _PBRLS,
  2,
  () => PutBandwidthRateLimitScheduleInput,
  () => PutBandwidthRateLimitScheduleOutput
);

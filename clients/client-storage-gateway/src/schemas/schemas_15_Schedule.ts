// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ADRLIBPS,
  _AUP,
  _AURLIBPS,
  _BRLI,
  _BRLIa,
  _D,
  _DBRLS,
  _DBRLSI,
  _DBRLSO,
  _DMST,
  _DMSTI,
  _DMSTO,
  _DOM,
  _DOW,
  _DOWa,
  _DSSe,
  _DSSIe,
  _DSSOe,
  _EHOD,
  _EMOH,
  _GARN,
  _HOD,
  _MOH,
  _RIH,
  _SA,
  _SHOD,
  _SMOH,
  _SUP,
  _T,
  _Ti,
  _UBRLS,
  _UBRLSI,
  _UBRLSO,
  _UMST,
  _UMSTI,
  _UMSTO,
  _USS,
  _USSI,
  _USSO,
  _VARN,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BandwidthRateLimitInterval = struct(
  n0,
  _BRLI,
  0,
  [_SHOD, _SMOH, _EHOD, _EMOH, _DOW, _AURLIBPS, _ADRLIBPS],
  [1, 1, 1, 1, 64 | 1, 1, 1]
);
export var DescribeBandwidthRateLimitScheduleInput = struct(n0, _DBRLSI, 0, [_GARN], [0]);
export var DescribeBandwidthRateLimitScheduleOutput = struct(
  n0,
  _DBRLSO,
  0,
  [_GARN, _BRLIa],
  [0, () => BandwidthRateLimitIntervals]
);
export var DescribeMaintenanceStartTimeInput = struct(n0, _DMSTI, 0, [_GARN], [0]);
export var DescribeMaintenanceStartTimeOutput = struct(
  n0,
  _DMSTO,
  0,
  [_GARN, _HOD, _MOH, _DOWa, _DOM, _Ti, _SUP],
  [0, 1, 1, 1, 1, 0, () => SoftwareUpdatePreferences]
);
export var DescribeSnapshotScheduleInput = struct(n0, _DSSIe, 0, [_VARN], [0]);
export var DescribeSnapshotScheduleOutput = struct(
  n0,
  _DSSOe,
  0,
  [_VARN, _SA, _RIH, _D, _Ti, _T],
  [0, 1, 1, 0, 0, () => Tags]
);
export var SoftwareUpdatePreferences = struct(n0, _SUP, 0, [_AUP], [0]);
export var UpdateBandwidthRateLimitScheduleInput = struct(
  n0,
  _UBRLSI,
  0,
  [_GARN, _BRLIa],
  [0, () => BandwidthRateLimitIntervals]
);
export var UpdateBandwidthRateLimitScheduleOutput = struct(n0, _UBRLSO, 0, [_GARN], [0]);
export var UpdateMaintenanceStartTimeInput = struct(
  n0,
  _UMSTI,
  0,
  [_GARN, _HOD, _MOH, _DOWa, _DOM, _SUP],
  [0, 1, 1, 1, 1, () => SoftwareUpdatePreferences]
);
export var UpdateMaintenanceStartTimeOutput = struct(n0, _UMSTO, 0, [_GARN], [0]);
export var UpdateSnapshotScheduleInput = struct(n0, _USSI, 0, [_VARN, _SA, _RIH, _D, _T], [0, 1, 1, 0, () => Tags]);
export var UpdateSnapshotScheduleOutput = struct(n0, _USSO, 0, [_VARN], [0]);
export var BandwidthRateLimitIntervals = list(n0, _BRLIa, 0, () => BandwidthRateLimitInterval);
export var DaysOfWeek = 64 | 1;

export var DescribeBandwidthRateLimitSchedule = op(
  n0,
  _DBRLS,
  0,
  () => DescribeBandwidthRateLimitScheduleInput,
  () => DescribeBandwidthRateLimitScheduleOutput
);
export var DescribeMaintenanceStartTime = op(
  n0,
  _DMST,
  0,
  () => DescribeMaintenanceStartTimeInput,
  () => DescribeMaintenanceStartTimeOutput
);
export var DescribeSnapshotSchedule = op(
  n0,
  _DSSe,
  0,
  () => DescribeSnapshotScheduleInput,
  () => DescribeSnapshotScheduleOutput
);
export var UpdateBandwidthRateLimitSchedule = op(
  n0,
  _UBRLS,
  0,
  () => UpdateBandwidthRateLimitScheduleInput,
  () => UpdateBandwidthRateLimitScheduleOutput
);
export var UpdateMaintenanceStartTime = op(
  n0,
  _UMST,
  0,
  () => UpdateMaintenanceStartTimeInput,
  () => UpdateMaintenanceStartTimeOutput
);
export var UpdateSnapshotSchedule = op(
  n0,
  _USS,
  0,
  () => UpdateSnapshotScheduleInput,
  () => UpdateSnapshotScheduleOutput
);

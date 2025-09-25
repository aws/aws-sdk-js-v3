// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _Fr, _QA, _QP, _QSuer, _RS, _RSF, _St, _TOD, _Un, _Va, _VP, _Wi, _WL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RefreshSchedule = struct(n0, _RS, 0, [_Fr, _St, _TOD], [() => RefreshScheduleFrequency, 0, 0]);
export var RefreshScheduleFrequency = struct(n0, _RSF, 0, [_Un, _Va], [0, 1]);
export var Widget = struct(n0, _Wi, 0, [_QA, _QSuer, _QP, _VP], [0, 0, 64 | 0, 128 | 0]);
export var WidgetList = list(n0, _WL, 0, () => Widget);
export var ViewPropertiesMap = 128 | 0;

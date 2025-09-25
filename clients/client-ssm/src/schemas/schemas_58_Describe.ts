// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _K, _MWF, _MWFL, _Va, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var MaintenanceWindowFilter = struct(n0, _MWF, 0, [_K, _Va], [0, 64 | 0]);
export var MaintenanceWindowFilterList = list(n0, _MWFL, 0, () => MaintenanceWindowFilter);
export var MaintenanceWindowFilterValues = 64 | 0;

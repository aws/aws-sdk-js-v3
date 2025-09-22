// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CETa, _CETR, _eQN, _ETI, _eTI, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelExportTaskRequest = struct(
  n0,
  _CETR,
  0,
  [_ETI],
  [
    [
      0,
      {
        [_eQN]: `ExportTaskId`,
        [_xN]: _eTI,
      },
    ],
  ]
);
export var CancelExportTask = op(
  n0,
  _CETa,
  0,
  () => CancelExportTaskRequest,
  () => Unit
);

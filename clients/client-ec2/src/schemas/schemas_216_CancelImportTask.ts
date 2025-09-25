// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CITa, _CITR, _CITRa, _CR, _DR, _eQN, _ITI, _iTI, _PSr, _pSr, _St, _st, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelImportTaskRequest = struct(n0, _CITR, 0, [_CR, _DR, _ITI], [0, 2, 0]);
export var CancelImportTaskResult = struct(
  n0,
  _CITRa,
  0,
  [_ITI, _PSr, _St],
  [
    [
      0,
      {
        [_eQN]: `ImportTaskId`,
        [_xN]: _iTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `PreviousState`,
        [_xN]: _pSr,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var CancelImportTask = op(
  n0,
  _CITa,
  0,
  () => CancelImportTaskRequest,
  () => CancelImportTaskResult
);

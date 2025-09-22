// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cH,
  _cp,
  _cSU,
  _cT,
  _end,
  _fR,
  _g,
  _GRT,
  _GRTR,
  _GRTRe,
  _hQ,
  _ht,
  _i,
  _ID,
  _iD,
  _iDm,
  _im,
  _iT,
  _it,
  _LRT,
  _LRTR,
  _LRTRi,
  _lS,
  _me,
  _mRa,
  _n,
  _nT,
  _sIo,
  _sM,
  _st,
  _sTt,
  _sTta,
  _sTto,
  _tI,
  _TL,
  _TLI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetRunTaskRequest = struct(
  n0,
  _GRTR,
  0,
  [_i, _tI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetRunTaskResponse = struct(
  n0,
  _GRTRe,
  0,
  [_tI, _st, _n, _cp, _cH, _cSU, _me, _cT, _sTt, _sTto, _sM, _lS, _g, _iT, _fR, _iD],
  [0, 0, 0, 1, 2, 0, 1, 5, 5, 5, 0, 0, 1, 0, 0, () => ImageDetails]
);
export var ImageDetails = struct(n0, _ID, 0, [_im, _iDm, _sIo], [0, 0, 0]);
export var ListRunTasksRequest = struct(
  n0,
  _LRTR,
  0,
  [_i, _st, _sTta, _mRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _sTta,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListRunTasksResponse = struct(n0, _LRTRi, 0, [_it, _nT], [() => TaskList, 0]);
export var TaskListItem = struct(
  n0,
  _TLI,
  0,
  [_tI, _st, _n, _cp, _cH, _cSU, _me, _cT, _sTt, _sTto, _g, _iT],
  [0, 0, 0, 1, 2, 0, 1, 5, 5, 5, 1, 0]
);
export var TaskList = list(n0, _TL, 0, () => TaskListItem);
export var GetRunTask = op(
  n0,
  _GRT,
  {
    [_ht]: ["GET", "/run/{id}/task/{taskId}", 200],
    [_end]: ["workflows-"],
  },
  () => GetRunTaskRequest,
  () => GetRunTaskResponse
);
export var ListRunTasks = op(
  n0,
  _LRT,
  {
    [_ht]: ["GET", "/run/{id}/task", 200],
    [_end]: ["workflows-"],
  },
  () => ListRunTasksRequest,
  () => ListRunTasksResponse
);

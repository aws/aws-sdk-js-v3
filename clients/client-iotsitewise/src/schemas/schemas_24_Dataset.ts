// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cT,
  _DDe,
  _DDRel,
  _DDRele,
  _dIa,
  _dSa,
  _DSat,
  _e,
  _end,
  _hQ,
  _ht,
  _iT,
  _st,
  ErrorDetails,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DatasetStatus = struct(n0, _DSat, 0, [_st, _e], [0, () => ErrorDetails]);
export var DeleteDatasetRequest = struct(
  n0,
  _DDRel,
  0,
  [_dIa, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteDatasetResponse = struct(n0, _DDRele, 0, [_dSa], [() => DatasetStatus]);
export var DeleteDataset = op(
  n0,
  _DDe,
  {
    [_ht]: ["DELETE", "/datasets/{datasetId}", 202],
    [_end]: ["api."],
  },
  () => DeleteDatasetRequest,
  () => DeleteDatasetResponse
);

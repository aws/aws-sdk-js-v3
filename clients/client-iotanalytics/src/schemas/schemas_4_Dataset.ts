// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CDC,
  _CDCR,
  _CDCRr,
  _da,
  _DD,
  _DDC,
  _DDCR,
  _DDR,
  _dN,
  _DT,
  _DTa,
  _ex,
  _h,
  _hQ,
  _n,
  _S,
  _sc,
  _TD,
  _vI,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDatasetContentRequest = struct(n0, _CDCR, 0, [_dN, _vI], [[0, 1], 0]);
export var CreateDatasetContentResponse = struct(n0, _CDCRr, 0, [_vI], [0]);
export var DatasetTrigger = struct(n0, _DT, 0, [_sc, _da], [() => Schedule, () => TriggeringDataset]);
export var DeleteDatasetContentRequest = struct(
  n0,
  _DDCR,
  0,
  [_dN, _vI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
  ]
);
export var DeleteDatasetRequest = struct(n0, _DDR, 0, [_dN], [[0, 1]]);
export var Schedule = struct(n0, _S, 0, [_ex], [0]);
export var TriggeringDataset = struct(n0, _TD, 0, [_n], [0]);
export var DatasetTriggers = list(n0, _DTa, 0, () => DatasetTrigger);
export var CreateDatasetContent = op(
  n0,
  _CDC,
  {
    [_h]: ["POST", "/datasets/{datasetName}/content", 200],
  },
  () => CreateDatasetContentRequest,
  () => CreateDatasetContentResponse
);
export var DeleteDataset = op(
  n0,
  _DD,
  {
    [_h]: ["DELETE", "/datasets/{datasetName}", 204],
  },
  () => DeleteDatasetRequest,
  () => Unit
);
export var DeleteDatasetContent = op(
  n0,
  _DDC,
  {
    [_h]: ["DELETE", "/datasets/{datasetName}/content", 204],
  },
  () => DeleteDatasetContentRequest,
  () => Unit
);

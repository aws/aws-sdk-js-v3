// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AV, _AVA, _AVg, _AVL, _h, _hQ, _LAV, _LAVR, _LAVRi, _MRa, _NTe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AggregatorV2 = struct(n0, _AV, 0, [_AVA], [0]);
export var ListAggregatorsV2Request = struct(
  n0,
  _LAVR,
  0,
  [_NTe, _MRa],
  [
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MRa,
      },
    ],
  ]
);
export var ListAggregatorsV2Response = struct(n0, _LAVRi, 0, [_AVg, _NTe], [() => AggregatorV2List, 0]);
export var AggregatorV2List = list(n0, _AVL, 0, () => AggregatorV2);
export var ListAggregatorsV2 = op(
  n0,
  _LAV,
  {
    [_h]: ["GET", "/aggregatorv2/list", 200],
  },
  () => ListAggregatorsV2Request,
  () => ListAggregatorsV2Response
);

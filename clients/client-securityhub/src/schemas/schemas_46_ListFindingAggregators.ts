// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _FAA, _FAin, _FAind, _FAL, _h, _hQ, _LFAi, _LFAR, _LFARi, _MRa, _NTe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var FindingAggregator = struct(n0, _FAin, 0, [_FAA], [0]);
export var ListFindingAggregatorsRequest = struct(
  n0,
  _LFAR,
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
export var ListFindingAggregatorsResponse = struct(n0, _LFARi, 0, [_FAind, _NTe], [() => FindingAggregatorList, 0]);
export var FindingAggregatorList = list(n0, _FAL, 0, () => FindingAggregator);
export var ListFindingAggregators = op(
  n0,
  _LFAi,
  {
    [_h]: ["GET", "/findingAggregator/list", 200],
  },
  () => ListFindingAggregatorsRequest,
  () => ListFindingAggregatorsResponse
);

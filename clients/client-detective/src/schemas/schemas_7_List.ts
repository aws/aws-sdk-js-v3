// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _Ar, _CT, _G, _GL, _h, _LG, _LGR, _LGRi, _MR, _NT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Graph = struct(n0, _G, 0, [_Ar, _CT], [0, 5]);
export var ListGraphsRequest = struct(n0, _LGR, 0, [_NT, _MR], [0, 1]);
export var ListGraphsResponse = struct(n0, _LGRi, 0, [_GL, _NT], [() => GraphList, 0]);
export var GraphList = list(n0, _GL, 0, () => Graph);
export var ListGraphs = op(
  n0,
  _LG,
  {
    [_h]: ["POST", "/graphs/list", 200],
  },
  () => ListGraphsRequest,
  () => ListGraphsResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Gr, _h, _LG, _LGR, _LGRi, _MR, _NT, n0 } from "./schemas_0";
import { GroupSummaryList } from "./schemas_4_Group";

/* eslint no-var: 0 */

export var ListGroupsRequest = struct(n0, _LGR, 0, [_NT, _MR], [0, 1]);
export var ListGroupsResponse = struct(n0, _LGRi, 0, [_Gr, _NT], [() => GroupSummaryList, 0]);
export var ListGroups = op(
  n0,
  _LG,
  {
    [_h]: ["POST", "/groups", 200],
  },
  () => ListGroupsRequest,
  () => ListGroupsResponse
);

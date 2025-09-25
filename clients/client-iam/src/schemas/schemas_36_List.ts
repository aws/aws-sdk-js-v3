// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Gro, _IT, _LG, _LGR, _LGRi, _Ma, _MI, _PPa, n0 } from "./schemas_0";
import { groupListType } from "./schemas_5_Group";

/* eslint no-var: 0 */

export var ListGroupsRequest = struct(n0, _LGR, 0, [_PPa, _Ma, _MI], [0, 0, 1]);
export var ListGroupsResponse = struct(n0, _LGRi, 0, [_Gro, _IT, _Ma], [() => groupListType, 2, 0]);
export var ListGroups = op(
  n0,
  _LG,
  0,
  () => ListGroupsRequest,
  () => ListGroupsResponse
);

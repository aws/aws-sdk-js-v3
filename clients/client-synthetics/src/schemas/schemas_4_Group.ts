// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _A, _Gr, _GS, _GSL, _h, _I, _LAG, _LAGR, _LAGRi, _MR, _N, _NT, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GroupSummary = struct(n0, _GS, 0, [_I, _N, _A], [0, 0, 0]);
export var ListAssociatedGroupsRequest = struct(n0, _LAGR, 0, [_NT, _MR, _RA], [0, 1, [0, 1]]);
export var ListAssociatedGroupsResponse = struct(n0, _LAGRi, 0, [_Gr, _NT], [() => GroupSummaryList, 0]);
export var GroupSummaryList = list(n0, _GSL, 0, () => GroupSummary);
export var ListAssociatedGroups = op(
  n0,
  _LAG,
  {
    [_h]: ["POST", "/resource/{ResourceArn}/groups", 200],
  },
  () => ListAssociatedGroupsRequest,
  () => ListAssociatedGroupsResponse
);
